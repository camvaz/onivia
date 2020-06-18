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
        this.GameO = this.add.image(352, 170, 'gameover').setScale(2);
        this.Skull = this.add.image(352, 370, 'skull').setScale(1.5);
        this.Back = this.add.image(580, 480, 'back').setScale(1).setInteractive();

        this.Back.name= "Back";
       // this.botonGO = this.sound.add("boton",{volume: 4});
        const eventos = Phaser.Input.Events;
        const teclado = Phaser.Input.Keyboard;

        this.Back.on(eventos.POINTER_MOVE, (evento) => {
            this.Back.setScale(0.8);
            });

        this.Back.on(eventos.POINTER_OUT, (evento) => {
                this.Back.setScale(1);
            });

            this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
                if(GameObject.name != "")
                if(GameObject.name == "Back"){
                    //this.boton.play();
                    this.scene.stop('SceneGO');
                    this.scene.start('SceneA');
                }
            });

        this.cameras.main.setBackgroundColor(0x14238d);;

    }
    update()
    {

    }


    }
    export default SceneGO;