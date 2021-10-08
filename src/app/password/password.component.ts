import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { iconosContrasenia } from '../models/datosContrasenia.model';
import { ItemContraseniaInterface } from '../models/itemContrasenia.interface';

@Component({
	selector: 'app-password',
	templateUrl: './password.component.html',
	styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

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
	 *
	 * @returns Iconos en poscicion aleatoria
	 */
	barajarAnimales(): Array<ItemContraseniaInterface> {
		return iconosContrasenia.sort(() => Math.random() - 0.5);
	}

	itemSeleccionado(icono: ItemContraseniaInterface) {
		this.contrasenia.push(icono.nombre)
		this.onContrasenia.emit(this.contrasenia.join(""))
		console.log(this.contrasenia);
	}

	limpiarContrasenia() {
		this.contrasenia = [];
		this.onContrasenia.emit(this.contrasenia.join(""))
		console.log(this.contrasenia);
	}

}
