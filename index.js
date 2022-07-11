const adviceNumberSpan = document.querySelector("#advice-number");
const adviceTextParagraph = document.querySelector("#advice");
const callButton = document.querySelector(".dice-wrap");

const getNewAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  adviceNumberSpan.textContent = data.slip.id;
  adviceTextParagraph.innerHTML = `"${data.slip.advice}"`;
};

getNewAdvice();

callButton.addEventListener("click", getNewAdvice);
