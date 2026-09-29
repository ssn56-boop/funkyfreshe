/* Mobile menu toggle */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
});

/* ---- Banners tab: adds "Banners" to the menu on every page, and makes
        the shop page's banner button open in the same tab instead of
        a new one ---- */
;(function () {
  function addBannersTab() {
    var links = document.querySelector(".nav-links");
    if (links && !links.querySelector('a[href="banner.html"]')) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "banner.html";
      a.textContent = "Banners";
      if (/banner\.html$/.test(window.location.pathname)) a.className = "active";
      li.appendChild(a);
      var customers = links.querySelector('a[href="customers.html"]');
      if (customers && customers.parentNode.parentNode === links) {
        links.insertBefore(li, customers.parentNode);
      } else {
        links.appendChild(li);
      }
    }
    var btn = document.getElementById("banner-form-link");
    if (btn) { btn.removeAttribute("target"); btn.removeAttribute("rel"); }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addBannersTab);
  } else {
    addBannersTab();
  }
})();
