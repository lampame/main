(function () {
    'use strict';

    function card() {
      Lampa.Listener.follow("full", function (e) {
        if (e.type === "complite") {
          $(document).ready(function () {
            var imdbID = e.data.movie.imdb_id; // Замените на нужный ID
            var apiUrl = "https://yts.mx/api/v2/movie_details.json?imdb_id=".concat(imdbID);
            $.getJSON(apiUrl, function (data) {
              var newDivider = $("<span class='full-start-new__split'>").html("\u25CF");
              if (data.status === "ok") {
                var movie = data.data.movie;
                if (movie.id === 0) {
                  return; // Прекращаем выполнение если id равен 0 <span>●</span>
                }
                var torrents = movie.torrents;
                if (torrents.length > 0) {
                  var lastTorrent = torrents[torrents.length - 1];
                  var quality = lastTorrent.quality;
                  // Преобразование форматов качества
                  switch (quality) {
                    case '720p':
                      quality = 'HD';
                      break;
                    case '1080p':
                      quality = 'Full HD';
                      break;
                    case '2160p':
                      quality = '4K';
                      break;
                  }
                  var newSpan = $("<span>").html("".concat(Lampa.Lang.translate('player_quality'), ": ").concat(quality));
                  $(".full-start-new__details").append(newDivider, newSpan);
                }
              } else {
                console.error("Error fetching movie details:", data.status_message);
              }
            }).fail(function (jqXHR, textStatus, errorThrown) {
              console.error("Fetch error:", textStatus, errorThrown);
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
