export default class Zone {
    constructor(scene) {
        //Phaser has built-in dropzones that allow us to dictate where game objects can be dropped:
        this.renderZone = (x, y, width, height) => {
            let dropZone = scene.add
                .zone(x, y, width, height)
                .setRectangleDropZone(width, height);
            //We're also adding some data called "cards" to the dropzone that we'll use later.
            dropZone.setData({ cards: 0 });
            //Let's also make an outline function that will make our dropzone clearly visible to the user:
            let dropZoneOutline = scene.add.graphics()
            dropZoneOutline
                .lineStyle(4, 0xff69b4)
                .strokeRect(x - width / 2, y - height / 2, width, height)
            return dropZone;
        };
    }
}