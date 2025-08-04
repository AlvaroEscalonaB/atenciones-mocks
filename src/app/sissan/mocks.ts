import type { AppointmentResponse, NotificationResponse } from './interfaces'

import { DateTime } from 'luxon'

export const sissanMockResponse = (): AppointmentResponse => {
  const mockDate = DateTime.now()
    .plus({ minutes: 20 })
    .toFormat('dd-MM-yyyy HH:mm')
  return {
    status: true,
    data: [
      {
        IND_ESTADO: '1',
        NUMCITA: '24651308',
        COD_ACTIVIDAD: '19',
        CONFIRMADA: 'SIN CONFIRMAR',
        FECHA_CREA: mockDate,
        FECHA_CITA: mockDate,
        RUN_PACIENTE: '15987811-2',
        NOMBRE_PACIENTE: 'ALEXIS ANDRES FERREIRA MUÑOZ',
        NUM_CELULAR: '985138338',
        EMAIL: null,
        ID_POLICLINICO: '19',
        NOM_POLI: 'INGRESO A IRA-ERA',
        TIPO_CITA: null,
        ID_PROFESION: '08',
        PROFESIONAL: 'TERAPEUTA OCUPACIONAL',
        SOBRECUPO: 'SI',
        ESTADO_CONFIRMACION: 'PENDIENTE',
        NUM_TELEFO1: '985138338',
        NUM_TELEFO2: null,
        NOMBREPROFESIONAL: 'ALEXIS FERREIRA MUÑOZ',
      },
    ],
  }
}

export const mockErrorAppointmentResponse: AppointmentResponse = {
  status: false,
  error: 'Error al consultar citas',
  data: [],
}

export const mockStringErrorAppointmentResponse = {
  status: true,
  data: 'Error: No se pudieron obtener las citas',
}

export const mockSuccessfulNotificationResponse: NotificationResponse = {
  status: true,
  data: 'Notificación enviada correctamente',
}

export const mockErrorNotificationResponse: NotificationResponse = {
  status: false,
  error: 'Error al enviar notificación',
  data: 'Error interno del servidor',
}
