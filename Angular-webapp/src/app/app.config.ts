import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {APP_CONFIG, APP_SERVICE_CONFIG} from './AppConfig/appconfig.service';
import {requestInterceptor} from './request.interceptor';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withInterceptors([requestInterceptor])),
		provideClientHydration(),
		{provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG},
		provideAnimationsAsync(),
	],
};
