class SceneC extends Phaser.Scene{
    constructor(){
        super({
            key: 'SceneC'
        });
    this.salta=0;
    this.dato_lvl1_2;
    this.dato2_lvl1_2;
    }

    init() {
        console.log('Escena ScenaC');
    }
    preload() {
    }
    create(dato,dato2) {
        //Musica
        this.disparo2 = this.sound.add("disparo",{volume: 4});
        this.salto2 = this.sound.add("salto",{volume: 4});
        this.caida = this.sound.add("caida",{volume: 4});
        this.enemigo1 = this.sound.add("enemigo",{volume: 4});
        this.choque = this.sound.add("picos",{volume: 4});
        this.portalS = this.sound.add("portal",{volume: 4});
        this.dato_lvl1_2 = dato;
        this.dato2_lvl1_2 = dato2;
        var sen1 = 0;
        var i = 0;
        var vivo = 0;
         ////////////////////////////////////FONDO/////////////////////////////////////////////////////////
        //this.add.image(0, 0, 'cielo3').setScale(0.55, 0.7);
        this.add.image(0, 0, 'nivel').setScale(1.4,1.84).setOrigin(0);
        
        this.grupo_lvl1_2 = this.physics.add.group();
        this.grupo2_lvl1_2 = this.physics.add.group();
        this.grupo3_lvl1_2 = this.physics.add.group();
        this.grupo4_lvl1_2 = this.physics.add.group();
        this.grupo5_lvl1_2 = this.physics.add.group();

        this.grupo_lvl1_2.create(15, 400, 'muro').setScale(0.02);
        this.grupo_lvl1_2.create(15, 340, 'muro').setScale(0.02);
        this.grupo_lvl1_2.create(15, 280, 'muro').setScale(0.02);
        this.grupo_lvl1_2.create(15, 220, 'muro').setScale(0.02);

        this.grupo3_lvl1_2.create(15, 520, 'muro').setScale(0.02);
        this.grupo3_lvl1_2.create(15, 460, 'muro').setScale(0.02);

        this.grupo2_lvl1_2.create(100, 530, 'piso');
        this.grupo2_lvl1_2.create(170, 530, 'piso');
        this.grupo2_lvl1_2.create(240, 530, 'piso');
        this.grupo2_lvl1_2.create(310, 530, 'piso');
        this.grupo2_lvl1_2.create(380, 530, 'piso');
        this.grupo2_lvl1_2.create(450, 530, 'piso');
        this.grupo2_lvl1_2.create(520, 530, 'piso');
        this.grupo2_lvl1_2.create(590, 530, 'piso');
        this.grupo2_lvl1_2.create(660, 530, 'piso');
        this.grupo2_lvl1_2.create(15, 220, 'muro').setScale(0.02);

        this.grupo4_lvl1_2.create(100,170, 'flotante').setScale(0.01);
        this.grupo4_lvl1_2.create(100,300, 'flotante').setScale(0.01);
        this.grupo4_lvl1_2.create(100,400, 'flotante').setScale(0.01);

        this.grupo5_lvl1_2.create(200,250, 'hielo').setScale(0.01);
        this.grupo5_lvl1_2.create(200,350, 'hielo').setScale(0.01);
        this.grupo5_lvl1_2.create(200,450, 'hielo').setScale(0.01);
  
          this.grupo_lvl1_2.children.iterate( (muros_lvl1_2) => {
              muros_lvl1_2.body.setCollideWorldBounds(true);
              muros_lvl1_2.body.immovable=true;
              muros_lvl1_2.body.moves=false;
              } );
         this.grupo2_lvl1_2.children.iterate( (muros2_lvl1_2) => {
             muros2_lvl1_2.body.setCollideWorldBounds(true);
             muros2_lvl1_2.body.immovable=true;
             muros2_lvl1_2.body.moves=false;
         } );
         this.grupo3_lvl1_2.children.iterate( (muros3_lvl1_2) => {
            muros3_lvl1_2.body.setCollideWorldBounds(true);
            muros3_lvl1_2.body.immovable=true;
            muros3_lvl1_2.body.moves=false;
        } );

        this.grupo4_lvl1_2.children.iterate( (muros4_lvl1_2) => {
            muros4_lvl1_2.body.setCollideWorldBounds(true);
            muros4_lvl1_2.body.immovable=true;
            muros4_lvl1_2.body.moves=false;
        } );

        this.grupo5_lvl1_2.children.iterate( (muros5_lvl1_2) => {
            muros5_lvl1_2.body.setCollideWorldBounds(true);
            muros5_lvl1_2.body.immovable=true;
            muros5_lvl1_2.body.moves=false;
        } );
         ////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
         this.night = this.add.sprite(400,150,'night').setScale(1.3);
         this.physics.add.existing(this.night, false);
         this.night.body.setCollideWorldBounds(true);
         this.night.body.setAllowGravity(false);
         this.night.body.immovable=true;
         this.night.body.moves=false;
         this.night.body.setOffset(17, 0);
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

         this.night2 = this.add.sprite(570,470,'night').setScale(1.3);
         this.physics.add.existing(this.night2, false);
         this.night2.body.setCollideWorldBounds(true);
         this.night2.body.setAllowGravity(false);
         this.night2.body.immovable=true;
         this.night2.body.moves=false;
         this.night2.body.setOffset(17, 0);
         this.night2.anims.play('fly1');

         this.night3 = this.add.sprite(100,470,'night').setScale(1.3);
         this.physics.add.existing(this.night3, false);
         this.night3.body.setCollideWorldBounds(true);
         this.night3.body.setAllowGravity(false);
         this.night3.body.immovable=true;
         this.night3.body.moves=false;
         this.night3.body.setOffset(17, 0);
         this.night3.anims.play('fly1');

          this.Nio_lvl1_2 = this.add.sprite(20,100,'nio').setScale(1.3).setScrollFactor(1);
          this.physics.add.existing(this.Nio_lvl1_2);
          this.physics.add.existing(this.Nio_lvl1_2, false);
          console.log(this.Nio_lvl1_2.body);
          this.Nio_lvl1_2.body.setCollideWorldBounds(true);
          this.Nio_lvl1_2.body.setSize(20, 40);
          this.Nio_lvl1_2.body.setOffset(17, 0);
  
  
          this.cursor_lvl1_2 = this.input.keyboard.createCursorKeys();
  
          this.Nio_lvl1_2.body.maxVelocity.x = 250;
          
          //Movimiento a la derecha
          this.cursor_lvl1_2.right.on('down', () => {
              sen1 = 0;
              i = 0;
              this.Nio_lvl1_2.body.setVelocityX(800);
              this.Nio_lvl1_2.flipX=0;
              this.Nio_lvl1_2.body.setOffset(17, 0);
             
          });
          
          this.cursor_lvl1_2.right.on('up', () => {
              this.Nio_lvl1_2.body.setVelocityX(0);
          });
  
          //Salto
         if(this.salta<2){
             this.cursor_lvl1_2.up.on('down', () => {
             this.Nio_lvl1_2.body.setVelocityY(-300);
             this.salta=this.salta+1;
             console.log("This salto= "+this.salta);
             this.salto2.play();
             });
         }else{
             this.cursor_lvl1_2.up.on('down', () => {
             this.Nio_lvl1_2.body.setVelocityY(0);
             console.log("This salto= "+this.salta);
             });
         }
         
         //Vuelve la variable salta a 0
          function salta(Nio_lvl1_2, grupo_lvl1_2){
             this.salta=0;
           }
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo2_lvl1_2,salta,null,this);

          function saltas(Nio_lvl1_2, grupo4_lvl1_2){
            this.salta=0;
          }
         this.physics.add.collider(this.Nio_lvl1_2,this.grupo4_lvl1_2,saltas,null,this);

         function salte(Nio_lvl1, grupo5_lvl1_2){
            this.salta=0;
          }
         this.physics.add.collider(this.Nio_lvl1_2,this.grupo5_lvl1_2,salte,null,this);
          //Movimiento izquierda
          this.cursor_lvl1_2.left.on('down', () => {   
              sen1 = 1;
              i = 1;
              this.Nio_lvl1_2.body.setVelocityX(-800);
              this.Nio_lvl1_2.flipX=1;
              this.Nio_lvl1_2.body.setOffset(3, 0);
          });
          
          this.cursor_lvl1_2.left.on('up', () => {
              this.Nio_lvl1_2.body.setVelocityX(0);
          });
  
          this.Nio_lvl1_2.anims.play('mov');

          //Disparo Nio
         this.cursor_lvl1_2.space.on('down', () => {
            if(vivo == 0)
            {
                if(i == 0)
                {
                    if (sen1 == 0)
                    {
                        this.bala_lvl1_2 = this.physics.add.sprite(this.Nio_lvl1_2.x,this.Nio_lvl1_2.y,'disparo').setScale(0.5);
                        // this.physics.add.existing(this.bala_lvl1_2, false);
                        this.bala_lvl1_2.body.setVelocityX(800);
                        this.bala_lvl1_2.body.setAllowGravity(false); 
                        dato2 += 1; 
                        console.log("disparando")
                        //limiteBalas++;
                        //console.log(limiteBalas);
                        this.disparo2.play();
                        vivo = 1;
                        this.physics.add.collider(this.bala_lvl1_2,this.night, balaEnemigo, null, this);
                        this.physics.add.collider(this.bala_lvl1_2,this.night2, balaEnemigo2, null, this);
                        this.physics.add.collider(this.bala_lvl1_2,this.night3, balaEnemigo3, null, this);
                        BalaMundo(this.bala_lvl1_2);
                    }
                }
                else if (i == 1)
                    {
                    if (sen1 == 1){
                        this.bala_lvl1_2 = this.physics.add.sprite(this.Nio_lvl1_2.x,this.Nio_lvl1_2.y,'disparo').setScale(0.5);
                        // this.physics.add.existing(this.bala_lvl1_2, false);
                        this.bala_lvl1_2.body.setVelocityX(-800);
                        this.bala_lvl1_2.body.setAllowGravity(false); 
                        dato2 += 1; 
                        console.log("disparando al reves")
                        this.disparo2.play();
                        vivo = 1;
                        this.physics.add.collider(this.bala_lvl1_2,this.night, balaEnemigo, null, this);
                        this.physics.add.collider(this.bala_lvl1_2,this.night2, balaEnemigo2, null, this);
                        this.physics.add.collider(this.bala_lvl1_2,this.night3, balaEnemigo3, null, this);
                        BalaMundo(this.bala_lvl1_2);
                                }                         
                    }
            }
            else if(vivo == 1)
            {
                console.log("hay una bala, no se puede disparar")
            }
        });

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
//////////////////////////////////////////////////////////////////////////
    

          //Colisiones jugador con escenario
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo_lvl1_2);
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo2_lvl1_2);
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo4_lvl1_2);
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo5_lvl1_2);
           //Siguiente nivel 
         function cambioScene2(Nio_lvl1, esquina){
             this.portalS.play();
            console.log("Siguiente parte");
            this.scene.start('SceneD',this.dato_lvl1_2,this.dato2_lvl1_2);
            this.scene.stop('SceneC');
          }

          //Colisiones con enemigos
          function choqueEnemigo(Nio_lvl1_2, night2){
            this.dato_lvl1_2-=1;
            const container_lvl1_2 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
            this.contenedor_lvl1_2 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
            this.texto_lvl1_2 = this.add.text(250,-100,`x ${this.dato_lvl1_2}`,{
            fontSize: 250}); // su origen es 0,0
            this.head_lvl1_2 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
            this.cora_lvl1_2 = this.add.image(0, 0, 'coraz').setScale(5);
            container_lvl1_2.add([
                this.contenedor_lvl1_2,
                this.head_lvl1_2,
                this.cora_lvl1_2,
                this.texto_lvl1_2]);

            this.Nio_lvl1_2.setTint(0xff0000)
            setTimeout(() => {
                this.Nio_lvl1_2.clearTint();
                }, 600);
            this.choque.play();
            this.Nio_lvl1_2.setPosition(10,100);
          }
          this.physics.add.collider(this.Nio_lvl1_2,this.night2,choqueEnemigo,null,this);
          this.physics.add.collider(this.Nio_lvl1_2,this.night3,choqueEnemigo,null,this);
          this.physics.add.collider(this.Nio_lvl1_2,this.night,choqueEnemigo,null,this);

          this.vidas_N= 3;
          this.vidas_N2= 3;
          this.vidas_N3= 3;
          this.portal1=0;

          function balaEnemigo(bala_lvl1_2, night){
            this.vidas_N-=1;
            this.night.setTint(0xff0000)
            setTimeout(() => {
                this.night.clearTint();
                }, 600);
            if(this.vidas_N==0){
                this.night.destroy();
                this.bala_lvl1_2.destroy();
                this.portal1+=1;
                if(this.portal1 > 2){
                    this.sigLvl=this.add.sprite(660,420,'portal').setScale(0.7);
                    this.physics.add.existing(this.sigLvl, false);
                    this.sigLvl.body.setCollideWorldBounds(true);
                    this.sigLvl.body.immovable=true;
                    this.sigLvl.body.moves=false;

                    this.anims.create({
                        key: 'portal1',
                        frames: this.anims.generateFrameNames('portal', {
                        prefix: 'lvl1_2_',
                        start: 0,
                        end: 10
                        }),
                        repeat: -1,
                        frameRate: 12
                        });
                    
                    this.sigLvl.anims.play('portal1');
                    this.physics.add.collider(this.Nio_lvl1_2,this.sigLvl,cambioScene2,null,this);
                  }
            }
            this.bala_lvl1_2.destroy();
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
                this.bala_lvl1_2.destroy();
                this.portal1+=1;
                if(this.portal1 > 2){
                    this.sigLvl=this.add.sprite(660,420,'portal').setScale(0.7);
                    this.physics.add.existing(this.sigLvl, false);
                    this.sigLvl.body.setCollideWorldBounds(true);
                    this.sigLvl.body.immovable=true;
                    this.sigLvl.body.moves=false;

                    this.anims.create({
                        key: 'portal1',
                        frames: this.anims.generateFrameNames('portal', {
                        prefix: 'lvl1_2_',
                        start: 0,
                        end: 10
                        }),
                        repeat: -1,
                        frameRate: 12
                        });
                    
                    this.sigLvl.anims.play('portal1');
                    this.physics.add.collider(this.Nio_lvl1_2,this.sigLvl,cambioScene2,null,this);
                  }
            }
            this.bala_lvl1_2.destroy();
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
                this.bala_lvl1_2.destroy();
                this.portal1+=1;
                if(this.portal1 > 2){
                    this.sigLvl=this.add.sprite(660,420,'portal').setScale(0.7);
                    this.physics.add.existing(this.sigLvl, false);
                    this.sigLvl.body.setCollideWorldBounds(true);
                    this.sigLvl.body.immovable=true;
                    this.sigLvl.body.moves=false;
                    this.sigLvl.setVisible(0);

                    this.anims.create({
                        key: 'portal1',
                        frames: this.anims.generateFrameNames('portal', {
                        prefix: 'lvl1_2_',
                        start: 0,
                        end: 10
                        }),
                        repeat: -1,
                        frameRate: 12
                        });
                    
                    this.sigLvl.anims.play('portal1');
                    this.physics.add.collider(this.Nio_lvl1_2,this.sigLvl,cambioScene2,null,this);
                  }
            }
            this.bala_lvl1_2.destroy();
            this.enemigo1.play();
          }

          ////////Movimientos Night////////////////
          this.add.tween({
            targets: [this.night],
            y: 250,
            yoyo: true,
            duration: 500,
            repeat: -1,
            easy: 'Power1'
            });

        this.add.tween({
            targets: [this.night2,this.night3],
            y: 380,
            yoyo: true,
            duration: 1500,
            repeat: -1,
            easy: 'Power1'
            });
        
        //Cartel de vidas
        const container_lvl1_2 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
        this.contenedor_lvl1_2 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        this.texto_lvl1_2 = this.add.text(250,-100,`x ${this.dato_lvl1_2}`,{
            fontSize: 250}); // su origen es 0,0
        this.head_lvl1_2 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
        this.cora_lvl1_2 = this.add.image(0, 0, 'coraz').setScale(5);
        container_lvl1_2.add([
            this.contenedor_lvl1_2,
            this.head_lvl1_2,
            this.cora_lvl1_2,
            this.texto_lvl1_2]);
        
 
         //Camara
         this.cameras.main.setBounds(0, 0, 704, 540);
         this.cameras.main.startFollow(this.Nio_lvl1_2, true, 0.09, 0.09);
         this.cameras.main.setZoom(1.5);
 
         const camera2_2 =
         this.cameras.add(0, 0, 260, 80).setZoom(1.3);
         camera2_2.ignore(this.Nio_lvl1_2);
         setTimeout( () => {
         camera2_2.pan(this.container_lvl1_2.x, this.container_lvl1_2.y, 3000, 'Sine.easeInOut');
         }, 2000); 
        
    }
    update(time, delta) {
    //Doble salto
    if(this.salta<2){
        this.cursor_lvl1_2.up.on('down', () => {
            this.Nio_lvl1_2.body.setVelocityY(-300);
            });
        }else{
        this.cursor_lvl1_2.up.on('down', () => {
            this.Nio_lvl1_2.body.setVelocityY(0);
            });
        }

        ///////////////////CAIDA//////////////////////////////////////////////////    
        if(this.Nio_lvl1_2.body.velocity.y >= 500)
        {
           // console.log(this.Nio.body.velocity.y)
                this.fuerte=1;
            //    console.log(this.fuerte);
            this.caida.play();
            
        }

        if(this.Nio_lvl1_2.body.touching.down && this.fuerte == 1)
        {
            console.log("Auch!")
            this.Nio_lvl1_2.setTint(0xff0000)
            setTimeout(() => {
                this.Nio_lvl1_2.clearTint();
                }, 1300);
            console.log("Caida");

            this.dato_lvl1_2-=1;

            //Actualizacion del cartel de vidas
            const container_lvl1_2 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
            this.contenedor_lvl1_2 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
            this.texto_lvl1_2 = this.add.text(250,-100,`x ${this.dato_lvl1_2}`,{
                fontSize: 250}); // su origen es 0,0
            this.head_lvl1_2 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
            this.cora_lvl1_2 = this.add.image(0, 0, 'coraz').setScale(5);
            container_lvl1_2.add([
                this.contenedor_lvl1_2,
                this.head_lvl1_2,
                this.cora_lvl1_2,
                this.texto_lvl1_2]);

            this.fuerte = 0;
        }

        //GameOver
        if(this.dato_lvl1_2==0){
            console.log("Game Over");
            this.scene.start('SceneGO');
            //this.scene.restart('SceneC')
            this.scene.stop('SceneC');
                
                          }
    }
}
export default SceneC;