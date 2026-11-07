const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

function setMenuOpen(isOpen) {
  if (!menuButton || !navigation) {
    return;
  }

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  navigation.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const contactForm = document.querySelector("#contact-form");
const contactFormStatus = document.querySelector("#contact-form-status");

if (contactForm && contactFormStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);
    const subject = `Mensaje desde el portfolio: ${formData.get("name")}`;
    const body = [
      `Nombre: ${formData.get("name")}`,
      `Correo: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");
    const mailto = [
      "mailto:bueteduardoj@gmail.com",
      `?subject=${encodeURIComponent(subject)}`,
      `&body=${encodeURIComponent(body)}`,
    ].join("");

    contactFormStatus.textContent =
      "Se abrirá tu aplicación de correo con el mensaje preparado. El sitio no envía ni guarda tus datos.";
    window.location.href = mailto;
  });
}
