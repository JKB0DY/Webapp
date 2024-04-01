import {Test, TestingModule} from '@nestjs/testing';
import {VeranstaltungService} from './veranstaltung.service';

describe('VeranstaltungService', () => {
	let service: VeranstaltungService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [VeranstaltungService],
		}).compile();

		service = module.get<VeranstaltungService>(VeranstaltungService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
