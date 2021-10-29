export default class Zone {
    constructor(scene) {
        //Phaser has built-in dropzones that allow us to dictate where game objects can be dropped:
        this.renderZone = () => {
            let dropZone = scene.add.zone(700, 375, 900, 250).setRectangleDropZone(900, 250);
            dropZone.setData({ cards: 0 }); //We've also added some data called "cards" to the dropzone that we'll use later.
            return dropZone;
        };
        //Let's also make an outline function that will make our dropzone clearly visible to the user:
        this.renderOutline = (dropZone) => {
            let dropZoneOutline = scene.add.graphics();
            dropZoneOutline.lineStyle(4, 0xff69b4);
            dropZoneOutline.strokeRect(dropZone.x - dropZone.input.hitArea.width / 2, dropZone.y - dropZone.input.hitArea.height / 2, dropZone.input.hitArea.width, dropZone.input.hitArea.height)
        }
    }
}
