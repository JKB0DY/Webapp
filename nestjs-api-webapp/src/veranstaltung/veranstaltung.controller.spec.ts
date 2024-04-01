import {Test, TestingModule} from '@nestjs/testing';
import {VeranstaltungController} from './veranstaltung.controller';

describe('VeranstaltungController', () => {
	let controller: VeranstaltungController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [VeranstaltungController],
		}).compile();

		controller = module.get<VeranstaltungController>(
			VeranstaltungController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
