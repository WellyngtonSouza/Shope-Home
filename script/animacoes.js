let configuracao = {
  stringsElement: "#typed-strings",
  typeSpeed: 40,
};
let typed = new Typed("#typed", configuracao);

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".title", { delay: 80 });
ScrollReveal().reveal(".title-container h1", { delay: 500 });
ScrollReveal().reveal(".title-container p", { delay: 650 });
ScrollReveal().reveal(".flex-content", { delay: 600 });
