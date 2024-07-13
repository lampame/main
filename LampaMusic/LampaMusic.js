(function () {
    'use strict';

    function genre() {
      return [{
        "title": "Поиск музыки",
        "type": "custom"
      }, {
        "title": "Поп",
        "type": "live",
        "query": "Pop"
      }, {
        "title": "Рок",
        "type": "live",
        "query": "Rock"
      }, {
        "title": "Хип-хоп/Рэп",
        "type": "live",
        "query": "Hip-Hop/Rap"
      }, {
        "title": "Электронная музыка",
        "type": "live",
        "query": "Electronic/Dance"
      }, {
        "title": "Джаз",
        "type": "live",
        "query": "Jazz"
      }, {
        "title": "Классическая музыка",
        "type": "live",
        "query": "Classical music"
      }, {
        "title": "R&B/Soul",
        "type": "live",
        "query": "R&B/Soul"
      }, {
        "title": "Кантри",
        "type": "live",
        "query": "Country"
      }, {
        "title": "Регги",
        "type": "live",
        "query": "Reggae"
      }, {
        "title": "Блюз",
        "type": "live",
        "query": "Blues"
      }];
    }

    function request(query) {
      var settings = {
        url: "https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://lmemusic-0ho252zr59om.runkit.sh/live",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "origin": "Lampa"
        },
        data: JSON.stringify({
          key: query
        })
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        Lampa.Player.play(response[0]);
        Lampa.Player.playlist(response);
      });
    }

    function search() {
      Lampa.Input.edit({
        free: true,
        nosave: true,
        nomic: true,
        value: ''
      }, function (val) {
        if (val) {
          getVideos(val);
        } else {
          Lampa.Controller.toggle('content');
        }
      });
    }
    function getVideos(query) {
      var settings = {
        url: "https://p01--corsproxy--h7ynqrkjrc6c.code.run/https://lmemusic-0ho252zr59om.runkit.sh/search-music",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "origin": "Lampa"
        },
        data: JSON.stringify({
          key: query
        })
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        Lampa.Player.play(response[0]);
        Lampa.Player.playlist(response);
      });
    }
    var MUSIC = {
      search: search,
      getVideos: getVideos
    };

    function component(manifest) {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0,0,300,150\">\n                    <g fill=\"#ffffff\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g transform=\"scale(5.12,5.12)\"><path d=\"M8.03125,8.45703c-0.26088,0.00188 -0.52094,0.1055 -0.71094,0.3125c-3.925,4.272 -6.32031,9.97147 -6.32031,16.23047c0,6.259 2.39531,11.95847 6.32031,16.23047c0.38,0.414 1.03659,0.41262 1.43359,0.01563l2.12891,-2.12891c0.383,-0.383 0.38058,-0.99253 0.01758,-1.39453c-3.045,-3.37 -4.90039,-7.83366 -4.90039,-12.72266c0,-4.889 1.85539,-9.35266 4.90039,-12.72266c0.363,-0.402 0.36542,-1.01053 -0.01758,-1.39453l-2.12891,-2.12891c-0.1985,-0.1985 -0.46178,-0.29875 -0.72266,-0.29687zM41.96875,8.45703c-0.26112,-0.00162 -0.52416,0.09838 -0.72266,0.29688l-2.13086,2.13086c-0.383,0.383 -0.38058,0.99058 -0.01758,1.39258c3.046,3.369 4.90234,7.83366 4.90234,12.72266c0,4.889 -1.85539,9.35266 -4.90039,12.72266c-0.363,0.402 -0.36542,1.01053 0.01758,1.39453l2.12891,2.12891c0.397,0.397 1.05359,0.39738 1.43359,-0.01562c3.925,-4.272 6.32031,-9.97147 6.32031,-16.23047c0,-6.259 -2.39531,-11.95847 -6.32031,-16.23047c-0.19,-0.207 -0.44981,-0.31087 -0.71094,-0.3125zM35.625,14.83789c-0.26987,-0.01338 -0.54541,0.08251 -0.75391,0.29101l-2.13086,2.13086c-0.359,0.359 -0.39827,0.93717 -0.07227,1.32617c1.456,1.738 2.33203,3.97506 2.33203,6.41406c0,2.439 -0.87603,4.67511 -2.33203,6.41211c-0.326,0.389 -0.28674,0.96717 0.07227,1.32617l2.13086,2.13281c0.417,0.417 1.09642,0.37959 1.48242,-0.06641c2.272,-2.629 3.64648,-6.05669 3.64648,-9.80469c0,-3.748 -1.37448,-7.17569 -3.64648,-9.80469c-0.193,-0.223 -0.45864,-0.34405 -0.72852,-0.35742zM14.375,14.83984c-0.26988,0.01337 -0.53552,0.13442 -0.72852,0.35742c-2.272,2.628 -3.64648,6.05473 -3.64648,9.80273c0,3.748 1.37448,7.17569 3.64648,9.80469c0.386,0.446 1.06542,0.48341 1.48242,0.06641l2.13086,-2.13086c0.359,-0.359 0.39827,-0.93717 0.07227,-1.32617c-1.456,-1.738 -2.33203,-3.97506 -2.33203,-6.41406c0,-2.439 0.87603,-4.67511 2.33203,-6.41211c0.326,-0.389 0.28674,-0.96717 -0.07227,-1.32617l-2.13086,-2.13281c-0.2085,-0.2085 -0.48403,-0.30244 -0.75391,-0.28906zM25,19c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c3.314,0 6,-2.686 6,-6c0,-3.314 -2.686,-6 -6,-6z\"></path></g></g>\n                </svg>\n            </div>\n            <div class=\"menu__text\">LME Music</div>\n        </li>");
      button.on("hover:enter", function () {
        var items = genre();
        Lampa.Select.show({
          title: 'Что Слушаем?',
          items: items,
          onSelect: function onSelect(a) {
            if (a.type === 'live') request(a.query);
            if (a.type === 'custom') MUSIC.search();
          },
          onBack: function onBack() {
            Lampa.Controller.toggle('menu');
          }
        });
      });
      $(".menu .menu__list").eq(0).append(button);
    }

    function add() {
      //Lang.main()
      Lampa.Manifest.plugins = {
        type: "other",
        version: "0.0.1",
        author: '@lme_chat',
        name: "LME Music",
        description: "Music and Live content from YouTube",
        component: "lme"
      };
      component();
    }
    function startPlugin() {
      window.plugin_lmelm_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_lmelm_ready) startPlugin();

})();
