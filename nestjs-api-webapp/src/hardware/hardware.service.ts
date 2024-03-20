import {Injectable} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import {HardwareDto} from './dto';
import {Hardware} from '@prisma/client';

@Injectable()
export class HardwareService {
	constructor(private prisma: PrismaService) {}

	async create(dto: HardwareDto) {
		try {
			const hardware = await this.prisma.hardware.create({
				data: dto,
			});

			return hardware;
		} catch (error) {
			throw error;
		}
	}

	async getAll(): Promise<Hardware[]> {
		return this.prisma.hardware.findMany();
	}
}
