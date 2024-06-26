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

function mostrarModalLogin() {
  document.getElementById("modal-login").style.display = "block";
}

function cerrarModalLogin() {
  document.getElementById("modal-login").style.display = "none";
}

function mostrarNombreUsuario(username) {
  var navUsername = document.getElementById("nav-username");
  navUsername.textContent = "¡Bienvenido - " + username + "!";

  var opcionesInicioSesion = document.getElementsByClassName("nav__login-buttons");
  for (var i = 0; i < opcionesInicioSesion.length; i++) {
    opcionesInicioSesion[i].style.display = "none";
  }

  navUsername.style.display = "block";
  var btnCerrarSesion = document.getElementsByClassName("nav__logout");
  for (var i = 0; i < btnCerrarSesion.length; i++) {
    btnCerrarSesion[i].style.display = "block";
  }
}

function iniciarSesion() {
  var username = document.getElementById("login-username").value;

  spinner.style.display = "block";
  contenedor.style.display = "none";

  mostrarNombreUsuario(username);
  localStorage.setItem("username", username);
  cerrarModalLogin();

  document.getElementById("login-form").reset();

  history.replaceState({}, document.title, window.location.pathname);

  setTimeout(() => {
    spinner.style.display = "none";
    contenedor.style.display = "block";
  }, 2000);
}

function cerrarSesion() {
  localStorage.removeItem("username");

  spinner.style.display = "block";
  contenedor.style.display = "none";

  var opcionesInicioSesion = document.getElementsByClassName("nav__login-buttons");
  for (var i = 0; i < opcionesInicioSesion.length; i++) {
    opcionesInicioSesion[i].style.display = "block";
  }

  var navUsername = document.getElementById("nav-username");
  navUsername.textContent = "";
  navUsername.style.display = "none";

  var btnCerrarSesion = document.getElementsByClassName("nav__logout");
  for (var i = 0; i < btnCerrarSesion.length; i++) {
    btnCerrarSesion[i].style.display = "none";
  }

  history.replaceState({}, document.title, window.location.pathname);

  setTimeout(() => {
    spinner.style.display = "none";
    contenedor.style.display = "block";
  }, 2000);
}

window.addEventListener("load", function () {
  var username = localStorage.getItem("username");
  if (username) {
    mostrarNombreUsuario(username);
  } else {
    var btnCerrarSesion = document.getElementsByClassName("nav__logout");
    for (var i = 0; i < btnCerrarSesion.length; i++) {
      btnCerrarSesion[i].style.display = "none";
    }
  }
});

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  iniciarSesion();
});

function mostrarModalRegistro() {
  document.getElementById("modal-registro").style.display = "block";
}

function cerrarModalRegistro() {
  document.getElementById("modal-registro").style.display = "none";
}

function mostrarModalContacto() {
  document.getElementById("modal-contacto").style.display = "block";
}

function cerrarModalContacto() {
  document.getElementById("modal-contacto").style.display = "none";
}

var typed;

function mostrarModalAcerca() {
  document.getElementById("modal-acerca").style.display = "block";

  if (typed) {
    typed.destroy(); 
  }

  typed = new Typed(".typed", {
    strings: ['<i class="nombre">David Uriel Fragoso Madera</i>'],
    typeSpeed: 55,
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
    }, 800);
  });