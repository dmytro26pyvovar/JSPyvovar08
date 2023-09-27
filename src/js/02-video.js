import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
console.log(iframe)
const onPlay = function (data) {
    iframe.on('timeupdate',);
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
};

document.addEventListener('DOMContentLoaded', function () {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(parseFloat(savedTime));
    }
});
const saveTime = throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
}, 1000);

iframe.on('timeupdate', function (data) {
    saveTime(currentTime);
});