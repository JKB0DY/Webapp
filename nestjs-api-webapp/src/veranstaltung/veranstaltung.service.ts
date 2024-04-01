import {Injectable, NotFoundException} from '@nestjs/common';
import {VeranstaltungDto} from './dto';
import {Veranstaltung} from '@prisma/client';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class VeranstaltungService {
	constructor(private prisma: PrismaService) {}

	async create(dto: VeranstaltungDto): Promise<Veranstaltung> {
		try {
			const veranstaltung = await this.prisma.veranstaltung.create({
				data: dto,
			});

			return veranstaltung;
		} catch (error) {
			throw error;
		}
	}
	async update(id: number, dto: VeranstaltungDto) {
		try {
			const veranstaltung = await this.prisma.veranstaltung.findUnique({
				where: {
					id: id,
				},
			});
			if (!veranstaltung) {
				throw new NotFoundException('Hardware not found');
			}
			const updatedVeranstaltung = await this.prisma.veranstaltung.update(
				{
					where: {
						id: id,
					},
					data: dto,
				}
			);
			return updatedVeranstaltung;
		} catch (error) {
			throw error;
		}
	}
	async getOne(id: number): Promise<Veranstaltung> {
		try {
			const veranstaltung = await this.prisma.veranstaltung.findUnique({
				where: {
					id: id,
				},
			});
			if (!veranstaltung) {
				// Return appropriate HTTP code (e.g., 404 Not Found) if hardware is not found
				throw new NotFoundException('Hardware not found');
			}
			return veranstaltung;
		} catch (error) {
			throw error;
		}
	}
	async getAll(): Promise<Veranstaltung[]> {
		return this.prisma.veranstaltung.findMany();
	}
	async delete(id: number): Promise<object> {
		try {
			const veranstaltung = await this.prisma.veranstaltung.findUnique({
				where: {
					id: id,
				},
			});
			if (!veranstaltung) {
				throw new NotFoundException('Hardware not found');
			}

			await this.prisma.veranstaltung.delete({
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
