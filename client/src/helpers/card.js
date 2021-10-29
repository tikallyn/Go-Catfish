export default class Card {
    //we are creating a new class component called 'Card' that takes 'scene' as param.
    constructor(scene) {
        //then we give it a render function that accepts x, y, and the sprite:
        this.render = (x, y, sprite) => {
            let card = scene.add.image(x, y, sprite).setScale(0.3, 0.3).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }
    }
}
