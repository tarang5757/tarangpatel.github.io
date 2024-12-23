/*Intro animation*/
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
setTimeout(function() {
    loader.style.display = "none";
    }, 3000);

    document.addEventListener("contextmenu", function(e){
if (e.target.nodeName === "IMG") {
  e.preventDefault();
}
}, false);

})



/*Show menu*/
const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*Active and remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Auto write text*/
var app = document.getElementById("autoWrite");

var typewriter = new Typewriter(app, {
  strings: ["Web Developer", "Innovative Thinker", "Tech Enthusiast", "Anime Fan"],
  loop: true,
  autoStart: true,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home_img", { delay: 400 });
sr.reveal(".home_social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 400 });
sr.reveal(".about_text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", {});
sr.reveal(".skills_data", { interval: 200 });
sr.reveal(".skills_img", { delay: 600 });

/*SCROLL Experience*/
sr.reveal(".experience_container", { interval: 200 });
sr.reveal(".project_img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact_input", { interval: 200 });

/*Toggle dark mode*/
const toggleDarkMode = document.getElementById("toggle");

toggleDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("head").classList.toggle("dark");
});

/*Particles.js - Starry Theme*/
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 480,
      "density": {
        "enable": true,
        "value_area": 150
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.1,
      "width": 0.1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "left",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

