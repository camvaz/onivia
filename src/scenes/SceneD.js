class SceneD extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneD'
    });
    this.salt=0;
    }
    init() {
    console.log('Escena D');
    }
    create(dato,dato2) {
        this.add.image(0, 0, 'cielo3').setScale(0.55, 0.7);

        this.grupo_lvl1_3 = this.physics.add.group();

        this.grupo_lvl1_3.create(-60, 530, 'piso');

        this.piso_lvl1=this.add.image(140, 530, 'piso');
        this.physics.add.existing(this.piso_lvl1, false);
        this.piso_lvl1.body.setCollideWorldBounds(true);
        this.piso_lvl1.body.immovable=true;
        this.piso_lvl1.body.moves=false;

        this.grupo_lvl1_3.create(240, 530, 'piso');
        this.grupo_lvl1_3.create(200,430, 'flotante').setScale(0.02);
        this.grupo_lvl1_3.create(310, 530, 'piso');
        this.grupo_lvl1_3.create(380, 530, 'piso');
        this.grupo_lvl1_3.create(450, 530, 'piso');
        this.grupo_lvl1_3.create(520, 530, 'piso');
        this.grupo_lvl1_3.create(590, 530, 'piso');
        this.grupo_lvl1_3.create(660, 530, 'piso');

        this.grupo_lvl1_3.children.iterate( (muros_lvl1_3) => {
            muros_lvl1_3.body.setCollideWorldBounds(true);
            muros_lvl1_3.body.immovable=true;
            muros_lvl1_3.body.moves=false;
        } );

        this.bala2_lvl1=this.add.image(390,420,'balaLvl1').setScale(0.7);
        this.physics.add.existing(this.bala2_lvl1, false);
        this.bala2_lvl1.body.setCollideWorldBounds(true);
        this.bala2_lvl1.body.immovable=true;
        this.bala2_lvl1.body.moves=false;
        this.bala2_lvl1.setVisible(0);

        this.tubo=this.add.image(410,430,'tubo');
        this.physics.add.existing(this.tubo, false);
        this.tubo.body.setCollideWorldBounds(true);
        this.tubo.body.immovable=true;
        this.tubo.body.moves=false;

        this.sigLvl2=this.add.image(660,420,'lvl1_2').setScale(0.7);
        this.physics.add.existing(this.sigLvl2, false);
        this.sigLvl2.body.setCollideWorldBounds(true);
        this.sigLvl2.body.immovable=true;
        this.sigLvl2.body.moves=false;

        ////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
          
        this.Nio_lvl1_3 = this.add.sprite(20,100,'nio').setScale(1.3).setScrollFactor(1);
        this.physics.add.existing(this.Nio_lvl1_3);
        this.physics.add.existing(this.Nio_lvl1_3, false);
        console.log(this.Nio_lvl1_3.body);
        this.Nio_lvl1_3.body.setCollideWorldBounds(true);
        this.Nio_lvl1_3.body.setSize(20, 40);
        this.Nio_lvl1_3.body.setOffset(17, 0);


        this.cursor_lvl1_3 = this.input.keyboard.createCursorKeys();

        this.Nio_lvl1_3.body.maxVelocity.x = 250;
        
        //Movimiento a la derecha
        this.cursor_lvl1_3.right.on('down', () => {
            this.Nio_lvl1_3.body.setVelocityX(800);
            this.Nio_lvl1_3.flipX=0;
            this.Nio_lvl1_3.body.setOffset(17, 0);
           
        });
        
        this.cursor_lvl1_3.right.on('up', () => {
            this.Nio_lvl1_3.body.setVelocityX(0);
        });

        //Salto
       if(this.salt<2){
           this.cursor_lvl1_3.up.on('down', () => {
           this.Nio_lvl1_3.body.setVelocityY(-300);
           this.salt=this.salt+1;
           console.log("This salto= "+this.salt);
           });
       }else{
           this.cursor_lvl1_3.up.on('down', () => {
           this.Nio_lvl1_3.body.setVelocityY(0);
           console.log("This salto= "+this.salt);
           });
       }
       
       //Vuelve la variable salta a 0
        function salt(Nio_lvl1_3, grupo_lvl1_3){
           this.salt=0;
         }
        this.physics.add.collider(this.Nio_lvl1_3,this.grupo_lvl1_3,salt,null,this);

        //Movimiento izquierda
        this.cursor_lvl1_3.left.on('down', () => {   
            this.Nio_lvl1_3.body.setVelocityX(-800);
            this.Nio_lvl1_3.flipX=1;
            this.Nio_lvl1_3.body.setOffset(3, 0);
        });
        
        this.cursor_lvl1_3.left.on('up', () => {
            this.Nio_lvl1_3.body.setVelocityX(0);
        });

        this.Nio_lvl1_3.anims.play('mov');

        //Disparo Nio
       this.cursor_lvl1_3.space.on('down', () => {
          if (this.Nio_lvl1_3.flipX == 0)
          {
              this.bala_lvl1_3 = this.physics.add.sprite(this.Nio_lvl1_3.x,this.Nio_lvl1_3.y,'disparo').setScale(0.5);
              this.bala_lvl1_3.body.setVelocityX(800);
              this.bala_lvl1_3.body.setAllowGravity(false); 
                dato2+= 1; 
              console.log(dato2);
              console.log("disparando")
              //limiteBalas++;
              //console.log(limiteBalas);
              //this.physics.add.collider(this.bala_lvl1, this., BalaMorfeo, null, this);
          }
          else if(this.Nio_lvl1_3.flipX != 0) {
              this.cursor_lvl1_3.space.on('down', () => {
                  this.bala_lvl1_3 = this.physics.add.sprite(this.Nio_lvl1_3.x,this.Nio_lvl1_3.y,'disparo').setScale(0.5);
                  this.bala_lvl1_3.body.setVelocityX(-800);
                  this.bala_lvl1_3.body.setAllowGravity(false); 
                  dato2 += 1; 
                  console.log(dato2);
                  console.log("disparando al reves")
          });
           
          };
      });

      //colisiones
      this.physics.add.collider(this.Nio_lvl1_3,this.tubo);

        function activar(Nio_lvl1_3, piso_lvl1){
            this.bala2_lvl1.setVisible(1);
            this.salt=0;
        }
        this.physics.add.collider(this.Nio_lvl1_3,this.piso_lvl1,activar,null,this);

        if(this.bala2_lvl1.setVisible==true){
            this.bala2_lvl1.body.setVelocityX(-400)
        }

      function choqueBala(Nio_lvl1_3, bala2_lvl1){
        dato-=1;
        const container_lvl1_3 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
        this.contenedor_lvl1_3 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        this.texto_lvl1_3 = this.add.text(250,-100,`x ${dato}`,{
            fontSize: 250}); // su origen es 0,0
        this.head_lvl1_3 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
        this.cora_lvl1_3 = this.add.image(0, 0, 'coraz').setScale(5);
        container_lvl1_3.add([
            this.contenedor_lvl1_3,
            this.head_lvl1_3,
            this.cora_lvl1_3,
            this.texto_lvl1_3]);
        
            Nio_lvl1_3.setTint(0xff0000);
            setTimeout(() => {
                this.Nio_lvl1_3.clearTint();
                }, 1300);
            this.bala2_lvl1.destroy();
        }
        this.physics.add.collider(this.Nio_lvl1_3,this.bala2_lvl1,choqueBala,null,this);

        function cambioSceneLvl2(Nio_lvl1_3, sigLvl2){
            console.log("Siguiente parte");
            this.scene.start('SceneE',dato,dato2);
            this.scene.stop('SceneD');
          }
          this.physics.add.collider(this.Nio_lvl1_3,this.sigLvl2,cambioSceneLvl2,null,this);
 

      //Cartel de vidas
      const container_lvl1_3 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
      this.contenedor_lvl1_3 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
      this.texto_lvl1_3 = this.add.text(250,-100,`x ${dato}`,{
          fontSize: 250}); // su origen es 0,0
      this.head_lvl1_3 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
      this.cora_lvl1_3 = this.add.image(0, 0, 'coraz').setScale(5);
      container_lvl1_3.add([
          this.contenedor_lvl1_3,
          this.head_lvl1_3,
          this.cora_lvl1_3,
          this.texto_lvl1_3]);


      //Camara
      this.cameras.main.setBounds(0, 0, 704, 540);
      this.cameras.main.startFollow(this.Nio_lvl1_3, true, 0.09, 0.09);
      this.cameras.main.setZoom(1.5);

      const camera2_3 =
      this.cameras.add(0, 0, 260, 80).setZoom(1.3);
      setTimeout( () => {
      camera2_3.pan(this.container_lvl1_3.x, this.container_lvl1_3.y, 3000, 'Sine.easeInOut');
      }, 2000); 

    this.cora_lvl1 = this.add.sprite(540,400,'cora').setScale(0.5);
    this.physics.add.existing(this.cora_lvl1, false);
    this.cora_lvl1.body.setCollideWorldBounds(true);
    // this.piso_lvl1.body.immovable=true;
    // this.piso_lvl1.body.moves=false;
    function activCora(Nio_lvl1_3, cora_lvl1){
        dato+=1;
        const container_lvl1_3 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
        this.contenedor_lvl1_3 = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        this.texto_lvl1_3 = this.add.text(250,-100,`x ${dato}`,{
            fontSize: 250}); // su origen es 0,0
        this.head_lvl1_3 = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
        this.cora_lvl1_3 = this.add.image(0, 0, 'coraz').setScale(5);
        container_lvl1_3.add([
            this.contenedor_lvl1_3,
            this.head_lvl1_3,
            this.cora_lvl1_3,
            this.texto_lvl1_3]);

        Nio_lvl1_3.setTint(0xff0000);
        setTimeout(() => {
            this.Nio_lvl1_3.clearTint();
            }, 1300);
        this.bala2_lvl1.destroy();
        this.cora_lvl1.destroy();
    }
    this.physics.add.collider(this.Nio_lvl1_3,this.cora_lvl1,activCora,null,this);

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
                this.coraa_lvl1.anims.play('blink')
                }, 6000);
    }

    update(time, delta) {
        if(this.salt<2){
            this.cursor_lvl1_3.up.on('down', () => {
                this.Nio_lvl1_3.body.setVelocityY(-300);
                });
            }else{
            this.cursor_lvl1_3.up.on('down', () => {
                this.Nio_lvl1_3.body.setVelocityY(0);
                });
            }
        
    }
}
    export default SceneD;