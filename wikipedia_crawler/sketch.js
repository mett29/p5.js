let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

let userInput;

let counter = 0;

function setup() {
    noCanvas();
    userInput = select('#userinput');
    searchButton = select('#searchBtn');
    searchButton.mouseClicked(startSearch);

    function startSearch() {
        counter = 0;
        goWiki(userInput.value());
    }
    
    function goWiki(term) {
        counter = counter + 1;
        if (counter < 10) {
            let url = searchUrl + term;
            loadJSON(url, gotSearch, 'jsonp');
        }
    }
    
    function gotSearch(data) {
        let len = data[1].length;
        let index = floor(random(len));
        var title = data[1][index];
        title = title.replace(/\s+/g, '_');
        createDiv("<b>" + counter + ") " + title + "</b>");
        //console.log('Quering: ' + title);
        let url = contentUrl + title;
        loadJSON(url, gotContent, 'jsonp');
    }
    
    function gotContent(data) {
        let content = data[2][0];
        createDiv("<i>" + content + "</i>");
        createDiv("-------------------------------");
        let wordRegex = /\b\w{4,}\b/g;
        var words = content.match(wordRegex);
        var word = random(words);
        goWiki(word);
    }
}