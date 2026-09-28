/* ============================================================
   NAV TOGGLE — mobile hamburger menu. Shared across every page.
   You shouldn't need to edit this file.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Closing the menu when a link is tapped isn't strictly necessary since
  // every link navigates to a new page, but it avoids a flash of the open
  // menu on the next page if the browser restores scroll/DOM state.
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
/* ---- Banners tab: adds "Banners" to the menu on every page, and makes
        the shop page's banner button open in the same tab ---- */
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
