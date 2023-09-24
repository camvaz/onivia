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
        this.load.image('comoJ','multiplicacion.png');
        this.load.image('jugar','sumab.png');
        this.load.image('queS','resta.png');
        this.load.image('menu','inicio.png');
        this.load.image('volverMenu','botonVM.png');
        this.load.image('reiniciar','boton_r.png');
        this.load.image('menu','inicio.png');
        this.load.audio("boton","boton_comenzar.mp3");
        this.load.audio("sonBotones","sonidoNiños.mp3");
        this.load.audio("musica1","musica1.ogg");
        this.load.audio("musica2","musica2.ogg");

        //SceneB
        this.load.image('contenedor2','resp.png');
        this.load.image('facil','facil.png');
        this.load.image('medio','medio.png');
        this.load.image('dificil','dificil.png');


        //lvl1
        this.load.atlas('night','night_PP3/night.png','night_PP3/night_atlas.json');
        this.load.image("nivel","nivel1.jpg");

        //lvl2
        this.load.image("fondonoche","Fondo noche.png");
        this.load.atlas('nio','nio_PP3/nio.png','nio_PP3/nio_atlas.json');
        this.load.atlas('morfeo','morfeo_PP3/morfeo.png','morfeo_PP3/morfeo_atlas.json');
        this.load.atlas('Emorfeo','evilmorfeo_PP3/evilmorfeo.png','evilmorfeo_PP3/evilmorfeo_atlas.json');
        this.load.atlas('trans','trans_PP3/trans.png','trans_PP3/trans_atlas.json');
        this.load.image('Morfeo','Morfeo.png');
        this.load.atlas('cora','cora_PP3/cora.png','cora_PP3/cora_atlas.json');
        this.load.animation('nioAnim', 'nio_PP3/nio_anim.json');
        this.load.image(['contenedor','head']);
        this.load.image("coraz","coraz.png");
        this.load.image('disparo','disparo.png');
        this.load.image("winscene","winscene.jpg");
        

        //GameOverScene
        this.load.image("gameover","Game over.png");
        this.load.image("back","back.png");
        this.load.image("fondo","fondo.png");
        this.load.image("skull","skull.png");
        this.load.audio("gameOver","gameOver.mp3");

        //Audio lvls
        this.load.audio("disparo","disparo.mp3");
        this.load.audio("picos","picos.mp3");
        this.load.audio("enemigo","enemigo.mp3");
        this.load.audio("m1","m11.mp3");
        this.load.audio("m2","juegoPrin.mp3");
        this.load.audio("m3","m31.mp3");
        this.load.audio("cambio","cambio.mp3");
        this.load.audio("win","win.mp3");

        //Creditos
        this.load.image("creditos", "creditos.png");
        this.load.image("laSuma", "laSuma.png");
        this.load.image("laSuma2", "laSuma2.png");
        this.load.audio("creditosM", "creditosM.mp3");
        
    }
    create() {
        console.log(this.scene.manager.scenes);
        
        this.menu = this.add.image(450,285,'menu').setScale(0.098);
        this.comenzar = this.add.image(455,525,'jugar').setScale(0.3).setInteractive();
        this.comenzar.name="suma";
        this.comoJ = this.add.image(205,525,'comoJ').setScale(0.3).setInteractive();
        this.comoJ.name="multiplicacion";
        this.queS = this.add.image(695,525,'queS').setScale(0.3).setInteractive();
        this.queS.name="resta";
        this.boton = this.sound.add("sonBotones",{volume: 0.1});
        this.sonBotones = this.sound.add("boton",{volume: 0.1});
        this.cambio = this.sound.add("cambio",{volume: 0.1});
        const eventos = Phaser.Input.Events;
        
        //Evento botono jugar
        this.comenzar.on(eventos.POINTER_MOVE, (evento) => {
            this.comenzar.setScale(0.27);
            this.sonBotones.play();
            });

        this.comenzar.on(eventos.POINTER_OUT, (evento) => {
                this.comenzar.setScale(0.3);
            });

        //evento boton como jugar
        this.comoJ.on(eventos.POINTER_MOVE, (evento) => {
            this.comoJ.setScale(0.27);
            this.sonBotones.play();
            });

        this.comoJ.on(eventos.POINTER_OUT, (evento) => {
                this.comoJ.setScale(0.3);
            });
        
        //evento boton que es la suma
        this.queS.on(eventos.POINTER_MOVE, (evento) => {
            this.queS.setScale(0.27);
            this.sonBotones.play();
            });

        this.queS.on(eventos.POINTER_OUT, (evento) => {
                this.queS.setScale(0.3);
            });

        

        this.scene.launch('SceneF');

        


            // this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            //     if(GameObject.name != "")
            //     if(GameObject.name == "comenzar"){
            //         this.comenzar.setVisible(0);
            //         this.menu.setVisible(0);
            //         this.boton.play();
            //     //  this.musica1.stop();
            //         //this.musica2.stop();
            //         this.scene.start('SceneA');
            //     }
            // });

        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name != "")
            if(GameObject.name == "suma"){
                //this.rayo.play();
                this.cambio.play();
                this.comenzar.setVisible(0);
                this.menu.setVisible(0);
                this.boton.play();
              //  this.musica1.stop();
                //this.musica2.stop();
                this.scene.start('SceneB');
                this.scene.stop('Bootloader');
                this.registry.events.emit('parar');
            }
            if(GameObject.name == "multiplicacion"){
                //this.rayo.play();
                this.cambio.play();
                this.comenzar.setVisible(0);
                this.menu.setVisible(0);
                this.boton.play();
              //  this.musica1.stop();
                //this.musica2.stop();
                this.scene.start('SceneA');
                this.scene.stop('Bootloader');
                this.registry.events.emit('parar');
            }
            if(GameObject.name == "resta"){
                //this.rayo.play();
                this.cambio.play();
                this.comenzar.setVisible(0);
                this.menu.setVisible(0);
                this.boton.play();
              //  this.musica1.stop();
                //this.musica2.stop();
                this.scene.start('SceneC');
                this.scene.stop('Bootloader');
                this.registry.events.emit('parar');
            }
        });
    
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;