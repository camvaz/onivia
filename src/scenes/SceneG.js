class SceneG extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneG'
    });
    }
    init() {
    console.log('Escena G');
    }

    create() {
        this.add.image(450, 285, 'creditos').setScale(1);
        this.add.image(160, 280, 'laSuma').setScale(0.05);
        this.volverM2 = this.add.image(780,520,'volverMenu').setScale(0.1).setInteractive();
        this.volverM2.name="volverM";
        this.disparoC = this.sound.add("disparo",{volume: 0.1});
        this.choqueC = this.sound.add("picos",{volume: 0.1});
        this.saltoC = this.sound.add("salto",{volume: 0.1});
        this.creditos = this.sound.add("creditosM",{volume: 0.1});
        this.creditos.play();
        this.data.set('bal', 0);
        var sen1C = 0;
        var iC = 0;
        var vivoC = 0;

        const eventos7 = Phaser.Input.Events;
        this.sonBotones3 = this.sound.add("boton",{volume: 0.1});
        this.cambio3 = this.sound.add("cambio",{volume: 0.1});
        this.boton3 = this.sound.add("sonBotones",{volume: 0.1});

        this.volverM2.on(eventos7.POINTER_MOVE, (evento) => {
            this.volverM2.setScale(0.09);
            this.sonBotones3.play();
            });

        this.volverM2.on(eventos7.POINTER_OUT, (evento) => {
                this.volverM2.setScale(0.1);
            });

        this.input.on(eventos7.GAMEOBJECT_DOWN, (pointer, GameObject) =>{
            if(GameObject.name != "")
            if(GameObject.name == "reiniciarJ"){
                this.cambio2.play();
                this.volverM.setVisible(0);
                this.reiniciarJ.setVisible(0);
                this.fondo.setVisible(0);
                this.boton2.play();
                this.scene.start('SceneB');
                this.scene.stop('SceneGO');
                this.registry.events.emit('parar');
            }
            if(GameObject.name == "volverM"){
                this.cambio3.play();
                this.volverM2.setVisible(0);
                this.boton3.play();
                this.creditos.stop();
                this.scene.start('Bootloader');
                this.scene.stop('SceneG');
                this.registry.events.emit('parar');
            }
        });

        ////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
        this.Night = this.add.sprite(500,450,'Morfeo').setScale(2);
        this.physics.add.existing(this.Night, false);
        this.Night.body.setCollideWorldBounds(true);
        this.Night.body.setAllowGravity(false);
        this.Night.body.immovable=true;
        this.Night.body.moves=false;
        this.Night.body.setOffset(17, 0);
        this.Night.body.setSize(70,70);
        this.anims.create({
            key: 'mov1',
            frames: this.anims.generateFrameNames('morfeo', {
            prefix: 'morfeo_',
            frames: [0,0,1,1]
            }),
            repeat: -1,
            frameRate: 12
            });
        this.Night.anims.play('mov1');

         this.NioC = this.add.sprite(20,100,'nio').setScale(2.3).setScrollFactor(1);
         this.physics.add.existing(this.NioC);
         this.physics.add.existing(this.NioC, false);
         console.log(this.NioC);
         this.NioC.body.setCollideWorldBounds(true);
         this.NioC.body.setSize(20, 40);
         this.NioC.body.setOffset(17, 0);
 
 
         this.cursorC = this.input.keyboard.createCursorKeys();
 
         this.NioC.body.maxVelocity.x = 250;
         
         //Movimiento a la derecha
         this.cursorC.right.on('down', () => {
             sen1C = 0;
             iC = 0;
             this.NioC.body.setVelocityX(800);
             this.NioC.flipX=0;
             this.NioC.body.setOffset(17, 0);
            
         });
         
         this.cursorC.right.on('up', () => {
             this.NioC.body.setVelocityX(0);
         });
 
         //Salto
        this.cursorC.up.on('down', () => {
            this.NioC.body.setVelocityY(-300);
            this.saltoC.play();
        });

        // this.cursorC.up.on('down', () => {
        // this.NioC.body.setVelocityY(0);
        // });

         //Movimiento izquierda
         this.cursorC.left.on('down', () => {   
             sen1C = 1;
             iC = 1;
             this.NioC.body.setVelocityX(-800);
             this.NioC.flipX=1;
             this.NioC.body.setOffset(3, 0);
         });
         
         this.cursorC.left.on('up', () => {
             this.NioC.body.setVelocityX(0);
         });
 
         this.NioC.anims.play('mov');

         //Disparo Nio
        this.cursorC.space.on('down', () => {
           if(vivoC == 0)
           {
               if(iC == 0)
               {
                   if (sen1C == 0)
                   {
                       this.balaC = this.physics.add.sprite(this.NioC.x,this.NioC.y,'disparo').setScale(0.5);
                       // this.physics.add.existing(this.bala_lvl1_2, false);
                       this.balaC.body.setVelocityX(800);
                       this.balaC.body.setAllowGravity(false); 
                       this.data.list.bal += 1; 
                       console.log("disparando")
                       //limiteBalas++;
                       //console.log(limiteBalas);
                        this.disparoC.play();
                       vivoC = 1;
                       this.physics.add.collider(this.balaC,this.Night,balaEnemigoC,null,this);
                       BalaMundoC(this.balaC);
                   }
               }
               else if (iC == 1)
                   {
                   if (sen1C == 1){
                       this.balaC = this.physics.add.sprite(this.NioC.x,this.NioC.y,'disparo').setScale(0.5);
                       // this.physics.add.existing(this.bala_lvl1_2, false);
                       this.balaC.setVelocityX(-800);
                       this.balaC.setAllowGravity(false); 
                       this.data.list.bal += 1; 
                       console.log("disparando al reves")
                       this.disparoC.play();
                       vivo = 1;
                       this.physics.add.collider(this.balaC,this.Night,balaEnemigoC,null,this);
                       BalaMundoC(this.balaC);
                               }                         
                   }
           }
           else if(vivoC == 1)
           {
               console.log("hay una bala, no se puede disparar")
           }
       });
        
       function BalaMundoC (balaC)
    {
    
    setTimeout(() => {
        console.log("La bala murió :(");
        //this.registry.events.emit('daño', 1); 
        balaC.destroy();  
        vivoC = 0;
        }, 800);  
    }

    function choqueEnemigoC(Nio, Night){
        this.NioC.setTint(0xff0000)
        setTimeout(() => {
            this.NioC.clearTint();
            }, 600);
        this.choqueC.play();
        this.NioC.setPosition(10,100);
      }
      this.physics.add.collider(this.NioC,this.Night,choqueEnemigoC,null,this);

      function balaEnemigoC(balaC, Night){
        this.Night.setTint(0xff0000)
        setTimeout(() => {
            this.Night.clearTint();
            }, 600);
        this.balaC.destroy();
      }

    }


    update(time, delta) {
        
    }
}
    export default SceneG;