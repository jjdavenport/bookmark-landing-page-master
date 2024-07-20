function buttons() {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("flex");
    document.body.style.overflow = "hidden";
  });
  menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("flex");
    document.body.style.overflow = "auto";
  });
}

buttons();

const arr = [
  {
    info: "More Info",
    title: "Intelligent search",
    para: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    info: "More Info",
    title: "Share your bookmarks",
    para: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
