import { faCat, faDog, faSpider, faCrow, faHorse, faFrog, faFish, faHippo, faDragon, faDove } from '@fortawesome/free-solid-svg-icons';
import { ItemContraseniaInterface } from './itemContrasenia.interface';

 /**
   * Crea el arreglo de iconos de aimales, se cargan desde fontawesome
   * @type {array}
   */
export const iconosContrasenia: ItemContraseniaInterface[] = [
	{ icono: faDog, nombre: "perro" ,seleccionado:false},
	{ icono: faCat, nombre: "gato"  ,seleccionado:false},
	{ icono: faSpider, nombre: "araña"  ,seleccionado:false},
	{ icono: faCrow, nombre: "cuervo" ,seleccionado:false },
	{ icono: faHorse, nombre: "caballo" ,seleccionado:false },
	{ icono: faFrog, nombre: "conejo" ,seleccionado:false },
	{ icono: faFish, nombre: "pescado" ,seleccionado:false },
	{ icono: faHippo, nombre: "hipopotamo" ,seleccionado:false },
	{ icono: faDragon, nombre: "dragon" ,seleccionado:false },
	{ icono: faDove, nombre: "pajaro" ,seleccionado:false },

]