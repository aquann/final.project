var host = "api.giphy.com";
var path = "/v1/gifs/random";
var apiKey = "LrbR4KEfv97Es2M0bc2vatRnvtC2knWW";
var tag = "";
var tag2 = "";
var tag3 = "";
var tag4 = "";
var tag5 = "";
var tag6 = "";
var tag7 = "";
var tag8 = "";
var tag9 = "";
var tag10 = "";
var tag11 = "";
var tag12 = "";
var tag13 = "";
var tag14 = "";
var tag15 = "";
var tag16 = "";
var tag17 = "";
var tag18 = "";
var tag19 = "";
var tag20 = "";
var tag21 = "";
var tag22 = "";
var tag23 = "";
var tag24 = "";
var tag25 = "";
var tag26 = "";
var tag27 = "";
var tag28 = "";
var tag29 = "";
var tag30 = "";
var tag31 = ""; 
var tag32 = "";
var tag33 = "";
var tag34 = "";
var tag35 = "";
var tag36 = "";
var tag37 = "";
var tag38 = "";
var tag39 = "";
var tag40 = "";

var api = "https://" + host + path + "?api_key=" + apiKey + "&tag=" + tag;
var bkg = "https://" + host + path + "?api_key=" + apiKey + "&tag=" + tag2;

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

            $('#img-container').prepend('<img src="' + gifUrl + '">');
            document.body.style.backgroundImage = 'url(' + bkgUrl + ')';
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

// changes GIF when clicked on button
$("button").click(function () {
    changeGif();
});
