export default class MusicPlayer {
  audioPath: string;
  audioElm!: HTMLAudioElement;
  playbackBtn!: { htmlElm: HTMLButtonElement; isPaused: boolean };
  playbackIcon: HTMLSpanElement;
  playbackIconType: 'pause' | 'play_arrow';

  constructor(audio: string) {
    this.audioPath = audio;
    this.playbackBtn = {
      htmlElm: document.getElementById('playback-button') as HTMLButtonElement,
      isPaused: true,
    };
    this.playbackIcon = this.playbackBtn.htmlElm.querySelector(
      '.material-icons'
    )! as HTMLSpanElement;
    this.playbackIconType = 'play_arrow';
    this.playbackIcon.textContent = this.playbackIconType;
    this.btnEventListener();
    this.createAudioHtml();
  }

  createAudioHtml() {
    this.audioElm = document.createElement('audio');
    this.audioElm.src = this.audioPath;
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

  btnEventListener() {
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
  }
}
