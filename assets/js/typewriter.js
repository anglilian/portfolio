const carouselText = [
  {text: "A Digital Artist", color: "#000090", tag: "digital-art"},
    {text: "An Educator", color: "#1D00FF", tag: "education"},
  {text: "A Writer", color: "#8D04FB", tag: "writing"},
{text: "AN Event Organiser", color: "#FF4EB1", tag: "events"},
    {text: "A Coder", color: "#FF9669", tag: "coding"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1000);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
