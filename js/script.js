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
  //Dynamic random based on the number of phrases in the array
  let random = Math.floor(Math.random() * QuotesArray.length);
  //Use random to select a phrase
  let randomPhrase = QuotesArray[random];
  //Return the value of randomPhrase
  return randomPhrase;
}
//Function for generating a random hex number for new random bG colors
function getRandomHex(){
  //Random generator that returns a number no less or more than 6 digits long.
  let randomHex = Math.floor(Math.random()*900000) + 100000;
  //Return the value or randomHex
  return randomHex;
}
//Function for setting up the display of new quotes
function printQuote(){
  //save backdrop color from function
  let backdropColor = getRandomHex();
  //apply background color
  document.querySelector('body').style.backgroundColor = `#${backdropColor}`;
  //save new phrase to variable
  let newPhrase = getRandomQuote(quotes);
  //select quotebox
  let quoteBox = document.querySelector('.quote');
  //select sourcebox
  let sourceBox = document.querySelector('.source');
  //aaply newPhrase to html dom
  quoteBox.innerHTML = newPhrase.quote;
  //apply new source to html dom
  sourceBox.innerHTML = newPhrase.source;
  //
  if (newPhrase.citation){
    //create the span for citation
    let citation = document.createElement('SPAN');
    //give span a class of citation
    citation.classList.add("citation");
    //create text for citation
    let citeText = document.createTextNode(` ${newPhrase.citation}`);
    //append citation to span
    citation.appendChild(citeText);
    //append span to the source element
    sourceBox.appendChild(citation);
  }

  if (newPhrase.year){
    //create the span for year
    let year = document.createElement('SPAN');
    //give span a class of year
    year.classList.add("year");
    //create text for year
    let citeYear = document.createTextNode(` ${newPhrase.year},`);
    //append year to span
    year.appendChild(citeYear);
    //append span to the source element
    sourceBox.appendChild(year);
  }

  sourceBox.append(` (Category: ${newPhrase.category})`);
}


//Event listener for button click on loadQuote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
///interval timer for the printquote
setInterval(printQuote, 20000);
