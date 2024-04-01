import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, of} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient) {}

	login(username: string, password: string) {
		return this.http
			.post('/api/auth/signin', {email: username, password: password})
			.pipe(
				catchError((err) => {
					return of([]);
				})
			);
	}
}
