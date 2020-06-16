class SceneA extends Phaser.Scene{
    constructor(){
        super({
            key: 'SceneA'
        });
    }

    init() {
        console.log('Escena A');
    }
    create() {
        this.musicaLvls = this.sound.add("menulvls",{volume: 4});
        this.musicaLvls.play();
        this.fondolvls= this.add.image(230, 100, 'fondolvls').setScale(2);
        this.nivel1= this.add.image(80, 80, 'lvl1').setScale(0.02).setInteractive();
        this.nivel1.name="nivel1";

        this.nivel2= this.add.image(350, 270, 'lvl2').setScale(0.02).setInteractive();
        this.nivel2.name="nivel2";

        this.regreso= this.add.image(620, 470, 'regreso').setScale(0.02).setInteractive();
        this.regreso.name="regreso";

        this.burbuja2 = this.sound.add("burbuja",{volume: 4});
        this.rayo = this.sound.add("rayo",{volume: 4});

        const eventos2 = Phaser.Input.Events;
        // this.nivel1.on(eventos.POINTER_MOVE, (evento) => {
        //     this.nivel1.setScale(0.9);
        //     });

        // this.nivel1.GameObject.on(eventos.POINTER_OUT, (evento) => {
        //         this.nivel2.setScale(0.7);
        //     });

        this.input.on(eventos2.GAMEOBJECT_OVER, (pointer, gameObject) => {
            gameObject.setScale(0.017);
            this.burbuja2.play();
            });
        this.input.on(eventos2.GAMEOBJECT_OUT, (pointer, gameObject) => {
            gameObject.setScale(0.02);
            });
            this.scene.stop('SceneB');
        this.input.on(eventos2.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name != "")
            if(GameObject.name == "nivel1"){
                this.rayo.play();
                this.nivel1.setVisible(0);
                this.nivel2.setVisible(0);
                this.regreso.setVisible(0);
                this.musicaLvls.stop();
                this.scene.start('SceneB');
                this.scene.stop('SceneA');
            }
            if(GameObject.name == "nivel2"){
                this.rayo.play();
                this.nivel1.setVisible(0);
                this.nivel2.setVisible(0);
                this.regreso.setVisible(0);
                this.musicaLvls.stop();
                this.scene.start('SceneE');
               // this.scene.launch('SceneF');
                setTimeout(() => {
                    this.scene.sleep('SceneD');
                    }, 12000);
                this.scene.stop('SceneA');
            }
            if(GameObject.name == "regreso"){
                this.rayo.play();
                this.nivel1.setVisible(0);
                this.nivel2.setVisible(0);
                this.regreso.setVisible(0);
                this.musicaLvls.stop();
                this.scene.start('Bootloader');
                this.scene.stop('SceneA');
            }
        });
    }
    update(time, delta) {
    }
    }

export default SceneA;