// ============================================================
// SOUNDBOARD CONFIGURATION - CUSTOMIZE HERE
// ============================================================
// Add or modify sounds by editing the soundList array below
// Sound files should be placed in the /sounds/ folder
// 
// Format: { name: "Display Name", file: "filename.mp3" }
// Example: { name: "Laugh", file: "laugh.mp3" }
// ============================================================

const soundList = [
    { name: "Suara 1", file: "sound1.mp3" },
    { name: "Suara 2", file: "sound2.mp3" },
    { name: "Suara 3", file: "sound3.mp3" },
    { name: "Suara 4", file: "sound4.mp3" },
    { name: "Suara 5", file: "sound5.mp3" },
    { name: "Suara 6", file: "sound6.mp3" },
    { name: "Suara 7", file: "sound7.mp3" },
    { name: "Suara 8", file: "sound8.mp3" },
];

// ============================================================
// SOUNDBOARD APPLICATION
// ============================================================

class Soundboard {
    constructor() {
        this.sounds = [];
        this.currentlyPlaying = null;
        this.currentVolume = 70;
        this.init();
    }

    init() {
        this.createSoundElements();
        this.createSoundButtons();
        this.attachEventListeners();
        this.updateVolumeDisplay();
    }

    createSoundElements() {
        const audioContainer = document.getElementById('audio-container');
        
        soundList.forEach((sound, index) => {
            const audio = document.createElement('audio');
            audio.id = `audio-${index}`;
            audio.src = `sounds/${sound.file}`;
            audio.addEventListener('timeupdate', () => this.updateProgress(index));
            audio.addEventListener('ended', () => this.onSoundEnded(index));
            audio.addEventListener('loadedmetadata', () => this.updateDuration(index));
            audioContainer.appendChild(audio);
            
            this.sounds.push({
                index,
                name: sound.name,
                audio,
                button: null
            });
        });
    }

    createSoundButtons() {
        const soundboard = document.querySelector('.soundboard');
        soundboard.innerHTML = '';
        
        this.sounds.forEach((sound) => {
            const button = document.createElement('div');
            button.className = 'sound-button';
            button.dataset.sound = sound.index;
            button.innerHTML = `
                <span class="button-name">${sound.name}</span>
                <span class="duration">00:00</span>
            `;
            
            button.addEventListener('click', () => this.playSound(sound.index));
            soundboard.appendChild(button);
            
            sound.button = button;
        });
    }

    playSound(index) {
        const sound = this.sounds[index];
        
        // Stop previous sound if playing
        if (this.currentlyPlaying !== null && this.currentlyPlaying !== index) {
            this.stopSound(this.currentlyPlaying);
        }
        
        // If clicking the same button, toggle play/pause
        if (this.currentlyPlaying === index) {
            if (sound.audio.paused) {
                sound.audio.play();
            } else {
                sound.audio.pause();
            }
            return;
        }
        
        // Play new sound
        this.currentlyPlaying = index;
        sound.audio.currentTime = 0;
        sound.audio.volume = this.currentVolume / 100;
        sound.audio.play();
        
        // Update UI
        this.updatePlayingDisplay();
        sound.button.classList.add('playing');
    }

    stopSound(index) {
        const sound = this.sounds[index];
        sound.audio.pause();
        sound.audio.currentTime = 0;
        sound.button.classList.remove('playing');
    }

    stopAllSounds() {
        this.sounds.forEach((sound) => {
            sound.audio.pause();
            sound.audio.currentTime = 0;
            sound.button.classList.remove('playing');
        });
        this.currentlyPlaying = null;
        document.getElementById('playing-sound').textContent = 'None';
        document.getElementById('playing-time').textContent = '00:00';
        document.getElementById('total-time').textContent = '00:00';
        document.getElementById('progress-fill').style.width = '0%';
    }

    onSoundEnded(index) {
        const sound = this.sounds[index];
        sound.button.classList.remove('playing');
        if (this.currentlyPlaying === index) {
            this.currentlyPlaying = null;
            document.getElementById('playing-sound').textContent = 'None';
            document.getElementById('progress-fill').style.width = '0%';
        }
    }

    updatePlayingDisplay() {
        const sound = this.sounds[this.currentlyPlaying];
        document.getElementById('playing-sound').textContent = sound.name;
    }

    updateProgress(index) {
        if (this.currentlyPlaying !== index) return;
        
        const sound = this.sounds[index];
        const audio = sound.audio;
        
        if (audio.duration) {
            const currentTime = this.formatTime(audio.currentTime);
            const duration = this.formatTime(audio.duration);
            
            document.getElementById('playing-time').textContent = currentTime;
            document.getElementById('total-time').textContent = duration;
            
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            document.getElementById('progress-fill').style.width = progressPercent + '%';
        }
    }

    updateDuration(index) {
        const sound = this.sounds[index];
        const duration = this.formatTime(sound.audio.duration);
        if (sound.button) {
            sound.button.querySelector('.duration').textContent = duration;
        }
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    setVolume(value) {
        this.currentVolume = value;
        this.sounds.forEach(sound => {
            sound.audio.volume = value / 100;
        });
        document.getElementById('volume-value').textContent = value + '%';
    }

    updateVolumeDisplay() {
        document.getElementById('volume-slider').value = this.currentVolume;
        document.getElementById('volume-value').textContent = this.currentVolume + '%';
    }

    attachEventListeners() {
        // Stop All button
        document.getElementById('stop-all-btn').addEventListener('click', () => {
            this.stopAllSounds();
        });

        // Volume button toggle
        document.getElementById('volume-btn').addEventListener('click', () => {
            const volumeControl = document.getElementById('volume-control');
            volumeControl.classList.toggle('active');
        });

        // Volume slider
        document.getElementById('volume-slider').addEventListener('input', (e) => {
            this.setVolume(e.target.value);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Spacebar to stop all sounds
            if (e.code === 'Space') {
                e.preventDefault();
                this.stopAllSounds();
            }
        });
    }
}

// Initialize soundboard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Soundboard();
});
