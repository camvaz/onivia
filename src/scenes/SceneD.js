class SceneD extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneD'
    });
    }
    init() {
    console.log('Escena D');
    }
    create() {
        this.coraa = this.add.sprite(352,480,'cora').setScale(0.5);
        //this.coraa.anims.play('parpadeo');

        this.anims.create({
            // Nombre de la animación
            key: 'blink',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNames('cora', {
            prefix: 'corazon_',
            frames: [0, 1, 2]
           
            }),
            repeat: -1,
            frameRate: 12
        });

        setTimeout(() => {
                 this.coraa.anims.play('blink')
                 }, 6000);
    }

    update(time, delta) {
        
    }
}
    export default SceneD;