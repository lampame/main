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

  // plugins/vinyl/api.js — JioSaavn API wrapper

  var PROXY_BASE = 'https://vinyl-self.vercel.app';
  var DEST_PROXY = 'https://apx.lme.isroot.in/destination/';
  var JAMMIFY_BASE = 'https://jammify-music.vercel.app';
  function getProxyBase() {
    var stored = Lampa.Storage.get('LME_VinylBase', '');
    return stored || PROXY_BASE;
  }
  function Api() {
    var network = new Lampa.Reguest();

    /**
     * Получить подборку плейлистов
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getFeaturedPlaylists = function (page, oncomplite, onerror) {
      var url = 'https://cors.io/?url=' + encodeURIComponent('https://www.jiosaavn.com/api.php?__call=content.getFeaturedPlaylists' + '&fetch_from_serialized_files=true' + '&p=' + page + '&n=12' + '&api_version=4' + '&ctx=web6dot0' + '&languages=english');
      network["native"](url, function (raw) {
        var data = Api.parseResponse(raw);
        if (data && data.data) oncomplite(data.data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      }, false, {
        dataType: 'text'
      });
    };

    /**
     * Получить альбомы
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getAlbums = function (page, oncomplite, onerror) {
      var url = 'https://cors.io/?url=' + encodeURIComponent('https://www.jiosaavn.com/api.php?__call=content.getAlbums' + '&api_version=4' + '&n=12' + '&p=' + page + '&ctx=web6dot0' + '&languages=english,ukrainian');
      network["native"](url, function (raw) {
        var data = Api.parseResponse(raw);
        if (data && data.data) oncomplite(data.data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      }, false, {
        dataType: 'text'
      });
    };

    /**
     * Детали плейлиста через прокси
     * @param {string} id
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getPlaylistDetail = function (id, page, oncomplite, onerror) {
      var url = getProxyBase() + '/api/playlists?id=' + encodeURIComponent(id) + '&page=' + (page || 0) + '&limit=10' + '&sortBy=popularity&sortOrder=desc';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Детали альбома через прокси
     * @param {string} id
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getAlbumDetail = function (id, page, oncomplite, onerror) {
      var url = getProxyBase() + '/api/albums?id=' + encodeURIComponent(id) + '&page=' + (page || 0) + '&limit=10';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Детали исполнителя через прокси
     * @param {string} id
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getArtistDetail = function (id, oncomplite, onerror) {
      var url = getProxyBase() + '/api/artists/' + encodeURIComponent(id) + '?page=0&songCount=50&albumCount=50&sortBy=popularity&sortOrder=desc';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Пошук пісень через проксі
     * @param {string} query
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.searchSongs = function (query, page, oncomplite, onerror) {
      var url = getProxyBase() + '/api/search/songs?query=' + encodeURIComponent(query) + '&page=' + (page || 1) + '&limit=12';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Поиск плейлистов через прокси
     * @param {string} query
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.searchPlaylists = function (query, page, oncomplite, onerror) {
      var url = getProxyBase() + '/api/search/playlists?query=' + encodeURIComponent(query) + '&page=' + (page || 1) + '&limit=12';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Поиск альбомов через прокси
     * @param {string} query
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.searchAlbums = function (query, page, oncomplite, onerror) {
      var url = getProxyBase() + '/api/search/albums?query=' + encodeURIComponent(query) + '&page=' + (page || 1) + '&limit=12';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Поиск исполнителей через прокси
     * @param {string} query
     * @param {number} page
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.searchArtists = function (query, page, oncomplite, onerror) {
      var url = getProxyBase() + '/api/search/artists?query=' + encodeURIComponent(query) + '&page=' + (page || 1) + '&limit=12';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Детали трека (для получения downloadUrl)
     * @param {string} id
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getSongDetail = function (id, oncomplite, onerror) {
      var url = getProxyBase() + '/api/songs/' + encodeURIComponent(id);
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Get radio stations (featured/genre stations)
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getRadioStations = function (oncomplite, onerror) {
      var url = getProxyBase() + '/api/radio';
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Get radio tracks by genre name
     * @param {string} name
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getRadioGenre = function (name, oncomplite, onerror) {
      var url = getProxyBase() + '/api/radio/genre/' + encodeURIComponent(name);
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Get radio tracks by artist
     * @param {string} name
     * @param {string} artistId
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getRadioArtist = function (name, artistId, oncomplite, onerror) {
      var url = getProxyBase() + '/api/radio/artist/' + encodeURIComponent(name) + '/' + encodeURIComponent(artistId);
      network["native"](url, function (json) {
        var data = Api.unwrap(json);
        if (data) oncomplite(data);else if (onerror) onerror();
      }, function (a, c) {
        if (onerror) onerror(a, c);
      });
    };

    /**
     * Get all genres from Jammify
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getGenres = function (oncomplite, onerror) {
      var url = DEST_PROXY + encodeURIComponent(JAMMIFY_BASE + '/api/genres');
      network["native"](url, function (raw) {
        try {
          var json = JSON.parse(raw);
          var data = Api.unwrap(json);
          if (data) oncomplite(data);else if (onerror) onerror();
        } catch (e) {
          if (onerror) onerror();
        }
      }, function (a, c) {
        if (onerror) onerror(a, c);
      }, false, {
        dataType: 'text'
      });
    };

    /**
     * Get genre detail with sections from Jammify
     * @param {string} genreId
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getGenreDetail = function (genreId, oncomplite, onerror) {
      var url = DEST_PROXY + encodeURIComponent(JAMMIFY_BASE + '/api/genres/' + encodeURIComponent(genreId));
      network["native"](url, function (raw) {
        try {
          var json = JSON.parse(raw);
          var data = Api.unwrap(json);
          if (data) oncomplite(data);else if (onerror) onerror();
        } catch (e) {
          if (onerror) onerror();
        }
      }, function (a, c) {
        if (onerror) onerror(a, c);
      }, false, {
        dataType: 'text'
      });
    };

    /**
     * Get section playlists from Jammify with pagination
     * @param {string} sectionId
     * @param {number} page
     * @param {number} limit
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getSectionPlaylists = function (sectionId, page, limit, oncomplite, onerror) {
      var url = DEST_PROXY + encodeURIComponent(JAMMIFY_BASE + '/api/spotify-playlists?sectionId=' + encodeURIComponent(sectionId) + '&limit=' + limit + '&page=' + page);
      network["native"](url, function (raw) {
        try {
          var json = JSON.parse(raw);
          var data = Api.unwrap(json);
          var meta = {
            count: json.count,
            total: json.total,
            page: json.page,
            hasMore: json.hasMore
          };
          if (data) oncomplite(data, meta);else if (onerror) onerror();
        } catch (e) {
          if (onerror) onerror();
        }
      }, function (a, c) {
        if (onerror) onerror(a, c);
      }, false, {
        dataType: 'text'
      });
    };

    /**
     * Get playlist by ID from Jammify
     * @param {string} playlistId
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getPlaylistById = function (playlistId, oncomplite, onerror) {
      var url = DEST_PROXY + encodeURIComponent(JAMMIFY_BASE + '/api/playlists/' + encodeURIComponent(playlistId));
      network["native"](url, function (raw) {
        try {
          var json = JSON.parse(raw);
          var data = Api.unwrap(json);
          if (data) oncomplite(data);else if (onerror) onerror();
        } catch (e) {
          if (onerror) onerror();
        }
      }, function (a, c) {
        if (onerror) onerror(a, c);
      }, false, {
        dataType: 'text'
      });
    };

    /**
     * Get songs by IDs with batched requests (50 per batch) through proxy
     * @param {string[]} ids
     * @param {function} oncomplite
     * @param {function} onerror
     */
    this.getSongsByIds = function (ids, oncomplite, onerror) {
      if (!Array.isArray(ids) || !ids.length) {
        if (onerror) onerror();
        return;
      }
      var allSongs = [];
      var chunkSize = 50;
      var current = 0;
      function loadNext() {
        var chunk = ids.slice(current, current + chunkSize);
        if (!chunk.length) {
          oncomplite(allSongs);
          return;
        }
        var url = getProxyBase() + '/api/songs?ids=' + chunk.join(',');
        network["native"](url, function (json) {
          var data = Api.unwrap(json);
          if (Array.isArray(data)) {
            allSongs = allSongs.concat(data);
          }
          current += chunkSize;
          loadNext();
        }, function (a, c) {
          if (onerror) onerror(a, c);
        });
      }
      loadNext();
    };

    /**
     * Очистить сетевые запросы
     */
    this.destroy = function () {
      network.clear();
    };
  }

  /**
   * Универсальный unwrap для прокси-ответов формата {success: true, data: ...}
   * @param {object} response
   * @returns {*}
   */
  Api.unwrap = function (response) {
    if (!response) return null;
    // JioSaavn proxy returns {success: true, data: {...}}
    if (response.success && response.data !== undefined) {
      var data = response.data;
      // Some endpoints wrap single object in array: {success, data: [{...}]}
      if (Array.isArray(data) && data.length > 0 && _typeof(data[0]) === 'object' && !Array.isArray(data[0])) {
        // If the entire response was a single-item array, return that one item.
        // For multi-item arrays (search results), return the whole array.
        return data.length === 1 ? data[0] : data;
      }
      return data;
    }
    return response;
  };

  /**
   * Parse JioSaavn API response.
   * Handles JioSaavn `/*-secure-` prefix and cors.io proxy wrapper format.
   * cors.io returns {url, status, headers, body: "..."} where body is stringified JSON.
   * @param {string} raw
   * @returns {object|null}
   */
  Api.parseResponse = function (raw) {
    if (!raw) return null;
    try {
      // Strip JioSaavn security prefix
      var cleaned = raw.replace(/^\/\*-secure-\n?/, '').replace(/\n$/, '');
      var parsed = JSON.parse(cleaned);
      // Unwrap cors.io proxy format: {url, status, headers, body: "..."}
      if (parsed && typeof parsed.body === 'string') {
        try {
          return JSON.parse(parsed.body);
        } catch (e) {
          return parsed;
        }
      }
      // If body is already an object (some proxy variants), return it directly
      if (parsed && parsed.body && _typeof(parsed.body) === 'object') {
        return parsed.body;
      }
      return parsed;
    } catch (e) {
      try {
        return JSON.parse(raw);
      } catch (e2) {
        return null;
      }
    }
  };

  /**
   * Получить URL трека по качеству
   * @param {Array} downloadUrl
   * @param {string} quality - '12', '48', '96', '160', '320'
   * @returns {string}
   */
  Api.getQualityUrl = function (downloadUrl, quality) {
    if (!downloadUrl || !downloadUrl.length) return '';
    var q = String(quality || Lampa.Storage.get('vinyl_quality', '320'));
    var found = downloadUrl.find(function (item) {
      return String(item.quality).indexOf(q) >= 0;
    });
    if (found) return found.url || found.link || '';
    // fallback — последний (самый высокий)
    var last = downloadUrl[downloadUrl.length - 1];
    return last.url || last.link || '';
  };

  /**
   * Extract artist name(s) from JioSaavn API album/item using more_info.artistMap
   * Falls back to subtitle, artist, or primaryArtists fields.
   * @param {object} item
   * @returns {string}
   */
  Api.extractArtist = function (item) {
    if (!item) return '';
    if (item.more_info && item.more_info.artistMap) {
      var primary = item.more_info.artistMap.primary_artists;
      if (primary && primary.length) {
        return primary.map(function (a) {
          return a.name;
        }).join(', ');
      }
      var artists = item.more_info.artistMap.artists;
      if (artists && artists.length) {
        return artists.map(function (a) {
          return a.name;
        }).join(', ');
      }
    }
    return item.subtitle || item.artist || item.primaryArtists || '';
  };

  /**
   * Decode HTML entities in API response strings (&quot; &amp; &lt; &gt; &#x27; etc.)
   * @param {string} str
   * @returns {string}
   */
  Api.decodeHtml = function (str) {
    if (!str || typeof str !== 'string') return str || '';
    return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
  };
  var instance = null;
  Api.init = function () {
    instance = new Api();
  };
  Api.get = function () {
    if (!instance) instance = new Api();
    return instance;
  };

  // plugins/vinyl/lib/card.js — Card item following radio/item.js pattern

  // BUG FIX #2 #5 #6: JioSaavn API returns `image` as an array of quality objects:
  // [{quality:"50x50", url:"..."}, {quality:"150x150", url:"..."}, {quality:"500x500", url:"..."}]
  // Setting img.src = array → "[object Array]" → broken image.
  // resolveImage() picks the highest available quality url.
  function resolveImage$5(raw) {
    if (!raw) return '';
    if (Array.isArray(raw)) {
      // Prefer 500x500, then last item (highest), then first
      var hi = raw.find(function (i) {
        return i.quality === '500x500';
      }) || raw.find(function (i) {
        return i.quality === '150x150';
      }) || raw[raw.length - 1] || raw[0];
      return hi && hi.url ? hi.url : '';
    }
    return typeof raw === 'string' ? raw : '';
  }
  function Card(data) {
    var item = Lampa.Template.get('vinyl_card', {
      title: Api.decodeHtml(data.title || data.name || 'Unknown'),
      subtitle: Api.decodeHtml(data.subtitle || data.artist || data.language || '')
    });
    var img = item.find('.card__img')[0];
    img.onerror = function () {
      img.src = './img/img_broken.svg';
    };
    var imgSrc = resolveImage$5(data.image) || resolveImage$5(data.picture) || data.logo || '';
    if (imgSrc) img.src = imgSrc;
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      img.onerror = function () {};
      img.onload = function () {};
      img.src = '';
      item.remove();
    };
  }

  // plugins/vinyl/lib/line.js — Line component following radio/line.js pattern
  function Line(data) {
    var content = Lampa.Template.get('items_line', {
      title: data.title
    });
    var body = content.find('.items-line__body');
    var scroll = new Lampa.Scroll({
      horizontal: true,
      step: 300
    });
    var items = [];
    var last;
    var currentPage = data.page || 1;
    var isLoadingMore = false;
    var _lineId = data.id ? 'vinyl_line_' + data.id : 'vinyl_line_' + Math.random().toString(36).slice(2, 10);
    this.create = function () {
      content.addClass('vinyl-line');
      scroll.render().find('.scroll__body').addClass('items-cards');
      content.find('.items-line__title').text(data.title);

      // Add native "more" button in the line header (like ContentRows)
      if (data.loadMore || data.onMore) {
        var headMore = $('<div class="items-line__more selector">' + Lampa.Lang.translate('more') + '</div>');
        headMore.on('hover:enter', function () {
          if (data.onMore) data.onMore();
        });
        content.find('.items-line__head').append(headMore);
      }
      var results = data.results || [];
      var displayResults = results;
      if ((data.loadMore || data.onMore) && results.length > 11) {
        displayResults = results.slice(0, 11);
      }
      displayResults.forEach(this.append.bind(this));

      // Add "more" card at the end:
      // - onMore: always (navigates to full view)
      // - loadMore: only when results > 11 (items beyond first page)
      var showMore = data.onMore || data.loadMore && results.length > 11;
      if (showMore) {
        var moreCard = $('<div class="card-more selector">' + '<div class="card-more__box">' + '<div class="card-more__title">' + Lampa.Lang.translate('more') + '</div>' + '</div>' + '</div>');
        moreCard.on('hover:focus', function () {
          last = moreCard[0];
          scroll.update(moreCard, true);
        }).on('hover:enter', function () {
          if (data.onMore) data.onMore();
        });
        scroll.append(moreCard);
      }
      body.append(scroll.render());
    };
    this.append = function (element) {
      var card = new Card(element);
      card.render().on('hover:focus', function () {
        last = card.render()[0];
        items.indexOf(card);
        scroll.update(card.render(), true);

        // Auto-load more when near end (only for loadMore pattern)
        if (data.loadMore && !isLoadingMore) {
          var idx = items.indexOf(card);
          if (idx >= items.length - 2) {
            isLoadingMore = true;
            currentPage++;
            data.loadMore(currentPage, function (more) {
              isLoadingMore = false;
              if (more && more.length) {
                data.results = data.results.concat(more);
                more.forEach(function (el) {
                  var newCard = new Card(el);
                  newCard.render().on('hover:focus', function () {
                    last = newCard.render()[0];
                    items.indexOf(newCard);
                    scroll.update(newCard.render(), true);
                  }).on('hover:enter', function () {
                    if (data.onSelect) data.onSelect(el);
                  }).on('hover:long', function () {
                    if (data.onLong) data.onLong(el);
                  });
                  scroll.append(newCard.render());
                  items.push(newCard);
                });
              }
            });
          }
        }
      }).on('hover:enter', function () {
        if (data.onSelect) data.onSelect(element);
      }).on('hover:long', function () {
        if (data.onLong) data.onLong(element);
      });
      scroll.append(card.render());
      items.push(card);
    };
    this.toggle = function () {
      Lampa.Controller.add(_lineId, {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else if (this.onLeft) this.onLeft();else Lampa.Controller.toggle('menu');
        },
        down: this.onDown,
        up: this.onUp,
        gone: function gone() {},
        back: this.onBack
      });
      Lampa.Controller.toggle(_lineId);
    };
    this.render = function () {
      return content;
    };
    this.destroy = function () {
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      content.remove();
      items = null;
    };
  }

  // lib/butterchurn-viz.js — MilkDrop visualizer overlay for vinyl player
  // Uses butterchurn (WebGL2 MilkDrop implementation) to render audio-reactive
  // visualizations on a canvas overlay above the video element.
  //
  // Uses captureStream() to get audio from <video> instead of
  // createMediaElementSource() to avoid conflict with Lampa's normalization module.

  var butterchurn = null;
  var presets = null;
  var visualizer = null;
  var audioContext = null;
  var containerEl = null;
  var canvasEl = null;
  var animFrameId = null;
  var isActive$1 = false;
  var isLoaded = false;
  var isLoading = false;
  var loadedCallbacks = [];
  var currentPresetName = 'random';
  var presetNames = [];
  var autoSwitchTimer = null;
  var _visibilityHandlerAdded = false;
  var _handleVisibilityChangeFn = null;
  function isSupported() {
    return typeof WebGL2RenderingContext !== 'undefined';
  }
  function loadLibrary(callback) {
    if (isLoaded) {
      if (callback) callback();
      return;
    }
    if (callback) loadedCallbacks.push(callback);
    if (isLoading) return;
    isLoading = true;
    var bcScript = document.createElement('script');
    bcScript.src = 'https://unpkg.com/butterchurn@2.6.7/lib/butterchurn.js';
    bcScript.onload = function () {
      var pScript = document.createElement('script');
      pScript.src = 'https://unpkg.com/butterchurn-presets@2.4.7/lib/butterchurnPresetsMinimal.min.js';
      pScript.onload = function () {
        isLoaded = true;
        isLoading = false;
        butterchurn = window.butterchurn["default"] || window.butterchurn;
        var pm = window.butterchurnPresetsMinimal;
        presets = pm && pm["default"] ? pm["default"] : pm;
        if (presets && presets.getPresets) {
          var allPresets = presets.getPresets();
          presetNames = Object.keys(allPresets);
        }
        var cbs = loadedCallbacks.slice();
        loadedCallbacks = [];
        cbs.forEach(function (cb) {
          cb();
        });
      };
      document.head.appendChild(pScript);
    };
    document.head.appendChild(bcScript);
  }
  function getAudioContext() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
  }
  function getPlayerContainer() {
    var playerEl = null;
    if (Lampa.Player && Lampa.Player.render) {
      playerEl = Lampa.Player.render();
      if (typeof playerEl === 'function') playerEl = playerEl();
      if (playerEl && playerEl.jquery) playerEl = playerEl[0];
    }
    if (!playerEl) playerEl = document.querySelector('.player');
    if (!playerEl) playerEl = document.body;
    // Use the video wrapper or player itself
    var videoWrap = playerEl.querySelector('.player-video');
    return videoWrap || playerEl;
  }
  function createContainer() {
    if (containerEl) return containerEl;
    containerEl = document.createElement('div');
    containerEl.className = 'vinyl-visualizer';
    canvasEl = document.createElement('canvas');
    canvasEl.width = 1280;
    canvasEl.height = 720;
    containerEl.appendChild(canvasEl);
    return containerEl;
  }

  // Ensure container/canvas exists, create if needed. Returns false if player DOM not ready.
  // Checks parentNode so re-attachment works when Lampa switches window-mode/PIP and
  // the DOM structure changes — the container may still exist in memory but be orphaned.
  function ensureContainer() {
    var parent = getPlayerContainer();
    if (!parent) return false;
    if (containerEl) {
      // Re-attach if orphaned or parent changed (e.g. window-mode/PIP on Android)
      if (!containerEl.parentNode || containerEl.parentNode !== parent) {
        parent.appendChild(containerEl);
      }
      return true;
    }
    containerEl = createContainer();
    parent.appendChild(containerEl);
    return true;
  }
  function updateCanvasSize() {
    if (!canvasEl || !visualizer) return;
    var parent = canvasEl.parentNode;
    if (!parent) return;
    var rect = parent.getBoundingClientRect();
    if (!rect || !rect.width) return;
    var w = Math.round(rect.width * (window.devicePixelRatio || 1));
    var h = Math.round(rect.height * (window.devicePixelRatio || 1));
    if (canvasEl.width !== w || canvasEl.height !== h) {
      canvasEl.width = w;
      canvasEl.height = h;
      if (visualizer.setRendererSize) {
        visualizer.setRendererSize(w, h);
      }
    }
  }
  function connectAudio() {
    return new Promise(function (resolve) {
      if (!visualizer) {
        resolve(false);
        return;
      }
      var videoEl = Lampa.PlayerVideo && Lampa.PlayerVideo.video();
      if (!videoEl) {
        resolve(false);
        return;
      }
      var ctx = getAudioContext();
      function doConnect() {
        try {
          // Primary: createMediaElementSource — standard butterchurn approach.
          // This REPLACES the element's internal audio routing with the AudioContext graph,
          // so we MUST connect to destination for audio to reach speakers.
          var source = ctx.createMediaElementSource(videoEl);
          source.connect(ctx.destination); // Route to speakers
          visualizer.connectAudio(source); // Route to visualizer's FFT analyser
          resolve(true);
        } catch (e) {
          // Fallback: captureStream when createMediaElementSource is already taken
          // by Lampa's normalization module. captureStream is non-destructive —
          // the original element continues playing audio normally.
          try {
            if (typeof videoEl.captureStream === 'function') {
              var stream = videoEl.captureStream();
              if (stream && stream.getAudioTracks && stream.getAudioTracks().length > 0) {
                var source = ctx.createMediaStreamSource(stream);
                visualizer.connectAudio(source);
                // No need to connect to destination — original audio path is unaffected
                resolve(true);
                return;
              }
            }
          } catch (e2) {}
          resolve(false);
        }
      }

      // Resume AudioContext if suspended (required by browser autoplay policy).
      // ctx.resume() is async; audio doesn't flow through a suspended context.
      // Await the promise before connecting audio graph and starting render loop.
      if (ctx.state === 'suspended') {
        ctx.resume().then(function () {
          doConnect();
        })["catch"](function () {
          doConnect();
        });
      } else {
        doConnect();
      }
    });
  }
  function startRenderLoop() {
    if (animFrameId) return;
    function render() {
      if (!visualizer || !isActive$1) {
        animFrameId = null;
        return;
      }
      visualizer.render();
      animFrameId = requestAnimationFrame(render);
    }
    render();
  }
  function stopRenderLoop() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }
  function loadPreset(name) {
    if (!visualizer || !presets) return;
    var allPresets = presets.getPresets();
    var presetMap = null;
    if (name === 'random' || !name || !allPresets[name]) {
      var names = Object.keys(allPresets);
      if (names.length === 0) return;
      var idx = Math.floor(Math.random() * names.length);
      currentPresetName = names[idx];
      presetMap = allPresets[currentPresetName];
    } else {
      currentPresetName = name;
      presetMap = allPresets[name];
    }
    if (presetMap) {
      visualizer.loadPreset(presetMap, 2.0);
    }
  }
  function startAutoSwitch() {
    stopAutoSwitch();
    autoSwitchTimer = setInterval(function () {
      if (isActive$1 && visualizer && presets) {
        loadPreset('random');
      }
    }, 30000);
  }
  function stopAutoSwitch() {
    if (autoSwitchTimer) {
      clearInterval(autoSwitchTimer);
      autoSwitchTimer = null;
    }
  }
  function handleVisibility(visible) {
    if (!containerEl) return;
    containerEl.style.display = visible ? 'block' : 'none';
  }
  function handleVideoPlaying() {
    if (isActive$1) return;
    var enabled = Lampa.Storage.get('vinyl_visualizer', false);
    if (enabled) {
      isActive$1 = true;
      startRenderLoop();
      startAutoSwitch();
    }
  }
  function handleVideoPause() {
    pause();
  }

  // --- Public API ---

  function init$1() {
    if (!isSupported()) return;
    // Container is created lazily on first start() call when player DOM exists.
  }
  function start() {
    var enabled = Lampa.Storage.get('vinyl_visualizer', false);
    if (!enabled || !isSupported()) return;
    if (!ensureContainer()) return;

    // Update canvas size immediately — window may have changed since last call
    updateCanvasSize();

    // One-time visibilitychange listener: re-attaches container when returning
    // from window-mode/PIP (DOM structure changes on Android).
    if (!_visibilityHandlerAdded) {
      _visibilityHandlerAdded = true;
      _handleVisibilityChangeFn = function handleVisibilityChange() {
        if (!document.hidden && isActive$1) {
          ensureContainer();
          updateCanvasSize();
          if (containerEl && containerEl.parentNode && !animFrameId) {
            startRenderLoop();
          }
        }
      };
      document.addEventListener('visibilitychange', _handleVisibilityChangeFn);
    }
    handleVisibility(true);
    isActive$1 = true;

    // Listen for play/pause on the video element
    var videoEl = Lampa.PlayerVideo && Lampa.PlayerVideo.video();
    if (videoEl) {
      videoEl.addEventListener('playing', handleVideoPlaying);
      videoEl.addEventListener('pause', handleVideoPause);
    }
    loadLibrary(function () {
      if (!visualizer) {
        if (!createVisualizer()) return;
      }
      connectAudio().then(function (success) {
        if (success) {
          updateCanvasSize();
          startRenderLoop();
          startAutoSwitch();
        } else {
          // No audio connection — fall back: hide visualization
          stop();
        }
      });
    });
  }
  function createVisualizer() {
    if (visualizer) return true;
    if (!butterchurn || !canvasEl) return false;
    try {
      var viz = butterchurn.createVisualizer(getAudioContext(), canvasEl, {
        width: canvasEl.width,
        height: canvasEl.height,
        meshWidth: 64,
        meshHeight: 48,
        pixelRatio: window.devicePixelRatio || 1
      });
      visualizer = viz;
      if (presets) {
        loadPreset('random');
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  function pause() {
    isActive$1 = false;
    stopRenderLoop();
    stopAutoSwitch();
  }
  function resume() {
    var enabled = Lampa.Storage.get('vinyl_visualizer', false);
    if (!enabled || !isSupported()) return;
    if (!visualizer) return;
    ensureContainer();
    isActive$1 = true;
    startRenderLoop();
    startAutoSwitch();
    handleVisibility(true);
  }
  function stop() {
    isActive$1 = false;
    stopRenderLoop();
    stopAutoSwitch();
    handleVisibility(false);
  }
  function destroy() {
    stop();

    // Remove video event listeners
    var videoEl = Lampa.PlayerVideo && Lampa.PlayerVideo.video();
    if (videoEl) {
      videoEl.removeEventListener('playing', handleVideoPlaying);
      videoEl.removeEventListener('pause', handleVideoPause);
    }
    if (visualizer) {
      try {
        visualizer.destroy();
      } catch (e) {}
      visualizer = null;
    }
    if (containerEl && containerEl.parentNode) {
      containerEl.parentNode.removeChild(containerEl);
    }
    containerEl = null;
    canvasEl = null;
    if (audioContext) {
      try {
        audioContext.close();
      } catch (e) {}
      audioContext = null;
    }

    // Remove visibilitychange listener added in start()
    if (_handleVisibilityChangeFn) {
      document.removeEventListener('visibilitychange', _handleVisibilityChangeFn);
      _handleVisibilityChangeFn = null;
      _visibilityHandlerAdded = false;
    }
    isLoaded = false;
    isLoading = false;
    isActive$1 = false;
    butterchurn = null;
    presets = null;
    presetNames = [];
    currentPresetName = 'random';
  }
  function switchPreset(name) {
    if (!visualizer || !presets) return;
    loadPreset(name || 'random');
  }
  function getPresetNames() {
    return presetNames.slice();
  }
  var ButterchurnViz = {
    isSupported: isSupported,
    init: init$1,
    start: start,
    stop: stop,
    pause: pause,
    resume: resume,
    destroy: destroy,
    switchPreset: switchPreset,
    getPresetNames: getPresetNames,
    loadLibrary: loadLibrary
  };

  // plugins/vinyl/player.js — Player with auto-load next track
  var currentPlaylist = [];
  var currentIndex = 0;

  // --- Download speed monitoring for PlayerInfo ---
  function formatSpeed(bps) {
    if (bps >= 1000000) return (bps / 1000000).toFixed(1) + ' Mbps';
    if (bps >= 1000) return (bps / 1000).toFixed(0) + ' kbps';
    return bps.toFixed(0) + ' bps';
  }
  var speedMonitor = {
    timer: null,
    startQual: '320',
    start: function start(videoEl, quality) {
      this.stop();
      this.startQual = quality || '320';
      var startTime = Date.now();
      this.timer = setInterval(function () {
        if (!videoEl || !videoEl.buffered || videoEl.buffered.length === 0) return;
        try {
          var bufferedEnd = videoEl.buffered.end(videoEl.buffered.length - 1);
          if (bufferedEnd <= 0) return;
          var bitrateBps = parseInt(speedMonitor.startQual) * 1000;
          var estimatedBytes = bufferedEnd * bitrateBps / 8;
          var elapsedSec = (Date.now() - startTime) / 1000;
          if (elapsedSec <= 0) return;
          var speedBps = estimatedBytes * 8 / elapsedSec;
          var speedText = formatSpeed(speedBps);
          var speedEl = document.querySelector('.value--speed span');
          if (speedEl) speedEl.textContent = speedText;
        } catch (e) {}
      }, 2000);
    },
    stop: function stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  };
  // vinylOrigSend removed — we use follow() pattern instead of send() monkey-patch

  // ponytail: JioSaavn API returns image as [{quality, url}, ...] not string URL.
  // Normalize to string URL at the boundary before passing to Lampa.Player.
  function normalizeImage(song) {
    var img = song.image || song.img || '';
    if (Array.isArray(img)) {
      // Prefer largest: last entry in ascending order (50×50, 150×150, 500×500)
      var best = img[img.length - 1] || img[0] || '';
      return typeof best === 'string' ? best : best && best.url ? best.url : '';
    }
    return typeof img === 'string' ? img : '';
  }
  function Player() {
    var api = Api.get();
    Lampa.Listener;

    /**
     * Play a track. Fetches downloadUrl on demand if not present.
     * @param {object} song - { id, title, subtitle, image, downloadUrl }
     * @param {Array} playlist - tracks for auto-next
     */
    this.play = function (song, playlist) {
      var quality = Lampa.Storage.get('vinyl_quality', '320');
      var url = resolveUrl(song, quality);
      if (!url) {
        // Fetch song detail to obtain downloadUrl
        if (song && song.id) {
          Lampa.Noty.show('Loading track...');
          api.getSongsByIds([song.id], function (songs) {
            var detail = songs && songs[0];
            // Api.unwrap already normalised {success,data:[{...}]} → single song object
            var downloadUrl = detail && (detail.downloadUrl || detail.download_url) || [];
            if (!Array.isArray(downloadUrl)) downloadUrl = [];
            var realUrl = Api.getQualityUrl(downloadUrl, quality);
            if (realUrl) {
              song.downloadUrl = downloadUrl;
              // ponytail: also pull image from detail — root cause fix
              if (detail) song.image = detail.image || detail.img || song.image;
              doPlay(song, playlist, realUrl, quality);
            } else {
              Lampa.Noty.show('No playable URL for: ' + (song.title || 'Unknown'));
            }
          }, function () {
            Lampa.Noty.show('No playable URL for: ' + (song.title || 'Unknown'));
          });
        } else {
          Lampa.Noty.show('No playable URL for: ' + (song.title || 'Unknown'));
        }
        return;
      }
      doPlay(song, playlist, url, quality);
    };
    function doPlay(song, playlist, url, quality) {
      currentPlaylist = playlist || [];
      currentIndex = playlist ? playlist.indexOf(song) : 0;
      if (currentIndex < 0) currentIndex = 0;
      var artistName = song.subtitle || song.artist || '';
      var songTitle = song.name || song.title || 'Unknown';
      var fullTitle = songTitle;
      if (artistName && String(songTitle).indexOf(artistName) === -1) {
        fullTitle = artistName + ' - ' + songTitle;
      }
      normalizeImage(song);

      // ponytail: omit poster_path so Footer.appendAbout skips Api.img()
      // (Api.img prepends image.tmdb.org/ — breaks external JioSaavn CDN URLs.)
      // Instead, Lampa.Player.listener.follow('ready') below sets the img src directly.
      var playData = {
        url: url,
        title: fullTitle,
        subtitle: artistName,
        card: {
          title: fullTitle,
          name: fullTitle,
          release_date: song.year || '',
          genres: [{
            name: song.language || ''
          }]
        },
        playlist: buildPlaylistItems(currentPlaylist, currentIndex, quality)
      };

      // Mark as vinyl for player listener
      playData.vinyl = true;

      // Set vinyl active flag to suppress player events for other plugins
      window.__vinyl_active = true;

      // Note: event suppression removed — use Lampa.Player.listener.follow with guard checks instead

      Lampa.Player.play(playData);
    }

    /**
     * Воспроизвести плейлист с авто-продолжением
     * @param {Array} songs - массив треков
     * @param {number} startIndex - с какого индекса начать
     */
    this.playPlaylist = function (songs, startIndex) {
      if (!songs || !songs.length) return;
      var missingIds = songs.filter(function (s) {
        return !s.downloadUrl || !s.downloadUrl.length;
      }).map(function (s) {
        return s.id;
      }).filter(Boolean);
      if (missingIds.length) {
        Lampa.Noty.show('Loading ' + missingIds.length + ' tracks...');
        api.getSongsByIds(missingIds, function (fetched) {
          if (Array.isArray(fetched)) {
            var urlMap = {};
            fetched.forEach(function (f) {
              if (f.id) urlMap[f.id] = f.downloadUrl || [];
            });
            songs.forEach(function (s) {
              if (!s.downloadUrl || !s.downloadUrl.length) {
                s.downloadUrl = urlMap[s.id] || s.downloadUrl || [];
              }
            });
          }
          currentPlaylist = songs;
          currentIndex = startIndex || 0;
          if (currentIndex >= songs.length) currentIndex = 0;
          this.play(songs[currentIndex], songs);
        }.bind(this), function () {
          // On error — still try to play
          currentPlaylist = songs;
          currentIndex = startIndex || 0;
          if (currentIndex >= songs.length) currentIndex = 0;
          this.play(songs[currentIndex], songs);
        }.bind(this));
      } else {
        currentPlaylist = songs;
        currentIndex = startIndex || 0;
        if (currentIndex >= songs.length) currentIndex = 0;
        this.play(songs[currentIndex], songs);
      }
    };

    /**
     * Получить текущую позицию в плейлисте
     */
    this.getCurrentIndex = function () {
      return currentIndex;
    };

    /**
     * Получить весь плейлист
     */
    this.getPlaylist = function () {
      return currentPlaylist;
    };

    /**
     * Остановить
     */
    this.stop = function () {
      currentPlaylist = [];
      currentIndex = 0;
      // Clear vinyl active flag — listener.send restore removed, using follow() pattern now
      window.__vinyl_active = false;
      // Stop download speed monitor
      speedMonitor.stop();
    };

    /**
     * Build playlist items for Lampa.Player from tracks
     */
    function buildPlaylistItems(songs, startIndex, quality) {
      if (!songs || !songs.length) return [];
      var q = quality || Lampa.Storage.get('vinyl_quality', '320');
      return songs.map(function (song, i) {
        var u = resolveUrl(song, q);
        var artistName = song.subtitle || song.artist || '';
        var songTitle = song.name || song.title || 'Unknown';
        var fullTitle = songTitle;
        if (artistName && String(songTitle).indexOf(artistName) === -1) {
          fullTitle = artistName + ' - ' + songTitle;
        }
        return {
          title: fullTitle,
          url: u,
          image: normalizeImage(song)
        };
      });
    }

    /**
     * Resolve track URL: downloadUrl → quality select → string URL
     */
    function resolveUrl(song, quality) {
      var q = quality || Lampa.Storage.get('vinyl_quality', '320');
      if (song.downloadUrl && song.downloadUrl.length) {
        return Api.getQualityUrl(song.downloadUrl, q);
      }
      return '';
    }
  }

  // --- Player listener: auto-next + понітейл-обхід зображення футера ---
  // 'player' on Lampa.Listener: for older Lampa versions that publish here.
  Lampa.Listener.follow('player', function (e) {
    if (e.type === 'ended') {
      if (!window.__vinyl_active) return;
      var autoNext = Lampa.Storage.field('vinyl_auto_next');
      if (autoNext !== false && currentPlaylist.length && currentIndex < currentPlaylist.length - 1) {
        currentIndex++;
        var song = currentPlaylist[currentIndex];
        if (song) setTimeout(function () {
          PlayerInst.play(song, currentPlaylist);
        }, 500);
      }
    }
  });
  var PlayerInst = null;
  Player.init = function () {
    PlayerInst = new Player();

    // ponytail: for audio-only playback the <video> element shows a black screen.
    // Set album art as the video element's background to replace the black void.
    // Also override footer img src to bypass Api.img() TMDB corruption.
    if (Lampa.Player && Lampa.Player.listener) {
      // Hook into 'create' event to force music player type
      // This runs after the compatibility layer (which strips data.launch_player)
      // but before the core checks launch_player (which sets player_need)
      Lampa.Player.listener.follow('create', function (e) {
        if (e.data && e.data.vinyl) {
          e.data.launch_player = Lampa.Storage.field('player_music') || 'inner';
        } else {
          // Non-vinyl content started — clear vinyl playlist state to prevent bleed
          currentPlaylist = [];
          currentIndex = 0;
          window.__vinyl_active = false;
          speedMonitor.stop();
        }
      });
      Lampa.Player.listener.follow('ready', function (data) {
        // data.image → auto-next (playlist item has image at top level)
        // data.vinyl + currentPlaylist → initial play (card has image)
        var videoEl = Lampa.PlayerVideo && Lampa.PlayerVideo.video();
        var imgUrl = data && (data.image || data.vinyl && currentPlaylist[currentIndex] && normalizeImage(currentPlaylist[currentIndex]));
        if (imgUrl && typeof imgUrl === 'string') {
          if (videoEl) videoEl.style.background = 'url(' + imgUrl + ') center/cover no-repeat rgb(20,20,20)';
          var footerImg = document.querySelector('.player-footer-card__poster-img');
          if (footerImg) footerImg.src = imgUrl;
        }

        // Only for vinyl tracks — avoid interfering with movies/TV shows
        if (data && data.vinyl) {
          // Set bitrate info in player info panel
          var quality = Lampa.Storage.get('vinyl_quality', '320');
          Lampa.PlayerInfo.set('bitrate', quality + ' kbps');

          // Set size info — for audio streams there are no video dimensions
          var sizeEl = document.querySelector('.value--size span');
          if (sizeEl) sizeEl.textContent = 'Audio';

          // Start download speed monitoring
          if (videoEl) {
            speedMonitor.start(videoEl, quality);
          }

          // Start butterchurn visualizer if enabled
          if (Lampa.Storage.get('vinyl_visualizer', false)) {
            ButterchurnViz.start();
          }
        }
      });
    }
  };
  Player.get = function () {
    if (!PlayerInst) PlayerInst = new Player();
    return PlayerInst;
  };

  // plugins/vinyl/lib/music-actions.js — Shared helpers for play/shuffle/detail actions

  // Normalize JioSaavn song data for the Player (JioSaavn uses .name/.primaryArtists vs .title/.subtitle)
  function normalizeSong(song) {
    return {
      id: song.id,
      name: Api.decodeHtml(song.name || song.title || 'Unknown'),
      title: Api.decodeHtml(song.name || song.title || 'Unknown'),
      subtitle: Api.decodeHtml(song.subtitle || song.primaryArtists || song.artist || ''),
      artist: Api.decodeHtml(song.artist || song.primaryArtists || ''),
      image: song.image || song.picture || '',
      duration: song.duration,
      downloadUrl: song.downloadUrl || []
    };
  }
  function playPlaylist(api, id, shuffle) {
    Lampa.Noty.show('Loading...');
    api.getPlaylistDetail(id, 0, function (data) {
      var songs = (data && data.songs ? data.songs : Array.isArray(data) ? data : []).map(normalizeSong);
      if (!songs.length) return;
      if (shuffle) songs = songs.slice().sort(function () {
        return 0.5 - Math.random();
      });
      Player.get().playPlaylist(songs, 0);
    }, function () {
      Lampa.Noty.show('Failed to load playlist');
    });
  }
  function playAlbum(api, id, shuffle) {
    Lampa.Noty.show('Loading...');
    api.getAlbumDetail(id, 0, function (data) {
      var songs = (data && data.songs ? data.songs : Array.isArray(data) ? data : []).map(normalizeSong);
      if (!songs.length) return;
      if (shuffle) songs = songs.slice().sort(function () {
        return 0.5 - Math.random();
      });
      Player.get().playPlaylist(songs, 0);
    }, function () {
      Lampa.Noty.show('Failed to load album');
    });
  }
  function playRadio(api, name, id, type, shuffle) {
    Lampa.Noty.show('Loading...');
    var loadFn = type === 'artist' ? function (cb, eb) {
      api.getRadioArtist(name, id, cb, eb);
    } : function (cb, eb) {
      api.getRadioGenre(name, cb, eb);
    };
    loadFn(function (data) {
      var tracks = Array.isArray(data) ? data : [];
      if (!tracks.length) return;
      var normalized = tracks.map(normalizeSong);
      if (shuffle) normalized = normalized.slice().sort(function () {
        return 0.5 - Math.random();
      });
      Player.get().playPlaylist(normalized, 0);
    }, function () {
      Lampa.Noty.show('Failed to load radio station');
    });
  }
  function showItemMenu(api, item, type, title, image) {
    var items = [{
      title: Lampa.Lang.translate('vinyl_play'),
      onSelect: function onSelect() {
        if (type === 'playlist') playPlaylist(api, item.id, false);else if (type === 'album') playAlbum(api, item.id, false);else if (type === 'radio') playRadio(api, item.name || item.title || '', item.id, item.type || 'genre', false);
        Lampa.Controller.toggle('content');
      }
    }, {
      title: Lampa.Lang.translate('vinyl_shuffle'),
      onSelect: function onSelect() {
        if (type === 'playlist') playPlaylist(api, item.id, true);else if (type === 'album') playAlbum(api, item.id, true);else if (type === 'radio') playRadio(api, item.name || item.title || '', item.id, item.type || 'genre', true);
        Lampa.Controller.toggle('content');
      }
    }, {
      title: Lampa.Lang.translate('vinyl_details'),
      onSelect: function onSelect() {
        var component = type === 'playlist' ? 'vinyl_playlist' : type === 'album' ? 'vinyl_album' : 'vinyl_radio';
        Lampa.Activity.push({
          url: '',
          title: title,
          component: component,
          id: item.id,
          page: 1,
          movie: {
            id: item.id,
            title: title,
            image: image,
            name: item.name || title,
            type: item.type || 'genre'
          }
        });
      }
    }];
    Lampa.Select.show({
      title: title || '',
      items: items
    });
  }

  /**
   * Resolve and play a Jammify playlist by its _id
   * @param {object} api - Api instance
   * @param {string} playlistId - Jammify playlist _id
   */
  function playJammifyPlaylist(api, playlistId) {
    if (!playlistId) return;
    Lampa.Noty.show('Loading playlist...');
    api.getPlaylistById(playlistId, function (data) {
      if (!data || !data.songIds || !data.songIds.length) {
        Lampa.Noty.show('No songs found');
        return;
      }
      Lampa.Noty.show('Loading ' + data.songIds.length + ' songs...');
      api.getSongsByIds(data.songIds, function (songs) {
        if (!Array.isArray(songs) || !songs.length) {
          Lampa.Noty.show('No playable songs');
          return;
        }

        // Normalize songs for Player
        var normalized = songs.map(function (s) {
          return {
            id: s.id,
            name: s.name || s.title || 'Unknown',
            title: s.name || s.title || 'Unknown',
            subtitle: s.subtitle || (s.artists && s.artists.primary ? s.artists.primary.map(function (a) {
              return a.name;
            }).join(', ') : '') || '',
            artist: s.artists && s.artists.primary ? s.artists.primary.map(function (a) {
              return a.name;
            }).join(', ') : '',
            image: s.image || '',
            duration: s.duration,
            downloadUrl: s.downloadUrl || []
          };
        });
        Player.get().playPlaylist(normalized, 0);
      }, function () {
        Lampa.Noty.show('Failed to load songs');
      });
    }, function () {
      Lampa.Noty.show('Failed to load playlist');
    });
  }

  // plugins/vinyl/component.js — Main component following radio/component.js pattern
  function resolveImage$4(raw) {
    if (!raw) return '';
    if (Array.isArray(raw)) {
      var hi = raw.find(function (i) {
        return i.quality === '500x500';
      }) || raw.find(function (i) {
        return i.quality === '150x150';
      }) || raw[raw.length - 1] || raw[0];
      return hi && hi.url ? hi.url : '';
    }
    return typeof raw === 'string' ? raw : '';
  }
  function Component() {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var items = [];
    var html = $('<div class="vinyl-main"></div>');
    var active = 0;
    this.create = function () {
      this.activity.loader(true);
      var results = {
        playlists: [],
        albums: [],
        radio: [],
        genres: []
      };
      var pending = 4;
      var checkDone = function () {
        pending--;
        if (pending === 0) {
          this.build(results);
        }
      }.bind(this);
      api.getFeaturedPlaylists(1, function (data) {
        results.playlists = data || [];
        checkDone();
      }, function () {
        checkDone();
      });
      api.getAlbums(1, function (data) {
        results.albums = data || [];
        checkDone();
      }, function () {
        checkDone();
      });
      api.getRadioStations(function (data) {
        var stations = Array.isArray(data) ? data : [];
        results.radio = stations.slice(0, 12);
        checkDone();
      }, function () {
        checkDone();
      });
      api.getGenres(function (data) {
        results.genres = Array.isArray(data) ? data : [];
        checkDone();
      }, function () {
        checkDone();
      });
      return this.render();
    };
    this.build = function (data) {
      scroll.minus();
      html.append(scroll.render());
      if (data.playlists.length) {
        this.append({
          title: Lampa.Lang.translate('vinyl_playlists'),
          results: data.playlists.map(function (item) {
            // Уніфікуємо subtitle: followers або нічого
            var followers = item.more_info && item.more_info.follower_count;
            return {
              id: item.id,
              title: Api.decodeHtml(item.title || item.name || ''),
              subtitle: followers ? Number(followers).toLocaleString() + ' Followers' : '',
              image: item.image || item.picture || '',
              type: 'playlist',
              media: 'playlist'
            };
          }),
          type: 'playlists',
          page: 1,
          onMore: function onMore() {
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('vinyl_playlists'),
              component: 'vinyl_all',
              type: 'playlists',
              page: 1
            });
          },
          onSelect: function onSelect(item) {
            playPlaylist(api, item.id, false);
          },
          onLong: function onLong(item) {
            showItemMenu(api, item, 'playlist', item.title || '', item.image || '');
          }
        });
      }
      if (data.albums.length) {
        this.append({
          title: Lampa.Lang.translate('vinyl_albums'),
          results: data.albums.map(function (item) {
            var artist = Api.extractArtist(item);
            return {
              id: item.id,
              title: Api.decodeHtml(item.title || item.name || ''),
              subtitle: artist || item.language || item.year || '',
              image: item.image || item.picture || '',
              type: 'album',
              media: 'album'
            };
          }),
          type: 'albums',
          page: 1,
          onMore: function onMore() {
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('vinyl_albums'),
              component: 'vinyl_all',
              type: 'albums',
              page: 1
            });
          },
          onSelect: function onSelect(item) {
            playAlbum(api, item.id, false);
          },
          onLong: function onLong(item) {
            showItemMenu(api, item, 'album', item.title || '', item.image || '');
          }
        });
      }
      if (data.radio.length) {
        this.append({
          title: Lampa.Lang.translate('vinyl_radio'),
          results: data.radio.map(function (item) {
            return {
              id: item.id,
              title: Api.decodeHtml(item.name || ''),
              subtitle: Api.decodeHtml(item.subtitle || item.type || ''),
              image: resolveImage$4(item.image) || '',
              name: item.name || '',
              type: item.type || 'genre',
              media: 'radio',
              language: item.language || ''
            };
          }),
          type: 'radio',
          onSelect: function onSelect(item) {
            playRadio(api, item.name || item.title || '', item.id, item.type || 'genre', false);
          },
          onLong: function onLong(item) {
            showItemMenu(api, item, 'radio', item.title || '', item.image || '');
          }
        });
      }
      if (data.genres.length) {
        this.append({
          title: Lampa.Lang.translate('vinyl_genres'),
          results: data.genres.slice(0, 11).map(function (item) {
            return {
              id: item._id,
              title: item.name || '',
              subtitle: '',
              image: item.coverImage || '',
              type: 'genre',
              media: 'genre'
            };
          }),
          type: 'genres',
          onMore: function onMore() {
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('vinyl_genres'),
              component: 'vinyl_all',
              type: 'genres',
              page: 1
            });
          },
          onSelect: function onSelect(item) {
            Lampa.Activity.push({
              url: '',
              title: item.title || '',
              component: 'vinyl_genre',
              genreId: item.id,
              genreImage: item.image || '',
              page: 1
            });
          }
        });
      }
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.append = function (element) {
      var item = new Line(element);
      item.create();
      item.onDown = this.down.bind(this);
      item.onUp = this.up.bind(this);
      item.onBack = this.back.bind(this);
      scroll.append(item.render());
      items.push(item);
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.down = function () {
      active++;
      active = Math.min(active, items.length - 1);
      items[active].toggle();
      scroll.update(items[active].render());
    };
    this.up = function () {
      active--;
      if (active < 0) {
        active = 0;
        Lampa.Controller.toggle('head');
      } else {
        items[active].toggle();
      }
      scroll.update(items[active].render());
    };
    this.background = function () {
      Lampa.Background.immediately('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBlZaLrsMgDENXxAf3/9XHFdXNZLm2YZHQymPk4CS0277v9+ffrut62nEcn/M8nzb69cxj6le1+75f/RqrZ9fatm3F9wwMR7yhawilNke4Gis/7j9srQbdaVFBnkcQ1WrfgmIIBcTrvgqqsKiTzvpOQbUnAykVW4VVqZXyyDllYFSKx9QaVrO7nGJIB63g+FAq/xhcHWBYdwCsmAtvFZUKE0MlVZWCT4idOlyhTp3K35R/6Nzlq0uBnsKWlEzgSh1VGJxv6rmpXMO7EK+XWUPnDFRWqitQFeY2UyZVryuWlI8ulLgGf19FooAUwC9gCWLcwzWPb7Wa60qdlZxjx6ooUuUqVQsK+y1VoAJyBeJAVsLJeYmg/RIXdG2kPhwYPBUQQyYF0XC8lwP3MTCrYAXB88556peCbUUZV7WccwkUQfCZC4PXdA5hKhSVhythZqjZM0J39w5m8BRadKAcrsIpNZsLIYdOqcZ9hExhZ1MH+QL+ciFzXzmYhZr/M6yUUwp2dp5U4naZDwAF5JRSefdScJZ3SkU0nl8xpaAy+7ml1EqvMXSs1HRrZ9bc3eZUSXmGa/mdyjbmqyX7A9RaYQa9IRJ0AAAAAElFTkSuQmCC');
    };
    this.start = function () {
      if (!Lampa.Activity.active()) return;
      if (Lampa.Activity.active().activity !== this.activity) return;
      this.background();
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          if (items.length) items[active].toggle();
        },
        up: function up() {
          if (active <= 0) Lampa.Controller.toggle('head');else {
            active--;
            items[active].toggle();
            scroll.update(items[active].render());
          }
        },
        down: function down() {
          if (active < items.length - 1) {
            active++;
            items[active].toggle();
            scroll.update(items[active].render());
          }
        },
        left: function left() {
          Lampa.Controller.toggle('menu');
        },
        back: this.back
      });
      Lampa.Controller.toggle('content');
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      items = null;
      network = null;
    };
  }

  // plugins/vinyl/lib/track-list.js — Vertical track list component
  // Replaces horizontal Line for playlists and album track listings
  // Follows section pattern: create/toggle/render/destroy with onDown/onUp/onBack

  function MusicTrackList(data) {
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-track-list"></div>');
    var rows = [];
    var last = null;
    var _controllerId = 'vinyl_tracklist_' + Math.random().toString(36).slice(2, 10);
    this.onDown = null;
    this.onUp = null;
    this.onBack = null;

    // Format seconds into M:SS display string
    function formatDuration(seconds) {
      if (!seconds) return '';
      var s = parseInt(seconds, 10);
      if (isNaN(s)) return '';
      var m = Math.floor(s / 60);
      var sec = s % 60;
      return m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    // Build a single track row DOM element
    function buildRow(track, index) {
      var row = $('<div class="vinyl-track-row selector" data-track-id="' + (track.id || '') + '"></div>');
      var numHtml = '<div class="vinyl-track-row__num">' + '<span class="vinyl-track-row__num-text">' + (index + 1) + '</span>' + "<span class=\"vinyl-track-row__num-play\">\u25B6</span>" + '</div>';
      var title = track.title || track.name || 'Unknown';
      var meta = track.artist || track.subtitle || '';
      var duration = formatDuration(track.duration);
      var infoHtml = '<div class="vinyl-track-row__info">' + '<div class="vinyl-track-row__name">' + title + '</div>' + (meta ? '<div class="vinyl-track-row__meta">' + meta + '</div>' : '') + '</div>';
      var timeHtml = '<div class="vinyl-track-row__time">' + duration + '</div>';
      row.html(numHtml + infoHtml + timeHtml);

      // Highlight current track
      if (data.currentTrackId && track.id === data.currentTrackId) {
        row.addClass('vinyl-track-row--current');
      }

      // Hover focus — track last focused element
      row.on('hover:focus', function () {
        last = row[0];
      });

      // Enter — select track
      row.on('hover:enter', function () {
        if (data.onSelect) data.onSelect(track, index);
      });

      // Long press — context menu if provided
      if (data.onLong) {
        row.on('hover:long', function () {
          data.onLong(track, index);
        });
      }
      return row;
    }
    this.create = function () {
      // Title row
      if (data.title) {
        html.append('<div class="vinyl-track-list__title">' + data.title + '</div>');
      }

      // Scrollable track container
      var listContainer = $('<div class="vinyl-track-list__body"></div>');
      var tracks = data.tracks || [];
      tracks.forEach(function (track, index) {
        var row = buildRow(track, index);
        listContainer.append(row);
        rows.push(row);
      });
      scroll.render().find('.scroll__body').append(listContainer);
      html.append(scroll.render());

      // Set initial last focus if there are tracks
      if (rows.length) {
        last = rows[0][0];
      }
    };
    this.toggle = function () {
      var self = this;
      Lampa.Controller.add(_controllerId, {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(html);
          Lampa.Controller.collectionFocus(last || false, html);
        },
        right: function right() {
          // Do nothing — vertical list, no horizontal navigation
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          if (Navigator.canmove('down')) Navigator.move('down');else if (self.onDown) self.onDown();
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else if (self.onUp) self.onUp();
        },
        back: function back() {
          if (self.onBack) self.onBack();
        }
      });
      Lampa.Controller.toggle(_controllerId);
    };
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      Lampa.Controller.add(_controllerId, null);
      scroll.destroy();
      html.remove();
      rows = null;
      last = null;
      this.onDown = null;
      this.onUp = null;
      this.onBack = null;
    };
  }

  // plugins/vinyl/pages/sections/music_start.js — Start section for music detail pages
  // Follows full/start.js pattern from Lampa source, adapted for music content

  var typeLabels = {
    artist: {
      ru: 'Исполнитель',
      uk: 'Виконавець',
      en: 'Artist',
      be: 'Выканаўца'
    },
    album: {
      ru: 'Альбом',
      uk: 'Альбом',
      en: 'Album',
      be: 'Альбом'
    },
    playlist: {
      ru: 'Плейлист',
      uk: 'Плейлист',
      en: 'Playlist',
      be: 'Плэйліст'
    },
    radio: {
      ru: 'Радио',
      uk: 'Радіо',
      en: 'Radio',
      be: 'Радыё'
    },
    genre: {
      ru: 'Жанр',
      uk: 'Жанр',
      en: 'Genre',
      be: 'Жанр'
    }
  };
  function MusicStart(data) {
    var html = $('<div class="full-start-new vinyl-start is--' + data.type + '"></div>');
    var last = null;
    this.onDown = null;
    this.onUp = null;
    this.onBack = null;
    this.create = function () {
      // BUG FIX #1: typeLabels[data.type] is an {ru,uk,en} object — NOT a translate key.
      // Lampa.Lang.translate() expects a string key, so it was returning "[object Object]".
      // Fix: read the current language directly from the labels object.
      var langMap = typeLabels[data.type] || typeLabels.album;
      var currentLang = Lampa.Storage.get('lang', 'en');
      var typeLabel = langMap[currentLang] || langMap.en || langMap.ru || '';
      var isArtist = data.type === 'artist';

      // Build HTML structure matching full-start-new pattern
      html.html('<div class="full-start-new__body">' + '<div class="full-start-new__left">' + '<div class="full-start-new__poster vinyl-start__poster">' +
      // BUG FIX #2: Lampa's full-start-new CSS sets opacity: 0 on img by default.
      // It only becomes visible when parent has the `.loaded` class.
      // Fix: add onload/onerror to append class `.loaded` to the parent div.
      '<img class="full-start-new__img full--poster" src="' + data.image + '" onload="this.parentNode.classList.add(\'loaded\')" onerror="this.src=\'./img/img_broken.svg\'; this.parentNode.classList.add(\'loaded\')" />' + '<div class="vinyl-start__disc' + (isArtist ? '' : ' hide') + '"></div>' + '</div>' + '</div>' + '<div class="full-start-new__right">' + '<div class="full-start-new__head">' + typeLabel + '</div>' + '<div class="full-start-new__title">' + data.title + '</div>' + '<div class="full-start-new__tagline full--tagline">' + (data.tagline || '') + '</div>' + '<div class="full-start-new__rate-line">' + '<div class="full-start__rate rate--plays">' + '<div>' + (data.plays_count || 0) + '</div>' + '<div class="source--name">PLAYS</div>' + '</div>' + '</div>' +
      // BUG FIX #3: Lampa's .full-start-new__details has negative margin: -0.45em.
      // If we put plain text without child tags, it gets offset to the left and truncated
      // by parent's overflow: hidden. Fix: wrap details text in <span>.
      '<div class="full-start-new__details"><span>' + (data.details || '') + '</span></div>' + '<div class="full-start-new__buttons">' + '<div class="full-start__button selector button--play">' + '<svg><use xlink:href="#sprite-play"></use></svg>' + '<span>' + (data.buttons.playAll ? data.buttons.playAll.label : Lampa.Lang.translate('vinyl_play')) + '</span>' + '</div>' +
      // BUG FIX #4: radio button had no SVG icon — appeared as invisible black square.
      // Add radio/wifi SVG so user can see the button clearly.
      '<div class="full-start__button selector button--shuffle' + (data.buttons.shuffle ? '' : ' hide') + '">' + '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em">' + '<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' + '<path d="M4 4l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' + '</svg>' + '<span>' + (data.buttons.shuffle ? data.buttons.shuffle.label : '') + '</span>' + '</div>' + '<div class="full-start__button selector button--radio' + (data.buttons.radio && data.buttons.radio.visible ? '' : ' hide') + '">' + '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="currentColor" stroke-width="1.5"></path> <path d="M5 11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11C19 12.1046 18.1046 13 17 13H7C5.89543 13 5 12.1046 5 11Z" stroke="currentColor" stroke-width="1.5"></path> <path d="M9 17C9 17.8284 8.32843 18.5 7.5 18.5C6.67157 18.5 6 17.8284 6 17C6 16.1716 6.67157 15.5 7.5 15.5C8.32843 15.5 9 16.1716 9 17Z" stroke="currentColor" stroke-width="1.5"></path> <path d="M15 11.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path path d="M13 17H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.5 6L15 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>' + '<span>' + (data.buttons.radio ? data.buttons.radio.label : '') + '</span>' + '</div>' + '<div class="full-start__button selector button--options">' + '<svg><use xlink:href="#sprite-dots"></use></svg>' + '</div>' + '</div>' + '</div>' + '</div>');

      // Hide rate line for types without play counts (genre, etc.)
      if (data.plays_count === null || data.plays_count === undefined) {
        html.find('.full-start-new__rate-line').remove();
      }

      // Hide buttons if none have actions (all are null/without action)
      var hasAnyButton = false;
      if (data.buttons) {
        for (var key in data.buttons) {
          if (data.buttons[key] && data.buttons[key].action) {
            hasAnyButton = true;
            break;
          }
        }
      }
      if (!hasAnyButton) {
        html.find('.full-start-new__buttons').remove();
      }

      // Remove tagline if empty
      if (!data.tagline) {
        html.find('.full--tagline').remove();
      }

      // Wire up playAll button
      if (data.buttons.playAll && data.buttons.playAll.action) {
        html.find('.button--play').on('hover:enter', data.buttons.playAll.action);
      }

      // Wire up shuffle button
      if (data.buttons.shuffle && data.buttons.shuffle.action) {
        html.find('.button--shuffle').on('hover:enter', data.buttons.shuffle.action);
      }

      // Wire up radio button
      if (data.buttons.radio && data.buttons.radio.visible && data.buttons.radio.action) {
        html.find('.button--radio').on('hover:enter', data.buttons.radio.action);
      }

      // Wire up options button
      if (data.buttons.options && data.buttons.options.action) {
        html.find('.button--options').on('hover:enter', data.buttons.options.action);
      }

      // Save focus target on all selectors
      html.find('.selector').on('hover:focus', function (e) {
        last = e.currentTarget;
      });
    };
    this.toggle = function () {
      var self = this;
      Lampa.Controller.add('vinyl_start', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(self.render());
          Lampa.Controller.collectionFocus(last || false, self.render());
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          if (Navigator.canmove('down')) Navigator.move('down');else if (self.onDown) self.onDown();
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else if (self.onUp) self.onUp();
        },
        back: function back() {
          if (self.onBack) self.onBack();
        }
      });
      Lampa.Controller.toggle('vinyl_start');
    };
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      Lampa.Controller.add('vinyl_start', null);
      html.remove();
      html = null;
      last = null;
      this.onDown = null;
      this.onUp = null;
      this.onBack = null;
    };
  }

  // plugins/vinyl/pages/sections/music_descr.js — Description section for music detail pages
  // Follows full/descr.js pattern from Lampa source, adapted for music content

  function MusicDescr(data) {
    var content = null;
    var body = null;
    var last = null;
    this.onDown = null;
    this.onUp = null;
    this.onBack = null;
    this.create = function () {
      // Wrap in items_line like Lampa's full/descr.js
      content = Lampa.Template.get('items_line', {
        title: Lampa.Lang.translate('full_detail')
      });
      body = $('<div class="full-descr vinyl-descr">' + '<div class="full-descr__left">' + '<div class="full-descr__text selector">' + (data.text || Lampa.Lang.translate('full_notext')) + '</div>' + '<div class="full-descr__details">' + '<div class="full-descr__info">' + '<div class="full-descr__info-name">' + Lampa.Lang.translate('full_date_of_release') + '</div>' + '<div class="full-descr__info-body">' + (data.year || Lampa.Lang.translate('player_unknown')) + '</div>' + '</div>' + '<div class="full-descr__info vinyl--language">' + '<div class="full-descr__info-name">' + Lampa.Lang.translate('full_language') + '</div>' + '<div class="full-descr__info-body">' + (data.language || '---') + '</div>' + '</div>' + '</div>' + '<div class="full-descr__tags"></div>' + '</div>' + '</div>');

      // Build tag elements for genres/tags
      var tagsContainer = body.find('.full-descr__tags');
      if (data.tags && data.tags.length) {
        data.tags.forEach(function (tag) {
          var tagEl = $('<div class="tag-count selector">' + '<div class="tag-count__name">' + tag.name + '</div>' + '</div>');
          tagEl.on('hover:enter', function () {
            if (tag.action) tag.action();
          });
          tagsContainer.append(tagEl);
        });
      }

      // Focus tracking
      body.find('.selector').on('hover:focus', function (e) {
        last = e.currentTarget;
      });

      // Add description body into items_line
      content.find('.items-line__body').append(body);
    };
    this.toggle = function () {
      var self = this;
      Lampa.Controller.add('vinyl_descr', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(self.render());
          Lampa.Controller.collectionFocus(last || false, self.render());
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          if (Navigator.canmove('down')) Navigator.move('down');else if (self.onDown) self.onDown();
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else if (self.onUp) self.onUp();
        },
        back: function back() {
          if (self.onBack) self.onBack();
        }
      });
      Lampa.Controller.toggle('vinyl_descr');
    };
    this.render = function () {
      return content;
    };
    this.destroy = function () {
      Lampa.Controller.add('vinyl_descr', null);
      if (body) body.remove();
      if (content) content.remove();
      content = null;
      body = null;
      last = null;
      this.onDown = null;
      this.onUp = null;
      this.onBack = null;
    };
  }

  // plugins/vinyl/pages/playlist.js — Playlist detail component (orchestrator pattern)

  // Normalize JioSaavn image array
  function resolveImage$3(raw) {
    if (!raw) return '';
    if (Array.isArray(raw)) {
      var hi = raw.find(function (i) {
        return i.quality === '500x500';
      }) || raw.find(function (i) {
        return i.quality === '150x150';
      }) || raw[raw.length - 1] || raw[0];
      return hi && hi.url ? hi.url : '';
    }
    return typeof raw === 'string' ? raw : '';
  }
  function PlaylistComponent(object) {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-full layer--wheight"></div>');
    var rows = [];
    var items = [];
    var active = 0;
    var songs = [];
    var isLoading = false;
    var playlistId = '';
    var playlistTitle = '';
    this.create = function () {
      this.activity.loader(true);
      playlistId = object.id || object.movie && object.movie.id || '';
      playlistTitle = object.title || object.movie && object.movie.title || '';
      if (!playlistId) {
        this.empty();
        return this.render();
      }
      this.loadPage(0, true);
      return this.render();
    };
    this.loadPage = function (page, initial) {
      if (isLoading) return;
      isLoading = true;
      if (initial) {
        this.activity.loader(true);
      }
      api.getPlaylistDetail(playlistId, page, function (data) {
        var tracks = [];
        if (data && data.songs) {
          tracks = data.songs;
          Math.ceil((data.total || 0) / 10) || 1;
        } else if (Array.isArray(data)) {
          tracks = data;
        }
        tracks = tracks.map(function (song) {
          return {
            id: song.id,
            name: song.name || song.title || 'Unknown',
            title: song.name || song.title || 'Unknown',
            subtitle: song.primaryArtists || song.artists && song.artists.primary && song.artists.primary.map(function (a) {
              return a.name;
            }).join(', ') || '',
            artist: song.primaryArtists || song.artists && song.artists.primary && song.artists.primary.map(function (a) {
              return a.name;
            }).join(', ') || '',
            duration: song.duration,
            image: resolveImage$3(song.image),
            downloadUrl: song.downloadUrl || []
          };
        });
        if (initial) {
          songs = tracks;
        } else {
          songs = songs.concat(tracks);
        }
        isLoading = false;
        if (!songs.length) {
          this.empty();
          return;
        }
        if (initial) {
          this.build(songs, data, playlistTitle);
          this.activity.loader(false);
          this.activity.toggle();
        }
      }.bind(this), function () {
        isLoading = false;
        if (initial) {
          this.empty();
        }
      }.bind(this));
    };
    this.build = function (songs, apiData, title) {
      // Normalize image
      var image = resolveImage$3(apiData && apiData.image) || resolveImage$3(object.movie && object.movie.image) || '';

      // Build details string
      var details = '';
      if (apiData && apiData.language) details += apiData.language;
      if (apiData && apiData.year) details += (details ? ' | ' : '') + apiData.year;

      // Build tagline from follower data
      var followers = apiData && (apiData.followers || apiData.more_info && apiData.more_info.follower_count || '');
      if (followers) {
        followers = followers + ' followers';
      }

      // 1. Start section
      rows.push(['music_start', {
        type: 'playlist',
        image: image,
        title: title,
        tagline: followers || (apiData && apiData.subtitle ? apiData.subtitle : ''),
        plays_count: songs.length,
        details: details,
        buttons: {
          playAll: {
            label: Lampa.Lang.translate('vinyl_play'),
            action: function action() {
              if (songs.length) Player.get().playPlaylist(songs, 0);
            }
          },
          shuffle: {
            label: Lampa.Lang.translate('vinyl_shuffle'),
            action: function action() {
              if (songs.length) {
                var shuffled = songs.slice().sort(function () {
                  return 0.5 - Math.random();
                });
                Player.get().playPlaylist(shuffled, 0);
              }
            }
          },
          radio: {
            label: '',
            visible: false,
            action: null
          },
          options: {
            action: function action() {}
          }
        }
      }]);

      // 2. Description section
      rows.push(['music_descr', {
        text: apiData && (apiData.description || apiData.about) ? apiData.description || apiData.about : 'No description available',
        year: apiData && apiData.year ? apiData.year : '',
        language: apiData && apiData.language ? apiData.language : '',
        tags: []
      }]);

      // 3. Tracks section (vertical track list)
      if (songs.length) {
        rows.push(['tracklist', {
          title: Lampa.Lang.translate('vinyl_songs') + ' (' + songs.length + ')',
          tracks: songs,
          onSelect: function onSelect(track, index) {
            Player.get().playPlaylist(songs, index);
          }
        }]);
      }

      // Build sections
      this.buildRows(rows);

      // Set background
      if (image) {
        Lampa.Background.immediately(image);
      }
    };
    this.buildRows = function (batch) {
      var self = this;
      scroll.minus();
      html.append(scroll.render());
      batch.forEach(function (row) {
        var name = row[0];
        var data = row[1];
        var section = null;
        if (name === 'music_start') section = new MusicStart(data);else if (name === 'music_descr') section = new MusicDescr(data);else if (name === 'line') section = new Line(data);else if (name === 'tracklist') section = new MusicTrackList(data);
        if (!section) return;
        section.onDown = self.down.bind(self);
        section.onUp = self.up.bind(self);
        section.onBack = self.back.bind(self);
        section.create();
        scroll.append(section.render());
        items.push(section);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.down = function () {
      active = Math.min(active + 1, items.length - 1);
      items[active].toggle();
      scroll.update(items[active].render());
    };
    this.up = function () {
      active--;
      if (active < 0) {
        active = 0;
        Lampa.Controller.toggle('head');
      } else {
        items[active].toggle();
      }
      scroll.update(items[active].render());
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      html.append(empty.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          if (items.length) items[active].toggle();
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
      if (items.length) items[active].toggle();
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      rows = null;
      items = null;
      songs = null;
      network = null;
    };
  }

  // plugins/vinyl/pages/album.js — Album detail component (orchestrator pattern)

  // Normalize JioSaavn image array
  function resolveImage$2(raw) {
    if (!raw) return '';
    if (Array.isArray(raw)) {
      var hi = raw.find(function (i) {
        return i.quality === '500x500';
      }) || raw.find(function (i) {
        return i.quality === '150x150';
      }) || raw[raw.length - 1] || raw[0];
      return hi && hi.url ? hi.url : '';
    }
    return typeof raw === 'string' ? raw : '';
  }
  function AlbumComponent(object) {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-full layer--wheight"></div>');
    var rows = [];
    var items = [];
    var active = 0;
    var songs = [];
    var isLoading = false;
    var albumId = '';
    var albumTitle = '';
    this.create = function () {
      this.activity.loader(true);
      albumId = object.id || object.movie && object.movie.id || '';
      albumTitle = object.title || object.movie && object.movie.title || '';
      if (!albumId) {
        this.empty();
        return this.render();
      }
      this.loadPage(0, true);
      return this.render();
    };
    this.loadPage = function (page, initial) {
      if (isLoading) return;
      isLoading = true;
      if (initial) {
        this.activity.loader(true);
      }
      api.getAlbumDetail(albumId, page, function (data) {
        var tracks = [];
        if (data && data.songs) {
          tracks = data.songs;
        } else if (Array.isArray(data)) {
          tracks = data;
        }
        tracks = tracks.map(function (song) {
          return {
            id: song.id,
            name: song.name || song.title || 'Unknown',
            title: song.name || song.title || 'Unknown',
            subtitle: song.primaryArtists || song.artists && song.artists.primary && song.artists.primary.map(function (a) {
              return a.name;
            }).join(', ') || '',
            artist: song.primaryArtists || song.artists && song.artists.primary && song.artists.primary.map(function (a) {
              return a.name;
            }).join(', ') || '',
            duration: song.duration,
            image: resolveImage$2(song.image),
            downloadUrl: song.downloadUrl || []
          };
        });
        if (initial) {
          songs = tracks;
        } else {
          songs = songs.concat(tracks);
        }
        isLoading = false;
        if (!songs.length) {
          this.empty();
          return;
        }
        if (initial) {
          this.build(songs, data, albumTitle);
          this.activity.loader(false);
          this.activity.toggle();
        }
      }.bind(this), function () {
        isLoading = false;
        if (initial) {
          this.empty();
        }
      }.bind(this));
    };
    this.build = function (songs, apiData, title) {
      // Normalize image
      var image = resolveImage$2(apiData && apiData.image) || resolveImage$2(object.movie && object.movie.image) || '';

      // Build details string
      var details = '';
      if (apiData && apiData.language) details += apiData.language;
      if (apiData && apiData.year) details += (details ? ' | ' : '') + apiData.year;

      // 1. Start section
      rows.push(['music_start', {
        type: 'album',
        image: image,
        title: title,
        tagline: apiData && apiData.subtitle ? apiData.subtitle : apiData && apiData.year ? apiData.year : '',
        plays_count: songs.length,
        details: details,
        buttons: {
          playAll: {
            label: Lampa.Lang.translate('vinyl_play'),
            action: function action() {
              if (songs.length) Player.get().playPlaylist(songs, 0);
            }
          },
          shuffle: {
            label: Lampa.Lang.translate('vinyl_shuffle'),
            action: function action() {
              if (songs.length) {
                var shuffled = songs.slice().sort(function () {
                  return 0.5 - Math.random();
                });
                Player.get().playPlaylist(shuffled, 0);
              }
            }
          },
          radio: {
            label: '',
            visible: false,
            action: null
          },
          options: {
            action: function action() {}
          }
        }
      }]);

      // 2. Description section
      rows.push(['music_descr', {
        text: apiData && (apiData.description || apiData.about) ? apiData.description || apiData.about : 'No description available',
        year: apiData && apiData.year ? apiData.year : '',
        language: apiData && apiData.language ? apiData.language : '',
        tags: []
      }]);

      // 3. Tracks section (vertical track list)
      if (songs.length) {
        rows.push(['tracklist', {
          title: Lampa.Lang.translate('vinyl_songs') + ' (' + songs.length + ')',
          tracks: songs,
          onSelect: function onSelect(track, index) {
            Player.get().playPlaylist(songs, index);
          }
        }]);
      }

      // Build sections
      this.buildRows(rows);

      // Set background
      if (image) {
        Lampa.Background.immediately(image);
      }
    };
    this.buildRows = function (batch) {
      var self = this;
      scroll.minus();
      html.append(scroll.render());
      batch.forEach(function (row) {
        var name = row[0];
        var data = row[1];
        var section = null;
        if (name === 'music_start') section = new MusicStart(data);else if (name === 'music_descr') section = new MusicDescr(data);else if (name === 'line') section = new Line(data);else if (name === 'tracklist') section = new MusicTrackList(data);
        if (!section) return;
        section.onDown = self.down.bind(self);
        section.onUp = self.up.bind(self);
        section.onBack = self.back.bind(self);
        section.create();
        scroll.append(section.render());
        items.push(section);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.down = function () {
      active = Math.min(active + 1, items.length - 1);
      items[active].toggle();
      scroll.update(items[active].render());
    };
    this.up = function () {
      active--;
      if (active < 0) {
        active = 0;
        Lampa.Controller.toggle('head');
      } else {
        items[active].toggle();
      }
      scroll.update(items[active].render());
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      html.append(empty.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          if (items.length) items[active].toggle();
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
      if (items.length) items[active].toggle();
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      rows = null;
      items = null;
      songs = null;
      network = null;
    };
  }

  // plugins/vinyl/pages/artist.js — Artist detail component (orchestrator pattern)

  // BUG FIX #5 #6: JioSaavn returns image as [{quality:"500x500", url:"..."}, ...]
  // Plain `item.image` on an array gives "[object Array]" as img.src → broken cover.
  function resolveImage$1(raw) {
    if (!raw) return '';
    if (Array.isArray(raw)) {
      var hi = raw.find(function (i) {
        return i.quality === '500x500';
      }) || raw.find(function (i) {
        return i.quality === '150x150';
      }) || raw[raw.length - 1] || raw[0];
      return hi && hi.url ? hi.url : '';
    }
    return typeof raw === 'string' ? raw : '';
  }
  function ArtistComponent(object) {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-full layer--wheight"></div>');
    var rows = [];
    var items = [];
    var active = 0;
    this.create = function () {
      this.activity.loader(true);
      var id = object.movie ? object.movie.id : object.id || '';
      var name = object.movie ? object.movie.title : object.title || '';
      if (!id) {
        this.empty();
        return this.render();
      }
      api.getArtistDetail(id, function (raw) {
        // 1. Normalize image — multi-source (array of quality objects, string, or picture field)
        var image = resolveImage$1(raw.image) || resolveImage$1(raw.picture) || '';

        // 2. Normalize bio — bio[0] may be string or {text: ...}
        var bioText = '';
        if (raw.bio && raw.bio.length) {
          if (typeof raw.bio[0] === 'string') {
            bioText = raw.bio[0];
          } else if (raw.bio[0].text) {
            bioText = raw.bio[0].text;
          }
        }

        // 3. Normalize songs — topSongs or songs
        var songs = [];
        if (raw.topSongs) {
          songs = raw.topSongs;
        } else if (raw.songs) {
          songs = raw.songs;
        }

        // 4. Normalize albums — topAlbums or albums, capped at 5
        var albums = [];
        if (raw.topAlbums) {
          albums = raw.topAlbums;
        } else if (raw.albums) {
          albums = raw.albums;
        }
        albums = albums.slice(0, 24);

        // 5. Build row: music_start (header section with poster, buttons)
        var playsCount = '';
        var details = raw.followerCount ? Number(raw.followerCount).toLocaleString() + ' Followers' : raw.dominantLanguage || '';
        rows.push(['music_start', {
          type: 'artist',
          image: image,
          title: name,
          tagline: '',
          plays_count: playsCount,
          details: details,
          buttons: {
            playAll: {
              label: Lampa.Lang.translate('vinyl_play'),
              action: function action() {
                if (songs.length) {
                  Player.get().playPlaylist(songs, 0);
                }
              }
            },
            shuffle: {
              label: Lampa.Lang.translate('vinyl_shuffle'),
              action: function action() {
                if (songs.length) {
                  var shuffled = songs.slice().sort(function () {
                    return 0.5 - Math.random();
                  });
                  Player.get().playPlaylist(shuffled, 0);
                }
              }
            },
            radio: {
              label: Lampa.Lang.translate('vinyl_radio'),
              visible: true,
              action: function action() {
                Lampa.Activity.push({
                  url: '',
                  title: name + ' ' + Lampa.Lang.translate('vinyl_radio'),
                  component: 'vinyl_radio',
                  page: 1,
                  movie: {
                    id: id,
                    title: name + ' Radio',
                    image: image,
                    name: name,
                    type: 'artist'
                  }
                });
              }
            },
            options: {
              action: function action() {}
            }
          }
        }]);

        // 6. Build row: music_descr (biography + genre tags) — only if bio exists
        if (bioText) {
          var tags = [];
          if (raw.genre && raw.genre.length) {
            tags = raw.genre.map(function (g) {
              var name = typeof g === 'string' ? g : g.name || g.value || '';
              return {
                name: name,
                action: function action() {
                  if (name) {
                    Lampa.Activity.push({
                      url: '',
                      title: name,
                      component: 'vinyl_search',
                      page: 1,
                      search: name
                    });
                  }
                }
              };
            });
          }
          rows.push(['music_descr', {
            text: bioText,
            year: '',
            language: '',
            tags: tags
          }]);
        }

        // 7. Build row: Line with top songs — only if songs exist
        if (songs.length) {
          var normalizedSongs = songs.map(function (s, i) {
            return {
              id: s.id,
              title: s.name || s.title || 'Unknown',
              subtitle: s.artist || s.subtitle || name || '',
              image: resolveImage$1(s.image) || resolveImage$1(s.picture) || '',
              _idx: i
            };
          });
          rows.push(['line', {
            title: Lampa.Lang.translate('vinyl_songs'),
            results: normalizedSongs,
            page: 1,
            onSelect: function onSelect(item) {
              var idx = item._idx;
              if (idx >= 0 && idx < songs.length) {
                Player.get().playPlaylist(songs, idx);
              }
            }
          }]);
        }

        // 8. Build row: Line with albums — only if albums exist
        if (albums.length) {
          var normalizedAlbums = albums.map(function (a) {
            return {
              id: a.id,
              title: a.title || a.name || 'Unknown',
              subtitle: a.artist || a.subtitle || a.year || '',
              image: resolveImage$1(a.image) || resolveImage$1(a.picture) || '',
              media: 'album'
            };
          });
          rows.push(['line', {
            title: Lampa.Lang.translate('vinyl_albums'),
            results: normalizedAlbums,
            onSelect: function onSelect(item) {
              playAlbum(api, item.id, false);
            },
            onLong: function onLong(item) {
              showItemMenu(api, item, 'album', item.title || '', item.image || '');
            }
          }]);
        }

        // 8a. Build row: Line with singles — only if singles exist
        var singles = raw.singles || [];
        if (singles.length) {
          var normalizedSingles = singles.map(function (s) {
            return {
              id: s.id,
              title: s.title || s.name || 'Unknown',
              subtitle: s.artist || s.subtitle || s.year || '',
              image: resolveImage$1(s.image) || resolveImage$1(s.picture) || '',
              type: 'album',
              media: 'album'
            };
          });
          rows.push(['line', {
            title: Lampa.Lang.translate('vinyl_singles') || 'Singles',
            results: normalizedSingles,
            onSelect: function onSelect(item) {
              playAlbum(api, item.id, false);
            },
            onLong: function onLong(item) {
              showItemMenu(api, item, 'album', item.title || '', item.image || '');
            }
          }]);
        }

        // 8b. Build row: Line with similar artists — only if similarArtists exist
        var similar = raw.similarArtists || [];
        if (similar.length) {
          var normalizedSimilar = similar.map(function (a) {
            return {
              id: a.id,
              title: a.name || a.title || 'Unknown',
              subtitle: 'Artist',
              image: resolveImage$1(a.image) || resolveImage$1(a.picture) || '',
              type: 'artist',
              media: 'artist'
            };
          });
          rows.push(['line', {
            title: Lampa.Lang.translate('vinyl_similar_artists') || 'Similar Artists',
            results: normalizedSimilar,
            onSelect: function onSelect(item) {
              Lampa.Activity.push({
                url: '',
                title: item.title || '',
                component: 'vinyl_artist',
                page: 1,
                movie: {
                  id: item.id,
                  title: item.title,
                  image: item.image
                }
              });
            }
          }]);
        }

        // 9. Build sections from rows
        this.build(rows);
        this.activity.loader(false);
        this.activity.toggle();

        // 10. Set background from artist image
        if (image) {
          Lampa.Background.immediately(image);
        }
      }.bind(this), function () {
        this.empty();
      }.bind(this));
      return this.render();
    };
    this.build = function (batch) {
      var self = this;
      scroll.minus();
      html.append(scroll.render());
      batch.forEach(function (row) {
        var name = row[0];
        var data = row[1];
        var section = name === 'line' ? new Line(data) : name === 'music_start' ? new MusicStart(data) : name === 'music_descr' ? new MusicDescr(data) : null;
        if (!section) return;
        section.onDown = self.down.bind(self);
        section.onUp = self.up.bind(self);
        section.onBack = self.back.bind(self);
        section.create();
        scroll.append(section.render());
        items.push(section);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.down = function () {
      active = Math.min(active + 1, items.length - 1);
      items[active].toggle();
      scroll.update(items[active].render());
    };
    this.up = function () {
      active--;
      if (active < 0) {
        active = 0;
        Lampa.Controller.toggle('head');
      } else {
        items[active].toggle();
      }
      scroll.update(items[active].render());
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      html.append(empty.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          if (items.length) items[active].toggle();
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
      if (items.length) items[active].toggle();
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      rows = null;
      items = null;
      network = null;
    };
  }

  // plugins/vinyl/pages/radio.js — Radio station detail (orchestrator pattern)
  function resolveImage(raw) {
    if (!raw) return '';
    if (Array.isArray(raw)) {
      var hi = raw.find(function (i) {
        return i.quality === '500x500';
      }) || raw.find(function (i) {
        return i.quality === '150x150';
      }) || raw[raw.length - 1] || raw[0];
      return hi && hi.url ? hi.url : '';
    }
    return typeof raw === 'string' ? raw : '';
  }
  function RadioComponent(object) {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-full layer--wheight"></div>');
    var rows = [];
    var items = [];
    var active = 0;
    var songs = [];
    var stationType = ''; // 'genre' | 'artist'
    var stationName = '';
    var stationId = '';
    this.create = function () {
      this.activity.loader(true);
      stationType = object.movie ? object.movie.type || 'genre' : 'genre';
      stationName = object.movie ? object.movie.name || object.movie.title || '' : object.title || '';
      stationId = object.movie ? object.movie.id || '' : object.id || '';
      if (!stationName) {
        this.empty();
        return this.render();
      }
      if (stationType === 'artist') {
        api.getRadioArtist(stationName, stationId, function (data) {
          var tracks = Array.isArray(data) ? data : [];
          this.onSongsLoaded(tracks);
        }.bind(this), function () {
          this.empty();
        }.bind(this));
      } else {
        api.getRadioGenre(stationName, function (data) {
          var tracks = Array.isArray(data) ? data : [];
          this.onSongsLoaded(tracks);
        }.bind(this), function () {
          this.empty();
        }.bind(this));
      }
      return this.render();
    };
    this.onSongsLoaded = function (tracks) {
      songs = tracks.map(function (song) {
        return {
          id: song.id,
          name: song.name || 'Unknown',
          title: song.name || 'Unknown',
          subtitle: song.artists && song.artists.primary ? song.artists.primary.map(function (a) {
            return a.name;
          }).join(', ') : song.subtitle || '',
          artist: song.artists && song.artists.primary ? song.artists.primary.map(function (a) {
            return a.name;
          }).join(', ') : song.artist || '',
          duration: song.duration,
          image: resolveImage(song.image),
          downloadUrl: song.downloadUrl || []
        };
      });
      if (!songs.length) {
        this.empty();
        return;
      }
      this.build(songs);
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.build = function (songs) {
      var image = object.movie && object.movie.image ? object.movie.image : songs[0] && songs[0].image ? songs[0].image : '';

      // 1. MusicStart section — like album.js / playlist.js
      var tagline = stationType === 'artist' ? Lampa.Lang.translate('vinyl_artists') + ' ' + Lampa.Lang.translate('vinyl_radio') : Lampa.Lang.translate('vinyl_radio');
      rows.push(['music_start', {
        type: 'radio',
        image: image,
        title: stationName,
        tagline: tagline,
        plays_count: songs.length,
        details: '',
        buttons: {
          playAll: {
            label: Lampa.Lang.translate('vinyl_play'),
            action: function action() {
              if (songs.length) Player.get().playPlaylist(songs, 0);
            }
          },
          shuffle: {
            label: Lampa.Lang.translate('vinyl_shuffle'),
            action: function action() {
              if (songs.length) {
                var shuffled = songs.slice().sort(function () {
                  return 0.5 - Math.random();
                });
                Player.get().playPlaylist(shuffled, 0);
              }
            }
          },
          radio: {
            label: '',
            visible: false,
            action: null
          },
          options: {
            action: function action() {}
          }
        }
      }]);

      // 2. Line with tracks — horizontal cards like album.js / playlist.js
      if (songs.length) {
        var normalizedSongs = songs.map(function (song, index) {
          return {
            id: song.id,
            title: song.title || 'Unknown',
            subtitle: song.artist || song.subtitle || '',
            image: song.image || '',
            _idx: index
          };
        });
        rows.push(['line', {
          title: Lampa.Lang.translate('vinyl_songs') + ' (' + songs.length + ')',
          results: normalizedSongs,
          onSelect: function onSelect(item) {
            var idx = item._idx;
            if (idx >= 0 && idx < songs.length) {
              Player.get().playPlaylist(songs, idx);
            }
          }
        }]);
      }

      // Build sections via buildRows
      this.buildRows(rows);

      // Set background
      if (image) {
        Lampa.Background.immediately(image);
      }
    };
    this.buildRows = function (batch) {
      var self = this;
      scroll.minus();
      html.append(scroll.render());
      batch.forEach(function (row) {
        var name = row[0];
        var data = row[1];
        var section = null;
        if (name === 'music_start') section = new MusicStart(data);else if (name === 'line') section = new Line(data);
        if (!section) return;
        section.onDown = self.down.bind(self);
        section.onUp = self.up.bind(self);
        section.onBack = self.back.bind(self);
        section.create();
        scroll.append(section.render());
        items.push(section);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.down = function () {
      active = Math.min(active + 1, items.length - 1);
      items[active].toggle();
      scroll.update(items[active].render());
    };
    this.up = function () {
      active--;
      if (active < 0) {
        active = 0;
        Lampa.Controller.toggle('head');
      } else {
        items[active].toggle();
      }
      scroll.update(items[active].render());
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      html.append(empty.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          if (items.length) items[active].toggle();
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
      if (items.length) items[active].toggle();
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      rows = null;
      items = null;
      songs = null;
      network = null;
    };
  }

  // plugins/vinyl/pages/genre.js — Genre detail component (orchestrator pattern)
  function GenreComponent(object) {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-full layer--wheight"></div>');
    var rows = [];
    var items = [];
    var active = 0;
    var genreData = null;

    this.create = function () {
      this.activity.loader(true);

      // object is the data passed via Activity.push (from 'object' key or top-level)
      var data = object || {};
      var genreId = data.genreId || data.movie && data.movie.id || data.id || '';
      if (!genreId) {
        this.empty();
        return this.render();
      }
      api.getGenreDetail(genreId, function (result) {
        if (!result || !result.genre || !result.sections) {
          this.empty();
          return;
        }
        genreData = result;
        this.loadAllSections(result.sections);
      }.bind(this), function () {
        this.empty();
      }.bind(this));
      return this.render();
    };
    this.loadAllSections = function (sections) {
      if (!sections.length) {
        this.build(genreData, {});
        return;
      }
      var loaded = 0;
      var total = sections.length;
      var allPlaylists = {};
      sections.forEach(function (section) {
        allPlaylists[section._id] = {
          playlists: [],
          page: 0,
          hasMore: true
        };
        api.getSectionPlaylists(section._id, 0, 12, function (playlists, meta) {
          allPlaylists[section._id] = {
            playlists: Array.isArray(playlists) ? playlists : [],
            page: 0,
            hasMore: meta ? meta.hasMore : false,
            total: meta ? meta.total : 0
          };
          loaded++;
          if (loaded === total) {
            this.build(genreData, allPlaylists);
            this.activity.loader(false);
            this.activity.toggle();
          }
        }.bind(this), function () {
          loaded++;
          if (loaded === total) {
            this.build(genreData, allPlaylists);
            this.activity.loader(false);
            this.activity.toggle();
          }
        }.bind(this));
      }, this);
    };
    this.build = function (data, allPlaylists) {
      var genre = data.genre;
      var sections = data.sections;
      // genre.coverImage is NOT returned by the genre detail API endpoint
      // Fall back to genreImage passed via navigation data (from genres list)
      var objectData = object || {};
      var image = genre.coverImage || objectData.genreImage || '';

      // 1. MusicStart header — no buttons, no plays count
      rows.push(['music_start', {
        type: 'genre',
        image: image,
        title: genre.name || '',
        tagline: sections.length + ' sections',
        plays_count: null,
        details: genre.description || '',
        buttons: {
          playAll: null,
          shuffle: null,
          radio: null,
          options: null
        }
      }]);

      // 2. Lines for each section
      sections.forEach(function (section) {
        var sectionData = allPlaylists[section._id] || {
          playlists: [],
          page: 0,
          hasMore: false
        };
        var playlists = sectionData.playlists;

        // Only show "more" button if there are additional items beyond this page
        var hasMoreItems = sectionData.hasMore || playlists.length >= 12;
        if (playlists.length) {
          var normalizedPlaylists = playlists.map(function (p) {
            return {
              id: p._id,
              title: p.name || '',
              subtitle: p.songCount ? p.songCount + ' tracks' : '',
              image: p.image || '',
              type: 'playlist',
              media: 'playlist',
              _sectionId: section._id
            };
          });
          rows.push(['line', {
            title: section.name || '',
            results: normalizedPlaylists,
            onMore: hasMoreItems ? function () {
              Lampa.Activity.push({
                url: '',
                title: section.name || '',
                component: 'vinyl_all',
                type: 'section',
                sectionId: section._id,
                page: 1
              });
            } : undefined,
            onSelect: function onSelect(item) {
              playJammifyPlaylist(api, item.id);
            },
            onLong: function onLong(item) {
              Lampa.Select.show({
                title: item.title || '',
                items: [{
                  title: Lampa.Lang.translate('vinyl_play'),
                  onSelect: function onSelect() {
                    playJammifyPlaylist(api, item.id);
                    Lampa.Controller.toggle('content');
                  }
                }]
              });
            }
          }]);
        }
      });

      // Build sections
      this.buildRows(rows);

      // Set background
      if (image) {
        Lampa.Background.immediately(image);
      }
    };
    this.buildRows = function (batch) {
      var self = this;
      scroll.minus();
      html.append(scroll.render());
      batch.forEach(function (row) {
        var name = row[0];
        var data = row[1];
        var section = null;
        if (name === 'music_start') section = new MusicStart(data);else if (name === 'line') section = new Line(data);
        if (!section) return;
        section.onDown = self.down.bind(self);
        section.onUp = self.up.bind(self);
        section.onBack = self.back.bind(self);
        section.create();
        scroll.append(section.render());
        items.push(section);
      });
    };

    // === Standard lifecycle methods (from radio.js pattern) ===
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.down = function () {
      active = Math.min(active + 1, items.length - 1);
      items[active].toggle();
      scroll.update(items[active].render());
    };
    this.up = function () {
      active--;
      if (active < 0) {
        active = 0;
        Lampa.Controller.toggle('head');
      } else {
        items[active].toggle();
      }
      scroll.update(items[active].render());
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      html.append(empty.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          if (items.length) items[active].toggle();
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
      if (items.length) items[active].toggle();
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      Lampa.Arrays.destroy(items);
      scroll.destroy();
      html.remove();
      rows = null;
      items = null;
      genreData = null;
      network = null;
    };
  }

  // plugins/vinyl/pages/all.js — Paginated grid component for "Show All" / "More" actions
  function AllComponent(object) {
    var api = Api.get();
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="vinyl-full layer--wheight"></div>');
    var grid = $('<div class="vinyl-all-grid"></div>');
    var items = [];
    var allSongs = [];
    var last = null;
    var page = 1;
    var isLoading = false;
    var isEnd = false;
    this.create = function () {
      this.activity.loader(true);
      scroll.minus();
      scroll.append(grid);
      html.append(scroll.render());
      this.load(true);
      return this.render();
    };
    this.load = function (initial) {
      if (isLoading || isEnd) return;
      isLoading = true;
      if (initial) {
        page = 1;
        isEnd = false;
        grid.empty();
        items = [];
        allSongs = [];
      }
      var self = this;
      var query = object.query || '';
      var type = object.type || 'playlists';
      var onsuccess = function onsuccess(data) {
        self.activity.loader(false);
        isLoading = false;
        var list = [];
        if (data && data.results) {
          list = data.results;
        } else if (Array.isArray(data)) {
          list = data;
        }
        if (!list.length) {
          if (initial) self.empty();else isEnd = true;
          return;
        }
        list.forEach(function (elem) {
          var vinyl_type = type === 'playlists' ? 'playlist' : type === 'albums' ? 'album' : type === 'artists' ? 'artist' : type === 'songs' ? 'song' : type;
          var cardData = {
            id: elem.id || elem._id || '',
            title: Api.decodeHtml(elem.title || elem.name || 'Unknown'),
            subtitle: Api.decodeHtml(Api.extractArtist(elem) || elem.language || elem.year || ''),
            image: elem.image || elem.picture || elem.coverImage || '',
            media: vinyl_type,
            vinyl_type: vinyl_type,
            vinyl_data: elem
          };
          if (type === 'songs') {
            allSongs.push({
              id: elem.id,
              name: Api.decodeHtml(elem.name || elem.title || 'Unknown'),
              title: Api.decodeHtml(elem.name || elem.title || 'Unknown'),
              subtitle: Api.decodeHtml(elem.subtitle || elem.primaryArtists || elem.artist || ''),
              artist: Api.decodeHtml(elem.primaryArtists || elem.artist || ''),
              image: elem.image || elem.picture || '',
              duration: elem.duration,
              downloadUrl: elem.downloadUrl || []
            });
          }
          var card = new Card(cardData);
          card.render().addClass('card--vinyl');
          card.render().on('hover:focus', function () {
            last = card.render()[0];
            scroll.update(card.render(), true);

            // Auto-load next page when reaching the end of the grid
            var idx = items.indexOf(card);
            if (idx >= items.length - 6 && !isLoading && !isEnd) {
              page++;
              self.load(false);
            }
          });
          card.render().on('hover:enter', function () {
            if (type === 'songs') {
              if (allSongs.length > 0) {
                var idx = -1;
                allSongs.forEach(function (s, i) {
                  if (s.id === (cardData.id || elem.id)) idx = i;
                });
                Player.get().playPlaylist(allSongs, idx >= 0 ? idx : 0);
              }
            } else if (type === 'playlists') {
              playPlaylist(api, cardData.id, false);
            } else if (type === 'albums') {
              playAlbum(api, cardData.id, false);
            } else if (type === 'genres') {
              Lampa.Activity.push({
                url: '',
                title: cardData.title,
                component: 'vinyl_genre',
                genreId: cardData.id,
                genreImage: cardData.image || '',
                page: 1
              });
            } else if (type === 'section') {
              playJammifyPlaylist(api, cardData.id);
            } else {
              // artists — navigate to detail
              Lampa.Activity.push({
                url: '',
                title: cardData.title,
                component: 'vinyl_artist',
                id: cardData.id,
                page: 1,
                movie: {
                  id: cardData.id,
                  title: cardData.title,
                  image: cardData.image
                }
              });
            }
          });
          card.render().on('hover:long', function () {
            if (type === 'playlists') {
              showItemMenu(api, cardData, 'playlist', cardData.title, cardData.image);
            } else if (type === 'albums') {
              showItemMenu(api, cardData, 'album', cardData.title, cardData.image);
            } else if (type === 'section') {
              Lampa.Select.show({
                title: cardData.title,
                items: [{
                  title: Lampa.Lang.translate('vinyl_play'),
                  onSelect: function onSelect() {
                    playJammifyPlaylist(api, cardData.id);
                    Lampa.Controller.toggle('content');
                  }
                }]
              });
            }
            // artists — no context menu (keep original behavior)
          });
          grid.append(card.render());
          items.push(card);
          if (!initial) {
            Lampa.Controller.collectionAppend(card.render());
          }
        });
        if (initial) {
          self.activity.toggle();
        }

        // Genres endpoint returns all items at once, no pagination support
        if (type === 'genres') {
          isEnd = true;
        }
      };
      var o_error = function o_error() {
        isLoading = false;
        self.activity.loader(false);
        if (initial) self.empty();
      };

      // Determine API method based on type and context
      if (query) {
        // Search pagination
        if (type === 'songs') api.searchSongs(query, page, onsuccess, o_error);else if (type === 'playlists') api.searchPlaylists(query, page, onsuccess, o_error);else if (type === 'albums') api.searchAlbums(query, page, onsuccess, o_error);else if (type === 'artists') api.searchArtists(query, page, onsuccess, o_error);
      } else {
        // Browse pagination
        if (type === 'playlists') api.getFeaturedPlaylists(page, onsuccess, o_error);else if (type === 'albums') api.getAlbums(page, onsuccess, o_error);else if (type === 'genres') api.getGenres(onsuccess, o_error);else if (type === 'section' && object.sectionId) api.getSectionPlaylists(object.sectionId, page, 12, onsuccess, o_error);
      }
    };
    this.empty = function () {
      var empty = new Lampa.Empty();
      grid.append(empty.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add('content', {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          Navigator.move('down');
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      isEnd = true;
      isLoading = true;
      network.clear();
      if (items) {
        items.forEach(function (card) {
          card.destroy();
        });
      }
      if (scroll) scroll.destroy();
      html.remove();
      items = null;
      grid = null;
      scroll = null;
      network = null;
    };
  }

  // plugins/vinyl/search.js — Global search integration via Lampa.Search.addSource
  function Search() {
    var api = Api.get();

    // Extract image URL from JioSaavn API item
    function getImageUrl(item) {
      if (Array.isArray(item.image)) {
        // JioSaavn image array: elements can be strings (URLs) or objects with .url
        var candidate = item.image[2] || item.image[1] || item.image[0] || '';
        return typeof candidate === 'string' ? candidate : candidate && candidate.url ? candidate.url : '';
      }
      return typeof item.image === 'string' ? item.image : item.picture || '';
    }

    /**
     * Perform search via 4 parallel per-type API requests (songs, albums, artists, playlists).
     * Each endpoint has its own cache key, supports pagination, and returns total count.
     * Results are delivered progressively — sections appear as each request completes.
     * @param {string} query
     * @param {function} onResults - callback(results), may be called multiple times
     */
    this.search = function (query, onResults) {
      if (!query || query.length < 2) {
        if (onResults) onResults([]);
        return;
      }

      // Mapping functions for each result type
      function mapSong(song) {
        var img = getImageUrl(song);
        return {
          title: Api.decodeHtml(song.title || song.name || 'Unknown'),
          subtitle: Api.decodeHtml(song.primaryArtists || song.artist || song.subtitle || ''),
          img: img,
          poster: img,
          image: img,
          id: song.id,
          vinyl_type: 'song',
          media: 'song',
          vinyl_data: song
        };
      }
      function mapAlbum(album) {
        var img = getImageUrl(album);
        return {
          title: Api.decodeHtml(album.title || album.name || 'Unknown'),
          subtitle: Api.decodeHtml(Api.extractArtist(album) || album.year || ''),
          img: img,
          poster: img,
          image: img,
          id: album.id,
          vinyl_type: 'album',
          media: 'album',
          vinyl_data: album
        };
      }
      function mapPlaylist(pl) {
        var img = getImageUrl(pl);
        return {
          title: Api.decodeHtml(pl.title || pl.name || 'Unknown'),
          subtitle: Api.decodeHtml(pl.subtitle || pl.artist || ''),
          img: img,
          poster: img,
          image: img,
          id: pl.id,
          vinyl_type: 'playlist',
          media: 'playlist',
          vinyl_data: pl
        };
      }
      function mapArtist(artist) {
        var img = getImageUrl(artist);
        return {
          title: Api.decodeHtml(artist.name || artist.title || 'Unknown'),
          subtitle: Api.decodeHtml(artist.artist || ''),
          img: img,
          poster: img,
          image: img,
          id: artist.id,
          vinyl_type: 'artist',
          media: 'artist',
          vinyl_data: artist
        };
      }

      // Per-type search configs — each hits a separate endpoint with its own cache key
      var typeConfigs = [{
        name: 'songs',
        priority: 1,
        method: 'searchSongs',
        mapper: mapSong,
        titleKey: 'vinyl_songs'
      }, {
        name: 'albums',
        priority: 2,
        method: 'searchAlbums',
        mapper: mapAlbum,
        titleKey: 'vinyl_albums'
      }, {
        name: 'artists',
        priority: 3,
        method: 'searchArtists',
        mapper: mapArtist,
        titleKey: 'vinyl_artists'
      }, {
        name: 'playlists',
        priority: 4,
        method: 'searchPlaylists',
        mapper: mapPlaylist,
        titleKey: 'vinyl_playlists'
      }];
      var accumulated = []; // accumulated sections across completed requests
      var completed = 0; // requests finished (success or error)
      var delivered = false; // onResults has been called at least once
      var total = typeConfigs.length;
      function tryDeliver() {
        accumulated.sort(function (a, b) {
          return a.priority - b.priority;
        });
        var sections = accumulated.map(function (s) {
          return s.section;
        });
        delivered = true;
        if (onResults) onResults(sections);
      }
      function handleType(config) {
        var onsuccess = function onsuccess(data) {
          completed++;
          if (data && data.results && Array.isArray(data.results) && data.results.length) {
            var items = data.results.slice(0, 12).map(config.mapper);
            var totalCount = typeof data.total === 'number' ? data.total : items.length;
            accumulated.push({
              priority: config.priority,
              section: {
                title: Lampa.Lang.translate(config.titleKey) + ' (' + totalCount + ')',
                results: items,
                total_pages: totalCount > 12 ? Math.ceil(totalCount / 12) : 1,
                vinyl_section_type: config.name
              }
            });

            // Progressive delivery: deliver all accumulated sections sorted by priority
            tryDeliver();
          }

          // All done, no results at all — deliver empty array
          if (completed === total && !delivered && !accumulated.length) {
            if (onResults) onResults([]);
          }
        };
        var onerror = function onerror() {
          completed++;
          if (completed === total && !delivered) {
            if (onResults) onResults([]);
          }
        };
        api[config.method](query, 1, onsuccess, onerror);
      }

      // Fire all 4 parallel requests
      for (var i = 0; i < typeConfigs.length; i++) {
        handleType(typeConfigs[i]);
      }
    };
    this.destroy = function () {
      // network is no longer used; API calls go through Api.get() which owns its own network
    };
  }

  // Интеграция в глобальный поиск Lampa через Lampa.Search.addSource
  Search.init = function () {
    var searchInst = new Search();
    Lampa.Search.addSource({
      title: Lampa.Lang.translate('vinyl_title'),
      params: {
        lazy: false,
        nofound: Lampa.Lang.translate('vinyl_no_results'),
        start_typing: Lampa.Lang.translate('vinyl_search')
      },
      // Mark every rendered Line so CSS `.main-search .vinyl-search-line .card__view`
      // can target the square aspect ratio without colliding with movie cards elsewhere.
      onRender: function onRender(line) {
        var el = line.render(true);
        el.addClass('vinyl-search-line');
        el.on('visible', function () {
          setTimeout(function () {
            line.emit('scroll');
          }, 100);
        });
      },
      search: function search(params, oncomplite) {
        var query = decodeURIComponent(params.query);
        searchInst.search(query, function (results) {
          oncomplite(results);
        });
      },
      onMore: function onMore(params, callback) {
        // params = { data, line, query }
        // Читаємо тип секції напряму з data — надійніше ніж парсити title
        var sectionType = params.data.vinyl_section_type;
        var typeMap = {
          songs: {
            type: 'songs',
            title: Lampa.Lang.translate('vinyl_songs')
          },
          albums: {
            type: 'albums',
            title: Lampa.Lang.translate('vinyl_albums')
          },
          artists: {
            type: 'artists',
            title: Lampa.Lang.translate('vinyl_artists')
          },
          playlists: {
            type: 'playlists',
            title: Lampa.Lang.translate('vinyl_playlists')
          }
        };
        var resolved = typeMap[sectionType] || typeMap['playlists'];
        if (callback) callback();
        Lampa.Activity.push({
          url: '',
          title: resolved.title + ': ' + params.query,
          component: 'vinyl_all',
          query: params.query,
          type: resolved.type,
          page: 1
        });
      },
      onSelect: function onSelect(data, callback) {
        var item = data.item_data || data.element;
        if (!item) return;
        if (item.vinyl_type === 'song') {
          var song = item.vinyl_data || item;
          Player.get().play(song, [song]);
        } else {
          if (callback) callback();
          if (item.vinyl_type === 'album') {
            Lampa.Activity.push({
              url: '',
              title: item.title || '',
              component: 'vinyl_album',
              id: item.id,
              page: 1,
              movie: {
                id: item.id,
                title: item.title,
                image: item.img || item.poster || item.image || ''
              }
            });
          } else if (item.vinyl_type === 'playlist') {
            Lampa.Activity.push({
              url: '',
              title: item.title || '',
              component: 'vinyl_playlist',
              id: item.id,
              page: 1,
              movie: {
                id: item.id,
                title: item.title,
                image: item.img || item.poster || item.image || ''
              }
            });
          } else if (item.vinyl_type === 'artist') {
            Lampa.Activity.push({
              url: '',
              title: item.title || '',
              component: 'vinyl_artist',
              id: item.id,
              page: 1,
              movie: {
                id: item.id,
                title: item.title,
                image: item.img || item.poster || item.image || ''
              }
            });
          }
        }
      },
      onCancel: function onCancel() {
        searchInst.destroy();
      }
    });

    // Listen to sources initialization to override the results count badge with the count of active sections
    if (Lampa.Search && Lampa.Search.listener) {
      Lampa.Search.listener.follow('sources', function (e) {
        if (e.sources && e.sources.listener) {
          e.sources.listener.follow('finded', function (event) {
            var targetTitle = Lampa.Lang.translate('vinyl_title');
            if (event.source.title === targetTitle) {
              var tabs = $(e.sources.tabs()).find('.search-source');
              var tab = tabs.filter(function () {
                return $(this).find('.search-source__tab').text() === targetTitle;
              });
              if (tab.length && Array.isArray(event.data)) {
                tab.find('.search-source__count').text(event.data.length);
              }
            }
          });
        }
      });
    }
  };

  // plugins/vinyl/lib/swipe.js — Horizontal swipe gesture layer for Vinyl player
  // Listens on document level, triggers PlayerPlaylist.next()/prev() on horizontal swipe.

  var startX = 0;
  var startY = 0;
  var startTime = 0;
  var isHorizontalSwipe = false;
  var gestureDecided = false;
  var wheelThrottle = 0;
  var isActive = false;
  var _onTouchStart = null;
  var _onTouchMove = null;
  var _onTouchEnd = null;
  var _onWheel = null;
  function init() {
    _onTouchStart = function _onTouchStart(e) {
      if (!isActive) return;
      var touch = e.touches[0] || e.changedTouches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
      isHorizontalSwipe = false;
      gestureDecided = false;
    };
    _onTouchMove = function _onTouchMove(e) {
      if (!isActive) return;
      var touch = e.touches[0] || e.changedTouches[0];
      var deltaX = touch.clientX - startX;
      var deltaY = touch.clientY - startY;

      // Decide direction after 20px of movement
      if (!gestureDecided && (Math.abs(deltaX) > 20 || Math.abs(deltaY) > 20)) {
        gestureDecided = true;
        isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
      }
      if (!isHorizontalSwipe) return;

      // Prevent default only for significant horizontal swipes
      if (Math.abs(deltaX) > 30) {
        e.preventDefault();
      }
    };
    _onTouchEnd = function _onTouchEnd(e) {
      if (!isActive) return;
      var touch = e.changedTouches[0];
      var deltaX = touch.clientX - startX;
      var swipeDuration = Date.now() - startTime;
      if (isHorizontalSwipe && Math.abs(deltaX) > 30) {
        var threshold = window.innerWidth / 3;
        if (swipeDuration < 150) {
          threshold = threshold / 3;
        }
        if (deltaX < -threshold) {
          Lampa.PlayerPlaylist.next();
        } else if (deltaX > threshold) {
          Lampa.PlayerPlaylist.prev();
        }
      }
      isHorizontalSwipe = false;
      gestureDecided = false;
    };
    _onWheel = function _onWheel(e) {
      if (!isActive) return;
      var now = Date.now();
      if (now - wheelThrottle < 300) return;
      if (e.wheelDelta / 120 > 0) {
        Lampa.PlayerPlaylist.prev();
      } else {
        Lampa.PlayerPlaylist.next();
      }
      wheelThrottle = now;
    };

    // Attach to document — always listening
    document.addEventListener('touchstart', _onTouchStart, {
      passive: true
    });
    document.addEventListener('touchmove', _onTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', _onTouchEnd, {
      passive: true
    });
    document.addEventListener('wheel', _onWheel, {
      passive: true
    });

    // Listen for player events
    Lampa.Player.listener.follow('start', function () {
      isActive = true;
    });
    Lampa.Player.listener.follow('destroy', function () {
      isActive = false;
    });
    Lampa.Player.listener.follow('close', function () {
      isActive = false;
    });
  }
  var Swipe = {
    init: init
  };

  // plugins/vinyl/vinyl.js — Entry point

  // Create a Card instance with custom hover:long behavior for vinyl items on the home screen
  function createVinylCard(item_data) {
    var card = Lampa.Maker.make('Card', item_data);

    // Lampa 3.0 Maker uses the Menu module which adds $(this.html).on('hover:long', ...)
    // in onCreate. We need to intercept create() to replace that handler.
    var origCreate = Object.getPrototypeOf(card).create;
    card.create = function () {
      // Run the original create (creates this.html, fires module onCreate handlers)
      origCreate.call(this);

      // Remove the default hover:long handler added by the Menu module
      $(this.html).off('hover:long');

      // Add our own hover:long handler that shows the vinyl context menu
      $(this.html).on('hover:long', function (e) {
        var data = card.data;
        var type = data.type || '';
        if (type === 'playlist') {
          showItemMenu(Api.get(), data, 'playlist', data.title || data.name || '', data.image || data.img || '');
        } else if (type === 'album') {
          showItemMenu(Api.get(), data, 'album', data.title || data.name || '', data.image || data.img || '');
        }
      });

      // Set subtitle (artist) in .card__age element
      var subtitle = this.data.subtitle || '';
      if (subtitle) {
        var decodedSubtitle = Api.decodeHtml(subtitle);
        var ageEl = this.html.querySelector('.card__age');
        if (ageEl) {
          ageEl.textContent = decodedSubtitle;
        } else {
          // .card__age was removed by Release module, recreate it
          var newAge = document.createElement('div');
          newAge.className = 'card__age';
          newAge.textContent = decodedSubtitle;
          var titleEl = this.html.querySelector('.card__title');
          if (titleEl && titleEl.parentNode) {
            titleEl.parentNode.insertBefore(newAge, titleEl.nextSibling);
          }
        }
      }
    };
    return card;
  }
  function startPlugin() {
    window.vinyl_plugin_ready = true;

    // 1. Manifest
    Lampa.Manifest.plugins = {
      type: 'audio',
      version: '1.1.0',
      name: Lampa.Lang.translate('vinyl_title'),
      component: 'vinyl',
      description: 'Vinyl — playlists, albums, radio'
    };

    // 2. Templates
    Lampa.Template.add('vinyl_card', "<div class=\"card card--vinyl selector layer--visible layer--render\">\n        <div class=\"card__view\">\n            <img src=\"./img/img_load.svg\" class=\"card__img\" />\n            <div class=\"card__icons\">\n                <div class=\"card__icons-inner\"></div>\n            </div>\n        </div>\n        <div class=\"card__title\">{title}</div>\n        <div class=\"card__age\">{subtitle}</div>\n    </div>");
    Lampa.Template.add('vinyl_track_item', "<div class=\"vinyl-track selector\">\n        <div class=\"vinyl-track__num\">{num}</div>\n        <div class=\"vinyl-track__info\">\n            <div class=\"vinyl-track__title\">{title}</div>\n            <div class=\"vinyl-track__sub\">{subtitle}</div>\n        </div>\n        <div class=\"vinyl-track__duration\">{duration}</div>\n    </div>");
    Lampa.Template.add('vinyl_track_new', "<div class=\"vinyl-track selector\" tabindex=\"0\">\n        <div class=\"vinyl-track__thumb\">\n            <img src=\"./img/img_load.svg\" onerror=\"this.src='./img/img_broken.svg'\" />\n        </div>\n        <div class=\"vinyl-track__num\">{num}</div>\n        <div class=\"vinyl-track__info\">\n            <div class=\"vinyl-track__title\">{title}</div>\n            <div class=\"vinyl-track__sub\">{subtitle}</div>\n        </div>\n        <div class=\"vinyl-track__duration\">{duration}</div>\n        <div class=\"vinyl-track__playing hide\">\n            <div class=\"vinyl-track__bar\"></div>\n            <div class=\"vinyl-track__bar\"></div>\n            <div class=\"vinyl-track__bar\"></div>\n        </div>\n    </div>");

    // 3. CSS injection via Template pattern
    Lampa.Template.add('vinyl_style', "\n        <style>\n        @charset 'UTF-8';\n        /* Space out the lines and cards to prevent sticking and blank gaps */\n        .vinyl-line {\n            padding-bottom: 0.8em !important;\n        }\n        .vinyl-line .scroll__body {\n            display: flex;\n        }\n        .vinyl-line .card {\n            width: 12em;\n            margin-right: 1.2em !important;\n        }\n        .vinyl-line .card + .card {\n            margin-left: 0 !important;\n        }\n\n        /* Make all vinyl-specific cards and detail page posters square */\n        .card--vinyl .card__view{padding-bottom:100% !important;}\n        .card--vinyl .card__img{-webkit-border-radius:6px;border-radius:6px;-o-object-fit:cover;object-fit:cover;}\n        .card--vinyl .card__title{font-size:1.15em;margin-top:0.6em;max-height:2.6em;line-height:1.2;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;}\n        .card--vinyl .card__age{font-size:0.9em;margin-top:0.3em;color:rgba(255,255,255,0.45);white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;}\n        \n        /* === Vinyl \"Show All\" paginated grid (6 columns) === */\n        .vinyl-all-grid {\n            display: grid !important;\n            grid-template-columns: repeat(6, 1fr) !important;\n            gap: 24px 20px !important;\n            padding: 20px 40px 80px !important;\n            width: 100% !important;\n            box-sizing: border-box !important;\n        }\n        /* Force ALL direct-card-children to equal grid-column width */\n        .vinyl-all-grid > .card {\n            width: auto !important;\n            min-width: 0 !important;\n            max-width: 100% !important;\n            margin: 0 !important;\n            flex-shrink: 0 !important;\n        }\n        /* Square aspect-ratio for the card view port */\n        .vinyl-all-grid > .card .card__view {\n            position: relative !important;\n            padding-bottom: 100% !important;\n            margin-bottom: 0 !important;\n        }\n        /* Image fills the square completely */\n        .vinyl-all-grid > .card .card__img {\n            position: absolute !important;\n            top: 0 !important;\n            left: 0 !important;\n            width: 100% !important;\n            height: 100% !important;\n            -webkit-border-radius: 6px !important;\n            border-radius: 6px !important;\n            -o-object-fit: cover !important;\n            object-fit: cover !important;\n        }\n        /* Typography with overflow protection */\n        .vinyl-all-grid > .card .card__title {\n            font-size: 1.15em !important;\n            margin-top: 0.6em !important;\n            max-height: 2.6em !important;\n            line-height: 1.2 !important;\n            overflow: hidden !important;\n            -o-text-overflow: ellipsis !important;\n            text-overflow: ellipsis !important;\n        }\n        .vinyl-all-grid > .card .card__age {\n            font-size: 0.9em !important;\n            margin-top: 0.3em !important;\n            color: rgba(255,255,255,0.45) !important;\n            white-space: nowrap !important;\n            overflow: hidden !important;\n            -o-text-overflow: ellipsis !important;\n            text-overflow: ellipsis !important;\n        }\n\n        .items-line--type-vinyl .card__view {\n            padding-bottom: 100% !important;\n        }\n        .items-line--type-vinyl .card__img {\n            -webkit-border-radius: 6px;\n            border-radius: 6px;\n            -o-object-fit: cover;\n            object-fit: cover;\n        }\n\n        .vinyl-start .full-start-new__poster{padding-bottom:100% !important;}\n\n        /* Search result cards \u2014 square aspect ratio.\n           Lampa renders them inside .main-search (not .vinyl-main),\n           so we scope via the class injected by onRender. */\n        .main-search .vinyl-search-line .card__view{padding-bottom:100%;}\n        .main-search .vinyl-search-line .card__img{-webkit-border-radius:6px;border-radius:6px;-o-object-fit:cover;object-fit:cover;}\n\n        /* Tracks styling with thumb image */\n        .vinyl-detail{padding:20px;}.vinyl-detail__header{display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline; align-items:baseline; gap:12px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);}.vinyl-detail__title{font-size:26px; font-weight:700; color:#fff;}.vinyl-detail__count{font-size:14px; color:rgba(255,255,255,0.5);}.vinyl-detail__list{display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column; flex-direction:column; gap:2px;}\n        \n        .vinyl-track{display:grid;grid-template-columns:48px 28px 1fr auto 40px;align-items:center;gap:12px;padding:8px 16px;border-radius:8px;transition:background 0.15s;outline:none;cursor:pointer;}\n        .vinyl-track:hover,.vinyl-track:focus,.vinyl-track.active{background:rgba(255,255,255,0.08);}\n        .vinyl-track__thumb{width:48px;height:48px;border-radius:6px;overflow:hidden;flex-shrink:0;background:rgba(255,255,255,0.05);}\n        .vinyl-track__thumb img{width:100%;height:100%;object-fit:cover;}\n        .vinyl-track__num{width:28px;text-align:center;font-size:13px;color:rgba(255,255,255,0.35);flex-shrink:0;}\n        .vinyl-track__info{min-width:0;display:flex;flex-direction:column;gap:3px;}\n        .vinyl-track__title{font-size:15px;font-weight:500;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n        .vinyl-track__sub{font-size:12px;color:rgba(255,255,255,0.45);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n        .vinyl-track__duration{font-size:12px;color:rgba(255,255,255,0.3);white-space:nowrap;flex-shrink:0;}\n\n        .vinyl-artist__image{width:200px; height:200px;-webkit-border-radius:50%; border-radius:50%; overflow:hidden; margin:0 auto 20px; border:3px solid rgba(255,255,255,0.15);}.vinyl-artist__image img{width:100%; height:100%;-o-object-fit:cover; object-fit:cover;}.vinyl-artist__bio{font-size:13px; color:rgba(255,255,255,0.7); line-height:1.6; margin-bottom:24px; padding:0 4px; max-height:120px; overflow:hidden;}.vinyl-artist__section-title{font-size:18px; font-weight:600; color:#fff; margin:24px 0 12px; padding-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.08);}.vinyl-artist__radio{display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center; align-items:center; gap:12px; padding:14px 20px; margin-top:28px;-webkit-border-radius:10px; border-radius:10px; background:rgba(255,255,255,0.06); cursor:pointer;-webkit-transition:background 0.2s;-o-transition:background 0.2s; transition:background 0.2s; border:1px solid rgba(255,255,255,0.1);}.vinyl-artist__radio:hover,.vinyl-artist__radio:focus,.vinyl-artist__radio.active{background:rgba(255,255,255,0.14);}.vinyl-artist__radio-icon{width:36px; height:36px;-webkit-border-radius:50%; border-radius:50%; background:rgba(76,175,80,0.25); display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center; align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center; justify-content:center; font-size:16px; color:#4CAF50;-webkit-flex-shrink:0;-ms-flex-negative:0; flex-shrink:0;}.vinyl-artist__radio-text{font-size:15px; color:#fff; font-weight:500;}\n\n        /* More card inside vinyl component lines \u2014 matches ContentRows style */\n        .vinyl-line .card-more {\n            flex-shrink: 0;\n            width: 12em;\n            cursor: pointer;\n        }\n        .vinyl-line .card-more .card-more__box {\n            width: 100%;\n            aspect-ratio: 1;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border: 2px solid rgba(255,255,255,0.15);\n            border-radius: 8px;\n            background: rgba(255,255,255,0.05);\n            transition: all 0.15s;\n            box-sizing: border-box;\n        }\n        .vinyl-line .card-more:hover .card-more__box,\n        .vinyl-line .card-more:focus .card-more__box,\n        .vinyl-line .card-more.focus .card-more__box {\n            background: rgba(255,255,255,0.12);\n            border-color: rgba(255,255,255,0.4);\n        }\n        .vinyl-line .card-more .card-more__title {\n            font-size: 1em;\n            color: rgba(255,255,255,0.6);\n            font-weight: 400;\n            text-align: center;\n        }\n        .vinyl-line .card-more:hover .card-more__title,\n        .vinyl-line .card-more:focus .card-more__title,\n        .vinyl-line .card-more.focus .card-more__title {\n            color: #fff;\n        }\n\n        /* Butterchurn visualizer overlay canvas */\n        .vinyl-visualizer {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            pointer-events: none;\n            overflow: hidden;\n        }\n        .vinyl-visualizer canvas {\n            width: 100%;\n            height: 100%;\n            display: block;\n        }\n\n        /* Vertical track list */\n        .vinyl-track-list {\n            padding: 0 1em;\n        }\n        .vinyl-track-list__title {\n            font-size: 1.2em;\n            font-weight: 600;\n            color: #fff;\n            margin-bottom: 0.8em;\n            padding: 0 0.5em;\n        }\n        .vinyl-track-list__body {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: column;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            gap: 2px;\n        }\n        .vinyl-track-row {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n            -webkit-align-items: center;\n            -ms-flex-align: center;\n            align-items: center;\n            gap: 1em;\n            padding: 0.7em 0.8em;\n            -webkit-border-radius: 8px;\n            border-radius: 8px;\n            -webkit-transition: background 0.15s;\n            -o-transition: background 0.15s;\n            transition: background 0.15s;\n            cursor: pointer;\n        }\n        .vinyl-track-row:hover,\n        .vinyl-track-row:focus,\n        .vinyl-track-row.active {\n            background: rgba(255,255,255,0.08);\n        }\n        .vinyl-track-row--current {\n            background: rgba(255,255,255,0.06);\n        }\n        .vinyl-track-row--current .vinyl-track-row__name {\n            color: #4CAF50;\n        }\n        .vinyl-track-row__num {\n            width: 2em;\n            text-align: right;\n            color: rgba(255,255,255,0.4);\n            font-size: 14px;\n            -webkit-flex-shrink: 0;\n            -ms-flex-negative: 0;\n            flex-shrink: 0;\n        }\n        .vinyl-track-row__num-play {\n            display: none;\n        }\n        .vinyl-track-row:hover .vinyl-track-row__num-text,\n        .vinyl-track-row:focus .vinyl-track-row__num-text,\n        .vinyl-track-row.active .vinyl-track-row__num-text {\n            display: none;\n        }\n        .vinyl-track-row:hover .vinyl-track-row__num-play,\n        .vinyl-track-row:focus .vinyl-track-row__num-play,\n        .vinyl-track-row.active .vinyl-track-row__num-play {\n            display: inline;\n        }\n        .vinyl-track-row__info {\n            -webkit-box-flex: 1;\n            -webkit-flex: 1;\n            -ms-flex: 1;\n            flex: 1;\n            min-width: 0;\n        }\n        .vinyl-track-row__name {\n            font-size: 15px;\n            font-weight: 500;\n            color: #fff;\n            white-space: nowrap;\n            overflow: hidden;\n            -o-text-overflow: ellipsis;\n            text-overflow: ellipsis;\n        }\n        .vinyl-track-row__meta {\n            font-size: 12px;\n            color: rgba(255,255,255,0.45);\n            white-space: nowrap;\n            overflow: hidden;\n            -o-text-overflow: ellipsis;\n            text-overflow: ellipsis;\n            margin-top: 2px;\n        }\n        .vinyl-track-row__time {\n            font-size: 13px;\n            color: rgba(255,255,255,0.35);\n            -webkit-flex-shrink: 0;\n            -ms-flex-negative: 0;\n            flex-shrink: 0;\n        }\n        </style>\n    ");
    if (window.plugin_vinyl_css_injected) return;
    window.plugin_vinyl_css_injected = true;
    $('body').append(Lampa.Template.get('vinyl_style', {}, true));

    // 4. Translations
    Lampa.Lang.add({
      vinyl_title: {
        ru: 'Vinyl',
        uk: 'Vinyl',
        en: 'Vinyl',
        be: 'Vinyl'
      },
      vinyl_playlists: {
        ru: 'Плейлисты',
        uk: 'Плейлисти',
        en: 'Playlists',
        be: 'Плэйлісты'
      },
      vinyl_albums: {
        ru: 'Альбомы',
        uk: 'Альбоми',
        en: 'Albums',
        be: 'Альбомы'
      },
      vinyl_radio: {
        ru: 'Радио',
        uk: 'Радіо',
        en: 'Radio',
        be: 'Радыё'
      },
      vinyl_search: {
        ru: 'Поиск музыки',
        uk: 'Пошук музики',
        en: 'Search music',
        be: 'Пошук музыкі'
      },
      vinyl_play: {
        ru: 'Слушать',
        uk: 'Слухати',
        en: 'Play',
        be: 'Слухаць'
      },
      vinyl_songs: {
        ru: 'Треки',
        uk: 'Треки',
        en: 'Songs',
        be: 'Трэкі'
      },
      vinyl_artists: {
        ru: 'Исполнители',
        uk: 'Виконавці',
        en: 'Artists',
        be: 'Выканаўцы'
      },
      vinyl_more: {
        ru: 'Больше',
        uk: 'Більше',
        en: 'More',
        be: 'Больш'
      },
      vinyl_singles: {
        ru: 'Синглы',
        uk: 'Сингли',
        en: 'Singles',
        be: 'Сінглы'
      },
      vinyl_similar_artists: {
        ru: 'Похожие исполнители',
        uk: 'Схожі виконавці',
        en: 'Similar Artists',
        be: 'Падобныя выканаўцы'
      },
      vinyl_home_lines: {
        ru: 'Показывать линии на главной',
        uk: 'Показувати лінії на головній',
        en: 'Show lines on home screen',
        be: 'Паказваць лініі на галоўнай'
      },
      vinyl_featured_playlists: {
        ru: 'Плейлисты',
        uk: 'Плейлисти',
        en: 'Playlists',
        be: 'Плэйлісты'
      },
      vinyl_featured_albums: {
        ru: 'Альбомы',
        uk: 'Альбоми',
        en: 'Albums',
        be: 'Альбомы'
      },
      vinyl_quality: {
        ru: 'Качество звука',
        uk: 'Якість звуку',
        en: 'Audio quality',
        be: 'Якасць гуку'
      },
      vinyl_auto_next: {
        ru: 'Авто-продолжение',
        uk: 'Авто-продовження',
        en: 'Auto next',
        be: 'Аўта-працяг'
      },
      vinyl_no_results: {
        ru: 'Ничего не найдено',
        uk: 'Нічого не знайдено',
        en: 'No results',
        be: 'Нічога не знойдзена'
      },
      vinyl_visualizer: {
        ru: 'Визуализация MilkDrop',
        uk: 'Візуалізація MilkDrop',
        en: 'MilkDrop Visualizer',
        be: 'Візуалізацыя MilkDrop'
      },
      vinyl_visualizer_preset: {
        ru: 'Пресет визуализации',
        uk: 'Пресет візуалізації',
        en: 'Visualizer preset',
        be: 'Прэсет візуалізацыі'
      },
      vinyl_viz_random: {
        ru: 'Случайный',
        uk: 'Випадковий',
        en: 'Random',
        be: 'Выпадковы'
      },
      vinyl_shuffle: {
        ru: 'Перемешать',
        uk: 'Перемішати',
        en: 'Shuffle',
        be: 'Перамяшаць'
      },
      vinyl_details: {
        ru: 'Детали',
        uk: 'Деталі',
        en: 'Details',
        be: 'Дэталі'
      },
      vinyl_genres: {
        ru: 'Жанры',
        uk: 'Жанри',
        en: 'Genres',
        be: 'Жанры'
      },
      vinyl_player_type: {
        ru: 'Тип плеера для музыки',
        uk: 'Тип плеєра для музики',
        en: 'Music player type',
        be: 'Тып плэера для музыкі'
      }
    });

    // 5. Settings
    Lampa.Params.select('vinyl_quality', {
      '12': '12 kbps',
      '48': '48 kbps',
      '96': '96 kbps',
      '160': '160 kbps',
      '320': '320 kbps'
    }, '320');
    Lampa.Params.trigger('vinyl_auto_next', true);
    Lampa.Params.trigger('vinyl_visualizer', false);
    Lampa.Params.select('vinyl_visualizer_preset', {
      'random': Lampa.Lang.translate('vinyl_viz_random')
    }, 'random');

    // Реєструємо компонент в налаштуваннях
    Lampa.SettingsApi.addComponent({
      component: 'vinyl',
      icon: "<svg height=\"36\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M9 18V5l12-2v13\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <circle cx=\"6\" cy=\"18\" r=\"3\" stroke=\"white\" stroke-width=\"2\"/>\n            <circle cx=\"18\" cy=\"16\" r=\"3\" stroke=\"white\" stroke-width=\"2\"/>\n        </svg>",
      name: Lampa.Lang.translate('vinyl_title')
    });

    // Додаємо параметри
    Lampa.SettingsApi.addParam({
      component: 'vinyl',
      param: {
        name: 'vinyl_quality',
        type: 'select',
        values: {
          '12': '12 kbps',
          '48': '48 kbps',
          '96': '96 kbps',
          '160': '160 kbps',
          '320': '320 kbps'
        },
        "default": '320'
      },
      field: {
        name: Lampa.Lang.translate('vinyl_quality')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'vinyl',
      param: {
        name: 'vinyl_auto_next',
        type: 'trigger',
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('vinyl_auto_next')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'vinyl',
      param: {
        name: 'vinyl_visualizer',
        type: 'trigger',
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('vinyl_visualizer')
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'vinyl',
      param: {
        name: 'vinyl_visualizer_preset',
        type: 'select',
        values: {
          'random': Lampa.Lang.translate('vinyl_viz_random')
        },
        "default": 'random'
      },
      field: {
        name: Lampa.Lang.translate('vinyl_visualizer_preset')
      }
    })

    // 5a. Register music player type setting in the Player settings page
    // (data-component="player") after the player_torrent selector
  ;
    (function registerMusicPlayerSetting() {
      var opts = {
        'inner': '#{settings_param_player_inner}'
      };

      // Platform detection for external player options
      if (Lampa.Platform.is('tizen')) {
        opts['tizen'] = 'Tizen';
      } else if (Lampa.Platform.is('webos')) {
        opts['webos'] = 'WebOS';
      } else if (Lampa.Platform.is('orsay')) {
        opts['orsay'] = 'Orsay';
      } else if (Lampa.Platform.is('android')) {
        opts['android'] = 'Android';
      } else if (Lampa.Platform.desktop() && !Lampa.Platform.macOS()) {
        opts['other'] = '#{settings_param_player_outside}';
      } else if (Lampa.Platform.macOS()) {
        opts['iina'] = 'IINA';
        opts['mpv'] = 'MPV';
        opts['infuse'] = 'Infuse';
      } else if (Lampa.Platform.is('apple')) {
        opts['ios'] = 'iOS';
        opts['vlc'] = 'VLC';
        opts['infuse'] = 'Infuse';
      } else if (Lampa.Platform.is('apple_tv')) {
        opts['tvospro'] = '#{settings_param_player_inner_tvos} tvOS Pro';
        opts['tvos'] = '#{settings_param_player_inner_tvos} tvOS Universal';
        opts['vlc'] = 'VLC';
        opts['infuse'] = 'Infuse';
      }
      Lampa.SettingsApi.addParam({
        component: 'player',
        param: {
          name: 'player_music',
          type: 'select',
          values: opts,
          "default": 'inner'
        },
        field: {
          name: Lampa.Lang.translate('vinyl_player_type')
        },
        onRender: function onRender(item) {
          // Defer reposition until after comp.append(item) adds element to DOM
          setTimeout(function () {
            var torrentField = $('[data-name="player_torrent"]');
            if (torrentField.length) {
              torrentField.after(item);
              Lampa.Params.listener.send('update_scroll');
            }
          }, 0);
        }
      });
    })();

    // 6. Init modules
    Api.init();
    Player.init();
    Search.init();

    // 6a1. Init horizontal swipe gesture for track switching
    Swipe.init();

    // Pause/resume visualizer on video play/pause events
    Lampa.Player.listener.follow('start', function (data) {
      if (data && data.vinyl && Lampa.Storage.get('vinyl_visualizer', false)) {
        ButterchurnViz.resume();
      }
    });
    Lampa.Player.listener.follow('destroy', function () {
      ButterchurnViz.stop();
    });

    // 6b. Home lines integration via Lampa.ContentRows
    if (Lampa.ContentRows && Lampa.ContentRows.add) {
      Lampa.ContentRows.add({
        name: 'vinyl_playlists',
        title: "Vinyl ".concat(Lampa.Lang.translate('vinyl_featured_playlists')),
        index: 1,
        screen: ['main'],
        call: function call(params, screen) {
          return function (call) {
            Api.get().getFeaturedPlaylists(1, function (data) {
              if (Array.isArray(data) && data.length) {
                var items = data.slice(0, 11).map(function (elem) {
                  return {
                    id: elem.id,
                    title: Api.decodeHtml(elem.title || elem.name),
                    name: Api.decodeHtml(elem.title || elem.name),
                    image: elem.image || elem.picture,
                    img: elem.image || elem.picture,
                    type: 'playlist',
                    media: 'playlist',
                    vinyl: true
                  };
                });
                Lampa.Utils.extendItemsParams(items, {
                  createInstance: function createInstance(item) {
                    return createVinylCard(item);
                  }
                });
                call({
                  title: Lampa.Lang.translate('vinyl_featured_playlists'),
                  results: items,
                  total_pages: 2,
                  params: {
                    type: 'vinyl',
                    more: {
                      text: Lampa.Lang.translate('more'),
                      title: Lampa.Lang.translate('vinyl_featured_playlists'),
                      component: 'vinyl_all',
                      type: 'playlists'
                    }
                  }
                });
              } else {
                call(null);
              }
            }, function () {
              call(null);
            });
          };
        }
      });
      Lampa.ContentRows.add({
        name: 'vinyl_albums',
        title: "Vinyl ".concat(Lampa.Lang.translate('vinyl_featured_albums')),
        index: 1,
        screen: ['main'],
        call: function call(params, screen) {
          return function (call) {
            Api.get().getAlbums(1, function (data) {
              if (Array.isArray(data) && data.length) {
                var items = data.slice(0, 11).map(function (elem) {
                  return {
                    id: elem.id,
                    title: Api.decodeHtml(elem.title || elem.name),
                    name: Api.decodeHtml(elem.title || elem.name),
                    subtitle: Api.extractArtist(elem),
                    image: elem.image || elem.picture,
                    img: elem.image || elem.picture,
                    type: 'album',
                    media: 'album',
                    vinyl: true
                  };
                });
                Lampa.Utils.extendItemsParams(items, {
                  createInstance: function createInstance(item) {
                    return createVinylCard(item);
                  }
                });
                call({
                  title: Lampa.Lang.translate('vinyl_featured_albums'),
                  results: items,
                  total_pages: 2,
                  params: {
                    type: 'vinyl',
                    more: {
                      text: Lampa.Lang.translate('more'),
                      title: Lampa.Lang.translate('vinyl_featured_albums'),
                      component: 'vinyl_all',
                      type: 'albums'
                    }
                  }
                });
              } else {
                call(null);
              }
            }, function () {
              call(null);
            });
          };
        }
      });
    }

    // Guard against double-patching Router on re-init
    if (window.__vinyl_router_patched) return;
    window.__vinyl_router_patched = true;
    var original_router_call = Lampa.Router.call;
    Lampa.Router.call = function (component, object) {
      if (component === 'full' && object && object.vinyl) {
        // Click on home screen card -> play immediately
        if (object.type === 'playlist') {
          playPlaylist(Api.get(), object.id, false);
        } else if (object.type === 'album') {
          playAlbum(Api.get(), object.id, false);
        } else if (object.type === 'radio') {
          playRadio(Api.get(), object.name || object.title || '', object.id, object.radioType || 'genre', false);
        } else if (object.type === 'artist') {
          Lampa.Activity.push({
            url: '',
            title: object.title || object.name || '',
            component: 'vinyl_artist',
            id: object.id,
            page: 1,
            movie: {
              id: object.id,
              title: object.title || object.name || '',
              image: object.image || object.img || ''
            }
          });
        } else if (object.type === 'genre') {
          Lampa.Activity.push({
            url: '',
            title: object.title || object.name || '',
            component: 'vinyl_genre',
            genreId: object.id,
            genreImage: object.image || object.img || '',
            page: 1
          });
        } else {
          // For any other vinyl type, set method so pushState doesn't default to 'tv'
          object.method = object.media || object.type || '';
          original_router_call.call(Lampa.Router, component, object);
        }
      } else if (component === 'category_full' && object && object.params && object.params.type === 'vinyl' && object.params.more) {
        // Redirect "More" navigation from ContentRows lines to vinyl_all component
        var more = object.params.more;
        Lampa.Activity.push({
          url: '',
          title: more.title || more.text || object.title,
          component: more.component || 'vinyl_all',
          type: more.type || 'playlists',
          page: 1
        });
      } else {
        original_router_call.call(Lampa.Router, component, object);
      }
    };

    // 7. Component registration
    Lampa.Component.add('vinyl', Component);
    Lampa.Component.add('vinyl_playlist', PlaylistComponent);
    Lampa.Component.add('vinyl_album', AlbumComponent);
    Lampa.Component.add('vinyl_artist', ArtistComponent);
    Lampa.Component.add('vinyl_radio', RadioComponent);
    Lampa.Component.add('vinyl_genre', GenreComponent);
    Lampa.Component.add('vinyl_all', AllComponent);

    // 8. Menu button
    function add() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg height=\"36\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M9 18V5l12-2v13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    <circle cx=\"6\" cy=\"18\" r=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                    <circle cx=\"18\" cy=\"16\" r=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(Lampa.Lang.translate('vinyl_title'), "</div>\n        </li>"));
      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('vinyl_title'),
          component: 'vinyl',
          page: 1
        });
      });
      $('.menu .menu__list').eq(0).append(button);
    }
    if (window.appready) add();else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') add();
      });
    }
  }
  if (!window.vinyl_plugin_ready) startPlugin();

})();
