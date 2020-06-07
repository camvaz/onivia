class SceneE extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneE'
    });
    }
    init() {
    console.log('Escena E');
    }
    create() {
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
         
         this.Nio = this.add.sprite(200,100,'nio').setScale(1.3);
         this.physics.add.existing(this.Nio);
         this.physics.add.existing(this.Nio, false);
         console.log(this.Nio.body);
         this.Nio.body.setCollideWorldBounds(true);
         this.Nio.body.setSize(20, 40);
         this.Nio.body.setOffset(17, 0);
 
 
         this.cursor = this.input.keyboard.createCursorKeys();
 
         this.Nio.body.maxVelocity.x = 250;
         
         //Movimiento a la derecha
         this.cursor.right.on('down', () => {
             this.Nio.body.setVelocityX(800);
             this.Nio.flipX=0;
             this.Nio.body.setOffset(17, 0);
            
         });
 
         this.cursor.right.on('up', () => {
             this.Nio.body.setVelocityX(0);
         });
 
         //Salto
         this.cursor.up.on('down', () => {
             this.Nio.body.setVelocityY(-350);
             
             });
         
         //Movimiento izquierda
         this.cursor.left.on('down', () => {   
             this.Nio.body.setVelocityX(-800);
             this.Nio.flipX=1;
             this.Nio.body.setOffset(3, 0);
         });
         
         this.cursor.left.on('up', () => {
             this.Nio.body.setVelocityX(0);
         });
 
 
         this.Nio.anims.play('mov');
         this.physics.add.collider(this.Nio,this.grupo);

         const container = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
         this.contenedor = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
         this.texto = this.add.text(250,-100,'x 3',{
             fontSize: 250}); // su origen es 0,0
         this.head = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
         this.cora = this.add.image(0, 0, 'coraz').setScale(5);
         container.add([
             this.contenedor,
             this.head,
             this.cora,
             this.texto]);
        this.cameras.main.setBounds(0, 0, 704, 540);
        this.cameras.main.startFollow(this.Nio, true, 0.09, 0.09);
        this.cameras.main.setZoom(1.5);
        const camera2_2 =
         this.cameras.add(0, 0, 260, 80).setZoom(1.3);
         setTimeout( () => {
         camera2_2.pan(this.container_lvl1_2.x, this.container_lvl1_2.y, 3000, 'Sine.easeInOut');
         }, 2000); 
    }
    update(time, delta) {
    }
    }
    export default SceneE;