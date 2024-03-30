import {Inject, Injectable} from '@angular/core';
import {HardwareList} from '../hardware';
import {APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service';
import {AppConfig} from '../../AppConfig/appconfig.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HardwareService {
	hardwareList: HardwareList[] = [];
	constructor(
		@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
		private http: HttpClient
	) {
		console.log(this.config.apiEndpoint);
		console.log('HardwareService created');
	}

	getHardwareById(id: number) {
		return this.http.get<HardwareList>(`/api/hardware?id=${id}`);
	}

	getHardware() {
		return this.http.get<HardwareList[]>('/api/hardware/all');
	}

	addHardware(hardware: HardwareList) {
		if (hardware.modell === '') {
			console.log(hardware);
			throw new Error('Modell is required');
		} else if (hardware.modell === undefined) {
			throw new Error('Modell is required');
		} else {
			return this.http.post<HardwareList>(
				'/api/hardware/create',
				hardware
			);
		}
	}

	updateHardware(hardware: HardwareList) {
		return this.http.post<HardwareList>(
			`/api/hardware/update?id=${hardware.id}`,
			hardware
		);
	}

	deleteHardware(hardwareID: number) {
		return this.http.delete(`/api/hardware/delete?id=${hardwareID}`);
	}
}
