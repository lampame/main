function add() {  
    Lampa.Storage.listener.follow('change', (event) => {  
        if (event.name == 'screensaver' && event.value == true) {  
            if (Lampa.Platform.is('apple_tv') == true) {  
                Lampa.Storage.set("screensaver", false)  
            }  
        }  
    })  
}  
  
function startPlugin() {  
    window.plugin_atvss_ready = true;  
  
    Lampa.Manifest.plugins = {  
        type: "other",  
        version: "0.3",  
        name: "AppleTV Fix",  
        description: "Fix screensaver",  
        component: "atvss",  
    };       
  
    if (window.appready) add();  
    else {  
        Lampa.Listener.follow("app", function (e) {  
            if (e.type === "ready") add();  
        });  
    }  
}  
  
if (!window.plugin_atvss_ready) startPlugin();
