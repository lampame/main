(function(){
    'use strict';

    if (typeof window.LME === 'undefined') window.LME = {};
    if (window.LME.Analytics) return;

    var STORAGE_KEY = 'LME.Analytics.sent.v1';
    // ЗАМІНИТИ ***** на реальний apiKey
    var API_URL = 'https://api.jsonstorage.net/v1/json/?Name=TorrentManager&apiKey=0cc5e548-b14c-4beb-bc54-7ac5596dc0c6';

    function loadSent(){
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
        catch (e) { return {}; }
    }

    function saveSent(obj){
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); }
        catch (e) {}
    }

    function makeTimestamp(){
        return Date.now().toString() + Math.floor(Math.random() * 1e12).toString();
    }

    function doSend(payload){
        if (!payload) return Promise.resolve({ skipped: true, reason: 'no_payload' });
        var uid = String(payload.userId || '0');
        var plugin = String(payload.plugin || '');
        if (!uid || !plugin) return Promise.resolve({ skipped: true, reason: 'missing_fields' });

        var sent = loadSent();
        sent[uid] = sent[uid] || [];
        if (sent[uid].indexOf(plugin) !== -1) return Promise.resolve({ skipped: true, reason: 'already_sent' });

        var body = {
            plugin: plugin,
            userId: payload.userId,
            count: payload.count || 1,
            timestamp: payload.timestamp || makeTimestamp()
        };

        return fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(function(res){
            if (!res.ok) throw new Error('bad_response:' + res.status);
            // Успішно відправлено — зберігаємо маркер, що для цього userId+plugin вже було відправлено
            sent[uid].push(plugin);
            saveSent(sent);
            return { ok: true };
        }).catch(function(err){
            // Не видаляємо маркер при помилці — спроби можна робити повторно при наступному завантаженні
            return { ok: false, error: err && err.message ? err.message : String(err) };
        });
    }

    // Простий API: LME.Analytics.track({plugin, userId, count, timestamp})
    // Захищає від повторного визначення, дозволяє виклики до завантаження (черга)
    var queue = [];
    var initialized = true; // ресурс доступний одразу після підключення скрипта

    function flushQueue(){
        if (!queue.length) return;
        var pending = queue.slice();
        queue = [];
        pending.forEach(function(p){ doSend(p); });
    }

    window.LME.Analytics = {
        track: function(opts){
            if (!opts) return;
            if (initialized) return doSend(opts);
            queue.push(opts);
        },
        _flushQueue: flushQueue,
        _internal: {
            _doSend: doSend,
            _loadSent: loadSent,
            _saveSent: saveSent
        }
    };

    // Якщо були виклики в чергу — відправимо їх після завантаження сторінки
    window.addEventListener('load', function(){
        initialized = true;
        flushQueue();
    });
})();