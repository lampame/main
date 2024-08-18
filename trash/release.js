Lampa.Platform.tv();
function add() {
    const lme_release = $(`<li class="menu__item selector">
            <div class="menu__ico"><svg height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1.5" width="35" height="27" rx="1.5" stroke="currentColor" stroke-width="3"></rect>
                        <path d="M18.105 22H15.2936V16H9.8114V22H7V8H9.8114V13.6731H15.2936V8H18.105V22Z" fill="currentColor"></path>
                        <path d="M20.5697 22V8H24.7681C25.9676 8 27.039 8.27885 27.9824 8.83654C28.9321 9.38782 29.6724 10.1763 30.2034 11.2019C30.7345 12.2212 31 13.3814 31 14.6827V15.3269C31 16.6282 30.7376 17.7853 30.2128 18.7981C29.6943 19.8109 28.9602 20.5962 28.0105 21.1538C27.0609 21.7115 25.9895 21.9936 24.7962 22H20.5697ZM23.3811 10.3365V19.6827H24.7399C25.8395 19.6827 26.6798 19.3141 27.2608 18.5769C27.8419 17.8397 28.1386 16.7853 28.1511 15.4135V14.6731C28.1511 13.25 27.8637 12.1731 27.289 11.4423C26.7142 10.7051 25.8739 10.3365 24.7681 10.3365H23.3811Z" fill="currentColor"></path>
                    </svg></div>
            <div class="menu__text">Release</div>
        </li>`);
    lme_release.on("hover:enter", function () {
        Lampa.Activity.push({
            url: "",
            title: "Release",
            component: "relise",
            page: 1,
        });
    });

    $(".menu .menu__list").eq(0).append(lme_release);
}
function startPlugin() {
    window.plugin_lmeRelease_ready = true;

    Lampa.Manifest.plugins = {
        type: "other",
        version: "0.3",
        name: "Release",
        description: "Add release without language restrict",
        component: "lmeRelease",
    };

    if (window.appready) add();
    else {
        Lampa.Listener.follow("app", function (e) {
            if (e.type === "ready") add();
        });
    }
}
if (!window.plugin_lmeRelease_ready) startPlugin();
