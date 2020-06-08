document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: "Poppy1",
            img: "images/poppy1.jpg"
        },
        {
            name: "Poppy1",
            img: "images/poppy1.jpg"
        },
        {
            name: "Poppy2",
            img: "images/poppy2.jpg"
        },
        {
            name: "Poppy2",
            img: "images/poppy2.jpg"
        },
        {
            name: "Poppy3",
            img: "images/poppy3.jpg"
        },
        {
            name: "Poppy3",
            img: "images/poppy3.jpg"
        },
        {
            name: "Poppy4",
            img: "images/poppy4.jpg"
        },
        {
            name: "Poppy4",
            img: "images/poppy4.jpg"
        },
        {
            name: "Poppy5",
            img: "images/poppy5.jpg"
        },
        {
            name: "Poppy5",
            img: "images/poppy5.jpg"
        },
        {
            name: "Poppy6",
            img: "images/poppy6.jpg"
        },
        {
            name: "Poppy6",
            img: "images/poppy6.jpg"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    var cardsChosen = [];
    var cardsChosenId = [];
    const cardsWon = [];


    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {

        let card = document.createElement("img");
        card.setAttribute("src", "images/background.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
      };
    }

    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute("src", "images/background.jpg");
            cards[optionTwoId].setAttribute("src", "images/background.jpg");
            alert("You have clicked the same image!");

        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert("You have found a match!");
            cards[optionOneId].setAttribute("src", "images/blank.jpg");
            cards[optionTwoId].setAttribute("src", "images/blank.jpg");
            cards[optionOneId].removeEventListener("src", flipCard);
            cards[optionTwoId].removeEventListener("src", flipCard);

            cardsWon.push(cardsChosen);

        } else {
            cards[optionOneId].setAttribute("src", "images/background.jpg");
            cards[optionTwoId].setAttribute("src", "images/background.jpg");
            alert("Oops, try again!");
        };
        
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You found them all!"
        };
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id');
    
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 200)
        };
    }
  
    createBoard()
});