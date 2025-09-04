import type {
  SiidraAppointmentResponse,
  SiidraNotificationResponse,
} from './interfaces'

import { DateTime } from 'luxon'

export const getSiidraAppointmentMock = (
  sector?: string,
  box?: string,
  sectorBox?: string,
  rutPaciente?: string,
): SiidraAppointmentResponse => {
  const mockDate = DateTime.now()

  // Default values if not provided
  const finalSector = sector ?? 'Azul'
  const finalBox = box ?? '2'
  const finalSectorBox = sectorBox ?? 'Azul2'
  const finalRut = rutPaciente ?? '9905168-K'

  // Generate different patient data based on RUT
  let patientData = {
    nombres: 'MARTA DE LAS MERCEDE',
    primerApellido: 'ESPINOZA',
    segundoApellido: 'VÁSQUEZ',
    fechaNacimiento: '1963-04-16',
    prevision: 'FONASA B',
  }

  // Generate different professional data based on RUT
  let professionalData = {
    rutProfesional: '15334457-4',
    nombresProfesional: 'Isabel',
    primerApellidoProfesional: 'Urbina',
    segundoApellidoProfesional: 'Castillo',
    profesion: 'Podologo(a)',
    prestacion: 'Consulta Podologia',
  }

  if (rutPaciente === '11111111-1') {
    patientData = {
      nombres: 'JUAN CARLOS',
      primerApellido: 'RODRIGUEZ',
      segundoApellido: 'MARTINEZ',
      fechaNacimiento: '1975-08-12',
      prevision: 'FONASA A',
    }
    professionalData = {
      rutProfesional: '12345678-9',
      nombresProfesional: 'Carlos',
      primerApellidoProfesional: 'Mendoza',
      segundoApellidoProfesional: 'Rivera',
      profesion: 'Medico General',
      prestacion: 'Consulta Medicina General',
    }
  } else if (rutPaciente === '22222222-2') {
    patientData = {
      nombres: 'MARIA ELENA',
      primerApellido: 'GONZALEZ',
      segundoApellido: 'LOPEZ',
      fechaNacimiento: '1982-03-25',
      prevision: 'FONASA C',
    }
    professionalData = {
      rutProfesional: '98765432-1',
      nombresProfesional: 'Ana',
      primerApellidoProfesional: 'Torres',
      segundoApellidoProfesional: 'Sanchez',
      profesion: 'Enfermera',
      prestacion: 'Control de Enfermeria',
    }
  } else if (rutPaciente === '33333333-3') {
    patientData = {
      nombres: 'PEDRO ANTONIO',
      primerApellido: 'SILVA',
      segundoApellido: 'RAMIREZ',
      fechaNacimiento: '1968-11-07',
      prevision: 'ISAPRE',
    }
    professionalData = {
      rutProfesional: '11223344-5',
      nombresProfesional: 'Roberto',
      primerApellidoProfesional: 'Vargas',
      segundoApellidoProfesional: 'Pinto',
      profesion: 'Kinesiologo',
      prestacion: 'Sesion de Kinesiologia',
    }
  } else if (rutPaciente === '44444444-4') {
    patientData = {
      nombres: 'ANA LUCIA',
      primerApellido: 'MORALES',
      segundoApellido: 'HERRERA',
      fechaNacimiento: '1990-05-14',
      prevision: 'FONASA D',
    }
    professionalData = {
      rutProfesional: '55667788-0',
      nombresProfesional: 'Lucia',
      primerApellidoProfesional: 'Fernandez',
      segundoApellidoProfesional: 'Castro',
      profesion: 'Nutricionista',
      prestacion: 'Consulta Nutricional',
    }
  }

  return {
    estado: 'OK',
    data: [
      {
        idCupo: 73438971,
        fecha: mockDate.toFormat('yyyy-MM-dd'),
        hora: mockDate.plus({ minutes: 5 }).toFormat('HH:mm'),
        rutPaciente: finalRut,
        nombres: patientData.nombres,
        primerApellido: patientData.primerApellido,
        segundoApellido: patientData.segundoApellido,
        nombreSocial: '',
        prevision: patientData.prevision,
        fechaNacimiento: patientData.fechaNacimiento,
        poseeDiscapacidad: 'N',
        cuidador: 'N',
        rutProfesional: professionalData.rutProfesional,
        nombresProfesional: professionalData.nombresProfesional,
        primerApellidoProfesional: professionalData.primerApellidoProfesional,
        segundoApellidoProfesional: professionalData.segundoApellidoProfesional,
        profesion: professionalData.profesion,
        prestacion: professionalData.prestacion,
        sector: finalSector,
        box: finalBox,
        sectorBox: finalSectorBox,
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
