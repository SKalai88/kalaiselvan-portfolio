/* =========================================
   BOOT SCREEN
========================================= */

window.addEventListener("load", () => {

  const bootScreen =
    document.getElementById("boot");

  setTimeout(() => {

    bootScreen.classList.add("hidden");

  }, 2400);

});


/* =========================================
   MOUSE GLOW
========================================= */

const glow =
  document.getElementById("glow");

window.addEventListener(
  "mousemove",
  (event) => {

    if (!glow) {
      return;
    }

    glow.style.left =
      event.clientX + "px";

    glow.style.top =
      event.clientY + "px";

  }
);


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
  document.getElementById("cursor");

const cursorDot =
  document.getElementById("cursorDot");


window.addEventListener(
  "mousemove",
  (event) => {

    if (!cursor || !cursorDot) {
      return;
    }

    cursor.style.left =
      event.clientX + "px";

    cursor.style.top =
      event.clientY + "px";


    cursorDot.style.left =
      event.clientX + "px";

    cursorDot.style.top =
      event.clientY + "px";

  }
);


/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const interactiveElements =
  document.querySelectorAll(
    "a, button, .skill, .arch-node, .tech, .mini-project"
  );


interactiveElements.forEach(
  (element) => {

    element.addEventListener(
      "mouseenter",
      () => {

        if (!cursor) {
          return;
        }

        cursor.style.width =
          "35px";

        cursor.style.height =
          "35px";

      }
    );


    element.addEventListener(
      "mouseleave",
      () => {

        if (!cursor) {
          return;
        }

        cursor.style.width =
          "18px";

        cursor.style.height =
          "18px";

      }
    );

  }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

            entry
              .target
              .classList
              .add("visible");

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


revealElements.forEach(
  (element) => {

    observer.observe(element);

  }
);


/* =========================================
   HERO PARALLAX
========================================= */

const heroTitle =
  document.querySelector(
    ".hero h1"
  );


window.addEventListener(
  "scroll",
  () => {

    if (!heroTitle) {
      return;
    }

    const scroll =
      window.scrollY;


    if (
      scroll <
      window.innerHeight
    ) {

      heroTitle.style.transform =
        `translateY(${scroll * 0.12}px)`;


      heroTitle.style.opacity =
        Math.max(
          0,
          1 - scroll / 650
        );

    }

  }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


window.addEventListener(
  "scroll",
  () => {

    let currentSection = "";


    sections.forEach(
      (section) => {

        const sectionTop =
          section.offsetTop;

        if (
          window.scrollY >=
          sectionTop - 250
        ) {

          currentSection =
            section.getAttribute("id");

        }

      }
    );


    navLinks.forEach(
      (link) => {

        link.classList.remove(
          "active"
        );


        if (
          link.getAttribute("href") ===
          "#" + currentSection
        ) {

          link.classList.add(
            "active"
          );

        }

      }
    );

  }
);


/* =========================================
   SMOOTH INTERNAL NAVIGATION
========================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    (anchor) => {

      anchor.addEventListener(
        "click",
        function (event) {

          const targetId =
            this.getAttribute("href");


          if (
            targetId === "#"
          ) {

            event.preventDefault();

            return;

          }


          const target =
            document.querySelector(
              targetId
            );


          if (target) {

            event.preventDefault();


            target.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

          }

        }
      );

    }
  );


/* =========================================
   CURRENT YEAR
========================================= */

const footerYear =
  document.querySelector(
    "footer span"
  );


if (footerYear) {

  footerYear.textContent =
    `© ${new Date().getFullYear()} KALAI SELVAN S`;

}