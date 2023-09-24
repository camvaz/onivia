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
        this.fondo = this.add.image(0, 0, 'fondo').setScale(1.3).setOrigin(0);
        this.volverM = this.add.image(450,480,'volverMenu').setScale(0.1).setInteractive();
        this.volverM.name="volverM";
        // this.reiniciarJ = this.add.image(330,480,'reiniciar').setScale(0.1).setInteractive();
        // this.reiniciarJ.name="reiniciarJ";

        const eventos8 = Phaser.Input.Events;
        this.sonBotones2 = this.sound.add("boton",{volume: 0.1});
        this.cambio2 = this.sound.add("cambio",{volume: 0.1});
        this.boton2 = this.sound.add("sonBotones",{volume: 0.1});

        //evento boton reiniciar
        // this.reiniciarJ.on(eventos8.POINTER_MOVE, (evento) => {
        //     this.reiniciarJ.setScale(0.09);
        //     this.sonBotones2.play();
        //     });

        // this.reiniciarJ.on(eventos8.POINTER_OUT, (evento) => {
        //         this.reiniciarJ.setScale(0.1);
        //     });
        
        //evento boton volver al menú
        this.volverM.on(eventos8.POINTER_MOVE, (evento) => {
            this.volverM.setScale(0.09);
            this.sonBotones2.play();
            });

        this.volverM.on(eventos8.POINTER_OUT, (evento) => {
                this.volverM.setScale(0.1);
            });

        this.gameOver = this.sound.add("gameOver",{volume: 0.1});
        this.gameOver.play();

        this.cameras.main.setBackgroundColor(0x14238d);

        this.input.on(eventos8.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name != "")
            // if(GameObject.name == "reiniciarJ"){
            //     this.cambio2.play();
            //     this.volverM.setVisible(0);
            //     this.reiniciarJ.setVisible(0);
            //     this.fondo.setVisible(0);
            //     this.boton2.play();
            //     this.scene.start('SceneB');
            //     this.scene.stop('SceneGO');
            //     this.registry.events.emit('parar');
            // }
            if(GameObject.name == "volverM"){
                this.cambio2.play();
                this.volverM.setVisible(0);
                //this.reiniciarJ.setVisible(0);
                this.fondo.setVisible(0);
                this.boton2.play();
                this.scene.start('Bootloader');
                this.scene.stop('SceneGO');
                this.registry.events.emit('parar');
            }
        });

    }
    update()
    {

    }


    }
    export default SceneGO;