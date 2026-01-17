(function () {
    'use strict';

    var STORAGE_KEY = 'appletv_topshelf';
    var ORDER_KEY = 'appletv_topshelf_order';
    var COMPONENT = 'appletv_topshelf';
    var POLL_INTERVAL = 1000;
    var lastRaw = null;
    var statusValue = null;
    var pollTimer = null;
    function isAppleTv() {
      return typeof Lampa !== 'undefined' && Lampa.Platform && Lampa.Platform.is('apple_tv') === true;
    }
    function addLang() {
      if (!Lampa || !Lampa.Lang || !Lampa.Lang.add) return;
      Lampa.Lang.add({
        appletv_topshelf_title: {
          en: 'TopShelf',
          ru: 'TopShelf',
          uk: 'TopShelf',
          be: 'TopShelf'
        },
        appletv_topshelf_status_title: {
          en: 'Status',
          ru: 'Статус',
          uk: 'Статус',
          be: 'Статус'
        },
        appletv_topshelf_status_wait: {
          en: 'TopShelf data is not available yet. It appears shortly after startup.',
          ru: 'Данные TopShelf пока недоступны. Они появятся вскоре после запуска.',
          uk: 'Дані TopShelf поки недоступні. Вони зʼявляться невдовзі після запуску.',
          be: 'Дадзеныя TopShelf пакуль недаступныя. Яны зʼявяцца неўзабаве пасля запуску.'
        },
        appletv_topshelf_status_ready: {
          en: 'TopShelf data loaded.',
          ru: 'Данные TopShelf загружены.',
          uk: 'Дані TopShelf завантажені.',
          be: 'Дадзеныя TopShelf загружаны.'
        },
        appletv_topshelf_updated: {
          en: 'Updated: {time}',
          ru: 'Обновлено: {time}',
          uk: 'Оновлено: {time}',
          be: 'Абноўлена: {time}'
        },
        appletv_topshelf_edit: {
          en: 'Edit TopShelf order',
          ru: 'Изменить порядок TopShelf',
          uk: 'Змінити порядок TopShelf',
          be: 'Змяніць парадак TopShelf'
        },
        appletv_topshelf_hint: {
          en: 'Use the buttons to reorder sections.',
          ru: 'Используйте кнопки для изменения порядка.',
          uk: 'Використовуйте кнопки для зміни порядку.',
          be: 'Выкарыстоўвайце кнопкі для змены парадку.'
        },
        appletv_topshelf_empty: {
          en: 'No sections found in TopShelf data yet.',
          ru: 'Пока нет разделов в данных TopShelf.',
          uk: 'Поки немає розділів у даних TopShelf.',
          be: 'Пакуль няма раздзелаў у даных TopShelf.'
        },
        appletv_topshelf_move_up: {
          en: 'Up',
          ru: 'Вверх',
          uk: 'Вгору',
          be: 'Уверх'
        },
        appletv_topshelf_move_down: {
          en: 'Down',
          ru: 'Вниз',
          uk: 'Вниз',
          be: 'Уніз'
        }
      });
    }
    function translate(key) {
      return Lampa && Lampa.Lang && Lampa.Lang.translate ? Lampa.Lang.translate(key) : key;
    }
    function safeParse(raw) {
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch (error) {
        return null;
      }
    }
    function canUseStorage() {
      return typeof localStorage !== 'undefined';
    }
    function readPayload() {
      if (!canUseStorage()) return null;
      return safeParse(localStorage.getItem(STORAGE_KEY));
    }
    function notifyTopshelfUpdate() {
      if (typeof window !== 'undefined' && window.location && window.location.assign) {
        window.location.assign('lampa://topshelfupdate');
      }
    }
    function writePayload(payload) {
      if (!canUseStorage()) return;
      try {
        var raw = JSON.stringify(payload);
        localStorage.setItem(STORAGE_KEY, raw);
        lastRaw = raw;
        notifyTopshelfUpdate();
      } catch (error) {
        if (Lampa && Lampa.Storage && Lampa.Storage.field && Lampa.Storage.field('trakt_enable_logging')) {
          console.error('AppleTVTopShelf', 'Failed to write payload:', error);
        }
      }
    }
    function getTitles(sections) {
      if (!Array.isArray(sections)) return [];
      return sections.map(function (section) {
        return section && section.title ? String(section.title) : '';
      }).filter(function (title) {
        return title.length;
      });
    }
    function arraysEqual(a, b) {
      if (!Array.isArray(a) || !Array.isArray(b)) return false;
      if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; i += 1) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    function sectionsOrderEqual(a, b) {
      return arraysEqual(getTitles(a), getTitles(b));
    }
    function normalizeOrder(order, titles) {
      var result = [];
      var seen = Object.create(null);
      if (Array.isArray(order)) {
        order.forEach(function (title) {
          if (titles.indexOf(title) !== -1 && !seen[title]) {
            seen[title] = true;
            result.push(title);
          }
        });
      }
      titles.forEach(function (title) {
        if (!seen[title]) {
          seen[title] = true;
          result.push(title);
        }
      });
      return result;
    }
    function reorderSections(sections, order) {
      if (!Array.isArray(sections) || !Array.isArray(order) || !order.length) return sections;
      var remaining = sections.slice();
      var ordered = [];
      order.forEach(function (title) {
        var index = -1;
        for (var i = 0; i < remaining.length; i += 1) {
          if (remaining[i] && String(remaining[i].title) === title) {
            index = i;
            break;
          }
        }
        if (index !== -1) {
          ordered.push(remaining.splice(index, 1)[0]);
        }
      });
      return ordered.concat(remaining);
    }
    function getStoredOrder() {
      if (!Lampa || !Lampa.Storage) return [];
      var stored = Lampa.Storage.get(ORDER_KEY, []);
      return Array.isArray(stored) ? stored : [];
    }
    function setStoredOrder(order) {
      if (!Lampa || !Lampa.Storage) return;
      Lampa.Storage.set(ORDER_KEY, order);
    }
    function applySavedOrder(payload) {
      if (!payload || !Array.isArray(payload.sections)) return payload;
      var titles = getTitles(payload.sections);
      if (!titles.length) return payload;
      var storedOrder = getStoredOrder();
      var normalizedOrder = normalizeOrder(storedOrder, titles);
      var reorderedSections = reorderSections(payload.sections, normalizedOrder);
      if (!arraysEqual(storedOrder, normalizedOrder)) {
        setStoredOrder(normalizedOrder);
      }
      if (!sectionsOrderEqual(payload.sections, reorderedSections)) {
        payload.sections = reorderedSections;
        writePayload(payload);
      }
      return payload;
    }
    function formatUpdatedAt(updatedAt) {
      if (!updatedAt) return '';
      var date = new Date(updatedAt * 1000);
      return isNaN(date.getTime()) ? '' : date.toLocaleString();
    }
    function updateStatus(payload) {
      if (!statusValue || !statusValue.length) return;
      if (!payload || !Array.isArray(payload.sections) || !payload.sections.length) {
        statusValue.text(translate('appletv_topshelf_status_wait'));
        return;
      }
      var time = formatUpdatedAt(payload.updatedAt);
      if (time) {
        statusValue.text(translate('appletv_topshelf_updated').replace('{time}', time));
      } else {
        statusValue.text(translate('appletv_topshelf_status_ready'));
      }
    }
    function moveSection(sections, fromIndex, toIndex) {
      if (!Array.isArray(sections)) return sections;
      if (toIndex < 0 || toIndex >= sections.length) return sections;
      var next = sections.slice();
      var moved = next.splice(fromIndex, 1)[0];
      next.splice(toIndex, 0, moved);
      return next;
    }
    function updatePayloadSections(payload, sections) {
      if (!payload) return;
      payload.sections = sections;
      payload.updatedAt = Math.floor(Date.now() / 1000);
      setStoredOrder(getTitles(sections));
      writePayload(payload);
      updateStatus(payload);
    }
    function openModal() {
      var payload = applySavedOrder(readPayload());
      var wrapper = $('<div class="appletv-topshelf-modal"></div>');
      var hint = $('<div class="settings-param__descr"></div>');
      wrapper.append(hint);
      if (!payload || !Array.isArray(payload.sections) || !payload.sections.length) {
        hint.text(translate('appletv_topshelf_empty'));
        Lampa.Modal.open({
          title: translate('appletv_topshelf_title'),
          html: wrapper,
          size: 'medium',
          onBack: function onBack() {
            Lampa.Modal.close();
            Lampa.Controller.toggle('settings_component');
          }
        });
        return;
      }
      hint.text(translate('appletv_topshelf_hint'));
      var list = $('<div class="appletv-topshelf-list"></div>');
      wrapper.append(list);
      function renderList() {
        list.empty();
        payload.sections.forEach(function (section, index) {
          var title = section && section.title ? String(section.title) : '';
          var row = $('<div class="settings-param"></div>');
          var name = $("<div class=\"settings-param__name\"></div>").text(title || '-');
          var actions = $('<div class="settings-param__value"></div>');
          var up = $('<div class="simple-button simple-button--inline selector appletv-topshelf-action"></div>').text(translate('appletv_topshelf_move_up')).attr('data-action', 'up').attr('data-index', index);
          var down = $('<div class="simple-button simple-button--inline selector appletv-topshelf-action"></div>').text(translate('appletv_topshelf_move_down')).attr('data-action', 'down').attr('data-index', index);
          if (index === 0) {
            up.removeClass('selector').addClass('simple-button--invisible');
          }
          if (index === payload.sections.length - 1) {
            down.removeClass('selector').addClass('simple-button--invisible');
          }
          actions.append(up, down);
          row.append(name, actions);
          list.append(row);
        });
      }
      renderList();
      list.on('hover:enter click', '.appletv-topshelf-action', function (event) {
        var target = $(event.currentTarget);
        var action = target.attr('data-action');
        var index = parseInt(target.attr('data-index'), 10);
        if (isNaN(index)) return;
        if (action === 'up') {
          var moved = moveSection(payload.sections, index, index - 1);
          payload.sections = moved;
          updatePayloadSections(payload, moved);
          renderList();
        } else if (action === 'down') {
          var _moved = moveSection(payload.sections, index, index + 1);
          payload.sections = _moved;
          updatePayloadSections(payload, _moved);
          renderList();
        }
      });
      Lampa.Modal.open({
        title: translate('appletv_topshelf_title'),
        html: wrapper,
        size: 'medium',
        onBack: function onBack() {
          Lampa.Modal.close();
          Lampa.Controller.toggle('settings_component');
        }
      });
    }
    function addSettings() {
      var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
      if (!SettingsApi || !SettingsApi.addComponent) return;
      SettingsApi.addComponent({
        component: COMPONENT,
        name: translate('appletv_topshelf_title'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M407 0H105C47.103 0 0 47.103 0 105v302c0 57.897 47.103 105 105 105h302c57.897 0 105-47.103 105-105V105C512 47.103 464.897 0 407 0zM163.393 193.211c9.844-12.975 23.53-13.038 23.53-13.038s2.035 12.199-7.744 23.95c-10.442 12.548-22.312 10.494-22.312 10.494s-2.228-9.868 6.526-21.406zm21.581 136.569c-8.754 0-15.559-5.899-24.783-5.899-9.399 0-18.727 6.119-24.801 6.119C117.987 330 96 292.326 96 262.043c0-29.795 18.611-45.425 36.066-45.425 11.348 0 20.154 6.544 26.053 6.544 5.065 0 14.464-6.961 26.698-6.961 21.06 0 29.344 14.985 29.344 14.985s-16.204 8.284-16.204 28.386c0 22.677 20.185 30.492 20.185 30.492s-14.109 39.716-33.168 39.716zM296.2 327.4c-5.2 1.6-10.668 2.4-16.4 2.4-17.8 0-27.2-9.8-27.2-25.8v-60.2h-13.8v-20.6h13.8v-34h26.8v34h22v20.6h-22V295c0 7.25 4.1 10.2 10 10.2 5.6 0 13-3.131 14.6-3.8l5.4 21.2c-3.6 1.6-8 3.2-13.2 4.8zm84.398.6h-29l-38.6-104.8h27.6l26.6 83 26.8-83h25.2l-38.6 104.8z" fill="#fff"></path></svg>'
      });
      SettingsApi.addParam({
        component: COMPONENT,
        param: {
          name: 'appletv_topshelf_status',
          type: 'static'
        },
        field: {
          name: translate('appletv_topshelf_status_title')
        },
        onRender: function onRender(item) {
          var value = $('<div class="settings-param__value"></div>');
          item.append(value);
          statusValue = value;
          updateStatus(readPayload());
        }
      });
      SettingsApi.addParam({
        component: COMPONENT,
        param: {
          name: 'appletv_topshelf_open',
          type: 'button'
        },
        field: {
          name: translate('appletv_topshelf_edit')
        },
        onChange: function onChange() {
          openModal();
        }
      });
      if (Lampa.Settings && Lampa.Settings.update) {
        Lampa.Settings.update();
      }
    }
    function pollPayload() {
      if (!canUseStorage()) return;
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        lastRaw = null;
        updateStatus(null);
        return;
      }
      if (raw === lastRaw) return;
      lastRaw = raw;
      var payload = safeParse(raw);
      if (!payload) {
        updateStatus(null);
        return;
      }
      applySavedOrder(payload);
      updateStatus(payload);
    }
    function startPolling() {
      if (pollTimer) return;
      pollPayload();
      pollTimer = setInterval(pollPayload, POLL_INTERVAL);
    }
    function startPlugin() {
      if (!isAppleTv()) return;
      if (typeof window !== 'undefined' && window.AppleTVTopShelfPlugin) return;
      if (typeof window !== 'undefined') window.AppleTVTopShelfPlugin = true;
      addLang();
      addSettings();
      startPolling();
    }
    if (typeof window !== 'undefined' && window.appready) {
      startPlugin();
    } else if (typeof Lampa !== 'undefined' && Lampa.Listener && Lampa.Listener.follow) {
      Lampa.Listener.follow('app', function (event) {
        if (event.type === 'ready') startPlugin();
      });
    } else {
      startPlugin();
    }

})();
