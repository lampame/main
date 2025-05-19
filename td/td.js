(function () {
  'use strict';

  function qBittorrentClient(selectedTorrent) {
    if (!selectedTorrent) {
      return;
    }
    var protocol = Lampa.Storage.get("qBittorentProtocol") || "http://";
    var url = Lampa.Storage.get("qBittorentUrl");
    //const port = Lampa.Storage.get("qBittorentPort");
    var user = Lampa.Storage.get("qBittorentUser");
    var pass = Lampa.Storage.get("qBittorentPass");
    var sd = Lampa.Storage.get("qBittorentSequentialDownload");
    var flpp = Lampa.Storage.get("qBittorentfirstLastPiecePrio");

    // Authentication request
    var authXhr = new XMLHttpRequest();
    authXhr.open("POST", "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(protocol).concat(url, "/api/v2/auth/login?username=").concat(user, "&password=").concat(pass), true);
    authXhr.onreadystatechange = function () {
      if (authXhr.readyState === 4) {
        if (authXhr.status !== 200) {
          console.log("TD", "Bad auth");
          Lampa.Noty.show(Lampa.Lang.translate('tdAuthError'));
          return;
        }

        // Add torrent request
        var addXhr = new XMLHttpRequest();
        addXhr.open("POST", "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(protocol).concat(url, "/api/v2/torrents/add"), true);
        addXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        addXhr.onreadystatechange = function () {
          if (addXhr.readyState === 4) {
            if (addXhr.status !== 200) {
              console.log("TD", "Server return ".concat(addXhr.status, " when try add torrent"));
              Lampa.Noty.show(Lampa.Lang.translate('tdAddError'));
              return;
            }
            if (addXhr.response === "Fails.") {
              console.log("TD", addXhr.response);
              Lampa.Noty.show(Lampa.Lang.translate('tdExist'));
              return;
            }
            console.log("TD", addXhr.response);
            Lampa.Noty.show(Lampa.Lang.translate('tdAdded'));
          }
        };

        //const data = "urls=" + encodeURIComponent(selectedTorrent);
        var categoryDesc = selectedTorrent.CategoryDesc;
        var categoryParam = categoryDesc ? Lampa.Storage.get("qBittorent".concat(categoryDesc)) : '';
        var data = "urls=".concat(encodeURIComponent(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link), "&sequentialDownload=").concat(sd ? "true" : "false", "&firstLastPiecePrio=").concat(flpp ? "true" : "false", "&category=").concat(categoryParam);
        addXhr.send(data);
      }
    };
    authXhr.send();
    setTimeout(function () {
      Lampa.Select.close();
    }, 10);
  }
  function getStatus$2() {
    var statusXhr = new XMLHttpRequest();
    statusXhr.withCredentials = false;
    statusXhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          console.log("TD", "Status " + this.status);
          $('#qBittorentgetStatus').removeClass('active error wait').addClass('active');
          $('#qBittorentgetStatusBtn').removeClass('active error wait').addClass('active');
          //$("#qBittorentgetStatusBtn").text(function (i, text) { return "🟢 " + text; });
        } else if (this.status === undefined) {
          console.log("TD", "Status - undefined");
          $('#qBittorentgetStatus').removeClass('active error wait').addClass('error');
          $('#qBittorentgetStatusBtn').removeClass('active error wait').addClass('error');
          //$("#qBittorentgetStatusBtn").text(function (i, text) { return "🔴 " + text; });
        } else {
          console.log("TD", "Status " + this.response);
          console.log("TD", "Status " + this.status);
          console.log("TD", this);
          $('#qBittorentgetStatus').removeClass('active error wait').addClass('error');
          $('#qBittorentgetStatusBtn').removeClass('active error wait').addClass('error');
          //$("#qBittorentgetStatusBtn").text(function (i, text) { return "🔴 " + text; });
        }
      }
    });
    statusXhr.open("POST", "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("qBittorentProtocol") || "http://").concat(Lampa.Storage.get("qBittorentUrl") || "127.0.0.1", "/api/v2/auth/login?username=").concat(Lampa.Storage.get("qBittorentUser") || "1", "&password=").concat(Lampa.Storage.get("qBittorentPass") || "1"));
    statusXhr.send();
  }
  function qPanels$1() {
    var protocol = Lampa.Storage.get("qBittorentProtocol") || "http://";
    var url = Lampa.Storage.get("qBittorentUrl");
    var user = Lampa.Storage.get("qBittorentUser");
    var pass = Lampa.Storage.get("qBittorentPass");
    var footer = document.createElement("div");
    footer.classList.add("simple-button", "selector", "tdReload");
    footer.textContent = Lampa.Lang.translate('tdPanelReload');
    footer.on("hover:enter", function () {
      Lampa.Activity.replace({
        url: "",
        title: "Torrent downloader",
        component: "td",
        page: 1
      });
      Lampa.Noty.show(Lampa.Lang.translate('tdPanelReloaded'));
    });
    function action(action, item, deleteFiles) {
      var authXhr = new XMLHttpRequest();
      authXhr.open("POST", "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(protocol).concat(url, "/api/v2/auth/login?username=").concat(user, "&password=").concat(pass), true);
      authXhr.onreadystatechange = function () {
        if (authXhr.readyState === 4) {
          if (authXhr.status !== 200) {
            console.log("TD", authXhr);
            Lampa.Noty.show(Lampa.Lang.translate('tdAuthError'));
            return;
          }
          if (authXhr.status === 200) {
            var deleteParam = action === "delete" ? "&deleteFiles=".concat(deleteFiles) : "";
            var data = "hashes=".concat(item.hash).concat(deleteParam);
            var _xhr = new XMLHttpRequest();
            _xhr.withCredentials = false;
            _xhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4 && this.status === 200) {
                console.log("TD", this.responseText);
                Lampa.Noty.show(Lampa.Lang.translate('tdAction') + item.name + " " + action);
              } else {
                console.log("TD", this);
                Lampa.Noty.show(Lampa.Lang.translate('tdError') + this.status);
              }
            });
            _xhr.open("POST", "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("qBittorentProtocol") || "http://").concat(Lampa.Storage.get("qBittorentUrl") || "127.0.0.1", "/api/v2/torrents/").concat(action));
            _xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            _xhr.send(data);
          }
        }
      };
      authXhr.send();
    }
    function tabels(response) {
      // Получить элемент, в который нужно вставить таблицу
      var parentElement = document.getElementById("tdStatus");
      // Создать таблицу
      var table = document.createElement("table");
      table.id = "tdStatus_table";
      // Info block

      var settings = {
        "url": "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("qBittorentProtocol") || "http://").concat(Lampa.Storage.get("qBittorentUrl") || "127.0.0.1", "/api/v2/sync/maindata"),
        "method": "GET",
        "timeout": 0
      };
      $.ajax(settings).done(function (response) {
        var serverInfo = document.createElement("div");
        serverInfo.id = "serverInfo";
        serverInfo.innerHTML = "<b>Free space</b>: ".concat(formatBytes(response.server_state.free_space_on_disk));
        var systemTool = document.createElement("div");
        systemTool.id = "systemTool";
        systemTool.appendChild(serverInfo);
        systemTool.appendChild(footer);
        parentElement.insertBefore(systemTool, parentElement.firstChild);
      });
      // Добавить строки с данными из переменной response
      if (response && response.length > 0) {
        response.forEach(function (item) {
          var row = table.insertRow();
          row.id = "td_panel";
          // Создать ячейки для каждой строки
          var nameCell = row.insertCell();
          nameCell.id = "tName";
          nameCell.textContent = item.name;
          var progressCell = row.insertCell();
          progressCell.id = "percent";
          progressCell.textContent = "".concat(formatPercent(item.progress), " / ").concat(formatBytes(item.size));
          var stateCell = row.insertCell();
          if (item.state === "pausedDL") {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.innerHTML = Lampa.Lang.translate("qBittorent".concat(item.state));
            stateCell.on("hover:enter", function () {
              action("resume", item);
            });
          } else if (item.state === "downloading") {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate("qBittorent".concat(item.state));
            stateCell.on("hover:enter", function () {
              action("pause", item);
            });
          } else {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate("qBittorent".concat(item.state));
          }
          var deleteCell = row.insertCell();
          deleteCell.classList.add("simple-button", "selector", "tdActionDell");
          deleteCell.innerHTML = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.228 5.79003C19.57 5.84203 19.91 5.89703 20.25 5.95603M19.228 5.79003L18.16 19.673C18.1164 20.2383 17.8611 20.7662 17.445 21.1513C17.029 21.5364 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5364 6.55498 21.1513C6.13894 20.7662 5.88359 20.2383 5.84 19.673L4.772 5.79003M19.228 5.79003C18.0739 5.61555 16.9138 5.48313 15.75 5.39303M4.772 5.79003C4.43 5.84103 4.09 5.89603 3.75 5.95503M4.772 5.79003C5.92613 5.61555 7.08623 5.48313 8.25 5.39303M15.75 5.39303V4.47703C15.75 3.29703 14.84 2.31303 13.66 2.27603C12.5536 2.24067 11.4464 2.24067 10.34 2.27603C9.16 2.31303 8.25 3.29803 8.25 4.47703V5.39303M15.75 5.39303C13.2537 5.20011 10.7463 5.20011 8.25 5.39303\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11.1738 9.48535L11.0576 12.7939C11.0576 13.514 11.1055 14.0016 11.2012 14.2568C11.3014 14.512 11.4199 14.6966 11.5566 14.8105C11.6979 14.9199 11.8757 14.9746 12.0898 14.9746C12.3086 14.9746 12.5 14.9336 12.6641 14.8516C12.8281 14.7695 12.9762 14.6602 13.1084 14.5234C13.3454 14.2773 13.5322 13.9561 13.6689 13.5596C13.6735 13.4365 13.6758 13.3112 13.6758 13.1836V12.7939C13.6758 11.0713 13.5527 9.94336 13.3066 9.41016C13.3066 9.41016 13.2565 9.30534 13.1562 9.0957H15.1045C15.109 9.16862 15.1113 9.23698 15.1113 9.30078V9.49902C15.1113 9.49902 15.0726 10.5973 14.9951 12.7939C14.9951 14.0381 15.1045 14.8926 15.3232 15.3574C15.4007 15.526 15.5374 15.7402 15.7334 16H13.7852L13.7373 15.7266C13.6826 15.4349 13.6439 15.1113 13.6211 14.7559C13.1836 15.6764 12.5957 16.1367 11.8574 16.1367C11.4928 16.1367 11.1943 16.0091 10.9619 15.7539C10.9984 16.9297 11.0485 17.6292 11.1123 17.8525C11.1761 18.0804 11.2354 18.2513 11.29 18.3652C11.3493 18.4837 11.4131 18.5931 11.4814 18.6934L11.7139 19.0078H9.42383C9.55143 18.5703 9.62435 18.1328 9.64258 17.6953C9.66536 17.2624 9.68132 16.891 9.69043 16.5811C9.7041 16.2757 9.71549 15.959 9.72461 15.6309C9.74284 14.9837 9.75195 14.3411 9.75195 13.7031C9.75195 11.7663 9.69043 10.5768 9.56738 10.1348C9.49447 9.86133 9.40104 9.64941 9.28711 9.49902L9 9.0957H11.167L11.1738 9.48535Z\" fill=\"white\"/></svg>";
          deleteCell.on("hover:enter", function () {
            action("delete", item, false);
          });
          var fdeleteCell = row.insertCell();
          fdeleteCell.classList.add("simple-button", "selector", "tdActionDell");
          fdeleteCell.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 7.5L19.625 18.132C19.5913 18.705 19.3399 19.2436 18.9222 19.6373C18.5045 20.031 17.952 20.2502 17.378 20.25H6.622C6.04796 20.2502 5.49555 20.031 5.07783 19.6373C4.66011 19.2436 4.40868 18.705 4.375 18.132L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.246 7.5 21.75 6.996 21.75 6.375V4.875C21.75 4.254 21.246 3.75 20.625 3.75H3.375C2.754 3.75 2.25 4.254 2.25 4.875V6.375C2.25 6.996 2.754 7.5 3.375 7.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          fdeleteCell.on("hover:enter", function () {
            action("delete", item, true);
          });
          var actionCell = row.insertCell();
          actionCell.classList.add("tdActionBlock");
          actionCell.appendChild(stateCell);
          actionCell.appendChild(deleteCell);
          actionCell.appendChild(fdeleteCell);
        });
      } else {
        // Если ответ пустой, добавить строку с сообщением
        var emptyRow = table.insertRow();
        var emptyCell = emptyRow.insertCell();
        //emptyCell.colSpan = headerCells.length;
        emptyCell.textContent = Lampa.Lang.translate('tdPanelDataError');
      }

      // Вставить созданную таблицу в родительский элемент
      if ($("#tdStatus").children().length > 0) {
        $("#tdStatus").empty();
      }
      parentElement.appendChild(table);
      parentElement.appendChild(footer);
      function formatPercent(percent) {
        // Округлить процент до двух знаков после запятой
        percent = percent * 100;
        percent = Number(percent.toFixed(2));

        // Добавить процентный знак
        percent = percent + "%";
        return percent;
      }
      function formatBytes(bytes) {
        if (bytes >= 1073741824) {
          return (bytes / 1073741824).toFixed(2) + " GB";
        } else if (bytes >= 1048576) {
          return (bytes / 1048576).toFixed(2) + " MB";
        } else if (bytes >= 1024) {
          return (bytes / 1024).toFixed(2) + " KB";
        } else {
          return bytes + " B";
        }
      }
    }
    function error() {
      var tdPanel = document.getElementById("tdStatus");
      var error = document.createElement("div");
      error.innerHTML = "<div id='Error'><h2>".concat(Lampa.Lang.translate('tdPanelDataError'), "</h2></div>");
      tdPanel.appendChild(error);
      tdPanel.appendChild(footer);
    }
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        return tabels(JSON.parse(this.responseText));
        //return card(JSON.parse(this.responseText));
      } else if (this.readyState === 4 && this.status !== 200) {
        return error();
      }
    });
    xhr.open("GET", "".concat(Lampa.Storage.get("qBittorentKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("qBittorentProtocol") || "http://").concat(Lampa.Storage.get("qBittorentUrl") || "127.0.0.1", "/api/v2/torrents/info?limit=10"));
    xhr.send();
  }
  var qBittorent = {
    qBittorrentClient: qBittorrentClient,
    getStatus: getStatus$2,
    qPanels: qPanels$1
  };

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return r;
    };
    var t,
      r = {},
      e = Object.prototype,
      n = e.hasOwnProperty,
      o = "function" == typeof Symbol ? Symbol : {},
      i = o.iterator || "@@iterator",
      a = o.asyncIterator || "@@asyncIterator",
      u = o.toStringTag || "@@toStringTag";
    function c(t, r, e, n) {
      return Object.defineProperty(t, r, {
        value: e,
        enumerable: !n,
        configurable: !n,
        writable: !n
      });
    }
    try {
      c({}, "");
    } catch (t) {
      c = function (t, r, e) {
        return t[r] = e;
      };
    }
    function h(r, e, n, o) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype);
      return c(a, "_invoke", function (r, e, n) {
        var o = 1;
        return function (i, a) {
          if (3 === o) throw Error("Generator is already running");
          if (4 === o) {
            if ("throw" === i) throw a;
            return {
              value: t,
              done: !0
            };
          }
          for (n.method = i, n.arg = a;;) {
            var u = n.delegate;
            if (u) {
              var c = d(u, n);
              if (c) {
                if (c === f) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (1 === o) throw o = 4, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = 3;
            var h = s(r, e, n);
            if ("normal" === h.type) {
              if (o = n.done ? 4 : 2, h.arg === f) continue;
              return {
                value: h.arg,
                done: n.done
              };
            }
            "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg);
          }
        };
      }(r, n, new Context(o || [])), !0), a;
    }
    function s(t, r, e) {
      try {
        return {
          type: "normal",
          arg: t.call(r, e)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    r.wrap = h;
    var f = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var l = {};
    c(l, i, function () {
      return this;
    });
    var p = Object.getPrototypeOf,
      y = p && p(p(x([])));
    y && y !== e && n.call(y, i) && (l = y);
    var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l);
    function g(t) {
      ["next", "throw", "return"].forEach(function (r) {
        c(t, r, function (t) {
          return this._invoke(r, t);
        });
      });
    }
    function AsyncIterator(t, r) {
      function e(o, i, a, u) {
        var c = s(t[o], t, i);
        if ("throw" !== c.type) {
          var h = c.arg,
            f = h.value;
          return f && "object" == typeof f && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) {
            e("next", t, a, u);
          }, function (t) {
            e("throw", t, a, u);
          }) : r.resolve(f).then(function (t) {
            h.value = t, a(h);
          }, function (t) {
            return e("throw", t, a, u);
          });
        }
        u(c.arg);
      }
      var o;
      c(this, "_invoke", function (t, n) {
        function i() {
          return new r(function (r, o) {
            e(t, n, r, o);
          });
        }
        return o = o ? o.then(i, i) : i();
      }, !0);
    }
    function d(r, e) {
      var n = e.method,
        o = r.i[n];
      if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
      var i = s(o, r.i, e.arg);
      if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;
      var a = i.arg;
      return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);
    }
    function w(t) {
      this.tryEntries.push(t);
    }
    function m(r) {
      var e = r[4] || {};
      e.type = "normal", e.arg = t, r[4] = e;
    }
    function Context(t) {
      this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0);
    }
    function x(r) {
      if (null != r) {
        var e = r[i];
        if (e) return e.call(r);
        if ("function" == typeof r.next) return r;
        if (!isNaN(r.length)) {
          var o = -1,
            a = function e() {
              for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;
              return e.value = t, e.done = !0, e;
            };
          return a.next = a;
        }
      }
      throw new TypeError(typeof r + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) {
      var r = "function" == typeof t && t.constructor;
      return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));
    }, r.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;
    }, r.awrap = function (t) {
      return {
        __await: t
      };
    }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () {
      return this;
    }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(h(t, e, n, o), i);
      return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, g(v), c(v, u, "Generator"), c(v, i, function () {
      return this;
    }), c(v, "toString", function () {
      return "[object Generator]";
    }), r.keys = function (t) {
      var r = Object(t),
        e = [];
      for (var n in r) e.unshift(n);
      return function t() {
        for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t;
        return t.done = !0, t;
      };
    }, r.values = x, Context.prototype = {
      constructor: Context,
      reset: function (r) {
        if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0][4];
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (r) {
        if (this.done) throw r;
        var e = this;
        function n(t) {
          a.type = "throw", a.arg = r, e.next = t;
        }
        for (var o = e.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i[4],
            u = this.prev,
            c = i[1],
            h = i[2];
          if (-1 === i[0]) return n("end"), !1;
          if (!c && !h) throw Error("try statement without catch or finally");
          if (null != i[0] && i[0] <= u) {
            if (u < c) return this.method = "next", this.arg = t, n(c), !0;
            if (u < h) return n(h), !1;
          }
        }
      },
      abrupt: function (t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
            var o = n;
            break;
          }
        }
        o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null);
        var i = o ? o[4] : {};
        return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i);
      },
      complete: function (t, r) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f;
      },
      finish: function (t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
        }
      },
      catch: function (t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[0] === t) {
            var n = e[4];
            if ("throw" === n.type) {
              var o = n.arg;
              m(e);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (r, e, n) {
        return this.delegate = {
          i: x(r),
          r: e,
          n: n
        }, "next" === this.method && (this.arg = t), f;
      }
    }, r;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function transmissionAuth() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 409) {
          Lampa.Storage.set("transmissionKey", xhr.getResponseHeader("X-Transmission-Session-Id"));
          console.log('TD', "Try Auth and set key ".concat(Lampa.Storage.field('transmissionKey'), " "), this.status);
          Lampa.Noty.show(Lampa.Lang.translate('transmissionAuthSuccess'));
        } else {
          if (this.status !== 200) {
            console.log('TD', 'Try Auth', this.status);
            Lampa.Noty.show(Lampa.Lang.translate('transmissionAuthDenied'));
          }
        }
      }
    });
    var data = JSON.stringify({
      "method": "session-get",
      "arguments": {
        "fields": ["session-id"]
      }
    });
    xhr.open("POST", getTransmissionUrl());
    Object.entries(getHeaders()).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      return xhr.setRequestHeader(key, value);
    });
    xhr.send(data);
  }
  function getTransmissionUrl() {
    return "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://p01--corsproxy--h7ynqrkjrc6c.code.run/" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc");
  }
  function getHeaders() {
    /*
    return {
        "X-Transmission-Session-Id": Lampa.Storage.get("transmissionKey"),
        "Authorization": "Basic ".concat(
            btoa(
                Lampa.Storage.get("transmissionUser") +
                ":" +
                Lampa.Storage.get("transmissionPass")
            )
        ),
        "Content-Type": "application/json"
    };
     */
    var headers = {
      "Authorization": "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass"))),
      "Content-Type": "application/json"
    };
    if (Lampa.Storage.get("transmissionKey")) {
      headers["X-Transmission-Session-Id"] = Lampa.Storage.get("transmissionKey");
    }
    if (Lampa.Storage.get('transmissionKeenetic') === true) {
      headers["x-requested-with"] = "lampame";
    }
    return headers;
  }
  function transmissionDir() {
    return _transmissionDir.apply(this, arguments);
  }
  function _transmissionDir() {
    _transmissionDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data, url, headers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = JSON.stringify({
              "method": "session-get"
            });
            url = getTransmissionUrl();
            headers = getHeaders();
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.withCredentials = false;
              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                  if (this.status === 200) {
                    resolve(JSON.parse(this.responseText).arguments['download-dir']);
                  } else {
                    reject("Error: ".concat(this.status));
                  }
                }
              });
              xhr.open("POST", url);
              Object.entries(headers).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];
                return xhr.setRequestHeader(key, value);
              });
              xhr.send(data);
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _transmissionDir.apply(this, arguments);
  }
  function transmissionClient(_x) {
    return _transmissionClient.apply(this, arguments);
  }
  function _transmissionClient() {
    _transmissionClient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(selectedTorrent) {
      var categoryParam, data, xhr;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!selectedTorrent) {
              _context2.next = 38;
              break;
            }
            _context2.prev = 1;
            if (!selectedTorrent.CategoryDesc) {
              _context2.next = 6;
              break;
            }
            _context2.t0 = Lampa.Storage.get("transmission".concat(selectedTorrent.CategoryDesc));
            _context2.next = 9;
            break;
          case 6:
            _context2.next = 8;
            return transmissionDir();
          case 8:
            _context2.t0 = _context2.sent;
          case 9:
            categoryParam = _context2.t0;
            if (categoryParam) {
              _context2.next = 16;
              break;
            }
            _context2.next = 13;
            return transmissionDir();
          case 13:
            _context2.t1 = _context2.sent;
            _context2.next = 17;
            break;
          case 16:
            _context2.t1 = categoryParam;
          case 17:
            categoryParam = _context2.t1;
            _context2.t2 = console;
            _context2.t3 = categoryParam;
            _context2.next = 22;
            return transmissionDir();
          case 22:
            _context2.t4 = _context2.sent;
            _context2.t2.log.call(_context2.t2, 'categoryParam', _context2.t3, _context2.t4);
            data = JSON.stringify({
              method: "torrent-add",
              arguments: {
                paused: Lampa.Storage.get("transmissionAutostart"),
                filename: selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link,
                "download-dir": categoryParam
              }
            });
            xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);
                if (this.status === 200) {
                  if (response.result === "Couldn't fetch torrent: Found (302)") {
                    Lampa.Noty.show(Lampa.Lang.translate('tdError') + response.result);
                  } else if (response.arguments.hasOwnProperty('torrent-duplicate')) {
                    Lampa.Noty.show(Lampa.Lang.translate('tdDuplicate'));
                  } else {
                    Lampa.Noty.show(Lampa.Lang.translate('tdAdded'));
                  }
                } else {
                  Lampa.Noty.show(Lampa.Lang.translate('tdError') + this.status);
                }
              }
            });
            xhr.open("POST", getTransmissionUrl());
            Object.entries(getHeaders()).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];
              return xhr.setRequestHeader(key, value);
            });
            xhr.send(data);
            _context2.next = 36;
            break;
          case 32:
            _context2.prev = 32;
            _context2.t5 = _context2["catch"](1);
            console.error(_context2.t5);
            Lampa.Noty.show(Lampa.Lang.translate('tdError') + _context2.t5);
          case 36:
            _context2.next = 39;
            break;
          case 38:
            if (!Lampa.Storage.get("transmissionKey") && Lampa.Storage.get("transmissionKeenetic") !== true) {
              Lampa.Noty.show(Lampa.Lang.translate('tdAuthError') + !Lampa.Storage.get("transmissionKey") + " ".concat(getTransmissionUrl()));
            }
          case 39:
            setTimeout(function () {
              return Lampa.Select.close();
            }, 10);
          case 40:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 32]]);
    }));
    return _transmissionClient.apply(this, arguments);
  }
  function getStatus$1() {
    return _getStatus.apply(this, arguments);
  }
  function _getStatus() {
    _getStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var url, headers;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            url = getTransmissionUrl();
            headers = getHeaders();
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.withCredentials = false;
              var data = JSON.stringify({
                "method": "session-get"
              });
              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                  console.log('TD', this.getAllResponseHeaders(), this.status, this);
                  if (this.status === 200 || this.status === 409) {
                    //Lampa.Storage.set("transmissionKey", xhr.getResponseHeader("X-Transmission-Session-Id"));
                    $("#transmissionStatus, #transmissionStatusBtn").removeClass("active error wait").addClass("active");
                    resolve();
                  } else {
                    $("#transmissionStatus, #transmissionStatusBtn").removeClass("active error wait").addClass("error");
                    reject("Error: ".concat(this.status));
                  }
                }
              });
              xhr.open("POST", url);
              Object.entries(headers).forEach(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 2),
                  key = _ref8[0],
                  value = _ref8[1];
                return xhr.setRequestHeader(key, value);
              });
              xhr.send(data);
            }));
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _getStatus.apply(this, arguments);
  }
  function qPanels() {
    Lampa.Storage.get("transmissionProtocol") || "http://";
    Lampa.Storage.get("transmissionUrl");
    Lampa.Storage.get("transmissionPort");
    Lampa.Storage.get("transmissionUser");
    Lampa.Storage.get("transmissionPass");
    var footer = document.createElement("div");
    footer.classList.add("simple-button", "selector", "tdReload");
    footer.textContent = Lampa.Lang.translate('tdPanelReload');
    footer.on("hover:enter", function () {
      //TODO: Ребут без лампы
      Lampa.Activity.replace({
        url: "",
        title: "Torrent downloader",
        component: "td",
        page: 1
      });
      Lampa.Noty.show(Lampa.Lang.translate('tdPanelReloaded'));
    });
    function action(action, item, deleteFiles) {
      //const dellParam = action === "torrent-remove" ? {"delete-local-data": deleteFiles} : "";
      var data = JSON.stringify({
        "method": action,
        "arguments": {
          "ids": item.id,
          "delete-local-data": deleteFiles
        }
      });
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
          Lampa.Noty.show(Lampa.Lang.translate('tdAction') + item.name + " " + action);
        } else {
          console.log("TD", this.status.text);
          Lampa.Noty.show(Lampa.Lang.translate('tdError') + this.status);
        }
      });
      xhr.open("POST", "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://p01--corsproxy--h7ynqrkjrc6c.code.run/" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
      xhr.setRequestHeader("X-Transmission-Session-Id", Lampa.Storage.get("transmissionKey"));
      xhr.setRequestHeader("Authorization", "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass"))));
      xhr.send(data);
    }
    function tabels(response) {
      // Function implementation
      // Получить элемент, в который нужно вставить таблицу
      var parentElement = document.getElementById("tdStatus");

      // Создать таблицу
      var table = document.createElement("table");
      table.id = "tdStatus_table";
      var settings = {
        "url": "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://p01--corsproxy--h7ynqrkjrc6c.code.run/" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"),
        "method": "POST",
        "timeout": 0,
        "headers": {
          "X-Transmission-Session-Id": Lampa.Storage.get("transmissionKey"),
          "Content-Type": "application/json",
          "Authorization": "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass")))
        },
        "data": JSON.stringify({
          "method": "session-get"
        })
      };
      $.ajax(settings).done(function (response) {
        var serverInfo = document.createElement("div");
        serverInfo.id = "serverInfo";
        serverInfo.innerHTML = "<b>Free space</b>: ".concat(formatBytes(response.arguments["download-dir-free-space"]));
        var systemTool = document.createElement("div");
        systemTool.id = "systemTool";
        systemTool.appendChild(serverInfo);
        systemTool.appendChild(footer);
        parentElement.insertBefore(systemTool, parentElement.firstChild);
      });

      // Добавить строки с данными из переменной response
      if (response && response.length === 0 || !response) {
        // Если ответ пустой, добавить строку с сообщением
        var emptyRow = table.insertRow();
        var emptyCell = emptyRow.insertCell();
        //emptyCell.colSpan = headerCells.length;
        emptyCell.textContent = Lampa.Lang.translate('tdPanelDataError');
      } else {
        response.forEach(function (item) {
          var row = table.insertRow();
          row.id = "td_panel";
          // Создать ячейки для каждой строки
          var nameCell = row.insertCell();
          nameCell.id = "tName";
          nameCell.textContent = item.name;
          var progressCell = row.insertCell();
          progressCell.id = "percent";
          progressCell.textContent = "".concat(formatPercent(item.percentDone), " / ").concat(formatBytes(item.totalSize));
          var stateCell = row.insertCell();
          if (item.status === 0) {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate('tdPanelPaused');
            stateCell.on("hover:enter", function () {
              action("torrent-start", item);
            });
          } else if (item.status === 4) {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate('tdPanelDownloading');
            stateCell.on("hover:enter", function () {
              action("torrent-stop", item);
            });
          } else {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate("transmission".concat(item.status));
          }
          var deleteCell = row.insertCell();
          deleteCell.classList.add("simple-button", "selector", "tdActionDell");
          deleteCell.innerHTML = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.228 5.79003C19.57 5.84203 19.91 5.89703 20.25 5.95603M19.228 5.79003L18.16 19.673C18.1164 20.2383 17.8611 20.7662 17.445 21.1513C17.029 21.5364 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5364 6.55498 21.1513C6.13894 20.7662 5.88359 20.2383 5.84 19.673L4.772 5.79003M19.228 5.79003C18.0739 5.61555 16.9138 5.48313 15.75 5.39303M4.772 5.79003C4.43 5.84103 4.09 5.89603 3.75 5.95503M4.772 5.79003C5.92613 5.61555 7.08623 5.48313 8.25 5.39303M15.75 5.39303V4.47703C15.75 3.29703 14.84 2.31303 13.66 2.27603C12.5536 2.24067 11.4464 2.24067 10.34 2.27603C9.16 2.31303 8.25 3.29803 8.25 4.47703V5.39303M15.75 5.39303C13.2537 5.20011 10.7463 5.20011 8.25 5.39303\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11.1738 9.48535L11.0576 12.7939C11.0576 13.514 11.1055 14.0016 11.2012 14.2568C11.3014 14.512 11.4199 14.6966 11.5566 14.8105C11.6979 14.9199 11.8757 14.9746 12.0898 14.9746C12.3086 14.9746 12.5 14.9336 12.6641 14.8516C12.8281 14.7695 12.9762 14.6602 13.1084 14.5234C13.3454 14.2773 13.5322 13.9561 13.6689 13.5596C13.6735 13.4365 13.6758 13.3112 13.6758 13.1836V12.7939C13.6758 11.0713 13.5527 9.94336 13.3066 9.41016C13.3066 9.41016 13.2565 9.30534 13.1562 9.0957H15.1045C15.109 9.16862 15.1113 9.23698 15.1113 9.30078V9.49902C15.1113 9.49902 15.0726 10.5973 14.9951 12.7939C14.9951 14.0381 15.1045 14.8926 15.3232 15.3574C15.4007 15.526 15.5374 15.7402 15.7334 16H13.7852L13.7373 15.7266C13.6826 15.4349 13.6439 15.1113 13.6211 14.7559C13.1836 15.6764 12.5957 16.1367 11.8574 16.1367C11.4928 16.1367 11.1943 16.0091 10.9619 15.7539C10.9984 16.9297 11.0485 17.6292 11.1123 17.8525C11.1761 18.0804 11.2354 18.2513 11.29 18.3652C11.3493 18.4837 11.4131 18.5931 11.4814 18.6934L11.7139 19.0078H9.42383C9.55143 18.5703 9.62435 18.1328 9.64258 17.6953C9.66536 17.2624 9.68132 16.891 9.69043 16.5811C9.7041 16.2757 9.71549 15.959 9.72461 15.6309C9.74284 14.9837 9.75195 14.3411 9.75195 13.7031C9.75195 11.7663 9.69043 10.5768 9.56738 10.1348C9.49447 9.86133 9.40104 9.64941 9.28711 9.49902L9 9.0957H11.167L11.1738 9.48535Z\" fill=\"white\"/></svg>";
          deleteCell.on("hover:enter", function () {
            action("torrent-remove", item, false);
          });
          var fdeleteCell = row.insertCell();
          fdeleteCell.classList.add("simple-button", "selector", "tdActionDell");
          fdeleteCell.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 7.5L19.625 18.132C19.5913 18.705 19.3399 19.2436 18.9222 19.6373C18.5045 20.031 17.952 20.2502 17.378 20.25H6.622C6.04796 20.2502 5.49555 20.031 5.07783 19.6373C4.66011 19.2436 4.40868 18.705 4.375 18.132L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.246 7.5 21.75 6.996 21.75 6.375V4.875C21.75 4.254 21.246 3.75 20.625 3.75H3.375C2.754 3.75 2.25 4.254 2.25 4.875V6.375C2.25 6.996 2.754 7.5 3.375 7.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          fdeleteCell.on("hover:enter", function () {
            action("torrent-remove", item, true);
          });
          var actionCell = row.insertCell();
          actionCell.classList.add("tdActionBlock");
          actionCell.appendChild(stateCell);
          actionCell.appendChild(deleteCell);
          actionCell.appendChild(fdeleteCell);
        });
      }

      // Вставить созданную таблицу в родительский элемент
      if ($("#tdStatus").children().length > 0) {
        $("#tdStatus").empty();
      }
      parentElement.appendChild(table);
      parentElement.appendChild(footer);
      function formatPercent(percent) {
        // Округлить процент до двух знаков после запятой
        percent = percent * 100;
        percent = Number(percent.toFixed(2));

        // Добавить процентный знак
        percent = percent + "%";
        return percent;
      }
      function formatBytes(bytes) {
        if (bytes >= 1073741824) {
          return (bytes / 1073741824).toFixed(2) + " GB";
        } else if (bytes >= 1048576) {
          return (bytes / 1048576).toFixed(2) + " MB";
        } else if (bytes >= 1024) {
          return (bytes / 1024).toFixed(2) + " KB";
        } else {
          return bytes + " B";
        }
      }
    }
    function error() {
      var tdPanel = document.getElementById("tdStatus");
      var error = document.createElement("div");
      error.innerHTML = "<div id='Error'><h2>".concat(Lampa.Lang.translate('tdPanelDataError'), "</h2></div>");
      tdPanel.appendChild(error);
      tdPanel.appendChild(footer);
    }

    /* Get data */
    var data = JSON.stringify({
      "method": "torrent-get",
      "arguments": {
        "fields": ["status", "totalSize", "percentDone", "name", "id"]
      }
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("TD", JSON.parse(this.responseText).arguments.torrents);
        return tabels(JSON.parse(this.responseText).arguments.torrents);
      } else if (this.readyState === 4 && this.status !== 200) {
        return error();
      }
    });
    xhr.open("POST", "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://p01--corsproxy--h7ynqrkjrc6c.code.run/" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
    xhr.setRequestHeader("X-Transmission-Session-Id", Lampa.Storage.get("transmissionKey"));
    xhr.setRequestHeader("Authorization", "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass"))));
    xhr.send(data);
  }
  var Transmission = {
    transmissionClient: transmissionClient,
    transmissionAuth: transmissionAuth,
    getStatus: getStatus$1,
    qPanels: qPanels
  };

  function getStatus() {
    var statusXhr = new XMLHttpRequest();
    statusXhr.withCredentials = false;
    statusXhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          console.log("TD", "Status " + this.status);
          if (JSON.parse(this.response).data.sid) Lampa.Storage.set("synologySID", JSON.parse(this.response).data.sid);
          $('#synologygetStatus').removeClass('active error wait').addClass('active');
          $('#synologygetStatusBtn').removeClass('active error wait').addClass('active');
        } else if (this.status === undefined) {
          console.log("TD", "Status - undefined");
          $('#synologygetStatus').removeClass('active error wait').addClass('error');
          $('#synologygetStatusBtn').removeClass('active error wait').addClass('error');
        } else {
          console.log("TD", "Status " + this.response);
          console.log("TD", "Status " + this.status);
          console.log("TD", this);
          $('#synologygetStatus').removeClass('active error wait').addClass('error');
          $('#synologygetStatusBtn').removeClass('active error wait').addClass('error');
        }
      }
    });
    if (Lampa.Storage.get("synalogyProxy") && Lampa.Storage.get("synalogyProxy") !== 'no_client') {
      var serv = "".concat(Lampa.Storage.get("synologyProtocol") || "http://").concat(Lampa.Storage.get("synologyUrl") || "127.0.0.1", "/webapi/entry.cgi?api=SYNO.API.Auth&version=7&method=login&account=").concat(Lampa.Storage.get("synologyUser"), "&passwd=").concat(Lampa.Storage.get("synologyPass"), "&format=sid");
      statusXhr.open("GET", "".concat(Lampa.Storage.get("synalogyProxy")).concat(encodeURIComponent(serv)));
    } else {
      statusXhr.open("GET", "".concat(Lampa.Storage.get("synologyProtocol") || "http://").concat(Lampa.Storage.get("synologyUrl") || "127.0.0.1", "/webapi/entry.cgi?api=SYNO.API.Auth&version=7&method=login&account=").concat(Lampa.Storage.get("synologyUser"), "&passwd=").concat(Lampa.Storage.get("synologyPass"), "&format=sid"));
    }
    statusXhr.send();
  }
  function synologyClient(selectedTorrent) {
    if (!selectedTorrent) {
      return;
    }
    var addXhr = new XMLHttpRequest();
    var categoryDesc = selectedTorrent.CategoryDesc;
    var categoryParam = categoryDesc ? Lampa.Storage.get("synologyPath".concat(categoryDesc)) : Lampa.Storage.get('synologyPathMovies');
    if (Lampa.Storage.get("synalogyProxy") && Lampa.Storage.get("synalogyProxy") !== 'no_client') {
      addXhr.open("GET", "".concat(Lampa.Storage.get("synalogyProxy")) + encodeURIComponent("".concat(Lampa.Storage.get("synologyProtocol") || "http://").concat(Lampa.Storage.get("synologyUrl") || "127.0.0.1", "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=3&method=create&uri=").concat(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, "&username=").concat(Lampa.Storage.get("synologyUser"), "&password=").concat(Lampa.Storage.get("synologyPass"), "&destination=").concat(categoryParam, "&_sid=").concat(Lampa.Storage.get("synologySID"))));
    } else {
      addXhr.open("GET", "".concat(Lampa.Storage.get("synologyProtocol") || "http://").concat(Lampa.Storage.get("synologyUrl") || "127.0.0.1", "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=3&method=create&uri=").concat(encodeURIComponent(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link), "&username=").concat(Lampa.Storage.get("synologyUser"), "&password=").concat(Lampa.Storage.get("synologyPass"), "&destination=").concat(categoryParam, "&_sid=").concat(Lampa.Storage.get("synologySID")));
    }
    addXhr.onreadystatechange = function () {
      if (addXhr.readyState === 4) {
        if (addXhr.status !== 200) {
          console.log("TD", "Server return ".concat(addXhr.status, " when try add torrent"));
          Lampa.Noty.show(Lampa.Lang.translate('tdAddError'));
          return;
        }
        if (addXhr.response === "Fails.") {
          console.log("TD", addXhr.response);
          Lampa.Noty.show(Lampa.Lang.translate('tdExist'));
          return;
        }
        console.log("TD", addXhr.response);
        Lampa.Noty.show(Lampa.Lang.translate('tdAdded'));
      }
    };
    addXhr.send();
  }
  var synology = {
    getStatus: getStatus,
    synologyClient: synologyClient
  };

  function sender(selectedTorrent) {
    if (Lampa.Storage.field("universalAction") === "open") {
      if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click();else window.location.assign(selectedTorrent.MagnetUri);
    } else {
      Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
        Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
      }, function () {
        Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
      });
    }
  }
  var universal = {
    sender: sender
  };

  function downloader() {
    function send2qBittorrent(selectedTorrent) {
      qBittorent.qBittorrentClient(selectedTorrent);
    }
    function send2synology(selectedTorrent) {
      synology.synologyClient(selectedTorrent);
    }
    function send2transmission(selectedTorrent) {
      Transmission.transmissionClient(selectedTorrent);
    }
    function send2universal(selectedTorrent) {
      universal.sender(selectedTorrent);
    }
    Lampa.Listener.follow('torrent', function (e) {
      if (e.type === 'onlong') {
        var selectedTorrent = e.element;
        var onSelectApp = function onSelectApp(a) {
          a.send2app(selectedTorrent);
        };
        if (Lampa.Storage.field("tdClient") === 'qBittorent') {
          typeof Lampa.Storage.get("qBittorentUrl") !== 'undefined' && typeof Lampa.Storage.get("qBittorentUser") !== 'undefined' && typeof Lampa.Storage.get("qBittorentPass") !== 'undefined' && qBittorent.getStatus();
          e.menu.push({
            title: '<div id="qBittorentgetStatusBtn" class="btnTD wait"><svg class="download" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path class="path" d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M18 17H12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '<path class="path" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '</svg>qBittorrent</div>',
            send2app: send2qBittorrent,
            onSelect: onSelectApp
          });
        }
        if (Lampa.Storage.field("tdClient") === 'transmission') {
          typeof Lampa.Storage.get("transmissionUrl") !== 'undefined' && typeof Lampa.Storage.get("transmissionUser") !== 'undefined' && typeof Lampa.Storage.get("transmissionPass") !== 'undefined' && Transmission.getStatus();
          e.menu.push({
            title: '<div id="transmissionStatusBtn" class="btnTD wait"><svg class="download" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path class="path" d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M18 17H12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '<path class="path" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '</svg>Transmission</div>',
            send2app: send2transmission,
            onSelect: onSelectApp
          });
        }
        if (Lampa.Storage.field("tdClient") === 'synology') {
          typeof Lampa.Storage.get("synologyUrl") !== 'undefined' && synology.getStatus();
          e.menu.push({
            title: '<div id="synologygetStatusBtn" class="btnTD wait"><svg class="download" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path class="path" d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M18 17H12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '<path class="path" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '</svg>Synology</div>',
            send2app: send2synology,
            onSelect: onSelectApp
          });
        }
        //Universal
        if (Lampa.Storage.field("tdClient") === 'universalClient') {
          e.menu.push({
            title: '<div class="btnTD wait"><svg class="download" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path class="path" d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M18 17H12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '<path class="path" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '</svg>Universal</div>',
            send2app: send2universal,
            onSelect: onSelectApp
          });
        }
      }
    });
  }
  var Client = {
    downloader: downloader
  };

  function Panels() {
    var last,
      scroll;
    var html = document.createElement("div");
    html.id = "tdPanel";
    var footer = document.createElement("div");
    footer.classList.add("simple-button", "selector", "tdReload");
    footer.textContent = Lampa.Lang.translate('tdPanelReload');
    footer.on("hover:enter", function () {
      //TODO: Ребут без лампы
      Lampa.Activity.replace({
        url: "",
        title: "Torrent downloader",
        component: "td",
        page: 1
      });
      Lampa.Noty.show(Lampa.Lang.translate('tdPanelReloaded'));
    });
    this.create = function () {
      this.build();
      return this.render();
    };
    this.build = function () {
      var _this = this;
      scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      scroll.onEnd = function () {
        _this.next();
      };
      var tdPanel = html.appendChild(Lampa.Template.js("td_panel_page"));
      tdPanel.innerHTML = "<div id='tdStatus'></div>";
      html.find('.td_panel').append(scroll.render(true));
      scroll.minus(html.find('#tdPanel'));
      var tdClient = Lampa.Storage.get('tdClient');
      var clients = {
        'qBittorent': qBittorent,
        'transmission': Transmission
      };
      if (tdClient && clients[tdClient]) {
        clients[tdClient].qPanels();
      } else {
        tdPanel.innerHTML = "<div id='Error'><h2>".concat(Lampa.Lang.translate('tdPanelCOff'), "</h2></div>");
        tdPanel.appendChild(footer);
      }
      this.display();
      Lampa.Layer.update(html);
      this.activity.loader(false);
    };
    this.display = function () {
      scroll.clear();
      scroll.reset();
      Lampa.Layer.visible(scroll.render(true));
      this.activity.toggle();
    };
    this.background = function () {
      Lampa.Background.immediately("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBlZaLrsMgDENXxAf3/9XHFdXNZLm2YZHQymPk4CS0277v9+ffrut62nEcn/M8nzb69cxj6le1+75f/RqrZ9fatm3F9wwMR7yhawilNke4Gis/7j9srQbdaVFBnkcQ1WrfgmIIBcTrvgqqsKiTzvpOQbUnAykVW4VVqZXyyDllYFSKx9QaVrO7nGJIB63g+FAq/xhcHWBYdwCsmAtvFZUKE0MlVZWCT4idOlyhTp3K35R/6Nzlq0uBnsKWlEzgSh1VGJxv6rmpXMO7EK+XWUPnDFRWqitQFeY2UyZVryuWlI8ulLgGf19FooAUwC9gCWLcwzWPb7Wa60qdlZxjx6ooUuUqVQsK+y1VoAJyBeJAVsLJeYmg/RIXdG2kPhwYPBUQQyYF0XC8lwP3MTCrYAXB88556peCbUUZV7WccwkUQfCZC4PXdA5hKhSVhythZqjZM0J39w5m8BRadKAcrsIpNZsLIYdOqcZ9hExhZ1MH+QL+ciFzXzmYhZr/M6yUUwp2dp5U4naZDwAF5JRSefdScJZ3SkU0nl8xpaAy+7ml1EqvMXSs1HRrZ9bc3eZUSXmGa/mdyjbmqyX7A9RaYQa9IRJ0AAAAAElFTkSuQmCC");
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      this.background();
      Lampa.Controller.add("content", {
        link: this,
        invisible: true,
        toggle: function toggle() {
          Lampa.Controller.collectionSet(html);
          Lampa.Controller.collectionFocus(last, html);
        },
        left: function left() {
          if (Navigator.canmove("left")) Navigator.move("left");else Lampa.Controller.toggle("menu");
        },
        right: function right() {
          Navigator.move("right");
        },
        up: function up() {
          if (Navigator.canmove("up")) Navigator.move("up");else Lampa.Controller.toggle("head");
        },
        down: function down() {
          Navigator.move("down");
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle("content");
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      if (scroll) scroll.destroy();
      html.remove();
    };
  }

  function setMenu() {
    //Создание пункта меню
    Lampa.SettingsApi.addComponent({
      component: "torrentDownloader",
      name: 'Torrent downloader',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="48px" height="48px"><path fill="white" d="M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M 34.904297 29.314453 C 34.250297 34.648453 28.811359 37.069578 21.943359 35.517578 L 26.316406 43.763672 L 26.392578 43.914062 C 33.176993 42.923925 38.872645 38.505764 41.660156 32.484375 C 41.603665 32.485465 41.546284 32.486418 41.529297 32.486328 C 38.928405 32.472567 36.607552 31.572967 34.904297 29.314453 z"></path></svg>'
    });
    /* Menu */
    Lampa.Settings.listener.follow("open", function (e) {
      /* Client selector */
      if (e.name === "torrentDownloader") {
        if (Lampa.Settings.main().render().find('[data-component="tdSelect"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "tdSelect",
            name: "tdSelect"
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="tdSelect"]').addClass("hide");
      }
      /* Legact */
      if (e.name === "main") {
        if (Lampa.Settings.main().render().find('[data-component="qBittorent"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "qBittorent",
            name: Lampa.Lang.translate('qBittorent')
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="qBittorent"]').addClass("hide");
      }
      if (e.name === "qBittorent") {
        if (Lampa.Settings.main().render().find('[data-component="qBittorentTweak"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "qBittorentTweak",
            name: Lampa.Lang.translate('tweak')
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="qBittorentTweak"]').addClass("hide");
      }
      if (e.name === "main") {
        if (Lampa.Settings.main().render().find('[data-component="transmission"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "transmission",
            name: Lampa.Lang.translate('transmission')
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="transmission"]').addClass("hide");
      }
      if (e.name === "transmission") {
        if (Lampa.Settings.main().render().find('[data-component="transmissionTweak"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "transmissionTweak",
            name: Lampa.Lang.translate('tweak')
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="transmissionTweak"]').addClass("hide");
      }
      if (e.name === "main") {
        if (Lampa.Settings.main().render().find('[data-component="synology"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "synology",
            name: "synology"
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="synology"]').addClass("hide");
      }
      if (e.name === "main") {
        if (Lampa.Settings.main().render().find('[data-component="tdInfo"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "tdInfo",
            name: Lampa.Lang.translate('tdInfo')
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="tdInfo"]').addClass("hide");
      }
      /* Legace END */
    });
    var COMPONENT_NAME = "torrentDownloader";
    var PARAM_TYPE = {
      SELECT: "select",
      INPUT: "input",
      TRIGGER: "trigger",
      TITLE: "title",
      STATIC: "static"
    };
    var PLUGIN_COMPONENT = "tdInfo";
    Lampa.SettingsApi.addParam({
      component: COMPONENT_NAME,
      param: {
        name: "tdDependencies",
        type: PARAM_TYPE.TITLE,
        "default": true
      },
      field: {
        name: "<p style=\"color:".concat(Lampa.Storage.get("parser_use") === true ? "green" : "red", "\">").concat(Lampa.Lang.translate('tdDependencies'), "</p>"),
        description: Lampa.Lang.translate('tdDependenciesDesc')
      }
    });
    /* Selector */
    Lampa.SettingsApi.addParam({
      component: 'torrentDownloader',
      param: {
        name: 'tdSelect',
        type: 'select',
        "default": 'no_client',
        values: {
          no_client: 'None',
          universalClient: "Universal",
          qBittorent: Lampa.Lang.translate('qBittorent'),
          transmission: Lampa.Lang.translate('transmission'),
          synology: "Synology"
        }
      },
      field: {
        name: Lampa.Lang.translate('tdSelect')
      },
      onChange: function onChange(value) {
        Lampa.Storage.set('tdClient', value);
        Lampa.Settings.update();
      }
    });
    /* Universal */
    Lampa.SettingsApi.addParam({
      component: 'torrentDownloader',
      param: {
        name: 'universalAction',
        type: 'select',
        "default": 'no_client',
        values: {
          open: Lampa.Lang.translate('openUniversal'),
          click: Lampa.Lang.translate('copyUniversal')
        }
      },
      field: {
        name: Lampa.Lang.translate('universalAction')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field("tdClient") === "universalClient") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Storage.set('universalAction', value);
        Lampa.Settings.update();
      }
    });
    /* Synology */
    Lampa.SettingsApi.addParam({
      component: "torrentDownloader",
      param: {
        name: "synology",
        type: "static",
        //доступно select,input,trigger,title,static
        "default": true
      },
      field: {
        name: "Synology",
        description: Lampa.Lang.translate('tdConfig')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field("tdClient") === "synology") {
          //typeof Lampa.Storage.get("synologyUrl") !== 'undefined' && typeof Lampa.Storage.get("synologyUser") !== 'undefined' && typeof Lampa.Storage.get("synologyPass") !== 'undefined' && synology.getStatus();
          synology.getStatus();
          item.show();
          $(".settings-param__name", item).before('<div id="synologygetStatus" class="settings-param__status wait"></div>');
        } else item.hide();
        item.on("hover:enter", function () {
          Lampa.Settings.create("synology");
          Lampa.Controller.enabled().controller.back = function () {
            Lampa.Settings.create("torrentDownloader");
          };
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologyHead",
        type: "static"
      },
      field: {
        name: Lampa.Lang.translate('tdConfig')
        //description: `Контроль адреса - ${Lampa.Storage.get("synologyProtocol") || "http://"}${Lampa.Storage.get("synologyUrl") || "127.0.0.1:9090"}`,
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologySSL",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('clientSSL'),
        description: ""
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("synologyProtocol", "https://");else Lampa.Storage.set("synologyProtocol", "http://");
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologyUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("synologyUrl") || ""}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientAddress')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("synologyUrl", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologyUser",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientUser')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("synologyUser", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologyPass",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientPassword')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("synologyPass", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologyPath",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('qBittorentCM')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("synologyPathMovies", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "synology",
      param: {
        name: "synologyPathTV",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('qBittorentCS')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("synologyPathTV", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: 'synology',
      param: {
        name: 'synalogyProxy',
        type: 'select',
        "default": 'https://api.codetabs.com/v1/proxy?quest=',
        values: {
          no_client: 'None',
          "https://api.codetabs.com/v1/proxy?quest=": "Proxy #1"
        }
      },
      field: {
        name: "Select proxy"
      },
      onChange: function onChange(value) {
        Lampa.Storage.set('synalogyProxy', value);
        Lampa.Settings.update();
      }
    });
    /* qBittorent */
    Lampa.SettingsApi.addParam({
      component: "torrentDownloader",
      param: {
        name: "qBittorent",
        type: "static",
        //доступно select,input,trigger,title,static
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('qBittorent'),
        description: Lampa.Lang.translate('tdConfig')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field("tdClient") === "qBittorent") {
          typeof Lampa.Storage.get("qBittorentUrl") !== 'undefined' && typeof Lampa.Storage.get("qBittorentUser") !== 'undefined' && typeof Lampa.Storage.get("qBittorentPass") !== 'undefined' && qBittorent.getStatus();
          //qBittorent.getStatus();
          item.show();
          $(".settings-param__name", item).before('<div id="qBittorentgetStatus" class="settings-param__status wait"></div>');
        } else item.hide();
        item.on("hover:enter", function () {
          Lampa.Settings.create("qBittorent");
          Lampa.Controller.enabled().controller.back = function () {
            Lampa.Settings.create("torrentDownloader");
          };
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorent",
      param: {
        name: "qBittorentHead",
        type: "static"
      },
      field: {
        name: Lampa.Lang.translate('tdConfig')
        //description: `Контроль адреса - ${Lampa.Storage.get("qBittorentProtocol") || "http://"}${Lampa.Storage.get("qBittorentUrl") || "127.0.0.1:9090"}`,
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorent",
      param: {
        name: "qBittorentSSL",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('clientSSL'),
        description: ""
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("qBittorentProtocol", "https://");else Lampa.Storage.set("qBittorentProtocol", "http://");
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorent",
      param: {
        name: "qBittorentUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentUrl") || ""}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientAddress')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("qBittorentUrl", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorent",
      param: {
        name: "qBittorentUser",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientUser')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("qBittorentUser", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorent",
      param: {
        name: "qBittorentPass",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentPass")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientPassword')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("qBittorentPass", item);
        Lampa.Settings.update();
      }
    });
    /* Try add sub menu */
    Lampa.SettingsApi.addParam({
      component: 'qBittorent',
      param: {
        type: 'button',
        name: "qBittorentTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        item.show();
        var paramNameElement = $(".settings-param__name", item);
        paramNameElement.before('<div class="settings-param__status"></div>');
        item.on("hover:enter", function () {
          Lampa.Settings.create("qBittorentTweak");
          var enabledController = Lampa.Controller.enabled();
          enabledController.controller.back = function () {
            Lampa.Settings.create("qBittorent");
          };
        });
      }
    });
    /* End */
    Lampa.SettingsApi.addParam({
      component: "qBittorentTweak",
      param: {
        name: "qBittorentSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('qBittorentSD'),
        description: ""
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("qBittorentSequentialDownload", true);else Lampa.Storage.set("qBittorentSequentialDownload", false);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorentTweak",
      param: {
        name: "qBittorentfirstLastPiecePrio",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('qBittorentPDFLP'),
        description: ""
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("qBittorentfirstLastPiecePrio", true);else Lampa.Storage.set("qBittorentfirstLastPiecePrio", false);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorentTweak",
      param: {
        name: "qBittorentKeenetic",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('transmissionKeenetic'),
        description: Lampa.Lang.translate('transmissionKeeneticDescription')
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("qBittorentKeenetic", true);else Lampa.Storage.set("qBittorentKeenetic", false);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorentTweak",
      param: {
        name: "qBittorentMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentPass")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('qBittorentCM')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("qBittorentMovies", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "qBittorentTweak",
      param: {
        name: "qBittorentTV",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentPass")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('qBittorentCS')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("qBittorentTV", item);
        Lampa.Settings.update();
      }
    });
    /* Transmission */
    Lampa.SettingsApi.addParam({
      component: "torrentDownloader",
      param: {
        name: "transmission",
        type: "static",
        //доступно select,input,trigger,title,static
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('transmission'),
        description: Lampa.Lang.translate('tdConfig')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field("tdClient") === "transmission") {
          typeof Lampa.Storage.get("transmissionUrl") !== 'undefined' && typeof Lampa.Storage.get("transmissionUser") !== 'undefined' && typeof Lampa.Storage.get("transmissionPass") !== 'undefined' && Transmission.getStatus();
          item.show();
          $(".settings-param__name", item).before('<div id="transmissionStatus" class="settings-param__status wait"></div>');
        } else item.hide();
        item.on("hover:enter", function () {
          Lampa.Settings.create("transmission");
          Lampa.Controller.enabled().controller.back = function () {
            Lampa.Settings.create("torrentDownloader");
          };
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmission",
      param: {
        name: "transmissionHead",
        type: "static"
      },
      field: {
        name: Lampa.Lang.translate('tdConfig')
        //description: `Контроль адреса - ${Lampa.Storage.get("transmissionProtocol") || "http://"}${Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001"}${Lampa.Storage.get("transmissionPath") || "/transmission/rpc"}`,
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmission",
      param: {
        name: "transmissionSSL",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('clientSSL'),
        description: ""
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("transmissionProtocol", "https://");else Lampa.Storage.set("transmissionProtocol", "http://");
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmission",
      param: {
        name: "transmissionUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("transmissionUrl")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientAddress')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("transmissionUrl", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmission",
      param: {
        name: "transmissionUser",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("transmissionUser")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientUser')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("transmissionUser", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmission",
      param: {
        name: "transmissionPass",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("transmissionPass")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientPassword')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("transmissionPass", item);
        Lampa.Settings.update();
      }
    });
    /* Try add sub menu */
    Lampa.SettingsApi.addParam({
      component: 'transmission',
      param: {
        type: 'button',
        name: "transmissionTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        item.show();
        var paramNameElement = $(".settings-param__name", item);
        paramNameElement.before('<div class="settings-param__status"></div>');
        item.on("hover:enter", function () {
          Lampa.Settings.create("transmissionTweak");
          var enabledController = Lampa.Controller.enabled();
          enabledController.controller.back = function () {
            Lampa.Settings.create("transmission");
          };
        });
      }
    });
    /* End */
    Lampa.SettingsApi.addParam({
      component: "transmissionTweak",
      param: {
        name: "transmissionAutostart",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('transmissionAutostop'),
        description: Lampa.Lang.translate('transmissionAutostopDescription')
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("transmissionAutostart", true);else Lampa.Storage.set("transmissionAutostart", false);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmissionTweak",
      param: {
        name: "transmissionKeenetic",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('transmissionKeenetic'),
        description: Lampa.Lang.translate('transmissionKeeneticDescription')
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("transmissionKeenetic", true);else Lampa.Storage.set("transmissionKeenetic", false);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmissionTweak",
      param: {
        name: "transmissionKeyCleaner",
        type: "static"
      },
      field: {
        name: 'Key cleaner'
        //description: `Контроль адреса - ${Lampa.Storage.get("synologyProtocol") || "http://"}${Lampa.Storage.get("synologyUrl") || "127.0.0.1:9090"}`,
      },
      onChange: function onChange(value) {
        localStorage.removeItem('transmissionKey');
        Lampa.Noty.show('Key cleared');
        Lampa.Settings.update();
      }
    });
    /*
    Lampa.SettingsApi.addParam({
        component: "transmissionTweak",
        param: {
            name: "transmissionLegacy",
            type: "trigger", //доступно select,input,trigger,title,static
            default: false,
        },
        field: {
            name: Lampa.Lang.translate('transmissionLegacy'),
            description: Lampa.Lang.translate('transmissionLegacyDescription'),
        },
        onChange: function (value) {
            if (value === "true") Lampa.Storage.set("transmissionLegacy", true);
            else Lampa.Storage.set("transmissionLegacy", false);
            Lampa.Settings.update();
        },
    });
     */
    Lampa.SettingsApi.addParam({
      component: "transmissionTweak",
      param: {
        name: "transmissionPath",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("transmissionUrl")}`,
        placeholder: '/transmission/rpc',
        values: '/transmission/rpc',
        "default": '/transmission/rpc'
      },
      field: {
        name: Lampa.Lang.translate('transmissionRPCRoute'),
        description: Lampa.Lang.translate('transmissionRPCRouteDescription')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("transmissionPath", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmissionTweak",
      param: {
        name: "transmissionMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentPass")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('transmissionCM')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("transmissionMovies", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "transmissionTweak",
      param: {
        name: "transmissionTV",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentPass")}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('transmissionCS')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("transmissionTV", item);
        Lampa.Settings.update();
      }
    });
    /* Info block */
    Lampa.SettingsApi.addParam({
      component: COMPONENT_NAME,
      param: {
        name: "tdInfo",
        type: PARAM_TYPE.STATIC,
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('tdInfo')
      },
      onRender: function onRender(item) {
        item.show();
        var paramNameElement = $(".settings-param__name", item);
        paramNameElement.before('<div class="settings-param__status"></div>');
        item.on("hover:enter", function () {
          Lampa.Settings.create("tdInfo");
          var enabledController = Lampa.Controller.enabled();
          enabledController.controller.back = function () {
            Lampa.Settings.create(COMPONENT_NAME);
          };
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: PLUGIN_COMPONENT,
      param: {
        name: "group",
        type: "static"
      },
      field: {
        name: "<img src=\"https://cdn.glitch.global/d9956867-398e-4a85-9c42-31911adc9981/groupLTD.jpg?v=1702216657917\" alt=\"GroupLTD\" width=\"100%\" height=\"auto\">",
        description: Lampa.Lang.translate('tdInfoGr')
      }
    });
    Lampa.SettingsApi.addParam({
      component: PLUGIN_COMPONENT,
      param: {
        name: "group",
        type: "static"
      },
      field: {
        name: "<b>Info</b>",
        description: Lampa.Lang.translate('tdInfoDesc')
      }
    });
  }
  var Menu = {
    setMenu: setMenu
  };

  function value() {
    /* Panel */
    Lampa.Lang.add({
      /* Main */
      tdDependencies: {
        ru: "Парсер",
        en: "Parser",
        uk: "Парсер",
        zh: "解析器" // Chinese translation
      },
      tdDependenciesDesc: {
        ru: "Для корректной работы должен быть активирован парсер",
        en: "Parser must be activated to work correctly",
        uk: "Для коректної роботи має бути активований парсер",
        zh: "必须激活解析器才能正确运行" // Chinese translation
      },
      /* Panel */
      tdPanel: {
        ru: "Torrent Panel",
        en: "Torrent Panel",
        uk: "Torrent Panel",
        zh: "下载" // Chinese translation
      },
      tdPanelReload: {
        ru: "Обновить",
        en: "Update",
        uk: "Оновити",
        zh: "更新内容" // Chinese translation
      },
      tdPanelMClient: {
        ru: "Включено 2 или больше торрент клиента, я пока не такой крутой! Выключи кого-то",
        en: "2 or more torrent clients enabled, I'm not that cool yet! Turn someone off",
        uk: "Увімкнено 2 або більше торрент-клієнтів, я поки що не такий крутий! Вимкни когось",
        zh: "您已启用2个或多个种子下载客户端，我还没那么酷！请关闭某个。" // Chinese translation
      },
      tdPanelCOff: {
        ru: "Торрент клиенты не подключены",
        en: "Torrent clients are not connected",
        uk: "Торрент клієнти не підключені",
        zh: "未连接种子客户端" // Chinese translation
      },
      tdPanelDataError: {
        ru: "Данные не найдены",
        en: "Data not found",
        uk: "Дані не знайдено",
        zh: "未找到数据" // Chinese translation
      },
      tdPanelName: {
        ru: "Название",
        en: "Name",
        uk: "Назва",
        zh: "名称" // Chinese translation
      },
      tdPanelAction: {
        ru: "Действие",
        en: "Action",
        uk: "Дія",
        zh: "操作" // Chinese translation
      },
      tdPanelStatus: {
        ru: "Статус",
        en: "Status",
        uk: "Статус",
        zh: "状态" // Chinese translation
      },
      tdPanelProgress: {
        ru: "Прогресс",
        en: "Progress",
        uk: "Прогрес",
        zh: "进度" // Chinese translation
      },
      tdPanelSize: {
        ru: "Размер",
        en: "Size",
        uk: "Розмір",
        zh: "大小" // Chinese translation
      },
      tdPanelDownloaded: {
        ru: "Скачано",
        en: "Downloaded",
        uk: "Викачано",
        zh: "已下载" // Chinese translation
      },
      tdPanelUploaded: {
        ru: "Выгружено",
        en: "Uploaded",
        uk: "Вивантажено",
        zh: "已上传" // Chinese translation
      },
      /* Action */
      tdPanelPaused: {
        ru: "Восстановить",
        en: "Resume",
        uk: "Поновити",
        zh: "恢复" // Chinese translation
      },
      tdPanelDownloading: {
        ru: "Остановить",
        en: "Pause",
        uk: "Зупининти",
        zh: "暂停" // Chinese translation
      },
      /* Menu */
      tdName: {
        ru: "Torrent downloader",
        en: "Torrent downloader",
        uk: "Torrent downloader",
        zh: "种子下载器" // Chinese translation
      },
      tdSelect: {
        ru: "Выбор клиента",
        en: "Select client",
        uk: "Обраты клієнта",
        zh: "选择客户端" // Chinese translation
      },
      tdInfo: {
        ru: "О плагине",
        en: "About plugin",
        uk: "Про розширення",
        zh: "关于插件" // Chinese translation
      },
      tdInfoGr: {
        ru: "Группа плагина Torrent downloader",
        en: "Torrent downloader plugin group",
        uk: "Група плагіна Torrent downloader",
        zh: "种子下载插件电报组" // Chinese translation
      },
      tdInfoDesc: {
        ru: "Плагин служит для загрузки торрентов средствами Torrent клиентов. Вызывается через контекстное меню на выбранной раздаче<br>Обязательные зависимости - Активированный парсер для торрентов. Torrserver НЕ ТРЕБУЕТСЯ<br>Пожелания по клиентам принимаются в чате плагина",
        en: "The plugin is used to download torrents by means of Torrent clients.<br>Called through the context menu on the selected distribution<br>Required dependencies - Activated parser for torrents. Torrserver is NOT REQUIRED<br>Requests for clients are accepted in the plugin chat room",
        uk: "Плагін служить для завантаження торрентів до Torrent клієнтів.<br>Викликається через контекстне меню на обраній роздачі.<br>Обов'язкові залежності - Активований парсер для торрентів. Torrserver НЕ ПОТРІБЕН<br>Побажання щодо клієнтів приймаються в чаті плагіна",
        zh: "该插件用于通过Torrent客户端下载种子<br>通过所选内容的菜单调用<br>必备依赖项 - 激活的Torrent解析器。不需要 Torrserver<br>插件聊天室接受客户端请求" // Chinese translation
      },
      tweak: {
        ru: "Tweak",
        en: "Tweak",
        uk: "Tweak",
        zh: "高级设置" // Chinese translation
      },
      tdConfig: {
        ru: "Настройки клиента",
        en: "Client settings",
        uk: "Налаштування клієнта",
        zh: "客户端设置" // Chinese translation
      },
      /* universal */
      universalAction: {
        ru: "Действие",
        en: "Action",
        uk: "Дія",
        zh: "行动"
      },
      openUniversal: {
        ru: "Открывать в клиенте",
        en: "Open in external client",
        uk: "Відкрити у застосунку",
        zh: "在外部客户端打开"
      },
      copyUniversal: {
        ru: "Копировать ссылку",
        en: "Copy link",
        uk: "Скопіювати посилання",
        zh: "复制到缓冲区"
      },
      /* qBittorent */
      qBittorent: {
        ru: "qBittorent",
        en: "qBittorent",
        uk: "qBittorent",
        zh: "qBittorent"
      },
      qBittorentSD: {
        ru: "Последовательная загрузка",
        en: "Sequential Download",
        uk: "Послідовне завантаження",
        zh: "顺序下载" // Chinese translation
      },
      qBittorentPDFLP: {
        ru: "Приоритет загрузки первой и последней части",
        en: "Prioritize download first last piece",
        uk: "Пріоритетність завантаження першого останнього фрагмента",
        zh: "优先下载最后一块" // Chinese translation
      },
      qBittorentCM: {
        ru: "Категория для Фильмов",
        en: "Category for Movie",
        uk: "Категорія для Фільмів",
        zh: "电影分类名" // Chinese translation
      },
      qBittorentCS: {
        ru: "Категория для Сериалов",
        en: "Category for TVShow",
        uk: "Категорія для Серіалів",
        zh: "电视剧集分类名" // Chinese translation
      },
      /* panel */
      qBittorenterror: {
        ru: "Ошибка",
        en: "Error",
        uk: "Помилка",
        zh: "错误"
      },
      qBittorentmissingFiles: {
        ru: "Отсутствуют файлы",
        en: "Missing files",
        uk: "Відсутні файли",
        zh: "缺少文件"
      },
      qBittorentuploading: {
        ru: "Отдача",
        en: "Uploading",
        uk: "Віддача",
        zh: "上传中"
      },
      qBittorentpausedUP: {
        ru: "Загружено",
        en: "Downloaded",
        uk: "Завантажено",
        zh: "已下载"
      },
      qBittorentqueuedUP: {
        ru: "В очереди",
        en: "Queued",
        uk: "В черзі",
        zh: "排队中"
      },
      qBittorentstalledUP: {
        ru: "Застопорено",
        en: "Stalled",
        uk: "Зупинено",
        zh: "暂停"
      },
      qBittorentcheckingUP: {
        ru: "Проверка",
        en: "Checking",
        uk: "Перевірка",
        zh: "检查中"
      },
      qBittorentforcedUP: {
        ru: "Отдача",
        en: "Uploading",
        uk: "Віддача",
        zh: "上传中"
      },
      qBittorentallocating: {
        ru: "Выделяется место",
        en: "Allocating",
        uk: "Виділяється місце",
        zh: "分配空间"
      },
      qBittorentdownloading: {
        ru: "Загрузка",
        en: "Downloading",
        uk: "Завантаження",
        zh: "下载中"
      },
      qBittorentmetaDL: {
        ru: "Метаданные",
        en: "Metadata",
        uk: "Метадані",
        zh: "元数据"
      },
      qBittorentpausedDL: {
        ru: "Приостановлено",
        en: "Paused",
        uk: "Призупинено",
        zh: "已暂停"
      },
      qBittorentqueuedDL: {
        ru: "В очереди",
        en: "Queued",
        uk: "В черзі",
        zh: "排队中"
      },
      qBittorentstalledDL: {
        ru: "Застопорено",
        en: "Stalled",
        uk: "Зупинено",
        zh: "停滞"
      },
      qBittorentcheckingDL: {
        ru: "Проверка",
        en: "Checking",
        uk: "Перевірка",
        zh: "检查中"
      },
      qBittorentforcedDL: {
        ru: "Загрузка",
        en: "Downloading",
        uk: "Завантаження",
        zh: "下载中"
      },
      qBittorentcheckingResumeData: {
        ru: "Проверка данных",
        en: "Checking resume",
        uk: "Перевірка даних",
        zh: "检查恢复数据"
      },
      qBittorentmoving: {
        ru: "Перемещение",
        en: "Moving",
        uk: "Переміщення",
        zh: "移动中"
      },
      qBittorentunknown: {
        ru: "Неизвестный статус",
        en: "Unknown status",
        uk: "Невідомий статус",
        zh: "未知状态"
      },
      /* Transmission */
      transmission: {
        ru: "Transmission",
        en: "Transmission",
        uk: "Transmission",
        zh: "Transmission" // Chinese translation
      },
      transmissionAuthSuccess: {
        ru: "Авторизация в Transmission успешна",
        en: "Authorization in Transmission successful",
        uk: "Авторизація в Transmission успішна",
        zh: "在 Transmission 中授权成功" // Chinese translation
      },
      transmissionAuthDenied: {
        ru: "Авторизация в Transmission не успешна, в Консоль -> TD за подробностями",
        en: "Authorization in Transmission unsuccessful, see Console -> TD for details",
        uk: "Авторизація в Transmission не успішна, дивіться Консоль -> TD для деталей",
        zh: "在 Transmission 中授权不成功，请查看控制台 -> TD 了解详细信息" // Chinese translation
      },
      transmissionAutostop: {
        ru: "Автостоп",
        en: "Autostop",
        uk: "Автостоп",
        zh: "自动停止" // Chinese translation
      },
      transmissionAutostopDescription: {
        ru: "Все торренты добавляются на паузе",
        en: "All torrent will be add on pause",
        uk: "Всі торренти додаються на паузі",
        zh: "所有种子都将暂停添加" // Chinese translation
      },
      transmissionKeenetic: {
        ru: "Keenetic tweak",
        en: "Keenetic tweak",
        uk: "Keenetic tweak",
        zh: "Keenetic优化" // Chinese translation
      },
      transmissionKeeneticDescription: {
        ru: "Может помочь с подключением к Keenetic",
        en: "Can help with the Keenetic connection",
        uk: "Може допомогти з підключенням до Keenetic",
        zh: "可以帮助建立 Keenetic 连接" // Chinese translation
      },
      transmissionLegacy: {
        ru: "Legacy version",
        en: "Legacy version",
        uk: "Legacy version",
        zh: "Legacy version" // Chinese translation
      },
      transmissionLegacyDescription: {
        ru: "Включение может помочь с некоторыми устройствами",
        en: "Enabling it may help with some devices",
        uk: "Увімкнення може допомогти з деякими пристроями",
        zh: "启用它可能对某些设备有帮助" // Chinese translation
      },
      transmissionRPCRoute: {
        ru: "RPC Path",
        en: "RPC Path",
        uk: "RPC Path",
        zh: "RPC 路径" // Chinese translation
      },
      transmissionRPCRouteDescription: {
        ru: "Изменение пути API. Не трогать без необходимости",
        en: "Change api route. Do not change without need",
        uk: "Змінити маршрут API. Не чіпати без нагальної потреби",
        zh: "更改API路径。如无必要，请勿更改" // Chinese translation
      },
      transmissionCM: {
        ru: "Путь для Фильмов",
        en: "Path for Movie",
        uk: "Шлях для Фільмів",
        zh: "电影之路" // Chinese translation
      },
      transmissionCS: {
        ru: "Путь для Сериалов",
        en: "Path for TVShow",
        uk: "Шлях для Серіалів",
        zh: "系列之路" // Chinese translation
      },
      /* panels */
      transmission0: {
        ru: "Торрент остановлен",
        en: "Torrent is stopped",
        uk: "Торрент зупинено",
        zh: "种子已停止"
      },
      transmission1: {
        ru: "Торрент в очереди для проверки локальных данных",
        en: "Torrent is queued to verify local data",
        uk: "Торрент у черзі для перевірки локальних даних",
        zh: "种子正在排队等待本地数据验证"
      },
      transmission2: {
        ru: "Торрент проверяет локальные данные",
        en: "Torrent is verifying local data",
        uk: "Торрент перевіряє локальні дані",
        zh: "种子正在验证本地数据"
      },
      transmission3: {
        ru: "Торрент в очереди для загрузки",
        en: "Torrent is queued to download",
        uk: "Торрент у черзі для завантаження",
        zh: "种子正在排队等待下载"
      },
      transmission4: {
        ru: "Торрент загружается",
        en: "Torrent is downloading",
        uk: "Торрент завантажується",
        zh: "种子正在下载"
      },
      transmission5: {
        ru: "Торрент в очереди для раздачи",
        en: "Torrent is queued to seed",
        uk: "Торрент у черзі для роздачі",
        zh: "种子正在排队等待做种"
      },
      transmission6: {
        ru: "Торрент раздаётся",
        en: "Torrent is seeding",
        uk: "Торрент роздається",
        zh: "种子正在做种"
      },
      /* Config */
      clientSSL: {
        ru: "Использовать https?",
        en: "Use https?",
        uk: "Вікористовувати https?",
        zh: "使用 https？" // Chinese translation
      },
      clientAddress: {
        ru: "Адрес и порт клиента",
        en: "Client address and port",
        uk: "Адреса та порт клієнту",
        zh: "客户端地址和端口" // Chinese translation
      },
      clientPath: {
        ru: "Папка",
        en: "Folder",
        uk: "Папка",
        zh: "Folder" // Chinese translation
      },
      clientUser: {
        ru: "Имя пользователя",
        en: "Username",
        uk: "Ім'я користувача",
        zh: "用户名" // Chinese translation
      },
      clientPassword: {
        ru: "Пароль пользователя",
        en: "Password",
        uk: "Пароль користувача",
        zh: "密码" // Chinese translation
      },
      /* Notification */
      tdPanelReloaded: {
        ru: "Обновлено",
        en: "Updated",
        uk: "Оновлено",
        zh: "已更新" // Chinese translation
      },
      tdMagnetError: {
        ru: "Ошибка с Magnet ссылкой",
        en: "Error loading magnet:",
        uk: "Помилка із Magnet посиланням",
        zh: "加载磁力时出错:" // Chinese translation
      },
      tdDuplicate: {
        ru: "Торрент уже добавлен",
        en: "Duplicate torrent",
        uk: "Торрент вже додано",
        zh: "Duplicate torrent"
      },
      tdAdded: {
        ru: "Торрент загружается",
        en: "Torrent is being downloaded",
        uk: "Торрент завантажується",
        zh: "正在下载种子" // Chinese translation
      },
      tdAddError: {
        ru: "Ошибка добавления торрента",
        en: "Failed to add torrent",
        uk: "Помилка додавання торренту",
        zh: "添加种子失败" // Chinese translation
      },
      tdExist: {
        ru: "Торрент уже в списке",
        en: "Torrent already exists",
        uk: "Торрент вже у списку",
        zh: "种子已经存在" // Chinese translation
      },
      tdAction: {
        ru: "Торрент ",
        en: "Torrent ",
        uk: "Торрент ",
        zh: "种子 " // Chinese translation
      },
      tdAuthError: {
        ru: "Ошибка авторизации ",
        en: "Authentication failed ",
        uk: "Помилка авторизації ",
        zh: "验证失败 " // Chinese translation
      },
      tdError: {
        ru: "Ошибка ",
        en: "Error ",
        uk: "Помылка ",
        zh: "错误 " // Chinese translation
      }
      /* Notification Table */
    });
  }
  var Lang = {
    value: value
  };

  Lampa.Platform.tv();

  /* Add client */
  Client.downloader();

  /* init plugin */
  function startPlugin() {
    window.plugin_td_ready = true;
    /* Add Lang */
    Lang.value();
    var manifest = {
      type: "other",
      version: "0.0.1",
      name: "Torrent downloader",
      description: Lampa.Lang.translate("tdInfoDesc"),
      component: "td"
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Template.add("td_panel_page", "<div class='td_panel'></div>");
    Lampa.Template.add("td_panel_scroll", "<div class='td_panel'></div>");
    Lampa.Template.add('tdStyle', "\n        <style>\n            #error h2{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.more-clients{text-align:center}#systemTool{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:0 1.5em 0 1.5em;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:-webkit-calc(100% - 3em);width:calc(100% - 3em)}#systemTool>div{margin-right:10px}#systemTool>div.simple-button.selector.tdReload{width:auto}#tdStatus{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}#cardList{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cardTd{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(25% - 10px);-ms-flex:0 0 calc(25% - 10px);flex:0 0 calc(25% - 10px);margin:5px;padding:10px;border:1px solid white;-webkit-border-radius:5px;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.1);box-shadow:0 2px 4px rgba(0,0,0,0.1)}.titleTd{font-weight:bold;margin-bottom:10px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.statusTd{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:5px;border:1px solid white;padding:5px}.buttons{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tdAction,.tdActionDell{background-color:transparent;border:1px solid white;outline:0;margin:0 !important}@media(max-width:768px){#tdStatus{-webkit-box-orient:initial;-webkit-box-direction:initial;-webkit-flex-direction:initial;-ms-flex-direction:initial;flex-direction:initial;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cardTd{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 20px);-ms-flex:0 0 calc(100% - 20px);flex:0 0 calc(100% - 20px);width:100%}.titleTd{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}}#tdStatus table{width:-webkit-calc(100% - 3em);width:calc(100% - 3em);border-collapse:collapse;margin-top:16px;margin-left:1.5em;margin-right:1.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#tdStatus table th,#tdStatus table td{padding:10px;text-align:left}#tdStatus table td.tdAction{text-align:center}#tdStatus table td#tName{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;width:100%;word-break:break-all;font-size:1.5vw}#tdStatus table th{background-color:#fff;color:#000}tr#td_panel{background-color:rgba(0,0,0,0.3);-webkit-border-radius:1em;border-radius:1em;padding:1em;line-height:1.4;top:16px;position:relative;margin-top:8px;width:100%;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;justify-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}td#percent{white-space:nowrap}td.tdActionBlock{white-space:nowrap}td.simple-button.selector.tdActionDell{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.simple-button.focus>svg{fill:#000}.tdActionBlock{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px}#serverInfo{font-size:1.5vw}.btnTD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.download{width:36px;height:36px;margin-right:5%}.error .download .path{stroke:red}.active .download .path{stroke:green}.wait .download .path{stroke:gray}@media(max-width:720px){.cardTd{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 10px);-ms-flex:0 0 calc(100% - 10px);flex:0 0 calc(100% - 10px)}tr#td_panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start !important;-webkit-align-items:start !important;-ms-flex-align:start !important;align-items:start !important}#tdStatus table td#tName{font-size:3vw}#serverInfo{font-size:3vw}}\n        </style>\n    ");
    //Set Transmission session
    if (Lampa.Storage.get('tdClient') === 'transmission') Transmission.transmissionAuth();
    function add() {
      Menu.setMenu();
      var button = $('<li class="menu__item selector">\n            <div class="menu__ico">\n                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="48px" height="48px"><path fill="white" d="M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M 34.904297 29.314453 C 34.250297 34.648453 28.811359 37.069578 21.943359 35.517578 L 26.316406 43.763672 L 26.392578 43.914062 C 33.176993 42.923925 38.872645 38.505764 41.660156 32.484375 C 41.603665 32.485465 41.546284 32.486418 41.529297 32.486328 C 38.928405 32.472567 36.607552 31.572967 34.904297 29.314453 z"></path></svg>\n            </div>\n            <div class="menu__text">'.concat(Lampa.Lang.translate("tdPanel"), "</div>\n        </li>"));
      button.on("hover:enter", function () {
        Lampa.Activity.push({
          url: "",
          title: manifest.name,
          component: manifest.component,
          page: 1
        });
      });
      $(".menu .menu__list").eq(0).append(button);
      $('body').append(Lampa.Template.get('tdStyle', {}, true));
    }
    Lampa.Component.add(manifest.component, Panels);
    if (window.appready) add();else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") add();
      });
    }
  }
  if (!window.plugin_td_ready) startPlugin();

})();
