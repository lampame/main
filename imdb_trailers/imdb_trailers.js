(function () {
    'use strict';

    var API_URL = 'https://proxy.m7-club.com/?url=https://caching.graphql.imdb.com/';
    var QUERY = 'query TopTrendingVideoTrailersQuery($first: Int!, $after: ID) { topTrendingTitles(first: $first, after: $after, input: { dataWindow: HOURS trafficSource: XWW }) { edges { node { item { __typename id titleText { text } primaryImage { url height width } latestTrailer { playbackURLs { url videoDefinition videoMimeType displayName { value } } thumbnail { url height width } } } } } pageInfo { hasNextPage endCursor startCursor } } }';
    function getBestUrl(trailerData, quality) {
      var urls = trailerData.latestTrailer && trailerData.latestTrailer.playbackURLs;
      if (!urls || !urls.length) return '';
      var mp4 = urls.filter(function (u) {
        return u.videoMimeType === 'MP4';
      });
      var pool = mp4.length ? mp4 : urls;
      var target = 'DEF_' + quality + 'p';
      var order = ['DEF_2160p', 'DEF_1440p', 'DEF_1080p', 'DEF_720p', 'DEF_480p', 'DEF_240p'];
      var exact = pool.find(function (u) {
        return u.videoDefinition === target;
      });
      if (exact) return exact.url;
      var idx = order.indexOf(target);
      if (idx === -1) idx = order.indexOf('DEF_1080p');
      var _loop = function _loop(i) {
          var match = pool.find(function (u) {
            return u.videoDefinition === order[i];
          });
          if (match) return {
            v: match.url
          };
        },
        _ret;
      for (var i = idx; i < order.length; i++) {
        _ret = _loop(i);
        if (_ret) return _ret.v;
      }
      var _loop2 = function _loop2(_i) {
          var match = pool.find(function (u) {
            return u.videoDefinition === order[_i];
          });
          if (match) return {
            v: match.url
          };
        },
        _ret2;
      for (var _i = idx - 1; _i >= 0; _i--) {
        _ret2 = _loop2(_i);
        if (_ret2) return _ret2.v;
      }
      return pool[0].url;
    }
    function wrapProxy(url) {
      return 'https://proxy.m7-club.com/?url=' + url;
    }
    function shouldUseProxy() {
      var player = Lampa.Storage.get('player');
      if (player && player !== 'inner') return false;
      return true;
    }
    function fetchTrailers(network, after, count, success, error) {
      var vars = {
        first: count || 12
      };
      if (after) {
        vars.after = after;
      }
      var body = JSON.stringify({
        query: QUERY,
        variables: vars
      });
      network["native"](API_URL, success, error, body, {
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
      });
    }

    function component() {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250,
        end_ratio: 2
      });
      var items = [];
      var html = $('<div></div>');
      var body = $('<div class="category-full mapping--grid cols--6"></div>');
      var cursor = null;
      var loading = false;
      var last;
      this.create = function () {
        var _this = this;
        this.activity.loader(true);
        fetchTrailers(network, null, 12, this.build.bind(this), function () {
          var empty = new Lampa.Empty();
          html.append(empty.render());
          _this.start = empty.start.bind(empty);
          _this.activity.loader(false);
          _this.activity.toggle();
        });
        return this.render();
      };
      this.build = function (json) {
        if (!json || !json.data) return;
        var data = json.data.topTrendingTitles;
        if (!data) return;
        var edges = data.edges || [];
        var pageInfo = data.pageInfo || {};
        cursor = pageInfo.endCursor || null;
        loading = false;
        scroll.minus();
        html.append(scroll.render());
        scroll.onEnd = function () {
          if (cursor && !loading) {
            loading = true;
            fetchTrailers(network, cursor, 12, this.build.bind(this), function () {
              loading = false;
            });
          }
        }.bind(this);
        var rawItems = [];
        edges.forEach(function (edge) {
          var item = edge.node && edge.node.item;
          if (item && item.latestTrailer) {
            rawItems.push(item);
          }
        }, this);
        rawItems.forEach(function (item) {
          this.append(item, rawItems);
        }, this);
        scroll.append(body);
        this.activity.loader(false);
        this.activity.toggle();
      };
      this.append = function (element, allItems) {
        var cardData = {
          title: element.titleText ? element.titleText.text : '',
          name: element.titleText ? element.titleText.text : ''
        };
        var card = Lampa.Template.get('card', cardData);
        card.find('.card__age').remove();
        var img = card.find('.card__img')[0];
        img.onerror = function () {
          img.src = './img/img_broken.svg';
        };
        if (element.primaryImage && element.primaryImage.url) {
          img.src = element.primaryImage.url;
        } else if (element.latestTrailer && element.latestTrailer.thumbnail && element.latestTrailer.thumbnail.url) {
          img.src = element.latestTrailer.thumbnail.url;
        } else {
          img.src = './img/img_broken.svg';
        }
        card.on('hover:focus', function (e) {
          last = e.target;
          scroll.update($(e.target), true);
        });
        card.on('hover:enter', function () {
          var quality = Lampa.Storage.get('video_quality_default') || '1080';
          var all = allItems && allItems.length ? allItems : [element];
          var playlist = [];
          all.forEach(function (t) {
            var url = getBestUrl(t, quality);
            if (url) {
              playlist.push({
                title: t.titleText ? t.titleText.text : '',
                url: shouldUseProxy() ? wrapProxy(url) : url
              });
            }
          });
          if (!playlist.length) {
            Lampa.Noty.show('No trailer available');
            return;
          }
          var currentTitle = element.titleText ? element.titleText.text : '';
          var current = playlist.find(function (p) {
            return p.title === currentTitle;
          }) || playlist[0];
          Lampa.Player.play(current);
          Lampa.Player.playlist(playlist);
        });
        body.append(card);
        items.push(card);
      };
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        if (!items.length) return;
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
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
        network.clear();
        Lampa.Arrays.destroy(items);
        scroll.destroy();
        html.remove();
        items = null;
        network = null;
      };
    }

    function startPlugin() {
      window.imdb_trailers = true;
      Lampa.Component.add('imdb_trailers', component);
      Lampa.Lang.add({
        imdb_trailers_title: {
          ru: 'Популярное',
          uk: 'Популярне',
          en: 'Populars'
        }
      });
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          var svg_icon = "<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M13.646 10.237c-.057-.032-.16-.048-.313-.048v3.542c.201 0 .324-.041.371-.122s.07-.301.07-.66v-2.092c0-.244-.008-.4-.023-.469a.223.223 0 0 0-.105-.151zm3.499 1.182c-.082 0-.137.031-.162.091-.025.061-.037.214-.037.46v1.426c0 .237.014.389.041.456.029.066.086.1.168.1.086 0 .199-.035.225-.103.027-.069.039-.234.039-.495V11.97c0-.228-.014-.377-.043-.447-.032-.069-.147-.104-.231-.104z\"></path><path d=\"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6.631 14.663H5.229V9.266h1.402v5.397zm4.822 0H10.23l-.006-3.643-.49 3.643h-.875L8.342 11.1l-.004 3.563H7.111V9.266H8.93c.051.327.107.71.166 1.15l.201 1.371.324-2.521h1.832v5.397zm3.664-1.601c0 .484-.027.808-.072.97a.728.728 0 0 1-.238.383.996.996 0 0 1-.422.193c-.166.037-.418.055-.754.055h-1.699V9.266h1.047c.678 0 1.07.031 1.309.093.24.062.422.164.545.306.125.142.203.3.234.475.031.174.051.516.051 1.026v1.896zm3.654.362c0 .324-.023.565-.066.723a.757.757 0 0 1-.309.413.947.947 0 0 1-.572.174c-.158 0-.365-.035-.502-.104a1.144 1.144 0 0 1-.377-.312l-.088.344h-1.262V9.266h1.35v1.755a1.09 1.09 0 0 1 .375-.289c.137-.064.344-.096.504-.096.186 0 .348.029.484.087a.716.716 0 0 1 .44.549c.016.1.023.313.023.638v1.514z\"></path></g></svg>";
          if (Lampa.Manifest.app_digital >= 300 && Lampa.Menu && Lampa.Menu.addButton) {
            Lampa.Menu.addButton(svg_icon, Lampa.Lang.translate('imdb_trailers_title'), function () {
              Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('imdb_trailers_title'),
                component: 'imdb_trailers',
                page: 1
              });
            });
          } else {
            var button = $("<li class=\"menu__item selector\">\n                    <div class=\"menu__ico\">\n                        ".concat(svg_icon, "\n                    </div>\n                    <div class=\"menu__text\">").concat(Lampa.Lang.translate('imdb_trailers_title'), "</div>\n                </li>"));
            button.on('hover:enter', function () {
              Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('imdb_trailers_title'),
                component: 'imdb_trailers',
                page: 1
              });
            });
            $('.menu .menu__list').eq(0).append(button);
          }
          Lampa.ContentRows.add({
            name: 'imdb_trailers_main',
            title: 'IMDB ' + Lampa.Lang.translate('imdb_trailers_title'),
            index: 2,
            screen: ['main'],
            call: function call(params, screen) {
              var lineNetwork = new Lampa.Reguest();
              return function (call) {
                fetchTrailers(lineNetwork, null, 12, function (json) {
                  var data = json.data && json.data.topTrendingTitles;
                  if (!data || !data.edges || !data.edges.length) {
                    call(null);
                    return;
                  }
                  var items = [];
                  data.edges.forEach(function (edge) {
                    var item = edge.node && edge.node.item;
                    if (item && item.latestTrailer) {
                      items.push(item);
                    }
                  });
                  items.forEach(function (item) {
                    item.name = item.titleText ? item.titleText.text : '';
                    if (item.primaryImage && item.primaryImage.url) {
                      item.poster = item.primaryImage.url;
                    }
                    if (item.latestTrailer && item.latestTrailer.thumbnail && item.latestTrailer.thumbnail.url) {
                      item.card_image = item.latestTrailer.thumbnail.url;
                    }
                  });
                  items.forEach(function (item) {
                    if (!item.params) item.params = {};
                    item.params.on = {
                      enter: function enter(cardInstance, element) {
                        var quality = Lampa.Storage.get('video_quality_default') || '1080';
                        var playlist = items.map(function (t) {
                          var url = getBestUrl(t, quality);
                          if (url) {
                            return {
                              title: t.titleText ? t.titleText.text : '',
                              url: shouldUseProxy() ? wrapProxy(url) : url
                            };
                          }
                          return null;
                        }).filter(function (p) {
                          return p;
                        });
                        if (!playlist.length) return;
                        var currentTitle = element.titleText ? element.titleText.text : '';
                        var current = playlist.find(function (p) {
                          return p.title === currentTitle;
                        }) || playlist[0];
                        Lampa.Player.play(current);
                        Lampa.Player.playlist(playlist);
                      }
                    };
                  });
                  call({
                    title: Lampa.Lang.translate('imdb_trailers_title'),
                    results: items,
                    total_pages: 2,
                    icon_svg: svg_icon,
                    icon_bgcolor: '#f5c518',
                    icon_color: '#000000',
                    params: {
                      module: Lampa.Maker.module('Line').toggle(Lampa.Maker.module('Line').MASK.base, 'Icon'),
                      emit: {
                        onlyMore: function onlyMore() {
                          Lampa.Activity.push({
                            url: '',
                            title: this.data.title,
                            component: 'imdb_trailers',
                            page: 1
                          });
                        }
                      }
                    }
                  });
                }, function () {
                  call(null);
                });
              };
            }
          });
        }
      });
    }
    if (!window.imdb_trailers) startPlugin();

})();
