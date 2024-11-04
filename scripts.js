function loadQuote(category) {
    fetch(`quote-categories/quotes-${category}.json`)
        .then(response => response.json())
        .then(quotes => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            document.getElementById('quoteText').textContent = `"${quote.text}"`;
            document.getElementById('quoteAuthor').textContent = `- ${quote.author}`;
        })
    .catch(error => {
        console.error("Error fetching quotes:", error);
        document.getElementById('quoteText').textContent = "An error occured. Please try again.";
        document.getElementById('quoteAuthor').textcontent = "";
    });
}