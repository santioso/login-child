import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../models/AuthService.interface';
import { Observable, of, } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
/**
 * Este servicio permite hacer la validacion del usuario contra el back-end
 * @author Santiago Osorio
 */
@Injectable({
	providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

	constructor(private http: HttpClient) { }
	
	/**
	 * Método que realiza la peticion al servidor para validar los datos de inicio de sesion ingresados
   */
	login(params: { usuario: string, pass: string }): Observable<boolean> {
		return this.http.post(`${environment.host}/auth/login`, { params })
			.pipe(
				map(res => true)
			)
	}

}
