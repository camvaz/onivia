class SceneC extends Phaser.Scene{
    constructor(){
        super({
            key: 'SceneC'
        });
    this.salta=0;
    }

    init() {
        console.log('Escena ScenaC');
    }
    preload() {
    }
    create(dato,dato2) {
         ////////////////////////////////////FONDO/////////////////////////////////////////////////////////
        this.add.image(0, 0, 'cielo3').setScale(0.55, 0.7);
 
        this.grupo_lvl1_2 = this.physics.add.group();
        this.grupo2_lvl1_2 = this.physics.add.group();
        this.grupo3_lvl1_2 = this.physics.add.group();
        this.grupo4_lvl1_2 = this.physics.add.group();
        this.grupo5_lvl1_2 = this.physics.add.group();

        this.grupo_lvl1_2.create(15, 400, 'muro').setScale(0.02);
        this.grupo_lvl1_2.create(15, 340, 'muro').setScale(0.02);
        this.grupo_lvl1_2.create(15, 280, 'muro').setScale(0.02);
        this.grupo_lvl1_2.create(15, 220, 'muro').setScale(0.02);
    //   this.grupo_lvl1_2.create(15, 280, 'muro').setScale(0.02);
    //   this.grupo_lvl1_2.create(15, 220, 'muro').setScale(0.02);

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

        //this.sigLvl=this.add.image(660,420,'lvl1_2').setScale(0.7);
        this.sigLvl=this.add.sprite(660,420,'portal').setScale(0.7)//setScrollFactor(1);
        this.physics.add.existing(this.sigLvl, false);
        this.sigLvl.body.setCollideWorldBounds(true);
        this.sigLvl.body.immovable=true;
        this.sigLvl.body.moves=false;
        
        //this.sigLvl.body.setSize(30,30);

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
        
          

        //   this.grupo_lvl1_2.create(580, 280, 'hielo').setScale(0.02);
        //  //  this.grupo_lvl1.create(660, 200, 'esquinaIzq').setScale(0.05);

 
        //   this.grupo2_lvl1_2.create(310, 520, 'picos').setScale(0.5);
        //   this.grupo2_lvl1_2.create(380, 520, 'picos').setScale(0.5);
        //   this.grupo2_lvl1_2.create(450, 520, 'picos').setScale(0.5);
        //   this.grupo2_lvl1_2.create(520, 520, 'picos').setScale(0.5);
        //   this.grupo2_lvl1_2.create(590, 520, 'picos').setScale(0.5);
        //   this.grupo2_lvl1_2.create(660, 520, 'picos').setScale(0.5);
          
  
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
            if (this.Nio_lvl1_2.flipX == 0)
            {
                this.bala_lvl1_2 = this.physics.add.sprite(this.Nio_lvl1_2.x,this.Nio_lvl1_2.y,'disparo').setScale(0.5);
                this.bala_lvl1_2.body.setVelocityX(800);
                this.bala_lvl1_2.body.setAllowGravity(false); 
                dato2 += 1; 
                console.log(dato2);
                console.log("disparando")
                //limiteBalas++;
                //console.log(limiteBalas);
                //this.physics.add.collider(this.bala_lvl1, this., BalaMorfeo, null, this);
            }
            else if(this.Nio_lvl1_2.flipX != 0) {
                this.cursor_lvl1_2.space.on('down', () => {
                    this.bala_lvl1_2 = this.physics.add.sprite(this.Nio_lvl1_2.x,this.Nio_lvl1_2.y,'disparo').setScale(0.5);
                    this.bala_lvl1_2.body.setVelocityX(-800);
                    this.bala_lvl1_2.body.setAllowGravity(false); 
                    dato2 += 1; 
                    console.log(dato2);
                    console.log("disparando al reves")
            });
             
            };
        });

          //Colisiones jugador con escenario
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo_lvl1_2);
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo2_lvl1_2);
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo4_lvl1_2);
          this.physics.add.collider(this.Nio_lvl1_2,this.grupo5_lvl1_2);
           //Siguiente nivel 
         function cambioScene2(Nio_lvl1, esquina){
            console.log("Siguiente parte");
            this.scene.start('SceneD',dato,dato2);
            this.scene.stop('SceneC');
          }
          this.physics.add.collider(this.Nio_lvl1_2,this.sigLvl,cambioScene2,null,this);
 
 
        //Siguiente nivel 
        
        //Cartel de vidas
        const container_lvl1_2 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
        this.contenedor_lvl1_2 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        this.texto_lvl1_2 = this.add.text(250,-100,`x ${dato}`,{
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

    }
}
export default SceneC;