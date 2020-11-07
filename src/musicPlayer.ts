export default class MusicPlayer {
  audioPath: string;
  audioElm: HTMLAudioElement | undefined;
  constructor(audio: string) {
    this.audioPath = audio;
    this.audioElm;
    this.createAudioHtml();
  }
  createAudioHtml() {
    this.audioElm = document.createElement('audio');
    this.audioElm.src = this.audioPath;
    document.getElementById('root')?.append(this.audioElm);
  }
  play() {
    this.audioElm?.play();
  }
  pause() {
    this.audioElm?.pause();
  }
}
