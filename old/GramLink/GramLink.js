(function () {
    'use strict';

    if(!window.Promise){var $p=function(e,t){if('function'!=typeof t&&'object'!=typeof t)throw new TypeError('Promise resolver undefined is not a function');this._s=0,this._v=void 0,this._h=[],this._c=!1;var n=this;try{t(function(t){n._resolve(t)},function(t){n._reject(t)})}catch(r){n._reject(r)}};$p.prototype={_resolve:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){if(n._s)return;if(t&&'function'==typeof t.then){t.then(function(t){n._resolve(t)},function(t){n._reject(t)});return}n._s=1,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},_reject:function(t){if(this._c)return;this._c=!0;var n=this;setTimeout(function(){n._s=2,n._v=t;for(var r=0;r<n._h.length;r++)n._h[r](t)})},then:function(e,t){var n=this;return new $p(function(r,i){n._h.push(function(t){if('function'==typeof e)try{r(e(t))}catch(o){i(o)}else r(t);if('function'==typeof t)try{i(t)}catch(o){i(o)}else i(t)})})},catch:function(e){return this.then(null,e)}};window.Promise=$p;window.Promise.resolve=function(t){return new $p(function(n){n(t)})};window.Promise.reject=function(t){return new $p(function(n,r){r(t)})};window.Promise.all=function(e){return new $p(function(t,n){var r=0,i=[];if(!e||!e.length){t([]);return}for(var o=0;o<e.length;o++)!function(o){$p.resolve(e[o]).then(function(e){i[o]=e;if(++r===e.length)t(i)}.bind(this),n)}(o)}.bind(this))};}if(!Object.assign)Object.assign=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};if(!Array.from)Array.from=function(e){var t=[];if('length'in e)for(var n=0;n<e.length;n++)t.push(e[n]);else if('function'==typeof e.forEach)e.forEach(function(e){t.push(e)});return t};if(!String.prototype.startsWith)String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e};if(!String.prototype.endsWith)String.prototype.endsWith=function(e,t){var n=void 0===t?this.length:t;return n-e.length>=0&&this.indexOf(e,n-e.length)===n-e.length};if(!String.prototype.includes)String.prototype.includes=function(e,t){return-1!==this.indexOf(e,t||0)};if(!Array.prototype.includes)Array.prototype.includes=function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t||0,o=Math.max(0<=i?i:r-Math.abs(i),0);o<r;o++)if(n[o]===e)return!0;return!1};

    function lang () {
      Lampa.Lang.add({
        // Plugin name & general
        gramlink_title: {
          en: 'GramLink',
          uk: 'GramLink',
          ru: 'GramLink'
        },
        gramlink_description: {
          en: 'Telegram sync via MTProto',
          uk: 'Синхронізація через Telegram',
          ru: 'Синхронизация через Telegram'
        },
        gramlink_settings: {
          en: 'GramLink Settings',
          uk: 'Налаштування GramLink',
          ru: 'Настройки GramLink'
        },
        // Menu
        gramlink_menu_title: {
          en: 'GramLink',
          uk: 'GramLink',
          ru: 'GramLink'
        },
        gramlink_hub_title: {
          en: 'GramLink | Sync Hub',
          uk: 'GramLink | Хаб синхронізації',
          ru: 'GramLink | Хаб синхронизации'
        },
        // Settings — section titles
        gramlink_settings_section_auth: {
          en: 'Authorization',
          uk: 'Авторизація',
          ru: 'Авторизация'
        },
        gramlink_settings_section_connection: {
          en: 'Connection',
          uk: 'Підключення',
          ru: 'Подключение'
        },
        gramlink_settings_section_sync: {
          en: 'Synchronization',
          uk: 'Синхронізація',
          ru: 'Синхронизация'
        },
        gramlink_settings_section_tools: {
          en: 'Tools',
          uk: 'Інструменти',
          ru: 'Инструменты'
        },
        gramlink_settings_section_about: {
          en: 'About',
          uk: 'Про плагін',
          ru: 'О плагине'
        },
        // Settings — connection
        gramlink_settings_api_id: {
          en: 'Telegram API ID',
          uk: 'Telegram API ID',
          ru: 'Telegram API ID'
        },
        gramlink_settings_api_id_desc: {
          en: 'Get from my.telegram.org/apps',
          uk: 'Отримайте на my.telegram.org/apps',
          ru: 'Получите на my.telegram.org/apps'
        },
        gramlink_settings_api_hash: {
          en: 'Telegram API Hash',
          uk: 'Telegram API Hash',
          ru: 'Telegram API Hash'
        },
        gramlink_settings_api_hash_desc: {
          en: 'Secret key from my.telegram.org',
          uk: 'Секретний ключ з my.telegram.org',
          ru: 'Секретный ключ с my.telegram.org'
        },
        // Settings — auth actions
        gramlink_settings_login: {
          en: 'Login to Telegram',
          uk: 'Увійти в Telegram',
          ru: 'Войти в Telegram'
        },
        gramlink_settings_login_desc: {
          en: 'Authorize via QR code',
          uk: 'Авторизація через QR код',
          ru: 'Авторизация через QR код'
        },
        gramlink_settings_logout: {
          en: 'Logout',
          uk: 'Вийти',
          ru: 'Выйти'
        },
        gramlink_settings_logout_desc: {
          en: 'Clear Telegram session',
          uk: 'Очистити сесію Telegram',
          ru: 'Очистить сессию Telegram'
        },
        gramlink_settings_logout_confirm: {
          en: 'Are you sure you want to logout?',
          uk: 'Ви впевнені, що хочете вийти?',
          ru: 'Вы уверены, что хотите выйти?'
        },
        gramlink_settings_status: {
          en: 'Connection status',
          uk: 'Статус підключення',
          ru: 'Статус подключения'
        },
        gramlink_settings_status_desc: {
          en: 'Current Telegram connection status',
          uk: 'Поточний статус з\'єднання Telegram',
          ru: 'Текущий статус соединения Telegram'
        },
        // Settings — sync toggles
        gramlink_settings_sync_enabled: {
          en: 'Enable sync',
          uk: 'Увімкнути синхронізацію',
          ru: 'Включить синхронизацию'
        },
        gramlink_settings_sync_heartbeat: {
          en: 'Device heartbeat',
          uk: 'Heartbeat пристрою',
          ru: 'Heartbeat устройства'
        },
        gramlink_settings_sync_broadcast: {
          en: 'Cross-device broadcast',
          uk: 'Кросс-девайс трансляція',
          ru: 'Кросс-девайс трансляция'
        },
        gramlink_settings_connection: {
          en: 'Connection',
          uk: 'З\'єднання',
          ru: 'Соединение'
        },
        // Settings — server type
        gramlink_settings_server_type: {
          en: 'Server',
          uk: 'Сервер',
          ru: 'Сервер'
        },
        gramlink_settings_server_desc: {
          en: 'Choose server type',
          uk: 'Виберіть тип сервера',
          ru: 'Выберите тип сервера'
        },
        gramlink_settings_auth: {
          en: 'Authorization',
          uk: 'Авторизація',
          ru: 'Авторизация'
        },
        gramlink_settings_auth_login: {
          en: 'Login to Telegram',
          uk: 'Увійти в Telegram',
          ru: 'Войти в Telegram'
        },
        gramlink_settings_auth_logout: {
          en: 'Logout',
          uk: 'Вийти',
          ru: 'Выйти'
        },
        // Hub — status
        gramlink_status_connecting: {
          en: 'Connecting to Telegram...',
          uk: 'Підключення до Telegram...',
          ru: 'Подключение к Telegram...'
        },
        gramlink_status_connected: {
          en: 'Connected to Telegram',
          uk: 'Підключено до Telegram',
          ru: 'Подключено к Telegram'
        },
        gramlink_status_disconnected: {
          en: 'Not connected',
          uk: 'Не підключено',
          ru: 'Не подключено'
        },
        gramlink_status_error: {
          en: 'Connection error',
          uk: 'Помилка з\'єднання',
          ru: 'Ошибка подключения'
        },
        gramlink_status_auth_needed: {
          en: 'Authorization required',
          uk: 'Потрібна авторизація',
          ru: 'Требуется авторизация'
        },
        // Hub — general status
        gramlink_status: {
          en: 'Status',
          uk: 'Статус',
          ru: 'Статус'
        },
        gramlink_connecting: {
          en: 'Connect to Telegram to see devices',
          uk: 'Підключіться до Telegram щоб побачити пристрої',
          ru: 'Подключитесь к Telegram чтобы увидеть устройства'
        },
        gramlink_connected: {
          en: 'Connected',
          uk: 'Підключено',
          ru: 'Подключено'
        },
        gramlink_auth_required: {
          en: 'Authorization required',
          uk: 'Потрібна авторизація',
          ru: 'Требуется авторизация'
        },
        // Hub — devices
        gramlink_devices_title: {
          en: 'Connected devices',
          uk: 'Підключені пристрої',
          ru: 'Подключенные устройства'
        },
        gramlink_devices_empty: {
          en: 'No devices detected',
          uk: 'Пристроїв не виявлено',
          ru: 'Устройства не обнаружены'
        },
        gramlink_devices_online: {
          en: 'online',
          uk: 'онлайн',
          ru: 'онлайн'
        },
        gramlink_devices_offline: {
          en: 'offline',
          uk: 'офлайн',
          ru: 'офлайн'
        },
        gramlink_devices_this_device: {
          en: 'This device',
          uk: 'Цей пристрій',
          ru: 'Это устройство'
        },
        // Hub — general devices
        gramlink_devices: {
          en: 'Devices',
          uk: 'Пристрої',
          ru: 'Устройства'
        },
        gramlink_no_devices: {
          en: 'No devices',
          uk: 'Пристроїв немає',
          ru: 'Устройств нет'
        },
        gramlink_online: {
          en: 'Online',
          uk: 'Онлайн',
          ru: 'Онлайн'
        },
        // Hub — sync info
        gramlink_sync_channel: {
          en: 'Sync channel',
          uk: 'Канал синхронізації',
          ru: 'Канал синхронизации'
        },
        gramlink_sync_channel_creating: {
          en: 'Creating sync channel...',
          uk: 'Створення каналу синхронізації...',
          ru: 'Создание канала синхронизации...'
        },
        gramlink_sync_channel_ready: {
          en: 'Sync channel ready',
          uk: 'Канал синхронізації готовий',
          ru: 'Канал синхронизации готов'
        },
        gramlink_sync_channel_error: {
          en: 'Failed to create sync channel',
          uk: 'Не вдалося створити канал синхронізації',
          ru: 'Не удалось создать канал синхронизации'
        },
        gramlink_last_sync: {
          en: 'Last sync',
          uk: 'Остання синхронізація',
          ru: 'Последняя синхронизация'
        },
        gramlink_last_sync_never: {
          en: 'Never',
          uk: 'Ніколи',
          ru: 'Никогда'
        },
        // Auth flow — QR
        gramlink_auth_qr_title: {
          en: 'Telegram Authorization',
          uk: 'Авторизація Telegram',
          ru: 'Авторизация Telegram'
        },
        gramlink_auth_qr_scan: {
          en: 'Scan the QR code with your Telegram app',
          uk: 'Скануйте QR код у додатку Telegram',
          ru: 'Сканируйте QR код в приложении Telegram'
        },
        gramlink_auth_qr_waiting: {
          en: 'Waiting for scan...',
          uk: 'Очікування сканування...',
          ru: 'Ожидание сканирования...'
        },
        gramlink_auth_qr_confirm: {
          en: 'Confirm login on your phone and enter 2FA password if needed',
          uk: 'Підтвердьте вхід на телефоні та введіть пароль 2FA якщо потрібно',
          ru: 'Подтвердите вход на телефоне и введите пароль 2FA если требуется'
        },
        gramlink_auth_qr_success: {
          en: 'Authorization successful!',
          uk: 'Авторизація успішна!',
          ru: 'Авторизация успешна!'
        },
        gramlink_auth_qr_error: {
          en: 'Authorization failed',
          uk: 'Авторизація не вдалася',
          ru: 'Авторизация не удалась'
        },
        gramlink_auth_scan_done: {
          en: 'I scanned the QR code',
          uk: 'Я відсканував QR',
          ru: 'Я отсканировал QR'
        },
        gramlink_auth_scan_not_found: {
          en: 'Scan not detected. Make sure you scanned from Telegram and try again.',
          uk: 'Сканування не виявлено. Переконайтесь що сканували з Telegram і спробуйте ще раз.',
          ru: 'Сканирование не найдено. Убедитесь что сканировали из Telegram и попробуйте снова.'
        },
        gramlink_auth_restart: {
          en: 'Restart',
          uk: 'Спочатку',
          ru: 'Сначала'
        },
        gramlink_auth_qr_expired: {
          en: 'QR code expired. Please try again.',
          uk: 'QR код застарів. Спробуйте ще раз.',
          ru: 'QR код устарел. Попробуйте снова.'
        },
        // 2FA
        gramlink_2fa_title: {
          en: 'Two-factor authentication',
          uk: 'Двофакторна аутентифікація',
          ru: 'Двухфакторная аутентификация'
        },
        gramlink_2fa_desc: {
          en: 'Enter your 2FA password to complete login',
          uk: 'Введіть пароль 2FA для завершення входу',
          ru: 'Введите пароль 2FA для завершения входа'
        },
        gramlink_2fa_hint: {
          en: 'Hint: {hint}',
          uk: 'Підказка: {hint}',
          ru: 'Подсказка: {hint}'
        },
        gramlink_2fa_placeholder: {
          en: 'Password',
          uk: 'Пароль',
          ru: 'Пароль'
        },
        gramlink_2fa_confirm: {
          en: 'Confirm',
          uk: 'Підтвердити',
          ru: 'Подтвердить'
        },
        gramlink_2fa_cancel: {
          en: 'Cancel',
          uk: 'Скасувати',
          ru: 'Отмена'
        },
        gramlink_2fa_wrong: {
          en: 'Wrong password. Try again.',
          uk: 'Невірний пароль. Спробуйте ще раз.',
          ru: 'Неверный пароль. Попробуйте еще раз.'
        },
        // Phone auth
        gramlink_auth_phone_title: {
          en: 'Enter phone number in international format',
          uk: 'Введіть номер у міжнародному форматі',
          ru: 'Введите номер в международном формате'
        },
        gramlink_auth_send_code: {
          en: 'Send code',
          uk: 'Надіслати код',
          ru: 'Отправить код'
        },
        gramlink_auth_confirm: {
          en: 'Confirm',
          uk: 'Підтвердити',
          ru: 'Подтвердить'
        },
        gramlink_auth_code_invalid: {
          en: 'Invalid code. Try again.',
          uk: 'Невірний код. Спробуйте ще раз.',
          ru: 'Неверный код. Попробуйте снова.'
        },
        gramlink_auth_resend: {
          en: 'Resend code',
          uk: 'Надіслати ще раз',
          ru: 'Отправить еще раз'
        },
        // Backup
        gramlink_backup_export: {
          en: 'Export',
          uk: 'Експорт',
          ru: 'Экспорт'
        },
        gramlink_backup_import: {
          en: 'Import',
          uk: 'Імпорт',
          ru: 'Импорт'
        },
        gramlink_backup_uploading: {
          en: 'Uploading backup...',
          uk: 'Завантаження бекапу...',
          ru: 'Загрузка бекапа...'
        },
        gramlink_backup_exported: {
          en: 'Backup exported!',
          uk: 'Бекап експортовано!',
          ru: 'Бекап экспортирован!'
        },
        gramlink_backup_failed: {
          en: 'Backup operation failed',
          uk: 'Операція бекапу не вдалася',
          ru: 'Операция бекапа не удалась'
        },
        gramlink_backup_fetching: {
          en: 'Fetching latest backup...',
          uk: 'Отримання останнього бекапу...',
          ru: 'Получение последнего бекапа...'
        },
        gramlink_backup_no_files: {
          en: 'No backup files found',
          uk: 'Файлів бекапу не знайдено',
          ru: 'Файлов бекапа не найдено'
        },
        gramlink_backup_invalid: {
          en: 'Invalid backup file',
          uk: 'Неправильний файл бекапу',
          ru: 'Неправильный файл бекапа'
        },
        gramlink_backup_restore_title: {
          en: 'Restore backup?',
          uk: 'Відновити бекап?',
          ru: 'Восстановить бекап?'
        },
        gramlink_backup_restore_confirm: {
          en: 'This will overwrite {count} stored settings. Reload required after restore. Continue?',
          uk: 'Буде перезаписано {count} налаштувань. Для застосування потрібне перезавантаження. Продовжити?',
          ru: 'Будет перезаписано {count} настроек. Для применения требуется перезагрузка. Продолжить?'
        },
        gramlink_backup_restore_btn: {
          en: 'Restore',
          uk: 'Відновити',
          ru: 'Восстановить'
        },
        gramlink_backup_restored: {
          en: 'Backup restored! Reload Lampa to apply.',
          uk: 'Бекап відновлено! Перезавантажте Lampa для застосування.',
          ru: 'Бекап восстановлен! Перезагрузите Lampa для применения.'
        },
        gramlink_backup_topic_not_ready: {
          en: 'Backup topic not ready',
          uk: 'Топік бекапу ще не готовий',
          ru: 'Топик бекапа еще не готов'
        },
        gramlink_not_connected: {
          en: 'Not connected',
          uk: 'Не підключено',
          ru: 'Не подключено'
        },
        gramlink_cancel: {
          en: 'Cancel',
          uk: 'Скасувати',
          ru: 'Отмена'
        },
        gramlink_settings_server_type_official: {
          en: 'Official',
          uk: 'Офіційний',
          ru: 'Официальный'
        },
        gramlink_settings_server_type_custom: {
          en: 'Custom',
          uk: 'Кастомний',
          ru: 'Кастомный'
        },
        gramlink_settings_server_warning_title: {
          en: 'Warning',
          uk: 'Увага',
          ru: 'Внимание'
        },
        gramlink_settings_server_warning_desc: {
          en: 'Changing the server type will end the current session. You will need to authorize again on the new server. Continue?',
          uk: 'При зміні типу сервера поточну сесію буде завершено. Вам знадобиться авторизуватися знову на новому сервері. Продовжити?',
          ru: 'При смене типа сервера текущая сессия будет завершена. Вам потребуется авторизоваться заново на новом сервере. Продолжить?'
        },
        gramlink_settings_server_confirm: {
          en: 'Continue',
          uk: 'Продовжити',
          ru: 'Продолжить'
        },
        gramlink_settings_server_cancel: {
          en: 'Cancel',
          uk: 'Скасувати',
          ru: 'Отменить'
        },
        gramlink_settings_server_custom_host: {
          en: 'Custom server host',
          uk: 'Хост кастомного сервера',
          ru: 'Хост кастомного сервера'
        },
        gramlink_settings_server_custom_port: {
          en: 'Custom server port',
          uk: 'Порт кастомного сервера',
          ru: 'Порт кастомного сервера'
        },
        gramlink_settings_proxy_title: {
          en: 'MTProto proxy',
          uk: 'MTProto проксі',
          ru: 'MTProto прокси'
        },
        gramlink_settings_proxy_desc: {
          en: 'Proxy for bypassing Telegram blocks (WSS)',
          uk: 'Проксі для обходу блокувань Telegram (WSS)',
          ru: 'Прокси для обхода блокировок Telegram (WSS)'
        },
        gramlink_settings_proxy_host: {
          en: 'Proxy host',
          uk: 'Хост проксі',
          ru: 'Хост прокси'
        },
        gramlink_settings_proxy_port: {
          en: 'Proxy port',
          uk: 'Порт проксі',
          ru: 'Порт прокси'
        },
        gramlink_settings_proxy_secret: {
          en: 'Proxy secret (hex)',
          uk: 'Секрет проксі (hex)',
          ru: 'Секрет прокси (hex)'
        },
        gramlink_error_proxy_failed: {
          en: 'Proxy connection failed. Check settings or disable it.',
          uk: 'Помилка підключення через проксі. Перевірте параметри або спробуйте вимкнути його.',
          ru: 'Ошибка подключения через прокси. Проверьте параметры или попробуйте выключить его.'
        },
        gramlink_error_session_invalid: {
          en: 'Session invalid. Please log in again.',
          uk: 'Сесія невалідна. Увійдіть знову.',
          ru: 'Сессия невалидна. Войдите снова.'
        },
        gramlink_backup_pick_title: {
          en: 'Select backup to restore',
          uk: 'Виберіть бекап для відновлення',
          ru: 'Выберите бекап для восстановления'
        },
        gramlink_backup_downloading: {
          en: 'Downloading backup...',
          uk: 'Завантаження бекапу...',
          ru: 'Загрузка бекапа...'
        },
        // Profiles
        gramlink_profile_switch: {
          en: 'Switch profile?',
          uk: 'Перемкнути профіль?',
          ru: 'Переключить профиль?'
        },
        gramlink_profile_switch_desc: {
          en: 'Current profile will be auto-saved before switching.',
          uk: 'Поточний профіль буде автоматично збережено.',
          ru: 'Текущий профиль будет автоматически сохранен.'
        },
        gramlink_profile_created: {
          en: 'Profile created',
          uk: 'Профіль створено',
          ru: 'Профиль создан'
        },
        gramlink_profile_activated: {
          en: 'Profile activated',
          uk: 'Профіль активовано',
          ru: 'Профиль активирован'
        },
        gramlink_profile_synced: {
          en: 'Profile synced',
          uk: 'Профіль синхронізовано',
          ru: 'Профиль синхронизирован'
        },
        gramlink_profile_deleted: {
          en: 'Profile deleted',
          uk: 'Профіль видалено',
          ru: 'Профиль удален'
        },
        gramlink_profile_not_found: {
          en: 'Profile not found',
          uk: 'Профіль не знайдено',
          ru: 'Профиль не найден'
        },
        gramlink_profile_active: {
          en: 'active',
          uk: 'активний',
          ru: 'активный'
        },
        gramlink_switch: {
          en: 'Switch',
          uk: 'Перемкнути',
          ru: 'Переключить'
        },
        gramlink_profile_rename: {
          en: 'Rename profile',
          uk: 'Перейменувати профіль',
          ru: 'Переименовать профиль'
        },
        gramlink_profile_renamed: {
          en: 'Profile renamed',
          uk: 'Профіль перейменовано',
          ru: 'Профиль переименован'
        },
        gramlink_delete_confirm: {
          en: 'Delete this profile?',
          uk: 'Видалити цей профіль?',
          ru: 'Удалить этот профиль?'
        },
        // Hub — profile actions
        gramlink_no_profiles: {
          en: 'No profiles',
          uk: 'Профілів немає',
          ru: 'Профилей нет'
        },
        gramlink_create_first: {
          en: 'Create a profile to start syncing',
          uk: 'Створіть профіль для початку синхронізації',
          ru: 'Создайте профиль для начала синхронизации'
        },
        gramlink_create_profile: {
          en: 'Create profile',
          uk: 'Створити профіль',
          ru: 'Создать профиль'
        },
        gramlink_this_device: {
          en: 'This device',
          uk: 'Цей пристрій',
          ru: 'Это устройство'
        },
        gramlink_plugins: {
          en: 'Plugins',
          uk: 'Плагіни',
          ru: 'Плагины'
        },
        gramlink_sync: {
          en: 'Sync',
          uk: 'Синхронізувати',
          ru: 'Синхронизировать'
        },
        gramlink_delete: {
          en: 'Delete',
          uk: 'Видалити',
          ru: 'Удалить'
        },
        gramlink_profiles: {
          en: 'Profiles',
          uk: 'Профілі',
          ru: 'Профили'
        },
        gramlink_active: {
          en: 'Active',
          uk: 'Активний',
          ru: 'Активный'
        },
        gramlink_switch_profile: {
          en: 'Switch Profile?',
          uk: 'Перемкнути профіль?',
          ru: 'Переключить профиль?'
        },
        gramlink_switch_confirm: {
          en: 'Current profile will be autosaved',
          uk: 'Поточний профіль буде автозбережено',
          ru: 'Текущий профиль будет автосохранен'
        },
        // Migration
        gramlink_import_cub: {
          en: 'Import from Cub',
          uk: 'Імпорт з Cub',
          ru: 'Импорт из Cub'
        },
        gramlink_import_cub_desc: {
          en: 'Migrate Cub profiles to GramLink',
          uk: 'Міграція профілів Cub у GramLink',
          ru: 'Миграция профилей Cub в GramLink'
        },
        gramlink_migration_start: {
          en: 'Reading Cub profiles...',
          uk: 'Читання профілів Cub...',
          ru: 'Чтение профилей Cub...'
        },
        gramlink_migration_complete: {
          en: '{count} profiles imported successfully.',
          uk: 'Імпортовано {count} профілів успішно.',
          ru: 'Импортировано {count} профилей успешно.'
        },
        // Import analyzer
        gramlink_import_title: {
          en: 'Cub Import Summary',
          uk: 'Підсумок імпорту з Cub',
          ru: 'Итоги импорта из Cub'
        },
        gramlink_import_profiles: {
          en: 'Profiles found:',
          uk: 'Знайдено профілів:',
          ru: 'Найдено профилей:'
        },
        gramlink_import_bookmarks: {
          en: 'Favorites & history items:',
          uk: 'Елементів обраного та історії:',
          ru: 'Элементов избранного и истории:'
        },
        gramlink_import_plugins: {
          en: 'Plugins found:',
          uk: 'Знайдено плагінів:',
          ru: 'Найдено плагинов:'
        },
        gramlink_import_proceed: {
          en: 'Proceed with migration to GramLink?',
          uk: 'Продовжити міграцію в GramLink?',
          ru: 'Продолжить миграцию в GramLink?'
        },
        gramlink_import_start: {
          en: 'Yes, migrate',
          uk: 'Так, мігрувати',
          ru: 'Да, мигрировать'
        },
        gramlink_migration_no_cub: {
          en: 'Cub account not found. Log in to Cub in Lampa settings first.',
          uk: 'Акаунт Cub не знайдено. Увійдіть в Cub в налаштуваннях Lampa.',
          ru: 'Аккаунт Cub не найден. Войдите в Cub в настройках Lampa.'
        },
        gramlink_migration_no_profiles: {
          en: 'No Cub profiles found',
          uk: 'Профілів Cub не знайдено',
          ru: 'Профилей Cub не найдено'
        },
        gramlink_reload_now: {
          en: 'Reload now',
          uk: 'Перезавантажити',
          ru: 'Перезагрузить'
        },
        // Plugin Manager
        gramlink_plugins_title: {
          en: 'Plugins: "{name}"',
          uk: 'Плагіни: "{name}"',
          ru: 'Плагины: "{name}"'
        },
        gramlink_plugins_add: {
          en: 'Add plugin',
          uk: 'Додати плагін',
          ru: 'Добавить плагин'
        },
        gramlink_plugins_add_url: {
          en: 'Plugin URL',
          uk: 'URL плагіна',
          ru: 'URL плагина'
        },
        gramlink_plugins_name: {
          en: 'Plugin name (optional)',
          uk: 'Назва плагіна (необов\'язково)',
          ru: 'Название плагина (необязательно)'
        },
        gramlink_plugins_empty: {
          en: 'No plugins in this profile',
          uk: 'Немає плагінів у цьому профілі',
          ru: 'Нет плагинов в этом профиле'
        },
        gramlink_plugins_already_installed: {
          en: 'Already installed',
          uk: 'Вже встановлено',
          ru: 'Уже установлен'
        },
        gramlink_plugins_remove: {
          en: 'Remove',
          uk: 'Видалити',
          ru: 'Удалить'
        },
        gramlink_plugins_remove_confirm: {
          en: 'will be removed from this profile.',
          uk: 'буде видалено з цього профілю.',
          ru: 'будет удалён из этого профиля.'
        },
        gramlink_plugins_toggle_on: {
          en: 'Enable',
          uk: 'Увімкнути',
          ru: 'Включить'
        },
        gramlink_plugins_toggle_off: {
          en: 'Disable',
          uk: 'Вимкнути',
          ru: 'Выключить'
        },
        gramlink_plugins_save: {
          en: 'Save',
          uk: 'Зберегти',
          ru: 'Сохранить'
        },
        gramlink_plugins_saving: {
          en: 'Saving profile...',
          uk: 'Збереження профілю...',
          ru: 'Сохранение профиля...'
        },
        gramlink_plugins_saved: {
          en: 'Profile updated',
          uk: 'Профіль оновлено',
          ru: 'Профиль обновлён'
        },
        gramlink_plugins_added: {
          en: 'Plugin added.',
          uk: 'Плагін додано.',
          ru: 'Плагин добавлен.'
        },
        gramlink_plugins_removed: {
          en: 'Plugin removed.',
          uk: 'Плагін видалено.',
          ru: 'Плагин удалён.'
        },
        gramlink_plugins_toggled: {
          en: 'Plugin toggled.',
          uk: 'Плагін перемкнено.',
          ru: 'Плагин переключён.'
        },
        gramlink_plugins_reload_hint: {
          en: 'Reload required to apply.',
          uk: 'Для застосування потрібне перезавантаження.',
          ru: 'Для применения требуется перезагрузка.'
        },
        gramlink_plugins_unsaved: {
          en: 'Unsaved changes',
          uk: 'Незбережені зміни',
          ru: 'Несохранённые изменения'
        },
        gramlink_plugins_unsaved_desc: {
          en: 'You have unsaved changes. Save now?',
          uk: 'У вас є незбережені зміни. Зберегти?',
          ru: 'У вас есть несохранённые изменения. Сохранить?'
        },
        gramlink_plugins_manage: {
          en: 'Manage plugins',
          uk: 'Керування плагінами',
          ru: 'Управление плагинами'
        },
        gramlink_loading: {
          en: 'Loading…',
          uk: 'Завантаження…',
          ru: 'Загрузка…'
        },
        gramlink_tab_devices: {
          en: 'Devices',
          uk: 'Пристрої',
          ru: 'Устройства'
        },
        gramlink_tab_profiles: {
          en: 'Profiles',
          uk: 'Профілі',
          ru: 'Профили'
        },
        // Settings — Telegram App type
        gramlink_settings_app: {
          en: 'Telegram App',
          uk: 'Telegram App',
          ru: 'Telegram App'
        },
        gramlink_settings_app_lampa: {
          en: 'Lampa',
          uk: 'Lampa',
          ru: 'Lampa'
        },
        gramlink_settings_app_custom: {
          en: 'Custom',
          uk: 'Кастомний',
          ru: 'Кастомный'
        },
        gramlink_settings_app_desc: {
          en: 'Which Telegram App credentials to use. "Lampa" uses the bundled app shared across all Lampa users. "Custom" uses your own credentials from my.telegram.org (more private).',
          uk: 'Які облікові дані Telegram App використовувати. "Lampa" використовує вбудований додаток, спільний для всіх користувачів Lampa. "Кастомний" використовує ваші власні облікові дані з my.telegram.org (приватніше).',
          ru: 'Какие учётные данные Telegram App использовать. "Lampa" использует встроенное приложение, общее для всех пользователей Lampa. "Кастомный" использует ваши собственные учётные данные с my.telegram.org (более приватно).'
        },
        // Settings — About
        gramlink_settings_about: {
          en: 'About GramLink',
          uk: 'Про GramLink',
          ru: 'О GramLink'
        },
        gramlink_settings_about_desc: {
          en: 'Plugin version and information',
          uk: 'Версія та інформація про плагін',
          ru: 'Версия и информация о плагине'
        },
        gramlink_about_version: {
          en: 'Version',
          uk: 'Версія',
          ru: 'Версия'
        },
        gramlink_about_author: {
          en: 'Telegram',
          uk: 'Telegram',
          ru: 'Telegram'
        },
        gramlink_about_link_author: {
          en: ' @lme_chat',
          uk: ' @mmssixxx',
          ru: ' @lme_chat'
        },
        gramlink_about_description: {
          en: 'GramLink synchronizes your Lampa bookmarks, timecodes, plugins, and profiles across devices via Telegram.',
          uk: 'GramLink синхронізує ваші закладки, таймкоди, плагіни та профілі між пристроями через Telegram.',
          ru: 'GramLink синхронизирует ваши закладки, таймкоды, плагины и профили между устройствами через Telegram.'
        },
        // Settings — Sync timeout
        gramlink_settings_timeout: {
          en: 'Sync timeout',
          uk: 'Таймаут синхронізації',
          ru: 'Таймаут синхронизации'
        },
        gramlink_settings_timeout_desc: {
          en: 'Maximum wait time for sync operations (seconds)',
          uk: 'Максимальний час очікування синхронізації (секунди)',
          ru: 'Максимальное время ожидания синхронизации (секунды)'
        },
        // Settings — Delta poll interval
        gramlink_settings_poll_interval: {
          en: 'Delta poll interval',
          uk: 'Інтервал перевірки дельт',
          ru: 'Интервал проверки дельт'
        },
        gramlink_settings_poll_interval_desc: {
          en: 'How often to check for remote changes (seconds)',
          uk: 'Як часто перевіряти віддалені зміни (секунди)',
          ru: 'Как часто проверять удаленные изменения (секунды)'
        },
        // Profile head button
        gramlink_profile_button: {
          en: 'Switch profile',
          uk: 'Перемкнути профіль',
          ru: 'Переключить профиль'
        },
        gramlink_profile_active_label: {
          en: 'Active',
          uk: 'Активний',
          ru: 'Активный'
        },
        // Plugins tab
        gramlink_plugins_tab: {
          en: 'Plugins',
          uk: 'Плагіни',
          ru: 'Плагины'
        },
        gramlink_no_plugins: {
          en: 'No plugins installed',
          uk: 'Немає встановлених плагінів',
          ru: 'Нет установленных плагинов'
        },
        gramlink_plugins_edit_name: {
          en: 'Edit name',
          uk: 'Редагувати назву',
          ru: 'Редактировать название'
        },
        gramlink_plugins_edit_url: {
          en: 'Edit URL',
          uk: 'Редагувати URL',
          ru: 'Редактировать URL'
        },
        gramlink_plugins_manage_hint: {
          en: 'Add plugins via URL to extend Lampa functionality',
          uk: 'Додавайте плагіни через URL для розширення функціоналу Lampa',
          ru: 'Добавляйте плагины через URL для расширения функционала Lampa'
        },
        // Device overlays
        gramlink_device_reset: {
          en: 'Reset device settings',
          uk: 'Скинути налаштування пристрою',
          ru: 'Сбросить настройки устройства'
        },
        gramlink_device_rename: {
          en: 'Rename device',
          uk: 'Перейменувати пристрій',
          ru: 'Переименовать устройство'
        },
        gramlink_device_overlay_reset: {
          en: 'Device overlays reset. Sync profile to apply.',
          uk: 'Налаштування пристрою скинуто. Синхронізуйте профіль.',
          ru: 'Настройки устройства сброшены. Синхронизируйте профиль.'
        },
        // Compat checker
        gramlink_compat_title: {
          en: 'Telegram Library Support',
          uk: 'Підтримка бібліотеки Telegram',
          ru: 'Поддержка библиотеки Telegram'
        },
        gramlink_compat_ok: {
          en: 'Fully supported',
          uk: 'Повністю підтримується',
          ru: 'Полностью поддерживается'
        },
        gramlink_compat_partial: {
          en: 'Partial — may run slower',
          uk: 'Частково — може працювати повільніше',
          ru: 'Частично — может работать медленнее'
        },
        gramlink_compat_fail: {
          en: 'Not supported on this device',
          uk: 'Не підтримується на цьому пристрої',
          ru: 'Не поддерживается на этом устройстве'
        },
        gramlink_compat_blocked_label: {
          en: 'Blocking issues',
          uk: 'Блокуючі проблеми',
          ru: 'Блокирующие проблемы'
        },
        gramlink_compat_warning_label: {
          en: 'Warnings',
          uk: 'Попередження',
          ru: 'Предупреждения'
        },
        gramlink_compat_no_blockers: {
          en: 'No blocking issues detected. Library can be loaded.',
          uk: 'Блокуючих проблем не виявлено. Бібліотеку можна завантажити.',
          ru: 'Блокирующих проблем не обнаружено. Библиотеку можно загрузить.'
        },
        gramlink_compat_hint_disclaimer: {
          en: 'This check verifies only the runtime environment required by telegram.min.js. It does not test your network or Telegram API credentials.',
          uk: 'Ця перевірка лише тестує середовище виконання, потрібне для telegram.min.js. Вона не перевіряє мережу чи Telegram API-креденшали.',
          ru: 'Эта проверка только тестирует среду выполнения, необходимую для telegram.min.js. Она не проверяет сеть или Telegram API-креденшалы.'
        },
        gramlink_settings_avatar_style: {
          en: 'Avatar style',
          uk: 'Стиль аватара',
          ru: 'Стиль аватара'
        },
        gramlink_settings_avatar_style_desc: {
          en: 'Choose DiceBear avatar style for profiles',
          uk: 'Виберіть стиль аватара DiceBear для профілів',
          ru: 'Выберите стиль аватара DiceBear для профилей'
        },
        gramlink_avatar_none: {
          en: 'Initials (default)',
          uk: 'Ініціали (за замовчуванням)',
          ru: 'Инициалы (по умолчанию)'
        }
      });
    }

    /**
     * sdk/keys.js — Single source of storage keys and helpers for Lampa.Storage
     *
     * Eliminates:
     *   D-01 — getChannelId() now one function, NaN-safe
     *   D-02 — all STORAGE_* constants in one place
     *   D-10 — parseInt(Lampa.Storage.get(...), 10) replaced by getInt()
     *
     * Usage:
     *   import { STORAGE_KEYS, getChannelId, getInt } from '../sdk/keys'
     */

    var STORAGE_KEYS = {
      // Session / auth
      DC_ID: 'gramlink_dc_id',
      AUTH_KEY: 'gramlink_auth_key_hex',
      DEVICE_ID: 'gramlink_device_id',
      USER_NAME: 'gramlink_user_name',
      // Sync channel
      CHANNEL_ID: 'gramlink_channel_id',
      SYNC_LOG_TOPIC: 'gramlink_sync_log_topic',
      PROFILES_TOPIC: 'gramlink_profiles_topic',
      PROFILES_SYNC: 'gramlink_profiles_sync_topic',
      BACKUP_TOPIC: 'gramlink_backup_topic',
      REMOTE_CMD_TOPIC: 'gramlink_remote_cmd_topic',
      // Active profile
      ACTIVE_PROFILE: 'gramlink_active_profile',
      ACTIVE_PROFILE_TS: 'gramlink_active_profile_ts',
      ACTIVE_PROFILE_NAME: 'gramlink_active_profile_name',
      PROFILES_CACHE: 'gramlink_profiles_cache',
      PLUGIN_REGISTRY: 'gramlink_plugin_registry',
      LAST_DELTA_SEEN: 'gramlink_last_delta_seen',
      PROFILE_PLUGIN_URLS: 'gramlink_profile_plugin_urls',
      // Settings
      AVATAR_STYLE: 'gramlink_avatar_style',
      HEARTBEAT: 'gramlink_heartbeat',
      BROADCAST: 'gramlink_broadcast',
      SYNC_ENABLED: 'gramlink_sync_enabled',
      POLL_INTERVAL: 'gramlink_poll_interval',
      // Proxy
      PROXY_ENABLED: 'gramlink_proxy_enabled',
      PROXY_HOST: 'gramlink_proxy_host',
      PROXY_PORT: 'gramlink_proxy_port',
      PROXY_SECRET: 'gramlink_proxy_secret',
      // Server
      SERVER_TYPE: 'gramlink_server_type',
      CUSTOM_HOST: 'gramlink_custom_host',
      CUSTOM_PORT: 'gramlink_custom_port',
      APP_TYPE: 'gramlink_app_type',
      API_ID: 'gramlink_api_id',
      API_HASH: 'gramlink_api_hash'
    };

    /**
     * Safe channelId read from storage.
     * Returns number or null (never NaN).
     * Fixes auth.js:106 bug where parseInt('', 10) → NaN.
     */
    function getChannelId() {
      var v = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
      var n = parseInt(v, 10);
      // NOTE: Telegram channel peer IDs are NEGATIVE (e.g. -1001234567890).
      // Guard against NaN/Infinity but allow negative values.
      return Number.isFinite(n) && n !== 0 ? n : null;
    }

    /**
     * Safe integer read from storage.
     * Returns number; if storage is empty or NaN → returns def.
     */
    function getInt(key, def) {
      if (def === undefined) def = 0;
      var v = parseInt(Lampa.Storage.get(key, String(def)), 10);
      return Number.isFinite(v) ? v : def;
    }

    /**
     * sdk/device.js — Device fingerprinting and API credentials
     *
     * Eliminates:
     *   D-06 — getApiCredentials now in SDK, not duplicated in auth.js/settings.js/client.js
     *   A-16 — getDeviceId kept as-is (session ID), comment added
     *
     * Usage:
     *   import { getDeviceId, getDeviceName, getApiCredentials } from '../sdk/device'
     */

    // Note (A-16): getDeviceId generates tv_xxx_timestamp as session token,
    // not a stable fingerprint. On localStorage.clear() — it changes.
    // For a stable fingerprint, hash user-agent + screen resolution.

    var STORAGE_DEVICE_ID = STORAGE_KEYS.DEVICE_ID;
    function getDeviceId() {
      var id = Lampa.Storage.get(STORAGE_DEVICE_ID, '');
      if (!id) {
        id = 'tv_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        Lampa.Storage.set(STORAGE_DEVICE_ID, id);
      }
      return id;
    }
    var DEVICE_TYPES = {
      'Amazon Fire TV': {
        check: function check(ua) {
          return ua.match(/Fire TV|Amazon/i);
        },
        name: 'Amazon Fire TV'
      },
      'NVIDIA Shield TV': {
        check: function check(ua) {
          return ua.match(/SHIELD|NVIDIA/i);
        },
        name: 'NVIDIA Shield TV'
      },
      'Roku': {
        check: function check(ua) {
          return ua.match(/Roku/i) && !ua.match(/TCL/i);
        },
        name: 'Roku'
      },
      'Xiaomi Mi Box': {
        check: function check(ua) {
          return ua.match(/MiBox|Xiaomi/i);
        },
        name: 'Xiaomi Mi Box'
      },
      'Apple TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Apple/) && ua.match(/iPad/) && !Lampa.Platform.screen('mobile');
        },
        name: 'Apple TV'
      },
      'LG WebOS TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/WebOS|LG/i);
        },
        name: 'LG WebOS TV'
      },
      'Samsung Tizen TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Samsung|Tizen/i);
        },
        name: 'Samsung Tizen TV'
      },
      'Sony Bravia TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Sony|Bravia/i);
        },
        name: 'Sony Bravia TV'
      },
      'TCL Roku TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Roku|TCL/i);
        },
        name: 'TCL Roku TV'
      },
      'Hisense VIDAA TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/VIDAA|Hisense/i);
        },
        name: 'Hisense VIDAA TV'
      },
      'Haier Smart TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Haier/i);
        },
        name: 'Haier Smart TV'
      },
      'Yandex Smart TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/YNDX|Yandex|YandexTV/i);
        },
        name: 'Yandex Smart TV'
      },
      'Android Device': {
        check: function check(ua) {
          return ua.match(/Android/) && !Lampa.Platform.screen('tv');
        },
        name: 'Android Device'
      },
      'Smart TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Smart-TV|Smart TV|TV/i);
        },
        name: 'Smart TV'
      },
      'Android TV': {
        check: function check(ua) {
          return Lampa.Platform.screen('tv') && ua.match(/Android/) && !ua.match(/MiBox|SHIELD|Yandex/i);
        },
        name: 'Android TV'
      },
      'iPhone': {
        check: function check(ua) {
          return ua.match(/iPhone/);
        },
        name: 'iPhone'
      },
      'iPad': {
        check: function check(ua) {
          return ua.match(/iPad|Macintosh/) && Lampa.Platform.screen('mobile');
        },
        name: 'iPad'
      },
      'Mac Device': {
        check: function check(ua) {
          return ua.match(/Macintosh|iPad/) && !Lampa.Platform.screen('mobile');
        },
        name: 'Mac Device'
      },
      'Windows PC': {
        check: function check(ua) {
          return ua.match(/Windows/);
        },
        name: 'Windows PC'
      }
    };
    function getDeviceName() {
      var ua = navigator.userAgent || '';
      var name = 'Unknown Device';
      for (var k in DEVICE_TYPES) {
        if (DEVICE_TYPES[k].check(ua)) {
          name = DEVICE_TYPES[k].name;
          break;
        }
      }
      var m = ua.match(/\((.*?)\)/);
      var details = m ? m[1] : '';
      return details ? name + ' - (' + details + ')' : name;
    }

    /**
     * Returns a pretty OS version string for Telegram MTProto clientOptions.
     * Examples: "Android 14", "iOS 17.0", "macOS 10.15.7", "Windows 11", "Linux".
     */
    function getSystemVersion() {
      var ua = navigator.userAgent || '';
      var m = ua.match(/Android\s+([\d.]+)/);
      if (m) return 'Android ' + m[1];
      m = ua.match(/(?:iPhone|iPad)\s+OS\s+([\d_]+)/);
      if (m) return 'iOS ' + m[1].replace(/_/g, '.');
      m = ua.match(/Mac\s+OS\s+X\s+([\d_]+)/);
      if (m) return 'macOS ' + m[1].replace(/_/g, '.');
      m = ua.match(/Windows\s+NT\s+([\d.]+)/);
      if (m) {
        var v = m[1];
        if (v === '10.0') {
          if (ua.match(/Windows\s+11|Win64|arm64/i) && !ua.match(/Windows\s+10\.0;\s*$|Touch/i)) return 'Windows 11';
          return 'Windows 10';
        }
        if (v === '6.3') return 'Windows 8.1';
        if (v === '6.2') return 'Windows 8';
        if (v === '6.1') return 'Windows 7';
        return 'Windows ' + v;
      }
      m = ua.match(/\(([^)]+)\)/);
      if (m) {
        var parts = m[1].split(';');
        return parts[0].trim() || 'Linux';
      }
      return '1.0';
    }

    /**
     * Returns API credentials for Telegram.
     * If gramlink_app_type === 'custom' — reads from storage.
     * Otherwise — default Lampa credentials.
     */
    function getApiCredentials() {
      var apiId = 24911245;
      var apiHash = 'af35604124d731e01a113639b905e10e';
      var appType = Lampa.Storage.get(STORAGE_KEYS.APP_TYPE, 'lampa');
      if (appType === 'custom') {
        apiId = parseInt(Lampa.Storage.get(STORAGE_KEYS.API_ID, ''), 10);
        apiHash = Lampa.Storage.get(STORAGE_KEYS.API_HASH, '');
      }
      return {
        apiId: apiId,
        apiHash: apiHash
      };
    }

    /**
     * sdk/version.js — Single source of truth for plugin version
     *
     * Used by both modern (GramJS) and gateway (WebSocket) clients.
     * Keep this file simple — no imports, no side effects.
     */

    var VERSION = '0.2.2';

    /**
     * crypto-lite.js — Pure-JS cryptographic primitives (zero dependencies)
     * SHA-256, HMAC-SHA256, PBKDF2-SHA256, AES-128-CTR, randomBytes
     * For Smart TV / legacy WebView targets.
     */

    var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    function rrot(x, n) {
      return x >>> n | x << 32 - n;
    }
    function sha256(data) {
      var dataLen = data.length;
      var bitLenHi = Math.floor(dataLen * 8 / 4294967296);
      var bitLenLo = dataLen * 8 >>> 0;
      var numBlocks = Math.ceil((dataLen + 9) / 64);
      var wordLen = numBlocks << 4;
      var w = new Array(wordLen);
      for (var i = 0; i < wordLen; i++) w[i] = 0;
      for (var i = 0; i < dataLen; i++) {
        w[i >> 2] |= data[i] << 24 - i % 4 * 8;
      }
      w[dataLen >> 2] |= 0x80 << 24 - dataLen % 4 * 8;
      w[wordLen - 2] = bitLenHi;
      w[wordLen - 1] = bitLenLo;
      var H0 = 0x6a09e667,
        H1 = 0xbb67ae85,
        H2 = 0x3c6ef372,
        H3 = 0xa54ff53a;
      var H4 = 0x510e527f,
        H5 = 0x9b05688c,
        H6 = 0x1f83d9ab,
        H7 = 0x5be0cd19;
      for (var block = 0; block < numBlocks; block++) {
        var offset = block << 4;
        var W = new Array(64);
        for (var t = 0; t < 16; t++) {
          W[t] = w[offset + t];
        }
        for (var t = 16; t < 64; t++) {
          var s0 = rrot(W[t - 15], 7) ^ rrot(W[t - 15], 18) ^ W[t - 15] >>> 3;
          var s1 = rrot(W[t - 2], 17) ^ rrot(W[t - 2], 19) ^ W[t - 2] >>> 10;
          W[t] = W[t - 16] + s0 + W[t - 7] + s1 | 0;
        }
        var a = H0,
          b = H1,
          c = H2,
          d = H3,
          e = H4,
          f = H5,
          g = H6,
          h = H7;
        for (var t = 0; t < 64; t++) {
          var S1 = rrot(e, 6) ^ rrot(e, 11) ^ rrot(e, 25);
          var ch = e & f ^ ~e & g;
          var temp1 = h + S1 + ch + K[t] + W[t] | 0;
          var S0 = rrot(a, 2) ^ rrot(a, 13) ^ rrot(a, 22);
          var maj = a & b ^ a & c ^ b & c;
          var temp2 = S0 + maj | 0;
          h = g;
          g = f;
          f = e;
          e = d + temp1 | 0;
          d = c;
          c = b;
          b = a;
          a = temp1 + temp2 | 0;
        }
        H0 = H0 + a | 0;
        H1 = H1 + b | 0;
        H2 = H2 + c | 0;
        H3 = H3 + d | 0;
        H4 = H4 + e | 0;
        H5 = H5 + f | 0;
        H6 = H6 + g | 0;
        H7 = H7 + h | 0;
      }
      var result = new Uint8Array(32);
      var hv = [H0, H1, H2, H3, H4, H5, H6, H7];
      for (var i = 0; i < 8; i++) {
        result[i * 4] = hv[i] >>> 24 & 0xff;
        result[i * 4 + 1] = hv[i] >>> 16 & 0xff;
        result[i * 4 + 2] = hv[i] >>> 8 & 0xff;
        result[i * 4 + 3] = hv[i] & 0xff;
      }
      return result;
    }
    function hmacSha256(key, data) {
      if (key.length > 64) {
        key = sha256(key);
      }
      if (key.length < 64) {
        var padded = new Uint8Array(64);
        padded.set(key);
        key = padded;
      }
      var ipad = new Uint8Array(64);
      var opad = new Uint8Array(64);
      for (var i = 0; i < 64; i++) {
        ipad[i] = key[i] ^ 0x36;
        opad[i] = key[i] ^ 0x5c;
      }
      var inner = new Uint8Array(ipad.length + data.length);
      inner.set(ipad);
      inner.set(data, ipad.length);
      var innerHash = sha256(inner);
      var outer = new Uint8Array(opad.length + innerHash.length);
      outer.set(opad);
      outer.set(innerHash, opad.length);
      return sha256(outer);
    }
    function pbkdf2Sha256(password, salt, iterations, keyLen) {
      var hLen = 32;
      var l = Math.ceil(keyLen / hLen);
      var dk = new Uint8Array(l * hLen);
      var buf = new ArrayBuffer(salt.length + 4);
      var salted = new Uint8Array(buf);
      for (var i = 1; i <= l; i++) {
        salted.set(salt);
        salted[salt.length] = i >>> 24 & 0xff;
        salted[salt.length + 1] = i >>> 16 & 0xff;
        salted[salt.length + 2] = i >>> 8 & 0xff;
        salted[salt.length + 3] = i & 0xff;
        var u = hmacSha256(password, salted);
        var t = new Uint8Array(hLen);
        t.set(u);
        for (var j = 2; j <= iterations; j++) {
          u = hmacSha256(password, u);
          for (var k = 0; k < hLen; k++) {
            t[k] ^= u[k];
          }
        }
        dk.set(t, (i - 1) * hLen);
      }
      return dk.slice(0, keyLen);
    }
    var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
    var RCON = [0, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
    function gmul2(a) {
      return (a << 1 ^ (a & 0x80 ? 0x1b : 0)) & 0xff;
    }
    function rotWord(word) {
      return (word << 8 | word >>> 24 & 0xff) >>> 0;
    }
    function subWord(word) {
      return (S[word >>> 24 & 0xff] << 24 | S[word >>> 16 & 0xff] << 16 | S[word >>> 8 & 0xff] << 8 | S[word & 0xff]) >>> 0;
    }
    function aesKeyExpansion(key) {
      var w = new Array(44);
      for (var i = 0; i < 4; i++) {
        w[i] = (key[i * 4] << 24 | key[i * 4 + 1] << 16 | key[i * 4 + 2] << 8 | key[i * 4 + 3]) >>> 0;
      }
      for (var i = 4; i < 44; i++) {
        var temp = w[i - 1];
        if (i % 4 === 0) {
          temp = subWord(rotWord(temp)) ^ RCON[i / 4] << 24;
        }
        w[i] = (w[i - 4] ^ temp) >>> 0;
      }
      return w;
    }
    function subBytes(state) {
      for (var i = 0; i < 16; i++) {
        state[i] = S[state[i]];
      }
    }
    function shiftRows(state) {
      var t = new Array(16);
      for (var i = 0; i < 16; i++) t[i] = state[i];
      for (var c = 0; c < 4; c++) {
        state[4 * c] = t[4 * c];
        state[4 * c + 1] = t[4 * (c + 1 & 3) + 1];
        state[4 * c + 2] = t[4 * (c + 2 & 3) + 2];
        state[4 * c + 3] = t[4 * (c + 3 & 3) + 3];
      }
    }
    function mixColumns(state) {
      for (var c = 0; c < 4; c++) {
        var i = 4 * c;
        var a0 = state[i],
          a1 = state[i + 1],
          a2 = state[i + 2],
          a3 = state[i + 3];
        state[i] = gmul2(a0) ^ (gmul2(a1) ^ a1) ^ a2 ^ a3;
        state[i + 1] = a0 ^ gmul2(a1) ^ (gmul2(a2) ^ a2) ^ a3;
        state[i + 2] = a0 ^ a1 ^ gmul2(a2) ^ (gmul2(a3) ^ a3);
        state[i + 3] = gmul2(a0) ^ a0 ^ a1 ^ a2 ^ gmul2(a3);
      }
    }
    function addRoundKey(state, w, round) {
      var idx = round << 2;
      for (var c = 0; c < 4; c++) {
        var kw = w[idx + c];
        state[4 * c] ^= kw >>> 24 & 0xff;
        state[4 * c + 1] ^= kw >>> 16 & 0xff;
        state[4 * c + 2] ^= kw >>> 8 & 0xff;
        state[4 * c + 3] ^= kw & 0xff;
      }
    }
    function aesEncryptBlock(w, block) {
      var state = new Array(16);
      for (var i = 0; i < 16; i++) state[i] = block[i];
      addRoundKey(state, w, 0);
      for (var round = 1; round <= 9; round++) {
        subBytes(state);
        shiftRows(state);
        mixColumns(state);
        addRoundKey(state, w, round);
      }
      subBytes(state);
      shiftRows(state);
      addRoundKey(state, w, 10);
      var result = new Uint8Array(16);
      for (var i = 0; i < 16; i++) result[i] = state[i];
      return result;
    }
    function aesCtrCrypt(key, iv, data) {
      var roundKeys = aesKeyExpansion(key);
      var output = new Uint8Array(data.length);
      var counter = new Uint8Array(16);
      counter.set(iv);
      var offset = 0;
      while (offset < data.length) {
        var keystream = aesEncryptBlock(roundKeys, counter);
        for (var i = 0; i < 16 && offset + i < data.length; i++) {
          output[offset + i] = data[offset + i] ^ keystream[i];
        }
        offset += 16;
        for (var j = 15; j >= 0; j--) {
          counter[j]++;
          if (counter[j] !== 0) break;
        }
      }
      return output;
    }
    function randomBytes(n) {
      var bytes = new Uint8Array(n);
      crypto.getRandomValues(bytes);
      return bytes;
    }

    /**
     * vault.js — Secure storage for GramLink auth keys
     * Wraps crypto-lite primitives with Lampa.Storage persistence.
     */
    var PBKDF2_ITERATIONS = 100000;
    var KEY_LEN = 16;
    var IV_LEN = 16;
    var SALT_LEN = 16;
    var VAULT_VERSION = '1';
    var STORAGE_CT = 'gramlink_vault_ct';
    var STORAGE_IV = 'gramlink_vault_iv';
    var STORAGE_SALT = 'gramlink_vault_salt';
    var STORAGE_VER = 'gramlink_vault_ver';
    var OLD_AUTH_KEY = 'gramlink_auth_key_hex';

    // In-memory cache: derive key once per session, survive reconnect
    var _cache = null;
    function strToUtf8(str) {
      if (typeof TextEncoder !== 'undefined') {
        return new TextEncoder().encode(str);
      }
      var len = str.length;
      var bytes = [];
      for (var i = 0; i < len; i++) {
        var code = str.charCodeAt(i);
        if (code < 0x80) {
          bytes.push(code);
        } else if (code < 0x800) {
          bytes.push(0xc0 | code >> 6, 0x80 | code & 0x3f);
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes.push(0xe0 | code >> 12, 0x80 | code >> 6 & 0x3f, 0x80 | code & 0x3f);
        } else {
          i++;
          var code2 = str.charCodeAt(i);
          var cp = (code - 0xd800 << 10) + (code2 - 0xdc00) + 0x10000;
          bytes.push(0xf0 | cp >> 18, 0x80 | cp >> 12 & 0x3f, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        }
      }
      return new Uint8Array(bytes);
    }
    function bytesToHex(bytes) {
      var hex = '';
      var table = '0123456789abcdef';
      for (var i = 0; i < bytes.length; i++) {
        hex += table[bytes[i] >> 4 & 0xf] + table[bytes[i] & 0xf];
      }
      return hex;
    }
    function hexToBytes(hex) {
      var len = hex.length >> 1;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
      }
      return bytes;
    }
    function getDeviceFingerprint() {
      var sw = typeof screen !== 'undefined' ? screen.width || 0 : 0;
      var sh = typeof screen !== 'undefined' ? screen.height || 0 : 0;
      var raw = (navigator.userAgent || '') + '|' + sw + 'x' + sh + '|' + (navigator.language || 'en');
      return sha256(strToUtf8(raw));
    }

    /**
     * Lampa Context — stable Lampa properties that don't change
     * on update. Used as seed instead of hardcoded PLUGIN_SECRET.
     * Uses Lampa.Utils.hash() — the only hash function from Lampa's libraries.
     */
    function getLampaContext() {
      var p = ['gramlink', Lampa.Storage.get('platform', 'unknown'), Lampa.Platform.tv() ? 'tv' : Lampa.Platform.screen('mobile') ? 'mobile' : 'desktop'];
      return Lampa.Utils.hash(p.join('|'));
    }
    function _deriveKey(saltBytes) {
      var lampaCtx = strToUtf8(String(getLampaContext()));
      var fpBytes = getDeviceFingerprint();
      var password = hmacSha256(lampaCtx, fpBytes);
      return pbkdf2Sha256(password, saltBytes, PBKDF2_ITERATIONS, KEY_LEN);
    }
    var vault = {
      seal: function seal(authKeyHex) {
        try {
          var authKey = hexToBytes(authKeyHex);
          var salt = randomBytes(SALT_LEN);
          var iv = randomBytes(IV_LEN);
          var key = _deriveKey(salt);
          var ciphertext = aesCtrCrypt(key, iv, authKey);
          Lampa.Storage.set(STORAGE_CT, bytesToHex(ciphertext));
          Lampa.Storage.set(STORAGE_IV, bytesToHex(iv));
          Lampa.Storage.set(STORAGE_SALT, bytesToHex(salt));
          Lampa.Storage.set(STORAGE_VER, VAULT_VERSION);
          Lampa.Storage.set(OLD_AUTH_KEY, '');
          return true;
        } catch (err) {
          console.warn('GramLink', 'Vault seal failed:', err);
          return false;
        }
      },
      unseal: function unseal() {
        if (_cache) return _cache;
        try {
          var ct = Lampa.Storage.get(STORAGE_CT, '');
          var iv = Lampa.Storage.get(STORAGE_IV, '');
          var salt = Lampa.Storage.get(STORAGE_SALT, '');
          if (!ct || !iv || !salt) return null;
          var key = _deriveKey(hexToBytes(salt));
          if (!key || key.length === 0) return null;
          var plaintext = aesCtrCrypt(key, hexToBytes(iv), hexToBytes(ct));
          _cache = bytesToHex(plaintext);
          return _cache;
        } catch (err) {
          console.warn('GramLink', 'Vault unseal failed:', err);
          return null;
        }
      },
      hasSealed: function hasSealed() {
        return !!(Lampa.Storage.get(STORAGE_CT, '') && Lampa.Storage.get(STORAGE_VER, ''));
      },
      clear: function clear() {
        Lampa.Storage.set(STORAGE_CT, '');
        Lampa.Storage.set(STORAGE_IV, '');
        Lampa.Storage.set(STORAGE_SALT, '');
        Lampa.Storage.set(STORAGE_VER, '');
      },
      migrateIfNeeded: function migrateIfNeeded() {
        if (this.hasSealed()) return false;
        var oldKey = Lampa.Storage.get(OLD_AUTH_KEY, '');
        if (!oldKey) return false;
        console.log('GramLink', 'Migrating plaintext auth key to vault...');
        if (this.seal(oldKey)) {
          return true;
        }
        return false;
      }
    };

    var instance = null;
    function GatewayClient() {
      this._ws = null;
      this._connected = false;
      this._connecting = false;
      this._requestId = 0;
      this._pending = {};
      this._listeners = {};
      this._heartbeatTimer = null;
      this._heartbeatMsgId = null;
      this._reconnectTimer = null;
      this._reconnectAttempts = 0;
      this._wsUrl = '';
    }
    GatewayClient.getInstance = function () {
      if (!instance) instance = new GatewayClient();
      return instance;
    };

    // ── Credentials ────────────────────────────────

    GatewayClient.prototype.saveCredentials = function (dcId, authKeyHex) {
      Lampa.Storage.set(STORAGE_KEYS.DC_ID, String(dcId));
      vault.seal(authKeyHex);
    };
    GatewayClient.prototype.hasCredentials = function () {
      var dc = Lampa.Storage.get(STORAGE_KEYS.DC_ID, '');
      var key = vault.hasSealed();
      return !!(dc && key);
    };
    GatewayClient.prototype.clearCredentials = function () {
      Lampa.Storage.set(STORAGE_KEYS.DC_ID, '');
      vault.clear();
    };

    // ── WS helpers ────────────────────────────────

    GatewayClient.prototype._sendCommand = function (cmd, params) {
      var self = this;
      return new Promise(function (resolve, reject) {
        if (!self._ws || self._ws.readyState !== 1) {
          reject(new Error('Not connected'));
          return;
        }
        var id = ++self._requestId;
        var timer = setTimeout(function () {
          delete self._pending[id];
          reject(new Error('Gateway timeout: ' + cmd));
        }, 30000);
        self._pending[id] = {
          resolve: resolve,
          reject: reject,
          timer: timer
        };
        self._ws.send(JSON.stringify({
          id: id,
          cmd: cmd,
          params: params || {}
        }));
      });
    };
    GatewayClient.prototype._sendApi = function (method, params) {
      var self = this;
      return self._sendCommand('api', {
        method: method,
        params: params || {}
      }).then(function (resp) {
        return resp.result;
      });
    };
    GatewayClient.prototype._processGatewayMessage = function (e) {
      var msg;
      try {
        msg = JSON.parse(e.data);
      } catch (x) {
        return;
      }
      var pending = msg.id && this._pending[msg.id];
      if (pending) {
        clearTimeout(pending.timer);
        delete this._pending[msg.id];
        if (msg.ok) pending.resolve(msg);else pending.reject(new Error(msg.error || 'Gateway error'));
      }
      if (msg.event === 'disconnected') {
        this._connected = false;
        this._emit('connection', {
          state: 'disconnected'
        });
      }
      if (msg.event === 'message' && msg.data) {
        this._emit('profile_delta', msg.data);
      }
    };

    // ── Connection ────────────────────────────────

    GatewayClient.prototype.connect = function () {
      var self = this;
      if (self._connecting) {
        return new Promise(function (resolve, reject) {
          var check = setInterval(function () {
            if (self._connected) {
              clearInterval(check);
              resolve();
            }
            if (!self._connecting) {
              clearInterval(check);
              reject(new Error('Connection failed'));
            }
          }, 200);
        });
      }
      if (self._connected) return Promise.resolve();
      if (!self.hasCredentials()) return Promise.reject(new Error('Authorization required'));
      self._connecting = true;
      self._emit('connection', {
        state: 'connecting'
      });
      var dcId = parseInt(Lampa.Storage.get(STORAGE_KEYS.DC_ID, ''), 10);
      var authKeyHex = vault.unseal();
      if (!dcId || !authKeyHex) {
        self._connecting = false;
        return Promise.reject(new Error('No credentials'));
      }
      var deviceId = getDeviceId();
      var apiCreds = getApiCredentials();
      var gatewayUrl = Lampa.Storage.get('gramlink_gateway_url', 'wss://mtproto-master.fly.dev');
      self._wsUrl = gatewayUrl + '/ws?clientId=' + encodeURIComponent(deviceId);
      // ponytail: build lang codes for Telegram device registration
      var uiLang = Lampa.Storage && Lampa.Storage.get('language', 'en') || 'en';
      var systemLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0] || 'en';
      return new Promise(function (resolve, reject) {
        var ws = new WebSocket(self._wsUrl);
        self._ws = ws;
        ws.onopen = function () {
          self._sendCommand('connect', {
            dcId: dcId,
            authKeyHex: authKeyHex,
            deviceModel: getDeviceName(),
            systemVersion: getSystemVersion(),
            appVersion: VERSION,
            langCode: uiLang,
            systemLangCode: systemLang,
            apiId: apiCreds.apiId,
            apiHash: apiCreds.apiHash
          }).then(function (resp) {
            if (resp.event === 'connected') {
              self._connected = true;
              self._connecting = false;
              self._reconnectAttempts = 0;
              self._emit('connection', {
                state: 'connected'
              });
              var channelId = Lampa.Storage.get('gramlink_channel_id', '');
              var syncLogId = Lampa.Storage.get('gramlink_sync_log_topic', '');
              if (channelId && syncLogId && self.isEnabled('gramlink_heartbeat')) {
                self.startHeartbeat(channelId, syncLogId);
              }
              resolve();
            } else {
              self._connecting = false;
              reject(new Error(resp.error || 'Gateway connect failed'));
            }
          }).catch(function (err) {
            self._connecting = false;
            reject(err);
          });
        };
        ws.onmessage = function (e) {
          self._processGatewayMessage(e);
        };
        ws.onclose = function () {
          self._connected = false;
          self._connecting = false;
          self._emit('connection', {
            state: 'disconnected'
          });
          self._scheduleReconnect();
        };
        ws.onerror = function () {
          self._connecting = false;
          reject(new Error('WebSocket connection failed'));
        };
      });
    };
    GatewayClient.prototype._scheduleReconnect = function () {
      var self = this;
      if (self._reconnectTimer) return;
      if (!self.hasCredentials()) return;
      var delay = Math.min(1000 * Math.pow(2, self._reconnectAttempts), 30000);
      self._reconnectAttempts++;
      self._reconnectTimer = setTimeout(function () {
        self._reconnectTimer = null;
        self.connect().catch(function () {});
      }, delay);
    };
    GatewayClient.prototype.disconnect = function () {
      this.stopHeartbeat();
      if (this._reconnectTimer) {
        clearTimeout(this._reconnectTimer);
        this._reconnectTimer = null;
      }
      if (this._ws) {
        try {
          this._ws.onclose = null;
          this._ws.close();
        } catch (e) {}
        this._ws = null;
      }
      this._connected = false;
      this._connecting = false;
      this._emit('connection', {
        state: 'disconnected'
      });
    };
    GatewayClient.prototype.logout = function () {
      this.disconnect();
      this.clearCredentials();
    };
    GatewayClient.prototype.reconnect = function () {
      var self = this;
      return Promise.resolve().then(function () {
        self.disconnect();
      }).then(function () {
        return self.connect();
      });
    };

    // ── Status ────────────────────────────────────

    GatewayClient.prototype.isConnected = function () {
      return this._connected && this._ws !== null && this._ws.readyState === 1;
    };
    GatewayClient.prototype.isConnecting = function () {
      return this._connecting;
    };
    GatewayClient.prototype.isEnabled = function (key) {
      var v = Lampa.Storage.get(key, false);
      return v === true || v === 'true';
    };

    // ── Messages ──────────────────────────────────

    GatewayClient.prototype.getMessages = function (chatId, threadId, limit) {
      if (!this._connected) return Promise.resolve([]);
      var params = {
        entity: chatId,
        limit: limit || 50
      };
      if (threadId) params.replyTo = parseInt(threadId, 10);
      return this._sendApi('getMessages', params).then(function (r) {
        return r || [];
      }).catch(function () {
        return [];
      });
    };
    GatewayClient.prototype.getMessagesSince = function (threadId, sinceTimestamp, limit) {
      if (!this._connected) return Promise.resolve([]);
      var chatId = parseInt(Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, ''), 10);
      if (!chatId) return Promise.resolve([]);
      return this._sendApi('getMessagesSince', {
        entity: chatId,
        sinceTimestamp: sinceTimestamp,
        limit: limit || 50
      }).then(function (r) {
        return r || [];
      }).catch(function () {
        return [];
      });
    };
    GatewayClient.prototype.deleteMessage = function (chatId, messageId) {
      if (!this._connected) return Promise.resolve(false);
      return this._sendApi('deleteMessages', {
        entity: chatId,
        ids: [messageId],
        revoke: true
      }).then(function () {
        return true;
      }).catch(function () {
        return false;
      });
    };
    GatewayClient.prototype.editMessage = function (chatId, messageId, newText, threadId) {
      if (!this._connected) return Promise.resolve(false);
      return this._sendApi('editMessage', {
        entity: chatId,
        messageId: messageId,
        text: newText
      }).then(function () {
        return true;
      }).catch(function () {
        return false;
      });
    };

    // ── Publish ────────────────────────────────────

    GatewayClient.prototype.publishRaw = function (threadId, text, silent) {
      if (!this._connected) return Promise.resolve(false);
      var chatId = parseInt(Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, ''), 10);
      if (!chatId) return Promise.resolve(false);
      return this._sendApi('sendMessage', {
        entity: chatId,
        message: text,
        replyTo: threadId || 0
      }).then(function (r) {
        return r && r.id ? r.id : false;
      }).catch(function () {
        return false;
      });
    };
    GatewayClient.prototype.publishDelta = function (profilesSyncTopicId, subtype, profileMsgId, payload) {
      var msg = JSON.stringify({
        meta: {
          type: 'profile_delta',
          subtype: subtype,
          profile_msg_id: profileMsgId,
          device_id: getDeviceId(),
          timestamp: Math.floor(Date.now() / 1000)
        },
        payload: payload || {}
      });
      return this.publishRaw(profilesSyncTopicId, msg, true);
    };
    GatewayClient.prototype.publish = function (chatId, threadId, type, payload, targetDeviceId) {
      if (!this._connected) return Promise.resolve(false);
      var msg = JSON.stringify({
        meta: {
          type: type,
          device_id: getDeviceId(),
          target_device_id: targetDeviceId || 'all',
          timestamp: Math.floor(Date.now() / 1000)
        },
        payload: payload || {}
      });
      return this.publishRaw(threadId, msg, true);
    };

    // ── Files ───────────────────────────────────────

    GatewayClient.prototype.sendFile = function (chatId, threadId, dataStr, fileName, caption) {
      if (!this._connected) return Promise.resolve(null);
      return this._sendApi('sendFile', {
        entity: chatId,
        fileName: fileName,
        caption: caption || '',
        data: window.btoa(dataStr),
        replyTo: threadId || 0
      }).then(function (r) {
        return r && r.id ? r.id : null;
      }).catch(function () {
        return null;
      });
    };
    GatewayClient.prototype.downloadFile = function (message) {
      if (!this._connected || !message || !message.id) return Promise.resolve(null);
      var chatId = parseInt(Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, ''), 10);
      if (!chatId) return Promise.resolve(null);
      return this._sendApi('downloadMedia', {
        entity: chatId,
        messageId: message.id
      }).then(function (r) {
        return r && r.data ? r.data : null;
      }).catch(function () {
        return null;
      });
    };
    GatewayClient.prototype.downloadMessageFile = function (message) {
      return this.downloadFile(message);
    };
    GatewayClient.prototype.getBackupFiles = function (chatId, threadId, limit) {
      return this.getMessages(chatId, threadId, limit || 50).then(function (msgs) {
        if (!msgs || !Array.isArray(msgs)) return [];
        return msgs.filter(function (m) {
          return m.text && m.text.indexOf('.json') !== -1;
        });
      });
    };

    // ── Channel / Topic ──────────────────────────────

    GatewayClient.prototype.findChannel = function (title) {
      if (!this._connected) return Promise.resolve(null);
      return this._sendApi('findChannel', {
        title: title
      }).then(function (r) {
        return r && r.id ? r.id : null;
      }).catch(function () {
        return null;
      });
    };
    GatewayClient.prototype.createChannel = function (title) {
      if (!this._connected) return Promise.resolve(null);
      return this._sendApi('createChannel', {
        title: title,
        about: 'GramLink: Lampa device sync channel'
      }).then(function (r) {
        return r && r.id ? r.id : null;
      }).catch(function () {
        return null;
      });
    };
    GatewayClient.prototype.createTopic = function (channelId, topicTitle) {
      if (!this._connected) return Promise.resolve(null);
      return this._sendApi('createTopic', {
        channelId: channelId,
        title: topicTitle
      }).then(function (r) {
        return r && r.id ? r.id : null;
      }).catch(function () {
        return null;
      });
    };
    GatewayClient.prototype.findTopic = function (channelId, topicTitle) {
      if (!this._connected) return Promise.resolve(null);
      return this._sendApi('findTopic', {
        channelId: channelId,
        title: topicTitle
      }).then(function (r) {
        return r && r.id ? r.id : null;
      }).catch(function () {
        return null;
      });
    };

    // ── Heartbeat ────────────────────────────────────

    GatewayClient.prototype.startHeartbeat = function (chatId, threadId) {
      this.stopHeartbeat();
      if (!this._connected || !this.isEnabled('gramlink_heartbeat')) return;
      var self = this;
      var myId = getDeviceId();
      function doBeat() {
        if (!self._connected || !self.isEnabled('gramlink_heartbeat')) {
          self.stopHeartbeat();
          return;
        }
        var payload = JSON.stringify({
          meta: {
            type: 'heartbeat',
            device_id: myId,
            device_name: getDeviceName(),
            timestamp: Math.floor(Date.now() / 1000),
            schema_version: 1
          },
          payload: {}
        });
        if (self._heartbeatMsgId) {
          self.editMessage(chatId, self._heartbeatMsgId, payload, threadId);
        } else {
          self._findHeartbeatMessage(chatId, threadId, myId).then(function (result) {
            if (result && result.id) {
              self._heartbeatMsgId = result.id;
              self.editMessage(chatId, result.id, payload, threadId);
            } else {
              self.publishRaw(threadId, payload, true).then(function (msgId) {
                if (msgId) self._heartbeatMsgId = msgId;
              });
            }
          });
        }
      }
      doBeat();
      this._heartbeatTimer = setInterval(doBeat, 60000);
    };
    GatewayClient.prototype._findHeartbeatMessage = function (chatId, threadId, myDeviceId) {
      var self = this;
      return this.getMessages(chatId, threadId, 50).then(function (messages) {
        var mine = [];
        function stripCodeFence(t) {
          if (!t) return t;
          return t.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
        }
        (messages || []).forEach(function (m) {
          try {
            var d = JSON.parse(stripCodeFence(m.text || ''));
            var meta = d && d.meta;
            if (!meta || meta.type !== 'heartbeat') return;
            if (meta.device_id === myDeviceId) mine.push({
              id: m.id,
              ts: meta.timestamp || 0
            });
          } catch (e) {}
        });
        if (mine.length === 0) return null;
        mine.sort(function (a, b) {
          return b.ts - a.ts;
        });
        if (mine.length > 1) {
          var ids = mine.slice(1).map(function (m) {
            return m.id;
          });
          self._sendApi('deleteMessages', {
            entity: chatId,
            ids: ids,
            revoke: true
          }).catch(function () {});
        }
        return mine[0];
      }).catch(function () {
        return null;
      });
    };
    GatewayClient.prototype.stopHeartbeat = function () {
      if (this._heartbeatTimer) {
        clearInterval(this._heartbeatTimer);
        this._heartbeatTimer = null;
      }
    };

    // ── Online devices ──────────────────────────────

    GatewayClient.prototype.getOnlineDevices = function (chatId, threadId) {
      return this.getMessages(chatId, threadId, 50).then(function (messages) {
        var now = Math.floor(Date.now() / 1000);
        var seen = {};
        function stripCodeFence(t) {
          if (!t) return t;
          return t.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
        }
        (messages || []).forEach(function (m) {
          try {
            var d = JSON.parse(stripCodeFence(m.text || ''));
            var meta = d && d.meta;
            if (!meta || meta.type !== 'heartbeat') return;
            if (now - meta.timestamp < 90) {
              if (!seen[meta.device_id] || seen[meta.device_id].timestamp < meta.timestamp) {
                seen[meta.device_id] = meta;
              }
            }
          } catch (e) {}
        });
        var result = [];
        for (var k in seen) result.push(seen[k]);
        return result;
      }).catch(function () {
        return [];
      });
    };

    // ── Event emitter ──────────────────────────────

    GatewayClient.prototype.on = function (event, cb) {
      if (!this._listeners[event]) this._listeners[event] = [];
      this._listeners[event].push(cb);
    };
    GatewayClient.prototype.off = function (event, cb) {
      if (!this._listeners[event]) return;
      this._listeners[event] = this._listeners[event].filter(function (f) {
        return f !== cb;
      });
    };
    GatewayClient.prototype._emit = function (event, data) {
      var handlers = this._listeners[event] || [];
      for (var i = 0; i < handlers.length; i++) {
        try {
          handlers[i](data);
        } catch (e) {
          console.error('GramLink', 'Listener error:', e);
        }
      }
    };

    // ─── Message parsing helpers ──────────────────────────────

    function stripCodeFence$1(text) {
      if (!text) return text;
      return text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    }

    var authWs = null;
    var authCancelFlag = false;
    var authRequestId = 0;
    var authPending = {};
    function authSend(msg) {
      return new Promise(function (resolve, reject) {
        if (!authWs || authWs.readyState !== 1) {
          reject(new Error('WebSocket not connected'));
          return;
        }
        var id = ++authRequestId;
        msg.id = id;
        var timer = setTimeout(function () {
          delete authPending[id];
          reject(new Error('Auth timeout'));
        }, 30000);
        authPending[id] = {
          resolve: resolve,
          reject: reject,
          timer: timer
        };
        authWs.send(JSON.stringify(msg));
      });
    }
    function cancelAuth() {
      authCancelFlag = true;
      if (authWs) {
        try {
          authWs.onclose = null;
          authWs.close();
        } catch (e) {}
        authWs = null;
      }
      for (var k in authPending) {
        clearTimeout(authPending[k].timer);
      }
      authPending = {};
    }
    function startPhoneAuthViaGateway(onConnected) {
      authCancelFlag = false;
      var enabledCtrl = Lampa.Controller.enabled().name;
      var defaultPhonePrefix = '';
      var uiLang = Lampa.Storage.get('language', '');
      if (uiLang === 'uk') defaultPhonePrefix = '+380';
      Lampa.Input.edit({
        title: Lampa.Lang.translate('gramlink_auth_phone_title') || 'Enter phone number (international format)',
        value: defaultPhonePrefix,
        free: true,
        nosave: true
      }, function (phone) {
        if (!phone || !String(phone).trim()) {
          Lampa.Controller.toggle(enabledCtrl);
          return;
        }
        phone = String(phone).trim();
        var html = $('<div class="gramlink-auth" style="padding:1em;text-align:center">' + '<div style="margin:1em 0 0.5em;font-size:1.1em;color:rgba(255,255,255,0.6)" id="gs-status"></div>' + '</div>');
        Lampa.Modal.open({
          title: 'Telegram Login (Gateway)',
          html: html,
          size: 'medium',
          onBack: function onBack() {
            cancelAuth();
            Lampa.Modal.close();
            Lampa.Controller.toggle(enabledCtrl);
          }
        });
        var statusEl = html.find('#gs-status');
        statusEl.text('Connecting to Gateway...');
        var creds = getApiCredentials();
        var gatewayUrl = Lampa.Storage.get('gramlink_gateway_url', 'wss://mtproto-master.fly.dev');
        var wsUrl = gatewayUrl + '/ws?clientId=' + encodeURIComponent(getDeviceId());
        var ws = new WebSocket(wsUrl);
        authWs = ws;
        var uiLang = Lampa.Storage && Lampa.Storage.get('language', 'en') || 'en';
        var systemLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0] || 'en';
        ws.onopen = function () {
          statusEl.text('Sending code...');
          doAuthFlow(ws, phone, creds, statusEl, enabledCtrl, onConnected, {
            deviceModel: getDeviceName(),
            systemVersion: getSystemVersion(),
            appVersion: VERSION,
            langCode: uiLang,
            systemLangCode: systemLang
          });
        };
        ws.onerror = function () {
          statusEl.text('WebSocket connection failed');
          Lampa.Noty.show('GramLink: Cannot connect to Gateway');
        };

        // ponytail: route incoming WS messages to pending promises
        ws.onmessage = function (e) {
          var msg;
          try {
            msg = JSON.parse(e.data);
          } catch (x) {
            return;
          }
          var pending = msg.id && authPending[msg.id];
          if (pending) {
            clearTimeout(pending.timer);
            delete authPending[msg.id];
            if (msg.ok) pending.resolve(msg);else pending.reject(new Error(msg.error || 'Gateway error'));
          }
        };
      });
    }
    function doAuthFlow(ws, phone, creds, statusEl, enabledCtrl, onConnected, clientInfo) {
      authSend({
        cmd: 'auth_start',
        phone: phone,
        apiId: creds.apiId,
        apiHash: creds.apiHash,
        deviceModel: clientInfo.deviceModel,
        systemVersion: clientInfo.systemVersion,
        appVersion: clientInfo.appVersion,
        langCode: clientInfo.langCode,
        systemLangCode: clientInfo.systemLangCode
      }).then(function (resp) {
        if (authCancelFlag) return;
        if (resp.event === 'auth_code_needed') {
          return askCode(resp.phoneCodeHash, resp.sentType === 'app' ? 'Check Telegram app' : 'Check SMS', enabledCtrl).then(function (code) {
            if (authCancelFlag) return;
            statusEl.text('Signing in...');
            return authSend({
              cmd: 'auth_code',
              phoneCodeHash: resp.phoneCodeHash,
              code: code
            });
          }).then(function (resp2) {
            if (authCancelFlag || !resp2) return;
            if (resp2.event === 'auth_success') return finalizeAuth(resp2, enabledCtrl, onConnected);
            if (resp2.event === 'auth_2fa_needed') return handle2FA(enabledCtrl, onConnected);
            throw new Error(resp2.error || 'Auth failed');
          });
        }
        throw new Error(resp.error || 'Unexpected response');
      }).catch(function (err) {
        if (authCancelFlag) return;
        statusEl.text('Error: ' + (err.message || 'unknown'));
        Lampa.Noty.show('GramLink: ' + (err.message || 'Auth failed'));
      });
    }
    function askCode(phoneCodeHash, methodLabel, enabledCtrl) {
      return new Promise(function (resolve, reject) {
        var ui = $('<div style="padding:1em;text-align:center">' + '<div>Code sent</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.4);margin-bottom:0.8em">' + methodLabel + '</div>' + '<div class="modal__button selector" style="margin:0.5em auto;max-width:12em">Enter code</div>' + '</div>');
        Lampa.Modal.update(ui);
        ui.find('.selector').on('hover:enter', function () {
          Lampa.Modal.close();
          Lampa.Input.edit({
            title: 'Login code',
            subtitle: methodLabel,
            value: '',
            free: true,
            nosave: true
          }, function (val) {
            if (val && String(val).trim()) {
              resolve(String(val).trim());
            } else {
              cancelAuth();
              Lampa.Controller.toggle(enabledCtrl);
              reject(new Error('AUTH_USER_CANCEL'));
            }
          });
        });
      });
    }
    function handle2FA(enabledCtrl, onConnected, statusEl) {
      return new Promise(function (resolve, reject) {
        Lampa.Input.edit({
          title: '2FA Password',
          value: '',
          free: true,
          nosave: true
        }, function (val) {
          if (val && String(val).trim()) {
            var password = String(val).trim();
            setTimeout(function () {
              Lampa.Modal.open({
                title: 'Telegram Login (Gateway)',
                html: $('<div class="gramlink-auth" style="padding:1em;text-align:center"><div style="margin:1em 0;font-size:1.1em;color:rgba(255,255,255,0.6)">Verifying password...</div></div>'),
                size: 'medium',
                onBack: function onBack() {
                  cancelAuth();
                  Lampa.Modal.close();
                  Lampa.Controller.toggle(enabledCtrl);
                  reject(new Error('AUTH_USER_CANCEL'));
                }
              });
            }, 200);
            authSend({
              cmd: 'auth_2fa',
              password: password
            }).then(function (resp) {
              if (resp.event === 'auth_success') resolve(finalizeAuth(resp, enabledCtrl, onConnected));else reject(new Error(resp.error || '2FA failed'));
            }).catch(function (err) {
              reject(err);
            });
          } else {
            cancelAuth();
            Lampa.Controller.toggle(enabledCtrl);
            reject(new Error('AUTH_USER_CANCEL'));
          }
        });
      });
    }
    function finalizeAuth(resp, enabledCtrl, onConnected) {
      var dcId = resp.dcId;
      var authKeyHex = resp.authKeyHex;
      var userName = resp.userName || 'User';
      if (!dcId || !authKeyHex) {
        Lampa.Noty.show('GramLink: Invalid auth response');
        throw new Error('Missing dcId or authKey');
      }

      // Save credentials directly (don't import client to avoid coupling)
      Lampa.Storage.set('gramlink_dc_id', String(dcId));
      vault.seal(authKeyHex);
      Lampa.Storage.set('gramlink_user_name', userName);

      // Clear stale sync state
      var staleKeys = ['gramlink_channel_id', 'gramlink_sync_log_topic', 'gramlink_profiles_topic', 'gramlink_profiles_sync_topic', 'gramlink_backup_topic'];
      for (var i = 0; i < staleKeys.length; i++) {
        Lampa.Storage.set(staleKeys[i], '');
      }
      cancelAuth();
      Lampa.Modal.close();
      Lampa.Noty.show('GramLink: Connecting to Telegram...');
      Lampa.Settings.update();

      // Delegate connection to caller (provides right client)
      if (typeof onConnected === 'function') {
        onConnected(dcId, authKeyHex);
      }
    }

    var qrWs = null;
    var qrCancelFlag = false;
    var qrRequestId = 0;
    var qrPending = {};
    var qrPollTimer = null;
    function qrSend(msg) {
      return new Promise(function (resolve, reject) {
        if (!qrWs || qrWs.readyState !== 1) {
          reject(new Error('WebSocket not connected'));
          return;
        }
        var id = ++qrRequestId;
        msg.id = id;
        var timer = setTimeout(function () {
          delete qrPending[id];
          reject(new Error('QR auth timeout'));
        }, 60000);
        qrPending[id] = {
          resolve: resolve,
          reject: reject,
          timer: timer
        };
        qrWs.send(JSON.stringify(msg));
      });
    }
    function cancelQrAuth() {
      qrCancelFlag = true;
      if (qrPollTimer) {
        clearTimeout(qrPollTimer);
        qrPollTimer = null;
      }
      if (qrWs) {
        try {
          qrWs.onclose = null;
          qrWs.close();
        } catch (e) {}
        qrWs = null;
      }
      for (var k in qrPending) {
        clearTimeout(qrPending[k].timer);
      }
      qrPending = {};
    }
    function startQrAuthViaGateway(onConnected, showPhoneButton) {
      qrCancelFlag = false;
      var enabledCtrl = Lampa.Controller.enabled().name;
      var statusId = 'gramlink-gateway-qr-status';
      var html = $('<div class="gramlink-auth" style="padding:1em;text-align:center">' + '<div class="gramlink-auth__qr-placeholder" style="width:16em;height:16em;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);border-radius:1em;margin:0 auto">' + '<svg viewBox="0 0 64 64" width="48" height="48" fill="rgba(255,255,255,0.3)">' + '<rect x="4" y="4" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="36" y="4" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="4" y="36" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="44" y="44" width="8" height="8" rx="1" fill="currentColor"/>' + '<rect x="36" y="44" width="4" height="8" rx="1" fill="currentColor"/>' + '<rect x="44" y="36" width="8" height="4" rx="1" fill="currentColor"/>' + '</svg>' + '</div>' + '<div class="gramlink-auth__qr-code" style="display:none;width:16em;height:16em;margin:0 auto"></div>' + '<div style="margin:1em 0 0.5em;font-size:1.1em;color:rgba(255,255,255,0.6)" id="' + statusId + '"></div>' + (showPhoneButton ? '<div class="gramlink-auth__phone-wrap" style="margin-top:1.2em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.1)">' + '<div class="simple-button selector gramlink-auth__phone-gw-btn">Log in by phone number (Gateway)</div>' + '</div>' : '') + '</div>');
      Lampa.Modal.open({
        title: 'Telegram Authorization (Gateway)',
        html: html,
        size: 'medium',
        onBack: function onBack() {
          cancelQrAuth();
          Lampa.Modal.close();
          Lampa.Controller.toggle(enabledCtrl);
        }
      });
      var qrPlaceholder = html.find('.gramlink-auth__qr-placeholder');
      var qrEl = html.find('.gramlink-auth__qr-code');
      var statusEl = html.find('#' + statusId);
      statusEl.text('Connecting to Gateway...');

      // ponytail: phone button in same modal — switches to phone auth
      if (showPhoneButton) {
        html.find('.gramlink-auth__phone-gw-btn').on('hover:enter hover:click hover:touch', function () {
          cancelQrAuth();
          Lampa.Modal.close();
          setTimeout(function () {
            startPhoneAuthViaGateway(onConnected);
          }, 300);
        });
      }

      // ── Open WebSocket to Gateway ──────────────────────────────
      var creds = getApiCredentials();
      var gatewayUrl = Lampa.Storage.get('gramlink_gateway_url', 'wss://mtproto-master.fly.dev');
      var wsUrl = gatewayUrl + '/ws?clientId=' + encodeURIComponent(getDeviceId());
      var ws = new WebSocket(wsUrl);
      qrWs = ws;
      ws.onopen = function () {
        statusEl.text('Requesting QR code...');
        doQrExport(creds, qrPlaceholder, qrEl, statusEl, enabledCtrl, onConnected);
      };
      ws.onerror = function () {
        statusEl.text('WebSocket connection failed');
        Lampa.Noty.show('GramLink: Cannot connect to Gateway');
      };

      // ponytail: route incoming WS messages to pending promises
      ws.onmessage = function (e) {
        var msg;
        try {
          msg = JSON.parse(e.data);
        } catch (x) {
          return;
        }
        var pending = msg.id && qrPending[msg.id];
        if (pending) {
          clearTimeout(pending.timer);
          delete qrPending[msg.id];
          if (msg.ok) pending.resolve(msg);else pending.reject(new Error(msg.error || 'Gateway error'));
        }
      };
    }
    function renderQrCode(token, qrPlaceholder, qrEl, statusEl) {
      qrPlaceholder.hide();
      qrEl.show().empty();
      var qrUrl = 'tg://login?token=' + token;
      Lampa.Utils.qrcode(qrUrl, qrEl, function () {});
      setTimeout(function () {
        var s = qrEl.find('svg');
        if (s.length) s.css({
          width: '14em',
          height: '14em'
        });
      }, 100);
      statusEl.html('<div>Scan with Telegram</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.4)">' + 'Open Telegram → Settings → Devices → Scan QR' + '</div>');
    }
    function doQrExport(creds, qrPlaceholder, qrEl, statusEl, enabledCtrl, onConnected) {
      qrSend({
        cmd: 'auth_qr_export',
        apiId: creds.apiId,
        apiHash: creds.apiHash,
        deviceModel: getDeviceName(),
        systemVersion: getSystemVersion(),
        appVersion: VERSION,
        langCode: Lampa.Storage && Lampa.Storage.get('language', 'en') || 'en',
        systemLangCode: (navigator.language || navigator.userLanguage || 'en').split('-')[0] || 'en'
      }).then(function (resp) {
        if (qrCancelFlag) return;
        if (!resp.ok) {
          statusEl.text('Error: ' + (resp.error || 'Unexpected response'));
          Lampa.Noty.show('GramLink: ' + (resp.error || 'QR auth failed'));
          return;
        }
        if (resp.event === 'qr_starting') {
          // Background flow starting, poll again to get token
          qrPollTimer = setTimeout(pollOnce, 800);
        } else if (resp.event === 'qr_poll' && resp.token) {
          // Got token, render QR
          renderQrCode(resp.token, qrPlaceholder, qrEl, statusEl);
          qrPollTimer = setTimeout(pollOnce, 3000);
        } else {
          // Fallback: poll
          qrPollTimer = setTimeout(pollOnce, 1000);
        }
      }).catch(function (err) {
        if (qrCancelFlag) return;
        statusEl.text('Error: ' + (err.message || 'unknown'));
        Lampa.Noty.show('GramLink: ' + (err.message || 'QR auth failed'));
      });
      function pollOnce() {
        if (qrCancelFlag) return;
        qrSend({
          cmd: 'auth_qr_export',
          apiId: creds.apiId,
          apiHash: creds.apiHash
        }).then(function (resp) {
          if (qrCancelFlag) return;
          if (!resp.ok) {
            statusEl.text('Error: ' + (resp.error || 'Poll failed'));
            Lampa.Noty.show('GramLink: ' + (resp.error || 'Poll failed'));
            return;
          }
          if (resp.event === 'auth_success') {
            finalizeQrAuth(resp, enabledCtrl, onConnected);
          } else if (resp.event === 'password_needed') {
            handleQrPassword(creds, resp.hint || '', statusEl, enabledCtrl, onConnected);
            // Also keep polling — background flow updates state
          } else if (resp.event === 'qr_poll' && resp.status === 'waiting') {
            // If token changed (regenerated), update QR
            if (resp.token && qrEl.children().length === 0) {
              renderQrCode(resp.token, qrPlaceholder, qrEl, statusEl);
            } else if (resp.token && qrEl.find('svg').data('token') !== resp.token) {
              // Token refreshed by signInUserWithQrCode — re-render
              qrEl.find('svg').data('token', resp.token);
              renderQrCode(resp.token, qrPlaceholder, qrEl, statusEl);
            }
            qrPollTimer = setTimeout(pollOnce, 3000);
          } else if (resp.event === 'qr_starting') {
            // Still starting
            qrPollTimer = setTimeout(pollOnce, 800);
          } else {
            // Unknown — keep polling
            qrPollTimer = setTimeout(pollOnce, 3000);
          }
        }).catch(function (err) {
          if (qrCancelFlag) return;
          qrPollTimer = setTimeout(pollOnce, 3000);
        });
      }
    }
    function handleQrPassword(creds, hint, statusEl, enabledCtrl, onConnected) {
      statusEl.text('2FA password required...');
      Lampa.Modal.close();
      Lampa.Input.edit({
        title: hint ? '2FA Password (hint: ' + hint + ')' : '2FA Password',
        value: '',
        free: true,
        nosave: true
      }, function (val) {
        if (val && String(val).trim()) {
          // ponytail: open single "Verifying" modal IMMEDIATELY (not after delay)
          // so user has feedback, and we don't end up with stacked modals.
          Lampa.Modal.open({
            title: 'Telegram Authorization (Gateway)',
            html: $('<div class="gramlink-auth" style="padding:1em;text-align:center"><div style="margin:1em 0;font-size:1.1em;color:rgba(255,255,255,0.6)">Verifying password (this may take up to 30s)...</div></div>'),
            size: 'medium',
            onBack: function onBack() {
              cancelQrAuth();
              Lampa.Modal.close();
              Lampa.Controller.toggle(enabledCtrl);
            }
          });
          qrSend({
            cmd: 'auth_qr_password',
            password: String(val).trim()
          }).then(function (resp) {
            if (qrCancelFlag) return;
            if (resp.ok && resp.event === 'auth_success') {
              // Got credentials directly (fast path)
              finalizeQrAuth(resp, enabledCtrl, onConnected);
            } else if (resp.ok && resp.event === 'password_submitted') {
              // Password accepted, server is now computing SRP (slow).
              // Modal already open. Just start polling for success.
              qrPollTimer = setTimeout(pollAfterPassword, 1000);
            } else {
              Lampa.Noty.show('GramLink: ' + (resp.error || 'Wrong password'));
              cancelQrAuth();
              Lampa.Modal.close();
              Lampa.Controller.toggle(enabledCtrl);
            }
          }).catch(function (err) {
            Lampa.Noty.show('GramLink: ' + (err.message || '2FA error'));
            cancelQrAuth();
            Lampa.Modal.close();
            Lampa.Controller.toggle(enabledCtrl);
          });
        } else {
          cancelQrAuth();
          Lampa.Controller.toggle(enabledCtrl);
        }
      });
      function pollAfterPassword() {
        if (qrCancelFlag) return;
        qrSend({
          cmd: 'auth_qr_export',
          apiId: creds.apiId,
          apiHash: creds.apiHash
        }).then(function (resp) {
          if (qrCancelFlag) return;
          if (resp.ok && resp.event === 'auth_success') {
            Lampa.Modal.close();
            finalizeQrAuth(resp, Lampa.Controller.enabled().name, onConnected);
          } else if (resp.ok && resp.status === 'error') {
            Lampa.Modal.close();
            Lampa.Noty.show('GramLink: ' + (resp.error || '2FA failed'));
            cancelQrAuth();
            Lampa.Controller.toggle(Lampa.Controller.enabled().name);
          } else {
            // Still verifying — poll again
            qrPollTimer = setTimeout(pollAfterPassword, 2000);
          }
        }).catch(function () {
          if (qrCancelFlag) return;
          qrPollTimer = setTimeout(pollAfterPassword, 3000);
        });
      }
    }
    function finalizeQrAuth(resp, enabledCtrl, onConnected) {
      var dcId = resp.dcId;
      var authKeyHex = resp.authKeyHex;
      var userName = resp.userName || 'User';
      if (!dcId || !authKeyHex) {
        Lampa.Noty.show('GramLink: Invalid auth response');
        cancelQrAuth();
        Lampa.Controller.toggle(enabledCtrl);
        return;
      }
      Lampa.Storage.set('gramlink_dc_id', String(dcId));
      vault.seal(authKeyHex);
      Lampa.Storage.set('gramlink_user_name', userName);
      var staleKeys = ['gramlink_channel_id', 'gramlink_sync_log_topic', 'gramlink_profiles_topic', 'gramlink_profiles_sync_topic', 'gramlink_backup_topic'];
      for (var i = 0; i < staleKeys.length; i++) {
        Lampa.Storage.set(staleKeys[i], '');
      }
      cancelQrAuth();
      Lampa.Modal.close();
      Lampa.Noty.show('GramLink: Connecting to Telegram...');
      Lampa.Settings.update();
      if (typeof onConnected === 'function') {
        onConnected(dcId, authKeyHex);
      }
    }

    // Note: for old_release build, 'utils/client' is replaced with 'utils/gateway-client'

    function onConnected(dcId, authKeyHex) {
      GatewayClient.getInstance().connect().then(function () {
        Lampa.Noty.show('GramLink: Connected!');
        Lampa.Settings.update();
      }).catch(function (err) {
        console.error('GramLink', 'Post-auth connect failed:', err);
        Lampa.Noty.show('GramLink: Connection failed — ' + (err.message || 'unknown'));
      });
    }
    function startLogin() {
      // Immediately start Gateway QR auth (shows its own modal with QR + phone button)
      startQrAuthViaGateway(onConnected, true);
    }

    /**
     * sdk/avatars.js — Avatar generation and initials
     *
     * Eliminates:
     *   D-04 — extractNameFromUrl now in one place
     *   D-05a,b — DICE_BEAR_BASE, DICE_BEAR_STYLES in one place
     *   D-05c — avatarLetters (auth.js:193) = getInitials (profiles.js:184) now unified
     *   D-15 — renderAvatar() — 4 copies of avatar HTML builder
     *   D-16 — avatarColor now called from here, not from profiles.js
     *
     * Usage:
     *   import { getAvatar, avatarColor, renderAvatar, getInitials } from '../sdk/avatars'
     */
    var DICE_BEAR_BASE = 'https://api.dicebear.com/10.x/';
    var DICE_BEAR_STYLES = ['adventurer', 'adventurer-neutral', 'avataaars', 'avataaars-neutral', 'big-ears', 'big-ears-neutral', 'big-smile', 'bottts', 'bottts-neutral', 'croodles', 'croodles-neutral', 'disco', 'dylan', 'fun-emoji', 'glass', 'glyphs', 'icons', 'identicon', 'initial-face', 'initials', 'lorelei', 'lorelei-neutral', 'micah', 'miniavs', 'notionists', 'notionists-neutral', 'open-peeps', 'personas', 'pixel-art', 'pixel-art-neutral', 'rings', 'shape-grid', 'shapes', 'stripes', 'thumbs', 'toon-head', 'triangles'];
    var COLORS = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688', '#4caf50', '#ff9800', '#ff5722', '#795548'];

    /**
     * Generates avatar URL via DiceBear or initials if style is disabled.
     */
    function getAvatar(name) {
      var style = Lampa.Storage.get(STORAGE_KEYS.AVATAR_STYLE, 'fun-emoji');
      if (!style) return getInitials(name);
      return DICE_BEAR_BASE + style + '/svg?seed=' + encodeURIComponent(name) + '&borderRadius=50';
    }

    /**
     * Returns initials of a name:
     *   1 word → first 2 letters
     *   2+ words → first letter of each word
     */
    function getInitials(name) {
      if (!name) return '??';
      var parts = name.trim().split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] || '') + (parts[1][0] || '');
      }
      return name.slice(0, 2);
    }

    /**
     * Deterministic color based on name.
     */
    function avatarColor(name) {
      if (!name) return '#0088cc';
      var hash = 0;
      for (var i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      return COLORS[Math.abs(hash) % COLORS.length];
    }

    /**
     * Check if avatar is a DiceBear URL (not initials).
     */
    function isAvatarUrl(avatar) {
      return avatar && avatar.indexOf(DICE_BEAR_BASE) === 0;
    }

    /**
     * Returns ready HTML for avatar.
     * @param {string} name
     * @param {Object} [options]
     * @param {string} [options.className='gramlink-avatar']
     * @param {string} [options.style] — additional CSS
     * @returns {string} HTML string
     */
    function renderAvatar(name, options) {
      if (!options) options = {};
      var url = getAvatar(name);
      var color = avatarColor(name);
      var isUrl = isAvatarUrl(url);
      var clsName = options.className || 'gramlink-avatar';
      var extraStyle = options.style || '';
      if (isUrl) {
        return '<img src="' + url + '" alt="" class="' + clsName + '"' + (extraStyle ? ' style="' + extraStyle + '"' : '') + '>';
      }
      return '<div class="' + clsName + '" style="background:' + color + ';border-radius:50%;' + 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;' + 'color:#fff;font-weight:700;' + extraStyle + '">' + url + '</div>';
    }

    /**
     * Extracts plugin name from URL.
     */
    function extractNameFromUrl(url) {
      try {
        var parts = url.split('/');
        var fname = parts[parts.length - 1] || parts[parts.length - 2] || 'Plugin';
        return fname.replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ');
      } catch (e) {
        return 'Plugin';
      }
    }

    function _defineProperty(e, r, t) {
      return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }
      return e;
    }
    function _toPrimitive(t, r) {
      if ("object" != typeof t || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    function _toPropertyKey(t) {
      var i = _toPrimitive(t, "string");
      return "symbol" == typeof i ? i : i + "";
    }
    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }

    /**
     * Strips ```json ... ``` wrapping from message text.
     */
    function stripCodeFence(text) {
      if (!text) return text;
      return text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    }

    var PROFILE_META_VERSION = 3;

    // ─── Storage helpers ──────────────────────────────────────────────────

    function readJSON(key, def) {
      try {
        return Lampa.Storage.get(key, def);
      } catch (e) {
        return def;
      }
    }
    function collectFavorite() {
      return readJSON('favorite', {});
    }
    function collectTimeline() {
      return readJSON('file_view', {});
    }
    function collectPlugins() {
      return readJSON('plugins', []);
    }
    function collectSettings() {
      return {
        sync_enabled: Lampa.Storage.get('gramlink_sync_enabled', false),
        heartbeat: Lampa.Storage.get('gramlink_heartbeat', false),
        broadcast: Lampa.Storage.get('gramlink_broadcast', false)
      };
    }

    // ─── Caption builder ─────────────────────────────────────────────────

    /**
     * Builds JSON for profile message caption.
     *
     * @param {Object} profile — { name, avatar, updated? }
     * @param {Object} [extras] — additional meta fields (source, source_id, etc.)
     * @returns {string} JSON string
     */
    function buildCaption(profile, extras) {
      if (!extras) extras = {};
      var result = JSON.stringify({
        meta: _objectSpread2({
          type: 'profile',
          timestamp: Math.floor(Date.now() / 1000),
          version: PROFILE_META_VERSION
        }, extras),
        payload: {
          profile: {
            name: profile.name,
            avatar: profile.avatar,
            updated: profile.updated || Math.floor(Date.now() / 1000)
          }
        }
      });
      console.log('[GramLink] buildCaption — name="' + profile.name + '" extras:', JSON.stringify(extras), 'result:', result);
      return result;
    }

    // ─── File data builder ────────────────────────────────────────────────

    /**
     * Builds complete fileData for a profile file.
     *
     * @param {Object} opts
     * @param {string} opts.name
     * @param {string} opts.avatar
     * @param {Object} [opts.bookmarks]
     * @param {Object} [opts.timeline]
     * @param {Array} [opts.plugins]
     * @param {Object} [opts.settings]
     * @param {Object} [opts.device_overrides]
     * @returns {Object} fileData for JSON.stringify
     */
    function buildFileData(opts) {
      var now = Math.floor(Date.now() / 1000);
      return {
        profile_meta: {
          name: opts.name,
          avatar: opts.avatar,
          updated: now
        },
        bookmarks: opts.bookmarks || {
          favorite: {}
        },
        timeline: opts.timeline || {},
        plugins: opts.plugins || [],
        settings: opts.settings || collectSettings(),
        device_overrides: opts.device_overrides || {}
      };
    }

    // ─── Parsers ──────────────────────────────────────────────────────────

    /**
     * Parse a profile message caption.
     * Returns payload.profile or null.
     */
    function parseCaption(text) {
      try {
        var d = JSON.parse(stripCodeFence(text || ''));
        return d && d.payload && d.payload.profile;
      } catch (e) {
        return null;
      }
    }

    /**
     * Check if text is a valid profile message.
     * Returns parsed object or null.
     */
    function parseProfileMessage(text) {
      try {
        var d = JSON.parse(stripCodeFence(text || ''));
        return d && d.meta && d.meta.type === 'profile' ? d : null;
      } catch (e) {
        return null;
      }
    }

    /**
     * Find target message in array by msgId.
     * Pattern duplicated 6 times (D-11).
     */
    function findMessageById(messages, msgId) {
      var target = null;
      messages.forEach(function (m) {
        if (String(m.id) === String(msgId)) target = m;
      });
      return target;
    }

    // ─── Deep clone ───────────────────────────────────────────────────────

    /**
     * Deep clone an object.
     * Uses structuredClone (modern browsers/Smart TV >=2020)
     * with JSON.parse/stringify fallback.
     */
    function deepClone(obj) {
      if (typeof structuredClone === 'function') {
        return structuredClone(obj);
      }
      return JSON.parse(JSON.stringify(obj));
    }

    // ─── File name builder ────────────────────────────────────────────────

    /**
     * Build file name for a profile.
     */
    function buildProfileFileName(name, now) {
      return 'profile_' + name.replace(/[^a-zA-Z0-9]/g, '_') + '_' + now + '.json';
    }

    // ─── Delta cursor ─────────────────────────────────────────────────────

    var STORAGE_LAST_DELTA_SEEN = 'gramlink_last_delta_seen';
    function getLastDeltaSeen() {
      return parseInt(Lampa.Storage.get(STORAGE_LAST_DELTA_SEEN, '0'), 10);
    }
    function setLastDeltaSeen(timestamp) {
      Lampa.Storage.set(STORAGE_LAST_DELTA_SEEN, String(timestamp));
    }

    function startMigration(profilesTopicId) {
      if (!window.lampa_settings || !window.lampa_settings.account_use) {
        Lampa.Noty.show('Cub account not found. Log in to Cub in Lampa settings first.');
        return;
      }
      if (!Lampa.Account || !Lampa.Account.Permit || !Lampa.Account.Permit.token) {
        Lampa.Noty.show('Cub account not found. Log in to Cub in Lampa settings first.');
        return;
      }

      // ── Import Analyzer: show counts before migration ───────────────
      Lampa.Noty.show('Analyzing Cub data...');
      console.log('[GramLink] startMigration — fetching profiles/all and plugins/all');
      Promise.all([Lampa.Account.Api.load('profiles/all').catch(function () {
        return {
          profiles: []
        };
      }), Lampa.Account.Api.load('plugins/all').catch(function () {
        return {
          plugins: []
        };
      })]).then(function (results) {
        var profilesResult = results[0];
        var pluginsResult = results[1];
        var profiles = profilesResult && profilesResult.profiles || [];
        var allPlugins = pluginsResult && pluginsResult.secuses ? pluginsResult.plugins || [] : [];
        var profileCount = profiles.length;
        var pluginCount = allPlugins.length;
        console.log('[GramLink] Cub profiles:', profileCount, JSON.stringify(profiles.map(function (p) {
          return {
            id: p.id,
            name: p.name
          };
        })));
        console.log('[GramLink] Cub plugins total:', pluginCount, 'has_secuses:', pluginsResult && pluginsResult.secuses);
        if (profileCount === 0) {
          Lampa.Noty.show('No Cub profiles found');
          return;
        }

        // ── Fetch bookmarks from ALL profiles for total count ──
        var bookmarkPromises = profiles.map(function (p) {
          return Lampa.Account.Api.load('bookmarks/dump', {
            headers: {
              profile: p.id
            },
            dataType: 'text'
          }).then(function (raw) {
            try {
              var parsed = JSON.parse(raw);
              return parsed && parsed.bookmarks ? parsed.bookmarks.length : 0;
            } catch (e) {
              return 0;
            }
          }).catch(function () {
            return 0;
          });
        });
        Promise.all(bookmarkPromises).then(function (bookmarkCounts) {
          var totalBookmarks = bookmarkCounts.reduce(function (a, b) {
            return a + b;
          }, 0);
          var $html = $('<div style="padding:1em">' + '<div class="gramlink-import-stats">' + '<div class="gramlink-import-stat" style="display:flex;justify-content:space-between;padding:0.8em 0;border-bottom:1px solid rgba(255,255,255,0.08)">' + '<span style="opacity:0.6">' + (Lampa.Lang.translate('gramlink_import_profiles') || 'Profiles found:') + '</span>' + '<span style="font-weight:600;font-size:1.1em">' + profileCount + '</span>' + '</div>' + '<div class="gramlink-import-stat" style="display:flex;justify-content:space-between;padding:0.8em 0;border-bottom:1px solid rgba(255,255,255,0.08)">' + '<span style="opacity:0.6">' + (Lampa.Lang.translate('gramlink_import_bookmarks') || 'Favorites & history items:') + '</span>' + '<span style="font-weight:600;font-size:1.1em">' + totalBookmarks + '</span>' + '</div>' + '<div class="gramlink-import-stat" style="display:flex;justify-content:space-between;padding:0.8em 0">' + '<span style="opacity:0.6">' + (Lampa.Lang.translate('gramlink_import_plugins') || 'Plugins found:') + '</span>' + '<span style="font-weight:600;font-size:1.1em">' + pluginCount + '</span>' + '</div>' + '</div>' + '<p style="margin-top:1em;opacity:0.5;font-size:0.9em">' + (Lampa.Lang.translate('gramlink_import_proceed') || 'Proceed with migration to GramLink?') + '</p>' + '</div>');
          var enabledCtrl = Lampa.Controller.enabled().name;
          Lampa.Modal.open({
            title: Lampa.Lang.translate('gramlink_import_title') || 'Cub Import Summary',
            html: $html,
            buttons: [{
              name: Lampa.Lang.translate('gramlink_import_start') || 'Yes, migrate',
              onSelect: function onSelect() {
                Lampa.Modal.close();
                Lampa.Controller.toggle(enabledCtrl);
                doMigration(profilesTopicId);
              }
            }, {
              name: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
              onSelect: function onSelect() {
                Lampa.Modal.close();
                Lampa.Controller.toggle(enabledCtrl);
              }
            }]
          });
        });
      }).catch(function (e) {
        console.error('GramLink', 'Import analysis error:', e);
        Lampa.Noty.show('Failed to analyze Cub data: ' + (e.message || 'API error'));
      });
    }

    // ─── Favourite categories (Lampa.Favorite) ──────────────────────

    var FAV_CATEGORIES = ['like', 'wath', 'book', 'history', 'look', 'viewed', 'scheduled', 'continued', 'thrown'];

    // ─── Convert Cub bookmark dump → Lampa favorite dict ─────────────

    function _emptyFav() {
      var fav = {
        card: []
      };
      FAV_CATEGORIES.forEach(function (c) {
        fav[c] = [];
      });
      return fav;
    }
    function cubDumpToFavorite(rawText) {
      var parsed;
      try {
        parsed = JSON.parse(rawText);
      } catch (e) {
        return _emptyFav();
      }
      var rows = parsed && parsed.bookmarks;
      if (!rows || !rows.length) return _emptyFav();
      var fav = {
        card: []
      };
      FAV_CATEGORIES.forEach(function (c) {
        fav[c] = [];
      });
      var seenCards = {};
      rows.forEach(function (b) {
        if (!b.type || b.card_id == null) return;
        if (!fav[b.type]) fav[b.type] = [];

        // Avoid duplicate card_ids in the same category
        if (fav[b.type].indexOf(b.card_id) < 0) {
          fav[b.type].unshift(b.card_id);
        }

        // Parse card data once per unique card_id
        if (!seenCards[b.card_id] && b.data) {
          seenCards[b.card_id] = true;
          try {
            var card = typeof b.data === 'string' ? JSON.parse(b.data) : b.data;
            fav.card.push(card);
          } catch (e) {}
        }
      });
      return fav;
    }

    // ─── Convert Cub timeline dump → Lampa file_view dict ────────────

    function cubDumpToTimeline(rawText) {
      var parsed;
      try {
        parsed = JSON.parse(rawText);
      } catch (e) {
        return {};
      }
      var timelines = parsed && parsed.timelines;
      if (!timelines) return {};
      var result = {};
      for (var hash in timelines) {
        if (!Object.prototype.hasOwnProperty.call(timelines, hash)) continue;
        var t = timelines[hash];
        if (!t) continue;
        result[hash] = {
          time: t.time || 0,
          duration: t.duration || 0,
          percent: t.percent || 0
        };
      }
      return result;
    }

    // ─── Filter Cub plugins for a specific profile ───────────────────

    function filterPluginsForProfile(allPlugins, profileId) {
      var result = [];
      allPlugins.forEach(function (p) {
        if (!p.url) return;
        var profileIds = [];
        try {
          profileIds = JSON.parse(p.profiles);
        } catch (e) {
          return;
        }

        // Cub semantics: empty profiles array "[]" means plugin is available to ALL profiles
        if (profileIds.length > 0 && !profileIds.some(function (id) {
          return id == profileId;
        })) return;
        result.push({
          url: p.url,
          name: p.name || p.url.split('/').pop().replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' '),
          status: p.status !== undefined ? p.status : 1
        });
      });
      console.log('[GramLink] filterPluginsForProfile profileId=' + profileId + ' plugins=' + result.length + ' (of ' + allPlugins.length + ' total)');
      return result;
    }

    // ─── Merge local + Cub plugins (GramLink safeguard) ──────────────

    function mergeWithLocalPlugins(cubPlugins) {
      var localPlugins = [];
      try {
        localPlugins = Lampa.Storage.get('plugins', []);
      } catch (e) {}
      var seen = {};
      var result = [];

      // Keep ALL local plugins first — GramLink lives here
      localPlugins.forEach(function (p) {
        var url = p.url || '';
        if (!seen[url]) {
          result.push(p);
          seen[url] = true;
        }
      });

      // Add Cub plugins that aren't already local
      cubPlugins.forEach(function (p) {
        if (!seen[p.url]) {
          result.push(p);
          seen[p.url] = true;
        }
      });
      return result;
    }

    // ─── Main migration flow ─────────────────────────────────────────

    function doMigration(profilesTopicId) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected to Telegram');
        return;
      }
      Lampa.Noty.show('Reading Cub profiles...');
      console.log('[GramLink] doMigration — starting, profilesTopicId:', profilesTopicId);
      Lampa.Account.Api.load('profiles/all').then(function (result) {
        if (!result || !result.profiles || !result.profiles.length) {
          Lampa.Noty.show('No Cub profiles found');
          console.warn('[GramLink] doMigration — no profiles from API');
          return;
        }
        var profiles = result.profiles;
        var activeProfileId = Lampa.Account.Permit.account.profile.id;
        var imported = 0;
        var activatedId = null;
        var activatedName = null;
        console.log('[GramLink] doMigration — profiles loaded:', profiles.length, 'activeProfileId:', activeProfileId);
        profiles.forEach(function (p, i) {
          console.log('[GramLink]   profile[' + i + ']: id=' + p.id + ' name="' + (p.name || '') + '" main=' + (p.main ? 'yes' : 'no'));
        });

        // ── 1. Fetch ALL plugins once ──────────────────────────
        Lampa.Account.Api.load('plugins/all').then(function (pluginResult) {
          var allPlugins = pluginResult && pluginResult.secuses ? pluginResult.plugins || [] : [];
          console.log('[GramLink] doMigration — plugins loaded:', allPlugins.length, 'secuses:', pluginResult && pluginResult.secuses);

          // ── 2. Process each profile sequentially ───────────
          function processNext(index) {
            if (index >= profiles.length) {
              console.log('[GramLink] doMigration — all profiles processed, imported:', imported);
              finishMigration(imported, activatedId, activatedName);
              return;
            }
            var cubProfile = profiles[index];
            var name = cubProfile.name || 'Profile ' + (index + 1);
            var avatar = getAvatar(name);
            var now = Math.floor(Date.now() / 1000);

            // Build caption with source metadata
            var captionExtras = {
              source: 'cub',
              source_id: cubProfile.id
            };
            var caption = buildCaption({
              name: name,
              avatar: avatar,
              updated: now
            }, captionExtras);
            console.log('[GramLink] processNext[' + index + ']: name="' + name + '" cubProfile.id=' + cubProfile.id + ' activeProfileId=' + activeProfileId);
            console.log('[GramLink]   caption:', caption);
            Lampa.Noty.show('Importing "' + name + '" (' + (index + 1) + '/' + profiles.length + ')…');

            // ── 2a. Fetch this profile's Bookmarks ─────────
            var bookmarkPromise = Lampa.Account.Api.load('bookmarks/dump', {
              headers: {
                profile: cubProfile.id
              },
              dataType: 'text'
            }).then(function (raw) {
              var fav = cubDumpToFavorite(raw);
              console.log('[GramLink]   bookmarks for "' + name + '": ' + (fav && fav.card ? fav.card.length : 0) + ' cards');
              return fav;
            }).catch(function (err) {
              console.warn('[GramLink]   bookmarks failed for "' + name + '":', err && err.message);
              var f = {
                card: []
              };
              FAV_CATEGORIES.forEach(function (c) {
                f[c] = [];
              });
              return f;
            });

            // ── 2b. Fetch this profile's Timeline ──────────
            var timelinePromise = Lampa.Account.Api.load('timeline/dump', {
              headers: {
                profile: cubProfile.id
              },
              dataType: 'text'
            }).then(function (raw) {
              var tl = cubDumpToTimeline(raw);
              console.log('[GramLink]   timeline for "' + name + '": ' + Object.keys(tl).length + ' entries');
              return tl;
            }).catch(function (err) {
              console.warn('[GramLink]   timeline failed for "' + name + '":', err && err.message);
              return {};
            });

            // ── 2c. Wait for both, build + send file ──────
            Promise.all([bookmarkPromise, timelinePromise]).then(function (results) {
              var bookmarks = results[0];
              var timeline = results[1];
              var profilePlugins = mergeWithLocalPlugins(filterPluginsForProfile(allPlugins, cubProfile.id));
              console.log('[GramLink]   building fileData for "' + name + '" — plugins:', profilePlugins.length);
              var fileData = buildFileData({
                name: name,
                avatar: avatar,
                bookmarks: {
                  favorite: bookmarks
                },
                timeline: timeline,
                plugins: profilePlugins,
                settings: collectSettings()
              });
              var fileJson = JSON.stringify(fileData, null, 2);
              var fileName = 'profile_' + name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '_').slice(0, 64) + '_' + now + '.json';
              var channelId = getChannelId();
              client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
                console.log('[GramLink]   sendFile result for "' + name + '": msgId=' + msgId);
                if (msgId) {
                  imported++;
                  if (String(cubProfile.id) === String(activeProfileId)) {
                    activatedId = msgId;
                    activatedName = name;
                    console.log('[GramLink]   -> this profile will be activated after migration');
                  }
                } else {
                  console.warn('[GramLink]   sendFile returned no msgId for "' + name + '"');
                }
                processNext(index + 1);
              }).catch(function (err) {
                console.error('[GramLink]   sendFile failed for "' + name + '":', err && err.message);
                processNext(index + 1);
              });
            }).catch(function () {
              console.warn('[GramLink]   bookmark+timeline both failed for "' + name + '", creating empty profile');
              // If both bookmark+timeline fail, still create profile with empty data
              var profilePlugins = mergeWithLocalPlugins(filterPluginsForProfile(allPlugins, cubProfile.id));
              var fileData = buildFileData({
                name: name,
                avatar: avatar,
                plugins: profilePlugins,
                settings: collectSettings()
              });
              var fileJson = JSON.stringify(fileData, null, 2);
              var fileName = 'profile_' + name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '_').slice(0, 64) + '_' + now + '.json';
              var channelId = getChannelId();
              client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
                console.log('[GramLink]   sendFile (empty fallback) for "' + name + '": msgId=' + msgId);
                if (msgId) {
                  imported++;
                  if (String(cubProfile.id) === String(activeProfileId)) {
                    activatedId = msgId;
                    activatedName = name;
                  }
                }
                processNext(index + 1);
              }).catch(function (err) {
                console.error('[GramLink]   sendFile (empty fallback) failed for "' + name + '":', err && err.message);
                processNext(index + 1);
              });
            });
          }
          processNext(0);
        }).catch(function (e) {
          console.error('[GramLink] Migration fetch plugins error:', e);
          Lampa.Noty.show('Failed to read Cub plugins');

          // Still try to migrate profiles without plugins
          fallbackMigration(profiles, activeProfileId, profilesTopicId);
        });
      }).catch(function (e) {
        console.error('[GramLink] Migration fetch error:', e);
        Lampa.Noty.show('Failed to read Cub profiles: ' + (e.message || 'API error'));
      });
    }

    // ─── Fallback if plugins/all fails: migrate with local data ─────

    function fallbackMigration(profiles, activeProfileId, profilesTopicId) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      console.log('[GramLink] fallbackMigration — profiles:', profiles.length, 'activeProfileId:', activeProfileId);
      var imported = 0;
      var activatedId = null;
      var activatedName = null;
      var now = Math.floor(Date.now() / 1000);
      function processNext(index) {
        if (index >= profiles.length) {
          console.log('[GramLink] fallbackMigration — done, imported:', imported);
          finishMigration(imported, activatedId, activatedName);
          return;
        }
        var cubProfile = profiles[index];
        var name = cubProfile.name || 'Profile ' + (index + 1);
        var avatar = getAvatar(name);
        var ts = now + index; // unique timestamp per profile

        var captionExtras = {
          source: 'cub',
          source_id: cubProfile.id
        };
        var caption = buildCaption({
          name: name,
          avatar: avatar,
          updated: ts
        }, captionExtras);
        console.log('[GramLink] fallback processNext[' + index + ']: name="' + name + '" id=' + cubProfile.id + ' caption:', caption);
        var fileData = buildFileData({
          name: name,
          avatar: avatar,
          plugins: mergeWithLocalPlugins([]),
          settings: collectSettings()
        });
        var fileJson = JSON.stringify(fileData, null, 2);
        var fileName = 'profile_' + name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '_').slice(0, 64) + '_' + ts + '.json';
        var channelId = getChannelId();
        client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
          if (msgId) {
            imported++;
            if (String(cubProfile.id) === String(activeProfileId)) {
              activatedId = msgId;
              activatedName = name;
            }
          }
          processNext(index + 1);
        }).catch(function () {
          processNext(index + 1);
        });
      }
      processNext(0);
    }

    // ─── Finish ──────────────────────────────────────────────────────

    function finishMigration(count, activatedId, activatedName) {
      console.log('[GramLink] finishMigration — imported:', count, 'activatedId:', activatedId, 'activatedName:', activatedName);
      if (activatedId) {
        Lampa.Storage.set('gramlink_active_profile', String(activatedId));
        Lampa.Storage.set('gramlink_active_profile_ts', String(Math.floor(Date.now() / 1000)));
        if (activatedName) Lampa.Storage.set('gramlink_active_profile_name', activatedName);
        console.log('[GramLink]   activated profile saved:', activatedName, 'msgId:', activatedId);
      } else {
        console.warn('[GramLink]   no profile activated — activeProfileId did not match any cubProfile.id');
      }

      // Restore gramlink_tools with correct onBack instead of Settings.update()
      var enabledCtrl = Lampa.Controller.enabled().name;
      Lampa.Settings.create('gramlink_tools', {
        onBack: function onBack() {
          Lampa.Settings.create('gramlink');
        }
      });
      Lampa.Modal.open({
        title: 'Migration complete!',
        html: $('<div style="padding:1em">' + count + ' profiles imported successfully.</div>'),
        buttons: [{
          name: 'Reload now',
          onSelect: function onSelect() {
            Lampa.Modal.close();
            window.location.reload();
          }
        }, {
          name: 'Later',
          onSelect: function onSelect() {
            Lampa.Modal.close();
            Lampa.Controller.toggle(enabledCtrl);
          }
        }]
      });
    }

    /**
     * sdk/html.js — Single HTML sanitization (XSS protection)
     *
     * Eliminates:
     *   D-03a — 4 copies of escHtml with different character sets
     *   D-03b — escAttr now part of escHtml with { attr: true }
     *
     * Usage:
     *   import { escHtml, escAttr } from '../sdk/html'
     */

    var HTML_ESC_MAP = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    var HTML_ESC_RE = /[&<>"']/g;
    function escHtml(str) {
      if (!str) return '';
      return String(str).replace(HTML_ESC_RE, function (m) {
        return HTML_ESC_MAP[m];
      });
    }

    /**
     * sdk/lampa.js — UI helpers for Lampa API
     *
     * Eliminates:
     *   D-18 — softRefresh() now in SDK
     *   A-14 — Lampa.Input.edit boilerplate centralized
     *   A-15 — Lampa.Select.show boilerplate (prevController) centralized
     *   A-13 — Lampa.Storage.listener.follow with auto-unsubscribe
     *
     * Usage:
     *   import { softRefresh, select, input, onStorageChange } from '../sdk/lampa'
     */

    /**
     * "Soft" refresh of current activity without page reload.
     */
    function softRefresh() {
      var activity = Lampa.Activity.active();
      if (!activity) return;
      if (activity.page) activity.page = 1;
      Lampa.Activity.replace(activity);
      activity.outdated = false;
    }

    /**
     * Wrapper for Lampa.Select.show with automatic Controller toggle.
     * Eliminates boilerplate `var prevController = Lampa.Controller.enabled().name`.
     *
     * @param {Object} opts
     * @param {string} opts.title
     * @param {Array} opts.items
     * @param {Function} opts.onSelect — called with item (cancel already filtered out)
     * @param {Function} [opts.onBack]
     * @param {Function} [opts.onFullDraw]
     * @returns {string} previous controller name
     */
    function select(opts) {
      var prevController = Lampa.Controller.enabled().name;
      var items = (opts.items || []).map(function (item) {
        // Add cancel flag if missing
        if (item.cancel === undefined && item.title === 'Cancel') item.cancel = true;
        return item;
      });
      Lampa.Select.show({
        title: opts.title,
        items: items,
        onSelect: function onSelect(item) {
          Lampa.Controller.toggle(prevController);
          if (item && item.cancel) {
            if (opts.onCancel) opts.onCancel();
            return;
          }
          if (opts.onSelect) opts.onSelect(item);
        },
        onBack: function onBack() {
          Lampa.Controller.toggle(prevController);
          if (opts.onBack) opts.onBack();
        },
        onFullDraw: opts.onFullDraw
      });
      return prevController;
    }

    /**
     * Wrapper for Lampa.Input.edit with default parameters.
     *
     * @param {Object} opts
     * @param {string} opts.title
     * @param {string} [opts.value]
     * @param {string} [opts.align='center']
     * @param {Function} opts.onSubmit — called with input string
     * @returns {string} previous controller name
     */
    function input(opts) {
      var prevController = Lampa.Controller.enabled().name;
      Lampa.Input.edit({
        title: opts.title,
        value: opts.value || '',
        align: opts.align || 'center',
        free: true,
        nosave: true
      }, function (val) {
        // If user pressed Cancel, val may be null/undefined
        if (val === null || val === undefined) {
          Lampa.Controller.toggle(prevController);
          if (opts.onCancel) opts.onCancel();
          return;
        }
        Lampa.Controller.toggle(prevController);
        if (opts.onSubmit) opts.onSubmit(val);
      });
      return prevController;
    }

    // ponytail: counter instead of boolean — batch operations fire multiple events
    var _publishSuppressed = 0;
    var STORAGE_ACTIVE_PROFILE = STORAGE_KEYS.ACTIVE_PROFILE;
    var STORAGE_ACTIVE_PROFILE_TS = STORAGE_KEYS.ACTIVE_PROFILE_TS;
    var STORAGE_PROFILES_TOPIC$1 = STORAGE_KEYS.PROFILES_TOPIC;
    var STORAGE_PROFILES_SYNC_TOPIC$1 = STORAGE_KEYS.PROFILES_SYNC;
    var STORAGE_PROFILES_CACHE = STORAGE_KEYS.PROFILES_CACHE;
    var STORAGE_PLUGIN_REGISTRY = STORAGE_KEYS.PLUGIN_REGISTRY;
    var STORAGE_PROFILE_PLUGIN_URLS = STORAGE_KEYS.PROFILE_PLUGIN_URLS;

    // ─── Sync Key Manifest ──────────────────────────────────

    var SYNC_KEY_MANIFEST = {
      storage: [{
        key: 'favorite',
        label: 'favorite'
      }, {
        key: 'file_view',
        label: 'file_view'
      }, {
        key: 'plugins',
        label: 'plugins'
      }, {
        key: 'gramlink_sync_enabled',
        label: 'gramlink_sync_enabled'
      }, {
        key: 'gramlink_heartbeat',
        label: 'gramlink_heartbeat'
      }, {
        key: 'gramlink_broadcast',
        label: 'gramlink_broadcast'
      }, {
        key: 'gramlink_device_label',
        label: 'device_label'
      }],
      timestampPrefix: 'gramlink_ts_'
    };

    // ─── Device Key Registry ──────────────────────────────────
    // ponytail: flat prefix array, not a plugin system.
    // Add new prefixes here as Lampa core adds new settings.
    var DEVICE_KEY_PREFIXES$1 = ['player', 'player_', 'subtitles_', 'video_quality_', 'navigation_', 'interface_', 'background_', 'glass_', 'card_', 'poster_', 'animation_', 'scroll_', 'request_caching', 'cache_images', 'mask', 'light_version', 'menu_always', 'black_style', 'gramlink_heartbeat', 'gramlink_broadcast'];
    function isDeviceKey(key) {
      return DEVICE_KEY_PREFIXES$1.some(function (p) {
        return key === p || key.indexOf(p) === 0;
      });
    }
    function updateSyncTimestamp(label) {
      Lampa.Storage.set(SYNC_KEY_MANIFEST.timestampPrefix + label, String(Math.floor(Date.now() / 1000)));
    }
    function getSyncTimestamp(label) {
      return parseInt(Lampa.Storage.get(SYNC_KEY_MANIFEST.timestampPrefix + label, '0'), 10);
    }
    function clearSyncTimestamps() {
      SYNC_KEY_MANIFEST.storage.forEach(function (s) {
        Lampa.Storage.set(SYNC_KEY_MANIFEST.timestampPrefix + s.label, '0');
      });
    }

    // ponytail: no need to re-upload the whole profile.
    // Just clear local device-scoped keys back to Lampa defaults.
    function resetDeviceOverlay() {
      var deviceId = getDeviceId();

      // Clear device-scoped keys from localStorage
      var keysToRemove = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && isDeviceKey(key)) keysToRemove.push(key);
      }
      keysToRemove.forEach(function (k) {
        localStorage.removeItem(k);
      });

      // Publish reset delta so other devices know
      var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
      if (profilesSyncTopicId) {
        publishDeviceDelta(profilesSyncTopicId, 'device_setting', {
          device_id: deviceId,
          key: '__reset_overlay__',
          value: null
        }, 'all');
      }
    }
    var BACKUP_PREFIX = 'gramlink_pbak_';

    // ─── Profile cache (for sidebar) ──────────────────────────

    function saveProfilesCache(profileMessages) {
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      var cacheData = profileMessages.map(function (m) {
        try {
          var d = parseProfileMessage(m.text);
          if (!d) return null;
          var p = d.payload && d.payload.profile;
          if (!p) return null;
          return {
            msgId: m.id,
            name: p.name || 'Unnamed',
            avatar: p.avatar || getAvatar(p.name),
            updated: p.updated || 0,
            isActive: String(m.id) === String(activeId)
          };
        } catch (e) {
          return null;
        }
      }).filter(Boolean);
      Lampa.Storage.set(STORAGE_PROFILES_CACHE, cacheData);
    }
    function getCachedProfiles() {
      try {
        var data = Lampa.Storage.get(STORAGE_PROFILES_CACHE, []);
        return Array.isArray(data) ? data : [];
      } catch (e) {
        return [];
      }
    }

    // ─── Plugin Registry ──────────────────────────────────────

    function getPluginRegistry() {
      try {
        var data = Lampa.Storage.get(STORAGE_PLUGIN_REGISTRY, []);
        return Array.isArray(data) ? data : [];
      } catch (e) {
        return [];
      }
    }
    function addToPluginRegistry(url, name) {
      if (!url) return;
      var registry = getPluginRegistry();
      if (!registry.some(function (p) {
        return p.url === url;
      })) {
        registry.push({
          url: url,
          name: name || extractNameFromUrl(url)
        });
        Lampa.Storage.set(STORAGE_PLUGIN_REGISTRY, registry);
      }
    }
    function removeFromPluginRegistry(url) {
      if (!url) return;
      var registry = getPluginRegistry().filter(function (p) {
        return p.url !== url;
      });
      Lampa.Storage.set(STORAGE_PLUGIN_REGISTRY, registry);
    }

    /** Fetch profiles from Telegram and populate cache (called on startup). */
    function refreshCacheFromTelegram() {
      var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
      if (!profilesTopicId) return;
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var profileMessages = msgs.filter(function (m) {
          if (!m.text) return false;
          return !!parseProfileMessage(m.text);
        });
        if (profileMessages.length > 0) {
          saveProfilesCache(profileMessages);
        }
      }).catch(function () {});
    }

    // ─── Profile list rendering ─────────────────────────────

    function refreshProfiles(profilesTopicId, profilesSyncTopicId, container, onDone) {
      if (!profilesTopicId) return;
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        container.empty();
        var profileMessages = msgs.filter(function (m) {
          if (!m.text) return false;
          return !!parseProfileMessage(m.text);
        });
        if (profileMessages.length === 0) {
          container.html('<div class="gramlink-devices__empty">No profiles</div>');
          if (onDone) onDone();
          return;
        }
        var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');

        // Build grid container
        var $grid = $('<div class="profile-grid"></div>');

        // 1. Add-card always first
        var $addCard = $('<div class="profile-card profile-card--add selector" data-action="add">' + '<div class="profile-card__add-icon">+</div>' + '<div>' + (Lampa.Lang.translate('gramlink_create_profile') || 'Create profile') + '</div>' + '</div>');
        $grid.append($addCard);

        // 2. Profile cards
        profileMessages.forEach(function (m) {
          var d = parseProfileMessage(m.text);
          if (!d) return;
          var p = d.payload && d.payload.profile;
          if (!p) return;
          var isActive = String(activeId) === String(m.id);
          var avatar = getAvatar(p.name);
          var avatarColorVal = avatarColor(p.name);
          var isUrl = isAvatarUrl(avatar);
          var avatarHtml = isUrl ? '<img src="' + avatar + '" alt="">' : '<div class="gramlink-avatar" style="background:' + avatarColorVal + ';border-radius:50%;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">' + avatar + '</div>';
          var nameSafe = (p.name || 'Unnamed').replace(/"/g, '&quot;');
          var $card = $('<div class="profile-card selector' + (isActive ? ' profile-card--active' : '') + '" ' + 'data-id="' + m.id + '" ' + 'data-name="' + nameSafe + '" ' + 'data-active="' + isActive + '">' + '<div class="profile-card__avatar-wrap">' + avatarHtml + '</div>' + '<div class="profile-card__name">' + escHtml(p.name || 'Unnamed') + (isActive ? '<div class="profile-card__active-badge">● ' + (Lampa.Lang.translate('gramlink_profile_active') || 'Active') + '</div>' : '') + '</div>' + '</div>');
          $grid.append($card);
        });
        container.empty().append($grid);

        // Card click → switch profile (immediate)
        $grid.find('.profile-card[data-id]').on('hover:enter', function () {
          var id = $(this).data('id');
          var isActive = $(this).data('active') === true;
          if (isActive) return;
          doSwitch(id, profilesTopicId, profilesSyncTopicId);
        });

        // Card 3-dot context menu → long-press already handled in hub.js
        // Add-card click → create profile
        $addCard.on('hover:enter', function () {
          createProfile(profilesTopicId, profilesSyncTopicId, container);
        });

        // Save to cache for sidebar
        saveProfilesCache(profileMessages);
        if (onDone) onDone();
      }).catch(function () {
        if (onDone) onDone();
      });
    }
    function doSwitch(msgId, profilesTopicId, profilesSyncTopicId, container) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected');
        return;
      }
      var currentId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (currentId) {
        autoSaveProfile(currentId, profilesTopicId);
      }
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = findMessageById(msgs, msgId);
        if (!target) {
          Lampa.Noty.show('Profile not found');
          return;
        }
        return client.downloadMessageFile(target).then(function (fileData) {
          if (!fileData) {
            Lampa.Noty.show('Profile file not found');
            return;
          }

          // Store profile name from caption for settings button
          var captionProfile = parseCaption(target.text);
          var profileName = captionProfile && captionProfile.name;
          if (profileName) Lampa.Storage.set('gramlink_active_profile_name', profileName);
          var profileData;
          try {
            profileData = JSON.parse(fileData);
          } catch (e) {
            Lampa.Noty.show('Invalid profile data');
            return;
          }
          var fileTimestamp = target.date || 0;
          return replayDeltas(profilesSyncTopicId, msgId, fileTimestamp, profileData).then(function (mergedData) {
            applyProfileData(mergedData, msgId);
            softRefresh(); // ponytail: avoid full page reload
          });
        });
      }).catch(function (e) {
        console.error('GramLink', 'Switch profile error:', e);
        Lampa.Noty.show('Switch failed');
      });
    }

    // ─── Delta replay ───────────────────────────────────────

    function replayDeltas(profilesSyncTopicId, profileMsgId, sinceTimestamp, snapshotData) {
      if (!profilesSyncTopicId) return Promise.resolve(snapshotData);
      var client = GatewayClient.getInstance();
      return client.getMessagesSince(profilesSyncTopicId, sinceTimestamp, 50).then(function (deltas) {
        var data = deepClone(snapshotData);
        deltas.forEach(function (msg) {
          var d;
          try {
            d = JSON.parse(stripCodeFence$1(msg.text));
          } catch (e) {
            return;
          }
          if (!d || !d.meta || d.meta.type !== 'profile_delta') return;
          if (String(d.meta.profile_msg_id) !== String(profileMsgId)) return;
          var sub = d.meta.subtype;
          var payload = d.payload;
          if (sub === 'bookmark_add') {
            if (!data.bookmarks) data.bookmarks = {};
            if (!data.bookmarks.favorite) data.bookmarks.favorite = {};
            data.bookmarks.favorite[payload.card_id] = payload.card;
          } else if (sub === 'bookmark_remove') {
            if (data.bookmarks && data.bookmarks.favorite) {
              delete data.bookmarks.favorite[payload.card_id];
            }
          } else if (sub === 'timecode_update') {
            if (!data.timeline) data.timeline = {};
            data.timeline[payload.hash] = {
              time: payload.time,
              duration: payload.duration,
              percent: payload.percent
            };
          } else if (sub === 'plugin_change') {
            if (!data.plugins) data.plugins = [];
            if (payload.action === 'add') {
              data.plugins.push(payload.plugin);
            } else if (payload.action === 'remove') {
              data.plugins = data.plugins.filter(function (p) {
                return p.url !== payload.plugin.url;
              });
            } else if (payload.action === 'toggle') {
              data.plugins.forEach(function (p) {
                if (p.url === payload.plugin.url) p.status = payload.plugin.status;
              });
            }
          } else if (sub === 'device_plugin_status') {
            if (!data.device_overrides) data.device_overrides = {};
            if (!data.device_overrides[payload.device_id]) data.device_overrides[payload.device_id] = {};
            if (!data.device_overrides[payload.device_id].plugins_status) data.device_overrides[payload.device_id].plugins_status = {};
            data.device_overrides[payload.device_id].plugins_status[payload.url] = payload.status;
          } else if (sub === 'device_plugin_custom') {
            if (!data.device_overrides) data.device_overrides = {};
            if (!data.device_overrides[payload.device_id]) data.device_overrides[payload.device_id] = {};
            if (!data.device_overrides[payload.device_id].plugins_custom) data.device_overrides[payload.device_id].plugins_custom = {};
            data.device_overrides[payload.device_id].plugins_custom[payload.url] = payload.custom;
          } else if (sub === 'device_setting') {
            if (!data.device_overrides) data.device_overrides = {};
            if (!data.device_overrides[payload.device_id]) data.device_overrides[payload.device_id] = {};
            if (!data.device_overrides[payload.device_id].settings) data.device_overrides[payload.device_id].settings = {};
            data.device_overrides[payload.device_id].settings[payload.key] = payload.value;
          }
        });
        return data;
      }).catch(function () {
        return snapshotData;
      });
    }

    // ─── Apply profile data ─────────────────────────────────

    function applyProfileData(data, msgId) {
      var deviceId = getDeviceId();
      var override = data.device_overrides && data.device_overrides[deviceId];

      // ── Bookmarks (always user-layer) ──
      if (data.bookmarks && data.bookmarks.favorite) {
        suppressPublish();
        Lampa.Storage.set('favorite', data.bookmarks.favorite);
        if (Lampa.Favorite && Lampa.Favorite.read) {
          Lampa.Favorite.read();
        }
        unsuppressPublish();
      }

      // ── Timeline (always user-layer) ──
      if (data.timeline) {
        Lampa.Storage.set('file_view', data.timeline);
      }

      // ── Plugins (smart merge: respects user removals, accepts cross-device additions) ──
      if (data.plugins) {
        // Build profile plugin URL list from current profile data
        var profileUrls = [];
        for (var pi = 0; pi < data.plugins.length; pi++) {
          var pu = data.plugins[pi].url;
          if (pu) profileUrls.push(pu);
        }

        // Read previously-saved profile plugin URLs (from last activation on this device)
        var knownProfileUrls;
        try {
          knownProfileUrls = JSON.parse(Lampa.Storage.get(STORAGE_PROFILE_PLUGIN_URLS, '[]')) || [];
        } catch (e) {
          knownProfileUrls = [];
        }
        var knownMap = {};
        for (var ki = 0; ki < knownProfileUrls.length; ki++) {
          knownMap[knownProfileUrls[ki]] = true;
        }

        // Save current profile URLs for next activation
        Lampa.Storage.set(STORAGE_PROFILE_PLUGIN_URLS, JSON.stringify(profileUrls));

        // Start with local plugins
        var localPlugins = collectPlugins();
        var localByUrl = {};
        for (var li = 0; li < localPlugins.length; li++) {
          localByUrl[localPlugins[li].url] = localPlugins[li];
        }

        // Build profile URL → plugin map for fast lookup
        var profileByUrl = {};
        for (var pi2 = 0; pi2 < data.plugins.length; pi2++) {
          profileByUrl[data.plugins[pi2].url] = data.plugins[pi2];
        }

        // Merge: keep existing locals, override if profile has it, add new profile plugins
        var mergedPlugins = [];
        var mergedUrls = {};

        // 1. Process existing local plugins — apply profile overrides where URL matches
        for (var li2 = 0; li2 < localPlugins.length; li2++) {
          var lp = localPlugins[li2];
          var profileMatch = profileByUrl[lp.url];
          if (profileMatch) {
            var ds = override && override.plugins_status && override.plugins_status[lp.url];
            var dc = override && override.plugins_custom && override.plugins_custom[lp.url];
            mergedPlugins.push({
              url: lp.url,
              name: profileMatch.name || lp.name,
              status: ds !== undefined ? ds : profileMatch.status,
              custom: dc !== undefined ? dc : profileMatch.custom || lp.custom
            });
          } else {
            mergedPlugins.push({
              url: lp.url,
              name: lp.name,
              status: lp.status !== undefined ? lp.status : 1,
              custom: lp.custom
            });
          }
          mergedUrls[lp.url] = true;
        }

        // 2. Add NEW profile plugins that don't exist locally (cross-device additions)
        for (var pi3 = 0; pi3 < data.plugins.length; pi3++) {
          var pp = data.plugins[pi3];
          if (!pp.url) continue;
          // Skip if already in local list (already handled above)
          if (mergedUrls[pp.url]) continue;
          // Skip if "known" (was in previous profile activation) but user removed locally
          if (knownMap[pp.url] && !localByUrl[pp.url]) continue;
          // NEW plugin from profile — add it
          var ds2 = override && override.plugins_status && override.plugins_status[pp.url];
          var dc2 = override && override.plugins_custom && override.plugins_custom[pp.url];
          mergedPlugins.push({
            url: pp.url,
            name: pp.name,
            status: ds2 !== undefined ? ds2 : pp.status,
            custom: dc2 !== undefined ? dc2 : pp.custom
          });
          mergedUrls[pp.url] = true;
        }

        // 3. Safeguard: GramLink must always be present
        // Use auto-detected URL (release or dev), check by URL pattern
        var glTargetUrl = window.__gramlink_self_url || './plugins/GramLink.js';
        var glPresent = false;
        for (var _glu in mergedUrls) {
          if (_glu.indexOf('GramLink.js') >= 0 || _glu.indexOf('gramlink') >= 0) {
            glPresent = true;
            break;
          }
        }
        if (!glPresent) {
          mergedPlugins.push({
            url: glTargetUrl,
            name: 'GramLink',
            status: 1,
            custom: {}
          });
        }
        Lampa.Storage.set('plugins', mergedPlugins);
      }

      // ── Settings (user-layer defaults + device-layer override) ──
      var userSettings = data.settings || {};
      if (userSettings.sync_enabled !== undefined) Lampa.Storage.set('gramlink_sync_enabled', userSettings.sync_enabled);
      if (userSettings.heartbeat !== undefined) Lampa.Storage.set('gramlink_heartbeat', userSettings.heartbeat);
      if (userSettings.broadcast !== undefined) Lampa.Storage.set('gramlink_broadcast', userSettings.broadcast);

      // Device-scoped settings override
      if (override && override.settings) {
        Object.keys(override.settings).forEach(function (key) {
          Lampa.Storage.set(key, override.settings[key]);
        });
      }

      // ── Mark active ──
      Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(msgId));
      Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(Math.floor(Date.now() / 1000)));
      Lampa.Noty.show('Profile activated');
    }

    // ─── Create profile ─────────────────────────────────────

    function createProfile(profilesTopicId, profilesSyncTopicId, container) {
      Lampa.Input.edit({
        title: 'Profile name',
        free: true,
        nosave: true,
        align: 'center'
      }, function (name) {
        if (!name) return;
        var client = GatewayClient.getInstance();
        if (!client.isConnected()) {
          Lampa.Noty.show('Not connected');
          return;
        }
        var profileName = name.trim();
        var avatar = getAvatar(profileName);
        var now = Math.floor(Date.now() / 1000);
        var caption = buildCaption({
          name: profileName,
          avatar: avatar,
          updated: now
        });

        // First profile: inherit current data. Subsequent: start empty.
        client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
          var hasProfiles = msgs.some(function (m) {
            if (!m.text) return false;
            return !!parseProfileMessage(m.text);
          });
          var fileData = buildFileData({
            name: profileName,
            avatar: avatar,
            bookmarks: hasProfiles ? {
              favorite: {}
            } : {
              favorite: collectFavorite()
            },
            timeline: hasProfiles ? {} : collectTimeline(),
            plugins: collectPlugins(),
            settings: collectSettings()
          });
          var fileJson = JSON.stringify(fileData, null, 2);
          var fileName = buildProfileFileName(profileName, now);
          client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
            if (msgId) {
              Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(msgId));
              Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(now));
              Lampa.Storage.set('gramlink_active_profile_name', profileName);
              refreshProfiles(profilesTopicId, profilesSyncTopicId, container);
              Lampa.Noty.show('Profile created');
            } else {
              Lampa.Noty.show('Failed to create profile');
            }
          }).catch(function (e) {
            console.error('GramLink', 'Profile create error:', e);
            Lampa.Noty.show('Failed to create profile');
          });
        }).catch(function () {
          Lampa.Noty.show('Failed to check existing profiles');
        });
      });
    }

    // ─── Sync / Auto-save ───────────────────────────────────

    function syncProfile(msgId, profilesTopicId) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected');
        return;
      }
      var now = Math.floor(Date.now() / 1000);
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = findMessageById(msgs, msgId);
        if (!target) {
          Lampa.Noty.show('Profile not found');
          return;
        }
        var p = parseCaption(target.text) || {};
        var profileName = p.name || 'Unnamed';
        var avatar = p.avatar || getAvatar(profileName);

        // Preserve source metadata (e.g. 'cub', source_id) from original caption
        var fullMsg = parseProfileMessage(target.text);
        var srcMeta = {};
        if (fullMsg && fullMsg.meta && fullMsg.meta.source) {
          srcMeta.source = fullMsg.meta.source;
          srcMeta.source_id = fullMsg.meta.source_id;
        }
        var caption = buildCaption({
          name: profileName,
          avatar: avatar,
          updated: now
        }, srcMeta);
        var fileData = buildFileData({
          name: profileName,
          avatar: avatar,
          bookmarks: {
            favorite: collectFavorite()
          },
          timeline: collectTimeline(),
          plugins: collectPlugins(),
          settings: collectSettings()
        });
        var fileJson = JSON.stringify(fileData, null, 2);
        var fileName = buildProfileFileName(profileName, now);
        client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
          if (newMsgId) {
            // Delete old message to avoid duplicates
            client.deleteMessage(getChannelId(), parseInt(msgId, 10)).catch(function () {});
            if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
              Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
              Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(now));
            }
            Lampa.Noty.show('Profile synced');
          }
        }).catch(function (e) {
          console.error('GramLink', 'Profile sync error:', e);
          Lampa.Noty.show('Sync failed');
        });
      });
    }
    function autoSaveProfile(msgId, profilesTopicId) {
      syncProfile(msgId, profilesTopicId);
    }

    // ─── Rename profile ─────────────────────────────────────

    function renameProfile(msgId, profilesTopicId, newName, onDone) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected');
        if (onDone) onDone();
        return;
      }
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = findMessageById(msgs, msgId);
        if (!target) {
          Lampa.Noty.show('Profile not found');
          if (onDone) onDone();
          return;
        }
        return client.downloadMessageFile(target).then(function (fileData) {
          if (!fileData) {
            Lampa.Noty.show('Profile file not found');
            if (onDone) onDone();
            return;
          }
          var data;
          try {
            data = JSON.parse(fileData);
          } catch (e) {
            Lampa.Noty.show('Invalid profile data');
            if (onDone) onDone();
            return;
          }
          data.profile_meta.name = newName;

          // Preserve avatar from old data or caption
          var oldCaption = parseCaption(target.text);
          var avatar = data.profile_meta && data.profile_meta.avatar || oldCaption && oldCaption.avatar || getAvatar(newName);
          var now = Math.floor(Date.now() / 1000);
          var caption = buildCaption({
            name: newName,
            avatar: avatar,
            updated: now
          });
          var fileJson = JSON.stringify(data, null, 2);
          var fileName = buildProfileFileName(newName, now);
          client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
            if (newMsgId) {
              client.deleteMessage(getChannelId(), parseInt(msgId, 10)).catch(function () {});
              if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
                Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
                Lampa.Storage.set('gramlink_active_profile_name', newName);
              }
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_profile_renamed') || 'Profile renamed');
            } else {
              Lampa.Noty.show('Rename failed');
            }
            if (onDone) onDone(newMsgId || null);
          }).catch(function () {
            Lampa.Noty.show('Rename failed');
            if (onDone) onDone();
          });
        });
      }).catch(function () {
        Lampa.Noty.show('Failed to load profile');
        if (onDone) onDone();
      });
    }

    // Collect all device-scoped storage keys → { key: value }
    function collectDeviceScopedSettings() {
      var result = {};
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!key) continue;
        if (key.indexOf('gramlink_') === 0 && !isDeviceKey(key)) continue;
        if (isDeviceKey(key)) {
          try {
            result[key] = JSON.parse(localStorage.getItem(key));
          } catch (e) {
            result[key] = localStorage.getItem(key);
          }
        }
      }
      return result;
    }

    // ─── Profile compaction state ───────────────────────────
    var compactTimer = null; // debounce timer handle
    var compactLastRun = 0; // timestamp of last successful compaction
    var COMPACT_DEBOUNCE_MS = 30000; // wait 30s after last change before compact
    var COMPACT_MIN_INTERVAL = 60000; // at most once per 60s

    // ─── Delta publisher (called from outside) ──────────────

    function publishLocalDelta(profilesSyncTopicId, subtype, payload) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected() || !profilesSyncTopicId) return;
      var activeProfileId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!activeProfileId) return;
      client.publishDelta(profilesSyncTopicId, subtype, activeProfileId, payload);
      scheduleCompact();
    }

    // Publish a device-targeted delta (includes target_device_id for filtering)
    function publishDeviceDelta(profilesSyncTopicId, subtype, payload, targetDeviceId) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected() || !profilesSyncTopicId) return;
      var activeProfileId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!activeProfileId) return;
      var msg = JSON.stringify({
        meta: {
          type: 'profile_delta',
          subtype: subtype,
          profile_msg_id: activeProfileId,
          device_id: getDeviceId(),
          target_device_id: targetDeviceId || 'all',
          timestamp: Math.floor(Date.now() / 1000)
        },
        payload: payload || {}
      });
      client.publishRaw(profilesSyncTopicId, msg, true);
      scheduleCompact();
    }

    // ─── Debounced full profile compaction ──────────────────
    // After each delta, wait COMPACT_DEBOUNCE_MS of silence,
    // then rewrite the profile with a fresh state snapshot.
    // A new device gets the latest profile + minimal deltas.

    function scheduleCompact() {
      if (compactTimer) clearTimeout(compactTimer);
      compactTimer = setTimeout(function () {
        compactTimer = null;
        compactProfile();
      }, COMPACT_DEBOUNCE_MS);
    }
    function compactProfile() {
      var now = Date.now();

      // Rate limit: do not compact more than once per COMPACT_MIN_INTERVAL
      if (now - compactLastRun < COMPACT_MIN_INTERVAL) {
        var remaining = COMPACT_MIN_INTERVAL - (now - compactLastRun);
        if (compactTimer) clearTimeout(compactTimer);
        compactTimer = setTimeout(function () {
          compactTimer = null;
          compactProfile();
        }, remaining);
        return;
      }
      var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      var channelId = getChannelId();
      if (!profilesTopicId || !activeId || !channelId) return;
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;

      // Get current profile message — from there name, avatar, meta
      client.getMessages(channelId, profilesTopicId, 50).then(function (msgs) {
        var target = findMessageById(msgs, activeId);
        if (!target) return;
        var captionProfile = parseCaption(target.text);
        var profileName = captionProfile && captionProfile.name || Lampa.Storage.get(STORAGE_KEYS.ACTIVE_PROFILE_NAME, '') || 'Unnamed';
        var profileAvatar = captionProfile && captionProfile.avatar || getAvatar(profileName);
        var ts = Math.floor(now / 1000);

        // Save source metadata (e.g. cub, source_id)
        var fullMsg = parseProfileMessage(target.text);
        var srcMeta = {};
        if (fullMsg && fullMsg.meta && fullMsg.meta.source) {
          srcMeta.source = fullMsg.meta.source;
          srcMeta.source_id = fullMsg.meta.source_id;
        }
        var caption = buildCaption({
          name: profileName,
          avatar: profileAvatar,
          updated: ts
        }, srcMeta);
        var fileData = buildFileData({
          name: profileName,
          avatar: profileAvatar,
          bookmarks: {
            favorite: collectFavorite()
          },
          timeline: collectTimeline(),
          plugins: collectPlugins(),
          settings: collectSettings()
        });
        var fileJson = JSON.stringify(fileData, null, 2);
        var fileName = buildProfileFileName(profileName, ts);
        client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
          if (!newMsgId) return;

          // Delete old profile
          client.deleteMessage(channelId, parseInt(activeId, 10)).catch(function () {});

          // Update active reference
          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(ts));
          compactLastRun = now;

          // Shift delta cursor to compaction time so we don't replay
          // deltas already accounted for in the fresh snapshot
          var currentSeen = getLastDeltaSeen();
          if (ts > currentSeen) setLastDeltaSeen(ts);
        }).catch(function (err) {
          console.warn('GramLink', 'Compact profile failed:', err && err.message);
        });
      }).catch(function () {});
    }

    // ─── Startup auto-activation ────────────────────────────

    function startAutoActivation(profilesTopicId, profilesSyncTopicId) {
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!activeId) return;
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = findMessageById(msgs, activeId);
        if (!target) {
          Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, '');
          return;
        }
        return client.downloadMessageFile(target).then(function (fileData) {
          if (!fileData) return;
          var data;
          try {
            data = JSON.parse(fileData);
          } catch (e) {
            return;
          }

          // ── Start auto-activation with device overlays ──
          if (data.plugins) {
            var deviceId = getDeviceId();
            var override = data.device_overrides && data.device_overrides[deviceId];

            // Build profile plugin URL list from current profile data
            var profileUrls = [];
            for (var pi = 0; pi < data.plugins.length; pi++) {
              var pu = data.plugins[pi].url;
              if (pu) profileUrls.push(pu);
            }

            // Read previously-saved profile plugin URLs
            var knownProfileUrls;
            try {
              knownProfileUrls = JSON.parse(Lampa.Storage.get(STORAGE_PROFILE_PLUGIN_URLS, '[]')) || [];
            } catch (e) {
              knownProfileUrls = [];
            }
            var knownMap = {};
            for (var ki = 0; ki < knownProfileUrls.length; ki++) {
              knownMap[knownProfileUrls[ki]] = true;
            }

            // Save current profile URLs for next activation
            Lampa.Storage.set(STORAGE_PROFILE_PLUGIN_URLS, JSON.stringify(profileUrls));

            // Start with local plugins
            var localPlugins = collectPlugins();
            var localByUrl = {};
            for (var li = 0; li < localPlugins.length; li++) {
              localByUrl[localPlugins[li].url] = localPlugins[li];
            }

            // Profile URL → plugin map
            var profileByUrl = {};
            for (var pi2 = 0; pi2 < data.plugins.length; pi2++) {
              profileByUrl[data.plugins[pi2].url] = data.plugins[pi2];
            }
            var merged = [];
            var mergedUrls = {};

            // 1. Existing local plugins — apply profile overrides
            for (var li2 = 0; li2 < localPlugins.length; li2++) {
              var lp = localPlugins[li2];
              var profileMatch = profileByUrl[lp.url];
              if (profileMatch) {
                var ds = override && override.plugins_status && override.plugins_status[lp.url];
                var dc = override && override.plugins_custom && override.plugins_custom[lp.url];
                merged.push({
                  url: lp.url,
                  name: profileMatch.name || lp.name,
                  status: ds !== undefined ? ds : profileMatch.status,
                  custom: dc !== undefined ? dc : profileMatch.custom || lp.custom
                });
              } else {
                merged.push({
                  url: lp.url,
                  name: lp.name,
                  status: lp.status !== undefined ? lp.status : 1,
                  custom: lp.custom
                });
              }
              mergedUrls[lp.url] = true;
            }

            // 2. NEW profile plugins (cross-device additions)
            for (var pi3 = 0; pi3 < data.plugins.length; pi3++) {
              var pp = data.plugins[pi3];
              if (!pp.url) continue;
              if (mergedUrls[pp.url]) continue;
              // Known but user removed locally → skip
              if (knownMap[pp.url] && !localByUrl[pp.url]) continue;
              var ds2 = override && override.plugins_status && override.plugins_status[pp.url];
              var dc2 = override && override.plugins_custom && override.plugins_custom[pp.url];
              merged.push({
                url: pp.url,
                name: pp.name,
                status: ds2 !== undefined ? ds2 : pp.status,
                custom: dc2 !== undefined ? dc2 : pp.custom
              });
              mergedUrls[pp.url] = true;
            }

            // 3. Safeguard: GramLink must always be present
            // Use auto-detected URL (release or dev), check by URL pattern
            var glTargetUrl = window.__gramlink_self_url || './plugins/GramLink.js';
            var glPresent = false;
            for (var _glu in mergedUrls) {
              if (_glu.indexOf('GramLink.js') >= 0 || _glu.indexOf('gramlink') >= 0) {
                glPresent = true;
                break;
              }
            }
            if (!glPresent) {
              merged.push({
                url: glTargetUrl,
                name: 'GramLink',
                status: 1,
                custom: {}
              });
            }
            Lampa.Storage.set('plugins', merged);
          }
          if (data.settings) {
            var deviceId2 = getDeviceId();
            var override2 = data.device_overrides && data.device_overrides[deviceId2];
            var devSettings = override2 && override2.settings || {};
            if (data.settings.sync_enabled !== undefined) Lampa.Storage.set('gramlink_sync_enabled', devSettings.gramlink_sync_enabled !== undefined ? devSettings.gramlink_sync_enabled : data.settings.sync_enabled);
            if (data.settings.heartbeat !== undefined) Lampa.Storage.set('gramlink_heartbeat', devSettings.gramlink_heartbeat !== undefined ? devSettings.gramlink_heartbeat : data.settings.heartbeat);
            if (data.settings.broadcast !== undefined) Lampa.Storage.set('gramlink_broadcast', devSettings.broadcast !== undefined ? devSettings.broadcast : data.settings.broadcast);

            // Generic device-scoped keys from device_overrides.settings
            Object.keys(devSettings).forEach(function (key) {
              if (key === 'gramlink_sync_enabled' || key === 'gramlink_heartbeat' || key === 'gramlink_broadcast') return;
              Lampa.Storage.set(key, devSettings[key]);
            });
          }

          // ── Bookmarks & Timeline (never applied before) ──
          if (data.bookmarks && data.bookmarks.favorite) {
            suppressPublish();
            Lampa.Storage.set('favorite', data.bookmarks.favorite);
            if (Lampa.Favorite && Lampa.Favorite.read) {
              Lampa.Favorite.read();
            }
            unsuppressPublish();
          }
          if (data.timeline) {
            Lampa.Storage.set('file_view', data.timeline);
          }

          // ── Profile name from caption ──
          var captionProfile = parseCaption(target.text);
          var captionName = captionProfile && captionProfile.name;
          if (captionName) Lampa.Storage.set('gramlink_active_profile_name', captionName);
        });
      }).catch(function () {});
    }

    // ─── Delta apply (called from hub.js event + GramLink.js polling) ──

    function applyDelta(data) {
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!data || !data.meta || String(data.meta.profile_msg_id) !== String(activeId)) return;
      // Skip own messages to prevent feedback loop: delta → Favorite.add → listener → publishDelta → poll → delta...
      if (data.meta.device_id === getDeviceId()) return;
      // Device-* delta must target this device or 'all'
      if (data.meta.subtype && data.meta.subtype.indexOf('device_') === 0) {
        var target = data.meta.target_device_id || 'all';
        if (target !== 'all' && target !== getDeviceId()) return;
      }
      var payload = data.payload;
      var sub = data.meta.subtype;
      if (sub === 'bookmark_add' && payload.card_id && payload.card) {
        if (Lampa.Favorite && Lampa.Favorite.add) {
          suppressPublish();
          Lampa.Favorite.add(payload.type, payload.card);
          unsuppressPublish();
        }
      } else if (sub === 'bookmark_remove' && payload.card_id) {
        if (Lampa.Favorite && Lampa.Favorite.remove) {
          suppressPublish();
          Lampa.Favorite.remove(payload.type, {
            id: payload.card_id
          });
          unsuppressPublish();
        }
      } else if (sub === 'timecode_update' && payload.hash) {
        var tl = Lampa.Storage.get('file_view', {});
        tl[payload.hash] = {
          time: payload.time,
          duration: payload.duration,
          percent: payload.percent
        };
        Lampa.Storage.set('file_view', tl);
      } else if (sub === 'plugin_change') {
        var plugins = Lampa.Storage.get('plugins', []);
        if (payload.action === 'add') plugins.push(payload.plugin);else if (payload.action === 'remove') {
          plugins = plugins.filter(function (p) {
            return p.url !== payload.plugin.url;
          });
        } else if (payload.action === 'toggle') {
          plugins.forEach(function (p) {
            if (p.url === payload.plugin.url) p.status = payload.plugin.status;
          });
        }
        Lampa.Storage.set('plugins', plugins);
      } else if (sub === 'device_plugin_status') {
        var plugins2 = Lampa.Storage.get('plugins', []);
        plugins2.forEach(function (p) {
          if (p.url === payload.url) p.status = payload.status;
        });
        Lampa.Storage.set('plugins', plugins2);
      } else if (sub === 'device_setting') {
        if (payload.key) Lampa.Storage.set(payload.key, payload.value);
      }
    }
    function refreshDeltas() {
      var profilesSyncTopicId = Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC$1, '');
      if (!profilesSyncTopicId) return;
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      var lastSeen = getLastDeltaSeen();
      client.getMessagesSince(profilesSyncTopicId, lastSeen, 30).then(function (msgs) {
        var newest = lastSeen;
        msgs.forEach(function (m) {
          if (m.date > newest) newest = m.date;
          try {
            var d = JSON.parse(stripCodeFence$1(m.text));
            if (d && d.meta && d.meta.type === 'profile_delta') {
              applyDelta(d);
            }
          } catch (e) {}
        });
        if (newest > lastSeen) {
          setLastDeltaSeen(newest);
        }
      }).catch(function () {});
    }
    function isSkipPublish() {
      return _publishSuppressed > 0;
    }
    function suppressPublish() {
      _publishSuppressed++;
    }
    function unsuppressPublish() {
      if (_publishSuppressed > 0) _publishSuppressed--;
    }

    // ─── Offline Profile Backup/Restore ──────────────────────

    function backupProfileOffline(profileMsgId) {
      SYNC_KEY_MANIFEST.storage.forEach(function (s) {
        var val = Lampa.Storage.get(s.key, '');
        if (val !== '' && val !== null && val !== undefined) {
          Lampa.Storage.set(BACKUP_PREFIX + profileMsgId + '_' + s.key, val);
        }
      });
    }
    function restoreProfileOffline(profileMsgId) {
      SYNC_KEY_MANIFEST.storage.forEach(function (s) {
        var backupKey = BACKUP_PREFIX + profileMsgId + '_' + s.key;
        var val = Lampa.Storage.get(backupKey, '');
        if (val !== '' && val !== null && val !== undefined) {
          Lampa.Storage.set(s.key, val);
        } else {
          // Try JSON parse/stringify for object-type values
          try {
            var parsed = JSON.parse(val);
            Lampa.Storage.set(s.key, parsed);
          } catch (e) {}
        }
      });
      // Re-read
      suppressPublish();
      if (Lampa.Favorite && Lampa.Favorite.read) Lampa.Favorite.read();
      unsuppressPublish();
    }

    // ─── Quick switch (from sidebar, full reload) ──────────────

    function quickSwitchProfile(msgId) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected');
        return;
      }
      var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
      var profilesSyncTopicId = Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC$1, '');
      if (!profilesTopicId) {
        Lampa.Noty.show('Sync not ready');
        return;
      }
      if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
        Lampa.Noty.show('Already active');
        return;
      }
      Lampa.Loading.start();
      var currentId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (currentId) {
        autoSaveProfile(currentId, profilesTopicId);
      }
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = findMessageById(msgs, msgId);
        if (!target) {
          Lampa.Loading.stop();
          Lampa.Noty.show('Profile not found');
          return;
        }
        return client.downloadMessageFile(target).then(function (fileData) {
          if (!fileData) {
            Lampa.Loading.stop();
            Lampa.Noty.show('Profile not found');
            return;
          }
          var profileData,
            fileTimestamp = target.date || 0;
          try {
            profileData = JSON.parse(fileData);
          } catch (e) {
            Lampa.Loading.stop();
            Lampa.Noty.show('Invalid data');
            return;
          }
          var captionProfile = parseCaption(target.text);
          var profileName = captionProfile && captionProfile.name;
          if (profileName) Lampa.Storage.set('gramlink_active_profile_name', profileName);
          return replayDeltas(profilesSyncTopicId, msgId, fileTimestamp, profileData).then(function (mergedData) {
            applyProfileData(mergedData, msgId);
            updateSyncTimestamp('favorite');
            updateSyncTimestamp('file_view');
            updateSyncTimestamp('plugins');
            Lampa.Loading.stop();
            softRefresh(); // ponytail: avoid full page reload
          });
        });
      }).catch(function (e) {
        Lampa.Loading.stop();
        console.error('GramLink', 'Quick switch error:', e);
        Lampa.Noty.show('Switch failed');
      });
    }
    var Profiles = {
      refreshProfiles: refreshProfiles,
      createProfile: createProfile,
      applyProfileData: applyProfileData,
      getAvatar: getAvatar,
      avatarColor: avatarColor,
      saveProfilesCache: saveProfilesCache,
      startAutoActivation: startAutoActivation,
      publishLocalDelta: publishLocalDelta,
      publishDeviceDelta: publishDeviceDelta,
      isDeviceKey: isDeviceKey,
      collectDeviceScopedSettings: collectDeviceScopedSettings,
      applyDelta: applyDelta,
      refreshDeltas: refreshDeltas,
      softRefresh: softRefresh,
      backupProfileOffline: backupProfileOffline,
      restoreProfileOffline: restoreProfileOffline,
      updateSyncTimestamp: updateSyncTimestamp,
      getSyncTimestamp: getSyncTimestamp,
      clearSyncTimestamps: clearSyncTimestamps,
      resetDeviceOverlay: resetDeviceOverlay,
      getCachedProfiles: getCachedProfiles,
      quickSwitchProfile: quickSwitchProfile,
      syncProfile: syncProfile,
      renameProfile: renameProfile,
      refreshCacheFromTelegram: refreshCacheFromTelegram,
      getPluginRegistry: getPluginRegistry,
      addToPluginRegistry: addToPluginRegistry,
      removeFromPluginRegistry: removeFromPluginRegistry
    };

    /**
     * sdk/reload-prompt.js — Native-style reload prompt after plugin changes
     *
     * Copies pattern from src/interaction/extensions/utils.js → showReload():
     * modal "Reboot required" with Yes/No.
     *
     * Usage:
     *   import { showReloadPrompt } from '../sdk/reload-prompt'
     *   showReloadPrompt(function() { Lampa.Activity.backward() })
     */

    // ponytail: exact copy of native Extensions modal for consistent UX
    function showReloadPrompt(onCancel) {
      Lampa.Modal.open({
        title: '',
        align: 'center',
        zIndex: 300,
        html: $('<div class="about">' + (Lampa.Lang.translate('plugins_need_reload') || 'Reboot required for changes to take effect') + '</div>'),
        buttons: [{
          name: Lampa.Lang.translate('settings_param_no') || 'No',
          onSelect: function onSelect() {
            Lampa.Modal.close();
            if (onCancel) onCancel();
          }
        }, {
          name: Lampa.Lang.translate('settings_param_yes') || 'Yes',
          onSelect: function onSelect() {
            window.location.reload();
          }
        }]
      });
    }

    /**
     * plugin_manager.js — GramLink Plugin Manager
     *
     * Activity component for viewing and editing the profile's plugin list.
     * Built on the native Lampa Component pattern (Lampa.Scroll + .settings-folder).
     * Public API PluginManager.open() preserved for settings.js and profiles.js.
     */
    function PluginManagerComponent(object) {
      var self = this;
      var scroll = null;
      var last = null;
      var plugins = object._plugins || [];
      var isActive = object._isActive || false;
      var profileMsgId = object._profileMsgId;
      var profileName = object._profileName || 'Unnamed';
      var originalData = object._originalData || null;

      // ─── Lifecycle ──────────────────────────────────────────

      self.create = function () {
        scroll = new Lampa.Scroll({
          mask: true,
          over: true
        });
        self.html = $('<div class="gramlink-activity"></div>');
        scroll.render().addClass('gramlink-scroll');
        self.html.append(scroll.render());
        scroll.onWheel = function (step) {
          if (!last) return;
          Navigator.move(step > 0 ? 'down' : 'up');
        };
        scroll.render().on('hover:focus', function (e) {
          last = e.target;
          scroll.update($(e.target), true);
        });
        scroll.render().on('hover:hover hover:touch', function (e) {
          last = e.target;
        });
        renderPluginList();
        return self.render();
      };
      self.render = function () {
        return self.html;
      };
      self.start = function () {
        Lampa.Controller.add('gramlink_plugins', {
          // ponytail: unique controller name
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render());
            var focus = last && $(last).closest('body').length ? last : false;
            Lampa.Controller.collectionFocus(focus, scroll.render());
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            Navigator.move('right');
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        });
        Lampa.Controller.toggle('gramlink_plugins');
      };
      self.pause = function () {};
      self.stop = function () {};
      self.destroy = function () {
        if (self.__destroyed) return;
        self.__destroyed = true;
        try {
          $(scroll.body()).find('.gs-plugin-item, .gs-plugin-add').off();
        } catch (e) {} // ponytail: unbind item events
        try {
          if (scroll) scroll.destroy();
        } catch (e) {}
        try {
          self.html.remove();
        } catch (e) {}
        last = null; // ponytail: clear ref
      };
      self.back = function () {
        Lampa.Activity.backward();
      };

      // ─── Render plugin list ─────────────────────────────────

      function renderPluginList() {
        scroll.clear();
        if (plugins.length === 0) {
          scroll.body().append('<div class="settings-param-title"><span>' + (Lampa.Lang.translate('gramlink_plugins_empty') || 'No plugins') + '</span></div>');
        } else {
          plugins.forEach(function (plugin, idx) {
            scroll.body().append(renderPluginItem(plugin, idx));
          });
        }
        scroll.body().append(renderAddButton());
        bindItemEvents();
      }
      function renderPluginItem(plugin, idx) {
        var isOn = plugin.status === 1;
        return $('<div class="settings-folder selector gs-plugin-item" data-idx="' + idx + '">' + '<div class="settings-folder__icon">' + '<div class="gs-plugin-toggle ' + (isOn ? 'on' : 'off') + '">' + (isOn ? '●' : '○') + '</div>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + escHtml(plugin.name || 'Plugin') + '</div>' + '<div class="settings-folder__sub">' + escHtml(truncateUrl(plugin.url)) + '</div>' + '</div>' + '</div>');
      }
      function renderAddButton() {
        return $('<div class="settings-folder selector gs-plugin-add">' + '<div class="settings-folder__icon">' + '<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + (Lampa.Lang.translate('gramlink_plugins_add') || 'Add plugin') + '</div>' + '</div>' + '</div>');
      }

      // ─── Event binding ──────────────────────────────────────

      function bindItemEvents() {
        scroll.render().find('.gs-plugin-item').on('hover:enter', function () {
          var idx = parseInt($(this).data('idx'), 10);
          if (plugins[idx]) showPluginMenu(plugins[idx], idx);
        });
        scroll.render().find('.gs-plugin-item').on('hover:long', function () {
          var idx = parseInt($(this).data('idx'), 10);
          if (plugins[idx]) doToggle(plugins[idx], idx);
        });
        scroll.render().find('.gs-plugin-add').on('hover:enter', function () {
          doAddPlugin();
        });
      }

      // ─── Submenu for a specific plugin ───────────────────────

      function showPluginMenu(plugin, idx) {
        if (!plugin) return;
        var isOn = plugin.status === 1;
        var prevController = Lampa.Controller.enabled().name;
        Lampa.Select.show({
          title: plugin.name || plugin.url,
          items: [{
            title: Lampa.Lang.translate(isOn ? 'gramlink_plugins_toggle_off' : 'gramlink_plugins_toggle_on') || (isOn ? 'Disable' : 'Enable'),
            _do: 'toggle'
          }, {
            title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Edit name',
            _do: 'edit_name'
          }, {
            title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Edit URL',
            _do: 'edit_url'
          }, {
            title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
            _do: 'remove'
          }, {
            title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
            _do: 'cancel'
          }],
          onBack: function onBack() {
            Lampa.Controller.toggle(prevController);
          },
          onSelect: function onSelect(item) {
            if (item._do === 'toggle') {
              doToggle(plugin, idx);
            } else if (item._do === 'edit_name') {
              doEditPluginName(plugin, idx);
            } else if (item._do === 'edit_url') {
              doEditPluginUrl(plugin, idx);
            } else if (item._do === 'remove') {
              doRemoveConfirm(plugin, idx);
            } else {
              Lampa.Controller.toggle(prevController);
            }
          }
        });
      }
      function doEditPluginName(plugin, idx) {
        input({
          title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Plugin name',
          value: plugin.name || '',
          onSubmit: function onSubmit(newName) {
            if (!newName || !newName.trim()) return;
            plugin.name = newName.trim();
            plugins[idx] = plugin;
            if (isActive) {
              var live = collectPlugins();
              live.forEach(function (p) {
                if (p.url === plugin.url) p.name = plugin.name;
              });
              Lampa.Storage.set('plugins', live);
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_edited') || 'Plugin updated');
            }
            if (!isActive) {
              saveSnapshot(function () {
                reRender();
              });
              return;
            }
            reRender();
            showReloadPrompt();
          }
        });
      }
      function doEditPluginUrl(plugin, idx) {
        input({
          title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Plugin URL',
          value: plugin.url || '',
          onSubmit: function onSubmit(newUrl) {
            if (!newUrl || !newUrl.trim()) return;
            newUrl = newUrl.trim();
            if (!newUrl.match(/^https?:\/\/.+/i)) {
              Lampa.Noty.show('Invalid URL');
              return;
            }
            var oldUrl = plugin.url;
            plugin.url = newUrl;
            plugins[idx] = plugin;
            if (isActive) {
              var live = collectPlugins();
              // ponytail: match by old URL since live is a copy from storage
              live.forEach(function (p) {
                if (p.url === oldUrl) {
                  p.url = newUrl;
                  p.name = plugin.name;
                }
              });
              Lampa.Storage.set('plugins', live);
              publishDelta('toggle', {
                url: newUrl,
                name: plugin.name,
                status: plugin.status
              });
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_edited') || 'Plugin updated');
            }
            if (!isActive) {
              saveSnapshot(function () {
                reRender();
              });
              return;
            }
            reRender();
            showReloadPrompt();
          }
        });
      }

      // ─── Actions ────────────────────────────────────────────

      function doToggle(plugin, idx) {
        plugin.status = plugin.status === 1 ? 0 : 1;
        plugins[idx] = plugin;
        if (isActive) {
          var live = collectPlugins();
          live.forEach(function (p) {
            if (p.url === plugin.url) p.status = plugin.status;
          });
          Lampa.Storage.set('plugins', live);
          publishDelta('toggle', {
            url: plugin.url,
            name: plugin.name,
            status: plugin.status
          });
          Lampa.Noty.show((plugin.name || 'Plugin') + ': ' + (plugin.status === 1 ? 'enabled' : 'disabled'));
        }
        if (!isActive) {
          saveSnapshot(function () {
            reRender();
          });
          return;
        }
        reRender();
        // ponytail: reload so Plugins._loaded syncs with storage
        showReloadPrompt();
      }
      function doAddPlugin() {
        input({
          title: Lampa.Lang.translate('gramlink_plugins_add_url') || 'Plugin URL (.js)',
          align: 'center',
          onCancel: function onCancel() {
            reRender();
          },
          onSubmit: function onSubmit(url) {
            if (!url) {
              reRender();
              return;
            }
            url = url.trim();
            if (!url.match(/^https?:\/\/.+/i)) {
              Lampa.Noty.show('Invalid URL');
              reRender();
              return;
            }
            if (plugins.some(function (p) {
              return p.url === url;
            })) {
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_already_installed') || 'Already installed');
              reRender();
              return;
            }
            var guessedName = extractNameFromUrl(url);
            input({
              title: Lampa.Lang.translate('gramlink_plugins_name') || 'Plugin name',
              align: 'center',
              value: guessedName,
              onSubmit: function onSubmit(name) {
                var newPlugin = {
                  url: url,
                  name: name && name.trim() || guessedName,
                  status: 1,
                  custom: {}
                };
                plugins.push(newPlugin);
                if (isActive) {
                  var live = collectPlugins();
                  live.push(newPlugin);
                  Lampa.Storage.set('plugins', live);
                  publishDelta('add', newPlugin);
                  Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_added') || 'Plugin added');
                  reRender();
                  // ponytail: reload so Plugins._loaded syncs with storage
                  showReloadPrompt();
                } else {
                  saveSnapshot(function () {
                    reRender();
                  });
                }
              }
            });
          }
        });
      }
      function doRemoveConfirm(plugin, idx) {
        var prevController = Lampa.Controller.enabled().name;
        Lampa.Select.show({
          title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove plugin',
          items: [{
            title: '"' + (plugin.name || plugin.url) + '" — ' + (Lampa.Lang.translate('gramlink_plugins_remove_confirm') || 'remove?'),
            noenter: true
          }, {
            title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
            _do: 'remove'
          }, {
            title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
            _do: 'cancel'
          }],
          onBack: function onBack() {
            Lampa.Controller.toggle(prevController);
          },
          onSelect: function onSelect(item) {
            if (item._do === 'remove') {
              plugins.splice(idx, 1);
              if (isActive) {
                var live = collectPlugins().filter(function (p) {
                  return p.url !== plugin.url;
                });
                Lampa.Storage.set('plugins', live);
                publishDelta('remove', {
                  url: plugin.url,
                  name: plugin.name,
                  status: plugin.status
                });
                Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_removed') || 'Plugin removed');
                reRender();
                // ponytail: reload so Plugins._loaded syncs with storage
                showReloadPrompt();
              } else {
                saveSnapshot(function () {
                  reRender();
                });
              }
            } else {
              Lampa.Controller.toggle(prevController);
            }
          }
        });
      }

      // ─── Save snapshot for inactive profile ──────────────────

      function saveSnapshot(onDone) {
        var client = GatewayClient.getInstance();
        var channelId = getChannelId();
        var topicId = Lampa.Storage.get('gramlink_profiles_topic', '');
        if (!client.isConnected() || !channelId || !topicId) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected') || 'Not connected');
          if (onDone) onDone();
          return;
        }
        var now = Math.floor(Date.now() / 1000);
        var fileData = buildFileData({
          name: profileName,
          plugins: deepClone(plugins),
          bookmarks: originalData && originalData.bookmarks || undefined,
          timeline: originalData && originalData.timeline || undefined,
          settings: originalData && originalData.settings || undefined,
          device_overrides: originalData && originalData.device_overrides || undefined
        });
        var caption = buildCaption({
          name: profileName,
          updated: now
        });
        var fileName = buildProfileFileName(profileName, now);
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_saving') || 'Saving…');
        client.sendFile(channelId, topicId, JSON.stringify(fileData, null, 2), fileName, caption).then(function (newMsgId) {
          if (newMsgId) {
            client.deleteMessage(channelId, profileMsgId).catch(function () {});
            var activeId = Lampa.Storage.get('gramlink_active_profile', '');
            if (String(activeId) === String(profileMsgId)) {
              Lampa.Storage.set('gramlink_active_profile', String(newMsgId));
            }
            profileMsgId = newMsgId;
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_saved') || 'Saved');
          } else {
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Save failed');
          }
          if (onDone) onDone();
        }).catch(function () {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Save failed');
          if (onDone) onDone();
        });
      }

      // ─── Delta publish ─────────────────────────────────────

      function publishDelta(action, plugin) {
        var syncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (!syncTopicId) return;
        Profiles.publishLocalDelta(syncTopicId, 'plugin_change', {
          action: action,
          plugin: plugin
        });
      }

      // ─── Re-render ─────────────────────────────────────────

      function reRender() {
        renderPluginList();
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    //  Load snapshot for inactive profile
    // ═══════════════════════════════════════════════════════════════════

    function loadSnapshotThenPush(profileMsgId, profileName) {
      var client = GatewayClient.getInstance();
      var channelId = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
      var topicId = Lampa.Storage.get('gramlink_profiles_topic', '');
      if (!channelId || !topicId) {
        Lampa.Noty.show('Sync channel not ready');
        return;
      }
      Lampa.Noty.show(Lampa.Lang.translate('gramlink_loading') || 'Loading…');
      client.getMessages(channelId, topicId, 50).then(function (msgs) {
        var target = null;
        msgs.forEach(function (m) {
          if (String(m.id) === String(profileMsgId)) target = m;
        });
        if (!target) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_profile_not_found') || 'Profile not found');
          return;
        }
        return client.downloadMessageFile(target).then(function (fileData) {
          if (!fileData) {
            Lampa.Noty.show('Could not load profile data');
            return;
          }
          try {
            var data = JSON.parse(fileData);
            setTimeout(function () {
              Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('gramlink_plugins_title').replace('{name}', profileName),
                component: 'gramlink_plugin_manager',
                page: 1,
                _plugins: deepClone(data.plugins || []),
                _isActive: false,
                _profileMsgId: profileMsgId,
                _profileName: profileName,
                _originalData: data
              });
            }, 200);
          } catch (e) {
            Lampa.Noty.show('Invalid profile data');
          }
        });
      }).catch(function () {
        Lampa.Noty.show('Could not load profile data');
      });
    }

    // ═══════════════════════════════════════════════════════════════════
    //  Public API
    // ═══════════════════════════════════════════════════════════════════

    var PluginManager = {
      open: function open(profileMsgId, profileName, isActive) {
        if (isActive) {
          var plugins = deepClone(collectPlugins());
          setTimeout(function () {
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('gramlink_plugins_title').replace('{name}', profileName || 'Unnamed'),
              component: 'gramlink_plugin_manager',
              page: 1,
              _plugins: plugins,
              _isActive: true,
              _profileMsgId: profileMsgId,
              _profileName: profileName || 'Unnamed'
            });
          }, 200);
        } else {
          if (!GatewayClient.getInstance().isConnected()) {
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
            return;
          }
          loadSnapshotThenPush(profileMsgId, profileName || 'Unnamed');
        }
      }
    };

    // ═══════════════════════════════════════════════════════════════════
    //  Helpers
    // ═══════════════════════════════════════════════════════════════════

    function truncateUrl(url) {
      if (!url) return '';
      try {
        var u = new URL(url);
        var host = u.hostname;
        var path = u.pathname.split('/').pop() || '';
        return host + '/…/' + path;
      } catch (e) {
        return url.length > 50 ? url.slice(0, 47) + '…' : url;
      }
    }

    /**
     * compat.js — GramJS compatibility checker
     *
     * Two groups of checks:
     *   - Syntax (BigInt literal, async/await, generators, ?.) — NOT polyfilled,
     *     fail at bundle parse stage with SyntaxError. Detected via new Function(snippet).
     *   - Runtime API (WebAssembly, crypto.subtle, Map/Set, Proxy) — check typeof,
     *     some are polyfilled, some not (BigInt64Array, Proxy).
     *
     * @returns {Object} { supported, blockers, warnings, details }
     */
    function checkGramJSCompatibility() {
      var blockers = [];
      var warnings = [];
      var details = {
        syntax: {},
        runtime: {}
      };

      // ── 1. Syntax probes
      function canParse(snippet) {
        try {
          new Function(snippet);
          return true;
        } catch (e) {
          return false;
        }
      }
      details.syntax.arrowFn = canParse('()=>{}');
      details.syntax.letConst = canParse('let a=1; const b=2;');
      details.syntax.templateLit = canParse('var x=`y`; var y=`${x}`;');
      details.syntax.classKw = canParse('class X{}');
      details.syntax.asyncAwait = canParse('async function f(){await 1;}');
      details.syntax.generator = canParse('function* g(){yield 1;}');
      details.syntax.bigIntLit = canParse('1n; 2n+3n;');
      details.syntax.optChain = canParse('({})?.x; ({})?.[0]');
      details.syntax.exponent = canParse('2**3;');
      details.syntax.spread = canParse('var a=[1]; var b=[...a]; function f(...c){}');
      details.syntax.destructuring = canParse('var {a}={a:1}; var [b]=[1];');
      details.syntax.defaultParam = canParse('function f(a=1){}');

      // ── 2. Runtime API checks
      details.runtime.bigInt = typeof BigInt !== 'undefined';
      details.runtime.bigInt64Array = typeof BigInt64Array !== 'undefined';
      details.runtime.webAssembly = typeof WebAssembly !== 'undefined' && typeof WebAssembly.instantiate === 'function';
      details.runtime.cryptoSubtle = !!(window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === 'function');
      details.runtime.cryptoRandom = !!(window.crypto && typeof window.crypto.getRandomValues === 'function');
      details.runtime.textEncoder = typeof TextEncoder !== 'undefined';
      details.runtime.textDecoder = typeof TextDecoder !== 'undefined';
      details.runtime.promise = typeof Promise !== 'undefined';
      details.runtime.mapSet = typeof Map !== 'undefined' && typeof Set !== 'undefined';
      details.runtime.weakMap = typeof WeakMap !== 'undefined';
      details.runtime.proxy = typeof Proxy !== 'undefined';
      details.runtime.uint8Array = typeof Uint8Array !== 'undefined';
      details.runtime.arrayFrom = typeof Array.from === 'function';
      details.runtime.objectAssign = typeof Object.assign === 'function';

      // ── 3. Classification: BLOCKERS vs WARNINGS
      if (!details.syntax.bigIntLit || !details.runtime.bigInt) {
        blockers.push('BigInt — 206× у бандлі, MTProto int128/int256, RSA, DH. Не поліфиться.');
      }
      if (!details.runtime.bigInt64Array) {
        blockers.push('BigInt64Array — 6×, TDLib-подібна серіалізація. Не поліфиться.');
      }
      if (!details.syntax.asyncAwait) {
        blockers.push('async/await — 64× async + 405× await. Синтаксично, не поліфиться.');
      }
      if (!details.syntax.generator) {
        blockers.push('Generators (function*) — 11×, async iteration helpers. Не поліфиться.');
      }
      if (!details.syntax.arrowFn) {
        blockers.push('Arrow functions — 246×, синтаксично.');
      }
      if (!details.syntax.optChain) {
        blockers.push('Optional chaining (?.) — 2×, ES2020. Синтаксично.');
      }
      if (!details.syntax.exponent) {
        blockers.push('Exponent operator (**) — 17×. Синтаксично.');
      }
      if (!details.runtime.cryptoSubtle) {
        warnings.push('crypto.subtle — немає (HTTP-контекст). TGSBundle має pure-JS fallback для SHA-1/256/512, HMAC, PBKDF2. Повільніше, але працює.');
      }
      if (!details.runtime.cryptoRandom) {
        blockers.push('crypto.getRandomValues — генератор nonces у MTProto.');
      }
      if (!details.runtime.textEncoder || !details.runtime.textDecoder) {
        blockers.push('TextEncoder/TextDecoder — UTF-8 серіалізація string\'ів у MTProto.');
      }
      if (!details.runtime.uint8Array) {
        blockers.push('Uint8Array — бінарні дані всюди.');
      }
      if (!details.runtime.webAssembly) {
        warnings.push('WebAssembly — AES-IGE fallback на pure-JS, ~5× повільніше.');
      }
      if (!details.runtime.proxy) {
        warnings.push('Proxy — 1×, може зламати окремі reactive-обгортки.');
      }
      if (!details.runtime.mapSet) {
        warnings.push('Map/Set — поліфляться core-js, але без них GramJS не стартане.');
      }
      if (!details.runtime.promise) {
        blockers.push('Promise — 68×, основа асинхронного потоку.');
      }
      return {
        supported: blockers.length === 0,
        blockers: blockers,
        warnings: warnings,
        details: details
      };
    }
    var _gramlinkCompatReport = null;
    function getCompatReport() {
      if (!_gramlinkCompatReport) _gramlinkCompatReport = checkGramJSCompatibility();
      return _gramlinkCompatReport;
    }
    function showCompatReportModal() {
      var report = getCompatReport();
      var enabledCtrl = Lampa.Controller.enabled().name;
      var closing = false; // re-entrance guard

      var statusColor = report.supported ? report.warnings.length ? '#ffc107' : '#4caf50' : '#f44336';
      var statusText = report.supported ? report.warnings.length ? Lampa.Lang.translate('gramlink_compat_partial') : Lampa.Lang.translate('gramlink_compat_ok') : Lampa.Lang.translate('gramlink_compat_fail');
      var html = $('<div class="gramlink-compat" style="padding:1em;max-width:42em;margin:0 auto"></div>');
      html.append('<div style="display:flex;align-items:center;gap:1em;padding:1em 1.2em;' + 'background:rgba(255,255,255,0.05);border-radius:0.6em;margin-bottom:1.5em">' + '<div style="width:1.2em;height:1.2em;border-radius:50%;flex-shrink:0;background:' + statusColor + ';box-shadow:0 0 .6em ' + statusColor + '80"></div>' + '<div style="flex:1">' + '<div style="font-size:1.2em;font-weight:600">' + statusText + '</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.5);margin-top:.2em">' + Lampa.Lang.translate('gramlink_compat_hint_disclaimer') + '</div>' + '</div></div>');
      if (report.blockers.length > 0) {
        html.append('<div style="font-size:1.1em;font-weight:600;margin-bottom:.8em;color:#f44336">' + Lampa.Lang.translate('gramlink_compat_blocked_label') + ' (' + report.blockers.length + ')</div>');
        var bl = $('<ul style="list-style:none;padding:0;margin:0 0 1.5em"></ul>');
        report.blockers.forEach(function (b) {
          bl.append('<li style="padding:.6em .8em;margin-bottom:.4em;background:rgba(244,67,54,0.1);' + 'border-left:3px solid #f44336;border-radius:0 .4em .4em 0;font-size:.95em">' + b + '</li>');
        });
        html.append(bl);
      } else {
        html.append('<div style="padding:.8em 1em;background:rgba(76,175,80,0.1);border-left:3px solid #4caf50;' + 'border-radius:0 .4em .4em 0;font-size:.95em;margin-bottom:1.5em">' + Lampa.Lang.translate('gramlink_compat_no_blockers') + '</div>');
      }
      if (report.warnings.length > 0) {
        html.append('<div style="font-size:1.1em;font-weight:600;margin-bottom:.8em;color:#ffc107">' + Lampa.Lang.translate('gramlink_compat_warning_label') + ' (' + report.warnings.length + ')</div>');
        var wn = $('<ul style="list-style:none;padding:0;margin:0 0 1.5em"></ul>');
        report.warnings.forEach(function (w) {
          wn.append('<li style="padding:.6em .8em;margin-bottom:.4em;background:rgba(255,193,7,0.08);' + 'border-left:3px solid #ffc107;border-radius:0 .4em .4em 0;font-size:.95em">' + w + '</li>');
        });
        html.append(wn);
      }

      // ── Raw probe results (inline, scrollable — native Lampa pattern) ──
      var d = report.details;
      html.append('<div style="margin-top:1em;padding-top:0.8em;border-top:1px solid rgba(255,255,255,0.08)"></div>');
      html.append('<div class="settings-param-title"><span>Raw probe results</span></div>');
      html.append('<div style="display:grid;grid-template-columns:1fr 1fr;gap:1em;font-size:.85em;margin-top:.5em">' + '<div style="background:rgba(255,255,255,0.02);border-radius:.4em;padding:.5em .8em">' + '<div style="font-weight:600;margin-bottom:.4em;color:rgba(255,255,255,0.5)">Syntax</div>' + Object.keys(d.syntax).map(function (k) {
        var v = d.syntax[k];
        return '<div style="display:flex;justify-content:space-between;padding:.2em 0">' + '<span style="color:rgba(255,255,255,0.6)">' + k + '</span>' + '<span style="color:' + (v ? '#4caf50' : '#f44336') + '">' + (v ? "\u2713" : "\u2717") + '</span></div>';
      }).join('') + '</div>' + '<div style="background:rgba(255,255,255,0.02);border-radius:.4em;padding:.5em .8em">' + '<div style="font-weight:600;margin-bottom:.4em;color:rgba(255,255,255,0.5)">Runtime</div>' + Object.keys(d.runtime).map(function (k) {
        var v = d.runtime[k];
        return '<div style="display:flex;justify-content:space-between;padding:.2em 0">' + '<span style="color:rgba(255,255,255,0.6)">' + k + '</span>' + '<span style="color:' + (v ? '#4caf50' : '#f44336') + '">' + (v ? "\u2713" : "\u2717") + '</span></div>';
      }).join('') + '</div></div>');
      Lampa.Modal.open({
        title: Lampa.Lang.translate('gramlink_compat_title'),
        html: html,
        size: 'medium',
        onBack: function onBack() {
          if (closing) return;
          closing = true;
          Lampa.Modal.close();
          Lampa.Controller.toggle(enabledCtrl);
        }
      });
    }

    function initSettings() {
      var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
      if (!SettingsApi || !SettingsApi.addComponent) return;

      // ── Templates for nested components ──────────────────
      Lampa.Template.add('settings_gramlink_server', '<div></div>');
      Lampa.Template.add('settings_gramlink_connection', '<div></div>');
      Lampa.Template.add('settings_gramlink_sync_page', '<div></div>');
      Lampa.Template.add('settings_gramlink_tools', '<div></div>');
      // ── Main component (before Interface) ─────────────────
      SettingsApi.addComponent({
        component: 'gramlink',
        name: Lampa.Lang.translate('gramlink_title'),
        before: 'interface',
        icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.587.192l-8.533 7.77h-.001l.003.003-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.22c.309-1.239-.473-1.8-1.282-1.434z" fill="currentColor"/>' + '</svg>'
      });

      // ══════════════════════════════════════════════════════
      //  MAIN PAGE — section navigation
      // ══════════════════════════════════════════════════════

      // ── 1. Authorization ──────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_open_auth',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_section_auth')
        },
        onRender: function onRender(item) {
          var client = GatewayClient.getInstance();
          if (client.hasCredentials()) {
            var userName = Lampa.Storage.get('gramlink_user_name', '');
            item.find('.settings-param__name').text(Lampa.Lang.translate('gramlink_settings_auth_logout') + (userName ? ': ' + userName : ''));
          } else {
            item.find('.settings-param__name').text(Lampa.Lang.translate('gramlink_settings_section_auth'));
          }
        },
        onChange: function onChange() {
          var client = GatewayClient.getInstance();
          var enabledCtrl = Lampa.Controller.enabled().name;
          if (client.hasCredentials()) {
            Lampa.Modal.open({
              title: Lampa.Lang.translate('gramlink_settings_logout'),
              html: $('<div style="padding: 1em">' + Lampa.Lang.translate('gramlink_settings_logout_confirm') + '</div>'),
              buttons: [{
                name: Lampa.Lang.translate('gramlink_settings_logout'),
                onSelect: function onSelect() {
                  client.logout();
                  Lampa.Storage.set('gramlink_user_name', '');
                  Lampa.Modal.close();
                  Lampa.Settings.update();
                }
              }, {
                name: Lampa.Lang.translate('gramlink_title'),
                onSelect: function onSelect() {
                  Lampa.Modal.close();
                  Lampa.Controller.toggle(enabledCtrl);
                }
              }]
            });
          } else {
            var apiId = 24911245;
            var apiHash = 'af35604124d731e01a113639b905e10e';
            if (Lampa.Storage.get('gramlink_app_type', 'lampa') === 'custom') {
              apiId = parseInt(Lampa.Storage.get('gramlink_api_id', ''), 10);
              apiHash = Lampa.Storage.get('gramlink_api_hash', '');
            }
            if (!apiId || !apiHash) {
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_error_no_api'));
              return;
            }
            startLogin();
          }
        }
      });

      // ── 2. Synchronization ────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_open_sync',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_section_sync')
        },
        onChange: function onChange() {
          Lampa.Settings.create('gramlink_sync_page', {
            onBack: function onBack() {
              Lampa.Settings.create('gramlink');
            }
          });
        }
      });

      // ── 3. Tools ──────────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_open_tools',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_section_tools')
        },
        onChange: function onChange() {
          Lampa.Settings.create('gramlink_tools', {
            onBack: function onBack() {
              Lampa.Settings.create('gramlink');
            }
          });
        }
      });

      // ── 4. About plugin (opens directly) ──────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_open_about',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_section_about')
        },
        onChange: function onChange() {
          var html = '<div style="padding:1em">' + '<p>' + Lampa.Lang.translate('gramlink_about_description') + '</p>' + '<p><span style="opacity:0.5">' + Lampa.Lang.translate('gramlink_about_version') + ':</span> ' + VERSION + '</p>' + '<p><span style="opacity:0.5">' + Lampa.Lang.translate('gramlink_about_author') + ':</span>' + Lampa.Lang.translate('gramlink_about_link_author') + '</p>' + '</div>';
          var enabledCtrl = Lampa.Controller.enabled().name;
          Lampa.Select.show({
            title: Lampa.Lang.translate('gramlink_settings_about'),
            items: [{
              title: html,
              disabled: true
            }],
            onSelect: function onSelect() {
              Lampa.Controller.toggle(enabledCtrl);
            },
            onBack: function onBack() {
              Lampa.Controller.toggle(enabledCtrl);
            }
          });
        }
      });

      // ── 5. Connection ─────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_open_connection',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_section_connection')
        },
        onChange: function onChange() {
          Lampa.Settings.create('gramlink_connection', {
            onBack: function onBack() {
              Lampa.Settings.create('gramlink');
            }
          });
        }
      });

      // ── 6. (moved to Tools) ─────────────────────────────
      // ══════════════════════════════════════════════════════
      //  NESTED PAGE: Connection
      // ══════════════════════════════════════════════════════

      SettingsApi.addParam({
        component: 'gramlink_connection',
        param: {
          name: 'gramlink_open_server',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_server_type')
        },
        onChange: function onChange() {
          Lampa.Settings.create('gramlink_server', {
            onBack: function onBack() {
              Lampa.Settings.create('gramlink_connection', {
                onBack: function onBack() {
                  Lampa.Settings.create('gramlink');
                }
              });
            }
          });
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_connection',
        param: {
          name: 'gramlink_compat_btn',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_compat_title')
        },
        onRender: function onRender(item) {
          var report = getCompatReport();
          var cls = 'wait';
          if (report.supported && report.warnings.length === 0) {
            cls = 'active';
          } else if (!report.supported) {
            cls = 'error';
          }
          if (!item.find('.settings-param__status').length) {
            item.prepend('<div class="settings-param__status"></div>');
          }
          item.find('.settings-param__status').removeClass('active error wait').addClass(cls);
        },
        onChange: function onChange() {
          showCompatReportModal();
        }
      });

      // ══════════════════════════════════════════════════════
      //  NESTED PAGE: Synchronization
      // ══════════════════════════════════════════════════════

      SettingsApi.addParam({
        component: 'gramlink_sync_page',
        param: {
          name: 'gramlink_sync_enabled',
          type: 'trigger',
          default: false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_sync_enabled')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_sync_enabled', value);
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_sync_page',
        param: {
          name: 'gramlink_heartbeat',
          type: 'trigger',
          default: false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_sync_heartbeat')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_heartbeat', value);
          var client = GatewayClient.getInstance();
          if (value) {
            var channelId = Lampa.Storage.get('gramlink_channel_id', '');
            var syncLogTopicId = Lampa.Storage.get('gramlink_sync_log_topic', '');
            if (channelId && syncLogTopicId && client.isConnected()) {
              client.startHeartbeat(channelId, syncLogTopicId);
            }
          } else {
            client.stopHeartbeat();
          }
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_sync_page',
        param: {
          name: 'gramlink_broadcast',
          type: 'trigger',
          default: false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_sync_broadcast')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_broadcast', value);
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_sync_page',
        param: {
          name: 'gramlink_sync_timeout',
          type: 'select',
          values: {
            5: '5',
            10: '10',
            30: '30',
            60: '60'
          },
          default: '10'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_timeout'),
          description: Lampa.Lang.translate('gramlink_settings_timeout_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_sync_timeout', value);
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_sync_page',
        param: {
          name: 'gramlink_poll_interval',
          type: 'select',
          values: {
            5: '5',
            10: '10',
            30: '30'
          },
          default: '10'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_poll_interval'),
          description: Lampa.Lang.translate('gramlink_settings_poll_interval_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_poll_interval', value);
        }
      });

      // ══════════════════════════════════════════════════════
      //  NESTED PAGE: Tools
      // ══════════════════════════════════════════════════════

      SettingsApi.addParam({
        component: 'gramlink_tools',
        param: {
          name: 'gramlink_import_cub',
          type: 'button'
        },
        field: {
          name: 'Import from Cub'
        },
        description: 'Migrate Cub profiles to GramLink',
        onChange: function onChange() {
          var profilesTopicId = Lampa.Storage.get('gramlink_profiles_topic', '');
          if (!profilesTopicId) {
            Lampa.Noty.show('Sync channel not ready');
            return;
          }
          startMigration(profilesTopicId);
        }
      });

      // ponytail: avatar style moved here from main page
      SettingsApi.addParam({
        component: 'gramlink_tools',
        param: {
          name: 'gramlink_avatar_style',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_avatar_style'),
          description: Lampa.Lang.translate('gramlink_settings_avatar_style_desc')
        },
        onRender: function onRender(item) {
          var style = Lampa.Storage.get('gramlink_avatar_style', 'fun-emoji');
          var label = style ? style.charAt(0).toUpperCase() + style.slice(1) : Lampa.Lang.translate('gramlink_avatar_none');
          item.find('.settings-param__name').text(Lampa.Lang.translate('gramlink_settings_avatar_style'));
          if (!item.find('.gramlink-avatar-preview').length) {
            item.find('.settings-param__name').after('<span class="gramlink-avatar-preview" style="margin-left:0.5em;opacity:0.6"></span>');
          }
          item.find('.gramlink-avatar-preview').text(label);
        },
        onChange: function onChange() {
          openAvatarStyleSelect();
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_tools',
        param: {
          name: 'gramlink_manage_plugins',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_plugins_manage')
        },
        onRender: function onRender(item) {
          var activeId = Lampa.Storage.get('gramlink_active_profile', '');
          if (!activeId) item.addClass('hide');
        },
        onChange: function onChange() {
          var activeId = Lampa.Storage.get('gramlink_active_profile', '');
          var activeName = Lampa.Storage.get('gramlink_active_profile_name', '');
          if (!activeId) {
            Lampa.Noty.show('No active profile');
            return;
          }
          PluginManager.open(activeId, activeName || 'Active', true);
        }
      });

      // ═══════════════════════════════════════════════════════
      //  NESTED PAGE: Server Settings
      // ═══════════════════════════════════════════════════════

      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_app_type',
          type: 'select',
          values: {
            'lampa': 'gramlink_settings_app_lampa',
            'custom': 'gramlink_settings_app_custom'
          },
          default: 'lampa'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_app'),
          description: Lampa.Lang.translate('gramlink_settings_app_desc')
        },
        onChange: function onChange(value) {
          var show = value === 'custom';
          $('.scroll__body').find('[data-name="gramlink_api_id"]').toggleClass('hide', !show);
          $('.scroll__body').find('[data-name="gramlink_api_hash"]').toggleClass('hide', !show);
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_api_id',
          type: 'input',
          placeholder: '12345',
          values: '',
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_api_id'),
          description: Lampa.Lang.translate('gramlink_settings_api_id_desc')
        },
        onRender: function onRender(item) {
          toggleField(item, Lampa.Storage.get('gramlink_app_type', 'lampa') === 'custom');
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_api_id', value);
        }
      });
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_api_hash',
          type: 'input',
          placeholder: '0123456789abcdef0123456789abcdef',
          values: '',
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_api_hash'),
          description: Lampa.Lang.translate('gramlink_settings_api_hash_desc')
        },
        onRender: function onRender(item) {
          toggleField(item, Lampa.Storage.get('gramlink_app_type', 'lampa') === 'custom');
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_api_hash', value);
        }
      });

      // ── Server type: official / custom ─────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_server_type',
          type: 'select',
          values: {
            'official': 'gramlink_settings_server_type_official',
            'custom': 'gramlink_settings_server_type_custom',
            'gateway': 'Gateway (WebSocket Proxy)'
          },
          default: 'official'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_server_type')
        },
        onChange: function onChange(value) {
          var client = GatewayClient.getInstance();
          var oldVal = value === 'official' ? 'custom' : 'official';
          if (client.hasCredentials()) {
            Lampa.Modal.open({
              title: Lampa.Lang.translate('gramlink_settings_server_warning_title'),
              html: $('<div style="padding:1em">' + Lampa.Lang.translate('gramlink_settings_server_warning_desc') + '</div>'),
              buttons: [{
                name: Lampa.Lang.translate('gramlink_settings_server_confirm'),
                onSelect: function onSelect() {
                  client.logout();
                  Lampa.Storage.set('gramlink_user_name', '');
                  Lampa.Storage.set('gramlink_server_type', value);
                  if (value === 'custom') {
                    Lampa.Storage.set('gramlink_custom_host', Lampa.Storage.get('gramlink_custom_host', ''));
                    Lampa.Storage.set('gramlink_custom_port', Lampa.Storage.get('gramlink_custom_port', '443'));
                  }
                  $('.scroll__body').find('[data-name="gramlink_custom_host"]').toggleClass('hide', value !== 'custom');
                  $('.scroll__body').find('[data-name="gramlink_custom_port"]').toggleClass('hide', value !== 'custom');
                  $('.scroll__body').find('[data-name="gramlink_gateway_url"]').toggleClass('hide', value !== 'gateway');
                  Lampa.Modal.close();
                  Lampa.Settings.create('gramlink_server', {
                    onBack: function onBack() {
                      Lampa.Settings.create('gramlink_connection', {
                        onBack: function onBack() {
                          Lampa.Settings.create('gramlink');
                        }
                      });
                    }
                  });
                }
              }, {
                name: Lampa.Lang.translate('gramlink_settings_server_cancel'),
                onSelect: function onSelect() {
                  Lampa.Storage.set('gramlink_server_type', oldVal);
                  Lampa.Modal.close();
                  Lampa.Settings.create('gramlink_server', {
                    onBack: function onBack() {
                      Lampa.Settings.create('gramlink_connection', {
                        onBack: function onBack() {
                          Lampa.Settings.create('gramlink');
                        }
                      });
                    }
                  });
                }
              }]
            });
          } else {
            Lampa.Storage.set('gramlink_server_type', value);
            $('.scroll__body').find('[data-name="gramlink_custom_host"]').toggleClass('hide', value !== 'custom');
            $('.scroll__body').find('[data-name="gramlink_custom_port"]').toggleClass('hide', value !== 'custom');
            $('.scroll__body').find('[data-name="gramlink_gateway_url"]').toggleClass('hide', value !== 'gateway');
          }
        }
      });

      // ── Custom server host ─────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_custom_host',
          type: 'input',
          placeholder: 'custom.example.com',
          values: '',
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_server_custom_host')
        },
        onRender: function onRender(item) {
          toggleField(item, Lampa.Storage.get('gramlink_server_type', 'official') === 'custom');
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_custom_host', value);
        }
      });

      // ── Custom server port ─────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_custom_port',
          type: 'input',
          placeholder: '443',
          values: '',
          default: '443'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_server_custom_port')
        },
        onRender: function onRender(item) {
          toggleField(item, Lampa.Storage.get('gramlink_server_type', 'official') === 'custom');
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_custom_port', value);
        }
      });

      // ── Proxy: enabled ─────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_proxy_enabled',
          type: 'trigger',
          default: false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_title'),
          description: Lampa.Lang.translate('gramlink_settings_proxy_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_proxy_enabled', value);
          $('.scroll__body').find('[data-name="gramlink_proxy_host"]').toggleClass('hide', !GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
          $('.scroll__body').find('[data-name="gramlink_proxy_port"]').toggleClass('hide', !GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
          $('.scroll__body').find('[data-name="gramlink_proxy_secret"]').toggleClass('hide', !GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
          GatewayClient.getInstance().reconnect();
        }
      });

      // ── Proxy: host ────────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_proxy_host',
          type: 'input',
          placeholder: 'proxy.example.com',
          values: '',
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_host')
        },
        onRender: function onRender(item) {
          toggleField(item, GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_proxy_host', value);
          GatewayClient.getInstance().reconnect();
        }
      });

      // ── Proxy: port ────────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_proxy_port',
          type: 'input',
          placeholder: '443',
          values: '',
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_port')
        },
        onRender: function onRender(item) {
          toggleField(item, GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_proxy_port', value);
          GatewayClient.getInstance().reconnect();
        }
      });

      // ── Proxy: secret ──────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_proxy_secret',
          type: 'input',
          placeholder: 'ee...',
          values: '',
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_secret')
        },
        onRender: function onRender(item) {
          toggleField(item, GatewayClient.getInstance().isEnabled('gramlink_proxy_enabled'));
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_proxy_secret', value);
          GatewayClient.getInstance().reconnect();
        }
      });

      // ═══════════════════════════════════════════════════
      //  Gateway (WebSocket Proxy) Settings
      // ═══════════════════════════════════════════════════

      // ── Gateway URL ──────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_gateway_url',
          type: 'input',
          placeholder: 'wss://mtproto-master.fly.dev',
          values: '',
          default: 'wss://mtproto-master.fly.dev'
        },
        field: {
          name: 'Gateway URL',
          description: 'WebSocket URL for MTProto Gateway (old devices)'
        },
        onRender: function onRender(item) {
          toggleField(item, Lampa.Storage.get('gramlink_server_type', 'official') === 'gateway');
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_gateway_url', value);
        }
      });

      // ── Force Gateway mode toggle ────────────────────────
      SettingsApi.addParam({
        component: 'gramlink_server',
        param: {
          name: 'gramlink_gateway_mode',
          type: 'trigger',
          default: false
        },
        field: {
          name: 'Force Gateway mode',
          description: 'Use Gateway WebSocket instead of direct GramJS'
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_gateway_mode', value);
          if (value) {
            Lampa.Storage.set('gramlink_server_type', 'gateway');
          }
          Lampa.Settings.update();
        }
      });
    }
    function toggleField(item, show) {
      if (show) {
        item.removeClass('hide');
      } else {
        item.addClass('hide');
      }
    }
    function openAvatarStyleSelect() {
      var current = Lampa.Storage.get('gramlink_avatar_style', 'fun-emoji');
      var enabledCtrl = Lampa.Controller.enabled().name;
      var items = [];
      var hasStoredStyle = Lampa.Storage.get('gramlink_avatar_style', null) !== null;

      // "Initials" — always opt-out option
      items.push({
        title: Lampa.Lang.translate('gramlink_avatar_none'),
        selected: !hasStoredStyle
      });
      DICE_BEAR_STYLES.forEach(function (s) {
        var previewUrl = DICE_BEAR_BASE + s + '/svg?seed=Lampa';
        var iconHtml = '<img src="' + previewUrl + '" style="width:2em;height:2em;border-radius:50%;object-fit:cover;">';
        items.push({
          title: s,
          template: 'selectbox_icon',
          icon: iconHtml,
          selected: s === current
        });
      });
      Lampa.Select.show({
        title: Lampa.Lang.translate('gramlink_settings_avatar_style'),
        items: items,
        onBack: function onBack() {
          Lampa.Controller.toggle(enabledCtrl);
        },
        onSelect: function onSelect(item) {
          var selectedStyle = item.title === Lampa.Lang.translate('gramlink_avatar_none') ? '' : item.title;
          Lampa.Storage.set('gramlink_avatar_style', selectedStyle);
          Lampa.Controller.toggle(enabledCtrl);
          Lampa.Settings.create('gramlink_tools', {
            onBack: function onBack() {
              Lampa.Settings.create('gramlink');
            }
          });
        }
      });
    }

    /**
     * broadcast.js — Cross-device "Open/Play on device" via Telegram remote-cmd topic
     *
     * Uses GramLink's existing heartbeat system (getOnlineDevices) to discover
     * active devices, then sends remote commands via Telegram messages.
     */

    // ─── Discovery ──────────────────────────────────────────

    function discoverDevices() {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return Promise.resolve([]);
      var channelId = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
      var syncLogTopicId = Lampa.Storage.get(STORAGE_KEYS.SYNC_LOG_TOPIC, '');
      if (!channelId || !syncLogTopicId) return Promise.resolve([]);
      return client.getOnlineDevices(channelId, syncLogTopicId);
    }

    // ─── Send remote commands ───────────────────────────────

    function sendOpenCard(deviceId, cardData) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      var channelId = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
      var remoteCmdTopicId = Lampa.Storage.get(STORAGE_KEYS.REMOTE_CMD_TOPIC, '');
      if (!channelId || !remoteCmdTopicId) return;
      client.publish(channelId, remoteCmdTopicId, 'open_card', {
        card: cardData
      }, deviceId);
    }
    function sendPlayVideo(deviceId, mediaData) {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      var channelId = Lampa.Storage.get(STORAGE_KEYS.CHANNEL_ID, '');
      var remoteCmdTopicId = Lampa.Storage.get(STORAGE_KEYS.REMOTE_CMD_TOPIC, '');
      if (!channelId || !remoteCmdTopicId) return;
      client.publish(channelId, remoteCmdTopicId, 'play_video', {
        media: mediaData
      }, deviceId);
    }

    // ─── Device picker modal ────────────────────────────────

    function showDevicePicker(options) {
      /**
       * @param {Object} options
       * @param {string} options.title - Modal title
       * @param {string} options.prompt - Prompt text (optional)
       * @param {function(Object)} options.onSelect - Called with device object {device_id, device_name}
       * @param {function} [options.onCancel] - Called if user cancels
       */

      var enabledCtrl = Lampa.Controller.enabled().name;
      discoverDevices().then(function (devices) {
        var myId = getDeviceId();
        // Filter out current device
        devices = devices.filter(function (d) {
          return d.device_id !== myId;
        });
        if (devices.length === 0) {
          Lampa.Noty.show('No other devices online');
          if (options.onCancel) options.onCancel();
          return;
        }
        var items = devices.map(function (d) {
          return {
            title: d.device_name || 'Unknown',
            _device: d
          };
        });
        items.push({
          title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
          _cancel: true
        });
        Lampa.Select.show({
          title: options.title || 'Select device',
          items: items,
          onBack: function onBack() {
            Lampa.Controller.toggle(enabledCtrl);
            if (options.onCancel) options.onCancel();
          },
          onSelect: function onSelect(item) {
            Lampa.Controller.toggle(enabledCtrl);
            if (item._cancel) {
              if (options.onCancel) options.onCancel();
              return;
            }
            if (options.onSelect) options.onSelect(item._device);
          }
        });
      }).catch(function () {
        Lampa.Noty.show('Failed to discover devices');
        if (options.onCancel) options.onCancel();
      });
    }

    // ─── Context menu integration ───────────────────────────

    function setupContextMenu() {
      var manifest = {
        type: 'video',
        version: VERSION,
        name: 'Open on device',
        description: 'Open this content on another device',
        onContextMenu: function onContextMenu(object) {
          var client = GatewayClient.getInstance();
          if (!client.isConnected()) return null;
          return {
            name: 'Open on device',
            description: ''
          };
        },
        onContextLauch: function onContextLauch(data) {
          var card = Lampa.Utils.clearCard ? Lampa.Utils.clearCard(JSON.parse(JSON.stringify(data))) : data;
          showDevicePicker({
            title: 'Open on device',
            onSelect: function onSelect(device) {
              sendOpenCard(device.device_id, card);
              Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
            }
          });
        }
      };
      Lampa.Manifest.plugins = manifest;
    }

    // ─── Player Panel share integration ─────────────────────

    function setupPlayerPanel() {
      Lampa.PlayerPanel.listener.follow('share', function (e) {
        var client = GatewayClient.getInstance();
        if (!client.isConnected()) return;
        showDevicePicker({
          title: 'Play on device',
          onSelect: function onSelect(device) {
            var playdata = Lampa.Player.playdata();
            if (playdata) {
              sendPlayVideo(device.device_id, playdata);
              Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
            }
          }
        });
      });
    }

    // ─── Broadcast head button ──────────────────────────────

    function addBroadcastButton() {
      $('.open--broadcast').remove();
      var $broadcastBtn = $('<div class="head__action selector open--broadcast" style="display:none">' + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M1.04272 7.22978V6.76392C1.04272 4.00249 3.2813 1.76392 6.04272 1.76392H17.7877C20.5491 1.76392 22.7877 4.00249 22.7877 6.76392V17.2999C22.7877 20.0613 20.5491 22.2999 17.7877 22.2999H15.8387" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path>' + '<circle cx="6.69829" cy="16.6443" r="5.65556" fill="currentColor"></circle>' + '</svg>' + '</div>');
      $('.head__action.open--search').after($broadcastBtn);
      function updateVisibility() {
        var client = GatewayClient.getInstance();
        var active = Lampa.Activity.active();
        if (client.isConnected() && active && active.component === 'full') {
          $broadcastBtn.show();
        } else {
          $broadcastBtn.hide();
        }
      }
      updateVisibility();
      Lampa.Listener.follow('activity', function (e) {
        if (e.type === 'start') updateVisibility();
      });
      Lampa.Listener.follow('lws_connect', function (e) {
        updateVisibility();
      });
      $broadcastBtn.on('hover:enter hover:click hover:touch', function () {
        var card = Lampa.Activity.extractObject ? Lampa.Activity.extractObject(Lampa.Activity.active()) : null;
        if (!card) {
          Lampa.Noty.show('Nothing to share');
          return;
        }
        showDevicePicker({
          title: 'Open on device',
          onSelect: function onSelect(device) {
            sendOpenCard(device.device_id, card);
            Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
          }
        });
      });
    }

    // ─── Init ───────────────────────────────────────────────

    function setupBroadcast() {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) return;
      setupContextMenu();
      setupPlayerPanel();
      addBroadcastButton();
    }
    var Broadcast = {
      discoverDevices: discoverDevices,
      showDevicePicker: showDevicePicker,
      sendOpenCard: sendOpenCard,
      sendPlayVideo: sendPlayVideo,
      setupContextMenu: setupContextMenu,
      setupPlayerPanel: setupPlayerPanel,
      addBroadcastButton: addBroadcastButton,
      setupBroadcast: setupBroadcast
    };

    /**
     * sdk/topic-config.js — Channel and topic configuration
     *
     * Eliminates:
     *   D-02 — CHANNEL_TITLE and TOPIC_NAMES now in one place.
     *          auth.js had its own TOPICS array (4 items, no remote-cmd);
     *          hub.js had TOPIC_NAMES (5 items, with remote-cmd).
     *          Now one source of truth: 5 topics.
     *
     * Usage:
     *   import { CHANNEL_TITLE, TOPIC_NAMES, TOPIC_STORAGE_KEYS } from '../sdk/topic-config'
     */

    var CHANNEL_TITLE = "\uD83D\uDD04 Lampa Sync [DO NOT DELETE]";
    var TOPIC_NAMES = ['sync-log', 'remote-cmd', 'backup', 'profiles', 'profiles-sync'];

    /**
     * sdk/manifest_schema.js — Backup manifest schema and key categorization
     *
     * Eliminates:
     *   — categorize() centralized instead of manual localStorage filtering
     *   — buildManifest() / validateManifest() instead of manual JSON.stringify
     *   — DEVICE_KEY_PREFIXES defined in one place
     *
     * Usage:
     *   import { categorize, buildManifest, validateManifest, DEVICE_KEY_PREFIXES } from '../sdk/manifest_schema'
     */

    /**
     * Key prefixes that belong to device_state (device settings).
     * Synced with profiles.js:DEVICE_KEY_PREFIXES.
     */
    var DEVICE_KEY_PREFIXES = ['player', 'player_', 'subtitles_', 'video_quality_', 'navigation_', 'interface_', 'background_', 'glass_', 'card_', 'poster_', 'animation_', 'scroll_', 'request_caching', 'cache_images', 'mask', 'light_version', 'menu_always', 'black_style', 'gramlink_heartbeat', 'gramlink_broadcast'];

    /**
     * Patterns for excluding caches from backup.
     */
    var CACHE_PATTERNS = [/_cache$/, /_line_cache/, /_ts$/, /_line$/];

    /**
     * Specific keys to exclude (not covered by patterns).
     */
    var EXCLUDE_KEYS_SET = {
      'GramJs:apiCache': true
    };

    /**
     * Categorizes a localStorage key.
     *
     * @param {string} key
     * @returns {string} 'core' | 'device_state' | 'cache_exclude' | 'gramlink_meta'
     */
    function categorize(key) {
      // GramLink keys are not backed up (except heartbeat/broadcast — device_state)
      if (key.indexOf('gramlink_') === 0) {
        var isDevice = DEVICE_KEY_PREFIXES.some(function (p) {
          return key === p || key.indexOf(p) === 0;
        });
        if (!isDevice) return 'gramlink_meta';
        return 'device_state';
      }

      // Explicitly excluded keys
      if (EXCLUDE_KEYS_SET[key]) return 'cache_exclude';

      // Check cache patterns
      for (var i = 0; i < CACHE_PATTERNS.length; i++) {
        if (CACHE_PATTERNS[i].test(key)) return 'cache_exclude';
      }

      // Check device prefixes
      for (var j = 0; j < DEVICE_KEY_PREFIXES.length; j++) {
        var p = DEVICE_KEY_PREFIXES[j];
        if (key === p || key.indexOf(p) === 0) return 'device_state';
      }

      // Everything else — core
      return 'core';
    }

    /**
     * Builds manifest from metadata and chunk list.
     *
     * @param {Object} meta
     * @param {number} meta.created_at — Unix timestamp
     * @param {string} meta.device_id
     * @param {string} meta.device_name
     * @param {Array} chunks — chunk array
     * @param {string} chunks[].id — "chunk_000"
     * @param {string} chunks[].category — "core" | "device_state"
     * @param {string[]} chunks[].keys — list of keys in chunk
     * @param {number} chunks[].raw_bytes — size before compression
     * @param {string} chunks[].file_name — "chunk_000.json"
     * @returns {Object} manifest
     */
    function buildManifest(meta, chunks) {
      var totalKeys = 0;
      var totalBytes = 0;
      var chunkList = (chunks || []).map(function (ch) {
        totalKeys += (ch.keys || []).length;
        totalBytes += ch.raw_bytes || 0;
        return {
          id: ch.id,
          category: ch.category,
          keys: ch.keys || [],
          raw_bytes: ch.raw_bytes || 0,
          file_name: ch.file_name,
          telegram_msg_id: ch.telegram_msg_id || 0
        };
      });
      return {
        meta: {
          type: 'gramlink_backup',
          version: 1,
          created_at: meta.created_at || Math.floor(Date.now() / 1000),
          device_id: meta.device_id || '',
          device_name: meta.device_name || 'Unknown'
        },
        totals: {
          total_chunks: chunkList.length,
          total_keys: totalKeys,
          total_bytes: totalBytes
        },
        chunks: chunkList
      };
    }

    /**
     * Validates manifest structure.
     * @param {Object} m
     * @param {string} [context] — for error message
     * @returns {boolean} true if valid
     * @throws {Error} if invalid
     */
    function validateManifest(m) {
      if (!m || _typeof(m) !== 'object') throw new Error('Manifest is not an object');
      if (m.meta && m.meta.type !== 'gramlink_backup') throw new Error('Not a GramLink backup manifest');
      if (!m.meta || !m.meta.created_at || !m.meta.device_id) throw new Error('Manifest missing required meta fields');
      if (!m.chunks || !Array.isArray(m.chunks) || !m.chunks.length) throw new Error('Manifest has no chunks');
      if (!m.totals || typeof m.totals.total_chunks !== 'number') throw new Error('Manifest missing totals');
      return true;
    }

    var CHUNK_SIZE = 64 * 1024; // 64 KB — safe size for older devices

    /**
     * Iterates localStorage, groups keys by category.
     *
     * @returns {{ core: Object, device_state: Object, cache_exclude: number }}
     *   core / device_state — { key: rawValueString, ... }
     *   cache_exclude — count of excluded keys
     */
    function collectCategorized() {
      var core = {};
      var deviceState = {};
      var excludedCount = 0;
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!key) continue;
        var cat = categorize(key);
        if (cat === 'core') {
          core[key] = localStorage.getItem(key);
        } else if (cat === 'device_state') {
          deviceState[key] = localStorage.getItem(key);
        } else {
          excludedCount++;
        }
      }
      return {
        core: core,
        device_state: deviceState,
        excluded: excludedCount
      };
    }

    /**
     * Splits collected data into chunks of CHUNK_SIZE bytes.
     * Each chunk is an object { category, keys, raw_bytes }.
     * Large keys (> CHUNK_SIZE) get their own chunk.
     *
     * @param {{ core: Object, device_state: Object }} collected
     * @param {number} [chunkSize] — chunk size in bytes (default 64 KB)
     * @returns {Array<{ id: string, category: string, keys: Object, raw_bytes: number, file_name: string }>}
     */
    function buildChunks(collected, chunkSize) {
      if (chunkSize === undefined) chunkSize = CHUNK_SIZE;
      var chunks = [];
      var chunkId = 0;
      function nextChunkId() {
        var s = String(chunkId);
        while (s.length < 3) s = '0' + s;
        chunkId++;
        return 'chunk_' + s;
      }
      var categories = ['core', 'device_state'];
      for (var ci = 0; ci < categories.length; ci++) {
        var category = categories[ci];
        var keys = collected[category];
        if (!keys) continue;
        var keyEntries = Object.keys(keys);
        if (!keyEntries.length) continue;
        var currentChunk = {
          keys: {}
        };
        var currentSize = 2; // for "{}"

        for (var ki = 0; ki < keyEntries.length; ki++) {
          var key = keyEntries[ki];
          var value = keys[key];

          // Size of one entry: "key":value, + possible comma
          var estimatedSize = JSON.stringify(key).length + 2 + value.length;
          if (ki > 0) estimatedSize += 1; // comma before

          // If a single key is larger than chunkSize — it gets its own chunk
          if (estimatedSize > chunkSize) {
            // Finalize current chunk if it has content
            if (Object.keys(currentChunk.keys).length > 0) {
              chunks.push(finalizeChunk(currentChunk, category, nextChunkId()));
              currentChunk = {
                keys: {}
              };
              currentSize = 2;
            }
            // Large key — separate chunk
            var bigChunk = {
              keys: {}
            };
            bigChunk.keys[key] = value;
            chunks.push(finalizeChunk(bigChunk, category, nextChunkId()));
            currentSize = 2;
            continue;
          }

          // If it doesn't fit in current chunk — finalize it and start a new one
          if (currentSize + estimatedSize > chunkSize && Object.keys(currentChunk.keys).length > 0) {
            chunks.push(finalizeChunk(currentChunk, category, nextChunkId()));
            currentChunk = {
              keys: {}
            };
            currentSize = 2;
          }
          currentChunk.keys[key] = value;
          currentSize += estimatedSize;
        }

        // Finalize the last chunk of the category
        if (Object.keys(currentChunk.keys).length > 0) {
          chunks.push(finalizeChunk(currentChunk, category, nextChunkId()));
        }
      }
      return chunks;
    }
    function finalizeChunk(chunk, category, id) {
      var data = {
        category: category,
        keys: chunk.keys || {}
      };
      return {
        id: id,
        category: category,
        keys: Object.keys(data.keys),
        keysData: data.keys,
        // ← actual key-value pairs, for JSON.stringify in hub.js
        raw_bytes: JSON.stringify(data).length,
        file_name: id + '.json'
      };
    }

    /**
     * Builds payload for exportBackup.
     *
     * @param {{ core: Object, device_state: Object }} collected — from collectCategorized()
     * @param {Object} meta — { device_id, device_name }
     * @param {number} [chunkSize]
     * @returns {{ chunks: Array, manifest: Object, backupName: string }}
     */
    function buildExportPayload(collected, meta, chunkSize) {
      var chunks = buildChunks(collected, chunkSize);
      var now = Math.floor(Date.now() / 1000);
      var backupName = 'backup_' + now;
      var manifest = buildManifest({
        created_at: now,
        device_id: meta.device_id,
        device_name: meta.device_name
      }, chunks.map(function (ch) {
        return {
          id: ch.id,
          category: ch.category,
          keys: ch.keys,
          raw_bytes: ch.raw_bytes,
          file_name: backupName + '/' + ch.file_name
        };
      }));
      return {
        chunks: chunks,
        manifest: manifest,
        backupName: backupName
      };
    }

    /**
     * Gets list of backup sessions from the backup topic.
     *
     * @param {Object} c — Client.getInstance()
     * @param {number} ch — channel ID
     * @param {number} bt — backup topic ID
     * @returns {Promise<Array>} array of sessions:
     *   [{ ts, label, deviceInfo, manifestFile, sessionPrefix, files }]
     */
    function listBackupSessions(c, ch, bt) {
      return c.getBackupFiles(ch, bt, 50).then(function (files) {
        var sessions = {};
        files.forEach(function (f) {
          var m = f.fileName.match(/^backup_(\d+)\/manifest\.json$/);
          if (!m) return;
          var ts = parseInt(m[1], 10);
          var isFinal = f.fileName.indexOf('_final') >= 0;

          // Parse device_name from caption
          var deviceInfo = '';
          try {
            if (f.text) {
              var caption = JSON.parse(f.text);
              if (caption.device_name) deviceInfo = caption.device_name;
            }
          } catch (e) {}

          // Take the newest manifest for this ts (prefer _final)
          if (!sessions[ts] || isFinal) {
            sessions[ts] = {
              ts: ts,
              label: formatTimestamp(ts),
              deviceInfo: deviceInfo,
              manifestFile: f,
              files: files
            };
          }
        });
        return Object.keys(sessions).map(function (k) {
          return sessions[k];
        }).sort(function (a, b) {
          return b.ts - a.ts;
        });
      });
    }

    /**
     * Downloads and validates manifest.
     *
     * @param {Object} c — Client.getInstance()
     * @param {Object} session — session from listBackupSessions
     * @returns {Promise<Object>} parsed manifest
     */
    function downloadManifest(c, session) {
      return c.downloadFile(session.manifestFile).then(function (jsonStr) {
        if (!jsonStr) throw new Error('Failed to download manifest');
        var manifest = JSON.parse(jsonStr);
        validateManifest(manifest);
        return manifest;
      });
    }

    /**
     * Finds chunk files for a given session and manifest.
     *
     * @param {Object} session — session from listBackupSessions
     * @param {Object} manifest — parsed manifest
     * @returns {Array<{ file: Object, chunkMeta: Object }>}
     */
    function findChunkFiles(session, manifest) {
      var results = [];
      manifest.chunks.forEach(function (ch) {
        // ch.file_name already has prefix "backup_<ts>/" (see buildExportPayload)
        var expectedName = ch.file_name;
        var found = null;
        for (var i = 0; i < session.files.length; i++) {
          if (session.files[i].fileName === expectedName) {
            found = session.files[i];
            break;
          }
        }
        if (found) {
          results.push({
            file: found,
            chunkMeta: ch
          });
        } else {
          console.warn('GramLink', 'Chunk not found:', expectedName);
        }
      });
      return results;
    }

    /**
     * Parses chunk content.
     *
     * @param {string} jsonStr — raw JSON (downloadFile result)
     * @returns {Object} { category, keys }
     */
    function parseChunk(jsonStr) {
      var data = JSON.parse(jsonStr);
      if (!data || !data.keys || _typeof(data.keys) !== 'object') {
        throw new Error('Invalid chunk format');
      }
      return data;
    }

    // ─── Helpers ─────────────────────────────────────────────────────────

    function formatTimestamp(unixTs) {
      try {
        var pad = function pad(n) {
          return n < 10 ? '0' + n : String(n);
        };
        var d = new Date(unixTs * 1000);
        return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
      } catch (e) {
        return String(unixTs);
      }
    }

    var STORAGE_CHANNEL_ID = STORAGE_KEYS.CHANNEL_ID;
    var STORAGE_SYNC_LOG_TOPIC = STORAGE_KEYS.SYNC_LOG_TOPIC;
    var STORAGE_PROFILES_TOPIC = STORAGE_KEYS.PROFILES_TOPIC;
    var STORAGE_PROFILES_SYNC_TOPIC = STORAGE_KEYS.PROFILES_SYNC;
    var STORAGE_BACKUP_TOPIC = STORAGE_KEYS.BACKUP_TOPIC;
    function Hub () {
      var refreshTimer = null;
      var currentChannelId = null;
      var currentProfilesTopicId = null;
      var self = this;
      var scroll = null;
      var last = null;
      var activeTab = 'profiles';
      var _initializing = false; // Bug 3: guard against premature "No profiles" render
      var TABS = ['profiles', 'devices', 'plugins'];
      var tabIdx = 0;

      // ─── Lifecycle — create ──────────────────────────────

      self.create = function () {
        scroll = new Lampa.Scroll({
          mask: true,
          over: true
        });
        scroll.render().addClass('gramlink-scroll');

        // Native: onWheel delegates to Navigator
        scroll.onWheel = function (step) {
          if (!last) return;
          Navigator.move(step > 0 ? 'down' : 'up');
        };

        // Container
        self.html = $('<div class="gramlink-activity"></div>');
        self.html.append(scroll.render());

        // Bug 3: show loading placeholder — actual render after init() completes
        _initializing = true;
        var body = scroll.body(true);
        body.innerHTML = '<div style="padding:2em;text-align:center;color:#8D8D8D">' + (Lampa.Lang.translate('gramlink_loading') || "Loading\u2026") + '</div>';
        return self.render();
      };
      self.render = function () {
        return self.html;
      };

      // ─── Controller — start ──────────────────────────────

      self.start = function () {
        if (Lampa.Activity.active() && Lampa.Activity.active().activity !== self.activity) return;
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render());
            var focus = last && $(last).closest('body').length ? last : false;
            Lampa.Controller.collectionFocus(focus, scroll.render());
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          left: function left() {
            var $cur = $(last);
            if ($cur.hasClass('gramlink-tab') && tabIdx > 0) {
              tabIdx--;
              focusTab(TABS[tabIdx]);
            } else if ($cur.hasClass('gramlink-tab') && tabIdx === 0) {
              Lampa.Controller.toggle('menu');
            } else if (Navigator.canmove('left')) {
              Navigator.move('left');
            } else {
              Lampa.Controller.toggle('menu');
            }
          },
          right: function right() {
            var $cur = $(last);
            if ($cur.hasClass('gramlink-tab') && tabIdx < TABS.length - 1) {
              tabIdx++;
              focusTab(TABS[tabIdx]);
            } else if (Navigator.canmove('right')) {
              Navigator.move('right');
            }
          },
          back: function back() {
            self.back();
          }
        });
        Lampa.Controller.toggle('content');
        init();
        // ponytail: Native→Hub — pick up changes from native Extensions/Settings
        if (!self.__pluginStorageHandler) {
          self.__pluginStorageHandler = function (e) {
            if (e && e.key === 'plugins' && activeTab === 'plugins') {
              renderPlugins();
            }
          };
          Lampa.Storage.listener.follow('change', self.__pluginStorageHandler);
        }
        focusFirst();
      };
      self.pause = function () {
        if (refreshTimer) {
          clearInterval(refreshTimer);
          refreshTimer = null;
        }
      };
      self.stop = function () {
        if (refreshTimer) {
          clearInterval(refreshTimer);
          refreshTimer = null;
        }
      };
      self.back = function () {
        Lampa.Activity.backward();
      };
      self.destroy = function () {
        if (self.__destroyed) return;
        self.__destroyed = true;
        if (refreshTimer) {
          clearInterval(refreshTimer);
          refreshTimer = null;
        }
        try {
          if (scroll && scroll.body) scroll.body().off();
        } catch (e) {} // ponytail:
        if (self._deltaHandler) {
          GatewayClient.getInstance().off('profile_delta', self._deltaHandler);
          self._deltaHandler = null;
        }
        try {
          if (scroll) scroll.destroy();
        } catch (e) {}
        try {
          self.html.remove();
        } catch (e) {}
      };

      // ─── Tab switching ──────────────────────────────────

      function switchTab(tabId) {
        if (tabId === activeTab) return;
        activeTab = tabId;
        tabIdx = TABS.indexOf(tabId);
        scroll.clear();
        last = null; // ponytail:
        scroll.reset();
        if (tabId === 'profiles') renderProfiles();else if (tabId === 'devices') renderDevices();else if (tabId === 'plugins') renderPlugins();
      }

      // ─── Focus — native pattern ─────────────────────────
      // Ponytail: always focus TAB BAR first, not content.
      // Profile cards have hover:enter that triggers quickSwitchProfile → reload.
      // Focusing tab first prevents accidental profile switches on init.

      function focusFirst() {
        focusTabBar();
      }

      // ═══════════════════════════════════════════════════════
      //  TAB RENDERERS
      // ═══════════════════════════════════════════════════════

      // ─── Common: tab bar ────────────────────────────────

      function renderTabBar() {
        var html = '<div class="gramlink-tabs" style="display:flex;gap:0.8em;padding:0 2em 1em">';
        TABS.forEach(function (t) {
          var label = t === 'profiles' ? Lampa.Lang.translate('gramlink_profiles') || 'Profiles' : t === 'devices' ? Lampa.Lang.translate('gramlink_devices') || 'Devices' : Lampa.Lang.translate('gramlink_plugins') || 'Plugins';
          html += '<div class="simple-button selector gramlink-tab' + (t === activeTab ? ' active' : '') + '" data-tab="' + t + '">' + label + '</div>';
        });
        html += '</div>';
        return html;
      }
      function bindTabEvents() {
        $(scroll.body()).find('.gramlink-tab').each(function () {
          var el = this;
          $(el).off('._gltab');
          // Native: direct hover:focus — scroll follows
          $(el).on('hover:focus._gltab', function () {
            last = el;
            scroll.update($(el), true);
          });
          // Native: direct hover:enter — switch tab on explicit Enter/click
          $(el).on('hover:enter._gltab', function () {
            if ($(el).data('tab') !== activeTab) switchTab($(el).data('tab'));
          });
        });
      }

      // Focus a tab visually without switching content (native left/right)
      function focusTab(tabId) {
        var tabEl = $(scroll.body()).find('.gramlink-tab[data-tab="' + tabId + '"]');
        if (tabEl.length) {
          last = tabEl[0];
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(tabEl[0], scroll.render());
          scroll.update(tabEl, true);
        }
      }

      // ═══════════════════════════════════════════════════════
      //  PROFILES
      // ═══════════════════════════════════════════════════════

      function renderProfiles() {
        var body = scroll.body(true);
        body.innerHTML = '';
        bodyPrep(body); // Native: grid layout like devices/plugins

        body.insertAdjacentHTML('beforeend', renderTabBar());
        bindTabEvents();

        // Bug 3: show loading if still initializing topics
        if (_initializing) {
          showEmpty(body, Lampa.Lang.translate('gramlink_loading') || "Loading\u2026");
          focusFirst();
          return;
        }
        if (!currentProfilesTopicId) {
          showEmpty(body, Lampa.Lang.translate('gramlink_no_profiles') || 'No profiles');
          focusFirst();
          return;
        }
        var client = GatewayClient.getInstance();
        if (!client.isConnected()) {
          showEmpty(body, Lampa.Lang.translate('gramlink_not_connected') || 'Not connected');
          focusFirst();
          return;
        }
        showEmpty(body, Lampa.Lang.translate('gramlink_loading') || "Loading\u2026");
        client.getMessages(getChannelId(), currentProfilesTopicId, 50).then(function (msgs) {
          // Remove loading placeholder
          body.querySelectorAll('.gramlink-item[style]').forEach(function (el) {
            el.remove();
          });
          var pms = msgs.filter(function (m) {
            if (!m.text) return false;
            try {
              var d = JSON.parse(stripCodeFence$1(m.text));
              return d && d.meta && d.meta.type === 'profile';
            } catch (e) {
              return false;
            }
          });
          if (!pms.length) {
            showEmpty(body, Lampa.Lang.translate('gramlink_no_profiles') || 'No profiles');
            focusFirst();
            return;
          }
          var activeId = Lampa.Storage.get('gramlink_active_profile', '');

          // ── Native: Add button (full width) ──
          var addEl = createItem('gs-profile-add-item', '+', Lampa.Lang.translate('gramlink_create_profile') || 'Create profile', '', null, null);
          addEl.style.gridColumn = '1 / -1';
          body.appendChild(addEl);

          // ── Profile items (2-column grid) ──
          pms.forEach(function (m) {
            try {
              var d = JSON.parse(stripCodeFence$1(m.text));
            } catch (e) {
              return;
            }
            var p = d.payload && d.payload.profile;
            if (!p) return;
            var isActive = String(activeId) === String(m.id);
            var avatar = Profiles.getAvatar(p.name);
            var isUrl = avatar && avatar.indexOf('https://') === 0;
            var avatarHtml = isUrl ? '<img src="' + avatar + '" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:0.5em">' : avatar;
            var subText = isActive ? Lampa.Lang.translate('gramlink_profile_active') || 'Active' : '';
            var badgeCls = isActive ? 'badge--active' : null;
            var badgeText = isActive ? Lampa.Lang.translate('gramlink_active') || 'Active' : '';
            var el = createItem('gs-profile-item', avatarHtml, p.name || 'Unnamed', subText, badgeCls, badgeText, isUrl);
            el.dataset.id = m.id;
            el.dataset.name = p.name || 'Unnamed';
            el.dataset.active = String(isActive);
            body.appendChild(el);
          });

          // ── Bind profile events ──
          bindProfileEvents();
          Profiles.saveProfilesCache(pms);
          focusFirst();
        }).catch(function () {
          showEmpty(body, Lampa.Lang.translate('title_error') || 'Error');
          focusFirst();
        });
      }
      function bindProfileEvents() {
        // Add button
        $(scroll.body()).find('.gs-profile-add-item').each(function () {
          var el = this;
          $(el).off('._gl').on('hover:enter._gl', function () {
            createProfileHandler();
          });
        });

        // Profile items
        $(scroll.body()).find('.gs-profile-item').each(function () {
          var el = this;
          $(el).off('._gl').on('hover:enter._gl', function () {
            if ($(el).data('active') !== true) Profiles.quickSwitchProfile($(el).data('id'));
          });
          $(el).off('hover:long._gl').on('hover:long._gl', function () {
            profileMenu($(el));
          });
        });
      }
      function createProfileHandler() {
        Lampa.Input.edit({
          title: Lampa.Lang.translate('gramlink_create_profile') || 'Profile name',
          free: true,
          nosave: true,
          align: 'center'
        }, function (name) {
          if (!name) return;
          var client = GatewayClient.getInstance();
          if (!client.isConnected()) {
            Lampa.Noty.show('Not connected');
            return;
          }
          var profileName = name.trim();
          var avatar = Profiles.getAvatar(profileName);
          var now = Math.floor(Date.now() / 1000);
          var caption = buildCaption({
            name: profileName,
            avatar: avatar,
            updated: now
          });
          client.getMessages(getChannelId(), currentProfilesTopicId, 50).then(function (msgs) {
            var hasProfiles = msgs.some(function (m) {
              if (!m.text) return false;
              try {
                var d = JSON.parse(stripCodeFence$1(m.text));
                return d && d.meta && d.meta.type === 'profile';
              } catch (e) {
                return false;
              }
            });
            var fileData = buildFileData({
              name: profileName,
              avatar: avatar,
              bookmarks: hasProfiles ? {
                favorite: {}
              } : {
                favorite: collectFavorite()
              },
              timeline: hasProfiles ? {} : collectTimeline(),
              plugins: collectPlugins(),
              settings: collectSettings()
            });
            client.sendFile(getChannelId(), currentProfilesTopicId, JSON.stringify(fileData, null, 2), buildProfileFileName(profileName, now), caption).then(function (msgId) {
              if (msgId) {
                Lampa.Storage.set(STORAGE_KEYS.ACTIVE_PROFILE, String(msgId));
                Lampa.Storage.set(STORAGE_KEYS.ACTIVE_PROFILE_TS, String(now));
                Lampa.Storage.set(STORAGE_KEYS.ACTIVE_PROFILE_NAME, profileName);
                renderProfiles();
                Lampa.Noty.show(Lampa.Lang.translate('gramlink_profile_created') || 'Profile created');
              } else {
                Lampa.Noty.show('Failed to create profile');
              }
            }).catch(function (e) {
              console.error('GramLink', 'Create profile error:', e);
              Lampa.Noty.show('Failed to create profile');
            });
          }).catch(function () {
            Lampa.Noty.show('Failed to check existing profiles');
          });
        });
      }

      // ═══════════════════════════════════════════════════════
      //  DEVICES
      // ═══════════════════════════════════════════════════════

      function renderDevices() {
        var body = scroll.body(true);
        body.innerHTML = '';
        body.insertAdjacentHTML('beforeend', renderTabBar());
        bindTabEvents();
        var client = GatewayClient.getInstance();
        var isConnected = client.isConnected();

        // Status item (inline — needs colored dot, not createItem)
        bodyPrep(body);
        var sEl = document.createElement('div');
        sEl.className = 'gramlink-item selector gs-status-item';
        sEl.style.gridColumn = '1 / -1';
        sEl.innerHTML = '<div class="gs-avatar" style="border-radius:50%;width:1.2em;height:1.2em;font-size:0.9em;margin-right:0.8em;background:' + (isConnected ? '#4caf50' : '#DD7337') + '"></div>' + '<div class="gs-content">' + '<div class="gs-title">' + (isConnected ? 'Connected' : Lampa.Lang.translate('gramlink_not_connected') || 'Not connected') + '</div>' + '<div class="gs-sub">' + escHtml(isConnected ? getDeviceName() : '-') + '</div>' + '</div>';
        body.appendChild(sEl);
        if (!isConnected) {
          $(sEl).on('hover:enter', function () {
            client.connect().catch(function () {});
          });
        } else {
          $(sEl).addClass('gs-device-item').data('self', true).data('id', 'this').data('name', getDeviceName());
        }
        var chId = Lampa.Storage.get(STORAGE_CHANNEL_ID, '');
        var slId = Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, '');
        if (!isConnected || !chId || !slId) {
          focusFirst();
          return;
        }
        client.getOnlineDevices(chId, slId).then(function (devices) {
          var myId = getDeviceId();
          if (!devices.some(function (d) {
            return d.device_id === myId;
          })) {
            devices.push({
              device_id: myId,
              device_name: getDeviceName(),
              timestamp: Math.floor(Date.now() / 1000)
            });
          }
          devices.sort(function (a, b) {
            if (a.device_id === myId) return -1;
            if (b.device_id === myId) return 1;
            return (a.device_name || '').localeCompare(b.device_name || '');
          });
          devices.forEach(function (d) {
            var isThis = d.device_id === myId;
            var initial = d.device_name ? d.device_name.charAt(0).toUpperCase() : '?';
            var rawName = d.device_name || 'Unknown';
            // Strip "Mac Device - " default prefix, keep custom renames intact
            var cleanName = rawName.indexOf('Mac Device - ') === 0 ? rawName.slice(13) : rawName;
            var subText = isThis ? Lampa.Lang.translate('gramlink_this_device') || 'This device' : '';
            var badgeText = isThis ? 'active' : 'online';
            var el = createItem('gs-device-item', initial, cleanName, subText, 'badge--info', badgeText);
            el.dataset.id = d.device_id;
            el.dataset.name = rawName;
            el.dataset.self = String(isThis);
            body.appendChild(el);
          });
          bindDeviceEvents();
          focusFirst();
        }).catch(function () {
          focusFirst();
        });
      }
      function bindDeviceEvents() {
        $(scroll.body()).find('.gs-device-item').each(function () {
          var el = this;
          $(el).off('hover:focus._gl').on('hover:focus._gl', function () {
            last = el;
            scroll.update($(el), true);
          });
          $(el).off('hover:enter._gl').on('hover:enter._gl', function () {
            showDeviceMenu($(el).data('id'), $(el).data('name'), $(el).data('self') === true);
          });
          $(el).off('hover:long._gl').on('hover:long._gl', function () {
            if ($(el).data('self') === true) exportBackup();
          });
        });
      }

      // ═══════════════════════════════════════════════════════
      //  PLUGINS
      // ═══════════════════════════════════════════════════════

      function renderPlugins() {
        var body = scroll.body(true);
        body.innerHTML = '';
        body.insertAdjacentHTML('beforeend', renderTabBar());
        bindTabEvents();
        var activeId = Lampa.Storage.get('gramlink_active_profile', '');
        if (!activeId) {
          showEmpty(body, Lampa.Lang.translate('gramlink_no_profiles') || 'No active profile');
          focusFirst();
          return;
        }
        var plugins;
        try {
          plugins = Lampa.Storage.get('plugins', []);
        } catch (e) {
          plugins = [];
        }
        bodyPrep(body);

        // Native: Add button FIRST
        var addEl = createItem('gs-plugin-add-item', '+', Lampa.Lang.translate('gramlink_plugins_add') || 'Add plugin', Lampa.Lang.translate('gramlink_plugins_manage_hint') || 'Add plugins via URL', null);
        addEl.style.gridColumn = '1 / -1';
        body.appendChild(addEl);
        if (!plugins || !plugins.length) {
          showEmpty(body, Lampa.Lang.translate('gramlink_no_plugins') || 'No plugins installed');
        } else {
          plugins.forEach(function (plugin, idx) {
            var isOn = plugin.status === 1;
            var name = (plugin.name || plugin.url || 'Plugin').slice(0, 60);
            var url = (plugin.url || 'local').slice(0, 80);
            // Native: badge only for disabled plugins. Enabled = no badge.
            var badgeCls = isOn ? null : 'badge--inactive';
            var badgeTxt = isOn ? '' : Lampa.Lang.translate('player_disabled') || 'disabled';
            var el = createItem('gs-plugin-item', '', name, url, badgeCls, badgeTxt);
            el.dataset.idx = idx;
            body.appendChild(el);
          });
        }
        bindPluginEvents();
        focusFirst();
      }
      function bindPluginEvents() {
        $(scroll.body()).find('.gs-plugin-item').each(function () {
          var el = this;
          $(el).off('hover:focus._gl').on('hover:focus._gl', function () {
            last = el;
            scroll.update($(el), true);
          });
          $(el).off('hover:enter._gl').on('hover:enter._gl', function () {
            var idx = parseInt($(el).data('idx'), 10);
            var plugins = getPlugins();
            if (!plugins[idx]) return;
            var p = plugins[idx];
            select({
              title: p.name || p.url || 'Plugin',
              items: [{
                title: p.status === 1 ? 'Disable' : 'Enable',
                _do: 'toggle'
              }, {
                title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Edit name',
                _do: 'edit_name'
              }, {
                title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Edit URL',
                _do: 'edit_url'
              }, {
                title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
                _do: 'remove'
              }, {
                title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
                _do: 'cancel',
                cancel: true
              }],
              onSelect: function onSelect(item) {
                if (item._do === 'toggle') doToggle(idx);else if (item._do === 'remove') doRemove(idx);else if (item._do === 'edit_name') doEditPluginName(idx);else if (item._do === 'edit_url') doEditPluginUrl(idx);
              }
            });
          });
          $(el).off('hover:long._gl').on('hover:long._gl', function () {
            doToggle(parseInt($(el).data('idx'), 10));
          });
        });
        $(scroll.body()).find('.gs-plugin-add-item').each(function () {
          var el = this;
          $(el).off('hover:focus._gl').on('hover:focus._gl', function () {
            last = el;
            scroll.update($(el), true);
          });
          $(el).off('hover:enter._gl').on('hover:enter._gl', function () {
            doAddPlugin();
          });
        });
      }
      function doEditPluginName(idx) {
        var plugins = getPlugins();
        if (!plugins[idx]) return;
        input({
          title: Lampa.Lang.translate('gramlink_plugins_edit_name') || 'Plugin name',
          value: plugins[idx].name || '',
          onSubmit: function onSubmit(newName) {
            if (!newName || !newName.trim()) return;
            plugins[idx].name = newName.trim();
            savePlugins(plugins);
            renderPlugins();
            showReloadPrompt(function () {
              focusFirst();
            });
          }
        });
      }
      function doEditPluginUrl(idx) {
        var plugins = getPlugins();
        if (!plugins[idx]) return;
        input({
          title: Lampa.Lang.translate('gramlink_plugins_edit_url') || 'Plugin URL',
          value: plugins[idx].url || '',
          onSubmit: function onSubmit(newUrl) {
            if (!newUrl || !newUrl.trim()) return;
            newUrl = newUrl.trim();
            if (!newUrl.match(/^https?:\/\/.+/i)) {
              Lampa.Noty.show('Invalid URL');
              return;
            }
            plugins[idx].url = newUrl;
            savePlugins(plugins);
            renderPlugins();
            showReloadPrompt(function () {
              focusFirst();
            });
          }
        });
      }

      // ═══════════════════════════════════════════════════════
      //  HELPERS
      // ═══════════════════════════════════════════════════════

      function createItem(cls, avatar, title, sub, badgeCls, badgeText, isHtmlAvatar) {
        var el = document.createElement('div');
        el.className = 'gramlink-item selector ' + cls;
        // Ponytail: skip avatar div when empty (plugins don't need checkmark icon)
        var avatarHtml = avatar ? '<div class="gs-avatar">' + (isHtmlAvatar ? avatar : escHtml(avatar)) + '</div>' : '';
        el.innerHTML = avatarHtml + '<div class="gs-content">' + '<div class="gs-title">' + escHtml(title) + '</div>' + '<div class="gs-sub">' + escHtml(sub) + '</div>' + '</div>' + (badgeCls ? '<div class="gs-badge ' + badgeCls + '">' + escHtml(badgeText || '') + '</div>' : '');

        // Native: direct hover:focus listener on every item
        $(el).on('hover:focus', function () {
          last = el;
          scroll.update($(el), true);
        });
        return el;
      }
      function bodyPrep(body) {
        $(body).addClass('gramlink-body--grid').removeClass('gramlink-body--content');
      }
      function showEmpty(body, msg) {
        body.insertAdjacentHTML('beforeend', '<div class="gramlink-item" style="justify-content:center;align-items:center;display:flex;padding:2em;grid-column:1/-1"><span style="color:#8D8D8D">' + escHtml(msg) + '</span></div>');
      }
      function focusTabBar() {
        var firstTab = $(scroll.body()).find('.gramlink-tab').first();
        if (firstTab.length) {
          last = firstTab[0];
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(firstTab[0], scroll.render());
          scroll.immediate(firstTab[0], true);
        }
      }

      // ═══════════════════════════════════════════════════════
      //  ACTIONS
      // ═══════════════════════════════════════════════════════

      function getPlugins() {
        try {
          return Lampa.Storage.get('plugins', []);
        } catch (e) {
          return [];
        }
      }
      function savePlugins(p) {
        Lampa.Storage.set('plugins', p);
      }
      function doToggle(idx) {
        var plugins = getPlugins();
        if (!plugins[idx]) return;
        plugins[idx].status = plugins[idx].status === 1 ? 0 : 1;
        savePlugins(plugins);
        var st = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (st) Profiles.publishDeviceDelta(st, 'device_plugin_status', {
          device_id: getDeviceId(),
          url: plugins[idx].url,
          status: plugins[idx].status
        }, 'all');
        Lampa.Noty.show((plugins[idx].name || 'Plugin') + ': ' + (plugins[idx].status === 1 ? 'on' : 'off'));
        renderPlugins();
        // ponytail: reload so Plugins._loaded syncs with storage
        showReloadPrompt(function () {
          // ponytail: after "No" — restore focus, renderPlugins() replaced DOM so old last is lost
          focusFirst();
        });
      }
      function doRemove(idx) {
        var plugins = getPlugins();
        var url = plugins[idx] ? plugins[idx].url : '';
        plugins.splice(idx, 1);
        savePlugins(plugins);
        var st = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (st) Profiles.publishLocalDelta(st, 'plugin_change', {
          action: 'remove',
          plugin: {
            url: url
          }
        });
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_removed') || 'Plugin removed');
        renderPlugins();
        showReloadPrompt(function () {
          focusFirst();
        });
      }
      function doAddPlugin() {
        input({
          title: Lampa.Lang.translate('gramlink_plugins_add_url') || 'Plugin URL (.js)',
          onSubmit: function onSubmit(url) {
            if (!url) return;
            url = url.trim();
            if (!url.match(/^https?:\/\/.+/i)) {
              Lampa.Noty.show('Invalid URL');
              return;
            }
            var plugins = getPlugins();
            if (plugins.some(function (p) {
              return p.url === url;
            })) {
              Lampa.Noty.show('Already installed');
              return;
            }
            var gn = url.split('/').pop().replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ') || 'Plugin';
            input({
              title: Lampa.Lang.translate('gramlink_plugins_name') || 'Plugin name',
              value: gn,
              onSubmit: function onSubmit(name) {
                var np = {
                  url: url,
                  name: name && name.trim() || gn,
                  status: 1,
                  custom: {}
                };
                Profiles.addToPluginRegistry(url, np.name);
                plugins.push(np);
                savePlugins(plugins);
                var st = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
                if (st) Profiles.publishLocalDelta(st, 'plugin_change', {
                  action: 'add',
                  plugin: np
                });
                Lampa.Noty.show('Plugin added');
                renderPlugins();
                showReloadPrompt(function () {
                  focusFirst();
                });
              }
            });
          }
        });
      }

      // ─── Device actions ─────────────────────────────────

      function showDeviceMenu(did, dname, isThis) {
        var items = [];
        if (!isThis) items.push({
          title: 'Open on this device',
          action: 'open'
        });
        if (isThis) items.push({
          title: Lampa.Lang.translate('gramlink_backup_export') || 'Export Backup',
          action: 'export'
        });
        items.push({
          title: Lampa.Lang.translate('gramlink_backup_import') || 'Import Backup',
          action: 'import'
        });
        if (isThis) items.push({
          title: 'Rename device',
          action: 'rename'
        });
        items.push({
          title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
          cancel: true
        });
        select({
          title: dname,
          items: items,
          onSelect: function onSelect(item) {
            if (item.action === 'open') {
              var a = Lampa.Activity.active();
              if (a && a.card) {
                Broadcast.sendOpenCard(did, a.card);
                Lampa.Noty.show('Sent to ' + dname);
              } else {
                Lampa.Noty.show('Nothing to share');
              }
            } else if (item.action === 'export') exportBackup();else if (item.action === 'import') importBackup();else if (item.action === 'rename') {
              var c = Lampa.Storage.get('gramlink_device_label', getDeviceName());
              input({
                title: 'Device name',
                value: c,
                onSubmit: function onSubmit(n) {
                  if (n && n.trim()) {
                    Lampa.Storage.set('gramlink_device_label', n.trim());
                    Lampa.Noty.show('Device renamed');
                  }
                }
              });
            }
          }
        });
      }

      // ─── Backup (chunked) ──────────────────────────────

      function exportBackup() {
        var c = GatewayClient.getInstance(),
          bt = Lampa.Storage.get(STORAGE_BACKUP_TOPIC, '');
        if (!c.isConnected()) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
          return;
        }
        if (!bt) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_topic_not_ready'));
          return;
        }
        var ch = parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID, ''), 10);
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_uploading'));

        // 1. Collect & chunk
        var collected = collectCategorized();
        var payload = buildExportPayload(collected, {
          device_id: getDeviceId(),
          device_name: getDeviceName()
        });
        var total = payload.chunks.length;

        // 2. Upload chunks sequentially (promise chain)
        var seq = Promise.resolve();
        payload.chunks.forEach(function (ch_data, idx) {
          seq = seq.then(function () {
            var chunkJson = JSON.stringify({
              category: ch_data.category,
              keys: ch_data.keysData
            });
            return c.sendFile(ch, bt, chunkJson, payload.backupName + '/' + ch_data.file_name, JSON.stringify({
              type: 'gramlink_backup_chunk',
              index: idx,
              category: ch_data.category
            })).then(function (msgId) {
              if (msgId) payload.manifest.chunks[idx].telegram_msg_id = msgId;
              Lampa.Noty.show(idx + 1 + '/' + total + ' ' + (Lampa.Lang.translate('gramlink_backup_uploading') || 'chunks'));
            });
          });
        });

        // 3. After all chunks — upload manifest
        seq.then(function () {
          var manifestJson = JSON.stringify(payload.manifest, null, 2);
          return c.sendFile(ch, bt, manifestJson, payload.backupName + '/manifest.json', JSON.stringify({
            device_id: getDeviceId(),
            device_name: getDeviceName(),
            timestamp: Math.floor(Date.now() / 1000)
          }));
        }).then(function (msgId) {
          Lampa.Noty.show(msgId ? Lampa.Lang.translate('gramlink_backup_exported') || 'Backup saved: ' + total + ' chunks' : Lampa.Lang.translate('gramlink_backup_failed') || 'Backup failed');
        }).catch(function () {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Backup failed');
        });
      }
      function importBackup() {
        var c = GatewayClient.getInstance(),
          bt = Lampa.Storage.get(STORAGE_BACKUP_TOPIC, '');
        if (!c.isConnected()) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
          return;
        }
        if (!bt) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_topic_not_ready'));
          return;
        }
        var ch = parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID, ''), 10);
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_fetching'));
        listBackupSessions(c, ch, bt).then(function (sessions) {
          if (!sessions || !sessions.length) {
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_no_files') || 'No backups');
            return;
          }
          select({
            title: Lampa.Lang.translate('gramlink_backup_pick_title') || 'Select backup',
            items: sessions.map(function (s) {
              return {
                title: s.label + (s.deviceInfo ? ' (' + s.deviceInfo + ')' : ''),
                subtitle: Lampa.Lang.translate('gramlink_backup_restore_title') || 'Restore',
                _session: s
              };
            }).concat([{
              title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
              cancel: true
            }]),
            onSelect: function onSelect(item) {
              if (item.cancel || !item._session) return;
              var session = item._session;

              // Confirmation via a second Select
              select({
                title: Lampa.Lang.translate('gramlink_backup_restore_title') || 'Restore backup?',
                items: [{
                  title: session.deviceInfo || 'Device',
                  _info: true
                }, {
                  title: session.label,
                  _info: true
                }, {
                  title: Lampa.Lang.translate('gramlink_backup_restore_btn') || 'Restore',
                  action: 'restore'
                }, {
                  title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
                  cancel: true
                }],
                onSelect: function onSelect(confItem) {
                  if (confItem.action !== 'restore') return;
                  Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_downloading') || 'Restoring...');

                  // Download manifest
                  downloadManifest(c, session).then(function (manifest) {
                    // Find chunk files
                    var chunkFiles = findChunkFiles(session, manifest);
                    if (!chunkFiles.length) {
                      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_invalid') || 'No chunks found');
                      return;
                    }

                    // Safety snapshot (simple: save gramlink keys)
                    // Sequential download and application of chunks
                    var restoreSeq = Promise.resolve();
                    var appliedCount = 0;
                    chunkFiles.forEach(function (cf, idx) {
                      restoreSeq = restoreSeq.then(function () {
                        return c.downloadFile(cf.file).then(function (jsonStr) {
                          if (!jsonStr) return;
                          try {
                            var data = parseChunk(jsonStr);
                            var keys = data.keys || {};
                            Object.keys(keys).forEach(function (k) {
                              Lampa.Storage.set(k, keys[k]);
                            });
                            appliedCount++;
                          } catch (e) {
                            console.warn('GramLink', 'Chunk parse error:', e);
                          }
                          Lampa.Noty.show(idx + 1 + '/' + chunkFiles.length + ' chunks restored');
                        });
                      });
                    });
                    restoreSeq.then(function () {
                      Lampa.Noty.show((Lampa.Lang.translate('gramlink_backup_restored') || 'Restored') + ' (' + appliedCount + '/' + chunkFiles.length + ')');
                      // Notify delta-poll about cursor change
                      Lampa.Listener.send('gramlink_backup_restored', {
                        restored_at: manifest.meta.created_at
                      });
                      // Soft refresh with small delay so Noty has time to display
                      setTimeout(function () {
                        softRefresh();
                      }, 600);
                    }).catch(function (err) {
                      console.error('GramLink', 'Restore error:', err);
                      Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Restore failed');
                    });
                  }).catch(function (err) {
                    Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_invalid') || 'Manifest error');
                    console.error('GramLink', 'Manifest error:', err);
                  });
                }
              });
            }
          });
        }).catch(function () {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed') || 'Failed to list backups');
        });
      }

      // ─── Profile menu ───────────────────────────────────

      function profileMenu($card) {
        var id = $card.data('id'),
          name = $card.data('name') || 'Unnamed',
          active = $card.data('active') === true;
        var items = [];
        items.push({
          title: Lampa.Lang.translate('gramlink_plugins') || 'Plugins',
          action: 'plugins'
        });
        items.push({
          title: Lampa.Lang.translate('gramlink_sync') || 'Sync',
          action: 'sync'
        });
        items.push({
          title: Lampa.Lang.translate('gramlink_profile_rename') || 'Rename',
          action: 'rename'
        });
        if (!active) items.push({
          title: Lampa.Lang.translate('gramlink_delete') || 'Delete',
          action: 'delete'
        });
        items.push({
          title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
          cancel: true
        });
        select({
          title: name,
          items: items,
          onSelect: function onSelect(item) {
            if (item.action === 'plugins') PluginManager.open(id, name, active);else if (item.action === 'sync') Profiles.syncProfile(id, currentProfilesTopicId);else if (item.action === 'rename') doRenameProfile(id, name);else if (item.action === 'delete') deleteProfile(id);
          }
        });
      }
      function doRenameProfile(msgId, currentName) {
        input({
          title: Lampa.Lang.translate('gramlink_profile_rename') || 'Rename profile',
          value: currentName,
          onSubmit: function onSubmit(newName) {
            if (!newName || !newName.trim() || newName.trim() === currentName) return;
            Profiles.renameProfile(msgId, currentProfilesTopicId, newName.trim(), function () {
              renderProfiles();
            });
          }
        });
      }
      function deleteProfile(id) {
        var ch = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
        if (!ch) return;
        GatewayClient.getInstance().deleteMessage(ch, parseInt(id, 10)).then(function (ok) {
          if (ok) {
            if (String(Lampa.Storage.get('gramlink_active_profile', '')) === String(id)) {
              Lampa.Storage.set('gramlink_active_profile', '');
              Lampa.Storage.set('gramlink_active_profile_ts', '');
            }
            renderProfiles();
            Lampa.Noty.show('Profile deleted');
          }
        }).catch(function () {
          Lampa.Noty.show('Delete failed');
        });
      }

      // ═══════════════════════════════════════════════════════
      //  INIT
      // ═══════════════════════════════════════════════════════

      function init() {
        currentChannelId = Lampa.Storage.get(STORAGE_CHANNEL_ID, null);
        Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, null);
        currentProfilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC, null);
        Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC, null);
        Lampa.Storage.get(STORAGE_BACKUP_TOPIC, null);
        var client = GatewayClient.getInstance();
        // Bug 3: show loading while ensureSyncChannel() runs
        _initializing = true;
        renderProfiles(); // Shows "Loading..." because _initializing is true

        client.connect().then(function () {
          return ensureSyncChannel();
        }).then(function () {
          if (self.__destroyed) return;
          _initializing = false;
          var ch = Lampa.Storage.get(STORAGE_CHANNEL_ID, ''),
            sl = Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, '');
          if (ch && sl) client.startHeartbeat(ch, sl);
          self._deltaHandler = function (data) {
            Profiles.applyDelta(data);
          };
          client.on('profile_delta', self._deltaHandler);
          renderProfiles();
          if (refreshTimer) clearInterval(refreshTimer);
          refreshTimer = setInterval(function () {
            if (activeTab === 'profiles') renderProfiles();
          }, 15000);
        }).catch(function (err) {
          if (self.__destroyed) return;
          _initializing = false;
          renderProfiles(); // Shows "No profiles" or loaded data based on what Storage has
          console.warn('GramLink', 'Hub init error:', err);
        });
      }

      // ═══════════════════════════════════════════════════════
      //  CHANNEL / TOPIC MANAGEMENT
      // ═══════════════════════════════════════════════════════

      function ensureSyncChannel() {
        var client = GatewayClient.getInstance();
        if (currentChannelId) return ensureTopics();
        return client.findChannel(CHANNEL_TITLE).then(function (id) {
          if (id) {
            currentChannelId = id;
            Lampa.Storage.set(STORAGE_CHANNEL_ID, id);
            return ensureTopics();
          }
          return createChannel();
        });
      }
      function ensureTopics() {
        var client = GatewayClient.getInstance(),
          ps = [];
        function ensure(name, storeKey, setter) {
          var s = Lampa.Storage.get(storeKey, '');
          if (s) {
            setter(s);
            return Promise.resolve();
          }
          return client.findTopic(currentChannelId, name).then(function (id) {
            if (id) {
              setter(id);
              Lampa.Storage.set(storeKey, id);
              return;
            }
            return client.createTopic(currentChannelId, name).then(function (tid) {
              if (tid) {
                setter(tid);
                Lampa.Storage.set(storeKey, tid);
              }
            });
          });
        }
        ps.push(ensure('sync-log', STORAGE_SYNC_LOG_TOPIC, function (id) {
        }));
        ps.push(ensure('profiles', STORAGE_PROFILES_TOPIC, function (id) {
          currentProfilesTopicId = id;
        }));
        ps.push(ensure('profiles-sync', STORAGE_PROFILES_SYNC_TOPIC, function (id) {
        }));
        ps.push(ensure('backup', STORAGE_BACKUP_TOPIC, function (id) {
        }));
        return Promise.all(ps);
      }
      function createChannel() {
        var client = GatewayClient.getInstance();
        return client.createChannel(CHANNEL_TITLE).then(function (peerId) {
          if (!peerId) throw new Error('Create channel failed');
          currentChannelId = peerId;
          Lampa.Storage.set(STORAGE_CHANNEL_ID, peerId);
          var seq = Promise.resolve();
          TOPIC_NAMES.forEach(function (name) {
            seq = seq.then(function () {
              return client.createTopic(peerId, name).then(function (tid) {
                if (!tid) return;
                var s = '';
                if (name === 'sync-log') {
                  s = STORAGE_SYNC_LOG_TOPIC;
                } else if (name === 'profiles') {
                  s = STORAGE_PROFILES_TOPIC;
                  currentProfilesTopicId = tid;
                } else if (name === 'profiles-sync') {
                  s = STORAGE_PROFILES_SYNC_TOPIC;
                } else if (name === 'backup') {
                  s = STORAGE_BACKUP_TOPIC;
                }
                if (s) Lampa.Storage.set(s, tid);
              }).catch(function (e) {
                console.warn('GramLink', 'Topic ' + name + ':', e);
              });
            });
          });
          return seq;
        }).catch(function (err) {
          Lampa.Noty.show('Failed to create sync channel');
          throw err;
        });
      }

      // getChannelId — imported from sdk/keys (safe version with NaN guard)
      // ─── Misc helpers ───────────────────────────────────
    }

    function startPlugin() {
      window.plugin_gramlink_ready = true;

      // ── Auto-detect GramLink's own URL for safeguard ──────────
      // Captured at script-parse time (IIFE via Rollup) so
      // document.currentScript points to the <script> element
      // that Lampa's putScriptAsync created.
      try {
        if (document.currentScript) {
          var src = document.currentScript.src;
          if (src) window.__gramlink_self_url = src.split('?')[0];
        }
      } catch (e) {}
      if (!window.__gramlink_self_url) {
        // ponytail: fallback for dev / module execution
        window.__gramlink_self_url = './plugins/GramLink.js';
      }
      // ───────────────────────────────────────────────────────────

      vault.migrateIfNeeded();
      var manifest = {
        type: 'plugin',
        version: VERSION,
        author: '@lme_chat',
        name: 'GramLink',
        description: 'Telegram sync via MTProto',
        component: 'gramlink_hub',
        onContextMenu: function onContextMenu(object) {
          var client = GatewayClient.getInstance();
          if (!client.isConnected()) return null;
          return {
            name: 'Open on device',
            description: ''
          };
        },
        onContextLauch: function onContextLauch(data) {
          var card = Lampa.Utils.clearCard ? Lampa.Utils.clearCard(JSON.parse(JSON.stringify(data))) : data;
          Broadcast.showDevicePicker({
            title: 'Open on device',
            onSelect: function onSelect(device) {
              Broadcast.sendOpenCard(device.device_id, card);
              Lampa.Noty.show('Sent to ' + (device.device_name || 'device'));
            }
          });
        }
      };
      Lampa.Manifest.plugins = manifest;
      Lampa.Component.add('gramlink_hub', Hub);
      Lampa.Component.add('gramlink_plugin_manager', PluginManagerComponent);
      lang();
      initSettings();
      Lampa.Template.add('gramlink_style', '<style>.gramlink-activity{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.gramlink-activity .head__title{font-size:1.4em}.gramlink-hub{padding:1em 2em;max-width:50em;margin:0 auto}.gramlink-hub__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2em;padding-bottom:1em;border-bottom:1px solid rgba(255,255,255,0.1)}.gramlink-hub__title{font-size:1.6em;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em}.gramlink-hub__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.5em}.gramlink-hub__section{margin-bottom:2em}.gramlink-hub__section-title{font-size:1.2em;font-weight:600;margin-bottom:1em;color:rgba(255,255,255,0.7)}.gramlink-status{background:rgba(255,255,255,0.05);-webkit-border-radius:.8em;border-radius:.8em;padding:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em}.gramlink-status__indicator{width:1em;height:1em;-webkit-border-radius:50%;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gramlink-status__indicator--connected{background:#4caf50;-webkit-box-shadow:0 0 .6em rgba(76,175,80,0.5);box-shadow:0 0 .6em rgba(76,175,80,0.5)}.gramlink-status__indicator--disconnected{background:#f44336}.gramlink-status__indicator--connecting{background:#ffc107;-webkit-animation:gramlink-pulse 1.5s ease-in-out infinite;animation:gramlink-pulse 1.5s ease-in-out infinite}.gramlink-status__indicator--auth_needed{background:#ff9800}.gramlink-status__indicator--error{background:#f44336}.gramlink-status__info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gramlink-status__label{font-size:1.1em;font-weight:600;margin-bottom:.2em}.gramlink-status__detail{font-size:.9em;color:rgba(255,255,255,0.5)}@-webkit-keyframes gramlink-pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes gramlink-pulse{0%,100%{opacity:1}50%{opacity:.4}}.gramlink-devices__empty{text-align:center;padding:2em;color:rgba(255,255,255,0.4);font-size:1.1em}.gramlink-device{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em;padding:1em 1.2em;background:rgba(255,255,255,0.03);-webkit-border-radius:.6em;border-radius:.6em;margin-bottom:.5em;cursor:pointer;-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s}.gramlink-device.focus,.gramlink-device.hover{background:rgba(255,255,255,0.1);outline:.2em solid #fff;outline-offset:.3em}.gramlink-device__icon{width:2.5em;height:2.5em;-webkit-border-radius:.5em;border-radius:.5em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:.9em;color:white}.gramlink-device__info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gramlink-device__name{font-size:1.1em;font-weight:600}.gramlink-device__meta{font-size:.85em;color:rgba(255,255,255,0.4)}.gramlink-device__status{font-size:.8em;padding:.3em .6em;-webkit-border-radius:.3em;border-radius:.3em;background:rgba(76,175,80,0.15);color:#4caf50}.gramlink-device--this{opacity:.6;cursor:default}.gramlink-auth{padding:1em;text-align:center}.gramlink-auth__qr-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:1.5em;min-height:18em}.gramlink-auth__qr-placeholder{width:16em;height:16em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,0.05);-webkit-border-radius:1em;border-radius:1em}.gramlink-auth__qr-img{width:16em;height:16em;-webkit-border-radius:1em;border-radius:1em;background:white;padding:.5em}.gramlink-auth__status{font-size:1.1em;color:rgba(255,255,255,0.6);line-height:1.5}.gramlink-auth__scan-hint{margin-bottom:.5em;color:rgba(255,255,255,0.8)}.gramlink-auth__confirm-hint{font-size:.85em;color:rgba(255,255,255,0.4)}.gramlink-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em;padding:.6em 1.2em;-webkit-border-radius:.5em;border-radius:.5em;font-size:.9em;font-weight:600;cursor:pointer;border:0;-webkit-transition:background .2s,opacity .2s;-o-transition:background .2s,opacity .2s;transition:background .2s,opacity .2s}.gramlink-btn.focus,.gramlink-btn.hover{outline:.2em solid #fff;outline-offset:.3em}.gramlink-btn--primary{background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);color:white}.gramlink-btn--ghost{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8)}.gramlink-btn--ghost.focus{background:rgba(255,255,255,0.15)}.gramlink-btn--small{padding:.4em .8em;font-size:.8em}@media screen and (max-width:1024px){.gramlink-hub{padding:.8em 1em}.gramlink-tabs{padding-left:1em;padding-right:1em}.gramlink-status{padding:1em}.gramlink-auth__qr-placeholder,.gramlink-auth__qr-img{width:12em;height:12em}.gramlink-auth__qr-container{min-height:14em}}@media screen and (max-width:480px){.gramlink-hub__header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.8em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}}.gramlink-2fa{padding:1em;text-align:center}.gramlink-2fa__desc{font-size:1.1em;color:rgba(255,255,255,0.8);margin-bottom:.5em;line-height:1.4}.gramlink-2fa__hint{font-size:.9em;color:rgba(255,255,255,0.5);margin-bottom:1.5em}.gramlink-2fa__input-wrap{margin-bottom:1.5em}.gramlink-2fa__input{width:100%;max-width:20em;padding:.8em 1em;border:.15em solid rgba(255,255,255,0.2);-webkit-border-radius:.5em;border-radius:.5em;background:rgba(255,255,255,0.08);color:#fff;font-size:1.1em;text-align:center;outline:0;-webkit-box-sizing:border-box;box-sizing:border-box}.gramlink-2fa__input:focus{border-color:#08c}.gramlink-2fa__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gramlink-2fa__btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.7em 1.5em;-webkit-border-radius:.5em;border-radius:.5em;font-size:1em;font-weight:600;cursor:pointer;min-width:8em;-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s}.gramlink-2fa__btn_ok{background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);color:white}.gramlink-2fa__btn_cancel{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8)}.gramlink-2fa__btn.focus,.gramlink-2fa__btn.hover{outline:.2em solid #fff;outline-offset:.3em}.gramlink-tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;padding:0 2em;margin-bottom:1em}.gramlink-tab.active{background:rgba(255,255,255,0.15) !important;border-color:rgba(255,255,255,0.3) !important;color:#fff !important}.gramlink-body--grid>.gramlink-tabs,.gramlink-tabs{grid-column:1/-1}.gramlink-device-avatar{width:2em;height:2em;-webkit-border-radius:.4em;border-radius:.4em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:600;font-size:.9em}.gramlink-avatar{-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:700;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.gramlink-avatar--head{width:24px;height:24px;font-size:11px}.gramlink-avatar--list{width:2em;height:2em;font-size:.9em}.gramlink-profile-avatar{width:2.2em;height:2.2em;-webkit-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:600;font-size:.9em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gs-plugin-toggle{width:1.2em;height:1.2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.2em}.gs-plugin-toggle.on{color:#4caf50}.gs-plugin-toggle.off{color:rgba(255,255,255,0.3)}.gs-status-item .gramlink-status__indicator{margin:auto}.gs-profile-item .gs-avatar{background:rgba(255,255,255,0.06) !important}.gs-profile-item .gs-avatar img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.5em;border-radius:.5em}.gs-profile-add-item{border:2px dashed rgba(255,215,0,0.3);background:transparent !important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:rgba(255,255,255,0.5)}.gs-profile-add-item.focus,.gs-profile-add-item.hover{border-color:rgba(255,215,0,0.7);color:rgba(255,255,255,0.8)}.gs-profile-add-item .gs-avatar{background:-webkit-linear-gradient(315deg,#d4a017 0,#ffd700 100%) !important;background:-o-linear-gradient(315deg,#d4a017 0,#ffd700 100%) !important;background:linear-gradient(135deg,#d4a017 0,#ffd700 100%) !important}.gramlink-item{background:#404040;-webkit-border-radius:1em;border-radius:1em;padding:1.2em 1.4em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.gramlink-item.focus{outline:.3em solid #fff;outline-offset:.3em;-webkit-border-radius:1.2em;border-radius:1.2em}.gramlink-body--grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1em;padding:1em 2em}@media(max-width:1024px){.gramlink-body--grid{grid-template-columns:1fr;padding-bottom:80px}}@media(max-width:480px){.gramlink-body--grid{padding-left:1em;padding-right:1em}}.gramlink-body--grid>.gramlink-item{margin:0;min-height:0}.gramlink-body--grid>.gramlink-item+.gramlink-item{margin:0}.gramlink-body--content{padding:1em 2em}.gs-avatar{width:2.5em;height:2.5em;-webkit-border-radius:.5em;border-radius:.5em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;color:#fff;font-weight:700;font-size:.9em;margin-right:1em}.gs-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gs-title{font-size:1.1em;line-height:normal;margin-bottom:.2em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.gs-sub{font-size:.84em;color:#8d8d8d;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.gs-badge{font-size:.78em;padding:.3em .5em;-webkit-border-radius:.3em;border-radius:.3em;background:rgba(0,0,0,0.18);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:auto}.gs-badge.badge--active{color:#6dce4b}.gs-badge.badge--inactive{color:#dd7337}.gs-badge.badge--info{color:#8d8d8d}.gramlink-body--grid>.gramlink-tabs,.gramlink-tabs{grid-column:1/-1}</style>');
      $('body').append(Lampa.Template.get('gramlink_style', {}, true));
      setupBroadcastListener();
      setupBackupRestoredListener();
      addMenu();
      // ponytail: defer head button — DOM not ready during plugin init
      Lampa.Listener.follow('app', function __glHeadBtn(e) {
        if (e.type === 'ready') {
          addProfileHeadButton();
        }
      });
      Broadcast.setupPlayerPanel();
      Broadcast.addBroadcastButton();
      autoConnect();
      autoActivateProfile();
      setupProfileDeltaListeners();
      setupDeviceSettingsListener();
      startDeltaPolling();
    }

    // ─── Real-time delta sync listeners ─────────────────────

    // ─── Persistent delta polling (same-account cross-device sync) ─

    var deltaPollTimer = null;
    function startDeltaPolling() {
      // ponytail: clear existing timer on re-entry
      if (deltaPollTimer) {
        clearInterval(deltaPollTimer);
        deltaPollTimer = null;
      }
      // Start after connection is established
      var client = GatewayClient.getInstance();
      var pollInterval = getInt(STORAGE_KEYS.POLL_INTERVAL, 10) * 1000;
      var check = setInterval(function () {
        if (client.isConnected()) {
          clearInterval(check);
          // Poll immediately then every pollInterval
          Profiles.refreshDeltas();
          deltaPollTimer = setInterval(function () {
            if (document.hidden) return; // ponytail: skip when tab hidden
            Profiles.refreshDeltas();
          }, pollInterval);
        }
      }, 2000);
    }
    function setupProfileDeltaListeners() {
      if (!window.Lampa || !Lampa.Favorite || !Lampa.Favorite.listener) return;
      Lampa.Favorite.listener.follow('add,added', function (e) {
        if (isSkipPublish()) return;
        var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (!profilesSyncTopicId) return;
        Profiles.publishLocalDelta(profilesSyncTopicId, 'bookmark_add', {
          card_id: e.card.id,
          type: e.where,
          card: Lampa.Utils.clearCard(JSON.parse(JSON.stringify(e.card)))
        });
      });
      Lampa.Favorite.listener.follow('remove', function (e) {
        if (e.method !== 'id') return;
        if (isSkipPublish()) return;
        var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (!profilesSyncTopicId) return;
        Profiles.publishLocalDelta(profilesSyncTopicId, 'bookmark_remove', {
          card_id: e.card.id,
          type: e.where
        });
      });

      // Timecode sync (continue watching) — publish on player stop/destroy
      var lastTimecodePublish = 0;
      Lampa.Listener.follow('state:changed', function (e) {
        if (e.target !== 'timeline' || e.reason !== 'update') return;
        var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (!profilesSyncTopicId) return;

        // Throttle: at most once per 30s to avoid spam from periodic saves
        var now = Date.now();
        if (now - lastTimecodePublish < 30000) return;
        lastTimecodePublish = now;
        var road = e.data && e.data.road;
        if (!road || !road.time) return;
        Profiles.publishLocalDelta(profilesSyncTopicId, 'timecode_update', {
          hash: e.data.hash,
          time: road.time,
          duration: road.duration || 0,
          percent: road.percent || 0
        });
      });
    }

    // ─── Device-scoped settings sync ──────────────────────────
    // ponytail: auto-publish any device-scoped key change as device_setting delta

    function setupDeviceSettingsListener() {
      var lastDevicePublish = {};
      Lampa.Storage.listener.follow('change', function (e) {
        if (!e || !e.key) return;
        // Only sync device-scoped keys
        if (!Profiles.isDeviceKey(e.key)) return;
        var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (!profilesSyncTopicId) return;

        // Throttle: at most once per 5s per key to avoid spam
        var now = Date.now();
        if (lastDevicePublish[e.key] && now - lastDevicePublish[e.key] < 5000) return;
        lastDevicePublish[e.key] = now;
        var value;
        try {
          value = JSON.parse(localStorage.getItem(e.key));
        } catch (x) {
          value = localStorage.getItem(e.key);
        }
        Profiles.publishDeviceDelta(profilesSyncTopicId, 'device_setting', {
          device_id: getDeviceId(),
          key: e.key,
          value: value
        }, 'all');
      });
    }

    // ─── Startup profile activation ─────────────────────────

    function autoActivateProfile() {
      var activeId = Lampa.Storage.get('gramlink_active_profile', '');
      if (!activeId) return;
      var profilesTopicId = Lampa.Storage.get('gramlink_profiles_topic', '');
      var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
      if (!profilesTopicId) return;
      var client = GatewayClient.getInstance();
      var check = setInterval(function () {
        if (document.hidden) return; // ponytail: skip when tab hidden
        if (client.isConnected()) {
          clearInterval(check);
          Profiles.startAutoActivation(profilesTopicId, profilesSyncTopicId);
        }
      }, 2000);
      // ponytail: 30s timeout — stop polling if client doesn't connect
      setTimeout(function () {
        clearInterval(check);
      }, 30000);
    }

    // ─── Auto-connect on startup ──────────────────────────────

    function autoConnect() {
      var client = GatewayClient.getInstance();
      if (!client.hasCredentials()) return;

      // Connect in background once the app is fully ready
      function doConnect() {
        client.connect().then(function () {
          console.log('GramLink', 'Auto-connected to Telegram.');
          Profiles.refreshCacheFromTelegram();
        }).catch(function (err) {
          console.warn('GramLink', 'Auto-connect failed:', err && err.message);
        });
      }
      if (window.appready) doConnect();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') doConnect();
        });
      }
    }

    // ─── Cross-Device Broadcast Handler ──────────────────────

    function setupBroadcastListener() {
      var client = GatewayClient.getInstance();
      client.on('open_card', function (data) {
        // Received "open on this device" command
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_noty_card_received').replace('{device}', data.meta && data.meta.device_name || ''));
        if (data.payload && data.payload.card) {
          Lampa.Activity.push({
            url: '',
            title: data.payload.card.title || '',
            component: 'full',
            page: 1,
            card: data.payload.card
          });
        }
      });
      client.on('play_video', function (data) {
        // Received "play on this device" command
        if (data.payload && data.payload.media) {
          Lampa.Player.play(data.payload.media);
        }
      });
    }

    // ─── Backup restored listener ──────────────────────────

    function setupBackupRestoredListener() {
      Lampa.Listener.follow('gramlink_backup_restored', function (e) {
        // After backup restore — advance delta cursor,
        // so old deltas are not accepted as new
        if (e && e.restored_at) {
          Lampa.Storage.set('gramlink_last_delta_seen', String(e.restored_at));
        }
      });
    }

    // ─── Profile Head Button ────────────────────────────────

    function addProfileHeadButton() {
      var $profileBtn = $('<div class="head__action selector open--gramlink-profile" ' + 'style="display:none">' + '<div class="gramlink-avatar gramlink-avatar--head">?</div>' + '</div>');

      // ponytail: cleanup existing profile button before insert
      $('.open--gramlink-profile').remove();
      // ponytail: insert directly into head__actions, no dependency on .open--profile
      var $headActions = $('.head__actions');
      if ($headActions.length) {
        var $fs = $headActions.find('.full--screen');
        if ($fs.length) $fs.before($profileBtn);else $headActions.prepend($profileBtn);
      } else {
        $('.head__action.open--search').after($profileBtn);
      }
      function updateProfileButton() {
        var client = GatewayClient.getInstance();
        var activeId = Lampa.Storage.get('gramlink_active_profile', '');
        var activeName = Lampa.Storage.get('gramlink_active_profile_name', '');
        if (!client.hasCredentials() || !activeId || !activeName) {
          $profileBtn.hide();
          return;
        }
        $profileBtn.show();
        var $av = $profileBtn.find('.gramlink-avatar');
        var avatarHtml = renderAvatar(activeName, {
          className: 'gramlink-avatar gramlink-avatar--head',
          style: 'width:100%;height:100%;object-fit:cover;border-radius:50%;'
        });
        $av.replaceWith(avatarHtml);
        updateConnectionIndicator();
      }

      // ponytail: connection state → data-state on the button wrapper
      // connected: no attribute (clean), connecting: pulsing, disconnected: dimmed border
      function updateConnectionIndicator() {
        var client = GatewayClient.getInstance();
        if (!client.hasCredentials() || $profileBtn.css('display') === 'none') {
          $profileBtn.removeAttr('data-state');
          return;
        }
        if (client.isConnected()) {
          $profileBtn.removeAttr('data-state');
        } else if (client.isConnecting()) {
          $profileBtn.attr('data-state', 'connecting');
        } else {
          $profileBtn.attr('data-state', 'disconnected');
        }
      }
      updateProfileButton();

      // ponytail: react to connection state changes from the client
      var connClient = GatewayClient.getInstance();
      connClient.on('connection', function (e) {
        updateConnectionIndicator();
      });
      Lampa.Storage.listener.follow('change', function (e) {
        if (e.name === 'gramlink_active_profile' || e.name === 'gramlink_active_profile_name' || e.name === 'gramlink_avatar_style') {
          updateProfileButton();
        }
      });

      // Profile icons should be visible even when GramLink hub is active
      Lampa.Listener.follow('activity', function (e) {
        if ($profileBtn.css('display') === 'none') return;
        // Keep visible unless it's the menu
        if (e.type === 'start' && e.component === 'menu') {
          $profileBtn.hide();
        } else if (e.type === 'stop' && e.component === 'menu') {
          $profileBtn.show();
        }
      });
      $profileBtn.on('hover:enter hover:click hover:touch', function () {
        showProfileSidebar();
      });
    }

    // ─── Profile Sidebar ──────────────────────────────────────

    function showProfileSidebar() {
      var client = GatewayClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Connect to Telegram first');
        return;
      }
      var cachedProfiles = Profiles.getCachedProfiles();
      var hasCache = cachedProfiles.length > 0;
      var enabledCtrl = Lampa.Controller.enabled().name;
      var items = [];

      // "Add profile" — always first (native Lampa pattern)
      items.push({
        title: Lampa.Lang.translate('gramlink_create_profile') || 'Create profile',
        template: 'selectbox_icon',
        icon: '<svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
        _add: true
      });
      if (hasCache) {
        // Profile items from cache
        cachedProfiles.forEach(function (p) {
          var iconHtml = renderAvatar(p.name, {
            className: 'gramlink-avatar gramlink-avatar--list',
            style: 'width:2em;height:2em;object-fit:cover;'
          });
          items.push({
            title: p.name,
            template: 'selectbox_icon',
            icon: iconHtml,
            selected: p.isActive || false,
            subtitle: p.isActive ? Lampa.Lang.translate('gramlink_profile_active') || 'Active' : '',
            _msgId: p.msgId,
            _name: p.name
          });
        });
      }
      Lampa.Select.show({
        title: Lampa.Lang.translate('account_profiles') || 'Profiles',
        items: items,
        onSelect: function onSelect(item) {
          if (item._add) {
            Lampa.Controller.toggle(enabledCtrl);
            Profiles.createProfile(Lampa.Storage.get('gramlink_profiles_topic', ''), Lampa.Storage.get('gramlink_profiles_sync_topic', ''), $());
          } else if (item._msgId) {
            Profiles.quickSwitchProfile(item._msgId);
          }
        },
        onBack: function onBack() {
          Lampa.Controller.toggle(enabledCtrl); // ponytail: restore controller on back
        },
        onFullDraw: function onFullDraw(container) {
          container.append($('<div class="selectbox-item selectbox-item--icon selector">' + '<div class="selectbox-item__icon">' + '<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' + '</div>' + '<div>' + '<div class="selectbox-item__title">' + (Lampa.Lang.translate('gramlink_hub_title') || 'GramLink HUB') + '</div>' + '</div>' + '</div>').on('hover:enter', function () {
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('gramlink_hub_title') || 'GramLink',
              component: 'gramlink_hub',
              page: 1
            });
          }));
        }
      });
    }

    // ─── Menu Button ─────────────────────────────────────────

    function addMenu() {
      function insert() {
        var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg viewBox=\"0 0 24 24\" fill=\"#0088cc\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.587.192l-8.533 7.77h-.001l.003.003-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.22c.309-1.239-.473-1.8-1.282-1.434z\"/>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(Lampa.Lang.translate('gramlink_menu_title'), "</div>\n        </li>"));
        button.on('hover:enter', function () {
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('gramlink_hub_title'),
            component: 'gramlink_hub',
            page: 1
          });
        });
        $('.menu .menu__list').eq(0).append(button);
      }
      if (window.appready) insert();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') insert();
        });
      }
    }

    // ─── Guard ───────────────────────────────────────────────

    if (!window.plugin_gramlink_ready) startPlugin();

    return startPlugin;

})();
