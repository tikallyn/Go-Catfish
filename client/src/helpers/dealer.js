import Card from './card';

export default class Dealer {
    constructor(scene) {
        this.dealCards = () => {
            let playerSprite
            let opponentSprite = 'cardBack'
            //For now, let's give them different cards so we can see the difference on screen:
            if (scene.isPlayerA) {
                playerSprite = 'card1';
            } else {
                playerSprite = 'card2';
            };
            for (let i = 0; i < 5; i++) {
                let playerCard = new Card(scene);
                playerCard.render(475 + (i * 100), 650, playerSprite);

                let opponentCard = new Card(scene);
                scene.opponentCards.push(opponentCard.render(475 + (i * 100), 125, opponentSprite).disableInteractive());
            }
        }
    }
}
