import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../models/AuthService.interface';
import { Observable, of, } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
	providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

	/** @constructor */
	constructor(private http: HttpClient) { }
	/**
	 * Verifica si el usuario y la contraseña son válidos 
	 * @type {observable}
	 * 
	 * @param  {params}
	 *
	 * @return  {boolean}
   */

	login(params: { usuario: string, pass: string }): Observable<boolean> {
		return this.http.post(`${environment.host}/auth/login`, { params })
			.pipe(
				map(res => true)
			)
	}

}
