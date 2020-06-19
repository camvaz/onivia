class SceneF extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneF'
    });
    }
    init() {
    console.log('Escena F');
    }

    create() {

    }


    update(time, delta) {
        this.add.image(0, 0, 'cielo3').setScale(0.55, 0.7);
        
    }
}
    export default SceneF;