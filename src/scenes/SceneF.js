class SceneF extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneF'
    });
    }
    init() {
    console.log('Escena F');
    }

    create() {
        

        
///////////////////////////////////CURACION/////////////////////////////
        // this.registry.events.on('curar', (curar) => {
        // console.log('Se ha emitido el evento', curar);
        
        // console.log("VIDA LLENA")
        //      this.data.list.curaciones -= 1;
        //      this.data.setValue('vidas', 5);
        //      console.log(this.data.list);
        //      this.contenedor.destroy()

        //      const container = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
        //      this.contenedor = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
        //      this.texto = this.add.text(250,-100,'x '+ this.data.get('vidas'),{
        //                  fontSize: 250}); // su origen es 0,0
        //     this.head = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
        //     this.cora = this.add.image(0, 0, 'coraz').setScale(5);
        //         container.add([
        //          this.contenedor,
        //          this.head,
        //          this.cora,
        //          this.texto]);
                    
        // });
///////////////////////////////RECIBIR DAÑO///////////////////////////////

    this.registry.events.on('daño', (daño) => {
    console.log('Se ha emitido el evento', daño);

    this.data.list.vidas -= 1;
             console.log(this.data.list);
             this.contenedor.destroy()

             const container = this.add.container(100, 30).setScale(0.08); //su origen es 0.5
             this.contenedor = this.add.image(0, 0, 'contenedor'); //su origen es 0.5
             this.texto = this.add.text(250,-100,'x '+ this.data.get('vidas'),{
                 fontSize: 250}); // su origen es 0,0
             this.head = this.add.image(-500, 50, 'head').setScale(15); //su origen es 0.5
             this.cora = this.add.image(0, 0, 'coraz').setScale(5);
             container.add([
                 this.contenedor,
                 this.head,
                 this.cora,
                 this.texto]);         });
//////////////////////////////CAMARA VIDAS/////////////////////////////////

         const camera2_2 =
         this.cameras.add(0, 0, 260, 80).setZoom(1.3);
         setTimeout( () => {
         camera2_2.pan(this.container_lvl1_2.x, this.container_lvl1_2.y, 3000, 'Sine.easeInOut');
         }, 2000); 

    }


    update(time, delta) {
        
    }
}
    export default SceneF;