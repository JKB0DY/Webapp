import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {APP_CONFIG, APP_SERVICE_CONFIG} from './AppConfig/appconfig.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideClientHydration(),
		{provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG},
	],
};
