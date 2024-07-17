(function () {
    'use strict';

    function main$4() {
      Lampa.Lang.add({
        lme_EngData_desc: {
          ru: "Добавляет английское название произведения, и заменяет описание если оно отсутсвует",
          en: "Adds the English title and replaces the description if it is missing",
          uk: "Додає англійську назву твору та замінює опис, якщо він відсутній"
        },
        lme_quality_desc: {
          ru: "Для источников кроме Cub, добавляет лейбл с качеством. Где это возможно",
          en: "For sources other than Cub, adds a quality label where possible",
          uk: "Для джерел, окрім Cub, додає лейбл з якістю. Де це можливо"
        },
        lme_averageRuntime_desc: {
          ru: "Добавляет среднее время серии",
          en: "Adds average episode runtime",
          uk: "Додає середній час серії"
        }
      });
    }
    var Lang = {
      main: main$4
    };

    function main$3() {
      Lampa.SettingsApi.addComponent({
        component: "lme",
        name: 'Movie Enhancer',
        icon: '<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 431.661 431.661" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffffff;" d="M180.355,213.668l40.079,40.085L42.526,431.661L2.446,391.576L180.355,213.668z M228.877,245.316 l-40.079-40.085l68.905-68.911l40.091,40.079L228.877,245.316z"></path> <polygon style="fill:#ffffff;" points="380.066,218.525 391.999,218.519 391.999,181.309 429.215,181.309 429.215,169.376 391.999,169.376 391.999,132.166 380.066,132.166 380.066,169.376 342.862,169.376 342.862,181.309 380.066,181.309 "></polygon> <polygon style="fill:#ffffff;" points="393.282,260.424 393.282,248.49 356.073,248.49 356.073,211.281 344.145,211.281 344.145,248.49 306.93,248.49 306.93,260.424 344.145,260.424 344.145,297.633 356.073,297.633 356.073,260.424 "></polygon> <polygon style="fill:#ffffff;" points="302.956,37.209 265.741,37.209 265.741,0 253.807,0 253.807,37.209 216.603,37.209 216.603,49.143 253.807,49.143 253.807,86.353 265.741,86.353 265.741,49.143 302.956,49.143 "></polygon> <polygon style="fill:#ffffff;" points="223.853,73.148 186.638,73.148 186.638,35.932 174.71,35.932 174.71,73.148 137.495,73.148 137.495,85.076 174.71,85.076 174.71,122.291 186.638,122.291 186.638,85.076 223.853,85.076 "></polygon> </g> </g></svg>'
      });
      //Quality
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_quality",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Quality',
          description: Lampa.Lang.translate('lme_quality_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //English data
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_endata",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'English data',
          description: Lampa.Lang.translate('lme_EngData_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      //TV Show time
      Lampa.SettingsApi.addParam({
        component: "lme",
        param: {
          name: "lme_averageRuntime",
          type: "trigger",
          "default": false
        },
        field: {
          name: 'Show time',
          description: Lampa.Lang.translate('lme_averageRuntime_desc')
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
    }
    var CONFIG = {
      main: main$3
    };

    function main$2() {
      var apiKey = '4ef0d7355d9ffb5151e987764708ce96';
      var baseUrl = 'http://tmdb.cub.red/3/';
      function fetchMovieDetails(movieId, method, callback) {
        var apiUrl = "".concat(baseUrl).concat(method, "/").concat(movieId, "?api_key=").concat(apiKey);
        $.getJSON(apiUrl).done(function (data) {
          return callback(null, data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
          callback(new Error("Fetch error: ".concat(textStatus, ", ").concat(errorThrown)));
        });
      }
      function appendQualityElement(release_quality, parentElement) {
        if (!release_quality) return;
        var newDivider = $("<span>", {
          "class": 'full-start-new__split',
          html: "\u25CF"
        });
        var newSpan = $("<span>", {
          "class": 'full-start__pg',
          html: "".concat(Lampa.Lang.translate('player_quality'), ": ").concat(release_quality.toUpperCase()),
          css: {
            'border-color': function () {
              switch (release_quality.toLowerCase()) {
                case 'ts':
                  return 'red';
                case 'webdl':
                case 'dvdrip':
                  return 'yellow';
                case '4k':
                case 'bd':
                  return 'green';
              }
            }()
          }
        });
        parentElement.append(newDivider, newSpan);
        if (Lampa.Platform.screen('mobile') !== true) {
          var quality = $("<div>", {
            "class": "card__quality",
            css: {
              zIndex: 999,
              fontSize: "75%"
            }
          });
          quality.append($("<div>", {
            text: release_quality
          }));
          $(".full-start-new__poster").append(quality);
        }
      }
      Lampa.Listener.follow("full", function (e) {
        if (e.type === "complite" && Lampa.Storage.field('source') !== 'cub') {
          $(document).ready(function () {
            fetchMovieDetails(e.data.movie.id, e.object.method, function (err, data) {
              if (err) {
                console.error(err.message);
                return;
              }
              appendQualityElement(data.release_quality, $(".full-start-new__details"));
            });
          });
        }
      });
      Lampa.Listener.follow("line", function (e) {
        if (e.type === "append" && Lampa.Storage.field("source") !== "cub") {
          $.each(e.items, function (_, movieCard) {
            if (movieCard.data && (movieCard.data.id || movieCard.data.number_of_seasons)) {
              var id = movieCard.data.id || 0;
              var mediaType = movieCard.data.media_type || (movieCard.data.number_of_seasons ? "tv" : "movie");
              fetchMovieDetails(id, mediaType, function (err, data) {
                if (err) {
                  console.error(err.message);
                  return;
                }
                if (data.release_quality) {
                  var quality = $("<div>", {
                    "class": "card__quality"
                  });
                  quality.append($("<div>", {
                    text: data.release_quality
                  }));
                  $(movieCard.card).find(".card__view").append(quality);
                }
              });
            } else {
              console.warn("movieCard.data is undefined or missing id/number_of_seasons:", movieCard);
            }
          });
        }
      });
    }
    var Quality = {
      main: main$2
    };

    function main$1() {
      Lampa.Listener.follow("full", function (cardData) {
        if (cardData.type === "complite") {
          var _cardData$object = cardData.object,
            method = _cardData$object.method,
            id = _cardData$object.id;
          var apiKey = "4ef0d7355d9ffb5151e987764708ce96";
          var apiUrlTMDB = 'https://api.themoviedb.org/3/';
          var apiUrlProxy = 'apitmdb.' + (Lampa.Manifest && Lampa.Manifest.cub_domain ? Lampa.Manifest.cub_domain : 'cub.red') + '/3/';
          var request = "".concat(method, "/").concat(id, "?api_key=").concat(apiKey, "&language=en");
          var url = Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + apiUrlProxy + request : apiUrlTMDB + request;
          $.ajax({
            url: url,
            method: "GET",
            timeout: 0
          }).done(function (response) {
            var englishTitle = method === "movie" ? response.title : response.name || "Not found";
            var englishDesc = response.overview || "";
            $("<div>", {
              "class": "english-title",
              text: englishTitle
            }).appendTo(".full-start-new__head");
            if (cardData.data.movie.overview === '') {
              $(".full-descr__text").html($("<div>", {
                "class": "english-desc",
                text: englishDesc
              }));
            }
          }).fail(function () {
            $("<div>", {
              "class": "english-title",
              text: "Not found"
            }).appendTo(".full-start-new__head");
          });
        }
      });
    }
    var Englishdata = {
      main: main$1
    };

    function main() {
      //averageRuntime
      Lampa.Listener.follow("full", function (cardData) {
        if (cardData.type === "complite") {
          var imdbId = cardData.data.movie.imdb_id;
          if (imdbId) {
            $.ajax({
              url: "https://api.tvmaze.com/lookup/shows?imdb=".concat(imdbId),
              method: "GET",
              success: function success(response) {
                var averageRuntime = response.averageRuntime;
                //const formattedRuntime = `00:${averageRuntime}`;
                // Преобразование в формат HH:mm
                var hours = Math.floor(averageRuntime / 60);
                var minutes = averageRuntime % 60;
                var formattedRuntime = "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));

                // Создаем новый span для времени
                var runtimeSpan = $("<span>", {
                  id: "averageRuntime",
                  text: formattedRuntime
                });

                // Создаем новый span для разделителя
                var splitSpan = $("<span>", {
                  "class": "full-start-new__split",
                  text: "●"
                });

                // Вставляем оба новых элемента в начало контейнера
                $(".full-start-new__details").prepend(splitSpan).prepend(runtimeSpan);
              },
              error: function error(_error) {
                console.error("Ошибка при выполнении запроса:", _error);
              }
            });
          } else {
            console.warn("IMDB ID отсутствует в данных фильма.");
          }
        }
      });
    }
    var averageRuntime = {
      main: main
    };

    var manifest = {
      type: "other",
      version: "0.0.1",
      author: '@lme_chat',
      name: "Lampa Movie Enhancer",
      description: "Some tweaks for movie content",
      component: "lme"
    };
    function add() {
      Lang.main();
      Lampa.Manifest.plugins = manifest;
      CONFIG.main();
      if (!Lampa.Storage.get('lme_quality')) Lampa.Storage.set('lme_quality', true);
      if (Lampa.Storage.get('lme_quality') === true) Quality.main();
      if (Lampa.Storage.get('lme_endata') === true) Englishdata.main();
      if (Lampa.Storage.get('lme_averageRuntime') === true) averageRuntime.main();
    }
    function startPlugin() {
      window.plugin_lme_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_lme_ready) startPlugin();

})();
