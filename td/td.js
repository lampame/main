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
        var data = "urls=".concat(encodeURIComponent(selectedTorrent.MagnetUri), "&sequentialDownload=").concat(sd ? "true" : "false", "&firstLastPiecePrio=").concat(flpp ? "true" : "false", "&category=").concat(categoryParam);
        addXhr.send(data);
      }
    };
    authXhr.send();
    setTimeout(function () {
      Lampa.Select.close();
    }, 10);
  }
  function getStatus$3() {
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
  function qPanels$2() {
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
        console.log("TDDev", response.server_state);
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
        emptyCell.colSpan = headerCells.length;
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
    getStatus: getStatus$3,
    qPanels: qPanels$2
  };

  function transmissionClient(selectedTorrent) {
    if (selectedTorrent && Lampa.Storage.get("transmissionKey")) {
      var data = JSON.stringify({
        method: "torrent-add",
        arguments: {
          paused: Lampa.Storage.get("transmissionAutostart"),
          filename: selectedTorrent.MagnetUri
        }
      });
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
          Lampa.Noty.show(Lampa.Lang.translate('tdAdded'));
          console.log("TD", this.responseText);
        } else if (xhr.status !== 200) {
          console.log("TD", xhr);
          Lampa.Noty.show(Lampa.Lang.translate('tdError') + xhr.status);
        }
      });
      xhr.open("POST", "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
      xhr.setRequestHeader("X-Transmission-Session-Id", Lampa.Storage.get("transmissionKey"));
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass"))));
      xhr.send(data);
    } else if (!Lampa.Storage.get("transmissionKey")) {
      Lampa.Noty.show(Lampa.Lang.translate('tdAuthError') + !Lampa.Storage.get("transmissionKey") + " ".concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
    }
    setTimeout(function () {
      Lampa.Select.close();
    }, 10);
  }
  function getStatus$2() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log('TD', this.getAllResponseHeaders());
        console.log('TD', this.status);
        console.log('TD', this);
        if (this.status === 200 || this.status === 409) {
          Lampa.Storage.set("transmissionKey", xhr.getResponseHeader("X-Transmission-Session-Id"));
          $("#transmissionStatus").removeClass("active error wait").addClass("active");
          $("#transmissionStatusBtn").removeClass("active error wait").addClass("active");
        } else if (this.status === undefined) {
          $("#transmissionStatus").removeClass("active error wait").addClass("error");
          $("#transmissionStatusBtn").removeClass("active error wait").addClass("error");
        } else {
          $("#transmissionStatus").removeClass("active error wait").addClass("error");
          $("#transmissionStatusBtn").removeClass("active error wait").addClass("error");
        }
      }
    });
    xhr.open("POST", "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
    xhr.setRequestHeader("Authorization", "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass"))));
    xhr.send();
  }
  function qPanels$1() {
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
          console.log("TDDev", item);
          Lampa.Noty.show(Lampa.Lang.translate('tdAction') + item.name + " " + action);
        } else {
          console.log("TD", this.status.text);
          Lampa.Noty.show(Lampa.Lang.translate('tdError') + this.status);
        }
      });
      xhr.open("POST", "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
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
        "url": "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"),
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
        console.log("TDDev", response);
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
      } else {
        // Если ответ пустой, добавить строку с сообщением
        var emptyRow = table.insertRow();
        var emptyCell = emptyRow.insertCell();
        emptyCell.colSpan = headerCells.length;
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
    xhr.open("POST", "".concat(Lampa.Storage.get("transmissionKeenetic") === true ? "https://corsproxy.io/?" : "").concat(Lampa.Storage.get("transmissionProtocol") || "http://").concat(Lampa.Storage.get("transmissionUrl") || "127.0.0.1:9001").concat(Lampa.Storage.get("transmissionPath") || "/transmission/rpc"));
    xhr.setRequestHeader("X-Transmission-Session-Id", Lampa.Storage.get("transmissionKey"));
    xhr.setRequestHeader("Authorization", "Basic ".concat(btoa(Lampa.Storage.get("transmissionUser") + ":" + Lampa.Storage.get("transmissionPass"))));
    xhr.send(data);
  }
  var transmission = {
    transmissionClient: transmissionClient,
    getStatus: getStatus$2,
    qPanels: qPanels$1
  };

  function aria2Client(selectedTorrent) {
    if (!selectedTorrent) {
      return;
    }
    // WARNING: For POST requests, body is set to null by browsers.
    var data = JSON.stringify({
      "jsonrpc": "2.0",
      "id": "qwer",
      "method": "aria2.addUri",
      "params": [[selectedTorrent.MagnetUri]]
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (xhr.status !== 200) {
          Lampa.Noty.show(Lampa.Lang.translate('tdAddError'));
          return;
        }
        Lampa.Noty.show(Lampa.Lang.translate('tdAdded'));
        console.log("TD", this);
      }
    });
    xhr.open("POST", "".concat(Lampa.Storage.get("aria2Protocol") || "http://").concat(Lampa.Storage.get("aria2Url") || "127.0.0.1:9001").concat(Lampa.Storage.get("aria2Path") || "/jsonrpc"));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    setTimeout(function () {
      Lampa.Select.close();
    }, 10);
  }
  function qPanels() {
    function tabels(data) {
      // Function implementation
      response = data.response;
      // Получить элемент, в который нужно вставить таблицу
      var parentElement = document.getElementById("tdStatus");
      // Создать таблицу
      var table = document.createElement("table");
      table.id = "tdStatus_table";
      // Создать заголовок таблицы
      var headerRow = table.insertRow();
      var headerCells = ["Название", "Состояние", "Прогресс", "Размер", "Скачано", "Отдано"];
      headerCells.forEach(function (headerCell) {
        var th = document.createElement("th");
        th.id = "header";
        th.textContent = headerCell;
        headerRow.appendChild(th);
      });

      // Добавить строки с данными из переменной response
      if (response && response.length > 0) {
        response.forEach(function (item) {
          var row = table.insertRow();
          row.id = "td_panel row";
          // Создать ячейки для каждой строки
          var nameCell = row.insertCell();
          nameCell.id = "tName";
          nameCell.textContent = item.bittorrent.info.name;
          var stateCell = row.insertCell();
          if (item.state === "pausedDL") {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate(item.state);
            stateCell.on("hover:enter", function () {
              action("resume", item);
            });
          } else if (item.state === "downloading") {
            stateCell.classList.add("simple-button", "selector", "tdAction");
            stateCell.textContent = Lampa.Lang.translate(item.state);
            stateCell.on("hover:enter", function () {
              action("pause", item);
            });
          }
          var progressCell = row.insertCell();
          progressCell.id = "percent";
          progressCell.textContent = formatPercent(item.progress);
          var sizeCell = row.insertCell();
          sizeCell.textContent = formatBytes(item.size);
          var downloadedCell = row.insertCell();
          downloadedCell.textContent = formatBytes(item.downloaded);
          var uploadedCell = row.insertCell();
          uploadedCell.textContent = formatBytes(item.uploaded);
        });
      } else {
        // Если ответ пустой, добавить строку с сообщением
        var emptyRow = table.insertRow();
        var emptyCell = emptyRow.insertCell();
        emptyCell.colSpan = headerCells.length;
        emptyCell.textContent = "Данные не найдены";
      }
      var footer = document.createElement("div");
      footer.classList.add("simple-button", "selector", "tdReload");
      footer.textContent = "Reload Lampa";
      footer.on("hover:enter", function () {
        location.reload();
        Lampa.Noty.show(Lampa.Lang.translate('tdPanelReloaded'));
      });
      // Вставить созданную таблицу в родительский элемент
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
      error.innerHTML = "<div id='Error'><h2>Data not found</h2></div>";
      tdPanel.appendChild(error);
    }
    // WARNING: For POST requests, body is set to null by browsers.
    var data = JSON.stringify({
      "jsonrpc": "2.0",
      "id": "qwer",
      "method": "aria2.tellWaiting",
      "params": [0, 10]
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log("TD", this.responseText);
        return tabels(JSON.parse(this.responseText));
      } else if (this.readyState === 4 && this.status !== 200) {
        return error();
      }
    });
    xhr.open("POST", "".concat(Lampa.Storage.get("aria2Protocol") || "http://").concat(Lampa.Storage.get("aria2Url") || "127.0.0.1:9001").concat(Lampa.Storage.get("aria2Path") || "/jsonrpc"));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  }
  function getStatus$1() {
    var statusXhr = new XMLHttpRequest();
    statusXhr.withCredentials = false;
    var data = JSON.stringify({
      "jsonrpc": "2.0",
      "id": "qwer",
      "method": "aria2.getVersion"
    });
    statusXhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          console.log("TD", "Status " + this.status);
          $('#aria2Status').removeClass('active error wait').addClass('active');
          $('#aria2StatusBtn').removeClass('active error wait').addClass('active');
          //$("#aria2StatusBtn").text(function (i, text) { return "🟢 " + text; });
        } else if (this.status === undefined) {
          console.log("TD", "Status - undefined");
          $('#aria2Status').removeClass('active error wait').addClass('error');
          $('#aria2StatusBtn').removeClass('active error wait').addClass('error');
          //$("#aria2StatusBtn").text(function (i, text) { return "🔴 " + text; });
        } else {
          console.log("TD", "Status " + this.status);
          $('#aria2Status').removeClass('active error wait').addClass('error');
          $('#aria2StatusBtn').removeClass('active error wait').addClass('error');
          //$("#aria2StatusBtn").text(function (i, text) { return "🔴 " + text; });
        }
      }
    });
    statusXhr.open("POST", "".concat(Lampa.Storage.get("aria2Protocol") || "http://").concat(Lampa.Storage.get("aria2Url") || "127.0.0.1:9001").concat(Lampa.Storage.get("aria2Path") || "/jsonrpc"));
    statusXhr.setRequestHeader("Content-Type", "application/json");
    statusXhr.send(data);
  }
  var pAria2 = {
    aria2Client: aria2Client,
    qPanels: qPanels,
    getStatus: getStatus$1
  };

  function getStatus() {
    var statusXhr = new XMLHttpRequest();
    statusXhr.withCredentials = false;
    statusXhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          console.log("TD", "Status " + this.status);
          console.log(JSON.parse(this.response));
          Lampa.Storage.set("synologySID", JSON.parse(this.response).data.sid);
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
    if (Lampa.Storage.get("synalogyProxy") && Lampa.Storage.get("synalogyProxy") !== 'no_client') {
      addXhr.open("GET", "".concat(Lampa.Storage.get("synalogyProxy")) + encodeURIComponent("".concat(Lampa.Storage.get("synologyProtocol") || "http://").concat(Lampa.Storage.get("synologyUrl") || "127.0.0.1", "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=3&method=create&uri=").concat(selectedTorrent.MagnetUri, "&username=").concat(Lampa.Storage.get("synologyUser"), "&password=").concat(Lampa.Storage.get("synologyPass"), "&destination=").concat(Lampa.Storage.get("synologyPath"), "&_sid=").concat(Lampa.Storage.get("synologySID"))));
    } else {
      addXhr.open("GET", "".concat(Lampa.Storage.get("synologyProtocol") || "http://").concat(Lampa.Storage.get("synologyUrl") || "127.0.0.1", "/webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=3&method=create&uri=").concat(encodeURIComponent(selectedTorrent.MagnetUri), "&username=").concat(Lampa.Storage.get("synologyUser"), "&password=").concat(Lampa.Storage.get("synologyPass"), "&destination=").concat(Lampa.Storage.get("synologyPath"), "&_sid=").concat(Lampa.Storage.get("synologySID")));
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
    window.location.assign(selectedTorrent.MagnetUri);
  }
  var universal = {
    sender: sender
  };

  function downloader() {
    function send2qBittorrent(selectedTorrent) {
      qBittorent.qBittorrentClient(selectedTorrent);
    }
    function send2aria2(selectedTorrent) {
      pAria2.aria2Client(selectedTorrent);
    }
    function send2synology(selectedTorrent) {
      synology.synologyClient(selectedTorrent);
    }
    function send2transmission(selectedTorrent) {
      transmission.transmissionClient(selectedTorrent);
    }
    function send2universal(selectedTorrent) {
      universal.sender(selectedTorrent);
    }
    Lampa.Listener.follow('torrent', function (e) {
      if (e.type === 'onlong') {
        var selectedTorrent = e.element;
        var onSelectApp = function onSelectApp(a) {
          if (!selectedTorrent.MagnetUri) {
            Lampa.Parser.marnet(selectedTorrent, function () {
              a.send2app(selectedTorrent);
            }, function (error) {
              console.log('TD', "Error loading magnet:", error);
              console.log("TD", "Проверяем что нам отдает парсер", selectedTorrent);
              Lampa.Noty.show(Lampa.Lang.translate('tdMagnetError'), error);
            });
          } else {
            a.send2app(selectedTorrent);
          }
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
          typeof Lampa.Storage.get("transmissionUrl") !== 'undefined' && typeof Lampa.Storage.get("transmissionUser") !== 'undefined' && typeof Lampa.Storage.get("transmissionPass") !== 'undefined' && transmission.getStatus();
          e.menu.push({
            title: '<div id="transmissionStatusBtn" class="btnTD wait"><svg class="download" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path class="path" d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M18 17H12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '<path class="path" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '</svg>Transmission</div>',
            send2app: send2transmission,
            onSelect: onSelectApp
          });
        }
        if (Lampa.Storage.field("tdClient") === 'aria2') {
          typeof Lampa.Storage.get("aria2Url") !== 'undefined' && pAria2.getStatus();
          e.menu.push({
            title: '<div id="aria2StatusBtn" class="btnTD wait"><svg class="download" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path class="path" d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' + '<path class="path" d="M18 17H12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '<path class="path" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n' + '</svg>Aria2</div>',
            send2app: send2aria2,
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
        'transmission': transmission,
        'aria2': pAria2
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M 34.904297 29.314453 C 34.250297 34.648453 28.811359 37.069578 21.943359 35.517578 L 26.316406 43.763672 L 26.392578 43.914062 C 33.176993 42.923925 38.872645 38.505764 41.660156 32.484375 C 41.603665 32.485465 41.546284 32.486418 41.529297 32.486328 C 38.928405 32.472567 36.607552 31.572967 34.904297 29.314453 z"></path></svg>'
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
        if (Lampa.Settings.main().render().find('[data-component="aria2"]').length === 0) {
          Lampa.SettingsApi.addComponent({
            component: "aria2",
            name: Lampa.Lang.translate('aria2')
          });
        }
        Lampa.Settings.main().update();
        Lampa.Settings.main().render().find('[data-component="aria2"]').addClass("hide");
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
          aria2: Lampa.Lang.translate('aria2'),
          synology: "Synology"
        }
      },
      field: {
        name: Lampa.Lang.translate('tdSelect')
      },
      onChange: function onChange(value) {
        console.log("TDDev", value);
        Lampa.Storage.set('tdClient', value);
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
        name: Lampa.Lang.translate('clientPath')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("synologyPath", item);
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
        console.log("TDDev", value);
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
          typeof Lampa.Storage.get("transmissionUrl") !== 'undefined' && typeof Lampa.Storage.get("transmissionUser") !== 'undefined' && typeof Lampa.Storage.get("transmissionPass") !== 'undefined' && transmission.getStatus();
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

    /* Aria 2 */
    Lampa.SettingsApi.addParam({
      component: "torrentDownloader",
      param: {
        name: "aria2",
        type: "static",
        //доступно select,input,trigger,title,static
        "default": true
      },
      field: {
        name: Lampa.Lang.translate('aria2'),
        description: Lampa.Lang.translate('tdConfig')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field("tdClient") === "aria2") {
          typeof Lampa.Storage.get("aria2Url") !== 'undefined' && pAria2.getStatus();
          item.show();
          $(".settings-param__name", item).before('<div id="aria2Status" class="settings-param__status wait"></div>');
        } else item.hide();
        item.on("hover:enter", function () {
          Lampa.Settings.create("aria2");
          Lampa.Controller.enabled().controller.back = function () {
            Lampa.Settings.create("torrentDownloader");
          };
        });
      }
    });
    Lampa.SettingsApi.addParam({
      component: "aria2",
      param: {
        name: "aria2Head",
        type: "static"
      },
      field: {
        name: Lampa.Lang.translate('tdConfig')
        //description: `Контроль адреса - ${Lampa.Storage.get("aria2Protocol") || "http://"}${Lampa.Storage.get("aria2Url") || "127.0.0.1:9001"}${Lampa.Storage.get("aria2Path") || "/rpc"}`,
      }
    });
    Lampa.SettingsApi.addParam({
      component: "aria2",
      param: {
        name: "aria2SSL",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('clientSSL'),
        description: ""
      },
      onChange: function onChange(value) {
        if (value === "true") Lampa.Storage.set("aria2Protocol", "https://");else Lampa.Storage.set("aria2Protocol", "http://");
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "aria2",
      param: {
        name: "aria2Url",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('clientAddress')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("aria2Url", item);
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: "aria2",
      param: {
        name: "aria2Path",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '/jsonrpc',
        values: '/jsonrpc',
        "default": '/jsonrpc'
      },
      field: {
        name: Lampa.Lang.translate('aria2RPCRoute'),
        description: Lampa.Lang.translate('aria2RPCRouteDescription')
      },
      onChange: function onChange(item) {
        Lampa.Storage.set("aria2Path", item);
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
      /* qBittorent */
      qBittorent: {
        ru: "qBittorent",
        en: "qBittorent",
        uk: "qBittorent",
        zh: "qBittorent" // Chinese translation
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
      /* Arai2 */
      aria2: {
        ru: "Aria2",
        en: "Aria2",
        uk: "Aria2",
        zh: "Aria2" // Chinese translation
      },
      aria2RPCRoute: {
        ru: "RPC Path",
        en: "RPC Path",
        uk: "RPC Path",
        zh: "RPC 路径" // Chinese translation
      },
      aria2RPCRouteDescription: {
        ru: "Изменение пути API. Не трогать без необходимости",
        en: "Change api route. Do not change without need",
        uk: "Змінити маршрут API. Не чіпати без нагальної потреби",
        zh: "更改API路径。如无必要，请勿更改" // Chinese translation
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
    Lampa.Template.add('tdStyle', "\n        <style>\n            #error h2{width:90%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.more-clients{text-align:center}#systemTool{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin:0 1.5em 0 1.5em;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:-webkit-calc(100% - 3em);width:calc(100% - 3em)}#systemTool>div{margin-right:10px}#systemTool>div.simple-button.selector.tdReload{width:auto}#tdStatus{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}#cardList{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cardTd{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(25% - 10px);-moz-box-flex:0;-ms-flex:0 0 calc(25% - 10px);flex:0 0 calc(25% - 10px);margin:5px;padding:10px;border:1px solid white;-webkit-border-radius:5px;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.1);box-shadow:0 2px 4px rgba(0,0,0,0.1)}.titleTd{font-weight:bold;margin-bottom:10px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.statusTd{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:5px;border:1px solid white;padding:5px}.buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.tdAction,.tdActionDell{background-color:transparent;border:1px solid white;outline:0;margin:0 !important}@media(max-width:768px){#tdStatus{-webkit-box-orient:initial;-webkit-box-direction:initial;-webkit-flex-direction:initial;-moz-box-orient:initial;-moz-box-direction:initial;-ms-flex-direction:initial;flex-direction:initial;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cardTd{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 20px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 20px);flex:0 0 calc(100% - 20px);width:100%}.titleTd{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}}#tdStatus table{width:-webkit-calc(100% - 3em);width:calc(100% - 3em);border-collapse:collapse;margin-top:16px;margin-left:1.5em;margin-right:1.5em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#tdStatus table th,#tdStatus table td{padding:10px;text-align:left}#tdStatus table td.tdAction{text-align:center}#tdStatus table td#tName{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;word-break:break-all;font-size:1.5vw}#tdStatus table th{background-color:#fff;color:#000}tr#td_panel{background-color:rgba(0,0,0,0.3);-webkit-border-radius:1em;border-radius:1em;padding:1em;line-height:1.4;top:16px;position:relative;margin-top:8px;width:100%;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;justify-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}td#percent{white-space:nowrap}td.tdActionBlock{white-space:nowrap}td.simple-button.selector.tdActionDell{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.simple-button.focus>svg{fill:#000}.tdActionBlock{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}#serverInfo{font-size:1.5vw}.btnTD{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}svg.download{width:36px;height:36px;margin-right:5%}.error .download .path{stroke:red}.active .download .path{stroke:green}.wait .download .path{stroke:gray}@media(max-width:720px){.cardTd{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 10px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 10px);flex:0 0 calc(100% - 10px)}tr#td_panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start !important;-webkit-align-items:start !important;-moz-box-align:start !important;-ms-flex-align:start !important;align-items:start !important}#tdStatus table td#tName{font-size:3vw}#serverInfo{font-size:3vw}}\n        </style>\n    ");
    function add() {
      Menu.setMenu();
      var button = $('<li class="menu__item selector">\n            <div class="menu__ico">\n                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M 34.904297 29.314453 C 34.250297 34.648453 28.811359 37.069578 21.943359 35.517578 L 26.316406 43.763672 L 26.392578 43.914062 C 33.176993 42.923925 38.872645 38.505764 41.660156 32.484375 C 41.603665 32.485465 41.546284 32.486418 41.529297 32.486328 C 38.928405 32.472567 36.607552 31.572967 34.904297 29.314453 z"></path></svg>\n            </div>\n            <div class="menu__text">'.concat(Lampa.Lang.translate("tdPanel"), "</div>\n        </li>"));
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
