import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iconosContrasenia } from '../models/datosContrasenia.model';
import { ItemContraseniaInterface } from '../models/itemContrasenia.interface';
/**
 * Componente donde se cargan los iconos de manera aleatoria
 */
@Component({
	selector: 'app-password',
	templateUrl: './password.component.html',
	styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

	/**
	 * Esta variable emitira la contraseña de acuerdo a los iconos seleccionados
	 */
	@Output() onContrasenia: EventEmitter<string>;

	public iconosAnimales: Array<ItemContraseniaInterface>;
	private contrasenia: Array<string> = [];


	constructor() {
		this.iconosAnimales = this.barajarAnimales();
		this.onContrasenia=new EventEmitter();
	}

	ngOnInit(): void {
	}

	/**
	 * Devuelve los iconos en posición aleatoria
	 * @returns {Array<ItemContraseniaInterface>}
	 */
	barajarAnimales(): Array<ItemContraseniaInterface> {
		return iconosContrasenia.sort(() => Math.random() - 0.5);
	}

	/**
	 * Agrega el nombre del cada animal seleccionado a la contraseña, sin  comillas ni comas
	 * Emite la contraseña al componente padre
	 * @param {icono}
	 */

	itemSeleccionado(icono: ItemContraseniaInterface) {
		this.contrasenia.push(icono.nombre)
		this.onContrasenia.emit(this.contrasenia.join(""))
		//console.log(this.contrasenia);
	}

	/**
	 * Borra la contraseña
	 * @returns
	 */

	limpiarContrasenia():void {
		this.contrasenia = [];
		this.onContrasenia.emit(this.contrasenia.join(""))
		console.log(this.contrasenia);
	}

}
