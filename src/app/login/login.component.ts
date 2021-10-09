import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../services/mockAuth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	public formLogin: FormGroup;
	public contraseniaAstericos: string = "";

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
	) { }

	ngOnInit(): void {
		this.iniciarFormulario();
	}

	/**
	 * Inicia le formulario login
	  */
	iniciarFormulario() {
		this.formLogin = this.fb.group({
			usuario: ["", [Validators.required]],
			pass: ["", Validators.required],
			passAsteriscos: [{value:"",disabled:true}]
		});
	}

	/**
	 * Obtiene el password emitida por el componente app-password
	 * @param pass {string}
	 */
	contrasenia(pass: string) {
		this.formLogin.get("pass")?.setValue(pass)
		if (pass == "" || pass == null) {
			this.getControl("passAsteriscos")?.setValue("")
		} else {
			this.getControl("passAsteriscos")?.setValue(this.getControl("passAsteriscos")?.value + "*");
		}

	}
/**
 * Obtiene un objeto del formulario reactivo
 * @param campo 
 * @returns 
 */
	private getControl(campo: string): AbstractControl |null {
		return this.formLogin.get(campo);
	}
	/**
	 * Verifica el inicio de sesión correcto
	 * Si los parámetros no vienen completos devuelve falso 
	 * Si vienen los parámetros completos verifica que coincidan con el password válido 
	 * @param  {string} - usuario, pass  
	 * @return  {boolean} o {string}  
	 */
	iniciarSession() {
		if (!this.formLogin.valid) {
			Swal.fire("Error", "Campos imcompletos", "warning");
			return;
		}

		const { value } = this.formLogin;

		this.authService.login({ usuario: value.usuario, pass: value.pass })
			.subscribe(resp => {
				if (resp) {
					Swal.fire("Ingreso exitoso")
				} else {
					Swal.fire("Usuario o contraseña incorrecta")
				}
			})

	}


}
