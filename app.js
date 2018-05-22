var host = "api.giphy.com";
var path = "/v1/gifs/random";
var apiKey = "LrbR4KEfv97Es2M0bc2vatRnvtC2knWW";
var GIFset1 = [
    ["007", "thor", "transformers", "thanos"],
    ["dancing", "fire", "milk", "pinkpanther"],
    ["ballons", "pokemon", "toys", "sandwhich"],
    ["godfather", "crackers", "scary", "tall"],
    ["salt", "sun", "indianajones", "moon"],
    ["chocolate", "starwars", "spiderman", "screaming"],
    ["orange", "laughing", "screws", "freshprince"],
    ["cats", "dears", "seals", "lionking"],
    ["missionimpossible", "dogs", "apples", "octopus"],
    ["trump", "sky", "michaelmyers", "hats"]
];

var submit = ["winning","losing"];

var score = 0;

var answers = ["007", "pinkpanther", "pokemon", "godfather", "indianajones", "starwars", "freshprince", "lionking", "missionimpossible", "michaelmyers"];

var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=";

var count = 0;

function gifs() {
    const gifArray = GIFset1[count];
    for (let j = 0; j < gifArray.length; j++) {
        const gifTag = gifArray[j];
        $.getJSON(api + gifTag, function (json) {
            console.log(json.data.image_url);
            if (json.data.length > 0)
                console.log(json);
            var elem = document.getElementById('q' + count);
            var img = new Image();
            img.onclick = function () {
               img.style.borderStyle="dotted";
                if (gifTag == answers[count]) {
                    score++;
                } else {
                    score--;
                }
            }
            console.log(score);
            img.src = json.data.image_url;
            img.width = "100";
            elem.appendChild(img);
        });
    }
}

gifs();
var questions = document.getElementsByClassName("question");
console.log(questions);
next.onclick = function () {
    console.log(questions[count])
    questions[count].style.display = "none";
    count++;
    questions[count].style.display = "block";
    gifs();
}

var HintButtons = document.getElementsByClassName("HintButton")
for (let i = 0; i < HintButtons.length; i++) {
    var b = HintButtons[i];
    b.onclick = function () {
        this.previousElementSibling.style.display = "block"
    }

}

fin.onclick = function(){
    console.log(score);
    g = document.createElement('div');
    g.setAttribute("id", "Div1").innerText = "Result is " + score;
    
    
}