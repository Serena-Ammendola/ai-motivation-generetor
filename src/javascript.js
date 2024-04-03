function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quotes", {
    strings: "Your self worth is determined by you.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generetor");
quoteFormElement.addEventListener("submit", generateQuote);
