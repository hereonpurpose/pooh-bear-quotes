window.onload = writeQuote; //This works as expected.

var randomNum = Math.floor(Math.random() * 9);

/* Hard-coded array of quotes to display */
var allTheQuotes = ["Some people care too much. I think it's called love.", 
"You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.", 
"Think, think, think.", 
"People say nothing is impossible, but I do nothing every day.", 
"A bear, however hard he tries, grows tubby without exercise.",
"It's not much of a tail, but I'm sort of attached to it.", 
"My spelling is Wobbly. It's good spelling but it Wobbles, and the letters get in the wrong places.",
"It's so much more friendly with two.", 
"You're braver than you believe and stronger and smarter than you think."];

document.getElementById("changeQuote").onclick = function () {writeQuote()};

function writeQuote() {
	var tweetHref = "http://www.twitter.com/home/?status=".concat(allTheQuotes[randomNum]," - A. A. Milne");

	document.getElementById("quoteTextGoesHere").innerHTML = allTheQuotes[randomNum];
	document.getElementById("tweetLink").href = tweetHref;
	randomNum = Math.floor(Math.random() * 9);	
}