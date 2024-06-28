(function () {
    'use strict';

    function card() {
      var apiKey = '4ef0d7355d9ffb5151e987764708ce96';
      var baseUrl = 'http://tmdb.cub.red/3/movie/';
      function fetchMovieDetails(movieId, callback) {
        var apiUrl = "".concat(baseUrl).concat(movieId, "?api_key=").concat(apiKey);
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
            fetchMovieDetails(e.data.movie.id, function (err, data) {
              if (err) {
                console.error(err.message);
                return;
              }
              var release_quality = data.release_quality;
              if (release_quality) {
                var newDivider = $("<span class='full-start-new__split'>").html("\u25CF");
                var newSpan = $("<span>").html("".concat(Lampa.Lang.translate('player_quality'), ": ").concat(release_quality.toUpperCase()));
                $(".full-start-new__details").append(newDivider, newSpan);
              }
            });
          });
        }
      });
      Lampa.Listener.follow('line', function (e) {
        if (e.type === "append" && Lampa.Storage.field('source') !== 'cub') {
          e.items.forEach(function (movieCard) {
            fetchMovieDetails(movieCard.data.id, function (err, data) {
              if (err) {
                console.error(err.message);
                return;
              }
              var release_quality = data.release_quality;
              if (release_quality) {
                var quality = document.createElement('div');
                quality.classList.add("card__quality");
                var quality_inner = document.createElement("div");
                quality_inner.innerText = release_quality;
                quality.appendChild(quality_inner);
                movieCard.card.querySelector(".card__view").appendChild(quality);
              }
            });
          });
        }
      });
    }
    var UTILS = {
      card: card
    };

    function add() {
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
