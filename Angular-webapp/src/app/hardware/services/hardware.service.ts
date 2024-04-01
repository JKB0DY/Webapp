import {Inject, Injectable} from '@angular/core';
import {HardwareList} from '../hardware';
import {APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service';
import {AppConfig} from '../../AppConfig/appconfig.interface';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class HardwareService {
	hardwareList: HardwareList[] = [];
	constructor(
		@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
		private http: HttpClient,
		private router: Router
	) {}

	getHardwareById(id: number) {
		return this.http.get<HardwareList>(`/api/hardware?id=${id}`).pipe(
			catchError((err): Observable<HardwareList> => {
				this.router.navigate(['/hardwarelist']);
				return of({} as HardwareList);
			})
		);
	}

	getHardware() {
		this.http
			.get<HardwareList[]>('/api/hardware/all')
			.pipe(
				catchError((err) => {
					return of({} as HardwareList[]);
				})
			)
			.subscribe((hardwareList) => {
				this.hardwareList = hardwareList;
			});
		return this.hardwareList;
	}

	addHardware(hardware: HardwareList) {
		if (hardware.modell === '') {
			console.log(hardware);
			throw new Error('Modell is required');
		} else if (hardware.modell === undefined) {
			throw new Error('Modell is required');
		} else {
			return this.http
				.post<HardwareList>('/api/hardware/create', hardware)
				.pipe(
					catchError((err) => {
						return of({} as HardwareList);
					})
				);
		}
	}

	updateHardware(hardware: HardwareList) {
		return this.http
			.post<HardwareList>(
				`/api/hardware/update?id=${hardware.id}`,
				hardware
			)
			.pipe(
				catchError((err) => {
					return of({} as HardwareList);
				})
			);
	}

	deleteHardware(hardwareID: number) {
		return this.http.delete(`/api/hardware/delete?id=${hardwareID}`).pipe(
			catchError((err) => {
				return of({});
			})
		);
	}
}
