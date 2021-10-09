import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../models/AuthService.interface';
import { Observable, of, } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

	/** @constructor */
	constructor(private http: HttpClient) { }
	/**
	 * Mock que verifica si el usuario y la contraseña son válidos 
	 * @type {observable}
	 * 
	 * @param  {string}
	 *
	 * @return  {boolean}
   */

	login(params: { usuario: string, pass: string }): Observable<boolean> {

		if (params.usuario === 'juan' && params.pass === 'gatoperroconejo') {
			return of(true);
		}
		return of(false);
	}
}
