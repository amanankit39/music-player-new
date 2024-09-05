document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progress = document.getElementById('progress');
    
    let tracks = [
        { title: 'SHAKIRA', artist: 'Artist 1', src: 'song1.mp3' },
        { title: 'SHAKIRA', artist: 'Artist 2', src: 'song2.mp3' },
        { title: 'EDSHARAN', artist: 'Artist 3', src: 'song3.mp3' }
    ];
    
    let currentTrackIndex = 0;

    function loadTrack(index) {
        const track = tracks[index];
        audio.src = track.src;
        document.getElementById('track-title').textContent = track.title;
        document.getElementById('track-artist').textContent = track.artist;
    }

    function playTrack() {
        audio.play();
        playButton.disabled = true;
        pauseButton.disabled = false;
    }

    function pauseTrack() {
        audio.pause();
        playButton.disabled = false;
        pauseButton.disabled = true;
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }

    function updateProgress() {
        if (audio.duration) {
            const value = (audio.currentTime / audio.duration) * 100;
            progress.value = value;
        }
    }

    function seek() {
        const newTime = (progress.value / 100) * audio.duration;
        audio.currentTime = newTime;
    }

    playButton.addEventListener('click', playTrack);
    pauseButton.addEventListener('click', pauseTrack);
    nextButton.addEventListener('click', nextTrack);
    prevButton.addEventListener('click', prevTrack);
    audio.addEventListener('timeupdate', updateProgress);
    progress.addEventListener('input', seek);

    loadTrack(currentTrackIndex);
});