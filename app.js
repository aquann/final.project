var host = "api.giphy.com";
var path = "/v1/gifs/random";
var apiKey = "LrbR4KEfv97Es2M0bc2vatRnvtC2knWW";
var GIFset1 = ["007", "rick", "", ""]
var GIFset2 = ["", "", "", ""]
var GIFset3 = ["", "", "", ""]
var GIFset4 = ["", "", "", ""]
var GIFset5 = ["", "", "", ""]
var GIFset6 = ["", "", "", ""]
var GIFset7 = ["", "", "", ""]
var GIFset8 = ["", "", "", ""]
var GIFset9 = ["", "", "", ""]
var GIFset10 = ["", "", "", ""]

var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=";

var HintButtons = document.getElementsByClassName("HintButton")
for (let i = 0; i < HintButtons.length; i++) {
    var b = HintButtons[i];
    console.log(b.previousSibling)
    b.onclick = function () {
        b.previousElementSibling.style.display = "block"
    }

}

// shows random GIF
function showGif() {
    $.getJSON(api, function (giphy) {
        $.getJSON(bkg, function (bkgGiphy) {
            audio.src = tracks[trackCount];
            audio.play();
            trackCount++;
            if (trackCount >= tracks.length)
                trackCount = 0;
            var gifUrl = giphy.data.image_original_url;
            var bkurl = gifUrl = giphy.data.image_original_url;

            var gifUrl = giphy.data.image_original_url;
            var bkgUrl = bkgGiphy.data.image_original_url;


        })


    });
}

// remove the GIF
function removeGif() {
    $('#img-container img').remove();
}

// switches GIF
function changeGif() {
    // previous GIF
    removeGif();
    // next GIF
    showGif();
}


$('#submit').click(function () {
    console.log("All done!");
});
