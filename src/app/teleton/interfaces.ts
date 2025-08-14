export const ESTADO_CITA = {
  NULL: 0,
  Agendada: 1,
  Confirmada: 2,
  Anulada: 3,
  Bloqueada: 4,
  Asistida: 5,
  'No Asistida': 6,
  'Pendiente Autorización': 7,
  Autorizada: 8,
  'No Autorizada': 9,
} as const

export type EstadoCitaKey = keyof typeof ESTADO_CITA
export type EstadoCitaValue = (typeof ESTADO_CITA)[EstadoCitaKey]

// Input for /ListarCita endpoint
export interface ListarCitaInput {
  FichaId: number
  FechaInicio: string // Format: YYYY-MM-DD
  FechaFin: string // Format: YYYY-MM-DD
}

// Input for /Checkin endpoint
export interface CheckinInput {
  FichaPacienteId: number
  // Input for /ListarCita endpoint
  Dv: string
}

// Appointment data structure in mock response
export interface TeletonAppointment {
  FichaId: number
  CitaId: number
  IndicacionActividadId: number
  Desde: string
  Hasta: string
  Especialidad: string
  Tratante: string | null
  Instituto: string | null
  TipoAutorizacion: number
  Estado: EstadoCitaValue
  Rut: string
  NombrePaciente: string
  EstadoNombre: EstadoCitaKey
  LogId: number
}

// Mock response structure for /ListarCita
export interface TeletonAppointmentResponse {
  Data: TeletonAppointment[]
  IsValid: boolean
  ModelErrors: Record<string, unknown>
}

export interface TeletonNotificationResponse {
  Data: {
    Estado: boolean
    Mensaje: string
  }
  IsValid: boolean
  ModelErrors: Record<string, string>
}
