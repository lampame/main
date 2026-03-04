(function () {
  'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  var manifest = {
    type: 'other',
    version: '0.0.1',
    author: '@lme_chat',
    name: 'Nightingale',
    description: 'Прапор України на картках при вдалому WH API сигналі',
    component: 'nightingale'
  };
  var settings = {
    endpoint: 'https://wh.lme.isroot.in/',
    timeout: 10000,
    uiDeadline: 2200,
    queue: {
      maxParallel: 8
    },
    cache: {
      key: 'nightingale_wh_cache_v1',
      size: 3000,
      positiveTtl: 1000 * 60 * 60 * 24,
      negativeTtl: 1000 * 60 * 60 * 6
    }
  };
  function debounce(func, wait) {
    var timer;
    return function debounced() {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function applyDebounce() {
        func.apply(context, args);
      }, wait);
    };
  }
  function Cache(config) {
    var self = this;
    var storage = {};
    function cleanupExpired() {
      var now = Date.now();
      var keys = Object.keys(storage);
      var changed = false;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var node = storage[key];
        if (!node || !node.timestamp || typeof node.value !== 'boolean') {
          delete storage[key];
          changed = true;
          continue;
        }
        var ttl = node.value ? config.positiveTtl : config.negativeTtl;
        if (node.timestamp <= now - ttl) {
          delete storage[key];
          changed = true;
        }
      }
      if (changed) self.save();
    }
    function shrinkIfNeeded() {
      var keys = Object.keys(storage);
      if (keys.length < config.size) return;
      var sorted = keys.map(function (key) {
        return {
          key: key,
          timestamp: storage[key] && storage[key].timestamp ? storage[key].timestamp : 0
        };
      }).sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
      var removeCount = Math.ceil(sorted.length * 0.4);
      for (var i = 0; i < removeCount; i++) {
        delete storage[sorted[i].key];
      }
    }
    self.save = debounce(function saveCache() {
      Lampa.Storage.set(config.key, storage);
    }, 400);
    self.init = function init() {
      storage = Lampa.Storage.get(config.key, {}) || {};
      cleanupExpired();
      self.init = function noop() {};
    };
    self.get = function get(id) {
      var node = storage[id];
      if (!node || !node.timestamp || typeof node.value !== 'boolean') return null;
      var ttl = node.value ? config.positiveTtl : config.negativeTtl;
      if (node.timestamp > Date.now() - ttl) {
        return node.value;
      }
      delete storage[id];
      self.save();
      return null;
    };
    self.set = function set(id, value) {
      cleanupExpired();
      shrinkIfNeeded();
      storage[id] = {
        timestamp: Date.now(),
        value: !!value
      };
      self.save();
    };
  }
  var requestQueue = {
    activeCount: 0,
    queue: [],
    maxParallel: settings.queue.maxParallel,
    add: function add(task) {
      this.queue.push(task);
      this.process();
    },
    process: function process() {
      var _this = this;
      while (this.activeCount < this.maxParallel && this.queue.length) {
        var task = this.queue.shift();
        this.activeCount++;
        Promise.resolve().then(task)["catch"](function noop() {})["finally"](function () {
          _this.activeCount--;
          _this.process();
        });
      }
    }
  };
  var inflight = {};
  var cache = null;
  function getTmdbId(data) {
    var id = parseInt(data && data.id, 10);
    if (!Number.isFinite(id) || id <= 0) return null;
    return id;
  }
  function detectMediaKind(data) {
    if (!data) return null;
    var mediaType = String(data.media_type || '').toLowerCase();
    if (mediaType === 'tv' || mediaType === 'movie') return mediaType;
    if (data.original_name || data.first_air_date || data.number_of_seasons) return 'tv';
    if (data.title || data.original_title || data.release_date) return 'movie';
    return null;
  }
  function createMediaMeta(data) {
    var tmdbId = getTmdbId(data);
    var mediaKind = detectMediaKind(data);
    if (!tmdbId || !mediaKind) return null;
    return {
      tmdbId: tmdbId,
      mediaKind: mediaKind,
      serial: mediaKind === 'tv' ? 1 : 0,
      cacheKey: mediaKind + ':' + tmdbId
    };
  }
  function buildUrl(meta) {
    return settings.endpoint + '?tmdb_id=' + encodeURIComponent(meta.tmdbId) + '&serial=' + meta.serial + '&silent=true';
  }
  function isObject(value) {
    return value && _typeof(value) === 'object' && !Array.isArray(value);
  }
  function isTruthyString(value) {
    return typeof value === 'string' && value.trim().length > 0;
  }
  function isSuccessResponse(response) {
    if (response === true) return true;
    if (!isObject(response)) return false;
    if (response.error || response.status === 'error' || response.success === false || response.ok === false) {
      return false;
    }
    if (response.success === true || response.status === 'success' || response.ok === true) {
      return true;
    }
    if (isTruthyString(response.play)) return true;
    if (response.data === true) return true;
    if (isObject(response.data)) {
      var data = response.data;
      if (data.error || data.status === 'error' || data.success === false || data.ok === false) {
        return false;
      }
      if (data.success === true || data.status === 'success' || data.ok === true) {
        return true;
      }
      if (isTruthyString(data.play)) return true;
      if (Object.keys(data).length) return true;
    }
    return Object.keys(response).length > 0;
  }
  function requestFlag(meta) {
    return new Promise(function (resolve, reject) {
      Lampa.Network.silent(buildUrl(meta), function (response) {
        resolve(isSuccessResponse(response));
      }, function () {
        reject(new Error('Nightingale network error'));
      }, null, {
        timeout: settings.timeout
      });
    });
  }
  function resolveWithUiDeadline(promise, timeout) {
    return new Promise(function (resolve) {
      var settled = false;
      var timeoutId = null;
      var finish = function finish(value) {
        if (settled) return;
        settled = true;
        if (timeoutId) clearTimeout(timeoutId);
        resolve(!!value);
      };
      timeoutId = setTimeout(function () {
        finish(false);
      }, timeout);
      Promise.resolve(promise).then(function (value) {
        finish(value);
      })["catch"](function () {
        finish(false);
      });
    });
  }
  function renderFlag(card) {
    if (!card || typeof card.render !== 'function') return;
    var root = card.render(true);
    if (!root || !root.querySelector) return;
    if (root.querySelector('.nightingale-ua-flag')) return;
    var view = root.querySelector('.card__view');
    if (!view) return;
    var badge = document.createElement('div');
    badge.className = 'nightingale-ua-flag';
    var stripe = document.createElement('span');
    stripe.className = 'nightingale-ua-flag__inner';
    badge.appendChild(stripe);
    view.appendChild(badge);
  }
  function loadFlag(meta) {
    if (!inflight[meta.cacheKey]) {
      inflight[meta.cacheKey] = new Promise(function (resolve) {
        requestQueue.add(function queueTask() {
          return requestFlag(meta).then(function (isSuccess) {
            cache.set(meta.cacheKey, isSuccess);
            resolve(isSuccess);
          })["catch"](function () {
            cache.set(meta.cacheKey, false);
            resolve(false);
          })["finally"](function () {
            delete inflight[meta.cacheKey];
          });
        });
      });
    }
    return resolveWithUiDeadline(inflight[meta.cacheKey], settings.uiDeadline);
  }
  function onCardVisible(card) {
    if (!card || !card.data || !cache) return;
    if (card.data.source && card.data.source !== 'tmdb' && card.data.source !== 'cub') return;
    var meta = createMediaMeta(card.data);
    if (!meta) return;
    var cached = cache.get(meta.cacheKey);
    if (cached === true) {
      renderFlag(card);
      return;
    }
    if (cached === false) return;
    loadFlag(meta).then(function (isSuccess) {
      if (isSuccess) renderFlag(card);
    });
  }
  function patchCardVisible() {
    var cardMap = Lampa.Maker && Lampa.Maker.map ? Lampa.Maker.map('Card') : null;
    if (!cardMap || !cardMap.Card || typeof cardMap.Card.onVisible !== 'function') return;
    if (cardMap.Card.nightingalePatched) return;
    var original = cardMap.Card.onVisible;
    cardMap.Card.onVisible = function patchedVisible() {
      original.apply(this, arguments);
      onCardVisible(this);
    };
    cardMap.Card.nightingalePatched = true;
  }
  function appendStyles() {
    if (document.getElementById('nightingale-style')) return;
    Lampa.Template.add('nightingale_style', "<style id='nightingale-style'>.nightingale-ua-flag{position:absolute;top:.45em;right:.45em;width:2.1em;height:1.35em;-webkit-border-radius:.22em;border-radius:.22em;border:1px solid rgba(255,255,255,0.4);overflow:hidden;z-index:2;pointer-events:none;-webkit-box-shadow:0 .14em .45em rgba(0,0,0,0.42);box-shadow:0 .14em .45em rgba(0,0,0,0.42)}.nightingale-ua-flag__inner{display:block;width:100%;height:100%;background:-webkit-gradient(linear,left top,left bottom,color-stop(50%,#0057b8),color-stop(50%,#ffd700));background:-webkit-linear-gradient(top,#0057b8 50%,#ffd700 50%);background:-o-linear-gradient(top,#0057b8 50%,#ffd700 50%);background:linear-gradient(180deg,#0057b8 50%,#ffd700 50%)}</style>");
    $('body').append(Lampa.Template.get('nightingale_style', {}, true));
  }
  function add() {
    Lampa.Manifest.plugins = manifest;
    cache = new Cache(settings.cache);
    cache.init();
    appendStyles();
    patchCardVisible();
  }
  function startPlugin() {
    window.plugin_nightingale_ready = true;
    if (window.appready) add();else {
      Lampa.Listener.follow('app', function appReady(event) {
        if (event.type === 'ready') add();
      });
    }
  }
  if (!window.plugin_nightingale_ready) {
    startPlugin();
  }

  return startPlugin;

})();
