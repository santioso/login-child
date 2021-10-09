import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../models/AuthService.interface';
import { Observable, of, } from 'rxjs';

/**
 * Este servicio permite hacer el Mock para pruebas
 * @author Santiago Osorio
 */

@Injectable({
	providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

	constructor(private http: HttpClient) { }

	/**
	 * Método que verifica si el usuario y la contraseña son válidos 
	 * @param params 
	 * @returns   Observable<boolean> Obserbable con la verificacion si los datos del usuario son correctos
	 */
	login(params: { usuario: string, pass: string }): Observable<boolean> {

		if (params.usuario === 'juan' && params.pass === 'gatoperroconejo') {
			return of(true);
		}
		return of(false);
	}
}
