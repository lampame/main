(function () {
    'use strict';
      try {
        // Перевірка синтаксису ES6 (default params, arrow functions, classes)
        new Function("(a = 0) => { class Test {} }")();
        Lampa.Utils.putScriptAsync(['https://lampame.github.io/main/TraktTV/TraktTV.js'], function () { });
        console.log('LME', 'TraktTV ES6');
      } catch (e) {
        Lampa.Utils.putScriptAsync(['https://lampame.github.io/main/es5/TraktTV/TraktTV.js'], function () { });
          console.log('LME', 'TraktTV ES5');
      }
})();
