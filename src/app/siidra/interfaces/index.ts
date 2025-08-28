export interface SiidraAppointment {
  idCupo: number
  fecha: string
  hora2: string
  rutPaciente: string
  nombres: string
  primerApellido: string
  segundoApellido: string
  nombreSocial: string
  prevision: string
  fechaNacimiento: string
  poseeDiscapacidad: string
  cuidador: string
  rutProfesional: string
  nombresProfesional: string
  primerApellidoProfesional: string
  segundoApellidoProfesional: string
  profesion: string
  prestacion: string
  sector: string
  box: string
  sectorBox: string
}

export interface SiidraAppointmentResponse {
  estado: string
  data: SiidraAppointment[]
  mensaje: string
}

interface SiidraAppointmentNotification {
  id_registro: number
  id_programacion: number
  fecha_recepcion: string
}

export interface SiidraNotificationResponse {
  estado: 'OK' | 'NOK'
  mensaje?: string
  rut_paciente?: SiidraAppointmentNotification
}
