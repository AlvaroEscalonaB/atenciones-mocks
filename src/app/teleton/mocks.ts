import type {
  TeletonAppointmentResponse,
  TeletonNotificationResponse,
} from './interfaces'

import { DateTime } from 'luxon'

export const getTeletonAppointmentMock = (): TeletonAppointmentResponse => {
  const mockDate = DateTime.now()
  return {
    Data: [
      {
        FichaId: 83_601,
        CitaId: 6_807_991,
        IndicacionActividadId: 3_581_344,
        Desde: mockDate.plus({ minutes: 0 }).toFormat(`yyyy-MM-dd'T'HH:mm:ss`),
        Hasta: mockDate.plus({ minutes: 30 }).toFormat(`yyyy-MM-dd'T'HH:mm:ss`),
        Especialidad: 'KINESIÓLOGO',
        Tratante: 'Carolina Siques Sambuceti',
        Instituto: 'Teleton Ecuador',
        TipoAutorizacion: 0,
        Estado: 5,
        NombrePaciente: 'JORGE DE LA CERDA VALDIVIA',
        Rut: '23024428-6',
        EstadoNombre: 'Agendada',
        LogId: 0,
      },
      {
        FichaId: 83_601,
        CitaId: 6_807_992,
        IndicacionActividadId: 3_581_345,
        Desde: mockDate.plus({ minutes: 30 }).toFormat(`yyyy-MM-dd'T'HH:mm:ss`),
        Hasta: mockDate.plus({ minutes: 60 }).toFormat(`yyyy-MM-dd'T'HH:mm:ss`),
        Especialidad: 'KINESIÓLOGO',
        Tratante: 'Carolina Siques Sambuceti',
        Instituto: 'Teleton Ecuador',
        TipoAutorizacion: 0,
        Estado: 5,
        Rut: '23024428-6',
        NombrePaciente: 'JORGE DE LA CERDA VALDIVIA',
        EstadoNombre: 'Agendada',
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
