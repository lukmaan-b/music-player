import MusicPlayer from './musicPlayer';
import MusicFileManager from './musicFileManger';

(() => {
  const musicPlayer = new MusicPlayer();
  const musicFileManger = new MusicFileManager(musicPlayer);
})();
