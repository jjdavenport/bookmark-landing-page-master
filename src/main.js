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

function buttons() {
  const inputDiv = document.getElementById("inputDiv");
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  const contactInput = document.getElementById("contactInput");
  const contactBtn = document.getElementById("contactBtn");
  const faq = document.querySelectorAll(".faq");
  const tabBtn = document.querySelectorAll(".btn");
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
      inputDiv.classList.add("outline", "outline-softRed", "bg-softRed");
      error.classList.add("p-1");
    } else if (!regex.test(input)) {
      console.log("invalid");
      error.innerText = "Whoops, make sure it's an email";
      error.classList.add("p-1");
      inputDiv.classList.add("outline", "outline-softRed", "bg-softRed");
    } else {
      error.innerText = "";
      contactInput.value = "";
      error.classList.remove("p-1");
      inputDiv.classList.remove("outline", "outline-softRed", "bg-softRed");
    }
  });
  faq.forEach((faq) => {
    const path = faq.querySelector(".inactive-path");
    const svg = faq.querySelector(".inactive");
    const question = faq.querySelector(".question");
    const answer = faq.querySelector(".answer");
    question.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      path.classList.toggle("stroke-softRed");
      svg.classList.toggle("transform");
      svg.classList.toggle("rotate-180");
    });
  });
  updateFeature(features[0]);
  tabBtn[0].classList.add("border-b-4", "border-softRed");
  tabBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      tabBtn.forEach((button) =>
        button.classList.remove("border-b-4", "border-softRed")
      );
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

buttons();
