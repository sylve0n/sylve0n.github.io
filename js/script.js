$(document).ready(function(){
    var textContainer = document.getElementById("randomText");
    var sentences = ["what are you looking at", "doo doo doo", "hey, lookin good", "mixtape coming soon", "batteries not included", "stop"];
    var length = sentences.length;

    var randIndex = Math.floor(Math.random() * length);

    textContainer.innerHTML = sentences[randIndex];
});