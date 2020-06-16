class SceneE extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneE'
    });
    this.sal=0;
    }
    init() {
    console.log('Escena E');
    }
    create(dato,dato2) {
        
//////////////////////////////////////DATOS//////////////////////////////////////////////////////////
        // this.scene.launch('SceneF')
        //this.data.set('vidas', 5);
        this.data.set('curaciones', 1);
        //this.data.set('monstruos', 1)    
 ////////////////////////////////////FONDO/////////////////////////////////////////////////////////
       
         this.add.image(0, 0, 'cielo3').setScale(0.55, 0.7);

         this.grupo = this.physics.add.group();
         this.grupo.create(352, 522, 'suelo');
         this.grupo.create(304,360, "pared");
         this.grupo.create(400,360, "pared");
         this.grupo.create(112,414,"Plataformas"); //plataforma izq abajo
         this.grupo.create(176,306,"Plataformas"); //plataforma izq centro
         this.grupo.create(112,176,"Plataformas"); //plataforma izq arriba
         this.grupo.create(592,414,"Plataformas"); //plataforma der abajo
         this.grupo.create(528,306,"Plataformas"); //plataforma der centro
         this.grupo.create(592,176,"Plataformas"); //plataforma der arriba
 
         this.grupo.children.iterate( (muros) => {
             muros.body.setAllowGravity(false);
             muros.body.setCollideWorldBounds(true);
             muros.body.immovable=true;
             muros.body.moves=false;
             } );
 
////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
         
         /////NIO
         this.Nio = this.add.sprite(200,100,'nio').setScale(1.3);
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
                 }, 6000);
 
  /////////////////////////////CONTROLES///////////////////////////////////////////////////////////
         this.cursor = this.input.keyboard.createCursorKeys();
 
         this.Nio.body.maxVelocity.x = 250;
         
         //Movimiento a la derecha
         this.cursor.right.on('down', () => {
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
        this.Nio.body.setVelocityY(-300);
        this.sal=this.sal+1;
        console.log("This salto= "+this.sal);
        });
        }else{
            this.cursor.up.on('down', () => {
            this.Nio.setVelocityY(0);
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
             this.Nio.body.setVelocityX(-800);
             this.Nio.flipX=1;
             this.Nio.body.setOffset(3, 0);
            // sentido = 1;
         });
 
 
         this.Nio.anims.play('mov');
         //this.Morfeo.anims.play('mov');
//////////////////////////////////////////DISPARO///////////////////////////////////////////

    this.cursor.space.on('down', () => {
        if (this.Nio.flipX == 0)
        {
            this.bala = this.physics.add.sprite(this.Nio.x,this.Nio.y,'disparo').setScale(0.5);
            this.bala.body.setVelocityX(800);
            this.bala.body.setAllowGravity(false); 
            dato2 += 1; 
            console.log(dato2);
            console.log("disparando")
            //limiteBalas++;
            //console.log(limiteBalas);
            this.physics.add.collider(this.bala, this.Morfeo, BalaMorfeo, null, this);
        }
        else if(this.Nio.FlipX != 0) {
            this.cursor.space.on('down', () => {
                this.bala = this.physics.add.sprite(this.Nio.x,this.Nio.y,'disparo').setScale(0.5);
                this.bala.body.setVelocityX(-800);
                this.bala.body.setAllowGravity(false); 
                dato2 += 1; 
                console.log(dato2);
                console.log("disparando al reves")
        });
         
        };
    
 });


    /////////////////////////EVENTOS///////////////////////////////////////////////////////////
    this.physics.add.collider(this.Nio,this.grupo);

    this.physics.add.collider(this.Nio, this.Morfeo, ChoqueMorfeo, null, this);
    this.physics.add.overlap(this.Nio, this.coraa, tomar , null, this);
    

  
    function BalaMorfeo (bala, Morfeo)
        {
        Morfeo.setTint(0xff0000);
        setTimeout(() => {
            this.Nio.clearTint();
            }, 1300);
         console.log("Morfeo recibió daño");
         //this.registry.events.emit('daño', 1); 
         this.bala.destroy();  
           
        }

    function ChoqueMorfeo (Nio, Morfeo)
        {
            dato-=1;
            this.data.set('vidas', 5);
            const container = this.add.container(100, 30).setScale(0.08); 
            this.contenedor = this.add.image(0, 0, 'contenedor'); 
            this.texto = this.add.text(250,-100,'x '+ dato,{
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
           
        }

    function tomar(Nio, coraa){
        coraa.destroy();
        console.log("tomó el objeto")
        this.registry.events.emit('curar', 1);
        };

        this.cameras.main.setBounds(0, 0, 704, 540);
        this.cameras.main.startFollow(this.Nio, true, 0.09, 0.09);
        this.cameras.main.setZoom(1.5);

        // this.data.set('vidas', 5);
        const container = this.add.container(100, 30).setScale(0.08); 
        this.contenedor = this.add.image(0, 0, 'contenedor'); 
        this.texto = this.add.text(250,-100,'x '+ dato,{
         fontSize: 250}); // su origen es 0,0
        this.head = this.add.image(-500, 50, 'head').setScale(15); 
        this.cora = this.add.image(0, 0, 'coraz').setScale(5);
        container.add([
            this.contenedor,
            this.head,
            this.cora,
            this.texto]);

         const camera2_2 =
          this.cameras.add(0, 0, 260, 80).setZoom(1.3);
          setTimeout( () => {
          camera2_2.pan(this.container.x, this.container.y, 3000, 'Sine.easeInOut');
          }, 2000); 
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
    }
    }
    export default SceneE;