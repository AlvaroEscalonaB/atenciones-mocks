export interface SissanAppointment {
  IND_ESTADO: string
  NUMCITA: string
  COD_ACTIVIDAD: string
  CONFIRMADA: string
  FECHA_CREA: string
  FECHA_CITA: string
  RUN_PACIENTE: string
  NOMBRE_PACIENTE: string
  NUM_CELULAR: string
  EMAIL: string | null
  ID_POLICLINICO: string
  NOM_POLI: string
  TIPO_CITA: string | null
  ID_PROFESION: string
  PROFESIONAL: string
  SOBRECUPO: string
  ESTADO_CONFIRMACION: string
  NUM_TELEFO1: string | null
  NUM_TELEFO2: string | null
  NOMBREPROFESIONAL: string
}

export interface AppointmentResponse {
  error?: string
  status: boolean
  data: SissanAppointment[]
}

export interface NotificationResponse {
  error?: string
  status: boolean
  data: string
}
