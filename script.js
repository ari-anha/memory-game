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
        },
    ]

    const grid = document.querySelector(".grid")

    function createBoard() {
        return cardArray.map(x => {
            let card = document.createElement("img");
            card.setAttribute("src", "images/background.jpg");
            card.setAttribute("data-id", x);
            //card.addEventListener("click", flipcard)
            grid.appendChild(card);
        })

    }

    createBoard();
})