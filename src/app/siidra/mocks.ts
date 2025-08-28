import type {
  SiidraAppointmentResponse,
  SiidraNotificationResponse,
} from './interfaces'

import { DateTime } from 'luxon'

export const getSiidraAppointmentMock = (): SiidraAppointmentResponse => {
  const mockDate = DateTime.now()
  return {
    estado: 'OK',
    data: [
      {
        idCupo: 73438971,
        fecha: mockDate.toFormat('yyyy-MM-dd'),
        hora2: mockDate.plus({ hours: 1 }).toFormat('HH:mm'),
        rutPaciente: '9905168-K',
        nombres: 'MARTA DE LAS MERCEDE',
        primerApellido: 'ESPINOZA',
        segundoApellido: 'VÁSQUEZ',
        nombreSocial: '',
        prevision: 'FONASA B',
        fechaNacimiento: '1963-04-16',
        poseeDiscapacidad: 'N',
        cuidador: 'N',
        rutProfesional: '15334457-4',
        nombresProfesional: 'Isabel',
        primerApellidoProfesional: 'Urbina',
        segundoApellidoProfesional: 'Castillo',
        profesion: 'Podologo(a)',
        prestacion: 'Consulta Podologia',
        sector: 'Azul',
        box: '2',
        sectorBox: 'Azul2',
      },
    ],
    mensaje: 'Agendas encontradas',
  }
}

export const getSiidraNoAppointments = (): SiidraAppointmentResponse => {
  return {
    estado: 'NOK',
    data: [],
    mensaje: 'No se encontraron prestaciones marcadas para totem',
  }
}

export const mockSiidraNotificationResponse: SiidraNotificationResponse = {
  estado: 'OK',
  mensaje: '',
  rut_paciente: {
    id_registro: 123,
    id_programacion: 456,
    fecha_recepcion: '2023-03-15',
  },
}
