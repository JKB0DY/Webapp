import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './service/login.service';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'bltinv-login',
	standalone: true,
	imports: [CommonModule, FormsModule, NgbAlert],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
	username: string = '';
	password: string = '';
	msg: string = '';

	constructor(
		private loginService: LoginService,
		private router: Router
	) {}
	ngOnInit(): void {}

	login() {
		this.loginService
			.login(this.username, this.password)
			.subscribe((result: any) => {
				if (result['access_token']) {
					this.router.navigate(['/hardwarelist']);
				} else {
					this.msg =
						'Your username and/or password is incorrect. Please try again.';
					this.username = '';
					this.password = '';
				}
			});
	}
}
