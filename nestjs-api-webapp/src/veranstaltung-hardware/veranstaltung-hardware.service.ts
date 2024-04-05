import {Injectable, NotFoundException} from '@nestjs/common';
import {Hardware, VeranstaltungHardware} from '@prisma/client';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class VeranstaltungHardwareService {
	constructor(private prisma: PrismaService) {}

	async create(
		idHardware: number,
		idveranstaltung: number
	): Promise<VeranstaltungHardware> {
		try {
			const veranstaltungsHardware =
				await this.prisma.veranstaltungHardware.create({
					data: {
						veranstaltungID: idveranstaltung,
						hardwareID: idHardware,
					},
				});

			return veranstaltungsHardware;
		} catch (error) {
			return null;
		}
	}

	async getAllIDHardware(id: number): Promise<any> {
		return this.prisma.veranstaltung.findMany({
			where: {
				veranstaltungHardware: {
					some: {
						hardwareID: id,
					},
				},
			},
		});
	}

	async getAllIDVeranstaltung(id: number): Promise<Hardware[]> {
		return this.prisma.hardware.findMany({
			where: {
				veranstaltungHardware: {
					some: {
						veranstaltungID: id,
					},
				},
			},
		});
	}

	async delete(idHardware: number, idVeranstaltung: number): Promise<object> {
		try {
			const veranstaltung = await this.prisma.veranstaltung.findMany({
				where: {
					veranstaltungHardware: {
						some: {
							hardwareID: idHardware,
							veranstaltungID: idVeranstaltung,
						},
					},
				},
			});
			if (!veranstaltung) {
				throw new NotFoundException('Hardware/Veranstaltung not found');
			}

			await this.prisma.veranstaltungHardware.delete({
				where: {
					veranstaltungID_hardwareID: {
						veranstaltungID: idVeranstaltung,
						hardwareID: idHardware,
					},
				},
			});

			return {message: 'Hardware/Veranstaltung deleted'};
		} catch (error) {
			throw error;
		}
	}
}
