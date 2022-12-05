import Phaser from "phaser";
import Player from "../characters/Player";
import { setBackground } from "../utils/backgroundManager";

export default class PlayingScene extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {


    // player를 m_player라는 멤버 변수로 추가합니다.
    this.m_player = new Player(this);

    // PlayingScene의 background를 설정합니다.
    setBackground(this, "background1");
  }
}