
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    }
  });
});

document.querySelectorAll('input[type="tel"]').forEach((phone) => {
  phone.addEventListener("input", () => {
    const valid = /^[0-9+\s()-]{7,15}$/.test(phone.value.trim());
    phone.setCustomValidity(
      phone.value && !valid ? "Enter a valid phone number." : ""
    );
  });
});


document.querySelectorAll("[data-accordion-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    if (panel) panel.hidden = isOpen;
  });
});


document.querySelectorAll("[data-search]").forEach((search) => {
  search.addEventListener("input", () => {
    const list = document.querySelector(search.dataset.search);
    if (!list) return;

    list.querySelectorAll("[data-search-item]").forEach((item) => {
      item.hidden = !item.textContent
        .toLowerCase()
        .includes(search.value.toLowerCase());
    });
  });
});


if (!document.querySelector("[data-site-navigation]")) {
  const nav = document.createElement("nav");
  nav.setAttribute("data-site-navigation", "");
  nav.setAttribute("aria-label", "Main navigation");

  pages.forEach(([label, url]) => {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = label;
    nav.appendChild(link);
    nav.append(" ");
  });

  document.body.prepend(nav);
}