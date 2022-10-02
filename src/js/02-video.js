import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(saveData, 1000));

function saveData(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('play', data => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== savedTime) {
    player.setCurrentTime(savedTime);
  }
});
