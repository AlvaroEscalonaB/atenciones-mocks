import { z } from 'zod'

// Zod schema for /ListarCita input
export const getAppointmentSchema = z.object({
  FichaId: z.number(),
  FechaInicio: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD
  FechaFin: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD
})

// Zod schema for /Checkin input
export const notificationInputSchema = z.object({
  FichaPacienteId: z.number(),
  Rut: z.number(),
  Dv: z.string().length(1),
})

export type TeletonGetAppointment = z.infer<typeof getAppointmentSchema>
export type TeletonNotification = z.infer<typeof notificationInputSchema>
