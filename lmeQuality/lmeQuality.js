(function () {
    'use strict';

    function card() {
      Lampa.Listener.follow("full", function (e) {
        if (e.type === "complite") {
          $(document).ready(function () {
            var apiUrl = "http://tmdb.cub.red/3/movie/".concat(e.data.movie.id, "?api_key=4ef0d7355d9ffb5151e987764708ce96");
            $.getJSON(apiUrl, function (data, textStatus, xhr) {
              var newDivider = $("<span class='full-start-new__split'>").html("\u25CF");
              if (xhr.status === 200) {
                var release_quality = data.release_quality;
                if (release_quality) {
                  var newSpan = $("<span>").html("".concat(Lampa.Lang.translate('player_quality'), ": ").concat(release_quality.toUpperCase()));
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
