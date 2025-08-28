import { z } from 'zod'

// Zod schema siidra appointments endpoint input
export const getSiidraAppointmentSchema = z.object({
  token: z.string(),
  fechaDesde: z.string(),
  fechaHasta: z.string(),
  rutPaciente: z.string(),
})

// Zod schema for siidra endpoint
export const siidraNotificationInputSchema = z.object({
  token: z.string(),
  idCupo: z.string(),
  rutPaciente: z.string(),
})

export type SiidraGetAppointment = z.infer<typeof getSiidraAppointmentSchema>
export type SiidraNotification = z.infer<typeof siidraNotificationInputSchema>
