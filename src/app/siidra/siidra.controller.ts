import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common'

import { Authorization } from './authorization.decorator'
import {
  type SiidraAppointmentResponse,
  type SiidraNotificationResponse,
} from './interfaces'
import {
  getSiidraAppointmentMock,
  mockSiidraNotificationResponse,
} from './mocks'
import {
  getSiidraAppointmentSchema,
  type SiidraGetAppointment,
  type SiidraNotification,
  siidraNotificationInputSchema,
} from './schemas'
import { createZodValidationPipe } from './validation.pipe'

// const CorporationIntegrationProvider = {
//   centerTokens: {
//     '109305': '$2y$10$7Xl5GcPgLXBFr145PIzEiO9StSua6VgEhu1DaqCkFOonSHsYAKbLa',
//     '109317': '$2y$10$8im2gzT.SRkN2LNPMtJcnOhUX1fGrnAEK6ie0QYXUVUKWGNazp7Gu',
//     '109323': '$2y$10$jA/D7Ic6JKiJfx.fB3VVdOjEfdTzcXIj1uXY2luU34rwHJ5t24XPe',
//     '109718': '$2y$10$j9wc0NPLUQSAmvXhj.62IeYmNfZPvNqRj419JOHM5arcLiW.5mj2K',
//     '200961': '$2y$10$/Mf5aORmmnuFvc4SPkhZA.1Je/K453.055dHc9znnfyqA77uo1meS',
//   },
//   passBasicAuth: 'wMR2RGIIOVFd8aW',
//   userBasicAuth: 'keiron',
//   appointmentsBaseUrl: 'https://integraciones.ssmn.cl/getAgendasTotem/',
//   notificationBaseUrl: 'https://integraciones.ssmn.cl/setCitacionTotem',
// }

@Controller('/siidra')
export class SiidraController {
  constructor(private readonly logger: Logger) {}

  @Post('/getAgendasTotem')
  @HttpCode(200)
  getAppointments(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Authorization() authorization: string,
    @Body(createZodValidationPipe(getSiidraAppointmentSchema))
    tokenParams: SiidraGetAppointment,
  ): SiidraAppointmentResponse {
    // Generate specific mock data based on RUT
    const rut = tokenParams.rutPaciente

    if (rut === '11111111-1') {
      return getSiidraAppointmentMock('Amarillo', '1', 'Amarillo1', rut)
    } else if (rut === '22222222-2') {
      return getSiidraAppointmentMock('Azul', '1', 'Azul1', rut)
    } else if (rut === '33333333-3') {
      return getSiidraAppointmentMock('Verde', '2', 'Verde2', rut)
    } else if (rut === '44444444-4') {
      return getSiidraAppointmentMock('', '', '', rut)
    }

    // Default mock for any other RUT
    return getSiidraAppointmentMock()
  }

  @Post('/setCitacionTotem')
  @HttpCode(200)
  notificationById(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Authorization() authorization: string,
    @Body(createZodValidationPipe(siidraNotificationInputSchema)) // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: SiidraNotification,
    // typeResponse: 'success' | 'error' = 'success',
  ): SiidraNotificationResponse {
    return mockSiidraNotificationResponse
  }
}
