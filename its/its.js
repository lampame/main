(function () {
    'use strict';

    Lampa.Platform.tv();
    var INFUSE_LOGO = "<svg class=\"infuseSaverLogo\" viewBox=\"0 0 85 85\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path opacity=\"0.937\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.5 19.5C45.4453 22.2488 42.7786 26.5821 42.5 32.5C37.6434 28.9084 32.6434 25.575 27.5 22.5C27.4226 21.2502 26.756 20.4169 25.5 20C19.7659 18.3702 15.7659 20.2035 13.5 25.5C13.1667 25.5 12.8333 25.5 12.5 25.5C11.357 10.9033 18.0237 4.73664 32.5 7C38.7408 10.9426 44.7408 15.1092 50.5 19.5Z\" fill=\"#FE6700\"/>\n<path opacity=\"0.982\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.5 19.5C51.7095 19.9321 52.7095 20.5987 53.5 21.5C49.5358 24.4701 46.2025 28.1367 43.5 32.5C43.1667 32.5 42.8333 32.5 42.5 32.5C42.7786 26.5821 45.4453 22.2488 50.5 19.5Z\" fill=\"#FB5800\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.5 21.5C55.3885 22.604 57.0552 23.9373 58.5 25.5C53.8042 27.8653 50.4709 31.532 48.5 36.5C46.246 35.8763 44.5794 34.543 43.5 32.5C46.2025 28.1367 49.5358 24.4701 53.5 21.5Z\" fill=\"#F64400\"/>\n<path opacity=\"0.991\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.5 22.5C27.5 24.5 27.5 26.5 27.5 28.5C22.8333 28.5 18.1667 28.5 13.5 28.5C13.5 27.5 13.5 26.5 13.5 25.5C15.7659 20.2035 19.7659 18.3702 25.5 20C26.756 20.4169 27.4226 21.2502 27.5 22.5Z\" fill=\"#EC1B00\"/>\n<path opacity=\"0.937\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.5 25.5C63.0115 27.4975 66.8449 30.4975 70 34.5C73.0759 42.3939 71.5759 49.2272 65.5 55C61.6784 57.3301 58.0117 59.8301 54.5 62.5C53.2812 59.2737 51.6146 56.2737 49.5 53.5C48.7174 51.7118 47.3841 50.7118 45.5 50.5C48.5203 47.4838 51.8536 44.8171 55.5 42.5C58.5179 41.6466 60.3512 39.6466 61 36.5C62.0536 32.3445 61.2202 28.6779 58.5 25.5Z\" fill=\"#FE6800\"/>\n<path opacity=\"0.977\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 25.5C12.8333 25.5 13.1667 25.5 13.5 25.5C13.5 26.5 13.5 27.5 13.5 28.5C18.1667 28.5 22.8333 28.5 27.5 28.5C27.5 30.8333 27.5 33.1667 27.5 35.5C22.5 35.5 17.5 35.5 12.5 35.5C12.5 32.1667 12.5 28.8333 12.5 25.5Z\" fill=\"#F33700\"/>\n<path opacity=\"0.977\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 35.5C17.5 35.5 22.5 35.5 27.5 35.5C27.5 37.5 27.5 39.5 27.5 41.5C22.5 41.5 17.5 41.5 12.5 41.5C12.5 39.5 12.5 37.5 12.5 35.5Z\" fill=\"#FA5200\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.5 25.5C61.2202 28.6779 62.0536 32.3445 61 36.5C60.3512 39.6466 58.5179 41.6466 55.5 42.5C53.1667 40.5 50.8333 38.5 48.5 36.5C50.4709 31.532 53.8042 27.8653 58.5 25.5Z\" fill=\"#EC1E00\"/>\n<path opacity=\"0.944\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 41.5C17.5 41.5 22.5 41.5 27.5 41.5C27.6658 46.1785 27.4992 50.8452 27 55.5C22.2391 60.8119 17.5724 60.8119 13 55.5C12.5008 50.8452 12.3342 46.1785 12.5 41.5Z\" fill=\"#FE6600\"/>\n<path opacity=\"0.984\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.5 50.5C47.3841 50.7118 48.7174 51.7118 49.5 53.5C51.6146 56.2737 53.2812 59.2737 54.5 62.5C52.3428 64.4121 50.0094 66.0787 47.5 67.5C45.5873 63.7375 43.4206 60.0709 41 56.5C40.3292 55.7476 39.4959 55.4142 38.5 55.5C40.2964 53.1 42.6298 51.4333 45.5 50.5Z\" fill=\"#FF7700\"/>\n<path opacity=\"0.986\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.5 55.5C39.4959 55.4142 40.3292 55.7476 41 56.5C43.4206 60.0709 45.5873 63.7375 47.5 67.5C46.3951 68.6005 45.0618 69.2671 43.5 69.5C40.8082 65.4297 38.1415 61.4297 35.5 57.5C35.9731 56.0937 36.9731 55.427 38.5 55.5Z\" fill=\"#FE7F00\"/>\n<path opacity=\"0.997\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.5 57.5C38.1415 61.4297 40.8082 65.4297 43.5 69.5C41.7036 71.9 39.3702 73.5667 36.5 74.5C33.3119 70.7735 30.6452 66.7735 28.5 62.5C30.5496 60.4525 32.883 58.7859 35.5 57.5Z\" fill=\"#FE8900\"/>\n<path opacity=\"0.993\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.5 62.5C30.6452 66.7735 33.3119 70.7735 36.5 74.5C32.9607 79.3727 28.294 80.7061 22.5 78.5C19.1831 75.2595 18.6831 71.5929 21 67.5C23.3996 65.5854 25.8996 63.9188 28.5 62.5Z\" fill=\"#FE9500\"/>\n</svg>";
    function registerTranslations() {
      Lampa.Lang.add({
        its_save_single: {
          ru: 'Сохранить',
          en: 'Save',
          uk: 'Зберегти'
        },
        its_save_all: {
          ru: 'Сохранить все',
          en: 'Save all',
          uk: 'Зберегти все'
        },
        its_save_all_edit: {
          ru: 'Редактировать и сохранить все',
          en: 'Edit & Save all',
          uk: 'Редагувати та зберегти все'
        },
        its_modal_title: {
          ru: 'Редактирование передачи серий',
          en: 'Edit episodes transfer',
          uk: 'Редагування передачі серій'
        },
        its_save_changes: {
          ru: 'Сохранить изменения',
          en: 'Save changes',
          uk: 'Зберегти зміни'
        },
        its_disable_all: {
          ru: 'Отключить передачу всех',
          en: 'Disable all transfer',
          uk: 'Вимкнути передачу всіх'
        },
        its_no_series_to_send: {
          ru: 'Нет серий для передачи',
          en: 'No episodes selected for transfer',
          uk: 'Немає серій для передачі'
        },
        its_file_name_title: {
          ru: 'Название файла',
          en: 'File name',
          uk: 'Назва файла'
        },
        its_edit_name: {
          ru: 'Редактировать название',
          en: 'Edit name',
          uk: 'Редагувати назву'
        },
        its_do_not_send: {
          ru: 'Не передавать',
          en: 'Do not send',
          uk: 'Не передавати'
        },
        its_send: {
          ru: 'Передавать',
          en: 'Send',
          uk: 'Передавати'
        },
        its_state_enabled: {
          ru: 'Передается',
          en: 'Enabled',
          uk: 'Передається'
        },
        its_state_disabled: {
          ru: 'Отключено',
          en: 'Disabled',
          uk: 'Вимкнено'
        },
        its_normalize_names: {
          ru: 'Нормализовать имена',
          en: 'Normalize names',
          uk: 'Нормалізувати імена'
        }
      });
    }
    function tr(key) {
      return Lampa.Lang.translate(key);
    }
    function sanitizeUrl(url) {
      return String(url || '').replace('&preload', '&play').replace(/\s/g, '%20');
    }
    function safeDecode(value) {
      try {
        return decodeURIComponent(value);
      } catch (e) {
        return value;
      }
    }
    function escapeHtml(value) {
      return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    var FileNameNormalizer = {
      generateFilename: function generateFilename(item, movie, index) {
        var tmdbId = movie ? movie.id : '';
        var seasonNum = parseInt(item.season !== undefined ? item.season : item.season_number);
        var episodeNum = parseInt(item.episode !== undefined ? item.episode : item.episode_number);
        var filename = '';
        if (movie && tmdbId) {
          if (!isNaN(episodeNum) && episodeNum > 0 && !isNaN(seasonNum) && seasonNum >= 0) {
            var title = movie.original_name || movie.original_title || movie.name || movie.title;
            var s = seasonNum < 10 ? '0' + seasonNum : seasonNum;
            var e = episodeNum < 10 ? '0' + episodeNum : episodeNum;
            filename = title + ' S' + s + 'E' + e + ' {tmdb-' + tmdbId + '}';
          } else {
            var rawName = String(item.title || item.path_human || item.path || '').replace(/\.[a-z0-9]{1,6}$/i, '');
            if (movie.first_air_date || movie.name) {
              filename = '{tmdb-' + tmdbId + '} ' + (rawName || movie.original_name || movie.name);
            } else {
              var _title = movie.original_title || movie.title || movie.original_name || movie.name;
              var year = String(movie.release_date || '').split('-')[0];
              filename = _title + (year ? ' (' + year + ')' : '') + ' {tmdb-' + tmdbId + '}';
            }
          }
        } else {
          var meta = getFileMeta(item.originalUrl || item.url);
          filename = meta.name || 'link_' + (index + 1);
        }
        return filename;
      },
      normalizeItem: function normalizeItem(item, movie, index) {
        return this.generateFilename(item, movie, index);
      }
    };
    function getFileMeta(url) {
      var segment = '';
      try {
        var parsed = new URL(url);
        var parts = parsed.pathname.split('/');
        segment = parts[parts.length - 1] || '';
      } catch (e) {
        var withoutHash = String(url).split('#')[0];
        var beforeQuery = withoutHash.split('?')[0];
        segment = beforeQuery.split('/').pop() || '';
      }
      var decoded = safeDecode(segment);
      var dotIndex = decoded.lastIndexOf('.');
      if (dotIndex <= 0) {
        return {
          name: decoded || segment || 'file',
          extension: ''
        };
      }
      return {
        name: decoded.slice(0, dotIndex) || 'file',
        extension: decoded.slice(dotIndex)
      };
    }
    function setFileNameInUrl(url, filename) {
      var parsed;
      try {
        parsed = new URL(url);
      } catch (e) {
        return sanitizeUrl(url);
      }
      var parts = parsed.pathname.split('/');
      var index = parts.length - 1;
      var currentMeta = getFileMeta(parsed.toString());
      var nextName = String(filename || '').trim() || currentMeta.name;
      var encodedSegment = encodeURIComponent(nextName + currentMeta.extension);
      parts[index] = encodedSegment;
      parsed.pathname = parts.join('/');
      return sanitizeUrl(parsed.toString());
    }
    function createMenuTitle(label) {
      return "<div class=\"infuseSaver\">".concat(INFUSE_LOGO, "<span>").concat(label, "</span></div>");
    }
    function createEditableLinks(items, movie) {
      var isTvShow = movie && (movie.first_air_date || movie.name || movie.number_of_seasons);
      var hasMovieId = movie && movie.id;
      return (items || []).map(function (item, index) {
        var sourceUrl = sanitizeUrl(item.url);
        var meta = getFileMeta(sourceUrl);
        var editedName = meta.name;

        // Попередня чистка: для фільмів з TMDB ID одразу ставимо нормалізовану назву.
        if (!isTvShow && hasMovieId) {
          var normalized = FileNameNormalizer.normalizeItem({
            originalUrl: sourceUrl,
            url: sourceUrl,
            title: meta.name,
            season: item.season,
            season_number: item.season_number,
            episode: item.episode,
            episode_number: item.episode_number
          }, movie, index);
          if (normalized) {
            editedName = normalized;
          }
        }
        return {
          id: index,
          index: index + 1,
          originalUrl: sourceUrl,
          editedName: editedName,
          extension: meta.extension,
          enabled: true,
          season: item.season,
          season_number: item.season_number,
          episode: item.episode,
          episode_number: item.episode_number
        };
      });
    }
    function getPreparedLinks(editableLinks) {
      return editableLinks.filter(function (item) {
        return item.enabled;
      }).map(function (item) {
        return {
          url: setFileNameInUrl(item.originalUrl, item.editedName)
        };
      });
    }
    function buildShortcutsPayload(links) {
      return links.reduce(function (acc, item) {
        return acc + encodeURIComponent(item.url + '\n');
      }, '');
    }
    function openFileNameEditor(item, onDone) {
      if (!Lampa.Input || typeof Lampa.Input.edit !== 'function') {
        var promptValue = window.prompt(tr('its_file_name_title'), item.editedName);
        if (promptValue !== null && String(promptValue).trim()) {
          item.editedName = String(promptValue).trim();
        }
        onDone();
        return;
      }
      var layer = $('.its-links-layer');
      layer.addClass('its-links-layer--hidden');
      Lampa.Input.edit({
        title: tr('its_file_name_title'),
        value: item.editedName,
        free: true,
        nosave: true,
        nomic: true
      }, function (value) {
        var nextValue = String(value || '').trim();
        if (nextValue) {
          item.editedName = nextValue;
        }
        layer.removeClass('its-links-layer--hidden');
        onDone();
      });
    }
    function buildLinksEditorHtml(state, actions) {
      var selectedCount = state.links.filter(function (item) {
        return item.enabled;
      }).length;
      var html = $("\n        <div class=\"its-links-editor\">\n            <div class=\"its-links-editor__toolbar\">\n                <div class=\"its-links-editor__button selector\" data-action=\"save\">".concat(tr('its_save_changes'), " (").concat(selectedCount, ")</div>\n                <div class=\"its-links-editor__button selector\" data-action=\"normalize\">").concat(tr('its_normalize_names'), "</div>\n                <div class=\"its-links-editor__button selector\" data-action=\"disable-all\">").concat(tr('its_disable_all'), "</div>\n            </div>\n            <div class=\"its-links-editor__list\"></div>\n        </div>\n    "));
      var list = html.find('.its-links-editor__list');
      state.links.forEach(function (item) {
        var stateText = item.enabled ? tr('its_state_enabled') : tr('its_state_disabled');
        var stateClass = item.enabled ? 'its-links-editor__state--enabled' : 'its-links-editor__state--disabled';
        var row = $("\n            <div class=\"its-links-editor__item ".concat(item.enabled ? '' : 'is-disabled', "\">\n                <div class=\"its-links-editor__head\">\n                    <div class=\"its-links-editor__index\">#").concat(item.index, "</div>\n                    <div class=\"its-links-editor__state ").concat(stateClass, "\">").concat(stateText, "</div>\n                </div>\n                <div class=\"its-links-editor__filename\" title=\"").concat(escapeHtml(item.editedName + item.extension), "\">\n                    ").concat(escapeHtml(item.editedName), "<span class=\"its-links-editor__ext\">").concat(escapeHtml(item.extension), "</span>\n                </div>\n                <div class=\"its-links-editor__actions\">\n                    <div class=\"its-links-editor__action selector\" data-action=\"edit\" data-id=\"").concat(item.id, "\">").concat(tr('its_edit_name'), "</div>\n                    <div class=\"its-links-editor__action selector\" data-action=\"toggle\" data-id=\"").concat(item.id, "\">").concat(item.enabled ? tr('its_do_not_send') : tr('its_send'), "</div>\n                </div>\n            </div>\n        "));
        list.append(row);
      });
      html.find('[data-action="save"]').on('hover:enter', actions.save);
      html.find('[data-action="normalize"]').on('hover:enter', actions.normalize);
      html.find('[data-action="disable-all"]').on('hover:enter', actions.disableAll);
      html.find('[data-action="toggle"]').on('hover:enter', function () {
        var id = Number($(this).attr('data-id'));
        actions.toggle(id);
      });
      html.find('[data-action="edit"]').on('hover:enter', function () {
        var id = Number($(this).attr('data-id'));
        actions.edit(id);
      });
      return html;
    }
    function openLinksEditor(config) {
      var state = {
        links: createEditableLinks(config.items, config.movie),
        movie: config.movie || null
      };
      var returnController = Lampa.Controller.enabled().name;
      var controllerName = 'its_links_editor';
      var layer = null;
      var close = function close() {
        if (layer) {
          layer.remove();
          layer = null;
        }
        Lampa.Controller.toggle(returnController);
      };
      var focusSelectorById = function focusSelectorById(targetId) {
        setTimeout(function () {
          if (!layer) {
            return;
          }
          var scope = layer;
          var target = scope.find('.selector').first();
          if (typeof targetId === 'number') {
            var rowButton = scope.find(".its-links-editor__action[data-id=\"".concat(targetId, "\"][data-action=\"edit\"]")).first();
            if (rowButton.length) {
              target = rowButton;
            }
          }
          if (scope.length && target.length) {
            Lampa.Controller.collectionSet(scope);
            Lampa.Controller.collectionFocus(target[0], scope);
            target.trigger('hover:focus');
            Lampa.Controller.toggle(controllerName);
          }
        }, 0);
      };
      var ensureController = function ensureController() {
        Lampa.Controller.add(controllerName, {
          toggle: function toggle() {
            if (!layer) {
              return;
            }
            Lampa.Controller.collectionSet(layer);
            Lampa.Controller.collectionFocus(layer.find('.selector').first()[0], layer);
          },
          up: function up() {
            Navigator.move('up');
          },
          down: function down() {
            Navigator.move('down');
          },
          left: function left() {
            Navigator.move('left');
          },
          right: function right() {
            Navigator.move('right');
          },
          back: close
        });
      };
      var _render = function render() {
        var html = buildLinksEditorHtml(state, {
          save: function save() {
            var links = getPreparedLinks(state.links);
            if (!links.length) {
              Lampa.Noty.show(tr('its_no_series_to_send'));
              return;
            }
            close();
            config.onSave(links);
          },
          normalize: function normalize() {
            state.links.forEach(function (item, index) {
              var normalized = FileNameNormalizer.normalizeItem({
                originalUrl: item.originalUrl,
                url: item.originalUrl,
                title: item.editedName,
                season: item.season,
                season_number: item.season_number,
                episode: item.episode,
                episode_number: item.episode_number
              }, state.movie, index);
              if (normalized) {
                item.editedName = normalized;
              }
            });
            _render();
          },
          disableAll: function disableAll() {
            state.links.forEach(function (item) {
              item.enabled = false;
            });
            _render();
          },
          toggle: function toggle(id) {
            var link = state.links.find(function (item) {
              return item.id === id;
            });
            if (!link) {
              return;
            }
            link.enabled = !link.enabled;
            _render();
          },
          edit: function edit(id) {
            var link = state.links.find(function (item) {
              return item.id === id;
            });
            if (!link) {
              return;
            }
            openFileNameEditor(link, function () {
              _render();
              focusSelectorById(id);
            });
          }
        });
        if (!layer) {
          ensureController();
          layer = $("\n                <div class=\"its-links-layer\">\n                    <div class=\"its-links-layer__panel\">\n                        <div class=\"its-links-layer__title\">".concat(escapeHtml(tr('its_modal_title')), "</div>\n                        <div class=\"its-links-layer__body\"></div>\n                    </div>\n                </div>\n            "));
          $('body').append(layer);
          layer.find('.its-links-layer__body').append(html);
          Lampa.Controller.toggle(controllerName);
          focusSelectorById();
        } else {
          layer.find('.its-links-layer__body').empty().append(html);
          focusSelectorById();
        }
      };
      _render();
    }
    function addSingleSaveAction(data) {
      data.menu.push({
        title: createMenuTitle(tr('its_save_single')),
        onSelect: function onSelect() {
          window.location.assign('infuse://x-callback-url/save?url=' + encodeURIComponent(data.element.url));
        }
      });
    }
    function sendPreparedLinks(preparedLinks, isAppleTv) {
      if (isAppleTv) {
        var playlist = encodeURIComponent(JSON.stringify(preparedLinks));
        window.location.assign('lampa://saveAllToInfuse?playlist=' + playlist);
        return;
      }
      var payload = buildShortcutsPayload(preparedLinks);
      window.location.assign('shortcuts://run-shortcut?name=Infuse import links&input=text&text=' + payload);
    }
    function addBulkSaveAction(data) {
      var links = data.items || [];
      if (!links.length) {
        return;
      }
      var isAppleTv = Lampa.Platform.is('apple_tv') === true;
      var movie = data.params ? data.params.movie : null;
      data.menu.push({
        title: createMenuTitle(tr('its_save_all')),
        onSelect: function onSelect() {
          var preparedLinks = links.map(function (item) {
            return {
              url: sanitizeUrl(item.url)
            };
          });
          sendPreparedLinks(preparedLinks, isAppleTv);
        }
      });
      data.menu.push({
        title: createMenuTitle(tr('its_save_all_edit')),
        onSelect: function onSelect() {
          setTimeout(function () {
            openLinksEditor({
              items: links,
              movie: movie,
              onSave: function onSave(preparedLinks) {
                sendPreparedLinks(preparedLinks, isAppleTv);
              }
            });
          }, 0);
        }
      });
    }
    function onTorrentFileLongPress(data) {
      if (!data || data.type !== 'onlong') {
        return;
      }
      data.element.url = sanitizeUrl(data.element.url);
      addSingleSaveAction(data);
      addBulkSaveAction(data);
    }
    function add() {
      Lampa.Listener.follow('torrent_file', onTorrentFileLongPress);
      if (Lampa.Platform.is('apple_tv') === true) {
        var icon = Lampa.Head.addIcon('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" /></svg>', function () {
          window.open('lampa://showadvancedmenu');
        });
        icon.addClass('appleTV_showadvancedmenu');
      }
    }
    function startPlugin() {
      window.plugin_its_ready = true;
      registerTranslations();
      Lampa.Manifest.plugins = {
        type: 'other',
        version: '0.5',
        name: 'AppleTV Tweaks',
        description: 'Some tweaks for Apple TV',
        component: 'its'
      };
      Lampa.Template.add('its_style', "\n        <style>\n            .infuseSaver{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.6em}.infuseSaverLogo{width:24px;height:24px;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.its-links-editor{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:1.2em}.its-links-layer{position:fixed;inset:0;z-index:65;background:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:2em}.its-links-layer__panel{width:min(1100px,100%);max-height:88vh;overflow:auto;background:#232425;-webkit-border-radius:1.2em;border-radius:1.2em;padding:1.2em}.its-links-layer__title{font-size:2.1em;margin-bottom:.7em}.its-links-layer--hidden{opacity:0;pointer-events:none}body.keyboard-input--visible .settings-input{z-index:120}.its-links-editor__toolbar{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8em}.its-links-editor__button,.its-links-editor__action{background:rgba(255,255,255,0.08);-webkit-border-radius:.6em;border-radius:.6em;border:1px solid rgba(255,255,255,0.18);padding:.7em 1em;font-size:1.1em;line-height:1.2}.its-links-editor .selector.focus{border-color:#ffd27a;-webkit-box-shadow:inset 0 0 0 1px rgba(255,210,122,0.65),0 0 0 2px rgba(255,210,122,0.28);box-shadow:inset 0 0 0 1px rgba(255,210,122,0.65),0 0 0 2px rgba(255,210,122,0.28);background:rgba(255,255,255,0.18)}.its-links-editor__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.7em}.its-links-editor__item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);-webkit-border-radius:.8em;border-radius:.8em;padding:.85em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.7em}.its-links-editor__item.is-disabled{opacity:.62}.its-links-editor__head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:1em;font-size:1.05em}.its-links-editor__state{color:rgba(255,255,255,0.72)}.its-links-editor__state--enabled{color:#67d67a}.its-links-editor__state--disabled{color:#f0c35a}.its-links-editor__filename{font-size:1.15em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.its-links-editor__ext{opacity:.65}.its-links-editor__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.6em}.its-links-editor__action{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}@media(max-width:900px){.its-links-editor__toolbar,.its-links-editor__actions{grid-template-columns:1fr;display:grid}}\n        </style>\n    ");
      $('body').append(Lampa.Template.get('its_style', {}, true));
      if (window.appready) {
        add();
      } else {
        Lampa.Listener.follow('app', function (event) {
          if (event.type === 'ready') {
            add();
          }
        });
      }
    }
    if (!window.plugin_its_ready) {
      startPlugin();
    }

})();
