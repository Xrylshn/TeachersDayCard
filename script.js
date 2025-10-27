(function () {
    const envelope = document.getElementById('envelope');
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('audio');

    const card = envelope ? envelope.parentElement.querySelector('.card') : null;

    const toggleCard = () => {
        if (!envelope || !card) return;

        const isOpen = envelope.classList.toggle('open');
        
        envelope.setAttribute('aria-expanded', String(isOpen));
        card.setAttribute('aria-hidden', String(!isOpen));
    };

    if (envelope) {
        envelope.addEventListener('click', toggleCard);
    }

    if (envelope) {
        envelope.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard();
            }
        });
    }

    if (playButton && audio) {
        playButton.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause Audio';
                playButton.setAttribute('aria-pressed', 'true');
            } else {
                audio.pause();
                audio.currentTime = 0; 
                playButton.textContent = 'Play Audio';
                playButton.setAttribute('aria-pressed', 'false');
            }
        });

        audio.addEventListener('ended', function () {
            playButton.textContent = 'Play Audio';
            playButton.setAttribute('aria-pressed', 'false');
        });
    }
})();