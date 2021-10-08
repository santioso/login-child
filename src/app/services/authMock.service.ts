import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../models/AuthService.interface';
import { Observable, of, } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class AuthMockService implements AuthServiceInterface {


	constructor(private http: HttpClient) { }

	login(params: { usuario: string, pass: string }): Observable<boolean> {

		if (params.usuario === 'juan' && params.pass === 'gatoperroconejo') {
			return of(true);
		}
		return of(false);
	}

}
