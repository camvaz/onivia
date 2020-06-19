class SceneE extends Phaser.Scene{
    constructor(){
        
    super({
    key: 'SceneE'
    });
    this.sal=0;
    this.dato_lvl2;
    this.dato2_lvl2;
    this.fuerte=0;

    this.transformacion = 0;
    
    

    }
    init() {
    console.log('Escena E');
    
    }
    create(dato,dato2,) {
        //Musica
        this.registry.events.emit('m3');
        this.salto4 = this.sound.add("salto",{volume: 5});
        this.disparo4 = this.sound.add("disparo",{volume: 4});
        this.caida3 = this.sound.add("caida",{volume: 4});
        this.choque3 = this.sound.add("picos",{volume: 4});
        this.explosion2 = this.sound.add("explosion",{volume: 4});
        this.win = this.sound.add("win",{volume: 4});
        
//////////////////////////////////////DATOS//////////////////////////////////////////////////////////
        // this.scene.launch('SceneF')
        //this.data.set('vidas', 5);
        this.dato_lvl2 = dato;
        this.dato2_lvl2 = dato2;
        this.data.set('curaciones', 1);
        this.data.set('morfeo', 48);
        var sen1 = 0;
        var i = 0;
        var vivo = 0;
        
        
        
        //this.data.set('monstruos', 1)    
 ////////////////////////////////////FONDO/////////////////////////////////////////////////////////
       
         this.fondo = this.add.image(0, 0, 'fondonoche').setScale(1.2,1.68).setOrigin(0);

         this.grupo = this.physics.add.group();
         this.grupo.create(379, 306, 'escalon');
         this.grupo.create(325, 414, 'escalon');
         this.grupo.create(352, 522, 'suelo');
         this.grupo.create(304,360, "pared");
         this.grupo.create(400,360, "pared");
         this.grupo.create(112,414,"Plataformas").setScale(0.8); //plataforma izq abajo
         this.grupo.create(176,306,"Plataformas").setScale(0.8); //plataforma izq centro
         this.grupo.create(112,176,"Plataformas").setScale(0.8); //plataforma izq arriba
         this.grupo.create(592,414,"Plataformas").setScale(0.8); //plataforma der abajo
         this.grupo.create(528,306,"Plataformas").setScale(0.8); //plataforma der centro
         this.grupo.create(592,176,"Plataformas").setScale(0.8); //plataforma der arriba
 
         this.grupo.children.iterate( (muros) => {
             muros.body.setAllowGravity(false);
             muros.body.setCollideWorldBounds(true);
             muros.body.immovable=true;
             muros.body.moves=false;
             } );
        
        this.grupo2 = this.physics.add.group();
        this.grupo2.create(4,100,"tubo2").setScale(0.2);
        this.grupo2.create(4,250,"tubo2").setScale(0.2);
        this.grupo2.create(4,370,"tubo2").setScale(0.2);
        this.grupo2.create(4,470,"tubo2").setScale(0.2);
        this.grupo2.create(700,470,"tubo").setScale(0.2);
        this.grupo2.create(700,100,"tubo").setScale(0.2);
        this.grupo2.create(700,250,"tubo").setScale(0.2);
        this.grupo2.create(700,370,"tubo").setScale(0.2);
        this.grupo2.create(700,470,"tubo").setScale(0.2);

        this.grupo2.children.iterate( (muros2) => {
            muros2.body.setAllowGravity(false);
            muros2.body.setCollideWorldBounds(true);
            muros2.body.immovable=true;
            muros2.body.moves=false;
            } );
        
        this.grupoBala = this.physics.add.group();
        this.grupoBala.create(-5,100,"bala2").setScale(0.1);
        this.grupoBala.create(-5,250,"bala2").setScale(0.1);
        this.grupoBala.children.iterate( (bala) => {
            bala.body.setAllowGravity(false);
            bala.body.setCollideWorldBounds(true);
            bala.body.immovable=true;
            bala.body.moves=true;
            } );

        this.grupoBala2 = this.physics.add.group();
        this.grupoBala2.create(705,370,"balaLvl1").setScale(0.1);
        this.grupoBala2.create(705,470,"balaLvl1").setScale(0.1);
        this.grupoBala2.children.iterate( (bala2) => {
            bala2.body.setAllowGravity(false);
            bala2.body.setCollideWorldBounds(true);
            bala2.body.immovable=true;
            bala2.body.moves=true;
            } );
        
        this.grupoBala3 = this.physics.add.group();
        this.grupoBala3.create(-5,370,"bala2").setScale(0.1);
        this.grupoBala3.create(-5,470,"bala2").setScale(0.1);
        this.grupoBala3.children.iterate( (bala3) => {
            bala3.body.setAllowGravity(false);
            bala3.body.setCollideWorldBounds(true);
            bala3.body.immovable=true;
            bala3.body.moves=true;
            } );

        this.grupoBala4 = this.physics.add.group();
        this.grupoBala4.create(705,100,"balaLvl1").setScale(0.1);
        this.grupoBala4.create(705,250,"balaLvl1").setScale(0.1);
        this.grupoBala4.children.iterate( (bala4) => {
            bala4.body.setAllowGravity(false);
            bala4.body.setCollideWorldBounds(true);
            bala4.body.immovable=true;
            bala4.body.moves=true;
            } );
 
////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
         
         /////NIO
         this.Nio = this.add.sprite(150,100,'nio').setScale(1.3);
         this.physics.add.existing(this.Nio);
         this.physics.add.existing(this.Nio, false);
         console.log(this.Nio.body);
         this.Nio.body.setCollideWorldBounds(true);
         this.Nio.body.setSize(20, 40);
         this.Nio.body.setOffset(17, 0);
         
      

         /////MORFEO
        // this.Morfeo = this.add.sprite(350,100,'Morfeo').setScale(1.3);
        
            this.Morfeo = this.add.sprite(350,100,'morfeo').setScale(1.3);
            this.physics.add.existing(this.Morfeo);
            this.physics.add.existing(this.Morfeo, false);
            console.log(this.Morfeo.body);
            this.Morfeo.body.setCollideWorldBounds(true);
            this.Morfeo.body.setAllowGravity(false);
            this.Morfeo.body.immovable=true;
            this.Morfeo.body.moves=false;
            this.Morfeo.body.setOffset(17, 0);
   
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
        
        /////EVIL MORFEO
            this.EMorfeo = this.add.sprite(this.Morfeo.x,this.Morfeo.y,'Emorfeo').setScale(0.5).setDepth(1).setVisible(0);

            this.registry.events.on('transformar', (transformar) => {
            console.log('transformación en proceso')
            this.trans = this.add.sprite(this.Morfeo.x,this.Morfeo.y,'trans').setScale(1).setDepth(2);
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
            this.Morfeo.anims.stop('mov1');
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

            

        
        
        

///////////////////////////////////OBJETOS//////////////////////////////////

         this.coraa = this.add.sprite(352,480,'cora').setScale(0.5);
        //this.coraa.anims.play('parpadeo');
        this.physics.add.existing(this.coraa);
         this.physics.add.existing(this.coraa, false);
         console.log(this.coraa.body);
         this.coraa.body.setCollideWorldBounds(true);
         this.coraa.body.setAllowGravity(false);
         this.coraa.body.immovable=true;
         this.coraa.body.moves=false;
         this.coraa.body.setSize(100, 100);

        this.anims.create({
            // Nombre de la animación
            key: 'blink',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNames('cora', {
            prefix: 'corazon_',
            frames: [0, 1, 2]
           
            }),
            repeat: -1,
            frameRate: 12
        });

        setTimeout(() => {
                 this.coraa.anims.play('blink')
                 }, 15000);
         setTimeout(() => {
                this.coraa.destroy()
            }, 20000);
 
  /////////////////////////////CONTROLES///////////////////////////////////////////////////////////
         this.cursor = this.input.keyboard.createCursorKeys();
 
         this.Nio.body.maxVelocity.x = 250;
         
         
         //Movimiento a la derecha
         this.cursor.right.on('down', () => {
            sen1 = 0;
            i = 0;
            console.log(i,sen1,);
             this.Nio.body.setVelocityX(800);
             this.Nio.flipX=0;
             this.Nio.body.setOffset(17, 0);
            
             //sentido = 0;
            
         });
 
         this.cursor.right.on('up', () => {
             this.Nio.body.setVelocityX(0);
         });

         this.cursor.left.on('up', () => {
            this.Nio.body.setVelocityX(0);
        });
 
         //Salto
        if(this.sal<2){
        this.cursor.up.on('down', () => {
        
        this.arriba = 1;
        this.Nio.body.setVelocityY(-300);
        this.sal=this.sal+1;
        console.log("This salto= "+this.sal);
        this.salto4.play()
        });

        }
        else{
            this.cursor.up.on('down', () => {
            this.Nio.body.setVelocityY(0);
            console.log("This salto= "+this.sal);
            });
        }
    
        //Vuelve la variable salta a 0
        function sal(Nio, grupo){
            this.sal=0;
        }
        this.physics.add.collider(this.Nio,this.grupo,sal,null,this);
         
         //Movimiento izquierda
         this.cursor.left.on('down', () => {
            sen1 = 1;
            i = 1;
            console.log(i,sen1);
             this.Nio.body.setVelocityX(-800);
             this.Nio.flipX=1;
             this.Nio.body.setOffset(3, 0);
             
         });
 
 
         this.Nio.anims.play('mov');
         //this.Morfeo.anims.play('mov');
//////////////////////////////////////////DISPARO///////////////////////////////////////////
    
    this.cursor.space.on('down', () => {
        if(vivo == 0)
        {
            if(i == 0)
            {
                if (sen1 == 0)
                {
                    this.bala = this.physics.add.sprite(this.Nio.x,this.Nio.y,'disparo').setScale(0.5);
                    this.bala.body.setVelocityX(800);
                    this.bala.body.setAllowGravity(false); 
                   // dato2 += 1; 
                    //console.log(dato2);
                    //console.log("disparando")
                    //limiteBalas++;
                    //console.log(limiteBalas);
                    this.disparo4.play();
                    vivo = 1;
                    this.physics.add.collider(this.bala, this.Morfeo, BalaMorfeo, null, this);
                    this.physics.add.collider(this.bala, this.EMorfeo, BalaEMorfeo, null, this);
                    BalaMundo(this.bala);
                }
            }
            else if (i == 1)
                {
                if (sen1 == 1){
                        this.bala = this.physics.add.sprite(this.Nio.x,this.Nio.y,'disparo').setScale(0.5);
                        this.bala.body.setVelocityX(-800);
                        this.bala.body.setAllowGravity(false); 
                       // dato2 += 1; 
                        //console.log(dato2);
                       // console.log("disparando al reves")
                        this.disparo4.play();
                        vivo = 1;
                        this.physics.add.collider(this.bala, this.Morfeo, BalaMorfeo, null, this);
                        this.physics.add.collider(this.bala, this.EMorfeo, BalaEMorfeo, null, this);
                        BalaMundo(this.bala);
                            }                         
                }
        }
        else if(vivo == 1)
        {
            console.log("hay una bala, no se puede disparar")
        }
        });
        
    /////////////////////////////FUNCIONES BALAS/////////////////////////////////////////
    function BalaMorfeo (bala, Morfeo)
    {
        this.data.list.morfeo-=1;
        console.log(this.data.get('morfeo'));
        if(this.data.list.morfeo==0){
            this.Morfeo.destroy();
            this.win.play();
            this.dato_lvl2+=2;
            setTimeout(() => {
                this.scene.stop('SceneE');
                //this.scene.stop('SceneF');
                this.registry.events.emit('Win', 1); 
                setTimeout(() => {
                    this.scene.start('SceneG');
                    }, 6000);
                }, 3000);

        }
        Morfeo.setTint(0xff0000);
        setTimeout(() => {
            this.Morfeo.clearTint();
            }, 100);
            console.log("Morfeo recibió daño");
            //this.registry.events.emit('daño', 1); 
            this.bala.destroy();  
            vivo = 0;
    }

    function BalaEMorfeo (bala, EMorfeo)
    {
        this.data.list.morfeo-=1;
        console.log(this.data.get('morfeo'));
        if(this.data.list.morfeo==0){
            this.EMorfeo.destroy();
            this.win.play();
            setTimeout(() => {
                this.scene.stop('SceneE');
                //this.scene.stop('SceneF');
                this.registry.events.emit('Win', 1); 
                setTimeout(() => {
                    this.scene.start('SceneG');
                    }, 6000);
                }, 3000);

        }
    EMorfeo.setTint(0xff0000);
    setTimeout(() => {
        this.EMorfeo.clearTint();
        }, 100);
     console.log("Morfeo recibió daño");
     //this.registry.events.emit('daño', 1); 
     this.bala.destroy();  
     vivo = 0;
       
    }

    function BalaMundo (bala)
    {
    
    setTimeout(() => {
        console.log("La bala murió :(");
        //this.registry.events.emit('daño', 1); 
        bala.destroy();  
        vivo = 0;
        }, 800);
     
       
    }

   
    /////////////////////////EVENTOS///////////////////////////////////////////////////////////
    this.physics.add.collider(this.Nio,this.grupo);
    
    this.physics.add.collider(this.Nio, this.Morfeo, ChoqueMorfeo, null, this);
    this.physics.add.collider(this.Nio, this.EMorfeo, ChoqueMorfeo, null, this);
    this.physics.add.overlap(this.Nio, this.coraa, tomar , null, this);
    
    
   

    function ChoqueMorfeo (Nio, Morfeo)
        {
            this.dato_lvl2-=1;
            this.data.set('vidas', 5);
            const container = this.add.container(100, 30).setScale(0.08); 
            this.contenedor = this.add.image(0, 0, 'contenedor'); 
            this.texto = this.add.text(250,-100,'x '+ this.dato_lvl2,{
            fontSize: 250}); // su origen es 0,0
            this.head = this.add.image(-500, 50, 'head').setScale(15); 
            this.cora = this.add.image(0, 0, 'coraz').setScale(5);
            container.add([
                this.contenedor,
                this.head,
                this.cora,
                this.texto]);
                
            Nio.setTint(0xff0000);           
            setTimeout(() => {
                this.Nio.clearTint();
                }, 1300);
            console.log("Colisionaron");
            this.registry.events.emit('daño', 1);   
            this.choque3.play();
            this.Nio.setPosition(300,180);
           
        }

        function ChoqueEMorfeo (Nio, EMorfeo)
        {
            this.dato_lvl2-=1;
            this.data.set('vidas', 5);
            const container = this.add.container(100, 30).setScale(0.08); 
            this.contenedor = this.add.image(0, 0, 'contenedor'); 
            this.texto = this.add.text(250,-100,'x '+ this.dato_lvl2,{
            fontSize: 250}); // su origen es 0,0
            this.head = this.add.image(-500, 50, 'head').setScale(15); 
            this.cora = this.add.image(0, 0, 'coraz').setScale(5);
            container.add([
                this.contenedor,
                this.head,
                this.cora,
                this.texto]);
                
            Nio.setTint(0xff0000);           
            setTimeout(() => {
                this.Nio.clearTint();
                }, 1300);
            console.log("Colisionaron");
            this.registry.events.emit('daño', 1);   
            this.choque3.play();
            this.Nio.setPosition(300,180);
           
        }

    function tomar(Nio, coraa){
        coraa.destroy();
        console.log("tomó el objeto")
        //this.registry.events.emit('curar', 1);
        this.dato_lvl2+=1;
        const container = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
        this.contenedor = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        this.texto = this.add.text(250,-100,`x ${this.dato_lvl2}`,{
            fontSize: 250}); // su origen es 0,0
        this.head = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
        this.cora = this.add.image(0, 0, 'coraz').setScale(5);
        container.add([
            this.contenedor,
            this.head,
            this.cora,
            this.texto]);

        Nio.setTint(0x1405f6);
            setTimeout(() => {
                this.Nio.clearTint();
            }, 600);
        };

        


        const container = this.add.container(100, 30).setScale(0.08); 
        this.contenedor = this.add.image(0, 0, 'contenedor'); 
        this.texto = this.add.text(250,-100,'x '+ this.dato_lvl2,{
         fontSize: 250}); // su origen es 0,0
        this.head = this.add.image(-500, 50, 'head').setScale(15); 
        this.cora = this.add.image(0, 0, 'coraz').setScale(5);
        container.add([
            this.contenedor,
            this.head,
            this.cora,
            this.texto]);

        this.cameras.main.setBounds(0, 0, 704, 540);
        this.cameras.main.startFollow(this.Nio, true, 0.09, 0.09);
        this.cameras.main.setZoom(1.5);
        

         const cameralvl2 =
          this.cameras.add(0, 0, 260, 80).setZoom(1.3);
          cameralvl2.ignore(this.Nio);
         // cameralvl2.ignore(this.fondo);
          setTimeout( () => {
          cameralvl2.pan(this.container.x, this.container.y, 3000, 'Sine.easeInOut');
          }, 2000); 

          /////////Mecanica Balas
          function choqueBala(Nio, grupoBala){
            this.dato_lvl2-=1;

            const container = this.add.container(100, 30).setScale(0.08); 
            this.contenedor = this.add.image(0, 0, 'contenedor'); 
            this.texto = this.add.text(250,-100,'x '+ this.dato_lvl2,{
             fontSize: 250}); // su origen es 0,0
            this.head = this.add.image(-500, 50, 'head').setScale(15); 
            this.cora = this.add.image(0, 0, 'coraz').setScale(5);
            container.add([
                this.contenedor,
                this.head,
                this.cora,
                this.texto]);

            Nio.setTint(0xff0000);           
            setTimeout(() => {
                this.Nio.clearTint();
                }, 1300);
            this.Nio.setPosition(this.Nio.x-20,this.Nio.y);
            this.Nio.setPosition(300,180);
            this.explosion2.play();
        }
        this.physics.add.collider(this.Nio, this.grupoBala, choqueBala, null, this);
        this.physics.add.collider(this.Nio, this.grupoBala3, choqueBala, null, this);

        function choqueBala2(Nio, grupoBala){
          this.dato_lvl2-=1;

          const container = this.add.container(100, 30).setScale(0.08); 
          this.contenedor = this.add.image(0, 0, 'contenedor'); 
          this.texto = this.add.text(250,-100,'x '+ this.dato_lvl2,{
           fontSize: 250}); // su origen es 0,0
          this.head = this.add.image(-500, 50, 'head').setScale(15); 
          this.cora = this.add.image(0, 0, 'coraz').setScale(5);
          container.add([
              this.contenedor,
              this.head,
              this.cora,
              this.texto]);

          Nio.setTint(0xff0000);           
          setTimeout(() => {
              this.Nio.clearTint();
              }, 1300);
          this.Nio.setPosition(this.Nio.x-20,this.Nio.y);
          this.Nio.setPosition(400,180);
          this.explosion2.play();
      }
      this.physics.add.collider(this.Nio, this.grupoBala2, choqueBala2, null, this);
      this.physics.add.collider(this.Nio, this.grupoBala4, choqueBala2, null, this);
        setTimeout(() => {
          this.add.tween({
              targets: this.grupoBala.getChildren(),
              x: 700,
              duration: 6200,
              repeat: -1,
              easy: 'Power1'
              });
              setTimeout(() => {
                  this.add.tween({
                      targets: this.grupoBala2.getChildren(),
                      x: -0.5859375,
                      duration: 6200,
                      repeat: -1,
                      easy: 'Power1'
                      });

                      setTimeout(() => {
                          this.add.tween({
                              targets: this.grupoBala3.getChildren(),
                              x: 700,
                              duration: 6200,
                              repeat: -1,
                              easy: 'Power1'
                              });

                              setTimeout(() => {
                                  this.add.tween({
                                      targets: this.grupoBala4.getChildren(),
                                      x: -0.5859375,
                                      duration: 6200,
                                      repeat: -1,
                                      easy: 'Power1'
                                      });
                                  
                                  }, 2600);
                          
                          }, 2600);
                  
                  }, 2600);
          }, 2600);

          this.timeline=this.tweens.timeline({
            targets: [this.Morfeo],
            paused: true,
                // loop: 1,
            tweens: [
            {
            y: 300,
            duration: 2000
            },
            {
            x: 600,
            duration: 2000
            }
            ]

            });

            this.timeline2=this.tweens.timeline({
                targets: [this.Morfeo],
                paused: true,
                    // loop: 1,
                tweens: [
                {
                x: 80,
                duration: 2000
                }
                ]
                });

            this.timeline3=this.tweens.timeline({
                targets: [this.Morfeo],
                paused: true,
                    // loop: 1,
                tweens: [
                {
                y: 100,
                duration: 2000
                }
                ]
    
                });

            this.timeline4=this.tweens.timeline({
                targets: [this.EMorfeo],
                paused: true,
                    // loop: 1,
                tweens: [
                {
                x: 660,
                duration: 2000
                }
                ]
                });
                
            this.timeline5=this.tweens.timeline({
                targets: [this.EMorfeo],
                paused: true,
                    // loop: 1,
                tweens: [
                {
                x: 350,
                duration: 2000
                }
                ]
                });
            /////////////////////ITEMS//////////////
            function escudo_lvl2(Nio, escudo){
                this.dato_lvl2+=1;
                this.escudo.destroy();
                setTimeout(() => {
                    this.Nio.clearTint();
                    }, 1300);
            }

            function vida(Nio, cor) {
                this.dato_lvl2+=1;
                const container = this.add.container(100, 30).setScale(0.08); 
                this.contenedor = this.add.image(0, 0, 'contenedor'); 
                this.texto = this.add.text(250,-100,'x '+ this.dato_lvl2,{
                fontSize: 250}); // su origen es 0,0
                this.head = this.add.image(-500, 50, 'head').setScale(15); 
                this.cora = this.add.image(0, 0, 'coraz').setScale(5);
                container.add([
                    this.contenedor,
                    this.head,
                    this.cora,
                    this.texto]);

                this.Nio.setTint(0x1405f6);
                setTimeout(() => {
                    this.Nio.clearTint();
                    }, 600);
                this.cor.destroy();
            }

            setTimeout(() => {
                this.escudo=this.add.image(530,260,'Escudo').setScale(0.4);
                this.physics.add.existing(this.escudo, false);
                this.escudo.body.setCollideWorldBounds(true);
                this.escudo.body.immovable=true;
                this.escudo.body.moves=false;
                this.escudo.body.setSize(90,90);
                this.physics.add.collider(this.Nio,this.escudo,escudo_lvl2,null,this);
                setTimeout(() => {
                    this.escudo.destroy();
                    setTimeout(() => {
                        this.cor = this.add.sprite(100,120,'cora').setScale(0.5);
                        this.physics.add.existing(this.cor, false);
                        this.cor.body.setCollideWorldBounds(true);
                        this.cor.body.immovable=true;
                        this.cor.body.moves=false;
                        this.cor.body.setSize(100,100);
                        this.physics.add.collider(this.Nio,this.cor,vida,null,this);
                        setTimeout(() => {
                            this.cor.destroy();
                            }, 2000);
                        }, 2000);
                    }, 6000);
                
                }, 10000);
    }

    update(time, delta) {
        
        if(this.sal<2){
            this.cursor.up.on('down', () => {
                this.Nio.body.setVelocityY(-300);
                });
            }else{
            this.cursor.up.on('down', () => {
                this.Nio.body.setVelocityY(0);
                });
            }
        

        ///////////////////CAIDA//////////////////////////////////////////////////    
            if(this.Nio.body.velocity.y >= 500)
                {
                   // console.log(this.Nio.body.velocity.y)
                        this.fuerte=1;
                    //    console.log(this.fuerte);
                    this.caida3.play();
                }

                if(this.Nio.body.touching.down && this.fuerte == 1)
                {
                    console.log("Auch!")
                    this.Nio.setTint(0xff0000)
                    setTimeout(() => {
                        this.Nio.clearTint();
                        }, 1300);
                    console.log("Caida");

                    this.dato_lvl2-=1;


                    //Actualizacion del cartel de vidas
                     const container = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
                     this.contenedor= this.add.image(0, 0, 'contenedor'); //su origen es 0.5
                     this.texto = this.add.text(250,-100,`x ${this.dato_lvl2}`,{
                     fontSize: 250}); // su origen es 0,0
                     this.head = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
                     this.cora = this.add.image(0, 0, 'coraz').setScale(5);
                     container.add([
                     this.contenedor,
                     this.head,
                     this.cora,
                     this.texto]);

                    this.fuerte = 0;
                }
        ////////Tweens Morfeo//////////
        if(this.data.list.morfeo==40){
            this.timeline.play();
        }
        if(this.data.list.morfeo==32){
            this.timeline2.play();
        }
        if(this.data.list.morfeo==24){
            // this.transformacion = 1;
            // if(this.transformacion == 1)
            // {
                this.registry.events.emit('transformar');
                this.timeline3.play(); 
                this.data.list.morfeo=23;
            //     this.transformacion = 0;
            // }
             
        }
        if(this.data.list.morfeo==16){
            this.timeline4.play();
        }
        if(this.data.list.morfeo==8){
            this.timeline5.play();
        }
////////////////////////////////////////////////////////////////////////////////////////////
            
        if(this.dato_lvl2 <= 0){
        console.log("Game Over");
        this.scene.start('SceneGO');
        this.scene.stop('SceneE');
        }

               

    }
    }
    export default SceneE;