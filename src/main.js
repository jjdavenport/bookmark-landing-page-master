const features = [
  {
    title: "Features",
    paragraph:
      "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  },
  {
    title: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    title: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

function mobileButtons() {
  const windowSize = window.innerWidth;
  if (windowSize >= 768) {
    return;
  }
  const zBtn = document.querySelectorAll(".zBtn");
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  menu.classList.add("translate-x-full");
  menuBtn.addEventListener("click", () => {
    menu.classList.add("flex");
    void menu.offsetWidth;
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
    zBtn.forEach((btn) => {
      btn.classList.add("-z-50");
    });
  });
  menuCloseBtn.addEventListener("click", () => {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
    setTimeout(() => {
      menu.classList.remove("flex");
    }, 300);
    document.body.style.overflow = "auto";
    zBtn.forEach((btn) => {
      btn.classList.remove("-z-50");
    });
  });
}

function buttons() {
  const inputDiv = document.getElementById("inputDiv");
  const contactInput = document.getElementById("contactInput");
  const contactBtn = document.getElementById("contactBtn");
  const faq = document.querySelectorAll(".faq");
  const tabBtn = document.querySelectorAll(".btn");
  contactBtn.addEventListener("click", () => {
    const error = document.getElementById("error");
    const input = contactInput.value;
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (input === "") {
      error.innerText = "Whoops, make sure it's not empty";
      inputDiv.classList.add("outline", "outline-softRed", "bg-softRed");
      contactInput.classList.add("bg-error");
      error.classList.add("p-1");
    } else if (!regex.test(input)) {
      error.innerText = "Whoops, make sure it's an email address";
      error.classList.add("p-1");
      contactInput.classList.add("bg-error");
      inputDiv.classList.add("outline", "outline-softRed", "bg-softRed");
    } else {
      error.innerText = "";
      contactInput.value = "";
      error.classList.remove("p-1");
      inputDiv.classList.remove("outline", "outline-softRed", "bg-softRed");
    }
  });
  faq.forEach((faqElement) => {
    const path = faqElement.querySelector(".inactive-path");
    const svg = faqElement.querySelector(".inactive");
    const question = faqElement.querySelector(".question");
    const answer = faqElement.querySelector(".answer");
    answer.style.maxHeight = answer.scrollHeight + "px";
    question.addEventListener("click", () => {
      const hidden = answer.classList.contains("hidden");
      if (hidden) {
        answer.classList.remove("hidden");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
        setTimeout(() => {
          answer.classList.add("hidden");
        }, 300);
      }
      path.classList.toggle("stroke-softRed");
      svg.classList.toggle("transform");
      svg.classList.toggle("rotate-180");
    });
  });
  updateFeature(features[0]);
  tabBtn[0].classList.add("border-b-4", "border-softRed", "transition-border");
  tabBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      tabBtn.forEach((button) => {
        button.classList.remove("border-b-4", "border-softRed");
        button.classList.add("transition-border");
      });
      btn.classList.add("border-b-4", "border-softRed");
      updateFeature(features[i]);
    });
  });
}

const updateFeature = (feature) => {
  const featureTitle = document.getElementById("title");
  const featureParagraph = document.getElementById("paragraph");
  featureTitle.textContent = feature.title;
  featureParagraph.textContent = feature.paragraph;
};

window.addEventListener("DOMContentLoaded", () => {
  desktopMobileNav();
  buttons();
  mobileButtons();
});
window.addEventListener("resize", () => {
  desktopMobileNav();
  mobileButtons();
});

function desktopMobileNav() {
  const windowSize = window.innerWidth;
  if (windowSize >= 768) {
    desktopNav();
    desktopArticle();
  } else {
    mobileNav();
    mobileArticle();
  }
}

function desktopArticle() {
  const article = document.querySelector(".article");
  article.innerHTML = `
    <div class="flex flex-col justify-center md:gap-4 gap-3">
          <h3 class="text-2xl font-bold font-medium md:text-3xl">Bookmark in one click</h3>
          <p class="text-grayishBlue">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button class="h-fit w-fit rounded-md bg-softBlue p-2 text-white">
          More Info
        </button>
        </div>
  `;
}

function mobileArticle() {
  const article = document.querySelector(".article");
  article.innerHTML = `
       <div class="flex flex-col justify-center md:gap-4 gap-3">
          <h3 class="text-2xl font-bold font-medium md:text-3xl">Bookmark in one click</h3>
          <p class="text-grayishBlue">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
        </div>
  `;
}

function desktopNav() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
        <nav class="flex w-full justify-between items-center">
        <img src="./src/assets/images/logo-bookmark.svg" alt="" />
        <div class="flex gap-6">
              <ul class="flex text-xl font-normal uppercase items-center gap-6">
                <li class="">
                  <a class=" hover:text-softRed text-base transition-colors duration-300 ease-in-out" href="#">Features</a>
                </li>
                <li class="">
                  <a class=" hover:text-softRed text-base transition-colors duration-300 ease-in-out" href="#">Pricing</a>
                </li>
                <li class="">
                  <a class=" hover:text-softRed text-base transition-colors duration-300 ease-in-out" href="#">Contact</a>
                </li>
              </ul>
              <button
                class="md:px-4 transition-all duration-150 ease-in transform hover:outline text-base hover:text-softRed hover:outline-softRed hover:bg-white w-full rounded-md bg-softRed text-white p-2 text-2xl font-medium uppercase"
              >
                Login
              </button>
            </div>
      </nav>
  `;
}

function mobileNav() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
          <img src="./src/assets/images/logo-bookmark.svg" alt="" />
        <button id="menuBtn">
          <img src="./src/assets/images/icon-hamburger.svg" alt="" />
        </button>
        <dialog id="menu" class="absolute z-10 top-0 right-0 h-screen w-screen flex-col justify-between bg-veryDarkBlue p-8 text-center text-white transform translate-x-full transition-transform duration-300 ease-in-out">
          <div class="flex flex-col gap-10">
            <div class="flex w-full justify-between">
              <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    class="fill-white"
                    d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                    fill="#242A45"
                    fill-rule="nonzero"
                  />
                  <g>
                    <circle
                      class="fill-white"
                      fill="#5267DF"
                      cx="12.5"
                      cy="12.5"
                      r="12.5"
                    />
                    <path
                      class="fill-veryDarkBlue"
                      d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                      fill="#FFF"
                    />
                  </g>
                </g>
              </svg>
              <button id="menuCloseBtn">
                <img src="./src/assets/images/icon-close.svg" alt="" />
              </button>
            </div>
            <div class="flex flex-col gap-6">
              <ul class="flex flex-col text-2xl font-normal uppercase">
                <li class="border-y border-grayishBlue p-4">
                  <a class="z-0" href="#">Features</a>
                </li>
                <li class="border-b border-grayishBlue p-4">
                  <a class="z-0" href="#">Pricing</a>
                </li>
                <li class="border-b border-grayishBlue p-4">
                  <a class="z-0" href="#">Contact</a>
                </li>
              </ul>
              <button
                class="z-0 w-full rounded-md border border-2 p-2 text-2xl font-medium uppercase"
              >
                Login
              </button>
            </div>
          </div>
          <div>
            <ul class="flex justify-center gap-8 text-center">
              <li>
                <a href="#"><img src="./src/assets/images//icon-facebook.svg" alt="" /></a
                >
              </li>
              <li>
                <a href="#"><img src="./src/assets/images/icon-twitter.svg" alt="" /></a
                >
              </li>
            </ul>
          </div>
        </dialog>
  `;
}
