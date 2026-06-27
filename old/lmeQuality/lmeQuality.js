import 'core-js/stable';
(function () {
    'use strict';

    if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

    function card() {
      var apiKey = '4ef0d7355d9ffb5151e987764708ce96';
      var baseUrl = 'http://tmdb.cub.red/3/';
      function fetchMovieDetails(movieId, method, callback) {
        var apiUrl = "".concat(baseUrl).concat(method, "/").concat(movieId, "?api_key=").concat(apiKey);
        $.getJSON(apiUrl, function (data, textStatus, xhr) {
          if (xhr.status === 200) {
            callback(null, data);
          } else {
            callback(new Error("Error fetching movie details: ".concat(data.status_message)));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          callback(new Error("Fetch error: ".concat(textStatus, ", ").concat(errorThrown)));
        });
      }
      Lampa.Listener.follow("full", function (e) {
        if (e.type === "complite" && Lampa.Storage.field('source') !== 'cub') {
          $(document).ready(function () {
            fetchMovieDetails(e.data.movie.id, e.object.method, function (err, data) {
              if (err) {
                console.error(err.message);
                return;
              }
              var release_quality = data.release_quality;
              if (release_quality) {
                var newDivider = $("<span class='full-start-new__split'>").html("\u25CF");
                //const newSpan = $("<span class='full-start__pg'>").html(`${Lampa.Lang.translate('player_quality')}: ${release_quality.toUpperCase()}`);
                var newSpan = $("<span class='full-start__pg'>").html("".concat(Lampa.Lang.translate('player_quality'), ": ").concat(release_quality.toUpperCase())).css('border-color', function () {
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
                }());
                $(".full-start-new__details").append(newDivider, newSpan);
                //Add label on poster
                var quality = document.createElement('div');
                quality.classList.add("card__quality");
                quality.style.zIndex = "999";
                quality.style.fontSize = "75%";
                var quality_inner = document.createElement("div");
                quality_inner.innerText = release_quality;
                quality.appendChild(quality_inner);
                if (Lampa.Platform.screen('mobile') !== true) $(".full-start-new__poster").append(quality);
              }
            });
          });
        }
      });
      Lampa.Listener.follow("line", function (e) {
        if (e.type === "append" && Lampa.Storage.field("source") !== "cub") {
          e.items.forEach(function (movieCard) {
            // Проверяем, существует ли movieCard.data и имеет ли оно свойство id
            if (movieCard.data && (movieCard.data.id || movieCard.data.number_of_seasons)) {
              var id = movieCard.data.id || 0;
              var mediaType = movieCard.data.media_type ? movieCard.data.media_type : movieCard.data.number_of_seasons ? "tv" : "movie";
              fetchMovieDetails(id, mediaType, function (err, data) {
                if (err) {
                  console.error(err.message);
                  return;
                }
                var release_quality = data.release_quality;
                if (release_quality) {
                  var quality = document.createElement("div");
                  quality.classList.add("card__quality");
                  var quality_inner = document.createElement("div");
                  quality_inner.innerText = release_quality;
                  quality.appendChild(quality_inner);
                  movieCard.card.querySelector(".card__view").appendChild(quality);
                }
              });
            } else {
              console.warn("movieCard.data is undefined or missing id/number_of_seasons:", movieCard);
            }
          });
        }
      });
    }
    var UTILS = {
      card: card
    };

    var manifest = {
      type: "other",
      version: "0.0.1",
      author: '@lme_chat',
      name: "LME Quality",
      description: "Add Quality sticker on other source",
      component: "lmeq"
    };
    function add() {
      Lampa.Manifest.plugins = manifest;
      UTILS.card();
    }
    function startPlugin() {
      window.plugin_lmeq_ready = true;
      if (window.appready) add();else {
        Lampa.Listener.follow("app", function (e) {
          if (e.type === "ready") add();
        });
      }
    }
    if (!window.plugin_lmeq_ready) startPlugin();

})();
