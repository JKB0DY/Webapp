import {Inject, Injectable} from '@angular/core';
import {HardwareList} from '../hardware';
import {APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service';
import {AppConfig} from '../../AppConfig/appconfig.interface';
import {HttpClient} from '@angular/common/http';

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

	getHardware() {
		return this.http.get<HardwareList[]>('/api/hardware/all');
	}
}
