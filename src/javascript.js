function displayQuote(response) {
  console.log("quote genereted");
  new Typewriter("#quotes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");

  let apiKey = "dec30ab936f6fe43ot4b0dead25ade10";
  let context =
    "You are a powerful AI assistant who loves to generate a motivational positve quote. Make sure to follow the user instructions.Sign the quote using a <br /> with 'SheCodes AI' inside a <strong> element at the end of the quote";
  let prompt = `Generate a positive motivational quote about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generate quote");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generetor");
quoteFormElement.addEventListener("submit", generateQuote);
