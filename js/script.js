//Random Quote Generator, first project for FSJS TD

//Array of objects each with multiple properties
var quotes = [
    {
        quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        source: 'Winston S. Churchill',
        category: 'Success'
    },
    {
        quote: 'Never give in except to convictions of honor and good sense.',
        source: 'Winston S. Churchill',
        category: 'Perseverence'
    },
    {
        quote: 'Do one thing every day that scares you.',
        source: 'Source Unknown',
        category: 'Success'
    },
    {
        quote: 'Fall seven times and stand up eight.',
        source: 'Japanese Proverb',
        category: 'Perseverence'
    },
    {
        quote: 'In order to succeed, we must first believe that we can.',
        source: 'Nikos Kazantzakis',
        category: 'Success'
    },
    {
        quote: 'If you really look closely, most overnight successes took a long time.',
        source: 'Steve Jobs',
        category: 'Determination'
    },
    {
      quote: 'I ran. I ran until my muscles burned and my veins pumped battery acid. Then I ran some more.',
      source:'Tyler Durden',
      citation:'imdb',
      year:'1999',
      category: 'Perseverence'
    },
];


//Function for getting the arondom quote from the array of objects
function getRandomQuote(QuotesArray){
  let random = Math.floor(Math.random() * QuotesArray.length);
  let randomPhrase = QuotesArray[random];
  return randomPhrase;
}//end getRandomQuote


//Function for generating a hex number for new random bG colors
function randomBgHex(){
  let randomHex = Math.floor(Math.random()*900000) + 100000;
  document.querySelector('body').style.backgroundColor = `#${randomHex}`;
}//end randomBgHex


//Function for setting up the display of new quotes
function printQuote(){
  let newPhrase = getRandomQuote(quotes);
  let quoteBox = document.querySelector('#quote-box');
  let fullQuote = `<p class="quote">${newPhrase.quote}</p>`;

  //Build out the display
  fullQuote += `<p class="source">${newPhrase.source}`;
  if (newPhrase.citation){
    fullQuote += `<span class="citation">${newPhrase.citation}</span>`;
  }
  if (newPhrase.year){
    fullQuote += `<span class="year">${newPhrase.year}</span>`;
  }
  if (newPhrase.category){
    fullQuote += `<span class="category"> (Category: ${newPhrase.category})</span>`;
  }
  fullQuote += `</p>`;
  
  quoteBox.innerHTML = fullQuote;
  randomBgHex();
}//end printQuote


//Event listener for button click on loadQuote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
///interval timer for the printquote
setInterval(printQuote, 20000);
