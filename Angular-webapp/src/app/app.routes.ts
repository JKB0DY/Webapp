import {Routes} from '@angular/router';
import {HardwareComponent} from './hardware/hardware.component';
import {VeranstaltungComponent} from './veranstaltung/veranstaltung.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {HardwareDetailsComponent} from './hardware/hardware-details/hardware-details.component';

export const routes: Routes = [
	{path: 'hardwarelist', component: HardwareComponent},
	{path: 'hardwarelist/:id', component: HardwareDetailsComponent},
	{path: 'veranstaltung', component: VeranstaltungComponent},
	{path: 'not-found', component: NotfoundComponent},
	{path: '', redirectTo: '/hardwarelist', pathMatch: 'full'},
	{
		path: '**',
		redirectTo: '/not-found',
	},
];
