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
        this.registry.events.emit('m1');
        //this.GameO = this.add.image(352, 170, 'gameover').setScale(2);
        this.fondo = this.add.image(0, 0, 'fondo').setScale(1).setOrigin(0);
        // this.Back = this.add.image(352, 460, 'back').setScale(1).setInteractive();

        // this.Back.name= "Back";
       // this.botonGO = this.sound.add("boton",{volume: 4});
        // const eventos = Phaser.Input.Events;
        // const teclado = Phaser.Input.Keyboard;

        // this.Back.on(eventos.POINTER_MOVE, (evento) => {
        //     this.Back.setScale(0.8);
        //     });

        // this.Back.on(eventos.POINTER_OUT, (evento) => {
        //         this.Back.setScale(1);
        //     });

            // this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            //     if(GameObject.name != "")
            //     if(GameObject.name == "Back"){
            //         //this.boton.play();
            //         this.scene.stop('SceneGO');
            //         this.scene.start('SceneA');
            //     }
            // });

        this.gameOver = this.sound.add("gameOver",{volume: 4});
        this.gameOver.play();
        //this.GameO = this.add.image(352, 170, 'gameover').setScale(2);
        //this.Skull = this.add.image(352, 370, 'skull').setScale(1.5);
        
        this.cameras.main.setBackgroundColor(0x14238d);

    }
    update()
    {

    }


    }
    export default SceneGO;