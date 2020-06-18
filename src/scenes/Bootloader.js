class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
        // console.log(this.scene.manager.scenes.map( x => x.scene.key ));
    }
    preload() {
        this.load.path = './assets/';
        //MenuPrincipal
        this.load.image('comenzar','comenzar.jpeg');
        this.load.image('menu','oniria.jpeg');
        this.load.image('fondolvls','lvls.jpg');
        this.load.audio("boton","boton_comenzar.mp3");
        this.load.audio("musica1","musica1.ogg");
        this.load.audio("musica2","musica2.ogg");

        //MenuLvls
        this.load.image('lvl1','lvl1.png');
        this.load.image('lvl2','lvl2.png');
        this.load.image('regreso','menu.png');
        this.load.audio("burbuja","burbuja.mp3");
        this.load.audio("rayo","rayo.mp3");
        this.load.audio("menulvls","menulvls.ogg");

        //lvl1
        this.load.image(['muro','esquinaIzq','esquinaDer','flotante','hielo','picos','sue','lvl1_2','balaLvl1','bala2','Escudo']);
        this.load.image('piso','piso.jpg');
        this.load.image('tubo','tuboBalas.png');
        this.load.image('tubo2','tuboBalas2.png');
        this.load.atlas('portal','portal_PP3/portal.png','portal_PP3/portal_atlas.json');
        this.load.atlas('night','night_PP3/night.png','night_PP3/night_atlas.json');

        //lvl2
        this.load.image(['Plataformas', 'suelo', 'pared',]);
        this.load.image("cielo3","cielo3.png");
        this.load.atlas('nio','nio_PP3/nio.png','nio_PP3/nio_atlas.json');
        this.load.atlas('morfeo','morfeo_PP3/morfeo.png','morfeo_PP3/morfeo_atlas.json');
        this.load.image('Morfeo','Morfeo.png');
        this.load.atlas('cora','cora_PP3/cora.png','cora_PP3/cora_atlas.json');
        this.load.animation('nioAnim', 'nio_PP3/nio_anim.json');
        this.load.image(['contenedor','head']);
        this.load.image("coraz","coraz.png");
        this.load.image('disparo','disparo.png');

        //GameOverScene
        this.load.image("gameover","Game over.png");
        this.load.image("back","back.png");
        this.load.image("skull","skull.png");

        //Audio lvls
        this.load.audio("disparo","disparo.mp3");
        this.load.audio("caida","caida.mp3");
        this.load.audio("picos","picos.mp3");
        this.load.audio("enemigo","enemigo.mp3");
        this.load.audio("explosion","explosion.mp3");
        this.load.audio("portal","portal.mp3");
        
    }
    create() {
        console.log(this.scene.manager.scenes);

        this.menu = this.add.image(320,270,'menu').setScale(0.6,0.75);
        this.comenzar = this.add.image(350,450,'comenzar').setScale(0.2).setInteractive();
        this.comenzar.name="comenzar";
        this.boton = this.sound.add("boton",{volume: 4});
        this.musica1 = this.sound.add("musica1",{volume: 4});
        this.musica1.play();
        this.musica2 = this.sound.add("musica2",{volume: 4});
        this.musica2.play();
        this.burbuja = this.sound.add("burbuja",{volume: 4});
        const eventos = Phaser.Input.Events;
        const teclado = Phaser.Input.Keyboard;
        
        this.comenzar.on(eventos.POINTER_MOVE, (evento) => {
            this.comenzar.setScale(0.17);
            this.burbuja.play();
            });

        this.comenzar.on(eventos.POINTER_OUT, (evento) => {
                this.comenzar.setScale(0.2);
            });


        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name != "")
            if(GameObject.name == "comenzar"){
                this.comenzar.setVisible(0);
                this.menu.setVisible(0);
                this.boton.play();
                this.musica1.stop();
                this.musica2.stop();
                this.scene.start('SceneA');
            }
        });
    
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;