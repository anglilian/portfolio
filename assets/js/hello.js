const carouselText = [
  {text: "Hello there!", color: "#000090"}
]


$(document).ready(async function(){
    typeSentence("Hello there!", "#hello");
})

async function typeSentence(sentence, eleRef, delay = 110) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
