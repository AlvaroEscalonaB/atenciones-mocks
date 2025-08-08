import type {
  TeletonAppointmentResponse,
  TeletonNotificationResponse,
} from './interfaces'

import { DateTime } from 'luxon'

export const getTeletonAppointmentMock = (): TeletonAppointmentResponse => {
  const mockDate = DateTime.now()
    .plus({ minutes: 20 })
    .toFormat('yyyy-MM-ddTHH:mm:ss')
  return {
    Data: [
      {
        FichaId: 83_601,
        CitaId: 6_807_991,
        IndicacionActividadId: 3_581_344,
        Desde: mockDate,
        Hasta: mockDate,
        Especialidad: 'KINESIÓLOGO',
        Tratante: 'Carolina Siques Sambuceti',
        Instituto: 'Teleton Ecuador',
        TipoAutorizacion: 0,
        Estado: 5,
        Rut: '23024428-6',
        EstadoNombre: 'Asistida',
        LogId: 0,
      },
    ],
    IsValid: true,
    ModelErrors: {},
  }
}

export const mockTeletonNotificationResponse: TeletonNotificationResponse = {
  Data: {
    Estado: false,
    Mensaje: 'Ud. No tiene citas para realizar CheckIN.',
  },
  IsValid: true,
  ModelErrors: {},
}
