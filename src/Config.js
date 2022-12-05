import LoadingScene from './scenes/Loading';
import PlayingScene from './scenes/PlayingScene';

const Config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [LoadingScene, PlayingScene],
  pixelArt: true,
  physics: {
    default: "arcade",
    aracde: {
      debug: process.env.DEBUG === "true",
    },
  },
};

export default Config;