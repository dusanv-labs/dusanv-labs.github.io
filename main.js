(function () {
  "use strict";

  var SUPPORTED = ["en", "sr"];
  var SR_LIKE = ["sr", "hr", "bs", "sh", "cnr"];
  var currentLang = "en";

  /* ---------- storage helpers (never throw) ---------- */
  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ---------- helpers ---------- */
  function lookup(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return o == null ? undefined : o[k];
    }, obj);
  }

  function t(path) {
    var value = lookup(TRANSLATIONS[currentLang], path);
    if (value === undefined) {
      console.warn("[i18n] Missing translation for '" + path + "' (" + currentLang + ")");
      value = lookup(TRANSLATIONS.en, path);
    }
    return value === undefined ? "" : value;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function tags(list) {
    var ul = el("ul", "tags");
    list.forEach(function (item) { ul.appendChild(el("li", "tag", item)); });
    return ul;
  }

  /* ---------- language detection ---------- */
  function detectLanguage() {
    var param = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED.indexOf(param) !== -1) return param;

    var saved = load("lang");
    if (SUPPORTED.indexOf(saved) !== -1) return saved;

    var browser = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    var primary = browser.toLowerCase().split("-")[0];
    return SR_LIKE.indexOf(primary) !== -1 ? "sr" : "en";
  }

  /* ---------- rendering of list-based sections ---------- */
  function renderFacts() {
    var list = document.getElementById("about-facts");
    list.replaceChildren();
    t("about.facts").forEach(function (fact) {
      var li = el("li", "fact");
      li.appendChild(el("span", "fact-value", fact.value));
      li.appendChild(el("span", "fact-label", fact.label));
      list.appendChild(li);
    });
  }

  function renderTimeline() {
    var list = document.getElementById("timeline");
    list.replaceChildren();
    t("experience.projects").forEach(function (project) {
      var li = el("li", "timeline-item");
      var head = el("div", "timeline-head");
      head.appendChild(el("h4", null, project.name));
      head.appendChild(el("span", "timeline-period", project.period));
      li.appendChild(head);
      li.appendChild(tags(project.tech));
      var ul = el("ul", "bullets");
      project.bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
      li.appendChild(ul);
      list.appendChild(li);
    });
  }

  function renderSkills() {
    var grid = document.getElementById("skills-grid");
    grid.replaceChildren();
    t("skills.groups").forEach(function (group) {
      var card = el("article", "card skill-card");
      card.appendChild(el("h3", null, group.name));
      card.appendChild(tags(group.items));
      grid.appendChild(card);
    });
  }

  function renderProjects() {
    var grid = document.getElementById("projects-grid");
    grid.replaceChildren();
    t("projects.items").forEach(function (item) {
      var card = el("article", "card project-card" + (item.links && item.links.length ? " project-card--featured" : ""));
      if (item.image) {
        var img = el("img", "project-thumb");
        img.src = item.image;
        img.alt = item.imageAlt || item.title;
        img.loading = "lazy";
        img.width = 640;
        img.height = 360;
        card.appendChild(img);
      }
      card.appendChild(el("span", "badge", item.badge || t("projects.badge")));
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.description));
      card.appendChild(tags(item.tech));
      if (item.links && item.links.length) {
        var links = el("p", "card-links");
        item.links.forEach(function (link) {
          var a = el("a", null, link.label);
          a.href = link.url;
          a.target = "_blank";
          a.rel = "noopener";
          links.appendChild(a);
        });
        card.appendChild(links);
      }
      grid.appendChild(card);
    });
  }

  function renderLanguages() {
    var list = document.getElementById("languages-list");
    list.replaceChildren();
    t("education.languages").forEach(function (lang) {
      var li = el("li");
      li.appendChild(el("strong", null, lang.name));
      li.appendChild(el("span", "muted", lang.level));
      list.appendChild(li);
    });
  }

  /* ---------- apply language ---------- */
  function setMeta(selector, value) {
    var node = document.querySelector(selector);
    if (node) node.setAttribute("content", value);
  }

  function applyLanguage(lang) {
    currentLang = SUPPORTED.indexOf(lang) !== -1 ? lang : "en";
    var root = document.documentElement;
    root.lang = currentLang === "sr" ? "sr-Latn" : "en";

    document.title = t("meta.title");
    setMeta('meta[name="description"]', t("meta.description"));
    setMeta('meta[property="og:title"]', t("meta.title"));
    setMeta('meta[property="og:description"]', t("meta.description"));
    setMeta('meta[property="og:locale"]', t("meta.locale"));

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (node) {
      node.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        node.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    renderFacts();
    renderTimeline();
    renderSkills();
    renderProjects();
    renderLanguages();

    var cv = document.getElementById("cv-link");
    cv.href = t("cvFile");
    cv.setAttribute("download", t("cvFile"));

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === currentLang));
    });

    store("lang", currentLang);
  }

  /* ---------- theme ---------- */
  function effectiveTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initTheme() {
    document.getElementById("theme-toggle").addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      store("theme", next);
    });
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    var toggle = document.getElementById("menu-toggle");
    var links = document.getElementById("nav-links");

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      links.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------- header shadow + reveal animations ---------- */
  function initScrollEffects() {
    var header = document.getElementById("site-header");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { observer.observe(i); });
  }

  /* ---------- init ---------- */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLanguage(btn.getAttribute("data-lang")); });
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  applyLanguage(detectLanguage());
  initTheme();
  initMenu();
  initScrollEffects();
})();
