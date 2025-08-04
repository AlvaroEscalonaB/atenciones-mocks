import { z } from 'zod'

export const appointmentParamsSchema = z.object({
  idCitacion: z.string(),
})

export const tokenSchema = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  grant_type: z.string().optional(),
})

export type AppointmentParams = z.infer<typeof appointmentParamsSchema>
export type TokenParams = z.infer<typeof tokenSchema>
