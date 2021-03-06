class SceneB extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneB'
    });
    this.salto=0;
    }
    init() {
    console.log('Escena B');
    console.log("Salto inicial", this.salto);
    }
    create() {
        //Musica
        this.registry.events.emit('m2');
        this.disparo = this.sound.add("disparo",{volume: 4});
        this.picos1= this.sound.add("picos",{volume: 4});
        this.salto1 = this.sound.add("salto",{volume: 4});
         ////////////////////////////////////FONDO/////////////////////////////////////////////////////////
        this.data.set('vidas',5);
        this.data.set('balas', 0);
        var sen1 = 0;
        var i = 0;
        var vivo = 0;
        console.log(this.data.list);

         this.add.image(0, 0, 'nivel').setScale(1.4,1.84).setOrigin(0);

         this.grupo_lvl1 = this.physics.add.group();
         this.grupo2_lvl1 = this.physics.add.group();

         this.grupo_lvl1.create(60, 520, 'sue').setScale(0.03);
         this.grupo_lvl1.create(230, 460, 'hielo').setScale(0.02);
         this.grupo_lvl1.create(430, 360, 'hielo').setScale(0.02);
         this.grupo_lvl1.create(580, 280, 'hielo').setScale(0.02);
        //  this.grupo_lvl1.create(660, 200, 'esquinaIzq').setScale(0.05);
         this.esquina = this.add.image(660,200,'esquinaIzq').setScale(0.045);
         this.physics.add.existing(this.esquina, false);
         this.esquina.body.setCollideWorldBounds(true);
         this.esquina.body.immovable=true;
         this.esquina.body.moves=false;
         this.esquina.body.setSize(2000,70);

         this.grupo2_lvl1.create(220, 550, 'picos').setScale(0.5);
         this.grupo2_lvl1.create(310, 520, 'picos').setScale(0.5);
         this.grupo2_lvl1.create(380, 520, 'picos').setScale(0.5);
         this.grupo2_lvl1.create(450, 520, 'picos').setScale(0.5);
         this.grupo2_lvl1.create(520, 520, 'picos').setScale(0.5);
         this.grupo2_lvl1.create(590, 520, 'picos').setScale(0.5);
         this.grupo2_lvl1.create(660, 520, 'picos').setScale(0.5);
         
 
         this.grupo_lvl1.children.iterate( (muros_lvl1) => {
             muros_lvl1.body.setAllowGravity(false);
             muros_lvl1.body.setCollideWorldBounds(true);
             muros_lvl1.body.immovable=true;
             muros_lvl1.body.moves=false;
             } );
        this.grupo2_lvl1.children.iterate( (muros2_lvl1) => {
            muros2_lvl1.body.setCollideWorldBounds(true);
            muros2_lvl1.body.immovable=true;
            muros2_lvl1.body.moves=false;
        } );
        ////////////////////////////////////PERSONAJE////////////////////////////////////////////////////
         
         this.Nio_lvl1 = this.add.sprite(20,430,'nio').setScale(1.3).setScrollFactor(1);
         this.physics.add.existing(this.Nio_lvl1);
         this.physics.add.existing(this.Nio_lvl1, false);
         console.log(this.Nio_lvl1.body);
         this.Nio_lvl1.body.setCollideWorldBounds(true);
         this.Nio_lvl1.body.setSize(20, 40);
         this.Nio_lvl1.body.setOffset(17, 0);
 
 
         this.cursor_lvl1 = this.input.keyboard.createCursorKeys();
 
         this.Nio_lvl1.body.maxVelocity.x = 250;
         
         //Movimiento a la derecha
         this.cursor_lvl1.right.on('down', () => {
             sen1 = 0;
             i = 0;
             this.Nio_lvl1.body.setVelocityX(800);
             this.Nio_lvl1.flipX=0;
             this.Nio_lvl1.body.setOffset(17, 0);
            
         });
         
         this.cursor_lvl1.right.on('up', () => {
             this.Nio_lvl1.body.setVelocityX(0);
         });
 
         //Salto
        if(this.salto<2){
            this.cursor_lvl1.up.on('down', () => {
            this.Nio_lvl1.body.setVelocityY(-300);
            this.salto=this.salto+1;
            console.log("This salto= "+this.salto);
            this.salto1.play();
            });
        }else{
            this.cursor_lvl1.up.on('down', () => {
            this.Nio_lvl1.body.setVelocityY(0);
            console.log("This salto= "+this.salto);
            });
        }
        
         function saltar(Nio_lvl1, grupo_lvl1){
            this.salto=0;
          }
         this.physics.add.collider(this.Nio_lvl1,this.grupo_lvl1,saltar,null,this);
         //Movimiento izquierda
         this.cursor_lvl1.left.on('down', () => { 
            sen1 = 1;
            i = 1;  
             this.Nio_lvl1.body.setVelocityX(-800);
             this.Nio_lvl1.flipX=1;
             this.Nio_lvl1.body.setOffset(3, 0);
         });
         
         this.cursor_lvl1.left.on('up', () => {
             this.Nio_lvl1.body.setVelocityX(0);
         });
 
         this.Nio_lvl1.anims.play('mov');
         this.physics.add.collider(this.Nio_lvl1,this.grupo_lvl1);


         //Colisión con los picos
         function choquePicos(Nio_lvl1, grupo2_lvl1){
            console.log("Cuidado con los picos");
            this.data.list.vidas -= 1;
            console.log(this.data.list);
            this.Nio_lvl1.setPosition(20,440);
            // setTimeout(() => {
            //     this.Nio_lvl1.setPosition(30,430);;
            //     }, 800);

            //Actualizacion del cartel de vidas
            const container_lvl1 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
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

            Nio_lvl1.setTint(0xff0000);
            setTimeout(() => {
                this.Nio_lvl1.clearTint();
                }, 1300);
            this.picos1.play();
          }
         this.physics.add.collider(this.Nio_lvl1,this.grupo2_lvl1,choquePicos,null,this);

         //Disparo Nio
         
         this.cursor_lvl1.space.on('down', () => {
            if(vivo == 0)
        {
            if(i == 0)
            {
                if (sen1 == 0)
                {
                    this.bala_lvl1 = this.physics.add.sprite(this.Nio_lvl1.x,this.Nio_lvl1.y,'disparo').setScale(0.5);
                    this.bala_lvl1.body.setVelocityX(800);
                    this.bala_lvl1.body.setAllowGravity(false); 
                    this.data.list.balas += 1; 
                    console.log(this.data.list.balas);
                    console.log("disparando")
                    //limiteBalas++;
                    //console.log(limiteBalas);
                    //this.physics.add.collider(this.bala_lvl1, this., BalaMorfeo, null, this);
                    this.disparo.play();
                    vivo = 1;
                    BalaMundo(this.bala_lvl1);
                }
            }
            else if (i == 1)
                {
                if (sen1 == 1){
                    this.bala_lvl1 = this.physics.add.sprite(this.Nio_lvl1.x,this.Nio_lvl1.y,'disparo').setScale(0.5);
                    this.bala_lvl1.body.setVelocityX(-800);
                    this.bala_lvl1.body.setAllowGravity(false); 
                    this.data.list.balas += 1; 
                    console.log(this.data.list.balas);
                    console.log("disparando")
                    //limiteBalas++;
                    //console.log(limiteBalas);
                    //this.physics.add.collider(this.bala_lvl1, this., BalaMorfeo, null, this);
                    this.disparo.play();
                    vivo = 1;
                    BalaMundo(this.bala_lvl1);
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
         //Siguiente nivel 
         function cambioScene(Nio_lvl1, esquina){
            console.log("Siguiente parte");
            this.scene.start('SceneC',this.data.get('vidas'),this.data.get('balas'));
            this.scene.stop('SceneB');
          }
          this.physics.add.collider(this.Nio_lvl1,this.esquina,cambioScene,null,this);

          //Siguiente nivel 
         
          //Cartel de vidas
         const container_lvl1 = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
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

            //Camara
        this.cameras.main.setBounds(0, 0, 704, 540);
        this.cameras.main.startFollow(this.Nio_lvl1, true, 0.09, 0.09);
        this.cameras.main.setZoom(1.5);
        // const camera2= this.cameras.add(0, 0, 100, 100);
        // camera2.main.startFollow(this.container_lvl1, true, 0.09,0.9);
        // camera2.main.setZoom(2);

        const camera2 =
        //posición x, posición y, ancho, alto
        this.cameras.add(0, 0, 260, 80).setZoom(1.3)
        camera2.ignore(this.Nio_lvl1);
         setTimeout( () => {
         // coordenada x, coordeada y, duración, interpolación
         camera2.pan(this.container_lvl1.x, this.container_lvl1.y, 3000, 'Sine.easeInOut');
         }, 2000);
        
        }
    update(time, delta) {
        //Doble salto
        if(this.salto<2){
           this.cursor_lvl1.up.on('down', () => {
               this.Nio_lvl1.body.setVelocityY(-300);
               });
        }else{
           this.cursor_lvl1.up.on('down', () => {
               this.Nio_lvl1.body.setVelocityY(0);
               });
        }

        //GameOver
        if(this.data.get('vidas')<=0){
        console.log("Game Over");
        this.salto=0;
        this.scene.pause('SceneB');
        this.scene.start('SceneGO');
            
                      }

    }
}
    export default SceneB;