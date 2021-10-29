import Phaser from "phaser";
import Game from "./scenes/game";

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 780,
    backgroundColor: '#1f1c38',
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);