class SceneGO extends Phaser.Scene{
    constructor(){
        super({
            key: 'SceneGO'
        });
   
    }
    init()
    {
        console.log('Escena GO');
    }

    preload() {
    }
    
    create()
    {
        this.gameOver = this.sound.add("gameOver",{volume: 4});
        this.gameOver.play();
        this.GameO = this.add.image(352, 170, 'gameover').setScale(2);
        this.Skull = this.add.image(352, 370, 'skull').setScale(1.5);
        
        this.cameras.main.setBackgroundColor(0x14238d);;

    }
    update()
    {

    }


    }
    export default SceneGO;