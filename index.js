const cards = document.querySelectorAll(".card");
let matched = 0; 
let cardone, cardtwo;
let disabledeck = false;

function flipcard({target: clickedcard}) {
  if(cardone !== clickedcard && !disabledeck) {
    clickedcard.classList.add("flip");
    if(!cardone) {
        return cardone = clickedcard;
    }

    cardtwo = clickedcard;
    disabledeck = true; 
    let cardoneimg = cardone.querySelector(".back-view img").src,
    cardtwoimg = cardtwo.querySelector(".back-view img").src;
    matchcards(cardoneimg, cardtwoimg);
  }
}

function matchcards(img1, img2) {
  if (img1 === img2) {
    matched++;
    if (matched == 8) {
      setTimeout(() => {
        shufflecard0();
      }, 1000);
    }

    cardone.removeEventListener("click", flipcard);
    cardtwo.removeEventListener("click", flipcard);
    cardone = cardtwo = "";
    disabledeck = false;
    return;
  }
  setTimeout(() => {
    cardone.classList.add("shake");
    cardtwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardone.classList.remove("shake", "flip");
    cardtwo.classList.remove("shake", "flip");
    cardone = cardtwo = "";
    disabledeck = false;
  }, 1200);
}

function shufflecard0() {
  matched = 0;
  disabledeck = false;
  cardone = cardtwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(function(a, b) {
    return Math.random() > 0.5 ? 1 : -1;
  });
  let cards = document.querySelectorAll(".card");
  cards.forEach(function(card, i) {
    card.classList.remove("flip");
    let imgtag = card.querySelector(".back-view img");
    imgtag.src = `images/img-6.png`;
    card.addEventListener("click", flipcard);
  });
}

shufflecard0();
cards.forEach(card => {
  card.addEventListener("click", flipcard);
});
