(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Icon-only download button (used in cards list)
  const ICON_DOWNLOAD = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
         stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M12 3v10"></path>
      <path d="M8 11l4 4 4-4"></path>
      <path d="M4 21h16"></path>
    </svg>
  `;

  const state = {
    lang: "en",
    plugins: [],
    q: "",
    activeId: null,
    detailsPlugin: null,
    detailsCarouselIndex: 0,
    imgIndex: 0
  };

  const el = {
    q: $("#q"),
    clear: $("#clear"),
    grid: $("#grid"),
    empty: $("#empty"),
    countValue: $("#countValue"),
    countLabel: $("#countLabel"),
    subtitle: $("#subtitle"),
    emptyTitle: $("#emptyTitle"),
    emptyHint: $("#emptyHint"),

    donate: $("#donate"),

    // howto
    howtoBtn: $("#howto"),
    howtoModal: $("#howtoModal"),
    howtoSteps: $("#howtoSteps"),
    howtoTitle: $("#howtoTitle"),

    // details
    detailsModal: $("#detailsModal"),
    detailsTitle: $("#detailsTitle"),
    detailsDesc: $("#detailsDesc"),
    detailsUrl: $("#detailsUrl"),
    detailsCopy: $("#detailsCopy"),
    detailsDl: $("#detailsDl"), // NOTE: exists in index.html
    gallery: $("#detailsGallery"),

    // image modal
    imgModal: $("#imgModal"),
    imgEl: $("#imgView"),
    imgTitle: $("#imgTitle"),
    imgCounter: $("#imgCount"),
    imgOpen: $("#imgOpen"),
    imgPrev: $("#imgPrev"),
    imgNext: $("#imgNext")
  };

  const i18n = {
    uk: {
      subtitle: "Каталог плагінів для Lampa • швидкий пошук • зручне копіювання",
      searchPlaceholder: "Пошук плагіна за назвою або описом…",
      pluginsCount: "Плагінів",
      howto: "Як встановити",
      donate: "Добровільний донат на підтримку",
      download: "Завантажити",
      emptyTitle: "Нічого не знайдено",
      emptyHint: "Спробуй інший запит.",
      howtoTitle: "Як встановити",
      stepsHtml: `
        <li>Скопіюй URL потрібного плагіна.</li>
        <li>В Lampa відкрий: <b>Налаштування → Розширення</b> та натисни <b>"Додати плагін"</b>.</li>
        <li>Встав скопійоване посилання у поле та підтверди.</li>
      `,
      details: "Детальніше",
      copy: "Copy",
      copied: "Copied",
      openOriginal: "Відкрити",
      prevImage: "Попереднє зображення",
      nextImage: "Наступне зображення"
    },
    en: {
      subtitle: "Lampa plugins catalog • quick search • easy copy",
      searchPlaceholder: "Search plugin by name or description…",
      pluginsCount: "Plugins",
      howto: "How to install",
      donate: "Voluntary donation to support",
      download: "Download",
      emptyTitle: "Nothing found",
      emptyHint: "Try another query.",
      howtoTitle: "How to install",
      stepsHtml: `
        <li>Copy the plugin URL.</li>
        <li>In Lampa open: <b>Settings → Extensions</b> and press <b>"Add plugin"</b>.</li>
        <li>Paste the copied link into the field and confirm.</li>
      `,
      details: "Details",
      copy: "Copy",
      copied: "Copied",
      openOriginal: "Open",
      prevImage: "Previous image",
      nextImage: "Next image"
    },
    ru: {
      subtitle: "Каталог плагинов для Lampa • быстрый поиск • удобное копирование",
      searchPlaceholder: "Поиск плагина по названию или описанию…",
      pluginsCount: "Плагинов",
      howto: "Как установить",
      donate: "Добровольный донат на поддержку",
      download: "Скачать",
      emptyTitle: "Ничего не найдено",
      emptyHint: "Попробуйте другой запрос.",
      howtoTitle: "Как установить",
      stepsHtml: `
        <li>Скопируйте URL нужного плагина.</li>
        <li>В Lampa откройте: <b>Настройки → Расширения</b> и нажмите <b>"Добавить плагин"</b>.</li>
        <li>Вставьте ссылку в поле и подтвердите.</li>
      `,
      details: "Подробнее",
      copy: "Copy",
      copied: "Copied",
      openOriginal: "Открыть",
      prevImage: "Предыдущее изображение",
      nextImage: "Следующее изображение"
    }
  };

  const SUPPORTED_LANGS = new Set(["en", "uk", "ru"]);

  function normalizeLang(lang) {
    return SUPPORTED_LANGS.has(lang) ? lang : "en";
  }

  function getLangFromHash() {
    const raw = (window.location.hash || "").replace(/^#/, "").trim().toLowerCase();
    if (!raw) return null;

    if (SUPPORTED_LANGS.has(raw)) return raw;
    if (raw.startsWith("lang=")) {
      const value = raw.slice(5);
      return SUPPORTED_LANGS.has(value) ? value : null;
    }

    return null;
  }

  function setHashLang(lang) {
    const nextHash = `#${lang}`;
    if (window.location.hash === nextHash) return;

    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(null, "", nextHash);
      return;
    }

    window.location.hash = nextHash;
  }

  function t(key) {
    return i18n[state.lang][key];
  }

  function absUrl(file) {
    return new URL(file, window.location.href).href;
  }

  function getShortDesc(p) {
    const uk = p.short_uk || p.desc_short_uk || p.desc_uk || "";
    const en = p.short_en || p.desc_short_en || p.desc_en || p.desc_uk || "";
    const ru = p.short_ru || p.desc_short_ru || p.desc_ru || p.desc_en || p.desc_uk || "";
    if (state.lang === "en") return en;
    if (state.lang === "ru") return ru;
    return uk;
  }

  function getFullDesc(p) {
    const uk = p.full_uk || p.desc_full_uk || p.desc_uk || "";
    const en = p.full_en || p.desc_full_en || p.desc_en || p.desc_uk || "";
    const ru = p.full_ru || p.desc_full_ru || p.desc_ru || p.desc_en || p.desc_uk || "";
    if (state.lang === "en") return en;
    if (state.lang === "ru") return ru;
    return uk;
  }

  function isVisibleForLang(p) {
    if (!Array.isArray(p.langs) || p.langs.length === 0) return true;
    return p.langs.includes(state.lang);
  }

  function parseImageList(value) {
    if (Array.isArray(value)) {
      return value
        .map(item => String(item || ""))
        .map(item => item.trim())
        .filter(Boolean);
    }

    if (typeof value === "string") {
      return value
        .split(",")
        .map(item => item.trim())
        .filter(Boolean);
    }

    return [];
  }

  function getScreens(p) {
    const seen = new Set();
    const result = [];
    const sourceItems = [
      ...parseImageList(p.images),
      ...parseImageList(p.screens)
    ];

    for (const item of sourceItems) {
      const src = absUrl(item);
      if (!src || seen.has(src)) continue;
      seen.add(src);
      result.push(src);
    }

    return result;
  }

  function matches(p, q) {
    if (!q) return true;
    const text = [(p.title || ""), getShortDesc(p), getFullDesc(p)].join(" ").toLowerCase();
    return text.includes(q);
  }

  async function load() {
    const url = `data/plugins.json?v=${Date.now()}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load plugins.json");
    const json = await res.json();
    state.plugins = Array.isArray(json.plugins) ? json.plugins : [];
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) { }

    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function setActiveCard(id) {
    state.activeId = id || null;
    $$(".card").forEach(card => {
      card.classList.toggle("is-active", card.dataset.id === state.activeId);
    });
  }

  // ---------- MODALS ----------
  function forceCloseAllModals() {
    [el.howtoModal, el.detailsModal, el.imgModal].forEach(m => m && m.classList.add("is-hidden"));
    document.body.classList.remove("is-modal-open");
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove("is-hidden");
    document.body.classList.add("is-modal-open");
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add("is-hidden");

    const anyOpen = [el.howtoModal, el.detailsModal, el.imgModal].some(
      m => m && !m.classList.contains("is-hidden")
    );
    if (!anyOpen) document.body.classList.remove("is-modal-open");
  }

  function closeByKind(kind) {
    if (kind === "howto") closeModal(el.howtoModal);
    if (kind === "details") closeModal(el.detailsModal);
    if (kind === "img") closeModal(el.imgModal);
  }

  // ---------- RENDER ----------
  function render() {
    const q = (state.q || "").trim().toLowerCase();
    const list = state.plugins.filter(p => isVisibleForLang(p) && matches(p, q));

    el.countValue.textContent = String(list.length);
    el.grid.innerHTML = "";
    el.empty.classList.toggle("is-hidden", list.length !== 0);

    for (const p of list) {
      const url = absUrl(p.file);

      const card = document.createElement("article");
      card.className = "card";
      card.dataset.id = p.id || p.title || url;
      if (state.activeId && card.dataset.id === state.activeId) card.classList.add("is-active");

      const top = document.createElement("div");
      top.className = "card__top";

      const title = document.createElement("div");
      title.className = "card__title";
      title.textContent = p.title || p.id || "Plugin";

      const detailsBtn = document.createElement("button");
      detailsBtn.className = "details";
      detailsBtn.type = "button";
      detailsBtn.textContent = t("details");
      detailsBtn.addEventListener("click", () => {
        setActiveCard(card.dataset.id);
        openDetails(p);
      });

      top.appendChild(title);
      top.appendChild(detailsBtn);

      const desc = document.createElement("div");
      desc.className = "card__desc";
      desc.textContent = getShortDesc(p);

      const row = document.createElement("div");
      row.className = "card__urlrow";

      const urlBox = document.createElement("div");
      urlBox.className = "url";
      urlBox.title = url;
      urlBox.textContent = url;

      const actions = document.createElement("div");
      actions.className = "card__actions";

      const copyBtn = document.createElement("button");
      copyBtn.className = "copy";
      copyBtn.type = "button";
      copyBtn.textContent = t("copy");
      copyBtn.addEventListener("click", async () => {
        const ok = await copyText(url);
        if (!ok) return;
        copyBtn.classList.add("is-done");
        copyBtn.textContent = t("copied");
        window.setTimeout(() => {
          copyBtn.classList.remove("is-done");
          copyBtn.textContent = t("copy");
        }, 900);
      });

      const dlBtn = document.createElement("a");
      dlBtn.className = "dl";
      dlBtn.href = url;
      dlBtn.setAttribute("download", "");
      dlBtn.setAttribute("aria-label", t("download"));
      dlBtn.title = t("download");
      dlBtn.innerHTML = ICON_DOWNLOAD;

      actions.appendChild(copyBtn);
      actions.appendChild(dlBtn);

      row.appendChild(urlBox);
      row.appendChild(actions);

      card.appendChild(top);
      card.appendChild(desc);
      card.appendChild(row);

      el.grid.appendChild(card);
    }
  }

  // ---------- DETAILS ----------
  function renderDetailsCarousel(p, shots) {
    el.gallery.innerHTML = "";
    el.gallery.classList.toggle("is-hidden", shots.length === 0);
    if (!shots.length) return;

    state.detailsCarouselIndex = Math.max(
      0,
      Math.min(state.detailsCarouselIndex, shots.length - 1)
    );

    const frame = document.createElement("div");
    frame.className = "carousel";

    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel__nav carousel__nav--left";
    prevBtn.type = "button";
    prevBtn.textContent = "‹";
    prevBtn.setAttribute("aria-label", t("prevImage"));
    prevBtn.title = t("prevImage");

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel__nav carousel__nav--right";
    nextBtn.type = "button";
    nextBtn.textContent = "›";
    nextBtn.setAttribute("aria-label", t("nextImage"));
    nextBtn.title = t("nextImage");

    const stage = document.createElement("div");
    stage.className = "carousel__stage";

    const img = document.createElement("img");
    img.className = "shot";
    img.loading = "lazy";
    img.addEventListener("click", () => openImage(state.detailsCarouselIndex));
    stage.appendChild(img);

    frame.appendChild(prevBtn);
    frame.appendChild(stage);
    frame.appendChild(nextBtn);

    const meta = document.createElement("div");
    meta.className = "carousel__meta";

    const dots = document.createElement("div");
    dots.className = "carousel__dots";

    const counter = document.createElement("div");
    counter.className = "carousel__count";

    shots.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.className = "carousel__dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `${idx + 1}`);
      dot.addEventListener("click", () => {
        state.detailsCarouselIndex = idx;
        syncCarousel();
      });
      dots.appendChild(dot);
    });

    meta.appendChild(dots);
    meta.appendChild(counter);

    el.gallery.appendChild(frame);
    el.gallery.appendChild(meta);

    let touchStartX = 0;
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < 40) return;

      if (deltaX < 0 && state.detailsCarouselIndex < shots.length - 1) {
        state.detailsCarouselIndex += 1;
        syncCarousel();
      } else if (deltaX > 0 && state.detailsCarouselIndex > 0) {
        state.detailsCarouselIndex -= 1;
        syncCarousel();
      }
    }, { passive: true });

    prevBtn.addEventListener("click", () => {
      if (state.detailsCarouselIndex === 0) return;
      state.detailsCarouselIndex -= 1;
      syncCarousel();
    });

    nextBtn.addEventListener("click", () => {
      if (state.detailsCarouselIndex >= shots.length - 1) return;
      state.detailsCarouselIndex += 1;
      syncCarousel();
    });

    function syncCarousel() {
      const idx = state.detailsCarouselIndex;
      img.src = shots[idx];
      img.alt = `${p.title || "Plugin"} screenshot ${idx + 1}`;

      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === shots.length - 1;
      counter.textContent = `${idx + 1}/${shots.length}`;

      $$(".carousel__dot", dots).forEach((dot, dotIdx) => {
        dot.classList.toggle("is-active", dotIdx === idx);
      });
    }

    syncCarousel();
  }

  function openDetails(p) {
    state.detailsPlugin = p;
    state.detailsCarouselIndex = 0;

    const url = absUrl(p.file);

    el.detailsTitle.textContent = p.title || p.id || "Plugin";
    el.detailsDesc.textContent = getFullDesc(p);

    el.detailsUrl.textContent = url;
    el.detailsUrl.title = url;

    el.detailsCopy.textContent = t("copy");
    el.detailsCopy.classList.remove("is-done");
    el.detailsCopy.onclick = async () => {
      const ok = await copyText(url);
      if (!ok) return;
      el.detailsCopy.classList.add("is-done");
      el.detailsCopy.textContent = t("copied");
      window.setTimeout(() => {
        el.detailsCopy.classList.remove("is-done");
        el.detailsCopy.textContent = t("copy");
      }, 900);
    };

    // Update existing download button in Details modal (from index.html)
    if (el.detailsDl) {
      el.detailsDl.href = url;

      // For best compatibility, keep it as a download link (no new tab needed)
      el.detailsDl.removeAttribute("target");
      el.detailsDl.removeAttribute("rel");

      el.detailsDl.setAttribute("download", "");
      el.detailsDl.setAttribute("aria-label", t("download"));
      el.detailsDl.title = t("download");
    }

    const shots = getScreens(p);
    renderDetailsCarousel(p, shots);

    openModal(el.detailsModal);
  }

  // ---------- IMAGE LIGHTBOX ----------
  function openImage(index) {
    const p = state.detailsPlugin;
    if (!p) return;

    const shots = getScreens(p);
    if (!shots.length) return;

    state.imgIndex = Math.max(0, Math.min(index, shots.length - 1));

    const src = shots[state.imgIndex];
    el.imgEl.src = src;
    el.imgEl.alt = `${p.title || "Plugin"} screenshot ${state.imgIndex + 1}`;

    el.imgTitle.textContent = p.title || p.id || "Screenshot";
    el.imgCounter.textContent = `${state.imgIndex + 1}/${shots.length}`;

    el.imgOpen.textContent = t("openOriginal");
    el.imgOpen.href = src;

    if (el.imgPrev) el.imgPrev.disabled = (state.imgIndex === 0);
    if (el.imgNext) el.imgNext.disabled = (state.imgIndex === shots.length - 1);

    openModal(el.imgModal);
  }

  function stepImage(dir) {
    const p = state.detailsPlugin;
    if (!p) return;
    const shots = getScreens(p);
    if (!shots.length) return;

    const next = state.imgIndex + dir;
    if (next < 0 || next >= shots.length) return;

    openImage(next);
  }

  // ---------- I18N ----------
  function setLang(lang, opts = {}) {
    const { syncHash = true } = opts;

    state.lang = normalizeLang(lang);
    document.documentElement.lang = state.lang;

    $$(".lang__btn").forEach(b => {
      b.classList.toggle("is-active", b.dataset.lang === state.lang);
    });

    if (syncHash) setHashLang(state.lang);

    el.subtitle.textContent = t("subtitle");
    el.q.placeholder = t("searchPlaceholder");
    el.countLabel.textContent = t("pluginsCount");
    if (el.howtoBtn) el.howtoBtn.textContent = t("howto");

    // Donate text + aria-label
    if (el.donate) {
      const donateHref = state.lang === "uk"
        ? "https://lampame.donatik.me"
        : "https://t.me/tribute/app?startapp=d5WS";
      el.donate.href = donateHref;
      el.donate.textContent = t("donate");
      el.donate.setAttribute(
        "aria-label",
        state.lang === "en"
          ? "Voluntary donation to support (opens in a new tab)"
          : state.lang === "ru"
            ? "Добровольный донат на поддержку (откроется в новой вкладке)"
            : "Добровільний донат на підтримку (відкриється у новій вкладці)"
      );
    }

    el.emptyTitle.textContent = t("emptyTitle");
    el.emptyHint.textContent = t("emptyHint");

    el.howtoTitle.textContent = t("howtoTitle");
    el.howtoSteps.innerHTML = t("stepsHtml");

    // If details open, refresh content (also updates detailsDl aria/title)
    if (state.detailsPlugin && el.detailsModal && !el.detailsModal.classList.contains("is-hidden")) {
      openDetails(state.detailsPlugin);
    }

    render();
  }

  // ---------- EVENTS ----------
  function wire() {
    el.q.addEventListener("input", () => {
      state.q = el.q.value;
      el.clear.classList.toggle("is-hidden", !state.q);
      render();
    });

    el.clear.addEventListener("click", () => {
      el.q.value = "";
      state.q = "";
      el.clear.classList.add("is-hidden");
      el.q.focus();
      render();
    });

    if (el.howtoBtn) {
      el.howtoBtn.addEventListener("click", () => openModal(el.howtoModal));
    }

    // universal close: backdrop + X (both use data-close)
    document.addEventListener("click", (e) => {
      const node = e.target.closest("[data-close]");
      if (!node) return;

      const kind = node.getAttribute("data-close");
      closeByKind(kind);
    });

    // lightbox navigation
    if (el.imgPrev) el.imgPrev.addEventListener("click", () => stepImage(-1));
    if (el.imgNext) el.imgNext.addEventListener("click", () => stepImage(+1));

    // click on image closes
    if (el.imgEl) el.imgEl.addEventListener("click", () => closeModal(el.imgModal));

    // Esc + arrows
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (el.imgModal && !el.imgModal.classList.contains("is-hidden")) return closeModal(el.imgModal);
        if (el.detailsModal && !el.detailsModal.classList.contains("is-hidden")) return closeModal(el.detailsModal);
        if (el.howtoModal && !el.howtoModal.classList.contains("is-hidden")) return closeModal(el.howtoModal);
      }

      if (el.imgModal && !el.imgModal.classList.contains("is-hidden")) {
        if (e.key === "ArrowLeft") stepImage(-1);
        if (e.key === "ArrowRight") stepImage(+1);
      }
    });

    // language
    $$(".lang__btn").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang, { syncHash: true }));
    });

    window.addEventListener("hashchange", () => {
      const hashLang = getLangFromHash();

      if (!window.location.hash) {
        if (state.lang !== "en") setLang("en", { syncHash: false });
        return;
      }

      if (!hashLang || hashLang === state.lang) return;
      setLang(hashLang, { syncHash: false });
    });
  }

  (async function init() {
    forceCloseAllModals();

    wire();
    await load();

    const hashLang = getLangFromHash();
    setLang(hashLang || "en", { syncHash: Boolean(hashLang) });
  })().catch((err) => {
    console.error(err);
    el.grid.innerHTML = "";
    el.empty.classList.remove("is-hidden");
    el.emptyTitle.textContent = "Error";
    el.emptyHint.textContent = "Failed to load data/plugins.json";
  });
})();
