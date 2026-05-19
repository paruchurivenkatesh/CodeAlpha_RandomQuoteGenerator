const quotes = [

    {
        quote: "Believe in yourself and you will shine bright.",
        author: "Motivation"
    },

    {
        quote: "Dream big and never give up.",
        author: "Inspiration"
    },

    {
        quote: "Every day is a new adventure.",
        author: "Kids World"
    },

    {
        quote: "Be kind, be happy, be you.",
        author: "Smile Club"
    },

    {
        quote: "Learning is fun when you enjoy it.",
        author: "Education"
    },

    {
        quote: "Small steps every day make big success.",
        author: "Growth"
    },

    {
        quote: "Your imagination can change the world.",
        author: "Creativity"
    }

];

const quoteText = document.getElementById("quote");

const authorText = document.getElementById("author");

const button = document.getElementById("btn");

let lastIndex = -1;

function generateQuote() {

    let randomIndex;

    do {

        randomIndex = Math.floor(
            Math.random() * quotes.length
        );

    } while(randomIndex === lastIndex);

    lastIndex = randomIndex;

    quoteText.innerText =
    `"${quotes[randomIndex].quote}"`;

    authorText.innerText =
    `- ${quotes[randomIndex].author}`;
}

button.addEventListener(
    "click",
    generateQuote
);

window.onload = generateQuote;
