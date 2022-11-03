const { BrowserWindow } = require("electron");

var video = document.querySelector('video');
var juice = document.querySelector('orange-juice');
var btn = document.querySelector('play-pause');

function togglePlayPause() {
    if (video.paused) {
        btn.className = "pause";
        video.play;
    }
else{
        btn.className = "play";
        video.pause;
    }
}

btn.onclick = function () {
    alert("play !!!")
    togglePlayPause();
}

video.addEventListener('timeupdate', function() {
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";

    if (video.ended) {
        BrowserWindow.className = "play";
    }
})


