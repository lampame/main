(function () {
  'use strict';

  function genre() {
    return [{
      "title": "Поиск музыки",
      "type": "custom",
      "thumbnail": "<svg width=\"200\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"12\" rx=\"2\" fill=\"#FFFFFF\"/>\n  <path d=\"M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z\" fill=\"#000000\"/>\n</svg>"
    }, {
      "title": "Поп",
      "type": "live",
      "query": "Pop",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n                  <path d=\"M12 3V15.55C11.42 15.21 10.74 15 10 15C8.34 15 7 16.34 7 18C7 19.66 8.34 21 10 21C11.66 21 13 19.66 13 18V8H16V3H12Z\" fill=\"#000000\"/>\n                </svg>"
    }, {
      "title": "Рок",
      "type": "live",
      "query": "Rock",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n              <path d=\"M12 2C11.45 2 11 2.45 11 3V5H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V5H5V3C5 2.45 4.55 2 4 2C3.45 2 3 2.45 3 3V21C3 21.55 3.45 22 4 22C4.55 22 5 21.55 5 21V19H7V21C7 21.55 7.45 22 8 22C8.55 22 9 21.55 9 21V19H11V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V19H15V21C15 21.55 15.45 22 16 22C16.55 22 17 21.55 17 21V19H19V21C19 V21.55,19.45,22,20,22C20.55,22,21,21.55,21,21V3C21,2.45,20.55,2,20,2C19.45,2,19,2.45,19,3V5H17V3C17,2.45,16.55,2,16,2C15.45,2,15,2.45,15,3V5H13V3C13,2.45,12.55,2,12,2ZM5 ,17H7V15H5 V17ZM9 ,17H11 V15 H9 V17ZM13 ,17 H15 V15 H13 V17ZM17 ,17 H19 V15 H17 V17Z\" fill=\"#000000\"/>\n            </svg>"
    }, {
      "title": "Хип-хоп/Рэп",
      "type": "live",
      "query": "Hip-Hop/Rap",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n              <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 15H14.5V13H13V15H11V13H9V15H7V9H9V11H11V9H13V11H14.5V9H16.5V15Z\" fill=\"#000000\"/>\n            </svg>"
    }, {
      "title": "Электронная музыка",
      "type": "live",
      "query": "Electronic/Dance",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n              <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 16H8.5C7.67 16 7 15.33 7 14.5V9.5C7 8.67 7.67 8 8.5 8H15.5C16.33 8 17 8.67 17 9.5V14.5C17 15.33 16.33 16 15.5 16ZM9.5 10H14.5V14H9.5V10Z\" fill=\"#000000\"/>\n            </svg>"
    }, {
      "title": "Джаз",
      "type": "live",
      "query": "Jazz",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n  <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 16H14V10.5L11.5 12V16H10V12L7.5 10.5V16H6V8H7.5L10.5 9.5L13.5 8H15V16Z\" fill=\"#000000\"/>\n</svg>"
    }, {
      "title": "Классическая музыка",
      "type": "live",
      "query": "Classical music",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n  <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 14H14V8H10V14H8.5V16H15.5V14Z\" fill=\"#000000\"/>\n</svg>"
    }, {
      "title": "R&B/Soul",
      "type": "live",
      "query": "R&B/Soul",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n  <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 15H14.5V13H13V15H11V13H9V15H7V9H9V11H11V9H13V11H14.5V9H16.5V15Z\" fill=\"#000000\"/>\n</svg>"
    }, {
      "title": "Кантри",
      "type": "live",
      "query": "Country",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n  <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.5 16H9.5C8.67 16 8 15.33 8 14.5V9.5C8 8.67 8.67 8 9.5 8H14.5C15.33 8 16 8.67 16 9.5V14.5C16 15.33 15.33 16 14.5 16ZM10.5 10H13.5V14H10.5V10Z\" fill=\"#000000\"/>\n</svg>"
    }, {
      "title": "Регги",
      "type": "live",
      "query": "Reggae",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n  <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 14H13V10H11V14H8.5V16H15.5V14Z\" fill=\"#000000\"/>\n</svg>"
    }, {
      "title": "Блюз",
      "type": "live",
      "query": "Blues",
      "thumbnail": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"24\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\"/>\n  <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.5 16H9.5C8.67 16 8 15.33 8 14.5V9.5C8 8.67 8.67 8 9.5 8H14.5C15.33 8 16 8.67 16 9.5V14.5C16 15.33 15.33 16 14.5 16ZM10.5 10H13.5V14H10.5V10Z\" fill=\"#000000\"/>\n</svg>"
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
    }).fail(function (jqXHR, textStatus, errorThrown) {
      Lampa.Noty.show('Кажется сервису поиска плохо, попробуй еще раз');
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

  function _readOnlyError(name) {
    throw new TypeError("\"" + name + "\" is read-only");
  }

  function Item(data) {
    var item;
    if (data.type === 'live') item = Lampa.Template.get("lme_item", {
      name: data.title
    });
    if (data.type === 'custom') item = Lampa.Template.get("lme_item--use", {
      name: data.title
    });
    var img = item.find("img")[0];
    if (data.type === 'live') {
      img.onerror = function () {
        img.src = "./img/img_broken.svg";
      };
      // Create a blob URL for the SVG string
      var blob = new Blob([data.thumbnail], {
        type: 'image/svg+xml'
      });
      img.src = URL.createObjectURL(blob);
    } else if (data.type !== 'custom') {
      img.src = data.thumbnail;
    }
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      img.onerror = function () {};
      img.onload = function () {};
      img.src = "";
      item.remove();
    };
  }

  function Component() {
    var network = new Lampa.Reguest();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var items = [];
    var html = $("<div class='lmem-module'></div>");
    var headpanel = $("<div class='lmem-headpanel category-full'></div>");
    var headbody = $('<div class="lmem-catalog--title">Live по Жанрам</div>');
    var body = $('<div class="lmem-catalog--list category-full"></div>');
    var active;
    var last;
    this.create = function () {
      this.activity.loader(true);
      this.build();
      return this.render();
    };
    this.build = function () {
      scroll.minus();
      //Put header
      this.header(genre());
      //Put Live Chanel
      this.live(genre());
      //Put blank
      scroll.append(headpanel);
      scroll.append(headbody);
      scroll.append(body);
      //Put all in page
      html.append(scroll.render());
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.header = function (chanel) {
      chanel.forEach(function (video) {
        if (video.type === 'custom') {
          var item = new Item(video);
          item.render().on("hover:focus", function () {
            last = item.render()[0];
            active = items.indexOf(item);
            scroll.update(items[active].render(), true);
          }).on("hover:enter", function () {
            MUSIC.search();
          });
          headpanel.append(item.render());
          items.push(item);
        }
      });
    };
    this.live = function (chanel) {
      chanel.forEach(function (video) {
        if (video.type === 'live') {
          var item = new Item(video);
          item.render().on("hover:focus", function () {
            last = item.render()[0];
            active = items.indexOf(item);
            scroll.update(items[active].render(), true);
          }).on("hover:enter", function () {
            request(video.query);
          });
          body.append(item.render());
          items.push(item);
        }
      });
    };
    this.append = function (element) {
      element.forEach(function (video) {
        var item = new Item(video);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        }).on("hover:enter", function () {
          console.log('start', video, element);
        });
        body.append(item.render());
        items.push(item);
      });
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.background = function () {
      Lampa.Background.immediately("");
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) return;
      this.background();
      Lampa.Controller.add("content", {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (Navigator.canmove("left")) Navigator.move("left");else Lampa.Controller.toggle("menu");
        },
        right: function right() {
          Navigator.move("right");
        },
        up: function up() {
          if (Navigator.canmove("up")) Navigator.move("up");else Lampa.Controller.toggle("head");
        },
        down: function down() {
          if (Navigator.canmove("down")) Navigator.move("down");
        },
        back: this.back
      });
      Lampa.Controller.toggle("content");
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
      _readOnlyError("items");
      _readOnlyError("network");
    };
  }

  function component(manifest) {
    var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0,0,300,150\">\n                    <g fill=\"#ffffff\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g transform=\"scale(5.12,5.12)\"><path d=\"M8.03125,8.45703c-0.26088,0.00188 -0.52094,0.1055 -0.71094,0.3125c-3.925,4.272 -6.32031,9.97147 -6.32031,16.23047c0,6.259 2.39531,11.95847 6.32031,16.23047c0.38,0.414 1.03659,0.41262 1.43359,0.01563l2.12891,-2.12891c0.383,-0.383 0.38058,-0.99253 0.01758,-1.39453c-3.045,-3.37 -4.90039,-7.83366 -4.90039,-12.72266c0,-4.889 1.85539,-9.35266 4.90039,-12.72266c0.363,-0.402 0.36542,-1.01053 -0.01758,-1.39453l-2.12891,-2.12891c-0.1985,-0.1985 -0.46178,-0.29875 -0.72266,-0.29687zM41.96875,8.45703c-0.26112,-0.00162 -0.52416,0.09838 -0.72266,0.29688l-2.13086,2.13086c-0.383,0.383 -0.38058,0.99058 -0.01758,1.39258c3.046,3.369 4.90234,7.83366 4.90234,12.72266c0,4.889 -1.85539,9.35266 -4.90039,12.72266c-0.363,0.402 -0.36542,1.01053 0.01758,1.39453l2.12891,2.12891c0.397,0.397 1.05359,0.39738 1.43359,-0.01562c3.925,-4.272 6.32031,-9.97147 6.32031,-16.23047c0,-6.259 -2.39531,-11.95847 -6.32031,-16.23047c-0.19,-0.207 -0.44981,-0.31087 -0.71094,-0.3125zM35.625,14.83789c-0.26987,-0.01338 -0.54541,0.08251 -0.75391,0.29101l-2.13086,2.13086c-0.359,0.359 -0.39827,0.93717 -0.07227,1.32617c1.456,1.738 2.33203,3.97506 2.33203,6.41406c0,2.439 -0.87603,4.67511 -2.33203,6.41211c-0.326,0.389 -0.28674,0.96717 0.07227,1.32617l2.13086,2.13281c0.417,0.417 1.09642,0.37959 1.48242,-0.06641c2.272,-2.629 3.64648,-6.05669 3.64648,-9.80469c0,-3.748 -1.37448,-7.17569 -3.64648,-9.80469c-0.193,-0.223 -0.45864,-0.34405 -0.72852,-0.35742zM14.375,14.83984c-0.26988,0.01337 -0.53552,0.13442 -0.72852,0.35742c-2.272,2.628 -3.64648,6.05473 -3.64648,9.80273c0,3.748 1.37448,7.17569 3.64648,9.80469c0.386,0.446 1.06542,0.48341 1.48242,0.06641l2.13086,-2.13086c0.359,-0.359 0.39827,-0.93717 0.07227,-1.32617c-1.456,-1.738 -2.33203,-3.97506 -2.33203,-6.41406c0,-2.439 0.87603,-4.67511 2.33203,-6.41211c0.326,-0.389 0.28674,-0.96717 -0.07227,-1.32617l-2.13086,-2.13281c-0.2085,-0.2085 -0.48403,-0.30244 -0.75391,-0.28906zM25,19c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c3.314,0 6,-2.686 6,-6c0,-3.314 -2.686,-6 -6,-6z\"></path></g></g>\n                </svg>\n            </div>\n            <div class=\"menu__text\">LME Music</div>\n        </li>");
    button.on("hover:enter", function () {
      Lampa.Activity.push({
        url: '',
        title: 'Music and Live',
        component: 'lme',
        page: 1
      });
    });
    $(".menu .menu__list").eq(0).append(button);
  }

  function add() {
    Lampa.Template.add("lme_item", "<div class=\"card selector lme-item\">\n                <div class=\"lme-item__imgbox\">\n                    <img class=\"lme-item__img\"/>\n                </div>\n                <div class=\"lme-item__name\">{name}</div>\n            </div>");
    Lampa.Template.add("lme_item--use", "<div class=\"lme-item--use simple-button selector\">\n                <div class=\"lme-item__name--use\">{name}</div>\n            </div>");
    Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.card.selector.lme-item--use{margin-left:1em;margin-bottom:1em;width:20%;height:10%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lme-item__name--use{margin-top:-0.2em}.lmem-catalog--title{margin:1% 5% 1% 5%;font-size:1.6em;font-weight:400}.lme-item{margin-left:1em;margin-bottom:1em;width:13%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lme-item__imgbox{background-color:#3e3e3e;padding-bottom:100%;position:relative;-webkit-border-radius:.3em;border-radius:.3em}.lme-item__listeners{position:absolute;top:.5em;left:.5em;background-color:#eee;padding:.1em .3em;font-size:.7em;font-weight:bold;color:#292d32;-webkit-border-radius:.25em;border-radius:.25em}.lme-item__listeners>svg{width:1em;height:1em;vertical-align:bottom}.lme-item__img{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-border-radius:.4em;border-radius:.4em}.lme-item__name{font-size:1.1em;margin-top:.8em}.lme-item.focus .lme-item__imgbox::after{border:solid .26em #fff;content:'';display:block;position:absolute;left:-0.5em;top:-0.5em;right:-0.5em;bottom:-0.5em;-webkit-border-radius:.8em;border-radius:.8em}@-webkit-keyframes sound{from{height:.1em}to{height:1em}}@-o-keyframes sound{from{height:.1em}to{height:1em}}@keyframes sound{from{height:.1em}to{height:1em}}@-webkit-keyframes sound-loading{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes sound-loading{from{-o-transform:rotate(0);transform:rotate(0)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sound-loading{from{-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@media screen and (max-width:580px){.lme-item{width:21%}}@media screen and (max-width:385px){.lme-item__name{display:none}}\n        </style>\n    ");
    //Lang.main()
    Lampa.Manifest.plugins = {
      type: "other",
      version: "0.0.1",
      author: '@lme_chat',
      name: "LME Music",
      description: "Music and Live content from YouTube",
      component: "lme"
    };
    Lampa.Component.add('lme', Component);
    $('body').append(Lampa.Template.get('lmemStyle', {}, true));
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
