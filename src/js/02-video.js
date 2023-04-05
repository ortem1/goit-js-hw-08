import Player from '@vimeo/player';

const vimeo = new Player('vimeo-player')

document.addEventListener('event',  setTime())

vimeo.on('timeupdate', () => {
    vimeo.getCurrentTime().then(r => localStorage.setItem("videoplayer-current-time", r))
})

function setTime() {
    let saveTime = localStorage.getItem("videoplayer-current-time")
    if (!saveTime) {
        return
    }

    vimeo.setCurrentTime(saveTime)
}