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
var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=";
for (let i = 0; i < GIFset1.length; i++) {
    const gifArray = GIFset1[i];
    for (let j = 0; j < gifArray.length; j++)  {
        const gifTag = gifArray[j];
       $.getJSON(api + gifTag, function(json) {
           console.log(json.data.image_url);
           if (json.data.length > 0) 
                console.log(json);
           var elem = document.getElementById('q'+i);
           console.log(elem);
       });
    }
}
for (let i = 0; i < HintButtons.length; i++) {
	const img = json.data[i];
	const imgElem = $('&lt;img&gt;')
		.attr('src', img.images.downsized.url);
	$('body').append(imgElem);
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}