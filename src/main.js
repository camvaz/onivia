import Bootloader from "./scenes/Bootloader.js"
import SceneA from "./scenes/SceneA.js"
import SceneB from "./scenes/SceneB.js"
import SceneC from "./scenes/SceneC.js"
import SceneD from "./scenes/SceneD.js"
import SceneE from "./scenes/SceneE.js"
import SceneF from "./scenes/SceneF.js"
import SceneGO from "./scenes/SceneGO.js"
// import SceneC from "./scenes/SceneC.js"

const config = {
    title: "Oniria",		    //Nombre del juego (opcional)
    url: "http://google.es",	    //Dirección de la página del juego (opcional)
    version: "0.0.1",		        //Versión alfanumérica (opcional)
    type: Phaser.AUTO,		        //Tipo de renderizado (WEBGL, CANVAS, AUTO)
                                    // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
    width: 704,			            //Ancho de pantalla del juego
    height: 540, 			        //Alto de pantalla del juego
    parent: "contenedor",		    //Nombre del id del elemento <div> en el index.html
                                    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: true,		            //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", 	//Color de fondo del canvas ()
    scene: [Bootloader,SceneA, SceneB, SceneC, SceneD, SceneE,SceneF,SceneGO],    //Aquí irá la lista de scenas del juego
    banner:{
        hidePhaser: true,
        text: "#fff00f",
        background: [
                "#16a085",
                "#2ecc71",
                "#e74c3c", 
                "#000000"]
    },
    physics: {
        default: 'arcade',
        arcade: {
        gravity: {
        y: 800
        },
        debug: true
        }
        },
};

const game = new Phaser.Game(config);