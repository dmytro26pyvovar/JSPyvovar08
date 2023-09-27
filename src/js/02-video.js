import Player from '@vimeo/player';
import throttle from "lodash.throttle";

document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);
    let currentTime = 0;
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        currentTime = parseFloat(savedTime);
    }
      player.setCurrentTime(currentTime);
    player.on('timeupdate', function (data) {
        currentTime = data.seconds; 
        saveTime(currentTime);
    });
    const saveTime = throttle(function (time) {
        localStorage.setItem('videoplayer-current-time', time);
    }, 1000);
});