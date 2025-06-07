(function () {
    'use strict';

    function component(object) {
      console.log('component', object);
      var explorer = new Lampa.Explorer(object);
      var filter = new Lampa.Filter(object);
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      var last;
      var choice = {
        season: object.movie.number_of_seasons
      };
      this.create = function () {
        this.filter();
        this.selected();
        explorer.appendFiles(scroll.render());
        explorer.appendHead(filter.render());
        scroll.body().addClass('torrent-list');
        explorer.render().find('.filter--search, .filter--sort').remove();
        scroll.minus(explorer.render().find('.explorer__files-head'));
        this.load();
        this.activity.toggle();
        return this.render();
      };
      this.filter = function () {
        var _this = this;
        filter.addButtonBack();
        filter.onSelect = function (type, a, b) {
          choice.season = b.season; //и так сойде ;]

          _this.selected();
          _this.load();
        };
        filter.onBack = function () {
          _this.start();
        };
      };
      this.selected = function () {
        var select = [];
        var seasons = [];
        for (var i in choice) {
          if (i === 'season') select.push(Lampa.Lang.translate('torrent_serial_season') + ': ' + choice[i]);
        }
        for (var _i = 0; _i < object.movie.number_of_seasons; _i++) {
          seasons.push({
            title: _i + 1,
            season: _i + 1
          });
        }
        filter.set('filter', [{
          title: Lampa.Lang.translate('torrent_serial_season'),
          subtitle: choice.season,
          noselect: true,
          items: seasons
        }]);
        filter.chosen('filter', select);
      };
      this.load = function () {
        var _this2 = this;
        this.activity.loader(true);
        var season = choice.season;
        Lampa.Api.clear();

        // Проверяем, есть ли сезоны
        if (object.movie.number_of_seasons) {
          // Это сериал
          Lampa.Api.seasons(object.movie, [season], function (v) {
            last = false;
            scroll.clear();
            scroll.reset();
            if (v[season] && v[season].episodes && v[season].episodes.length) {
              _this2.season(v[season]);
              _this2.draw(v[season].episodes);
            } else {
              _this2.empty();
            }
            _this2.activity.loader(false);
          });
        } else {
          // Это фильм
          Lampa.Api.movie(object.movie.id, function (v) {
            last = false;
            scroll.clear();
            scroll.reset();
            if (v) {
              _this2.drawMovie(v); // Вызов функции для обработки фильма
            } else {
              _this2.empty();
            }
            _this2.activity.loader(false);
          });
        }
      };

      // Функция для обработки информации о фильме
      this.drawMovie = function (movie) {
        var tpl = Lampa.Template.get('season_info', movie);

        // Добавьте необходимую логику для отображения информации о фильме
        scroll.append(tpl);
      };
      this.season = function (season) {
        var head = [];
        if (season.vote_average) head.push(Lampa.Lang.translate('title_rating') + ': ' + parseFloat(season.vote_average + '').toFixed(1));
        if (season.air_date) head.push(Lampa.Lang.translate('full_date_of_release') + ': ' + Lampa.Utils.parseTime(season.air_date).full);
        head.push(Lampa.Lang.translate('title_episodes') + ': ' + season.episodes.length);
        season.head = head.join('&nbsp; ● &nbsp;');
        var tpl = Lampa.Template.get('season_info', season);
        tpl.on('hover:focus', function (e) {
          scroll.update($(e.target), true);
        });
        if (!season.overview) tpl.find('.season-info__overview').remove();
        scroll.append(tpl);
      };
      this.empty = function () {
        var em = Lampa.Template.get('empty_filter');
        var bn = $('<div class="simple-button selector"><span>' + Lampa.Lang.translate('filter_clarify') + '</span></div>');
        bn.on('hover:enter', function () {
          filter.render().find('.filter--filter').trigger('hover:enter');
        });
        em.find('.empty-filter__title').remove();
        em.find('.empty-filter__buttons').removeClass('hide').append(bn);
        scroll.append(em);
        Lampa.Controller.enable('content');
      };
      this.draw = function (episodes) {
        episodes.forEach(function (episode, index) {
          var number = episode.episode_number || index + 1;
          var hash = Lampa.Utils.hash([choice.season, choice.season > 10 ? ':' : '', number, object.movie.original_title].join(''));
          var info = [];
          var out_air = new Date((episode.air_date + '').replace(/-/g, '/'));
          var out_now = Date.now();
          var out_day = episode.air_date ? Math.round((out_air.getTime() - out_now) / (24 * 60 * 60 * 1000)) : 1;
          var out_txt = Lampa.Lang.translate('full_episode_days_left') + ': ' + (episode.air_date ? out_day : '- -');
          episode.timeline = Lampa.Timeline.view(hash);
          episode.time = Lampa.Utils.secondsToTime(episode.runtime * 60, true);
          episode.title = episode.name || Lampa.Lang.translate('torrent_serial_episode') + ' ' + number;
          episode.quality = out_day > 0 ? out_txt : '';
          if (episode.vote_average) info.push(Lampa.Template.get('season_episode_rate', {
            rate: parseFloat(episode.vote_average + '').toFixed(1)
          }, true));
          if (episode.air_date) info.push(Lampa.Utils.parseTime(episode.air_date).full);
          episode.info = info.length ? info.map(function (i) {
            return '<span>' + i + '</span>';
          }).join('<span class="season-episode-split">●</span>') : '';
          var html = Lampa.Template.get('season_episode', episode);
          var loader = html.find('.season-episode__loader');
          var image = html.find('.season-episode__img');
          var viewed = function viewed() {
            html.find('.season-episode__viewed').remove();
            if (Boolean(episode.timeline.percent)) html.find('.season-episode__img').append('<div class="season-episode__viewed">' + Lampa.Template.get('icon_viewed', {}, true) + '</div>');
          };
          html.find('.season-episode__timeline').append(Lampa.Timeline.render(episode.timeline));
          if (out_day > 0) html.css('opacity', '0.5');else {
            viewed();
            if (Boolean(episode.timeline.percent)) last = html[0];
            html.on('hover:enter', function () {
              if (Boolean(episode.timeline.percent)) {
                episode.timeline.time = 0;
                episode.timeline.percent = 0;
              } else {
                episode.timeline.time = episode.timeline.duration * 0.95;
                episode.timeline.percent = 95;
              }

              //Lampa.Timeline.update(episode.timeline)
              console.log('hover:enter');
              viewed();
            });
          }
          html.on('hover:enter', function () {}).on('hover:focus', function (e) {
            last = e.target;
            scroll.update($(e.target), true);
          }).on('visible', function () {
            var img = html.find('img')[0];
            img.onerror = function () {
              img.src = './img/img_broken.svg';
            };
            img.onload = function () {
              image.addClass('season-episode__img--loaded');
              loader.remove();
              image.append('<div class="season-episode__episode-number">' + ('0' + number).slice(-2) + '</div>');
            };
            if (episode.still_path) img.src = Lampa.TMDB.image('t/p/w300' + episode.still_path);else if (episode.img) img.src = episode.img;else {
              loader.remove();
              image.append('<div class="season-episode__episode-number">' + ('0' + number).slice(-2) + '</div>');
            }
          }).on('hover:hover hover:touch', function (e) {
            last = e.target;
            Navigator.focused(last);
          });
          scroll.append(html);
        });
        if (last) scroll.update($(last), true);
        Lampa.Layer.visible(scroll.render(true));
        Lampa.Controller.enable('content');
      };
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(object.movie));
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render(), explorer.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            filter.show(Lampa.Lang.translate('title_filter'), 'filter');
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            if (Navigator.canmove('down')) Navigator.move('down');
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
        return explorer.render();
      };
      this.destroy = function () {};
    }

    Lampa.Platform.tv();
    function startPlugin() {
      window.plugin_onlinelme_ready = true;
      var manifest = {
        type: "video",
        version: "0.1",
        name: "Online LME",
        description: "Add save button for torrent",
        component: "onlinelme",
        onContextMenu: function onContextMenu(object) {
          return {
            name: Lampa.Lang.translate('online_watch'),
            description: ''
          };
        },
        onContextLauch: function onContextLauch(object) {
          Lampa.Component.add('onlinelme', component);
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('title_online'),
            component: 'onlinelme',
            movie: object,
            page: 1
          });
        }
      };
      var button = "<div class=\"full-start__button selector view--online\" data-subtitle=\"Prestige v".concat(manifest.version, "\">\n        <svg width=\"135\" height=\"147\" viewBox=\"0 0 135 147\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M121.5 96.8823C139.5 86.49 139.5 60.5092 121.5 50.1169L41.25 3.78454C23.25 -6.60776 0.750004 6.38265 0.750001 27.1673L0.75 51.9742C4.70314 35.7475 23.6209 26.8138 39.0547 35.7701L94.8534 68.1505C110.252 77.0864 111.909 97.8693 99.8725 109.369L121.5 96.8823Z\" fill=\"currentColor\"/>\n            <path d=\"M63 84.9836C80.3333 94.991 80.3333 120.01 63 130.017L39.75 143.44C22.4167 153.448 0.749999 140.938 0.75 120.924L0.750001 94.0769C0.750002 74.0621 22.4167 61.5528 39.75 71.5602L63 84.9836Z\" fill=\"currentColor\"/>\n        </svg>\n\n        <span>#{title_online}</span>\n    </div>");

      // нужна заглушка, а то при страте лампы говорит пусто
      Lampa.Component.add('onlinelme', component);
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
          var btn = $(Lampa.Lang.translate(button));
          btn.on('hover:enter', function () {
            Lampa.Component.add('onlinelme', component);
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('title_online'),
              component: 'onlinelme',
              movie: e.data.movie,
              page: 1
            });
          });
          e.object.activity.render().find('.view--torrent').after(btn);
        }
      });
      Lampa.Manifest.plugins = manifest;
      if (window.appready) ;else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") ;
        });
      }
    }
    if (!window.plugin_onlinelme_ready) startPlugin();

})();
