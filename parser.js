(function () {
	'use strict';
    var PLUGIN_NAME = 'PubTorr';

    function callAnalytics(){
        try {
            if (window.LME && window.LME.Analytics && typeof window.LME.Analytics.track === 'function') {
                window.LME.Analytics.track({
                    plugin: PLUGIN_NAME,
                    userId: Lampa.Account.Permit.user.id || Lampa.Storage.get("lampa_uid"),
                    count: 1
                });
            }
        } catch (e) {
            // Логування помилок локально — уникати зупинки плагіна
            if (typeof console !== 'undefined' && console.error) console.error('Analytics call failed', e);
        }
    }

    if (window.LME && window.LME.Analytics) {
        callAnalytics();
    } else {
        // Заміни URL на фактичне розташування analytics.js поруч з іншими плагінами
        Lampa.Utils.putScriptAsync(['https://lampame.github.io/main/analytics.js'], function () {
            callAnalytics();
        });
    }
	Lampa.Utils.putScriptAsync(['https://lampame.github.io/main/pubtorr/pubtorr.js'], function () { });
  
  })();
  
