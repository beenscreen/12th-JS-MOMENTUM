const quotes = [
  {
    quote:
      "Keep your face always toward the sunshine - and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },

  {
    quote: "In the end, we only regret the chances we didn't take.",
    author: "Lewis Carroll",
  },

  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },

  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },

  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },

  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },

  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },

  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },

  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
];

const div = document.querySelector("#quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector("#quote span:first-child");
quote.innerText = `${todaysQuote.quote} \n`;
const author = document.querySelector("#quote span:last-child");
author.innerText = `- ${todaysQuote.author} -`;