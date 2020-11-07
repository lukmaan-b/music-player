import MusicPlayer from './musicPlayer';

export default class MusicFile {
  inputEl: HTMLInputElement;
  musicPlayer: MusicPlayer;
  constructor(musicPlayer: MusicPlayer) {
    this.musicPlayer = musicPlayer;
    this.inputEl = document.querySelector('input')!;
    this.inputEl.addEventListener('change', (e) => {
      const file = this.inputEl.files![0];
      const fileType = file.type;
      if (fileType.indexOf('audio') !== -1) {
        musicPlayer.setFilePath(URL.createObjectURL(file));
      }
    });
  }
}
