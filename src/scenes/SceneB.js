class SceneB extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneB'
    });
    this.salto=0;
    this.i = 1;
    }
    init() {
    console.log('Escena B');
    console.log("Salto inicial", this.salto);
    }
    create() {
        //Musica
        this.registry.events.emit('m2');
        this.disparo = this.sound.add("disparo",{volume: 0.1});
        this.picos1= this.sound.add("picos",{volume: 0.1});
        this.salto1 = this.sound.add("salto",{volume: 0.1});
        this.win = this.sound.add("win",{volume: 0.1});
        this.sonBotonesB = this.sound.add("boton",{volume: 0.1});
        this.enemigo1 = this.sound.add("enemigo",{volume: 0.1});
        this.cambio2 = this.sound.add("cambio",{volume: 0.1});
         ////////////////////////////////////FONDO//////////1///////////////////////////////////////////
        this.data.set('vidas',5);
        this.data.set('morfeo', 9);
        this.data.set('balas', 0);
        var sen1 = 0;
        var i = 0;
        var vivo = 0;
        console.log(this.data.list);

        this.add.image(0, 0, 'nivel').setScale(1.8,2).setOrigin(0);
        ///////////////////////////////BOTONES DIFICULTADES//////////////////////////////////////////
        const eventos2 = Phaser.Input.Events;
        const eventosA = Phaser.Input.Events;
        this.sonBotonesA = this.sound.add("boton",{volume: 0.1});
        this.cambioA = this.sound.add("cambio",{volume: 0.1});
        this.botonA = this.sound.add("sonBotones",{volume: 0.1});

        this.facil = this.add.image(450,110,'facil').setScale(0.2).setInteractive();
        this.facil.name="facil";
        this.medio = this.add.image(450,190,'medio').setScale(0.2).setInteractive();
        this.medio.name="medio";
        this.dificil = this.add.image(450,270,'dificil').setScale(0.2).setInteractive();
        this.dificil.name="dificil";

        this.facil.on(eventosA.POINTER_MOVE, (evento) => {
            this.facil.setScale(0.17);
            this.sonBotonesA.play();
            });

        this.facil.on(eventosA.POINTER_OUT, (evento) => {
                this.facil.setScale(0.2);
            });

        
        this.medio.on(eventosA.POINTER_MOVE, (evento) => {
            this.medio.setScale(0.17);
            this.sonBotonesA.play();
            });

        this.medio.on(eventosA.POINTER_OUT, (evento) => {
                this.medio.setScale(0.2);
            });
        
        
        this.dificil.on(eventosA.POINTER_MOVE, (evento) => {
            this.dificil.setScale(0.17);
            this.sonBotonesA.play();
            });

        this.dificil.on(eventosA.POINTER_OUT, (evento) => {
                this.dificil.setScale(0.2);
            });

        this.input.on(eventosA.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name == "facil"){
                this.min = 1;
                this.max = 10;this.num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.num2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.correcto = this.num1+this.num2;
                this.num3 = this.correcto - 1;
                this.num4 = this.correcto + 1;

                this.facil.setVisible(0);
                this.medio.setVisible(0);
                this.dificil.setVisible(0);

                const container = this.add.container(450,-300).setScale(0.9);
                this.contenedor = this.add.image(0,0, 'contenedor2').setScale(0.8);
                this.texto = this.add.text(-100, -55, `SUMA:`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                this.textoM = this.add.text(-55, 0, `${this.num1} + ${this.num2}`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container.add([
                    this.contenedor,
                    this.texto,
                    this.textoM
                ]);
                this.add.tween({
                    targets: [container],
                    y: 120,
                    ease: 'bounce'
                    });

                const container2 = this.add.container(450,-300).setScale(0.5);
                this.contenedor2 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor2.name="cont2";
                this.texto2 = this.add.text(-40, -15, `${this.correcto}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container2.add([
                    this.contenedor2,
                    this.texto2
                ]);
                this.add.tween({
                    targets: [container2],
                    y: 300,
                    ease: 'bounce'
                    });

                const container3 = this.add.container(200,-300).setScale(0.5);
                this.contenedor3 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor3.name="cont3";
                this.texto3 = this.add.text(-40, -15, `${this.num3}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container3.add([
                    this.contenedor3,
                    this.texto3
                ]);
                this.add.tween({
                    targets: [container3],
                    y: 300,
                    ease: 'bounce'
                    });

                const container4 = this.add.container(700,-300).setScale(0.5);
                this.contenedor4 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor4.name="cont4";
                this.texto4 = this.add.text(-40, -15, `${this.num4}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container4.add([
                    this.contenedor4,
                    this.texto4
                ]);
                this.add.tween({
                    targets: [container4],
                    y: 300,
                    ease: 'bounce'
                    });


                this.contenedor2.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor2.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor2.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor2.setScale(0.8);
                    });

                this.contenedor3.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor3.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor3.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor3.setScale(0.8);
                    });

                this.contenedor4.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor4.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor4.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor4.setScale(0.8);
                    });
            }
            if(GameObject.name == "medio"){
                this.min = 5;
                this.max = 15;
                this.num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.num2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.correcto = this.num1+this.num2;
                this.num3 = this.correcto - 1;
                this.num4 = this.correcto + 1;

                this.facil.setVisible(0);
                this.medio.setVisible(0);
                this.dificil.setVisible(0);
                const container = this.add.container(450,-300).setScale(0.9);
                this.contenedor = this.add.image(0,0, 'contenedor2').setScale(0.8);
                this.texto = this.add.text(-100, -55, `SUMA:`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                this.textoM = this.add.text(-55, 0, `${this.num1} + ${this.num2}`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container.add([
                    this.contenedor,
                    this.texto,
                    this.textoM
                ]);
                this.add.tween({
                    targets: [container],
                    y: 120,
                    ease: 'bounce'
                    });

                const container2 = this.add.container(450,-300).setScale(0.5);
                this.contenedor2 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor2.name="cont2";
                this.texto2 = this.add.text(-40, -15, `${this.correcto}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container2.add([
                    this.contenedor2,
                    this.texto2
                ]);
                this.add.tween({
                    targets: [container2],
                    y: 300,
                    ease: 'bounce'
                    });

                const container3 = this.add.container(200,-300).setScale(0.5);
                this.contenedor3 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor3.name="cont3";
                this.texto3 = this.add.text(-40, -15, `${this.num3}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container3.add([
                    this.contenedor3,
                    this.texto3
                ]);
                this.add.tween({
                    targets: [container3],
                    y: 300,
                    ease: 'bounce'
                    });

                const container4 = this.add.container(700,-300).setScale(0.5);
                this.contenedor4 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor4.name="cont4";
                this.texto4 = this.add.text(-40, -15, `${this.num4}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container4.add([
                    this.contenedor4,
                    this.texto4
                ]);
                this.add.tween({
                    targets: [container4],
                    y: 300,
                    ease: 'bounce'
                    });


                this.contenedor2.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor2.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor2.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor2.setScale(0.8);
                    });

                this.contenedor3.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor3.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor3.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor3.setScale(0.8);
                    });

                this.contenedor4.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor4.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor4.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor4.setScale(0.8);
                    });
            }
            if(GameObject.name == "dificil"){
                this.min = 10;
                this.max = 25;
                this.num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.num2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.correcto = this.num1+this.num2;
                this.num3 = this.correcto - 1;
                this.num4 = this.correcto + 1;

                this.facil.setVisible(0);
                this.medio.setVisible(0);
                this.dificil.setVisible(0);
                const container = this.add.container(450,-300).setScale(0.9);
                this.contenedor = this.add.image(0,0, 'contenedor2').setScale(0.8);
                this.texto = this.add.text(-100, -55, `SUMA:`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                this.textoM = this.add.text(-55, 0, `${this.num1} + ${this.num2}`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container.add([
                    this.contenedor,
                    this.texto,
                    this.textoM
                ]);
                this.add.tween({
                    targets: [container],
                    y: 120,
                    ease: 'bounce'
                    });

                const container2 = this.add.container(450,-300).setScale(0.5);
                this.contenedor2 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor2.name="cont2";
                this.texto2 = this.add.text(-40, -15, `${this.correcto}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container2.add([
                    this.contenedor2,
                    this.texto2
                ]);
                this.add.tween({
                    targets: [container2],
                    y: 300,
                    ease: 'bounce'
                    });

                const container3 = this.add.container(200,-300).setScale(0.5);
                this.contenedor3 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor3.name="cont3";
                this.texto3 = this.add.text(-40, -15, `${this.num3}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container3.add([
                    this.contenedor3,
                    this.texto3
                ]);
                this.add.tween({
                    targets: [container3],
                    y: 300,
                    ease: 'bounce'
                    });

                const container4 = this.add.container(700,-300).setScale(0.5);
                this.contenedor4 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor4.name="cont4";
                this.texto4 = this.add.text(-40, -15, `${this.num4}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container4.add([
                    this.contenedor4,
                    this.texto4
                ]);
                this.add.tween({
                    targets: [container4],
                    y: 300,
                    ease: 'bounce'
                    });

                this.contenedor2.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor2.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor2.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor2.setScale(0.8);
                    });

                this.contenedor3.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor3.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor3.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor3.setScale(0.8);
                    });

                this.contenedor4.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor4.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor4.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor4.setScale(0.8);
                    });
            }
        });
        ////////////////////////////////BOTON MENU//////////////////////////////////////////////////
        this.volverMA = this.add.image(800,60,'volverMenu').setScale(0.07).setInteractive();
        this.volverMA.name="volverMA";
        this.volverMA.on(eventosA.POINTER_MOVE, (evento) => {
            this.volverMA.setScale(0.06);
            this.sonBotonesA.play();
            });

        this.volverMA.on(eventosA.POINTER_OUT, (evento) => {
                this.volverMA.setScale(0.07);
            });

            this.input.on(eventosA.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
                if(GameObject.name == "volverMA"){
                    this.cambioA.play();
                    this.volverMA.setVisible(0);
                    //this.reiniciarJ.setVisible(0);
                    
                    this.botonA.play();
                    this.scene.start('Bootloader');
                    this.scene.stop('SceneB');
                    this.registry.events.emit('parar');
                }
            });
        ////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
        this.add.image(100, 490, 'laSuma2').setScale(0.05);
        this.Nio_lvl1 = this.add.sprite(200,430,'nio').setScale(2.6).setScrollFactor(1);
        this.physics.add.existing(this.Nio_lvl1);
        this.physics.add.existing(this.Nio_lvl1, false);
        console.log(this.Nio_lvl1.body);
        this.Nio_lvl1.body.setCollideWorldBounds(true);
        this.Nio_lvl1.body.setSize(20, 40);
        this.Nio_lvl1.body.setOffset(17, 0);

        this.cursor_lvl1 = this.input.keyboard.createCursorKeys();
 
        this.Nio_lvl1.body.maxVelocity.x = 250;
        

        
        ////////////////////////////////////////Villanos/////////////////////////////////////////////////
        
        //////////////////////////////////////////////////////////////////////////////
        function BalaMundo (bala)
        {
        
        setTimeout(() => {
            console.log("La bala murió :(");
            //this.registry.events.emit('daño', 1); 
            bala.destroy();  
            vivo = 0;
            }, 800);
        
        
        }

        /////////////////////////////////////VILLANOS/////////////////////////////////////
        this.night = this.add.sprite(480,500,'night').setScale(2);
        this.physics.add.existing(this.night, false);
        this.night.body.setCollideWorldBounds(true);
        this.night.body.setAllowGravity(false);
        this.night.body.immovable=true;
        this.night.body.moves=false;
        this.night.body.setCircle(25);;
        this.anims.create({
        key: 'fly1',
        frames: this.anims.generateFrameNames('night', {
        prefix: 'night_',
        frames: [0,1,0]
        }),
        repeat: -1,
        frameRate: 12
        });
        this.night.anims.play('fly1');

        this.night2 = this.add.sprite(580,500,'night').setScale(2);
        this.physics.add.existing(this.night2, false);
        this.night2.body.setCollideWorldBounds(true);
        this.night2.body.setAllowGravity(false);
        this.night2.body.immovable=true;
        this.night2.body.moves=false;
        this.night2.body.setCircle(25);
        this.night2.anims.play('fly1');

        this.night3 = this.add.sprite(680,500,'night').setScale(2);
        this.physics.add.existing(this.night3, false);
        this.night3.body.setCollideWorldBounds(true);
        this.night3.body.setAllowGravity(false);
        this.night3.body.immovable=true;
        this.night3.body.moves=false;
        this.night3.body.setCircle(25);
        this.night3.anims.play('fly1');

        function choqueEnemigo(Nio_lvl1, night2){
            this.data.list.vidas -= 1;
            const container_lvl1 = this.add.container(110, 40).setScale(0.13); //su origen es 0.5
            this.contenedor_lvl1 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
            this.texto_lvl1 = this.add.text(250,-100,`x ${this.data.get('vidas')}`,{
            fontSize: 250}); // su origen es 0,0
            this.head_lvl1 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
            this.cora_lvl1 = this.add.image(0, 0, 'coraz').setScale(5);
            container_lvl1.add([
            this.contenedor_lvl1,
            this.head_lvl1,
            this.cora_lvl1,
            this.texto_lvl1]);

            this.Nio_lvl1.setTint(0xff0000);
            setTimeout(() => {
                this.Nio_lvl1.clearTint();
                }, 1300);
            this.picos1.play();
            this.Nio_lvl1.setPosition(200,230);
            this.night.setPosition(480,500);
            this.night2.setPosition(580,500);
            this.night3.setPosition(680,500);
        }
        this.physics.add.collider(this.Nio_lvl1,this.night2,choqueEnemigo,null,this);
        this.physics.add.collider(this.Nio_lvl1,this.night3,choqueEnemigo,null,this);
        this.physics.add.collider(this.Nio_lvl1,this.night,choqueEnemigo,null,this);

        this.vidas_N= 2;
        this.vidas_N2= 2;
        this.vidas_N3= 2;

        function balaEnemigo(bala_lvl1_2, night){
            this.vidas_N-=1;
            this.night.setTint(0xff0000)
            setTimeout(() => {
                this.night.clearTint();
                }, 600);
            if(this.vidas_N==0){
                this.night.destroy();
                this.bala_lvl1.destroy();
            }
            this.bala_lvl1.destroy();
            this.enemigo1.play();
        }

        function balaEnemigo2(bala_lvl1_2, night2){
            this.vidas_N2-=1;
            this.night2.setTint(0xff0000)
            setTimeout(() => {
                this.night2.clearTint();
                }, 600);
            if(this.vidas_N2==0){
                this.night2.destroy();
                this.bala_lvl1.destroy();
            }
            this.bala_lvl1.destroy();
            this.enemigo1.play();
            }

        function balaEnemigo3(bala_lvl1_2, night3){
            this.vidas_N3-=1;
            this.night3.setTint(0xff0000)
            setTimeout(() => {
                this.night3.clearTint();
                }, 600);
            if(this.vidas_N3==0){
                this.night3.destroy();
                this.bala_lvl1.destroy();
            }
            this.bala_lvl1.destroy();
            this.enemigo1.play();
        }

        ////////Movimientos Night////////////////
        this.add.tween({
            targets: [this.night, this.night2,this.night3],
            y: 540,
            yoyo: true,
            duration: 1500,
            repeat: -1,
            easy: 'Power1'
            });

        /////////////////////MORFEO//////////////////////////////////////////////////
        this.Morfeo = this.add.sprite(780,510,'morfeo').setScale(1.8);
            this.physics.add.existing(this.Morfeo);
            this.physics.add.existing(this.Morfeo, false);
            console.log(this.Morfeo.body);
            this.Morfeo.body.setCollideWorldBounds(true);
            this.Morfeo.body.setAllowGravity(false);
            this.Morfeo.body.immovable=true;
            this.Morfeo.body.moves=false;
            this.Morfeo.body.setOffset(30, 20);
   
            this.anims.create({
                key: 'mov1',
                frames: this.anims.generateFrameNames('morfeo', {
                prefix: 'morfeo_',
                frames: [0,0,1,1]
                }),
                repeat: -1,
                frameRate: 12
                });
        this.Morfeo.anims.play('mov1');
        
        this.add.tween({
            targets: [this.Morfeo],
            y: 540,
            yoyo: true,
            duration: 1500,
            repeat: -1,
            easy: 'Power1'
            });
        /////EVIL MORFEO
        this.EMorfeo = this.add.sprite(780, 490,'Emorfeo').setScale(1).setDepth(1).setVisible(0);

        this.registry.events.on('transformar', (transformar) => {
        console.log('transformación en proceso')
        this.trans = this.add.sprite(780, 400,'trans').setScale(1).setDepth(2);
        this.anims.create({
            key: 'trans1',
            frames: this.anims.generateFrameNames('trans', {
            prefix: 'trans_(1)_',
            frames: [0,1,2,3,3,4,5,5]
            }),
            repeat: 0,
            frameRate: 10
            });

        this.trans.anims.play('trans1');

        var x = this.Morfeo.x;
        var y = this.Morfeo.y;
        // this.Morfeo.anims.stop('mov1');
        this.Morfeo.destroy()

        this.EMorfeo.x = x;
        this.EMorfeo.y = y;
        this.EMorfeo.setVisible(1);
        this.physics.add.existing(this.EMorfeo);
        this.physics.add.existing(this.EMorfeo, false);
        console.log(this.EMorfeo.body);
        this.EMorfeo.body.setCollideWorldBounds(true);
        this.EMorfeo.body.setAllowGravity(false);
        this.EMorfeo.body.immovable=true;
        this.EMorfeo.body.moves=false;
        this.EMorfeo.body.setSize(200,200)
        this.EMorfeo.body.setOffset(0, 0);
        //this.Morfeo = this.EMorfeo;

        this.add.tween({
            targets: [this.EMorfeo, this.trans],
            y: 520,
            yoyo: true,
            duration: 1500,
            repeat: -1,
            easy: 'Power1'
            });

        this.anims.create({
            key: 'evil1',
            frames: this.anims.generateFrameNames('Emorfeo', {
            prefix: 'evil_morfeo_',
            frames: [0,1,0]
            }),
            repeat: -1,
            frameRate: 5
            });

        this.EMorfeo.anims.play('evil1');
        });

        /////////////////////////////Choque balas morfeo///////////////////////
        function BalaMorfeo (bala, Morfeo)
    {
        this.data.list.morfeo-=1;
        console.log(this.data.get('morfeo'));
        if(this.data.list.morfeo==0){
            this.Morfeo.destroy();
        }
        Morfeo.setTint(0xff0000);
        setTimeout(() => {
            this.Morfeo.clearTint();
            }, 100);
            console.log("Morfeo recibió daño");
            //this.registry.events.emit('daño', 1); 
            this.bala_lvl1.destroy();  
            vivo = 0;
    }

    function BalaEMorfeo (bala, EMorfeo)
    {
        this.data.list.morfeo-=1;
        console.log(this.data.get('morfeo'));
        if(this.data.list.morfeo==0){
            this.EMorfeo.destroy();
        }
        EMorfeo.setTint(0xff0000);
        setTimeout(() => {
            this.EMorfeo.clearTint();
            }, 100);
        console.log("Morfeo recibió daño");
        //this.registry.events.emit('daño', 1); 
        this.bala_lvl1.destroy();  
        vivo = 0;
    }

    /////////////////////////////CHOQUE MORFEO CON NIO/////////////////////////////////////////
    function ChoqueMorfeo (Nio, Morfeo)
        {
            this.data.list.vidas -= 1;
            const container_lvl1 = this.add.container(110, 40).setScale(0.13); //su origen es 0.5
            this.contenedor_lvl1 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
            this.texto_lvl1 = this.add.text(250,-100,`x ${this.data.get('vidas')}`,{
            fontSize: 250}); // su origen es 0,0
            this.head_lvl1 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
            this.cora_lvl1 = this.add.image(0, 0, 'coraz').setScale(5);
            container_lvl1.add([
            this.contenedor_lvl1,
            this.head_lvl1,
            this.cora_lvl1,
            this.texto_lvl1]);

            this.Nio_lvl1.setTint(0xff0000);
            setTimeout(() => {
                this.Nio_lvl1.clearTint();
                }, 1300);
            this.picos1.play();
            this.Nio_lvl1.setPosition(200,230);
            console.log("Colisionaron");
        }

        this.physics.add.collider(this.Nio_lvl1, this.Morfeo, ChoqueMorfeo, null, this);
        this.physics.add.collider(this.Nio_lvl1, this.EMorfeo, ChoqueMorfeo, null, this);


        //////////////////////////////////////Cartel de vidas///////////////////////////
        const container_lvl1 = this.add.container(110, 40).setScale(0.13); //su origen es 0.5
        this.contenedor_lvl1 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        this.texto_lvl1 = this.add.text(250,-100,`x ${this.data.get('vidas')}`,{
            fontSize: 250}); // su origen es 0,0
        this.head_lvl1 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
        this.cora_lvl1 = this.add.image(0, 0, 'coraz').setScale(5);
        container_lvl1.add([
            this.contenedor_lvl1,
            this.head_lvl1,
            this.cora_lvl1,
            this.texto_lvl1]);
        
        /////////////////////////////Interaccion carteles sumas/////////////////////////////
        this.input.on(eventos2.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name != "")
            if(GameObject.name == "cont2"){
               // this.data.list.vidas += 1;
                this.i += 1;
                console.log(`this: ${this.i}`);
                this.cambio2.play();

                if(this.i > 1){
                    if(vivo == 0){
                        if(i == 0){
                                this.bala_lvl1 = this.physics.add.sprite(this.Nio_lvl1.x,this.Nio_lvl1.y,'disparo').setScale(0.5);
                                this.bala_lvl1.body.setVelocityX(1100);
                                this.bala_lvl1.body.setAllowGravity(false); 
                                this.data.list.balas += 1; 
                                console.log(this.data.list.balas);
                                console.log("disparando")
                                this.disparo.play();
                                vivo = 1;
                                this.physics.add.collider(this.bala_lvl1, this.Morfeo, BalaMorfeo, null, this);
                                this.physics.add.collider(this.bala_lvl1, this.EMorfeo, BalaEMorfeo, null, this);
                                this.physics.add.collider(this.bala_lvl1,this.night, balaEnemigo, null, this);
                                this.physics.add.collider(this.bala_lvl1,this.night2, balaEnemigo2, null, this);
                                this.physics.add.collider(this.bala_lvl1,this.night3, balaEnemigo3, null, this);
                                BalaMundo(this.bala_lvl1);
                            }else if (i == 1){
                                if (sen1 == 1){
                                    this.bala_lvl1 = this.physics.add.sprite(this.Nio_lvl1.x,this.Nio_lvl1.y,'disparo').setScale(0.5);
                                    this.bala_lvl1.body.setVelocityX(-1100);
                                    this.bala_lvl1.body.setAllowGravity(false); 
                                    this.data.list.balas += 1; 
                                    console.log(this.data.list.balas);
                                    console.log("disparando")
                                    this.disparo.play();
                                    vivo = 1;
                                    this.physics.add.collider(this.bala_lvl1, this.Morfeo, BalaMorfeo, null, this);
                                    this.physics.add.collider(this.bala_lvl1, this.EMorfeo, BalaEMorfeo, null, this);
                                    this.physics.add.collider(this.bala_lvl1,this.night, balaEnemigo, null, this);
                                    this.physics.add.collider(this.bala_lvl1,this.night2, balaEnemigo2, null, this);
                                    this.physics.add.collider(this.bala_lvl1,this.night3, balaEnemigo3, null, this);
                                    BalaMundo(this.bala_lvl1);
                            }                         
                        }
                    }else if(vivo == 1){
                        console.log("hay una bala, no se puede disparar");
                    }
                }
            this.contenedor.destroy();
            this.contenedor2.destroy();
            this.contenedor3.destroy();
            this.contenedor4.destroy();
            this.texto.destroy();
            this.textoM.destroy();
            this.texto2.destroy();
            this.texto3.destroy();
            this.texto4.destroy();
            this.num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.num2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.correcto = this.num1+this.num2;
            this.num3 = this.correcto - 1;
            this.num4 = this.correcto + 1;
            
            if(this.i == 2 || this.i == 5 || this.i == 8 || this.i == 11 || this.i == 14){
                const container = this.add.container(450,-300).setScale(0.9);
                this.contenedor = this.add.image(0,0, 'contenedor2').setScale(0.8);
                this.texto = this.add.text(-100, -55, `SUMA:`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                this.textoM = this.add.text(-55, 0, `${this.num1} + ${this.num2}`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container.add([
                    this.contenedor,
                    this.texto,
                    this.textoM
                ]);
                this.add.tween({
                    targets: [container],
                    y: 120,
                    ease: 'bounce'
                    });

                const container2 = this.add.container(700,-300).setScale(0.5);
                this.contenedor2 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor2.name="cont2";
                this.texto2 = this.add.text(-40, -15, `${this.correcto}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container2.add([
                    this.contenedor2,
                    this.texto2
                ]);
                this.add.tween({
                    targets: [container2],
                    y: 300,
                    ease: 'bounce'
                    });

                const container3 = this.add.container(450,-300).setScale(0.5);
                this.contenedor3 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor3.name="cont3";
                this.texto3 = this.add.text(-40, -15, `${this.num3}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container3.add([
                    this.contenedor3,
                    this.texto3
                ]);
                this.add.tween({
                    targets: [container3],
                    y: 300,
                    ease: 'bounce'
                    });

                const container4 = this.add.container(200,-300).setScale(0.5);
                this.contenedor4 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor4.name="cont4";
                this.texto4 = this.add.text(-40, -15, `${this.num4}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container4.add([
                    this.contenedor4,
                    this.texto4
                ]);
                this.add.tween({
                    targets: [container4],
                    y: 300,
                    ease: 'bounce'
                    });

                this.contenedor2.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor2.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor2.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor2.setScale(0.8);
                    });

                this.contenedor3.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor3.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor3.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor3.setScale(0.8);
                    });

                this.contenedor4.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor4.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor4.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor4.setScale(0.8);
                    });
            }else if(this.i == 3 || this.i == 6 || this.i == 9 || this.i == 12 || this.i == 15){
                const container = this.add.container(450,-300).setScale(0.9);
                this.contenedor = this.add.image(0,0, 'contenedor2').setScale(0.8);
                this.texto = this.add.text(-100, -55, `SUMA:`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                this.textoM = this.add.text(-55, 0, `${this.num1} + ${this.num2}`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container.add([
                    this.contenedor,
                    this.texto,
                    this.textoM
                ]);
                this.add.tween({
                    targets: [container],
                    y: 120,
                    ease: 'bounce'
                    });

                const container2 = this.add.container(200,-300).setScale(0.5);
                this.contenedor2 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor2.name="cont2";
                this.texto2 = this.add.text(-40, -15, `${this.correcto}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container2.add([
                    this.contenedor2,
                    this.texto2
                ]);
                this.add.tween({
                    targets: [container2],
                    y: 300,
                    ease: 'bounce'
                    });

                const container3 = this.add.container(700,-300).setScale(0.5);
                this.contenedor3 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor3.name="cont3";
                this.texto3 = this.add.text(-40, -15, `${this.num3}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container3.add([
                    this.contenedor3,
                    this.texto3
                ]);
                this.add.tween({
                    targets: [container3],
                    y: 300,
                    ease: 'bounce'
                    });

                const container4 = this.add.container(450,-300).setScale(0.5);
                this.contenedor4 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor4.name="cont4";
                this.texto4 = this.add.text(-40, -15, `${this.num4}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container4.add([
                    this.contenedor4,
                    this.texto4
                ]);
                this.add.tween({
                    targets: [container4],
                    y: 300,
                    ease: 'bounce'
                    });

                this.contenedor2.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor2.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor2.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor2.setScale(0.8);
                    });

                this.contenedor3.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor3.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor3.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor3.setScale(0.8);
                    });

                this.contenedor4.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor4.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor4.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor4.setScale(0.8);
                    });
            }else if(this.i == 4 || this.i == 7 || this.i == 10 || this.i == 13){
                const container = this.add.container(450,-300).setScale(0.9);
                this.contenedor = this.add.image(0,0, 'contenedor2').setScale(0.8);
                this.texto = this.add.text(-100, -55, `SUMA:`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                this.textoM = this.add.text(-55, 0, `${this.num1} + ${this.num2}`, {
                    fontSize: 40,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container.add([
                    this.contenedor,
                    this.texto,
                    this.textoM
                ]);
                this.add.tween({
                    targets: [container],
                    y: 120,
                    ease: 'bounce'
                    });

                const container2 = this.add.container(450,-300).setScale(0.5);
                this.contenedor2 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor2.name="cont2";
                this.texto2 = this.add.text(-40, -15, `${this.correcto}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container2.add([
                    this.contenedor2,
                    this.texto2
                ]);
                this.add.tween({
                    targets: [container2],
                    y: 300,
                    ease: 'bounce'
                    });

                const container3 = this.add.container(200,-300).setScale(0.5);
                this.contenedor3 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor3.name="cont3";
                this.texto3 = this.add.text(-40, -15, `${this.num3}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container3.add([
                    this.contenedor3,
                    this.texto3
                ]);
                this.add.tween({
                    targets: [container3],
                    y: 300,
                    ease: 'bounce'
                    });

                const container4 = this.add.container(700,-300).setScale(0.5);
                this.contenedor4 = this.add.image(0,0, 'contenedor2').setScale(0.8).setInteractive();
                this.contenedor4.name="cont4";
                this.texto4 = this.add.text(-40, -15, `${this.num4}`, {
                    fontSize: 50,
                    color: '#17202A',
                    fontStyle: 'bold italic'
                });
                container4.add([
                    this.contenedor4,
                    this.texto4
                ]);
                this.add.tween({
                    targets: [container4],
                    y: 300,
                    ease: 'bounce'
                    });

                this.contenedor2.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor2.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor2.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor2.setScale(0.8);
                    });

                this.contenedor3.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor3.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor3.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor3.setScale(0.8);
                    });

                this.contenedor4.on(eventos2.POINTER_MOVE, (evento) => {
                        this.contenedor4.setScale(0.7);
                        this.sonBotonesB.play();
                    });

                this.contenedor4.on(eventos2.POINTER_OUT, (evento) => {
                        this.contenedor4.setScale(0.8);
                    });
            }else if( this.i == 16 ){
                this.win.play();
                setTimeout(() => {
                    this.scene.stop('SceneB');
                    //this.scene.stop('SceneF');
                    this.registry.events.emit('Win', 1); 
                    setTimeout(() => {
                        this.scene.start('SceneG');
                        }, 6000);
                    }, 3000);
            }
            }
            if(GameObject.name == "cont3"){
                // this.data.list.vidas -= 1;
                this.cambio2.play();

                const container_lvl1 = this.add.container(110, 40).setScale(0.13); //su origen es 0.5
                this.contenedor_lvl1 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
                this.texto_lvl1 = this.add.text(250,-100,`x ${this.data.get('vidas')}`,{
                fontSize: 250}); // su origen es 0,0
                this.head_lvl1 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
                this.cora_lvl1 = this.add.image(0, 0, 'coraz').setScale(5);
                container_lvl1.add([
                this.contenedor_lvl1,
                this.head_lvl1,
                this.cora_lvl1,
                this.texto_lvl1]);

                // this.Nio_lvl1.setTint(0xff0000);
                // setTimeout(() => {
                //     this.Nio_lvl1.clearTint();
                //     }, 1300);
                // this.picos1.play();

                if(this.vidas_N > 0 && this.vidas_N2 == 2 && this.vidas_N3 == 2){
                    this.add.tween({
                        targets: this.night,
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });
                }else if(this.vidas_N == 0 && this.vidas_N2 > 0 && this.vidas_N3 == 2){
                    this.add.tween({
                        targets: this.night2,
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });

                }else if(this.vidas_N == 0 && this.vidas_N2 == 0 && this.vidas_N3 > 0){
                    this.add.tween({
                        targets: this.night3,
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });
                }else if(this.vidas_N == 0 && this.vidas_N2 == 0 && this.vidas_N3 == 0 && this.data.list.morfeo > 0){
                    this.add.tween({
                        targets: [this.Morfeo, this.EMorfeo],
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });
                }
            }
            if(GameObject.name == "cont4"){
                //this.data.list.vidas -= 1;
                this.cambio2.play();

                const container_lvl1 = this.add.container(110, 40).setScale(0.13); //su origen es 0.5
                this.contenedor_lvl1 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
                this.texto_lvl1 = this.add.text(250,-100,`x ${this.data.get('vidas')}`,{
                fontSize: 250}); // su origen es 0,0
                this.head_lvl1 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
                this.cora_lvl1 = this.add.image(0, 0, 'coraz').setScale(5);
                container_lvl1.add([
                this.contenedor_lvl1,
                this.head_lvl1,
                this.cora_lvl1,
                this.texto_lvl1]);

                // this.Nio_lvl1.setTint(0xff0000);
                // setTimeout(() => {
                //     this.Nio_lvl1.clearTint();
                //     }, 1300);
                // this.picos1.play();
                if(this.vidas_N > 0 && this.vidas_N2 == 2 && this.vidas_N3 == 2){
                    this.add.tween({
                        targets: this.night,
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });
                }else if(this.vidas_N == 0 && this.vidas_N2 > 0 && this.vidas_N3 == 2){
                    this.add.tween({
                        targets: this.night2,
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });

                }else if(this.vidas_N == 0 && this.vidas_N2 == 0 && this.vidas_N3 > 0){
                    this.add.tween({
                        targets: this.night3,
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });
                }else if(this.vidas_N == 0 && this.vidas_N2 == 0 && this.vidas_N3 == 0 && this.data.list.morfeo > 0){
                    this.add.tween({
                        targets: [this.Morfeo, this.EMorfeo],
                        x: 200,
                        yoyo: true,
                        duration: 900,
                        repeat: 0,
                        easy: 'Power1'
                        });
                }
            }
        });
    }

    update(time, delta) {

        ////////Tweens Morfeo//////////
        if(this.data.list.morfeo==5){
            // this.transformacion = 1;
            // if(this.transformacion == 1)
            // {
                this.registry.events.emit('transformar');
                // this.data.list.morfeo=23;
            //     this.transformacion = 0;
            // }
             
        }

        //GameOver
        if(this.data.get('vidas')<=0){
        console.log("Game Over");
        this.salto = 0;
        this.i = 1;
        this.scene.pause('SceneB');
        this.scene.start('SceneGO');    
        }

    }
}
    export default SceneB;