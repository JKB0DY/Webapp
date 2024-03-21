import {Injectable} from '@nestjs/common';

@Injectable()
export class UserService {
	getUser(id: number) {
		throw new Error('Method not implemented.');
	}
	getAllUsers() {
		throw new Error('Method not implemented.');
	}
}
