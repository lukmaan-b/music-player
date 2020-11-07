export default class MusicPlayer {
  audioElm!: HTMLAudioElement;
  playbackBtn!: { htmlElm: HTMLButtonElement; isPaused: boolean };
  playbackIcon: HTMLSpanElement;
  playbackIconType: 'pause' | 'play_arrow';

  constructor() {
    this.playbackBtn = {
      htmlElm: document.getElementById('playback-button') as HTMLButtonElement,
      isPaused: true,
    };
    this.playbackIcon = this.playbackBtn.htmlElm.querySelector(
      '.material-icons'
    )! as HTMLSpanElement;
    this.playbackIconType = 'play_arrow';
    this.playbackIcon.textContent = this.playbackIconType;
    this.createAudioHtml();
    this.setEventListeners();
  }

  createAudioHtml() {
    this.audioElm = document.createElement('audio');
    this.audioElm.volume = 0.5;
    document.getElementById('audio-container')!.append(this.audioElm);
  }

  play() {
    this.audioElm.play();
  }

  pause() {
    this.audioElm.pause();
  }

  changeAudio(newAudioPath: string) {
    this.audioElm.src = newAudioPath;
  }

  setEventListeners() {
    this.playbackBtn.htmlElm.addEventListener('click', () => {
      if (this.playbackBtn.isPaused) {
        this.playbackBtn.isPaused = false;
        this.play();
        this.playbackIconType = 'pause';
        this.playbackIcon.textContent = this.playbackIconType;
      } else {
        this.playbackBtn.isPaused = true;
        this.pause();
        this.playbackIconType = 'play_arrow';
        this.playbackIcon.textContent = this.playbackIconType;
      }
    });
    this.audioElm.addEventListener('ended', () => {
      console.log('s');
      this.audioElm.currentTime = 0;
      this.playbackBtn.isPaused = true;
      this.playbackIcon.textContent = this.playbackIconType;
    });
  }

  setFilePath(filePath: string) {
    this.audioElm.src = filePath;
  }
}
