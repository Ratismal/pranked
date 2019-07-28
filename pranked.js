function randInt(max) {
  return Math.floor(Math.random() * max);
}

void function loadAudio() {
  audio.oncanplay = () => {
    // wow
    const audio = document.getElementById('audio');
    audio.play();
  };
}();

void function loadAirhorn() {
  const audio = document.getElementById('horn');
  const audio2 = document.getElementById('horn2');
  const audio3 = document.getElementById('horn3');
  function airhorn() {
    const horns = document.querySelectorAll('.airhorn');

    for (const horn of horns) {
      horn.classList.add('visible');
    }
    audio.play();
    setTimeout(() => {
      audio2.play();
    }, 200 + randInt(200));
    setTimeout(() => {
      audio3.play();
    }, 400 + randInt(300));
    setTimeout(() => {
      for (const horn of horns) {
        horn.classList.remove('visible');
      }
    }, 3000);
  }

  let counts = 0;
  const interval = setInterval(() => {
    if (++counts >= 5) {
      if (randInt(10) === 1) {
        airhorn();
        counts = 0;
      }
    }
  }, 1000);
}();