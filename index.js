let quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        writer : "Nelson Mandela"
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        writer : "Steve Jobs"
    },
    {
        quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        writer : "Oprah Winfrey"
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        writer : "James Cameron"
    },
    {
        quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        writer : "Mother Teresa"
    },
    {
        quote : "It is during our darkest moments that we must focus to see the light.",
        writer : "Aristotle"
    },
    {
        quote : "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        writer : "Ralph Waldo Emerson"
    },
    {
        quote : "In the end, it's not the years in your life that count. It's the life in your years.",
        writer : "Abraham Lincoln"
    },
    {
        quote : "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        writer : "Marilyn Monroe"
    },
    {
        quote : "Life is 10% what happens to me and 90% of how I react to it.",
        writer : "Charles Swindoll"
    }
];

let quoteDisplay = document.getElementById("quote"); 
let writerDisplay = document.getElementById("writer"); 
let btn = document.getElementById("btn");
let image = document.getElementById('myImage');

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*quotes.length);
    quoteDisplay.innerHTML = quotes[random].quote;
    writerDisplay.innerHTML = "- " + quotes[random].writer;
    image.src = "https://source.unsplash.com/random";
});