import {Routes} from '@angular/router';
import {HardwareComponent} from './hardware/hardware.component';
import {VeranstaltungComponent} from './veranstaltung/veranstaltung.component';

export const routes: Routes = [
	{path: 'hardwarelist', component: HardwareComponent},
	{path: 'veranstaltung', component: VeranstaltungComponent},
	{path: '', redirectTo: '/hardwarelist', pathMatch: 'full'},
	{path: '**', redirectTo: '/hardwarelist'},
];
