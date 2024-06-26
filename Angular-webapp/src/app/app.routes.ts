import {Routes} from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {HardwareDetailsComponent} from './hardware/hardware-details/hardware-details.component';
import {HardwareAddComponent} from './hardware/hardware-add/hardware-add.component';
import {HardwareUpdateComponent} from './hardware/hardware-update/hardware-update.component';
import {LoginComponent} from './login/login.component';
import {VeranstaltungAddComponent} from './veranstaltung/veranstaltung-add/veranstaltung-add.component';
import {VeranstaltungUpdateComponent} from './veranstaltung/veranstaltung-update/veranstaltung-update.component';
import {VeranstaltungDetailsComponent} from './veranstaltung/veranstaltung-details/veranstaltung-details.component';
import {HardwareListComponent} from './hardware/hardware-list/hardware-list.component';
import {VeranstaltungListComponent} from './veranstaltung/veranstaltung-list/veranstaltung-list.component';
import {VeranstaltungHardwareAddComponent} from './veranstaltung/veranstaltung-hardware-add/veranstaltung-hardware-add.component';

export const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'hardwarelist', component: HardwareListComponent},
	{path: 'hardwarelist/add', component: HardwareAddComponent},
	{path: 'hardwarelist/edit/:id', component: HardwareUpdateComponent},
	{path: 'hardwarelist/:id', component: HardwareDetailsComponent},
	{path: 'veranstaltunglist', component: VeranstaltungListComponent},
	{path: 'veranstaltunglist/add', component: VeranstaltungAddComponent},
	{
		path: 'veranstaltunglist/edit/:id',
		component: VeranstaltungUpdateComponent,
	},
	{path: 'veranstaltunglist/:id', component: VeranstaltungDetailsComponent},
	{
		path: 'veranstaltunglist/:id/hardware/add',
		component: VeranstaltungHardwareAddComponent,
	},
	{path: 'not-found', component: NotfoundComponent},
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{
		path: '**',
		redirectTo: '/not-found',
	},
];
