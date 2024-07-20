function buttons() {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  const contactInput = document.getElementById("contactInput");
  const contactBtn = document.getElementById("contactBtn");
  const faq = document.querySelectorAll(".faq");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("flex");
    document.body.style.overflow = "hidden";
  });
  menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("flex");
    document.body.style.overflow = "auto";
  });
  contactBtn.addEventListener("click", () => {
    const error = document.getElementById("error");
    const input = contactInput.value;
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (input === "") {
      error.innerText = "Whoops, make sure it's not empty";
      contactInput.style.backgroundImage = "url('./images/icon-error.svg')";
      contactInput.style.backgroundRepeat = "no-repeat";
      contactInput.style.backgroundPosition = "right 5% center";
    } else if (!regex.test(input)) {
      console.log("invalid");
      error.innerText = "Whoops, make sure it's an email";
      contactInput.style.backgroundImage = "url('./images/icon-error.svg')";
      contactInput.style.backgroundRepeat = "no-repeat";
      contactInput.style.backgroundPosition = "right 5% center";
    } else {
      error.innerText = "";
      contactInput.value = "";
      contactInput.style.backgroundImage = "";
    }
  });
  faq.forEach((faq) => {
    const question = faq.querySelector(".question");
    const answer = faq.querySelector(".answer");
    question.addEventListener("click", () => {
      answer.classList.toggle("hidden");
    });
  });
}

buttons();

const features = [
  {
    button: "Simple Bookmarking",
    info: "More Info",
    title: "Features",
    paragraph:
      "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  },
  {
    button: "Speedy Searching",
    info: "More Info",
    title: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    button: "Easy Sharing",
    info: "More Info",
    title: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
