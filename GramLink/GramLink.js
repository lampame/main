(function () {
    'use strict';

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
          en: '{count} profiles imported. Cub account disabled.',
          uk: 'Імпортовано {count} профілів. Cub вимкнено.',
          ru: 'Импортировано {count} профилей. Cub отключен.'
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
          en: 'Author',
          uk: 'Автор',
          ru: 'Автор'
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
        gramlink_plugins_manage_hint: {
          en: 'Add plugins via URL to extend Lampa functionality',
          uk: 'Додавайте плагіни через URL для розширення функціоналу Lampa',
          ru: 'Добавляйте плагины через URL для расширения функционала Lampa'
        }
      });
    }

    function _classCallCheck(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
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

    /**
     * gramjs-loader.js
     * Loads the GramJS browser bundle from rawcdn.githack.com (production CDN).
     *
     * Bundle is hosted at: https://github.com/lampame/TGSBundle
     *
     * URL strategy (githack.com):
     *   Development : https://raw.githack.com/lampame/TGSBundle/main/telegram.min.js
     *                 → new pushes reflected within minutes, no indexing wait
     *   Production  : https://rawcdn.githack.com/lampame/TGSBundle/<commit-or-tag>/telegram.min.js
     *                 → permanently cached based on URL (query string ignored)
     *                 → to update: change BUNDLE_REF to new commit hash or tag
     *                 → to force-invalidate: paste URL on githack.com and click "purge cache"
     *
     * After script load, window.telegram is available with:
     *   window.telegram.TelegramClient  — the main client class
     *   window.telegram.MemorySession   — in-memory session (no fs dependency)
     *   window.telegram.Api             — all TL API types
     */

    var BUNDLE_REF = '653586b3ffec2f9003ec7e1806b5c2e41224eb64';
    var BUNDLE_CDN = 'https://cdn.jsdelivr.net/gh/lampame/TGSBundle@' + BUNDLE_REF + '/telegram.min.js';
    var _loadPromise = null;

    /**
     * Load the GramJS browser bundle.
     * Returns a Promise that resolves with window.telegram when ready.
     * Safe to call multiple times — deduplicates via cached promise.
     */
    function loadGramJS() {
      if (window.telegram && window.telegram.TelegramClient) {
        return Promise.resolve(window.telegram);
      }
      if (_loadPromise) return _loadPromise;
      _loadPromise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = BUNDLE_CDN;
        script.async = true;
        script.onload = function () {
          var tg = window.telegram;
          if (!tg || !tg.TelegramClient) {
            _loadPromise = null;
            reject(new Error('GramLink: bundle loaded but window.telegram.TelegramClient not found'));
            return;
          }
          console.log('GramLink', 'GramJS loaded. TelegramClient OK.');
          resolve(tg);
        };
        script.onerror = function () {
          _loadPromise = null;
          console.error('GramLink', 'Failed to load bundle from:', BUNDLE_CDN);
          reject(new Error('GramLink: Failed to load telegram.min.js'));
        };
        document.head.appendChild(script);
      });
      return _loadPromise;
    }

    /**
     * Convert a hex string (auth_key_hex from backend) to Uint8Array.
     */
    function hexToBytes(hex) {
      var bytes = new Uint8Array(hex.length / 2);
      for (var i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
      }
      return bytes;
    }

    // Storage keys
    var STORAGE_DC_ID = 'gramlink_dc_id';
    var STORAGE_AUTH_KEY = 'gramlink_auth_key_hex';
    var STORAGE_DEVICE_ID = 'gramlink_device_id';
    var STORAGE_CHANNEL_ID$2 = 'gramlink_channel_id';

    // Telegram App credentials — registered at my.telegram.org
    // These are the same API_ID/HASH used in the backend (Telethon)
    var TG_API_ID = 24911245;
    var TG_API_HASH = 'af35604124d731e01a113639b905e10e';
    var instance = null;
    var GramLinkClient = /*#__PURE__*/function () {
      function GramLinkClient() {
        _classCallCheck(this, GramLinkClient);
        this._connected = false;
        this._connecting = false;
        this._listeners = {};
        this._heartbeatTimer = null;
        this._pollTimer = null;
        this._dcPollTimer = null;
        this.tgClient = null; // GramJS TelegramClient instance
      }
      return _createClass(GramLinkClient, [{
        key: "saveCredentials",
        value:
        // ─── Auth helpers (used by auth.js) ────────────────────────

        function saveCredentials(dcId, authKeyHex) {
          Lampa.Storage.set(STORAGE_DC_ID, String(dcId));
          Lampa.Storage.set(STORAGE_AUTH_KEY, authKeyHex);
        }
      }, {
        key: "hasCredentials",
        value: function hasCredentials() {
          var dc = Lampa.Storage.get(STORAGE_DC_ID, '');
          var key = Lampa.Storage.get(STORAGE_AUTH_KEY, '');
          return !!(dc && key);
        }
      }, {
        key: "clearCredentials",
        value: function clearCredentials() {
          Lampa.Storage.set(STORAGE_DC_ID, '');
          Lampa.Storage.set(STORAGE_AUTH_KEY, '');
        }

        // ─── Connection ────────────────────────────────────────────
      }, {
        key: "connect",
        value: function connect() {
          var self = this;
          if (!self.hasCredentials()) {
            return Promise.reject(new Error('Authorization required'));
          }

          // Already connected
          if (self._connected && self.tgClient) {
            return Promise.resolve();
          }

          // Connection in progress — return the same promise
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
          self._connecting = true;
          return loadGramJS().then(function (tg) {
            var TelegramClient = tg.TelegramClient;
            var MemorySession = tg.MemorySession;
            tg.Api;
            var dcId = parseInt(Lampa.Storage.get(STORAGE_DC_ID, ''), 10);
            var authKeyHex = Lampa.Storage.get(STORAGE_AUTH_KEY, '');
            if (!dcId || !authKeyHex) {
              self._connecting = false;
              throw new Error('Authorization required');
            }

            // Restore session from raw key bytes
            var session = new MemorySession();
            var keyBytes = hexToBytes(authKeyHex);

            // Setup authKey — prefer native AuthKey class from GramJS bundle,
            // fallback to duck-typed with pure-JS SHA-1 for keyId calculation.
            function setupAuthKey() {
              // Attempt native AuthKey class (exported from bundle since v2.x)
              if (tg.AuthKey) {
                var nativeKey = new tg.AuthKey();
                return nativeKey.setKey(keyBytes).then(function () {
                  session.authKey = nativeKey;
                });
              }

              // Duck-typed fallback: implement the AuthKey interface manually.
              // Pure-JS SHA-1 for keyId / auxHash calculation:

              function sha1(bytes) {
                var words = [];
                var len = bytes.length;
                for (var i = 0; i < len; i++) {
                  words[i >> 2] |= bytes[i] << 24 - i % 4 * 8;
                }
                words[len >> 2] |= 0x80 << 24 - len % 4 * 8;
                words[(len + 8 >> 6 << 4) + 15] = len * 8;
                var w = new Array(80);
                var a = 1732584193;
                var b = -271733879;
                var c = -1732584194;
                var d = 271733878;
                var e = -1009589776;
                for (var i = 0; i < words.length; i += 16) {
                  var olda = a;
                  var oldb = b;
                  var oldc = c;
                  var oldd = d;
                  var olde = e;
                  for (var j = 0; j < 80; j++) {
                    if (j < 16) w[j] = words[i + j] | 0;else {
                      var val = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
                      w[j] = val << 1 | val >>> 31;
                    }
                    var t = (a << 5 | a >>> 27) + e + w[j] + (j < 20 ? 1518500249 + (b & c | ~b & d) : j < 40 ? 1859775393 + (b ^ c ^ d) : j < 60 ? -1894007588 + (b & c | b & d | c & d) : -899497514 + (b ^ c ^ d)) | 0;
                    e = d;
                    d = c;
                    c = b << 30 | b >>> 2;
                    b = a;
                    a = t;
                  }
                  a = a + olda | 0;
                  b = b + oldb | 0;
                  c = c + oldc | 0;
                  d = d + oldd | 0;
                  e = e + olde | 0;
                }
                var result = new Uint8Array(20);
                var output = [a, b, c, d, e];
                for (var i = 0; i < 20; i++) {
                  result[i] = output[i >> 2] >>> 24 - i % 4 * 8 & 0xff;
                }
                return result;
              }
              function readLE64(bytes, offset) {
                var val = 0n;
                for (var i = 0; i < 8; i++) {
                  val |= BigInt(bytes[offset + i]) << BigInt(i * 8);
                }
                return val;
              }
              var hashBytes = sha1(keyBytes);
              var keyIdVal = readLE64(hashBytes, 12);
              var auxHashVal = readLE64(hashBytes, 0);
              session.authKey = {
                _key: keyBytes,
                getKey: function getKey() {
                  return this._key;
                },
                keyId: keyIdVal,
                auxHash: auxHashVal,
                waitForKey: function waitForKey() {
                  return Promise.resolve();
                },
                setKey: function setKey(key) {
                  var k = key && key.getKey ? key.getKey() : key;
                  if (k) {
                    this._key = k;
                    var h = sha1(k);
                    this.auxHash = readLE64(h, 0);
                    this.keyId = readLE64(h, 12);
                  }
                  return Promise.resolve();
                }
              };
              return Promise.resolve();
            }
            return setupAuthKey().then(function () {
              var targetHost = '';
              var targetPort = 443;
              if (Lampa.Storage.get('gramlink_server_type', 'official') === 'custom') {
                targetHost = Lampa.Storage.get('gramlink_custom_host', '');
                targetPort = parseInt(Lampa.Storage.get('gramlink_custom_port', '443'), 10);
              } else {
                var dcDomains = {
                  1: 'pluto.web.telegram.org',
                  2: 'venus.web.telegram.org',
                  3: 'aurora.web.telegram.org',
                  4: 'vesta.web.telegram.org',
                  5: 'flora.web.telegram.org'
                };
                targetHost = dcDomains[dcId] || 'vesta.web.telegram.org';
              }
              session.setDC(dcId, targetHost, targetPort);
              var clientOptions = {
                connectionRetries: 5,
                useWSS: true,
                deviceModel: 'Lampa Web',
                systemVersion: '1.0',
                appVersion: '1.0',
                langCode: 'en',
                systemLangCode: 'en'
              };
              var proxyOptions = self.buildProxyOptions();
              if (proxyOptions) {
                clientOptions.proxy = proxyOptions;
              }
              var client = new TelegramClient(session, TG_API_ID, TG_API_HASH, clientOptions);
              try {
                client.setLogLevel('error');
              } catch (e) {}
              return client.connect().then(function () {
                self.tgClient = client;
                self._connected = true;
                self._connecting = false;
                console.log('GramLink', 'Connected directly to Telegram MTProto (dc=' + dcId + ')');

                // Start listening for incoming updates (remote commands)
                self._startUpdateListener();

                // Start DC migration observation
                self._startDcPoller();

                // Start heartbeat if we already have the sync channel and log topic resolved
                var channelId = Lampa.Storage.get('gramlink_channel_id', '');
                var syncLogTopicId = Lampa.Storage.get('gramlink_sync_log_topic', '');
                if (channelId && syncLogTopicId) {
                  self.startHeartbeat(channelId, syncLogTopicId);
                }
                return Promise.resolve();
              });
            });
          })["catch"](function (err) {
            self._connecting = false;
            console.error('GramLink', 'Connection error:', err);
            if (self.hasCredentials()) {
              var errMsg = err && (err.message || err.errorMessage || '');
              if (errMsg.indexOf('AUTH_KEY_INVALID') >= 0 || errMsg.indexOf('AUTH_KEY_PERM_EMPTY') >= 0 || errMsg.indexOf('SESSION_PASSWORD_NEEDED') >= 0) {
                self.clearCredentials();
                self._connected = false;
                Lampa.Noty.show(Lampa.Lang.translate('gramlink_error_session_invalid'));
                return Promise.reject(err);
              }
            }
            throw err;
          });
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          this._stopDcPoller();
          this.stopHeartbeat();
          this._stopUpdateListener();
          if (this.tgClient) {
            try {
              this.tgClient.disconnect();
            } catch (e) {}
            this.tgClient = null;
          }
          this._connected = false;
          this._connecting = false;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.disconnect();
          this.clearCredentials();
        }
      }, {
        key: "isConnected",
        value: function isConnected() {
          // Return true if actively connected OR if credentials are saved (user was previously authed)
          // This ensures Settings shows "Logout" even before auto-connect finishes on page reload
          return this._connected && this.tgClient !== null || this.hasCredentials();
        }
      }, {
        key: "isEnabled",
        value: function isEnabled(key) {
          var v = Lampa.Storage.get(key, false);
          return v === true || v === 'true';
        }

        // ─── Proxy options builder ────────────────────────────────
      }, {
        key: "buildProxyOptions",
        value: function buildProxyOptions() {
          if (this.isEnabled('gramlink_proxy_enabled')) {
            return {
              MTProxy: true,
              server: Lampa.Storage.get('gramlink_proxy_host', ''),
              port: parseInt(Lampa.Storage.get('gramlink_proxy_port', ''), 10),
              secret: Lampa.Storage.get('gramlink_proxy_secret', '')
            };
          }
          return null;
        }

        // ─── Reconnect (hot-reload after proxy/server changes) ────
      }, {
        key: "reconnect",
        value: function reconnect() {
          if (this.isConnected() && this.tgClient) {
            var self = this;
            var connectPromise = Promise.resolve().then(function () {
              self.disconnect();
            }).then(function () {
              return self.connect();
            });
            if (self.isEnabled('gramlink_proxy_enabled')) {
              var timeoutPromise = new Promise(function (_, reject) {
                setTimeout(function () {
                  reject(new Error('GramLink: Proxy connection timeout'));
                }, 10000);
              });
              return Promise.race([connectPromise, timeoutPromise])["catch"](function (err) {
                Lampa.Noty.show(Lampa.Lang.translate('gramlink_error_proxy_failed'));
                throw err;
              });
            }
            return connectPromise;
          }
          return Promise.resolve();
        }

        // ─── Publish (send message to Telegram topic) ──────────────

        /**
         * Low-level publish. Sends raw text to a topic in the sync channel.
         * Used by publishDelta() and for direct message sending.
         */
      }, {
        key: "publishRaw",
        value: function publishRaw(threadId, text, silent) {
          if (!this.isConnected()) return Promise.resolve(false);
          var chatId = parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID$2, ''), 10);
          if (!chatId) return Promise.resolve(false);
          var Api = window.telegram.Api;
          var formattingEntities = [new Api.MessageEntityPre({
            offset: 0,
            length: text.length,
            language: 'json'
          })];
          var sendArgs = {
            message: text,
            formattingEntities: formattingEntities
          };
          if (threadId) sendArgs.replyTo = parseInt(threadId, 10);
          if (silent) sendArgs.silent = true;
          return this.tgClient.sendMessage(chatId, sendArgs).then(function (result) {
            return result ? result.id : 0;
          })["catch"](function (err) {
            console.error('GramLink', 'publishRaw error:', err);
            return false;
          });
        }

        /**
         * Publish a profile delta (bookmark/timecode/plugin change).
         * Goes to #profiles-sync topic for real-time cross-device sync.
         */
      }, {
        key: "publishDelta",
        value: function publishDelta(profilesSyncTopicId, subtype, profileMsgId, payload) {
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
        }
      }, {
        key: "publish",
        value: function publish(chatId, threadId, type, payload, targetDeviceId) {
          if (!this.isConnected()) return Promise.resolve(false);
          var msg = JSON.stringify({
            meta: {
              type: type,
              device_id: getDeviceId(),
              device_name: getDeviceName(),
              target_device_id: targetDeviceId || 'all',
              timestamp: Math.floor(Date.now() / 1000),
              schema_version: 1
            },
            payload: payload || {}
          }, null, 2);
          var Api = window.telegram.Api;
          var formattingEntities = [new Api.MessageEntityPre({
            offset: 0,
            length: msg.length,
            language: 'json'
          })];
          var sendArgs = {
            message: msg,
            formattingEntities: formattingEntities
          };
          if (threadId) sendArgs.replyTo = parseInt(threadId, 10);
          var syncLogTopicId = Lampa.Storage.get('gramlink_sync_log_topic', '');
          if (type === 'heartbeat' || threadId && String(threadId) === String(syncLogTopicId)) {
            sendArgs.silent = true;
          }
          return this.tgClient.sendMessage(chatId, sendArgs).then(function (result) {
            return result ? result.id : 0;
          })["catch"](function (err) {
            console.error('GramLink', 'publish error:', err);
            return false;
          });
        }

        // ─── Get online devices (read heartbeat messages) ──────────
      }, {
        key: "getOnlineDevices",
        value: function getOnlineDevices(chatId, threadId) {
          if (!this.isConnected()) return Promise.resolve([]);
          var getArgs = {
            limit: 50
          };
          if (threadId) getArgs.replyTo = parseInt(threadId, 10);
          return this.tgClient.getMessages(chatId, getArgs).then(function (messages) {
            var now = Math.floor(Date.now() / 1000);
            var seen = {};
            (messages || []).forEach(function (m) {
              try {
                var d = JSON.parse(stripCodeFence(m.message || m.text || ''));
                var meta = d && d.meta;
                if (!meta || meta.type !== 'heartbeat') return;
                if (now - meta.timestamp < 90) {
                  if (!seen[meta.device_id] || seen[meta.device_id].timestamp < meta.timestamp) {
                    seen[meta.device_id] = meta;
                  }
                }
              } catch (e) {}
            });
            return Object.values(seen);
          })["catch"](function () {
            return [];
          });
        }

        // ─── Get messages from topic ────────────────────────────────
      }, {
        key: "getMessages",
        value: function getMessages(chatId, threadId, limit) {
          if (!this.isConnected()) return Promise.resolve([]);
          var getArgs = {
            limit: limit || 50
          };
          if (threadId) getArgs.replyTo = parseInt(threadId, 10);
          return this.tgClient.getMessages(chatId, getArgs).then(function (messages) {
            return (messages || []).map(function (m) {
              return {
                id: m.id,
                text: m.message || m.text || '',
                date: m.date,
                _msg: m // preserve raw message for file download
              };
            });
          })["catch"](function () {
            return [];
          });
        }

        /**
         * Get messages from a thread newer than a given timestamp.
         * Used to replay deltas that arrived after the last snapshot.
         */
      }, {
        key: "getMessagesSince",
        value: function getMessagesSince(threadId, sinceTimestamp, limit) {
          if (!this.isConnected()) return Promise.resolve([]);
          var chatId = parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID$2, ''), 10);
          if (!chatId) return Promise.resolve([]);
          var getArgs = {
            limit: limit || 50
          };
          if (threadId) getArgs.replyTo = parseInt(threadId, 10);
          return this.tgClient.getMessages(chatId, getArgs).then(function (messages) {
            return (messages || []).filter(function (m) {
              return m.date >= sinceTimestamp;
            }).map(function (m) {
              return {
                id: m.id,
                text: m.message || m.text || '',
                date: m.date,
                _msg: m
              };
            });
          })["catch"](function () {
            return [];
          });
        }

        // ─── Delete a message ───────────────────────────────────────
      }, {
        key: "deleteMessage",
        value: function deleteMessage(chatId, messageId) {
          if (!this.isConnected()) return Promise.resolve(false);
          return this.tgClient.deleteMessages(chatId, [messageId], {
            revoke: true
          }).then(function () {
            return true;
          })["catch"](function (err) {
            console.error('GramLink', 'deleteMessage error:', err);
            return false;
          });
        }

        // ─── Edit a message ─────────────────────────────────────────
      }, {
        key: "editMessage",
        value: function editMessage(chatId, messageId, newText, threadId) {
          if (!this.isConnected()) return Promise.resolve(false);
          var Api = window.telegram.Api;
          var formattingEntities = [new Api.MessageEntityPre({
            offset: 0,
            length: newText.length,
            language: 'json'
          })];
          var opts = {
            message: messageId,
            text: newText,
            formattingEntities: formattingEntities
          };
          if (threadId) opts.replyTo = parseInt(threadId, 10);
          return this.tgClient.editMessage(chatId, opts).then(function () {
            return true;
          })["catch"](function (err) {
            console.error('GramLink', 'editMessage error:', err);
            return false;
          });
        }

        // ─── File/document operations (backup) ───────────────────────
      }, {
        key: "sendFile",
        value: function sendFile(chatId, threadId, dataStr, fileName, caption) {
          if (!this.isConnected()) return Promise.resolve(null);
          var Api = window.telegram.Api;
          var Buffer = window.telegram.Buffer;
          var client = this.tgClient;
          var fileId = BigInt(Math.floor(Math.random() * 1000000000000));
          var buf = Buffer.from(dataStr, 'utf-8');
          var CHUNK = 512 * 1024;
          var total = Math.ceil(buf.length / CHUNK);
          var seq = Promise.resolve();
          for (var i = 0; i < total; i++) {
            (function (part) {
              var start = part * CHUNK;
              var end = Math.min(start + CHUNK, buf.length);
              var chunk = buf.slice(start, end);
              seq = seq.then(function () {
                return client.invoke(new Api.upload.SaveFilePart({
                  fileId: fileId,
                  filePart: part,
                  bytes: chunk
                }));
              });
            })(i);
          }
          return seq.then(function () {
            return client.getInputEntity(chatId);
          }).then(function (peer) {
            return client.invoke(new Api.messages.SendMedia({
              peer: peer,
              replyTo: new Api.InputReplyToMessage({
                replyToMsgId: parseInt(threadId, 10)
              }),
              media: new Api.InputMediaUploadedDocument({
                file: new Api.InputFile({
                  id: fileId,
                  parts: total,
                  name: fileName,
                  md5Checksum: ''
                }),
                mimeType: 'application/json',
                attributes: [new Api.DocumentAttributeFilename({
                  fileName: fileName
                })]
              }),
              message: caption || '',
              entities: caption ? [new Api.MessageEntityPre({
                offset: 0,
                length: caption.length,
                language: 'json'
              })] : [],
              randomId: BigInt(Math.floor(Math.random() * 1000000000))
            }));
          }).then(function (result) {
            if (result && result.updates) {
              for (var i = 0; i < result.updates.length; i++) {
                if (result.updates[i].id) return result.updates[i].id;
              }
            }
            return null;
          })["catch"](function (err) {
            console.error('GramLink', 'sendFile error:', err);
            return null;
          });
        }
      }, {
        key: "getBackupFiles",
        value: function getBackupFiles(chatId, threadId, limit) {
          if (!this.isConnected()) return Promise.resolve([]);
          var getArgs = {
            limit: limit || 20
          };
          if (threadId) getArgs.replyTo = parseInt(threadId, 10);
          return this.tgClient.getMessages(chatId, getArgs).then(function (messages) {
            return (messages || []).filter(function (m) {
              return m.media && m.media.document;
            }).map(function (m) {
              var fileName = 'backup.json';
              var attrs = m.media.document.attributes || [];
              for (var i = 0; i < attrs.length; i++) {
                if (attrs[i].fileName) {
                  fileName = attrs[i].fileName;
                  break;
                }
              }
              return {
                id: m.id,
                date: m.date,
                fileName: fileName,
                size: m.media.document.size,
                text: m.message || '',
                _msg: m
              };
            });
          })["catch"](function () {
            return [];
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(message) {
          if (!this.isConnected()) return Promise.resolve(null);
          if (!message || !message._msg) return Promise.resolve(null);
          return this.tgClient.downloadMedia(message._msg.media).then(bytesToString)["catch"](function (err) {
            console.error('GramLink', 'downloadFile error:', err);
            return null;
          });
        }
      }, {
        key: "downloadMessageFile",
        value: function downloadMessageFile(message) {
          if (!this.isConnected() || !message || !message._msg) return Promise.resolve(null);
          if (!message._msg.media || !message._msg.media.document) return Promise.resolve(null);
          return this.tgClient.downloadMedia(message._msg.media).then(bytesToString)["catch"](function (err) {
            console.error('GramLink', 'downloadMessageFile error:', err);
            return null;
          });
        }

        // ─── Channel operations via GramJS invoke() ─────────────────

        /**
         * Find an existing channel/megagroup by title from user's dialogs.
         * Returns channel peer_id (negative int) or null.
         */
      }, {
        key: "findChannel",
        value: function findChannel(title) {
          if (!this.isConnected()) return Promise.resolve(null);
          return this.tgClient.getDialogs({
            limit: 200
          }).then(function (dialogs) {
            for (var i = 0; i < dialogs.length; i++) {
              var d = dialogs[i];
              if (d.title === title) {
                var rawId = d.entity && d.entity.id;
                if (!rawId) continue;
                return -100 * Math.pow(10, String(rawId).length) + rawId < 0 ? parseInt('-100' + rawId, 10) : parseInt('-100' + rawId, 10);
              }
            }
            return null;
          })["catch"](function () {
            return null;
          });
        }

        /**
         * Create a new megagroup with Forum topics enabled.
         * Returns the channel peer_id (negative int) or null.
         */
      }, {
        key: "createChannel",
        value: function createChannel(title) {
          if (!this.isConnected()) return Promise.resolve(null);
          var Api = window.telegram.Api;
          var client = this.tgClient;
          return client.invoke(new Api.channels.CreateChannel({
            title: title,
            about: 'GramLink: Lampa device sync channel',
            megagroup: true,
            forImport: false,
            forum: true
          })).then(function (result) {
            var chat = result.chats && result.chats[0];
            if (!chat) throw new Error('Channel create: no chat in result');
            var peerId = parseInt('-100' + chat.id, 10);
            // Enable forum topics on the newly created group
            return client.invoke(new Api.channels.ToggleForum({
              channel: chat,
              enabled: true
            }))["catch"](function () {}).then(function () {
              return peerId;
            });
          })["catch"](function (err) {
            console.error('GramLink', 'createChannel error:', err);
            return null;
          });
        }

        /**
         * Create a forum topic inside a channel.
         * Returns topic_id (int) or null.
         */
      }, {
        key: "createTopic",
        value: function createTopic(channelId, topicTitle) {
          if (!this.isConnected()) return Promise.resolve(null);
          var Api = window.telegram.Api;
          var client = this.tgClient;
          return client.getInputEntity(channelId).then(function (peer) {
            return client.invoke(new Api.channels.CreateForumTopic({
              channel: peer,
              title: topicTitle,
              iconColor: 0x0088CC
            }));
          }).then(function (result) {
            var updates = result.updates || [];
            for (var i = 0; i < updates.length; i++) {
              if (updates[i].id) return updates[i].id;
            }
            return null;
          })["catch"](function (err) {
            console.error('GramLink', 'createTopic error:', err);
            return null;
          });
        }

        /**
         * Find a forum topic by name in a channel.
         * Returns topic_id or null.
         */
      }, {
        key: "findTopic",
        value: function findTopic(channelId, topicTitle) {
          if (!this.isConnected()) return Promise.resolve(null);
          var Api = window.telegram.Api;
          var client = this.tgClient;
          return client.getInputEntity(channelId).then(function (peer) {
            return client.invoke(new Api.channels.GetForumTopics({
              channel: peer,
              q: topicTitle,
              offsetDate: 0,
              offsetId: 0,
              offsetTopic: 0,
              limit: 10
            }));
          }).then(function (result) {
            var topics = result.topics || [];
            for (var i = 0; i < topics.length; i++) {
              if (topics[i].title === topicTitle) return topics[i].id;
            }
            return null;
          })["catch"](function () {
            return null;
          });
        }

        // ─── Heartbeat ─────────────────────────────────────────────
      }, {
        key: "startHeartbeat",
        value: function startHeartbeat(chatId, threadId) {
          this.stopHeartbeat();
          if (!this._connected || !this.isEnabled('gramlink_heartbeat')) return;
          var self = this;
          var myId = getDeviceId();
          var doBeat = function doBeat() {
            if (!self._connected) return;
            if (!self.isEnabled('gramlink_heartbeat')) {
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
            }, null, 2);
            self._findHeartbeatMessage(chatId, threadId, myId).then(function (result) {
              if (result.id) {
                return self.editMessage(chatId, result.id, payload, threadId);
              } else {
                return self.publish(chatId, threadId, 'heartbeat', {}).then(function () {});
              }
            });
          };
          doBeat();
          this._heartbeatTimer = setInterval(doBeat, 60000);
        }
      }, {
        key: "_findHeartbeatMessage",
        value: function _findHeartbeatMessage(chatId, threadId, myDeviceId) {
          if (!this.isConnected()) return Promise.resolve({
            id: null
          });
          var self = this;
          var getArgs = {
            limit: 50
          };
          if (threadId) getArgs.replyTo = parseInt(threadId, 10);
          return this.tgClient.getMessages(chatId, getArgs).then(function (messages) {
            var mine = [];
            (messages || []).forEach(function (m) {
              try {
                var d = JSON.parse(stripCodeFence(m.message || m.text || ''));
                var meta = d && d.meta;
                if (!meta || meta.type !== 'heartbeat') return;
                if (meta.device_id === myDeviceId) {
                  mine.push({
                    id: m.id,
                    ts: meta.timestamp || 0
                  });
                }
              } catch (e) {}
            });
            if (mine.length === 0) return {
              id: null
            };
            mine.sort(function (a, b) {
              return b.ts - a.ts;
            });
            if (mine.length > 1) {
              var toDelete = mine.slice(1).map(function (m) {
                return m.id;
              });
              self.tgClient.deleteMessages(chatId, toDelete, {
                revoke: true
              })["catch"](function () {});
            }
            return {
              id: mine[0].id
            };
          })["catch"](function () {
            return {
              id: null
            };
          });
        }
      }, {
        key: "stopHeartbeat",
        value: function stopHeartbeat() {
          if (this._heartbeatTimer) {
            clearInterval(this._heartbeatTimer);
            this._heartbeatTimer = null;
          }
        }

        // ─── DC migration observer ────────────────────────────────
      }, {
        key: "_startDcPoller",
        value: function _startDcPoller() {
          var self = this;
          self._stopDcPoller();
          self._dcPollTimer = setInterval(function () {
            if (!self.tgClient || !self.tgClient.session) return;
            var currentDc = self.tgClient.session.dcId;
            if (!currentDc) return;
            var savedDc = parseInt(Lampa.Storage.get(STORAGE_DC_ID, ''), 10);
            if (currentDc !== savedDc) {
              Lampa.Storage.set(STORAGE_DC_ID, String(currentDc));
            }
          }, 60000);
        }
      }, {
        key: "_stopDcPoller",
        value: function _stopDcPoller() {
          if (this._dcPollTimer) {
            clearInterval(this._dcPollTimer);
            this._dcPollTimer = null;
          }
        }

        // ─── Update listener (incoming remote commands) ─────────────
      }, {
        key: "_startUpdateListener",
        value: function _startUpdateListener() {
          var self = this;
          if (!self.tgClient) return;
          self.tgClient.addEventHandler(function (update) {
            try {
              var msg = update.message;
              if (!msg || !msg.message) return;
              var d = JSON.parse(stripCodeFence(msg.message));
              if (!d || !d.meta) return;
              var myId = getDeviceId();

              // Profile deltas: pass through for active profile processing
              if (d.meta.type === 'profile_delta') {
                self._emit('profile_delta', d);
                return;
              }

              // Remote commands: check target_device_id
              var targetId = d.meta.target_device_id;
              if (targetId !== 'all' && targetId !== myId) return;
              if (d.meta.device_id === myId) return;
              self._emit(d.meta.type, d);
            } catch (e) {}
          });
        }
      }, {
        key: "_stopUpdateListener",
        value: function _stopUpdateListener() {
          // GramJS cleans up handlers on disconnect
        }

        // ─── Event emitter ─────────────────────────────────────────
      }, {
        key: "on",
        value: function on(event, cb) {
          if (!this._listeners[event]) this._listeners[event] = [];
          this._listeners[event].push(cb);
        }
      }, {
        key: "off",
        value: function off(event, cb) {
          if (!this._listeners[event]) return;
          this._listeners[event] = this._listeners[event].filter(function (f) {
            return f !== cb;
          });
        }
      }, {
        key: "_emit",
        value: function _emit(event, data) {
          var handlers = this._listeners[event] || [];
          handlers.forEach(function (cb) {
            try {
              cb(data);
            } catch (e) {
              console.error('GramLink', 'Listener error:', e);
            }
          });
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          if (!instance) instance = new GramLinkClient();
          return instance;
        }
      }]);
    }(); // ─── UTF-8 decode helper ─────────────────────────────────
    function bytesToString(data) {
      if (!data) return null;
      try {
        return new TextDecoder('utf-8', {
          fatal: false
        }).decode(data);
      } catch (e) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
          str += String.fromCharCode(data[i]);
        }
        return str;
      }
    }

    // ─── Device fingerprinting ────────────────────────────────

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
    function getDeviceId() {
      var id = Lampa.Storage.get(STORAGE_DEVICE_ID, '');
      if (!id) {
        id = 'tv_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        Lampa.Storage.set(STORAGE_DEVICE_ID, id);
      }
      return id;
    }
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

    // ─── Message parsing helpers ──────────────────────────────

    function stripCodeFence(text) {
      if (!text) return text;
      return text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    }

    /**
     * auth.js — QR + 2FA authorization flow via GramJS (no backend)
     *
     * Uses GramJS high-level API client.signInUserWithQrCode() which handles:
     *   1. auth.exportLoginToken → QR code generation (regenerated ~every 30s)
     *   2. UpdateLoginToken push + polling wait
     *   3. DC migration via auth.exportLoginToken retry on LoginTokenMigrateTo
     *   4. SESSION_PASSWORD_NEEDED → signInWithPassword (SRP computed in-browser)
     *
     * On success: extracts dcId + authKey bytes from the active GramJS session
     * and saves them to Lampa.Storage via Client.getInstance().saveCredentials().
     *
     * Architecture: This is a pure browser-side flow. No HTTP calls to any backend.
     * The GramJS bundle is loaded from lampame/TGSBundle CDN (see utils/gramjs-loader.js).
     *
     * Flow (per brws.md analysis):
     *   1. Load GramJS bundle → build TelegramClient with fresh MemorySession → connect()
     *   2. client.signInUserWithQrCode() starts ExportLoginToken polling
     *   3. qrCode({ token }) callback → render QR via Lampa.Utils.qrcode()
     *   4. User scans QR on phone → phone calls auth.acceptLoginToken
     *   5. Server pushes UpdateLoginToken → GramJS re-exports token
     *   6a. No 2FA: LoginTokenSuccess → auth complete
     *   6b. 2FA: SESSION_PASSWORD_NEEDED → signInWithPassword called internally by GramJS
     *   7. password(hint) callback → Lampa.Input.edit → user types password
     *   8. SRP computed locally (100k PBKDF2-SHA512 + mod-exp) → auth.CheckPassword
     *   9. Success: save dcId + authKey hex, trigger Client.getInstance().connect()
     */
    var authCancelFlag = false;
    var tgClient = null; // Temporary GramJS client used during auth flow

    /**
     * Cancel the current auth flow and dispose of the temporary client.
     *
     * Note: we deliberately do NOT call client.disconnect(). GramJS issue #615
     * shows that disconnect() leaves _updateLoop running until its pending RPC
     * times out (~10s) and that TIMEOUT surfaces as a console error we cannot
     * suppress cleanly. The temporary client has fulfilled its purpose once auth
     * succeeds; dropping the reference lets it idle until page reload. A second
     * client (Client.getInstance().connect()) is unaffected — it owns its own
     * TelegramClient instance.
     */
    function cancelAuth() {
      authCancelFlag = true;
      tgClient = null;
    }

    /**
     * Resolve API credentials from Lampa.Storage.
     *   gramlink_app_type === 'lampa' (default) → use Lampa's bundled credentials
     *   gramlink_app_type === 'custom' → use gramlink_api_id + gramlink_api_hash from storage
     */
    function getApiCredentials() {
      var apiId = 24911245;
      var apiHash = 'af35604124d731e01a113639b905e10e';
      var appType = Lampa.Storage.get('gramlink_app_type', 'lampa');
      if (appType === 'custom') {
        apiId = parseInt(Lampa.Storage.get('gramlink_api_id', ''), 10);
        apiHash = Lampa.Storage.get('gramlink_api_hash', '');
      }
      return {
        apiId: apiId,
        apiHash: apiHash
      };
    }
    function startLogin() {
      // Cancel any previous auth session that may still be connected
      cancelAuth();
      authCancelFlag = false;

      // ── Modal HTML (preserves existing structure and CSS classes) ──────
      var html = $('<div class="gramlink-auth" style="padding:1em;text-align:center">' + '<div class="gramlink-auth__qr-placeholder" style="width:16em;height:16em;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);border-radius:1em;margin:0 auto">' + '<svg viewBox="0 0 64 64" width="48" height="48" fill="rgba(255,255,255,0.3)">' + '<rect x="4" y="4" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="36" y="4" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="4" y="36" width="24" height="24" rx="2" fill="currentColor"/>' + '<rect x="44" y="44" width="8" height="8" rx="1" fill="currentColor"/>' + '<rect x="36" y="44" width="4" height="8" rx="1" fill="currentColor"/>' + '<rect x="44" y="36" width="8" height="4" rx="1" fill="currentColor"/>' + '</svg>' + '</div>' + '<div class="gramlink-auth__qr-code" style="display:none;width:16em;height:16em;margin:0 auto"></div>' + '<div style="margin:1em 0 0.5em;font-size:1.1em;color:rgba(255,255,255,0.6)" id="gs-status"></div>' + '</div>');
      var enabledCtrl = Lampa.Controller.enabled().name;
      Lampa.Modal.open({
        title: 'Telegram Authorization',
        html: html,
        size: 'medium',
        onBack: function onBack() {
          cancelAuth();
          Lampa.Modal.close();
          Lampa.Controller.toggle(enabledCtrl);
        }
      });
      var statusEl = html.find('#gs-status');
      var qrEl = html.find('.gramlink-auth__qr-code');
      var qrPlaceholder = html.find('.gramlink-auth__qr-placeholder');

      // ── 1. Validate API credentials ──────────────────────────────────
      var creds = getApiCredentials();
      if (!creds.apiId || !creds.apiHash) {
        statusEl.text('API credentials missing — configure in Settings');
        Lampa.Noty.show('GramLink: Set API ID/Hash in Settings first');
        return;
      }
      statusEl.text('Loading GramJS...');

      // ── 2. Load GramJS bundle, connect, start QR auth ───────────────
      loadGramJS().then(function (tg) {
        if (authCancelFlag) return;
        var TelegramClient = tg.TelegramClient;
        var MemorySession = tg.MemorySession;
        statusEl.text('Connecting to Telegram...');

        // Build a GramJS client with a FRESH empty MemorySession.
        // No saved credentials — this is a first-time auth flow.
        var session = new MemorySession();
        var client = new TelegramClient(session, creds.apiId, creds.apiHash, {
          connectionRetries: 3,
          useWSS: true,
          deviceModel: 'Lampa Web',
          systemVersion: '1.0',
          appVersion: '1.0',
          langCode: 'en',
          systemLangCode: 'en'
        });
        try {
          client.setLogLevel('error');
        } catch (e) {}
        tgClient = client; // Save for cancelAuth cleanup

        // Step A: Establish MTProto connection (key exchange)
        return client.connect().then(function () {
          if (authCancelFlag) return;
          statusEl.html('<div>Scan with Telegram</div>' + '<div style="font-size:0.85em;color:rgba(255,255,255,0.4)">' + 'Open Telegram → Settings → Devices → Scan QR' + '</div>');

          // Step B: High-level QR auth flow.
          // GramJS handles: ExportLoginToken polling, UpdateLoginToken push,
          // DC migration, and SESSION_PASSWORD_NEEDED → signInWithPassword.
          return client.signInUserWithQrCode({
            apiId: creds.apiId,
            apiHash: creds.apiHash
          }, {
            // ── QR code render callback ───────────────────────
            qrCode: function qrCode(qrData) {
              var token = qrData.token;
              var b64 = token.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
              var qrUrl = 'tg://login?token=' + b64;
              qrPlaceholder.hide();
              qrEl.show().empty();
              Lampa.Utils.qrcode(qrUrl, qrEl, function () {});
              setTimeout(function () {
                var s = qrEl.find('svg');
                if (s.length) s.css({
                  width: '14em',
                  height: '14em'
                });
              }, 100);
            },
            // ── 2FA password callback ─────────────────────────
            password: function password(hint) {
              // Called by GramJS when SESSION_PASSWORD_NEEDED is caught.
              // Returns a Promise<string> — GramJS waits for resolution,
              // then computes SRP and calls auth.CheckPassword.
              return new Promise(function (resolve, reject) {
                // Close QR modal briefly to show Input.edit
                Lampa.Modal.close();
                Lampa.Input.edit({
                  title: hint ? '2FA Password (hint: ' + hint + ')' : '2FA Password',
                  value: '',
                  free: true,
                  nosave: true
                }, function (val) {
                  if (val && String(val).trim()) {
                    // Re-open QR modal for final status
                    Lampa.Modal.open({
                      title: 'Telegram Authorization',
                      html: html,
                      size: 'medium',
                      onBack: function onBack() {
                        cancelAuth();
                        Lampa.Modal.close();
                        Lampa.Controller.toggle(enabledCtrl);
                        reject(new Error('AUTH_USER_CANCEL'));
                      }
                    });
                    statusEl.text('Verifying password...');
                    resolve(String(val).trim());
                  } else {
                    // User cancelled password input (pressed Back)
                    cancelAuth();
                    Lampa.Noty.show('Auth cancelled');
                    Lampa.Controller.toggle(enabledCtrl);
                    reject(new Error('AUTH_USER_CANCEL'));
                  }
                });
              });
            },
            // ── Error callback ────────────────────────────────
            onError: function onError(err) {
              console.error('GramLink', 'Auth error:', err && (err.message || err.errorMessage));
              if (authCancelFlag) return true;
              Lampa.Noty.show('GramLink auth error: ' + (err.message || err.errorMessage || 'unknown error'));
              return false; // Don't stop the auth flow
            }
          });
        });
      }).then(function (user) {
        // ── 3. Auth succeeded — extract session credentials ─────────
        if (authCancelFlag || !user) return;
        var activeClient = tgClient;
        if (!activeClient || !activeClient.session) {
          throw new Error('No active session after auth');
        }

        // Read dcId from the active session (after any DC migration)
        var dcId = activeClient.session.dcId;

        // Read auth key bytes (256-byte MTProto session key)
        var authKeyObj = activeClient.session.authKey;
        if (!authKeyObj || typeof authKeyObj.getKey !== 'function') {
          throw new Error('No auth key in session after auth');
        }
        var authKeyBytes = authKeyObj.getKey();
        if (!dcId || !authKeyBytes || authKeyBytes.length !== 256) {
          throw new Error('Invalid dcId or authKey after auth (key length: ' + (authKeyBytes ? authKeyBytes.length : 0) + ')');
        }

        // Convert auth key bytes to hex string (safe for Buffer or Uint8Array)
        function bytesToHex(bytes) {
          var hex = '';
          for (var i = 0; i < bytes.length; i++) {
            var b = bytes[i];
            hex += (b < 16 ? '0' : '') + b.toString(16);
          }
          return hex;
        }
        var authKeyHex = bytesToHex(authKeyBytes);
        console.log('GramLink', 'Auth success — dcId:', dcId, 'key length:', authKeyHex.length);

        // Save via Client singleton (same storage keys as before)
        GramLinkClient.getInstance().saveCredentials(dcId, authKeyHex);

        // ── 4. Cleanup and connect ────────────────────────────────────
        cancelAuth();
        Lampa.Modal.close();
        Lampa.Noty.show('GramLink: Connecting to Telegram...');
        Lampa.Settings.update();

        // Verify the saved session works by triggering a connection
        GramLinkClient.getInstance().connect().then(function () {
          Lampa.Noty.show('GramLink: Connected!');
          Lampa.Settings.update();
        })["catch"](function (err) {
          console.error('GramLink', 'Post-auth connect failed:', err);
          Lampa.Noty.show('GramLink: Connection failed — ' + (err.message || 'unknown error'));
        });
      })["catch"](function (err) {
        // ── 5. Auth failed — show error ───────────────────────────────
        if (authCancelFlag) return;
        // AUTH_USER_CANCEL is our internal signal, not a real error
        if (err && err.message === 'AUTH_USER_CANCEL') return;
        console.error('GramLink', 'Auth flow error:', err && (err.message || err.errorMessage));

        // Update status in modal if it's still open
        var msgEl = html.find('#gs-status');
        if (msgEl.length) {
          msgEl.text('Error: ' + (err.message || err.errorMessage || 'unknown'));
        }
        Lampa.Noty.show('GramLink: Auth failed — ' + (err.message || err.errorMessage || 'unknown error'));
      });
    }

    /**
     * plugin_manager.js — GramLink Plugin Manager
     *
     * Activity-компонента для перегляду та редагування списку плагінів профілю.
     * Побудована на нативному патерні Lampa Component (Lampa.Scroll + .settings-folder).
     * Публічний API PluginManager.open() збережено для settings.js та profiles.js.
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
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            Navigator.move('right');
          },
          back: function back() {
            Lampa.Activity.backward();
          }
        });
        Lampa.Controller.toggle('content');
      };
      self.pause = function () {};
      self.stop = function () {};
      self.destroy = function () {
        if (self.__destroyed) return;
        self.__destroyed = true;
        try {
          if (scroll) scroll.destroy();
        } catch (e) {}
        try {
          self.html.remove();
        } catch (e) {}
      };
      self.back = function () {
        Lampa.Activity.backward();
      };

      // ─── Рендер списку плагінів ────────────────────────────

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

      // ─── Біндинг подій ─────────────────────────────────────

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

      // ─── Підменю для конкретного плагіна ───────────────────

      function showPluginMenu(plugin, idx) {
        if (!plugin) return;
        var isOn = plugin.status === 1;
        Lampa.Select.show({
          title: plugin.name || plugin.url,
          items: [{
            title: Lampa.Lang.translate(isOn ? 'gramlink_plugins_toggle_off' : 'gramlink_plugins_toggle_on') || (isOn ? 'Disable' : 'Enable'),
            _do: 'toggle'
          }, {
            title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove',
            _do: 'remove'
          }, {
            title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
            _do: 'cancel'
          }],
          onBack: function onBack() {
            Lampa.Controller.toggle('gramlink_plugins');
          },
          onSelect: function onSelect(item) {
            if (item._do === 'toggle') {
              doToggle(plugin, idx);
            } else if (item._do === 'remove') {
              doRemoveConfirm(plugin, idx);
            } else {
              Lampa.Controller.toggle('gramlink_plugins');
            }
          }
        });
      }

      // ─── Дії ───────────────────────────────────────────────

      function doToggle(plugin, idx) {
        plugin.status = plugin.status === 1 ? 0 : 1;
        plugins[idx] = plugin;
        if (isActive) {
          var live = getLivePlugins();
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
      }
      function doAddPlugin() {
        Lampa.Input.edit({
          title: Lampa.Lang.translate('gramlink_plugins_add_url') || 'Plugin URL (.js)',
          free: true,
          nosave: true,
          align: 'center'
        }, function (url) {
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
          var guessedName = extractNameFromUrl$1(url);
          Lampa.Input.edit({
            title: Lampa.Lang.translate('gramlink_plugins_name') || 'Plugin name',
            free: true,
            nosave: true,
            align: 'center',
            value: guessedName
          }, function (name) {
            var newPlugin = {
              url: url,
              name: name && name.trim() || guessedName,
              status: 1,
              custom: {}
            };
            plugins.push(newPlugin);
            if (isActive) {
              var live = getLivePlugins();
              live.push(newPlugin);
              Lampa.Storage.set('plugins', live);
              publishDelta('add', newPlugin);
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_added') || 'Plugin added');
              reRender();
            } else {
              saveSnapshot(function () {
                reRender();
              });
            }
          });
        });
      }
      function doRemoveConfirm(plugin, idx) {
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
            Lampa.Controller.toggle('gramlink_plugins');
          },
          onSelect: function onSelect(item) {
            if (item._do === 'remove') {
              plugins.splice(idx, 1);
              if (isActive) {
                var live = getLivePlugins().filter(function (p) {
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
              } else {
                saveSnapshot(function () {
                  reRender();
                });
              }
            } else {
              Lampa.Controller.toggle('gramlink_plugins');
            }
          }
        });
      }

      // ─── Збереження snapshot для неактивного профілю ───────

      function saveSnapshot(onDone) {
        var client = GramLinkClient.getInstance();
        var channelId = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
        var topicId = Lampa.Storage.get('gramlink_profiles_topic', '');
        if (!client.isConnected() || !channelId || !topicId) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected') || 'Not connected');
          if (onDone) onDone();
          return;
        }
        var now = Math.floor(Date.now() / 1000);
        var fileData = JSON.parse(JSON.stringify(originalData || {}));
        fileData.plugins = clonePlugins(plugins);
        if (!fileData.profile_meta) fileData.profile_meta = {};
        fileData.profile_meta.updated = now;
        var caption = JSON.stringify({
          meta: {
            type: 'profile',
            timestamp: now,
            version: 2
          },
          payload: {
            profile: {
              name: profileName,
              updated: now
            }
          }
        });
        var fileName = 'profile_' + profileName.replace(/[^a-zA-Z0-9]/g, '_') + '_' + now + '.json';
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_saving') || 'Saving…');
        client.sendFile(channelId, topicId, JSON.stringify(fileData, null, 2), fileName, caption).then(function (newMsgId) {
          if (newMsgId) {
            client.deleteMessage(channelId, profileMsgId)["catch"](function () {});
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
        })["catch"](function () {
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
        Lampa.Controller.toggle('gramlink_plugins');
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    //  Завантаження snapshot для неактивного профілю
    // ═══════════════════════════════════════════════════════════════════

    function loadSnapshotThenPush(profileMsgId, profileName) {
      var client = GramLinkClient.getInstance();
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
                _plugins: clonePlugins(data.plugins || []),
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
      })["catch"](function () {
        Lampa.Noty.show('Could not load profile data');
      });
    }

    // ═══════════════════════════════════════════════════════════════════
    //  Публічний API
    // ═══════════════════════════════════════════════════════════════════

    var PluginManager = {
      open: function open(profileMsgId, profileName, isActive) {
        if (isActive) {
          var plugins = clonePlugins(getLivePlugins());
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
          if (!GramLinkClient.getInstance().isConnected()) {
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

    function getLivePlugins() {
      try {
        return Lampa.Storage.get('plugins', []);
      } catch (e) {
        return [];
      }
    }
    function clonePlugins(arr) {
      try {
        return JSON.parse(JSON.stringify(arr || []));
      } catch (e) {
        return [];
      }
    }
    function extractNameFromUrl$1(url) {
      try {
        var parts = url.split('/');
        var fname = parts[parts.length - 1] || parts[parts.length - 2] || 'Plugin';
        return fname.replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ');
      } catch (e) {
        return 'Plugin';
      }
    }
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
    function escHtml(str) {
      if (!str) return '';
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    /**
     * helpers.js — Shared utility functions for GramLink
     */

    function timeAgo(ts) {
      var diff = Math.floor(Date.now() / 1000) - (ts || 0);
      if (diff < 60) return 'now';
      if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
      if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
      return Math.floor(diff / 86400) + 'd ago';
    }

    var _skipNextPublish = false;
    var STORAGE_ACTIVE_PROFILE = 'gramlink_active_profile';
    var STORAGE_ACTIVE_PROFILE_TS = 'gramlink_active_profile_ts';
    var STORAGE_PROFILES_TOPIC$1 = 'gramlink_profiles_topic';
    var STORAGE_PROFILES_SYNC_TOPIC$1 = 'gramlink_profiles_sync_topic';
    var STORAGE_CHANNEL_ID$1 = 'gramlink_channel_id';
    var STORAGE_PROFILES_CACHE = 'gramlink_profiles_cache';
    var STORAGE_PLUGIN_REGISTRY = 'gramlink_plugin_registry';

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
      }],
      timestampPrefix: 'gramlink_ts_'
    };
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
    var BACKUP_PREFIX = 'gramlink_pbak_';

    // ─── Profile cache (for sidebar) ──────────────────────────

    function saveProfilesCache(profileMessages) {
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      var cacheData = profileMessages.map(function (m) {
        try {
          var d = JSON.parse(stripCodeFence(m.text));
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
    function extractNameFromUrl(url) {
      try {
        var parts = url.split('/');
        var fname = parts[parts.length - 1] || parts[parts.length - 2] || 'Plugin';
        return fname.replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ');
      } catch (e) {
        return 'Plugin';
      }
    }

    /** Fetch profiles from Telegram and populate cache (called on startup). */
    function refreshCacheFromTelegram() {
      var profilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC$1, '');
      if (!profilesTopicId) return;
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return;
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var profileMessages = msgs.filter(function (m) {
          if (!m.text) return false;
          try {
            var d = JSON.parse(stripCodeFence(m.text));
            return d && d.meta && d.meta.type === 'profile';
          } catch (e) {
            return false;
          }
        });
        if (profileMessages.length > 0) {
          saveProfilesCache(profileMessages);
        }
      })["catch"](function () {});
    }
    function getChannelId() {
      return parseInt(Lampa.Storage.get(STORAGE_CHANNEL_ID$1, ''), 10);
    }

    // ─── Avatar generation ──────────────────────────────────

    function getAvatar(name) {
      if (!name) return '??';
      var parts = name.trim().split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] || '') + (parts[1][0] || '');
      }
      return name.slice(0, 2);
    }
    function avatarColor(name) {
      if (!name) return '#0088cc';
      var hash = 0;
      for (var i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688', '#4caf50', '#ff9800', '#ff5722', '#795548'];
      return colors[Math.abs(hash) % colors.length];
    }

    // ─── Profile list rendering ─────────────────────────────

    function refreshProfiles(profilesTopicId, profilesSyncTopicId, container, onDone) {
      if (!profilesTopicId) return;
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return;
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        container.empty();
        var profileMessages = msgs.filter(function (m) {
          if (!m.text) return false;
          try {
            var d = JSON.parse(stripCodeFence(m.text));
            return d && d.meta && d.meta.type === 'profile';
          } catch (e) {
            return false;
          }
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
        var $addCard = $('<div class="profile-card profile-card--add selector" data-action="add">' + '<div>' + '<div class="profile-card__add-icon">+</div>' + '<div>' + (Lampa.Lang.translate('gramlink_create_profile') || 'Create profile') + '</div>' + '</div>' + '</div>');
        $grid.append($addCard);

        // 2. Profile cards
        profileMessages.forEach(function (m) {
          var d = JSON.parse(stripCodeFence(m.text));
          var p = d.payload && d.payload.profile;
          if (!p) return;
          var isActive = String(activeId) === String(m.id);
          var avatar = p.avatar || getAvatar(p.name);
          var avatarColorVal = avatarColor(p.name);

          // Count bookmarks from stored data (approximate from file_view/favorite)
          var nameSafe = (p.name || 'Unnamed').replace(/"/g, '&quot;');
          var $card = $('<div class="profile-card selector' + (isActive ? ' profile-card--active' : '') + '" ' + 'data-id="' + m.id + '" ' + 'data-name="' + nameSafe + '" ' + 'data-active="' + isActive + '">' + '<div class="profile-card__header">' + '<div class="profile-card__name">' + '<div class="gramlink-avatar gramlink-avatar--list" style="background:' + avatarColorVal + '">' + avatar + '</div>' + '<span>' + (p.name || 'Unnamed') + '</span>' + '</div>' + '</div>' + '</div>');
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
      })["catch"](function () {
        if (onDone) onDone();
      });
    }
    function doSwitch(msgId, profilesTopicId, profilesSyncTopicId, container) {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected');
        return;
      }
      var currentId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (currentId) {
        autoSaveProfile(currentId, profilesTopicId);
      }
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = null;
        msgs.forEach(function (m) {
          if (String(m.id) === String(msgId)) target = m;
        });
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
          try {
            var captionData = JSON.parse(stripCodeFence(target.text));
            var profileName = captionData.payload && captionData.payload.profile && captionData.payload.profile.name;
            if (profileName) Lampa.Storage.set('gramlink_active_profile_name', profileName);
          } catch (e) {}
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
            window.location.reload();
          });
        });
      })["catch"](function (e) {
        console.error('GramLink', 'Switch profile error:', e);
        Lampa.Noty.show('Switch failed');
      });
    }

    // ─── Delta replay ───────────────────────────────────────

    function replayDeltas(profilesSyncTopicId, profileMsgId, sinceTimestamp, snapshotData) {
      if (!profilesSyncTopicId) return Promise.resolve(snapshotData);
      var client = GramLinkClient.getInstance();
      return client.getMessagesSince(profilesSyncTopicId, sinceTimestamp, 50).then(function (deltas) {
        var data = JSON.parse(JSON.stringify(snapshotData));
        deltas.forEach(function (msg) {
          var d;
          try {
            d = JSON.parse(stripCodeFence(msg.text));
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
          }
        });
        return data;
      })["catch"](function () {
        return snapshotData;
      });
    }

    // ─── Apply profile data ─────────────────────────────────

    function applyProfileData(data, msgId) {
      if (data.bookmarks && data.bookmarks.favorite) {
        Lampa.Storage.set('favorite', data.bookmarks.favorite);
        if (Lampa.Favorite && Lampa.Favorite.read) {
          Lampa.Favorite.read();
        }
      }
      if (data.timeline) {
        Lampa.Storage.set('file_view', data.timeline);
      }
      if (data.plugins) {
        Lampa.Storage.set('plugins', data.plugins);
      }
      if (data.settings) {
        if (data.settings.sync_enabled !== undefined) Lampa.Storage.set('gramlink_sync_enabled', data.settings.sync_enabled);
        if (data.settings.heartbeat !== undefined) Lampa.Storage.set('gramlink_heartbeat', data.settings.heartbeat);
        if (data.settings.broadcast !== undefined) Lampa.Storage.set('gramlink_broadcast', data.settings.broadcast);
      }
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
        var client = GramLinkClient.getInstance();
        if (!client.isConnected()) {
          Lampa.Noty.show('Not connected');
          return;
        }
        var profileName = name.trim();
        var avatar = getAvatar(profileName);
        var now = Math.floor(Date.now() / 1000);
        var caption = JSON.stringify({
          meta: {
            type: 'profile',
            timestamp: now,
            version: 2
          },
          payload: {
            profile: {
              name: profileName,
              avatar: avatar,
              updated: now
            }
          }
        });

        // First profile: inherit current data. Subsequent: start empty.
        client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
          var hasProfiles = msgs.some(function (m) {
            if (!m.text) return false;
            try {
              var d = JSON.parse(stripCodeFence(m.text));
              return d && d.meta && d.meta.type === 'profile';
            } catch (e) {
              return false;
            }
          });
          var fileData = {
            profile_meta: {
              name: profileName,
              avatar: avatar,
              updated: now
            },
            plugins: collectPlugins(),
            settings: collectSettings()
          };
          if (!hasProfiles) {
            fileData.bookmarks = {
              favorite: collectFavorite()
            };
            fileData.timeline = collectTimeline();
          } else {
            fileData.bookmarks = {
              favorite: {}
            };
            fileData.timeline = {};
          }
          var fileJson = JSON.stringify(fileData, null, 2);
          var fileName = 'profile_' + profileName.replace(/[^a-zA-Z0-9]/g, '_') + '_' + now + '.json';
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
          })["catch"](function (e) {
            console.error('GramLink', 'Profile create error:', e);
            Lampa.Noty.show('Failed to create profile');
          });
        })["catch"](function () {
          Lampa.Noty.show('Failed to check existing profiles');
        });
      });
    }

    // ─── Sync / Auto-save ───────────────────────────────────

    function syncProfile(msgId, profilesTopicId) {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected');
        return;
      }
      var now = Math.floor(Date.now() / 1000);
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = null;
        msgs.forEach(function (m) {
          if (String(m.id) === String(msgId)) target = m;
        });
        if (!target) {
          Lampa.Noty.show('Profile not found');
          return;
        }
        var meta;
        try {
          meta = JSON.parse(stripCodeFence(target.text));
        } catch (e) {
          meta = {};
        }
        var p = meta.payload && meta.payload.profile || {};
        var profileName = p.name || 'Unnamed';
        var avatar = p.avatar || getAvatar(profileName);
        var caption = JSON.stringify({
          meta: {
            type: 'profile',
            timestamp: now,
            version: 2
          },
          payload: {
            profile: {
              name: profileName,
              avatar: avatar,
              updated: now
            }
          }
        });
        var fileData = {
          profile_meta: {
            name: profileName,
            avatar: avatar,
            updated: now
          },
          bookmarks: {
            favorite: collectFavorite()
          },
          timeline: collectTimeline(),
          plugins: collectPlugins(),
          settings: collectSettings()
        };
        var fileJson = JSON.stringify(fileData, null, 2);
        var fileName = 'profile_' + profileName.replace(/[^a-zA-Z0-9]/g, '_') + '_' + now + '.json';
        client.sendFile(getChannelId(), profilesTopicId, fileJson, fileName, caption).then(function (newMsgId) {
          if (newMsgId) {
            // Delete old message to avoid duplicates
            client.deleteMessage(getChannelId(), parseInt(msgId, 10))["catch"](function () {});
            if (String(msgId) === String(Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, ''))) {
              Lampa.Storage.set(STORAGE_ACTIVE_PROFILE, String(newMsgId));
              Lampa.Storage.set(STORAGE_ACTIVE_PROFILE_TS, String(now));
            }
            Lampa.Noty.show('Profile synced');
          }
        })["catch"](function (e) {
          console.error('GramLink', 'Profile sync error:', e);
          Lampa.Noty.show('Sync failed');
        });
      });
    }
    function autoSaveProfile(msgId, profilesTopicId) {
      syncProfile(msgId, profilesTopicId);
    }

    // ─── Data collectors ────────────────────────────────────

    function collectTimeline() {
      try {
        return Lampa.Storage.get('file_view', {});
      } catch (e) {
        return {};
      }
    }
    function collectFavorite() {
      try {
        return Lampa.Storage.get('favorite', {});
      } catch (e) {
        return {};
      }
    }
    function collectPlugins() {
      try {
        return Lampa.Storage.get('plugins', []);
      } catch (e) {
        return [];
      }
    }
    function collectSettings() {
      return {
        sync_enabled: Lampa.Storage.get('gramlink_sync_enabled', false),
        heartbeat: Lampa.Storage.get('gramlink_heartbeat', false),
        broadcast: Lampa.Storage.get('gramlink_broadcast', false)
      };
    }

    // ─── Delta publisher (called from outside) ──────────────

    function publishLocalDelta(profilesSyncTopicId, subtype, payload) {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected() || !profilesSyncTopicId) return;
      var activeProfileId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!activeProfileId) return;
      client.publishDelta(profilesSyncTopicId, subtype, activeProfileId, payload);
    }

    // ─── Startup auto-activation ────────────────────────────

    function startAutoActivation(profilesTopicId, profilesSyncTopicId) {
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!activeId) return;
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return;
      client.getMessages(getChannelId(), profilesTopicId, 50).then(function (msgs) {
        var target = null;
        msgs.forEach(function (m) {
          if (String(m.id) === String(activeId)) target = m;
        });
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
          if (data.plugins) {
            Lampa.Storage.set('plugins', data.plugins);
          }
          if (data.settings) {
            if (data.settings.sync_enabled !== undefined) Lampa.Storage.set('gramlink_sync_enabled', data.settings.sync_enabled);
            if (data.settings.heartbeat !== undefined) Lampa.Storage.set('gramlink_heartbeat', data.settings.heartbeat);
            if (data.settings.broadcast !== undefined) Lampa.Storage.set('gramlink_broadcast', data.settings.broadcast);
          }
        });
      })["catch"](function () {});
    }

    // ─── Delta apply (called from hub.js event + GramLink.js polling) ──

    var STORAGE_LAST_DELTA_SEEN = 'gramlink_last_delta_seen';
    function applyDelta(data) {
      var activeId = Lampa.Storage.get(STORAGE_ACTIVE_PROFILE, '');
      if (!data || !data.meta || String(data.meta.profile_msg_id) !== String(activeId)) return;
      // Skip own messages to prevent feedback loop: delta → Favorite.add → listener → publishDelta → poll → delta...
      if (data.meta.device_id === getDeviceId()) return;
      var payload = data.payload;
      var sub = data.meta.subtype;
      if (sub === 'bookmark_add' && payload.card_id && payload.card) {
        if (Lampa.Favorite && Lampa.Favorite.add) {
          _skipNextPublish = true;
          Lampa.Favorite.add(payload.type, payload.card);
          _skipNextPublish = false;
        }
      } else if (sub === 'bookmark_remove' && payload.card_id) {
        if (Lampa.Favorite && Lampa.Favorite.remove) {
          _skipNextPublish = true;
          Lampa.Favorite.remove(payload.type, {
            id: payload.card_id
          });
          _skipNextPublish = false;
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
      }
    }
    function refreshDeltas() {
      var profilesSyncTopicId = Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC$1, '');
      if (!profilesSyncTopicId) return;
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return;
      var lastSeen = parseInt(Lampa.Storage.get(STORAGE_LAST_DELTA_SEEN, '0'), 10);
      client.getMessagesSince(profilesSyncTopicId, lastSeen, 30).then(function (msgs) {
        var newest = lastSeen;
        msgs.forEach(function (m) {
          if (m.date > newest) newest = m.date;
          try {
            var d = JSON.parse(stripCodeFence(m.text));
            if (d && d.meta && d.meta.type === 'profile_delta') {
              applyDelta(d);
            }
          } catch (e) {}
        });
        if (newest > lastSeen) {
          Lampa.Storage.set(STORAGE_LAST_DELTA_SEEN, String(newest));
        }
      })["catch"](function () {});
    }
    function isSkipPublish() {
      if (_skipNextPublish) {
        _skipNextPublish = false;
        return true;
      }
      return false;
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
      if (Lampa.Favorite && Lampa.Favorite.read) Lampa.Favorite.read();
    }
    function softRefresh() {
      var activity = Lampa.Activity.active();
      if (!activity) return;
      if (activity.page) activity.page = 1;
      Lampa.Activity.replace(activity);
      activity.outdated = false;
    }

    // ─── Quick switch (from sidebar, full reload) ──────────────

    function quickSwitchProfile(msgId) {
      var client = GramLinkClient.getInstance();
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
        var target = null;
        msgs.forEach(function (m) {
          if (String(m.id) === String(msgId)) target = m;
        });
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
          try {
            var captionData = JSON.parse(stripCodeFence(target.text));
            var profileName = captionData.payload && captionData.payload.profile && captionData.payload.profile.name;
            if (profileName) Lampa.Storage.set('gramlink_active_profile_name', profileName);
          } catch (e) {}
          return replayDeltas(profilesSyncTopicId, msgId, fileTimestamp, profileData).then(function (mergedData) {
            applyProfileData(mergedData, msgId);
            updateSyncTimestamp('favorite');
            updateSyncTimestamp('file_view');
            updateSyncTimestamp('plugins');
            Lampa.Loading.stop();
            window.location.reload();
          });
        });
      })["catch"](function (e) {
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
      startAutoActivation: startAutoActivation,
      publishLocalDelta: publishLocalDelta,
      applyDelta: applyDelta,
      refreshDeltas: refreshDeltas,
      softRefresh: softRefresh,
      backupProfileOffline: backupProfileOffline,
      restoreProfileOffline: restoreProfileOffline,
      updateSyncTimestamp: updateSyncTimestamp,
      getSyncTimestamp: getSyncTimestamp,
      clearSyncTimestamps: clearSyncTimestamps,
      getCachedProfiles: getCachedProfiles,
      quickSwitchProfile: quickSwitchProfile,
      syncProfile: syncProfile,
      refreshCacheFromTelegram: refreshCacheFromTelegram,
      getPluginRegistry: getPluginRegistry,
      addToPluginRegistry: addToPluginRegistry,
      removeFromPluginRegistry: removeFromPluginRegistry
    };

    function startMigration(profilesTopicId) {
      if (!window.lampa_settings || !window.lampa_settings.account_use) {
        Lampa.Noty.show('Cub account not found. Log in to Cub in Lampa settings first.');
        return;
      }
      if (!Lampa.Account || !Lampa.Account.Permit || !Lampa.Account.Permit.token) {
        Lampa.Noty.show('Cub account not found. Log in to Cub in Lampa settings first.');
        return;
      }
      Lampa.Modal.open({
        title: 'Migrate from Cub?',
        html: $('<div style="padding:1em">' + '<p>This will:</p>' + '<ul style="padding-left:1.5em;line-height:1.8">' + '<li>Import ALL your Cub profiles</li>' + '<li>Import bookmarks & continue watching</li>' + '<li>Import installed plugins</li>' + '<li>Disable Cub sync</li>' + '</ul>' + '<p style="color:#f44336;margin-top:1em">Cub account will be disabled. This cannot be undone automatically.</p>' + '</div>'),
        buttons: [{
          name: 'Yes, migrate',
          onSelect: function onSelect() {
            Lampa.Modal.close();
            doMigration(profilesTopicId);
          }
        }, {
          name: 'Cancel',
          onSelect: function onSelect() {
            Lampa.Modal.close();
          }
        }]
      });
    }
    function doMigration(profilesTopicId) {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) {
        Lampa.Noty.show('Not connected to Telegram');
        return;
      }
      Lampa.Noty.show('Reading Cub profiles...');
      Lampa.Account.Api.load('profiles/all').then(function (result) {
        if (!result || !result.profiles || !result.profiles.length) {
          Lampa.Noty.show('No Cub profiles found');
          return;
        }
        var profiles = result.profiles;
        var activeProfileId = Lampa.Account.Permit.account.profile.id;
        var currentData = collectCurrentData();
        var imported = 0;
        var activatedId = null;
        function processNext(index) {
          if (index >= profiles.length) {
            finishMigration(imported, activatedId);
            return;
          }
          var cubProfile = profiles[index];
          var name = cubProfile.name || 'Profile ' + (index + 1);
          var avatar = getAvatar(name);
          var now = Math.floor(Date.now() / 1000);
          var caption = JSON.stringify({
            meta: {
              type: 'profile',
              timestamp: now,
              version: 2,
              source: 'cub',
              source_id: cubProfile.id
            },
            payload: {
              profile: {
                name: name,
                avatar: avatar,
                updated: now
              }
            }
          });
          var fileData = {
            profile_meta: {
              name: name,
              avatar: avatar,
              updated: now
            },
            bookmarks: {
              favorite: currentData.favorite
            },
            timeline: currentData.timeline,
            plugins: currentData.plugins,
            settings: currentData.settings
          };
          var fileJson = JSON.stringify(fileData, null, 2);
          var fileName = 'profile_' + name.replace(/[^a-zA-Z0-9]/g, '_') + '_' + now + '.json';
          var channelId = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
          client.sendFile(channelId, profilesTopicId, fileJson, fileName, caption).then(function (msgId) {
            if (msgId) {
              imported++;
              if (String(cubProfile.id) === String(activeProfileId)) {
                activatedId = msgId;
              }
            }
            processNext(index + 1);
          })["catch"](function () {
            processNext(index + 1);
          });
        }
        processNext(0);
      })["catch"](function (e) {
        console.error('GramLink', 'Migration fetch error:', e);
        Lampa.Noty.show('Failed to read Cub profiles: ' + (e.message || 'API error'));
      });
    }
    function collectCurrentData() {
      var result = {
        favorite: {},
        timeline: {},
        plugins: [],
        settings: {}
      };
      try {
        result.favorite = Lampa.Storage.get('favorite', {});
      } catch (e) {}
      try {
        result.timeline = Lampa.Storage.get('file_view', {});
      } catch (e) {}
      try {
        result.plugins = Lampa.Storage.get('plugins', []);
      } catch (e) {}
      result.settings = {
        sync_enabled: Lampa.Storage.get('gramlink_sync_enabled', false),
        heartbeat: Lampa.Storage.get('gramlink_heartbeat', false),
        broadcast: Lampa.Storage.get('gramlink_broadcast', false)
      };
      return result;
    }
    function finishMigration(count, activatedId) {
      if (activatedId) {
        Lampa.Storage.set('gramlink_active_profile', String(activatedId));
        Lampa.Storage.set('gramlink_active_profile_ts', String(Math.floor(Date.now() / 1000)));
      }
      Lampa.Storage.set('account', '', true);
      Lampa.Storage.field('account_use', false);
      Lampa.Settings.update();
      Lampa.Modal.open({
        title: 'Migration complete!',
        html: $('<div style="padding:1em">' + count + ' profiles imported. Cub account disabled.</div>'),
        buttons: [{
          name: 'Reload now',
          onSelect: function onSelect() {
            Lampa.Modal.close();
            Lampa.reload();
          }
        }, {
          name: 'Later',
          onSelect: function onSelect() {
            Lampa.Modal.close();
          }
        }]
      });
    }

    function initSettings() {
      var SettingsApi = Lampa.SettingsApi || Lampa.Settings;
      if (!SettingsApi || !SettingsApi.addComponent) return;

      // ── Шаблон для вкладеного компонента ────────────────
      Lampa.Template.add('settings_gramlink_server', '<div></div>');

      // ── Головний компонент (перед Interface) ────────────
      SettingsApi.addComponent({
        component: 'gramlink',
        name: Lampa.Lang.translate('gramlink_title'),
        before: 'interface',
        icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.587.192l-8.533 7.77h-.001l.003.003-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.22c.309-1.239-.473-1.8-1.282-1.434z" fill="currentColor"/>' + '</svg>'
      });

      // ── Кнопка авторизації (динамічна) ──────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_auth_btn',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_auth_login')
        },
        onRender: function onRender(item) {
          item.find('.settings-param__name').text(GramLinkClient.getInstance().isConnected() ? Lampa.Lang.translate('gramlink_settings_auth_logout') : Lampa.Lang.translate('gramlink_settings_auth_login'));
        },
        onChange: function onChange() {
          var client = GramLinkClient.getInstance();
          if (client.isConnected()) {
            Lampa.Modal.open({
              title: Lampa.Lang.translate('gramlink_settings_logout'),
              html: $('<div style="padding: 1em">' + Lampa.Lang.translate('gramlink_settings_logout_confirm') + '</div>'),
              buttons: [{
                name: Lampa.Lang.translate('gramlink_settings_logout'),
                onSelect: function onSelect() {
                  client.logout();
                  Lampa.Modal.close();
                  Lampa.Settings.update();
                }
              }, {
                name: Lampa.Lang.translate('gramlink_title'),
                onSelect: function onSelect() {
                  Lampa.Modal.close();
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

      // ── Перемикачі синхронізації ────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_sync_enabled',
          type: 'trigger',
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_sync_enabled')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_sync_enabled', value);
        }
      });
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_heartbeat',
          type: 'trigger',
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_sync_heartbeat')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_heartbeat', value);
          var client = GramLinkClient.getInstance();
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
        component: 'gramlink',
        param: {
          name: 'gramlink_broadcast',
          type: 'trigger',
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_sync_broadcast')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_broadcast', value);
        }
      });

      // ── Import from Cub ─────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
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

      // ── Manage plugins button ──────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
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

      // ── About page ───────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_about_btn',
          type: 'button'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_about'),
          description: Lampa.Lang.translate('gramlink_settings_about_desc')
        },
        onChange: function onChange() {
          var html = '<div style="padding:1em">' + '<p>' + Lampa.Lang.translate('gramlink_about_description') + '</p>' + '<p><span style="opacity:0.5">' + Lampa.Lang.translate('gramlink_about_version') + ':</span> 1.0.0</p>' + '<p><span style="opacity:0.5">' + Lampa.Lang.translate('gramlink_about_author') + ':</span> @lampa</p>' + '</div>';
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

      // ── Sync timeout ─────────────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_sync_timeout',
          type: 'select',
          values: {
            5: '5',
            10: '10',
            30: '30',
            60: '60'
          },
          "default": '10'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_timeout'),
          description: Lampa.Lang.translate('gramlink_settings_timeout_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_sync_timeout', value);
        }
      });

      // ── Delta poll interval ──────────────────────────────
      SettingsApi.addParam({
        component: 'gramlink',
        param: {
          name: 'gramlink_poll_interval',
          type: 'select',
          values: {
            5: '5',
            10: '10',
            30: '30'
          },
          "default": '10'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_poll_interval'),
          description: Lampa.Lang.translate('gramlink_settings_poll_interval_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_poll_interval', value);
        }
      });

      // ── Пункт "Сервер" (вкладений, останній) ────────────
      SettingsApi.addParam({
        component: 'gramlink',
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
              Lampa.Settings.create('gramlink');
            }
          });
        }
      });

      // ═══════════════════════════════════════════════════════
      //  Вкладена сторінка: Налаштування сервера
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
          "default": 'lampa'
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
          "default": ''
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
          "default": ''
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
            'custom': 'gramlink_settings_server_type_custom'
          },
          "default": 'official'
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_server_type')
        },
        onChange: function onChange(value) {
          var client = GramLinkClient.getInstance();
          var oldVal = value === 'official' ? 'custom' : 'official';
          if (client.hasCredentials()) {
            Lampa.Modal.open({
              title: Lampa.Lang.translate('gramlink_settings_server_warning_title'),
              html: $('<div style="padding:1em">' + Lampa.Lang.translate('gramlink_settings_server_warning_desc') + '</div>'),
              buttons: [{
                name: Lampa.Lang.translate('gramlink_settings_server_confirm'),
                onSelect: function onSelect() {
                  client.logout();
                  Lampa.Storage.set('gramlink_server_type', value);
                  if (value === 'custom') {
                    Lampa.Storage.set('gramlink_custom_host', Lampa.Storage.get('gramlink_custom_host', ''));
                    Lampa.Storage.set('gramlink_custom_port', Lampa.Storage.get('gramlink_custom_port', '443'));
                  }
                  $('.scroll__body').find('[data-name="gramlink_custom_host"]').toggleClass('hide', value !== 'custom');
                  $('.scroll__body').find('[data-name="gramlink_custom_port"]').toggleClass('hide', value !== 'custom');
                  Lampa.Modal.close();
                  Lampa.Settings.update();
                }
              }, {
                name: Lampa.Lang.translate('gramlink_settings_server_cancel'),
                onSelect: function onSelect() {
                  Lampa.Storage.set('gramlink_server_type', oldVal);
                  Lampa.Modal.close();
                  Lampa.Settings.update();
                }
              }]
            });
          } else {
            Lampa.Storage.set('gramlink_server_type', value);
            $('.scroll__body').find('[data-name="gramlink_custom_host"]').toggleClass('hide', value !== 'custom');
            $('.scroll__body').find('[data-name="gramlink_custom_port"]').toggleClass('hide', value !== 'custom');
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
          "default": ''
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
          "default": '443'
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
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_title'),
          description: Lampa.Lang.translate('gramlink_settings_proxy_desc')
        },
        onChange: function onChange(value) {
          Lampa.Storage.set('gramlink_proxy_enabled', value);
          $('.scroll__body').find('[data-name="gramlink_proxy_host"]').toggleClass('hide', !GramLinkClient.getInstance().isEnabled('gramlink_proxy_enabled'));
          $('.scroll__body').find('[data-name="gramlink_proxy_port"]').toggleClass('hide', !GramLinkClient.getInstance().isEnabled('gramlink_proxy_enabled'));
          $('.scroll__body').find('[data-name="gramlink_proxy_secret"]').toggleClass('hide', !GramLinkClient.getInstance().isEnabled('gramlink_proxy_enabled'));
          GramLinkClient.getInstance().reconnect();
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
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_host')
        },
        onRender: function onRender(item) {
          toggleField(item, GramLinkClient.getInstance().isEnabled('gramlink_proxy_enabled'));
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_proxy_host', value);
          GramLinkClient.getInstance().reconnect();
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
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_port')
        },
        onRender: function onRender(item) {
          toggleField(item, GramLinkClient.getInstance().isEnabled('gramlink_proxy_enabled'));
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_proxy_port', value);
          GramLinkClient.getInstance().reconnect();
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
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('gramlink_settings_proxy_secret')
        },
        onRender: function onRender(item) {
          toggleField(item, GramLinkClient.getInstance().isEnabled('gramlink_proxy_enabled'));
        },
        onChange: function onChange(value) {
          if (value) Lampa.Storage.set('gramlink_proxy_secret', value);
          GramLinkClient.getInstance().reconnect();
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

    /**
     * broadcast.js — Cross-device "Open/Play on device" via Telegram remote-cmd topic
     *
     * Uses GramLink's existing heartbeat system (getOnlineDevices) to discover
     * active devices, then sends remote commands via Telegram messages.
     */

    // ─── Discovery ──────────────────────────────────────────

    function discoverDevices() {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return Promise.resolve([]);
      var channelId = Lampa.Storage.get('gramlink_channel_id', '');
      var syncLogTopicId = Lampa.Storage.get('gramlink_sync_log_topic', '');
      if (!channelId || !syncLogTopicId) return Promise.resolve([]);
      return client.getOnlineDevices(channelId, syncLogTopicId);
    }

    // ─── Send remote commands ───────────────────────────────

    function sendOpenCard(deviceId, cardData) {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return;
      var channelId = Lampa.Storage.get('gramlink_channel_id', '');
      var remoteCmdTopicId = Lampa.Storage.get('gramlink_remote_cmd_topic', '');
      if (!channelId || !remoteCmdTopicId) return;
      client.publish(channelId, remoteCmdTopicId, 'open_card', {
        card: cardData
      }, deviceId);
    }
    function sendPlayVideo(deviceId, mediaData) {
      var client = GramLinkClient.getInstance();
      if (!client.isConnected()) return;
      var channelId = Lampa.Storage.get('gramlink_channel_id', '');
      var remoteCmdTopicId = Lampa.Storage.get('gramlink_remote_cmd_topic', '');
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
        Lampa.Controller.toggle(enabledCtrl);
      })["catch"](function () {
        Lampa.Noty.show('Failed to discover devices');
        if (options.onCancel) options.onCancel();
      });
    }

    // ─── Context menu integration ───────────────────────────

    function setupContextMenu() {
      var manifest = {
        type: 'video',
        version: '1.0.0',
        name: 'Open on device',
        description: 'Open this content on another device',
        onContextMenu: function onContextMenu(object) {
          var client = GramLinkClient.getInstance();
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
        var client = GramLinkClient.getInstance();
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
        var client = GramLinkClient.getInstance();
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
      var client = GramLinkClient.getInstance();
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
     * hub.js — GramLink Hub component
     *
     * Activity component з повною підтримкою Lampa Controller:
     * - Scroll (вертикальний, з mask)
     * - Таби: Profiles (first) + Devices (second)
     * - Controller.add('gramlink_hub') + collectionSet + collectionFocus
     * - hover:focus → scroll.update() для автоскролу
     * - back() → Lampa.Activity.backward()
     */
    var STORAGE_CHANNEL_ID = 'gramlink_channel_id';
    var STORAGE_SYNC_LOG_TOPIC = 'gramlink_sync_log_topic';
    var STORAGE_PROFILES_TOPIC = 'gramlink_profiles_topic';
    var STORAGE_PROFILES_SYNC_TOPIC = 'gramlink_profiles_sync_topic';
    var STORAGE_BACKUP_TOPIC = 'gramlink_backup_topic';
    var refreshTimer = null;
    var currentChannelId = null;
    var currentSyncLogTopicId = null;
    var currentProfilesTopicId = null;
    var currentProfilesSyncTopicId = null;
    var currentBackupTopicId = null;
    function Hub () {
      var self = this;
      var scroll = null;
      var last = null;
      var activeTab = 'profiles';

      // ─── Lifecycle ───────────────────────────────────────────

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

        // Build layout once in create()
        buildLayout();
        bindStaticEvents();
        return self.render();
      };
      self.render = function () {
        return self.html;
      };
      self.start = function () {
        // Native Lampa pattern: register controller as 'content' on every start
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
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          right: function right() {
            Navigator.move('right');
          },
          back: function back() {
            self.back();
          }
        });
        Lampa.Controller.toggle('content');
        init();
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
          if (scroll) scroll.destroy();
        } catch (e) {}
        try {
          self.html.remove();
        } catch (e) {}
      };

      // ─── Layout builder — tabs (Profiles first, Devices second) ───

      function buildLayout() {
        var hub = $('<div class="gramlink-hub">' + '<div class="gramlink-tabs">' + '<div class="simple-button selector gramlink-tab active" data-tab="profiles">' + (Lampa.Lang.translate('gramlink_profiles') || 'Profiles') + '</div>' + '<div class="simple-button selector gramlink-tab" data-tab="devices">' + (Lampa.Lang.translate('gramlink_devices') || 'Devices') + '</div>' + '<div class="simple-button selector gramlink-tab" data-tab="plugins">' + (Lampa.Lang.translate('gramlink_plugins') || 'Plugins') + '</div>' + '</div>' + '<div class="gramlink-tab-view gramlink-tab-view--profiles">' + '<div class="gramlink-profiles"></div>' + '</div>' + '<div class="gramlink-tab-view gramlink-tab-view--devices hide">' + '<div class="gramlink-hub__section">' + '<div class="settings-param-title"><span>' + (Lampa.Lang.translate('gramlink_status') || 'Status') + '</span></div>' + '<div class="settings-folder selector gs-status-item">' + '<div class="settings-folder__icon">' + '<div class="gramlink-status__indicator gramlink-status__indicator--disconnected"></div>' + '</div>' + '<div class="settings-folder__name">' + '<div class="gramlink-status-label">' + (Lampa.Lang.translate('gramlink_not_connected') || 'Not connected') + '</div>' + '<div class="settings-folder__sub gramlink-status-detail">-</div>' + '</div>' + '</div>' + '</div>' + '<div class="gramlink-hub__section">' + '<div class="settings-param-title"><span>' + (Lampa.Lang.translate('gramlink_devices') || 'Devices') + '</span></div>' + '<div class="gramlink-devices"></div>' + '</div>' + '</div>' + '<div class="gramlink-tab-view gramlink-tab-view--plugins hide">' + '<div class="gramlink-hub__section">' + '<div class="gramlink-plugins"></div>' + '</div>' + '</div>' + '</div>');
        scroll.clear();
        scroll.body().append(hub);
      }

      // ─── Static event bindings ────────────────────────────────

      function bindStaticEvents() {
        scroll.render().find('.gramlink-tab').on('hover:enter', function () {
          switchTab($(this).data('tab'));
        });
        scroll.render().find('.gs-status-item').on('hover:enter', function () {
          var label = scroll.render().find('.gramlink-status-label').text();
          if (label.indexOf(Lampa.Lang.translate('gramlink_auth_required') || 'Auth required') !== -1 || label.indexOf(Lampa.Lang.translate('gramlink_not_connected') || 'Not connected') !== -1) {
            init();
          }
        });
      }
      function switchTab(tabId) {
        if (tabId === activeTab) return;
        activeTab = tabId;
        scroll.render().find('.gramlink-tab').removeClass('active');
        scroll.render().find('.gramlink-tab[data-tab="' + tabId + '"]').addClass('active');
        scroll.render().find('.gramlink-tab-view').addClass('hide');
        scroll.render().find('.gramlink-tab-view--' + tabId).removeClass('hide');
        if (tabId === 'plugins') refreshPlugins();
        Lampa.Controller.collectionSet(scroll.render());
        var firstItem = scroll.render().find('.gramlink-tab-view--' + tabId + ' .selector').first();
        if (firstItem.length) {
          Lampa.Controller.collectionFocus(firstItem[0], scroll.render());
        } else {
          var tabBtn = scroll.render().find('.gramlink-tab[data-tab="' + tabId + '"]')[0];
          if (tabBtn) Lampa.Controller.collectionFocus(tabBtn, scroll.render());
        }
      }

      // ─── Status update ────────────────────────────────────────

      function updateStatus(type, label, detail) {
        scroll.render().find('.gramlink-status__indicator').removeClass().addClass('gramlink-status__indicator gramlink-status__indicator--' + type);
        scroll.render().find('.gramlink-status-label').text(label);
        scroll.render().find('.gramlink-status-detail').text(detail);
      }

      // ─── Init / connect ───────────────────────────────────────

      function init() {
        currentChannelId = Lampa.Storage.get(STORAGE_CHANNEL_ID, null);
        currentSyncLogTopicId = Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, null);
        currentProfilesTopicId = Lampa.Storage.get(STORAGE_PROFILES_TOPIC, null);
        currentProfilesSyncTopicId = Lampa.Storage.get(STORAGE_PROFILES_SYNC_TOPIC, null);
        currentBackupTopicId = Lampa.Storage.get(STORAGE_BACKUP_TOPIC, null);
        var client = GramLinkClient.getInstance();
        client.connect().then(function () {
          updateStatus('connected', Lampa.Lang.translate('gramlink_connected') || 'Connected', getDeviceName());
          return ensureSyncChannel();
        }).then(function () {
          var channelId = Lampa.Storage.get(STORAGE_CHANNEL_ID, '');
          var syncLogTopicId = Lampa.Storage.get(STORAGE_SYNC_LOG_TOPIC, '');
          if (channelId && syncLogTopicId) {
            client.startHeartbeat(channelId, syncLogTopicId);
          }
          client.on('profile_delta', function (data) {
            Profiles.applyDelta(data);
          });
          refreshDevices();
          refreshProfiles();
          refreshPlugins();
          if (refreshTimer) clearInterval(refreshTimer);
          refreshTimer = setInterval(function () {
            refreshDevices();
            refreshProfiles();
            refreshPlugins();
          }, 15000);
        })["catch"](function (err) {
          updateStatus('auth_needed', Lampa.Lang.translate('gramlink_auth_required') || 'Auth required', err.message || '');
        });
      }

      // ─── Devices ──────────────────────────────────────────────

      function refreshDevices() {
        var client = GramLinkClient.getInstance();
        if (!client.isConnected() || !currentChannelId) return;
        client.getOnlineDevices(currentChannelId, currentSyncLogTopicId).then(function (devices) {
          var container = scroll.render().find('.gramlink-devices');
          container.empty();
          var myId = getDeviceId();
          var hasMe = devices.some(function (d) {
            return d.device_id === myId;
          });
          if (!hasMe) {
            devices.push({
              device_id: myId,
              device_name: getDeviceName(),
              timestamp: Math.floor(Date.now() / 1000)
            });
          }
          if (devices.length === 0) {
            container.append('<div class="settings-param-title"><span>' + (Lampa.Lang.translate('gramlink_no_devices') || 'No devices') + '</span></div>');
            Lampa.Controller.collectionSet(scroll.render());
            return;
          }
          devices.forEach(function (d) {
            var isThis = d.device_id === myId;
            var avatar = d.device_name ? d.device_name.charAt(0).toUpperCase() : '?';
            var item = $('<div class="settings-folder selector gs-device-item" data-id="' + d.device_id + '" data-name="' + (d.device_name || 'Unknown').replace(/"/g, '&quot;') + '" data-this="' + isThis + '">' + '<div class="settings-folder__icon">' + '<div class="gramlink-device-avatar">' + avatar + '</div>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + (d.device_name || 'Unknown') + (isThis ? ' (' + (Lampa.Lang.translate('gramlink_this_device') || 'This device') + ')' : '') + '</div>' + '<div class="settings-folder__sub">' + (isThis ? Lampa.Lang.translate('gramlink_active') || 'Active' : Lampa.Lang.translate('gramlink_online') || 'Online') + '</div>' + '</div>' + '</div>');
            item.on('hover:enter', function () {
              var isThisDevice = $(this).data('this') === true;
              var deviceName = $(this).data('name');
              var deviceId = $(this).data('id');
              var items = [];
              if (!isThisDevice) {
                items.push({
                  title: 'Open on this device',
                  action: 'open_on'
                });
              }
              if (isThisDevice) {
                items.push({
                  title: Lampa.Lang.translate('gramlink_backup_export') || 'Export Backup',
                  action: 'export'
                });
              }
              items.push({
                title: Lampa.Lang.translate('gramlink_backup_import') || 'Import Backup',
                action: 'import'
              });
              items.push({
                title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
                cancel: true
              });
              var prevController = Lampa.Controller.enabled().name;
              Lampa.Select.show({
                title: deviceName,
                items: items,
                onBack: function onBack() {
                  Lampa.Controller.toggle(prevController);
                },
                onSelect: function onSelect(item) {
                  Lampa.Controller.toggle(prevController);
                  if (item.cancel) return;
                  if (item.action === 'open_on') {
                    var active = Lampa.Activity.active();
                    if (active && active.card) {
                      Broadcast.sendOpenCard(deviceId, active.card);
                      Lampa.Noty.show('Sent to ' + deviceName);
                    } else {
                      Lampa.Noty.show('Nothing to share');
                    }
                  } else if (item.action === 'export') {
                    exportBackup();
                  } else if (item.action === 'import') {
                    importBackup();
                  }
                }
              });
            });
            item.on('hover:long', function () {
              var isThisDevice = $(this).data('this') === true;
              if (isThisDevice) {
                exportBackup();
              }
            });
            container.append(item);
          });
          Lampa.Controller.collectionSet(scroll.render());
        });
      }

      // ─── Profiles ─────────────────────────────────────────────

      function refreshProfiles() {
        Profiles.refreshProfiles(currentProfilesTopicId, currentProfilesSyncTopicId, scroll.render().find('.gramlink-profiles'), function () {
          scroll.render().find('.profile-card[data-id]').on('hover:long', function () {
            var id = $(this).data('id');
            var name = $(this).data('name') || 'Unnamed';
            var isActive = $(this).data('active') === true;
            var prevController = Lampa.Controller.enabled().name;
            var items = [];
            items.push({
              title: Lampa.Lang.translate('gramlink_plugins') || 'Plugins',
              action: 'plugins'
            });
            items.push({
              title: Lampa.Lang.translate('gramlink_sync') || 'Sync',
              action: 'sync'
            });
            if (!isActive) {
              items.push({
                title: Lampa.Lang.translate('gramlink_delete') || 'Delete',
                action: 'delete'
              });
            }
            items.push({
              title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
              cancel: true
            });
            Lampa.Select.show({
              title: name,
              items: items,
              onBack: function onBack() {
                Lampa.Controller.toggle(prevController);
              },
              onSelect: function onSelect(item) {
                Lampa.Controller.toggle(prevController);
                if (item.cancel) return;
                if (item.action === 'plugins') {
                  PluginManager.open(id, name, isActive);
                } else if (item.action === 'sync') {
                  Profiles.syncProfile(id, currentProfilesTopicId);
                } else if (item.action === 'delete') {
                  var channelId = parseInt(Lampa.Storage.get('gramlink_channel_id', ''), 10);
                  if (!channelId) return;
                  GramLinkClient.getInstance().deleteMessage(channelId, parseInt(id, 10)).then(function (ok) {
                    if (ok) {
                      if (String(Lampa.Storage.get('gramlink_active_profile', '')) === String(id)) {
                        Lampa.Storage.set('gramlink_active_profile', '');
                        Lampa.Storage.set('gramlink_active_profile_ts', '');
                      }
                      refreshProfiles();
                      Lampa.Noty.show('Profile deleted');
                    }
                  })["catch"](function () {
                    Lampa.Noty.show('Delete failed');
                  });
                }
              }
            });
          });
          Lampa.Controller.collectionSet(scroll.render());
        });
      }

      // ─── Plugins tab ─────────────────────────────────────────

      function refreshPlugins() {
        var container = scroll.render().find('.gramlink-plugins');
        container.empty();
        var activeId = Lampa.Storage.get('gramlink_active_profile', '');
        if (!activeId) {
          container.html('<div class="gramlink-devices__empty">' + (Lampa.Lang.translate('gramlink_no_profiles') || 'No active profile') + '</div>');
          Lampa.Controller.collectionSet(scroll.render());
          return;
        }
        var plugins;
        try {
          plugins = Lampa.Storage.get('plugins', []);
        } catch (e) {
          plugins = [];
        }
        if (!plugins || plugins.length === 0) {
          container.html('<div class="gramlink-devices__empty">' + (Lampa.Lang.translate('gramlink_no_plugins') || 'No plugins installed') + '</div>');
        } else {
          plugins.forEach(function (plugin, idx) {
            var isOn = plugin.status === 1;
            var item = $('<div class="settings-folder selector gs-plugin-item" data-idx="' + idx + '">' + '<div class="settings-folder__icon">' + '<div class="gs-plugin-toggle ' + (isOn ? 'on' : 'off') + '">' + (isOn ? '●' : '○') + '</div>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + escHtml(plugin.name || plugin.url || 'Plugin') + '</div>' + '<div class="settings-folder__sub">' + (plugin.url ? truncateUrl(plugin.url) : '') + '</div>' + '</div>' + '</div>');
            item.on('hover:enter', function () {
              var idx2 = parseInt($(this).data('idx'), 10);
              if (plugins[idx2]) showPluginMenu(plugins[idx2], idx2);
            });
            container.append(item);
          });
        }

        // Add plugin button
        var addBtn = $('<div class="settings-folder selector gs-plugin-add-item">' + '<div class="settings-folder__icon">' + '<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' + '</div>' + '<div class="settings-folder__name">' + '<div>' + (Lampa.Lang.translate('gramlink_plugins_add') || '+ Add plugin') + '</div>' + '<div class="settings-folder__sub">' + (Lampa.Lang.translate('gramlink_plugins_manage_hint') || 'Add plugins via URL') + '</div>' + '</div>' + '</div>');
        addBtn.on('hover:enter', function () {
          doAddPluginInline();
        });
        container.append(addBtn);
        Lampa.Controller.collectionSet(scroll.render());
      }

      // ─── Plugin actions ──────────────────────────────────────

      function showPluginMenu(plugin, idx) {
        if (!plugin) return;
        var isOn = plugin.status === 1;
        var prevController = Lampa.Controller.enabled().name;
        Lampa.Select.show({
          title: plugin.name || plugin.url || 'Plugin',
          items: [{
            title: Lampa.Lang.translate(isOn ? 'gramlink_plugins_toggle_off' : 'gramlink_plugins_toggle_on') || (isOn ? 'Disable' : 'Enable'),
            _do: 'toggle'
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
              doPluginToggle(idx);
            } else if (item._do === 'remove') {
              doPluginRemove(idx);
            } else {
              Lampa.Controller.toggle(prevController);
            }
          }
        });
      }
      function doPluginToggle(idx) {
        var plugins;
        try {
          plugins = Lampa.Storage.get('plugins', []);
        } catch (e) {
          plugins = [];
        }
        if (!plugins[idx]) return;
        plugins[idx].status = plugins[idx].status === 1 ? 0 : 1;
        Lampa.Storage.set('plugins', plugins);
        refreshPlugins();

        // Publish delta
        var syncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
        if (syncTopicId) {
          Profiles.publishLocalDelta(syncTopicId, 'plugin_change', {
            action: 'toggle',
            plugin: {
              url: plugins[idx].url,
              name: plugins[idx].name,
              status: plugins[idx].status
            }
          });
        }
        Lampa.Noty.show((plugins[idx].name || 'Plugin') + ': ' + (plugins[idx].status === 1 ? 'on' : 'off'));
      }
      function doPluginRemove(idx) {
        var plugins;
        try {
          plugins = Lampa.Storage.get('plugins', []);
        } catch (e) {
          plugins = [];
        }
        if (!plugins[idx]) return;
        var plugin = plugins[idx];
        var prevController = Lampa.Controller.enabled().name;
        Lampa.Select.show({
          title: Lampa.Lang.translate('gramlink_plugins_remove') || 'Remove plugin',
          items: [{
            title: '"' + (plugin.name || plugin.url) + '" ' + (Lampa.Lang.translate('gramlink_plugins_remove_confirm') || 'will be removed'),
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
              Lampa.Storage.set('plugins', plugins);
              refreshPlugins();
              var syncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
              if (syncTopicId) {
                Profiles.publishLocalDelta(syncTopicId, 'plugin_change', {
                  action: 'remove',
                  plugin: {
                    url: plugin.url,
                    name: plugin.name,
                    status: plugin.status
                  }
                });
              }
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_removed') || 'Plugin removed');
            }
            Lampa.Controller.toggle(prevController);
          }
        });
      }
      function doAddPluginInline() {
        var prevController = Lampa.Controller.enabled().name;
        Lampa.Input.edit({
          title: Lampa.Lang.translate('gramlink_plugins_add_url') || 'Plugin URL (.js)',
          free: true,
          nosave: true,
          align: 'center'
        }, function (url) {
          if (!url) {
            Lampa.Controller.toggle(prevController);
            return;
          }
          url = url.trim();
          if (!url.match(/^https?:\/\/.+/i)) {
            Lampa.Noty.show('Invalid URL');
            Lampa.Controller.toggle(prevController);
            return;
          }
          var plugins;
          try {
            plugins = Lampa.Storage.get('plugins', []);
          } catch (e) {
            plugins = [];
          }
          if (plugins.some(function (p) {
            return p.url === url;
          })) {
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_already_installed') || 'Already installed');
            Lampa.Controller.toggle(prevController);
            return;
          }
          var guessedName = url.split('/').pop().replace(/\.js(\?.*)?$/i, '').replace(/[-_]/g, ' ') || 'Plugin';
          Lampa.Input.edit({
            title: Lampa.Lang.translate('gramlink_plugins_name') || 'Plugin name',
            free: true,
            nosave: true,
            align: 'center',
            value: guessedName
          }, function (name) {
            var newPlugin = {
              url: url,
              name: name && name.trim() || guessedName,
              status: 1,
              custom: {}
            };
            Profiles.addToPluginRegistry(url, newPlugin.name);
            plugins.push(newPlugin);
            Lampa.Storage.set('plugins', plugins);
            refreshPlugins();
            var syncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
            if (syncTopicId) {
              Profiles.publishLocalDelta(syncTopicId, 'plugin_change', {
                action: 'add',
                plugin: newPlugin
              });
            }
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_plugins_added') || 'Plugin added');
            Lampa.Controller.toggle(prevController);
          });
        });
      }

      // Helper: escHtml
      function escHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
      }

      // Helper: truncateUrl
      function truncateUrl(url) {
        if (!url) return '';
        try {
          var u = new URL(url);
          return u.hostname + '/…/' + (u.pathname.split('/').pop() || '');
        } catch (e) {
          return url.length > 50 ? url.slice(0, 47) + '…' : url;
        }
      }

      // ─── Channel / Topic management ───────────────────────────

      var CHANNEL_TITLE = '🔄 Lampa Sync [DO NOT DELETE]';
      var TOPIC_NAMES = ['sync-log', 'remote-cmd', 'backup', 'profiles', 'profiles-sync'];
      function ensureSyncChannel() {
        var client = GramLinkClient.getInstance();
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
        var client = GramLinkClient.getInstance();
        var promises = [];
        function ensure(name, storeKey, setter) {
          var stored = Lampa.Storage.get(storeKey, '');
          if (stored) {
            setter(stored);
            return Promise.resolve();
          }
          return client.findTopic(currentChannelId, name).then(function (id) {
            if (id) {
              setter(id);
              Lampa.Storage.set(storeKey, id);
              return;
            }
            return client.createTopic(currentChannelId, name).then(function (topicId) {
              if (topicId) {
                setter(topicId);
                Lampa.Storage.set(storeKey, topicId);
              }
            });
          });
        }
        promises.push(ensure('sync-log', STORAGE_SYNC_LOG_TOPIC, function (id) {
          currentSyncLogTopicId = id;
        }));
        promises.push(ensure('profiles', STORAGE_PROFILES_TOPIC, function (id) {
          currentProfilesTopicId = id;
        }));
        promises.push(ensure('profiles-sync', STORAGE_PROFILES_SYNC_TOPIC, function (id) {
          currentProfilesSyncTopicId = id;
        }));
        promises.push(ensure('backup', STORAGE_BACKUP_TOPIC, function (id) {
          currentBackupTopicId = id;
        }));
        return Promise.all(promises);
      }
      function createChannel() {
        var client = GramLinkClient.getInstance();
        return client.createChannel(CHANNEL_TITLE).then(function (peerId) {
          if (!peerId) throw new Error('Create channel failed');
          currentChannelId = peerId;
          Lampa.Storage.set(STORAGE_CHANNEL_ID, peerId);
          var seq = Promise.resolve();
          TOPIC_NAMES.forEach(function (name) {
            seq = seq.then(function () {
              return client.createTopic(peerId, name).then(function (topicId) {
                if (!topicId) return;
                if (name === 'sync-log') {
                  currentSyncLogTopicId = topicId;
                  Lampa.Storage.set(STORAGE_SYNC_LOG_TOPIC, topicId);
                } else if (name === 'profiles') {
                  currentProfilesTopicId = topicId;
                  Lampa.Storage.set(STORAGE_PROFILES_TOPIC, topicId);
                } else if (name === 'profiles-sync') {
                  currentProfilesSyncTopicId = topicId;
                  Lampa.Storage.set(STORAGE_PROFILES_SYNC_TOPIC, topicId);
                } else if (name === 'backup') {
                  currentBackupTopicId = topicId;
                  Lampa.Storage.set(STORAGE_BACKUP_TOPIC, topicId);
                }
              })["catch"](function (e) {
                console.warn('GramLink', 'Failed to create topic ' + name + ':', e);
              });
            });
          });
          return seq;
        })["catch"](function (err) {
          Lampa.Noty.show('Failed to create sync channel');
          throw err;
        });
      }

      // ─── Backup export/import ─────────────────────────────────

      var BACKUP_EXCLUDE = {
        'gramlink_device_id': true,
        'gramlink_auth_key_hex': true,
        'gramlink_session': true,
        'gramlink_dc_id': true,
        'gramlink_channel_id': true,
        'gramlink_sync_log_topic': true,
        'gramlink_profiles_topic': true,
        'gramlink_backup_topic': true
      };
      function isExcluded(key) {
        if (BACKUP_EXCLUDE[key]) return true;
        if (key.indexOf('gramlink_hb_msg_') === 0) return true;
        return false;
      }
      function collectBackupData() {
        var data = {
          meta: {
            timestamp: Math.floor(Date.now() / 1000),
            device_id: getDeviceId(),
            device_name: getDeviceName(),
            version: '1.0.0'
          },
          storage: {}
        };
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          if (!key || isExcluded(key)) continue;
          data.storage[key] = localStorage.getItem(key);
        }
        return data;
      }
      function exportBackup() {
        var client = GramLinkClient.getInstance();
        if (!client.isConnected()) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
          return;
        }
        if (!currentBackupTopicId) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_topic_not_ready'));
          return;
        }
        var backup = collectBackupData();
        var jsonStr = JSON.stringify(backup, null, 2);
        var fileName = 'gramlink_backup_' + Math.floor(Date.now() / 1000) + '.json';
        var caption = JSON.stringify({
          device_id: getDeviceId(),
          device_name: getDeviceName(),
          timestamp: Math.floor(Date.now() / 1000)
        });
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_uploading'));
        client.sendFile(currentChannelId, currentBackupTopicId, jsonStr, fileName, caption).then(function (msgId) {
          Lampa.Noty.show(msgId ? Lampa.Lang.translate('gramlink_backup_exported') : Lampa.Lang.translate('gramlink_backup_failed'));
          Lampa.Controller.toggle('gramlink_hub');
        })["catch"](function () {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed'));
          Lampa.Controller.toggle('gramlink_hub');
        });
      }
      function importBackup() {
        var client = GramLinkClient.getInstance();
        if (!client.isConnected()) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_not_connected'));
          return;
        }
        if (!currentBackupTopicId) {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_topic_not_ready'));
          return;
        }
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_fetching'));
        client.getBackupFiles(currentChannelId, currentBackupTopicId, 10).then(function (files) {
          if (!files || files.length === 0) {
            Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_no_files'));
            return;
          }
          var items = files.map(function (f) {
            var deviceName = 'Unknown';
            try {
              deviceName = JSON.parse(f.text || '{}').device_name || 'Unknown';
            } catch (e) {}
            return {
              title: deviceName + " \xB7 " + timeAgo(f.date),
              subtitle: f.fileName || '',
              _file: f
            };
          });
          items.push({
            title: Lampa.Lang.translate('gramlink_cancel') || 'Cancel',
            _cancel: true
          });
          var prevController = Lampa.Controller.enabled().name;
          Lampa.Select.show({
            title: Lampa.Lang.translate('gramlink_backup_pick_title'),
            items: items,
            onBack: function onBack() {
              Lampa.Controller.toggle(prevController);
            },
            onSelect: function onSelect(item) {
              if (item._cancel) {
                Lampa.Controller.toggle(prevController);
                return;
              }
              Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_downloading'));
              client.downloadFile(item._file).then(function (jsonStr) {
                if (!jsonStr) {
                  Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed'));
                  return;
                }
                try {
                  var backup = JSON.parse(jsonStr);
                  if (!backup || !backup.storage) {
                    Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_invalid'));
                    return;
                  }
                  confirmRestore(backup, prevController);
                } catch (err) {
                  Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_invalid'));
                }
              });
            }
          });
        })["catch"](function () {
          Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_failed'));
        });
      }
      function confirmRestore(backup, prevController) {
        var count = Object.keys(backup.storage).length;
        Lampa.Select.show({
          title: Lampa.Lang.translate('gramlink_backup_restore_title'),
          items: [{
            title: Lampa.Lang.translate('gramlink_backup_restore_confirm').replace('{count}', count),
            noenter: true
          }, {
            title: Lampa.Lang.translate('gramlink_backup_restore_btn'),
            _restore: true
          }, {
            title: Lampa.Lang.translate('gramlink_cancel'),
            _cancel: true
          }],
          onBack: function onBack() {
            Lampa.Controller.toggle(prevController);
          },
          onSelect: function onSelect(item) {
            if (item._restore) {
              applyBackup(backup);
            }
            Lampa.Controller.toggle(prevController);
          }
        });
      }
      function applyBackup(backup) {
        Object.keys(backup.storage).forEach(function (key) {
          Lampa.Storage.set(key, backup.storage[key]);
        });
        Lampa.Noty.show(Lampa.Lang.translate('gramlink_backup_restored'));
      }
    }

    function startPlugin() {
      window.plugin_gramlink_ready = true;
      var manifest = {
        type: 'plugin',
        version: '0.0.1',
        author: '@lme_chat',
        name: 'GramLink',
        description: 'Telegram sync via MTProto',
        component: 'gramlink_hub',
        onContextMenu: function onContextMenu(object) {
          var client = GramLinkClient.getInstance();
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
      Lampa.Template.add('gramlink_style', '<style>.gramlink-activity .head__title{font-size:1.4em}.gramlink-hub{padding:1em 2em;max-width:50em;margin:0 auto}.gramlink-hub__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2em;padding-bottom:1em;border-bottom:1px solid rgba(255,255,255,0.1)}.gramlink-hub__title{font-size:1.6em;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.5em}.gramlink-hub__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.5em}.gramlink-hub__section{margin-bottom:2em}.gramlink-hub__section-title{font-size:1.2em;font-weight:600;margin-bottom:1em;color:rgba(255,255,255,0.7)}.gramlink-status{background:rgba(255,255,255,0.05);-webkit-border-radius:.8em;border-radius:.8em;padding:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em}.gramlink-status__indicator{width:1em;height:1em;-webkit-border-radius:50%;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gramlink-status__indicator--connected{background:#4caf50;-webkit-box-shadow:0 0 .6em rgba(76,175,80,0.5);box-shadow:0 0 .6em rgba(76,175,80,0.5)}.gramlink-status__indicator--disconnected{background:#f44336}.gramlink-status__indicator--connecting{background:#ffc107;-webkit-animation:gramlink-pulse 1.5s ease-in-out infinite;animation:gramlink-pulse 1.5s ease-in-out infinite}.gramlink-status__indicator--auth_needed{background:#ff9800}.gramlink-status__indicator--error{background:#f44336}.gramlink-status__info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gramlink-status__label{font-size:1.1em;font-weight:600;margin-bottom:.2em}.gramlink-status__detail{font-size:.9em;color:rgba(255,255,255,0.5)}@-webkit-keyframes gramlink-pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes gramlink-pulse{0%,100%{opacity:1}50%{opacity:.4}}.gramlink-devices__empty{text-align:center;padding:2em;color:rgba(255,255,255,0.4);font-size:1.1em}.gramlink-device{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:1em;padding:1em 1.2em;background:rgba(255,255,255,0.03);-webkit-border-radius:.6em;border-radius:.6em;margin-bottom:.5em;cursor:pointer;-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s}.gramlink-device.focus,.gramlink-device.hover{background:rgba(255,255,255,0.1);outline:.2em solid #fff;outline-offset:.3em}.gramlink-device__icon{width:2.5em;height:2.5em;-webkit-border-radius:.5em;border-radius:.5em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:.9em;color:white}.gramlink-device__info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.gramlink-device__name{font-size:1.1em;font-weight:600}.gramlink-device__meta{font-size:.85em;color:rgba(255,255,255,0.4)}.gramlink-device__status{font-size:.8em;padding:.3em .6em;-webkit-border-radius:.3em;border-radius:.3em;background:rgba(76,175,80,0.15);color:#4caf50}.gramlink-device--this{opacity:.6;cursor:default}.gramlink-auth{padding:1em;text-align:center}.gramlink-auth__qr-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:1.5em;min-height:18em}.gramlink-auth__qr-placeholder{width:16em;height:16em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,0.05);-webkit-border-radius:1em;border-radius:1em}.gramlink-auth__qr-img{width:16em;height:16em;-webkit-border-radius:1em;border-radius:1em;background:white;padding:.5em}.gramlink-auth__status{font-size:1.1em;color:rgba(255,255,255,0.6);line-height:1.5}.gramlink-auth__scan-hint{margin-bottom:.5em;color:rgba(255,255,255,0.8)}.gramlink-auth__confirm-hint{font-size:.85em;color:rgba(255,255,255,0.4)}.gramlink-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em;padding:.6em 1.2em;-webkit-border-radius:.5em;border-radius:.5em;font-size:.9em;font-weight:600;cursor:pointer;border:0;-webkit-transition:background .2s,opacity .2s;-o-transition:background .2s,opacity .2s;transition:background .2s,opacity .2s}.gramlink-btn.focus,.gramlink-btn.hover{outline:.2em solid #fff;outline-offset:.3em}.gramlink-btn--primary{background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);color:white}.gramlink-btn--ghost{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8)}.gramlink-btn--ghost.focus{background:rgba(255,255,255,0.15)}.gramlink-btn--small{padding:.4em .8em;font-size:.8em}@media screen and (max-width:767px){.gramlink-hub{padding:.8em 1em}.gramlink-status{padding:1em}.gramlink-auth__qr-placeholder,.gramlink-auth__qr-img{width:12em;height:12em}.gramlink-auth__qr-container{min-height:14em}}@media screen and (max-width:480px){.gramlink-hub__header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:.8em;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}}.gramlink-2fa{padding:1em;text-align:center}.gramlink-2fa__desc{font-size:1.1em;color:rgba(255,255,255,0.8);margin-bottom:.5em;line-height:1.4}.gramlink-2fa__hint{font-size:.9em;color:rgba(255,255,255,0.5);margin-bottom:1.5em}.gramlink-2fa__input-wrap{margin-bottom:1.5em}.gramlink-2fa__input{width:100%;max-width:20em;padding:.8em 1em;border:.15em solid rgba(255,255,255,0.2);-webkit-border-radius:.5em;border-radius:.5em;background:rgba(255,255,255,0.08);color:#fff;font-size:1.1em;text-align:center;outline:0;-webkit-box-sizing:border-box;box-sizing:border-box}.gramlink-2fa__input:focus{border-color:#08c}.gramlink-2fa__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gramlink-2fa__btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.7em 1.5em;-webkit-border-radius:.5em;border-radius:.5em;font-size:1em;font-weight:600;cursor:pointer;min-width:8em;-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s}.gramlink-2fa__btn_ok{background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);color:white}.gramlink-2fa__btn_cancel{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8)}.gramlink-2fa__btn.focus,.gramlink-2fa__btn.hover{outline:.2em solid #fff;outline-offset:.3em}.gramlink-tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:.8em;padding:0 2em;margin-bottom:1em}.gramlink-tab.active{background:rgba(255,255,255,0.15) !important;border-color:rgba(255,255,255,0.3) !important;color:#fff !important}.gramlink-tab-view.hide{display:none !important}.gramlink-device-avatar{width:2em;height:2em;-webkit-border-radius:.4em;border-radius:.4em;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:600;font-size:.9em}.gramlink-avatar{-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:700;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.gramlink-avatar--head{width:24px;height:24px;font-size:11px}.gramlink-avatar--list{width:2em;height:2em;font-size:.9em}.gramlink-profile-avatar{width:2.2em;height:2.2em;-webkit-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:-o-linear-gradient(315deg,#08c 0,#00a2e8 100%);background:linear-gradient(135deg,#08c 0,#00a2e8 100%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:600;font-size:.9em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gs-plugin-toggle{width:1.2em;height:1.2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.2em}.gs-plugin-toggle.on{color:#4caf50}.gs-plugin-toggle.off{color:rgba(255,255,255,0.3)}.gs-status-item .gramlink-status__indicator{margin:auto}.profile-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1em;padding:.5em 0}.profile-card{background:rgba(255,255,255,0.06);-webkit-border-radius:12px;border-radius:12px;padding:1em;position:relative;cursor:pointer;-webkit-transition:background .2s,-webkit-box-shadow .2s;transition:background .2s,-webkit-box-shadow .2s;-o-transition:background .2s,box-shadow .2s;transition:background .2s,box-shadow .2s;transition:background .2s,box-shadow .2s,-webkit-box-shadow .2s;min-height:8em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.profile-card.focus,.profile-card.hover{background:rgba(255,255,255,0.12);outline:.2em solid rgba(255,255,255,0.5);outline-offset:.25em}.profile-card--active{background:rgba(255,255,255,0.1);-webkit-box-shadow:inset 0 0 0 2px rgba(255,215,0,0.5);box-shadow:inset 0 0 0 2px rgba(255,215,0,0.5)}.profile-card--add{border:2px dashed rgba(255,215,0,0.4);background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:rgba(255,255,255,0.5);font-size:.95em}.profile-card--add .profile-card__add-icon{font-size:2em;line-height:1;margin-bottom:.3em;opacity:.6}.profile-card--add.focus,.profile-card--add.hover{border-color:rgba(255,215,0,0.8);color:rgba(255,255,255,0.8)}.profile-card--empty{border:2px dashed rgba(255,255,255,0.1);background:transparent}.profile-card__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.profile-card__name{font-size:1em;font-weight:600;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.4em}.profile-card__name .gramlink-avatar--list{width:1.4em;height:1.4em;font-size:.65em}@media screen and (max-width:767px){.profile-grid{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:480px){.profile-grid{grid-template-columns:1fr}}</style>');
      $('body').append(Lampa.Template.get('gramlink_style', {}, true));
      setupBroadcastListener();
      addMenu();
      addProfileHeadButton();
      Broadcast.setupPlayerPanel();
      Broadcast.addBroadcastButton();
      autoConnect();
      autoActivateProfile();
      setupProfileDeltaListeners();
      startDeltaPolling();
    }
    function startDeltaPolling() {
      // Start after connection is established
      var client = GramLinkClient.getInstance();
      var check = setInterval(function () {
        if (client.isConnected()) {
          clearInterval(check);
          // Poll immediately then every 10s
          Profiles.refreshDeltas();
          setInterval(function () {
            Profiles.refreshDeltas();
          }, 10000);
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

    // ─── Startup profile activation ─────────────────────────

    function autoActivateProfile() {
      var activeId = Lampa.Storage.get('gramlink_active_profile', '');
      if (!activeId) return;
      var profilesTopicId = Lampa.Storage.get('gramlink_profiles_topic', '');
      var profilesSyncTopicId = Lampa.Storage.get('gramlink_profiles_sync_topic', '');
      if (!profilesTopicId) return;
      var client = GramLinkClient.getInstance();
      var check = setInterval(function () {
        if (client.isConnected()) {
          clearInterval(check);
          Profiles.startAutoActivation(profilesTopicId, profilesSyncTopicId);
        }
      }, 2000);
    }

    // ─── Auto-connect on startup ──────────────────────────────

    function autoConnect() {
      var client = GramLinkClient.getInstance();
      if (!client.hasCredentials()) return;

      // Connect in background once the app is fully ready
      function doConnect() {
        client.connect().then(function () {
          console.log('GramLink', 'Auto-connected to Telegram.');
          Profiles.refreshCacheFromTelegram();
        })["catch"](function (err) {
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
      var client = GramLinkClient.getInstance();
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

    // ─── Profile Head Button ────────────────────────────────

    function addProfileHeadButton() {
      var $nativeProfile = $('.head__action.open--profile').first();
      var $profileBtn = $('<div class="head__action selector open--gramlink-profile" ' + 'style="display:none">' + '<div class="gramlink-avatar gramlink-avatar--head">?</div>' + '</div>');
      if ($nativeProfile.length) {
        $nativeProfile.after($profileBtn);
        $('.head__action.open--profile').addClass('hide');
      } else {
        $('.head__action.open--search').after($profileBtn);
      }
      function updateProfileButton() {
        var client = GramLinkClient.getInstance();
        var activeId = Lampa.Storage.get('gramlink_active_profile', '');
        var activeName = Lampa.Storage.get('gramlink_active_profile_name', '');
        if (!client.isConnected() || !activeId || !activeName) {
          $profileBtn.hide();
          return;
        }
        var avatar = Profiles.getAvatar(activeName);
        var color = Profiles.avatarColor(activeName);
        $profileBtn.show();
        $profileBtn.find('.gramlink-avatar').css('background', color).text(avatar);
      }
      updateProfileButton();
      Lampa.Storage.listener.follow('change', function (e) {
        if (e.name === 'gramlink_active_profile' || e.name === 'gramlink_active_profile_name') {
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
      var client = GramLinkClient.getInstance();
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
          items.push({
            title: p.name,
            template: 'selectbox_icon',
            icon: '<div class="gramlink-avatar gramlink-avatar--list" style="background:' + Profiles.avatarColor(p.name) + '">' + p.avatar + '</div>',
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
        onBack: function onBack() {},
        onFullDraw: function onFullDraw(container) {
          container.append($('<div class="selectbox-item selectbox-item--icon selector">' + '<div class="selectbox-item__icon">' + '<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' + '</div>' + '<div>' + '<div class="selectbox-item__title">' + (Lampa.Lang.translate('gramlink_settings') || 'GramLink Settings') + '</div>' + '</div>' + '</div>').on('hover:enter', function () {
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
