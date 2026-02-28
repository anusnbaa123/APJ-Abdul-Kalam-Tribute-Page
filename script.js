const quotes = [
    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    "If you want to shine like a sun, first burn like a sun.",
    "Excellence is a continuous process and not an accident.",
    "Great dreams of great dreamers are always transcended."
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerText = quotes[randomIndex];
}