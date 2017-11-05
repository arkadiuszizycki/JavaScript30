const keyDownHandler = (e) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keyUpHandler = (e) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return;
    key.classList.remove('playing');    
}

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);