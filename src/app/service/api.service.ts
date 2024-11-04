import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(public api: HttpClient) { }

	login(data: any) {
		return this.api.post('http://localhost:3000/api/login', data).pipe(
			tap((data: any) => {
				if (!data.error) {
					localStorage.setItem('user', JSON.stringify(data));
				}
			})
		)
	}

	register(data: any) {
		return this.api.post('http://localhost:3000/api/register', data);
	}
}
