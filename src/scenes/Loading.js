import Phaser from "phaser";
import bgImg1 from "../assets/images/background.png";
import beamImg from "../assets/images/beam.png";
import playerImg from "../assets/spritesheets/player.png";
import mobImg1 from "../assets/spritesheets/mob1.png";

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
    // bootGame : 이 scene의 identifier
  }
	preload() {
    // IMAGES
    this.load.image("background1", bgImg1);
    this.load.image("beam", beamImg);

    // SPRITESHEETS
    this.load.spritesheet("player", playerImg, {
      frameWidth: 32,
      frameHeight: 36,
    });
    this.load.spritesheet("mob1", mobImg1, {
      frameWidth: 28,
      frameHeight: 28,
    });
	}

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}