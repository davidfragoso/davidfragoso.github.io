const hamburguerIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector(".nav__overlay");
let currentDropdown = navOverlay;

hamburguerIcon.addEventListener("click", () => {
  hamburguerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});

navOverlay.addEventListener("click", (e) => {
  const currentElement = e.target;

  if (isActive(currentElement, "nav__parent")) {
    const subMenu = currentElement.parentElement.children[1];

    if (window.innerWidth < 768) {
      let height = subMenu.clientHeight === 0 ? subMenu.scrollHeight : 0;
      subMenu.style.height = `${height}px`;
    } else {
      if (!isActive(subMenu, "nav__inner--show")) {
        closeDropdown(currentDropdown);
      }
      subMenu.classList.toggle("nav__inner--show");
      currentDropdown = subMenu;
    }
  }
});

function isActive(element, className) {
  return element.classList.contains(className);
}

function closeDropdown(dropdown) {
  dropdown.classList.remove("nav__inner--show");
}

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown) {
  if (isActive(currentDropdown, "nav__inner--show")) {
    currentDropdown.classList.remove("nav__inner--show");
  }
}

window.addEventListener("resize", () => {
  closeDropdown(currentDropdown);

  if (window.innerWidth > 768) {
    const navInners = document.querySelectorAll(".nav__inner");

    navInners.forEach((navInner) => {
      navInner.style.height = "";
    });
  }
});

const contenedor = document.getElementById("contenedor");
const spinner = document.getElementById("spinner");

function mostrarModal() {
  document.getElementById("modal").style.display = "block";
}
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function mostrarModalContacto() {
  document.getElementById("modal-contacto").style.display = "block";
}
function cerrarModalContacto() {
  document.getElementById("modal-contacto").style.display = "none";
}

function mostrarModalAcerca() {
  document.getElementById("modal-acerca").style.display = "block";

  var typed = new Typed(".typed", {
    strings: ['<i class="nombre">David Uriel Fragoso Madera</i>'],
    typeSpeed: 65,
    startDelay: 300,
    smartBackspace: true,
    shuffle: false,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    contentType: "html",
  });
}

function cerrarModalAcerca() {
  document.getElementById("modal-acerca").style.display = "none";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    spinner.style.display = "none";
    contenedor.style.display = "block";
  }, 1000);
});
