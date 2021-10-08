import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../services/mockAuth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	public formLogin: FormGroup;


	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
	) {

	}

	ngOnInit(): void {
		this.iniciarFormulario();
	}

	iniciarFormulario() {
		this.formLogin = this.fb.group({
			usuario: ["", [Validators.required]],
			pass: ["", Validators.required]
		})
	}

	contrasenia(pass: string) {
		this.formLogin.get("pass")?.setValue(pass)
	}

	iniciarSession() {
		if (!this.formLogin.valid) {
			Swal.fire("Error","Campos imcompletos","warning");
			return;
		}

		const { value } = this.formLogin;

		this.authService.login({ usuario: value.usuario, pass: value.pass })
			.subscribe(resp => {
				if(resp){
					Swal.fire("Ingreso exitoso")
				}else{
					Swal.fire("Usuario o contraseña incorrecta")
				}
			})

	}


}
