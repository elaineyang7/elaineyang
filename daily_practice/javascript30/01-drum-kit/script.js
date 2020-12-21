function stopTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //注意：这里的querySelector里面是`号，不是单引号
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!key) return;
    if (!audio) return;
    key.addEventListener('transitionend', stopTransition);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener('keydown', playAudio);
