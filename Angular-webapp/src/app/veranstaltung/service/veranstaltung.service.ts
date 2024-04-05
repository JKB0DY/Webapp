import {Inject, Injectable} from '@angular/core';
import {VeranstaltungList} from '../veranstaltung';
import {APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service';
import {AppConfig} from '../../AppConfig/appconfig.interface';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, of} from 'rxjs';
import {Router} from '@angular/router';
import {HardwareList} from '../../hardware/hardware';

@Injectable({
	providedIn: 'root',
})
export class VeranstaltungService {
	constructor(
		@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
		private http: HttpClient,
		private router: Router
	) {}

	getVeranstaltungById(id: number) {
		return this.http
			.get<VeranstaltungList>(`/api/veranstaltung?id=${id}`)
			.pipe(
				catchError((err): Observable<VeranstaltungList> => {
					this.router.navigate(['/veranstaltunglist']);
					return of({} as VeranstaltungList);
				})
			);
	}

	getVeranstaltung() {
		return this.http
			.get<VeranstaltungList[]>('/api/veranstaltung/all')
			.pipe(
				catchError((err) => {
					return of({} as VeranstaltungList[]);
				})
			);
	}

	addVeranstaltung(veranstaltung: VeranstaltungList) {
		if (veranstaltung.name === '') {
			throw new Error('Modell is required');
		} else if (veranstaltung.name === undefined) {
			throw new Error('Modell is required');
		} else {
			return this.http
				.post<VeranstaltungList>(
					'/api/veranstaltung/create',
					veranstaltung
				)
				.pipe(
					catchError((err) => {
						return of({} as VeranstaltungList);
					})
				);
		}
	}

	updateVeranstaltung(veranstaltung: VeranstaltungList) {
		return this.http
			.post<VeranstaltungList>(
				`/api/veranstaltung/update?id=${veranstaltung.id}`,
				veranstaltung
			)
			.pipe(
				catchError((err) => {
					return of({} as VeranstaltungList);
				})
			);
	}

	deleteVeranstaltung(veranstaltungID: number) {
		return this.http
			.delete(`/api/veranstaltung/delete?id=${veranstaltungID}`)
			.pipe(
				catchError((err) => {
					return of({});
				})
			);
	}

	getHardwareByVeranstaltung(veranstaltungID: number) {
		return this.http
			.get<
				HardwareList[]
			>(`/api/veranstaltung-hardware?idveranstaltung=${veranstaltungID}`)
			.pipe(
				catchError((err) => {
					return of({} as VeranstaltungList[]);
				})
			);
	}

	deleteHardwareFromVeranstaltung(
		hardwareID: number,
		veranstaltungID: number
	) {
		return this.http
			.delete(
				`/api/veranstaltung-hardware/delete?idhardware=${hardwareID}&idveranstaltung=${veranstaltungID}`
			)
			.pipe(
				catchError((err) => {
					return of({});
				})
			);
	}

	addHardwareToVeranstaltung(veranstaltungID: number, hardwareID: number) {
		return this.http
			.post(
				`/api/veranstaltung-hardware/create?idhardware=${hardwareID}&idveranstaltung=${veranstaltungID}`,
				{}
			)
			.pipe(
				catchError((err) => {
					return of({});
				})
			);
	}
}
