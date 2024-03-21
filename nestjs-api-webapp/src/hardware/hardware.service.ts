import {Injectable, NotFoundException} from '@nestjs/common';
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

	async getOne(id: number): Promise<Hardware> {
		try {
			const hardware = await this.prisma.hardware.findUnique({
				where: {
					id: id,
				},
			});
			if (!hardware) {
				// Return appropriate HTTP code (e.g., 404 Not Found) if hardware is not found
				throw new NotFoundException('Hardware not found');
			}
			return hardware;
		} catch (error) {
			throw error;
		}
	}

	async update(id: number, dto: HardwareDto): Promise<Hardware> {
		try {
			const hardware = await this.prisma.hardware.findUnique({
				where: {
					id: id,
				},
			});
			if (!hardware) {
				throw new NotFoundException('Hardware not found');
			}
			const updatedHardware = await this.prisma.hardware.update({
				where: {
					id: id,
				},
				data: dto,
			});
			return updatedHardware;
		} catch (error) {
			throw error;
		}
	}

	async delete(id: number): Promise<object> {
		try {
			const hardware = await this.prisma.hardware.findUnique({
				where: {
					id: id,
				},
			});
			if (!hardware) {
				throw new NotFoundException('Hardware not found');
			}

			await this.prisma.hardware.delete({
				where: {
					id: id,
				},
			});

			return {message: 'Hardware deleted'};
		} catch (error) {
			throw error;
		}
	}
}
