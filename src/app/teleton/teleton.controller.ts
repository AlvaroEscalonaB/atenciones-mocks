import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common'

import { Authorization } from './authorization.decorator'
import {
  type TeletonAppointmentResponse,
  type TeletonNotificationResponse,
} from './interfaces'
import {
  getTeletonAppointmentMock,
  mockTeletonNotificationResponse,
} from './mocks'
import {
  getAppointmentSchema,
  notificationInputSchema,
  type TeletonGetAppointment,
  type TeletonNotification,
} from './schemas'
import { createZodValidationPipe } from './validation.pipe'

@Controller('')
export class TeletonController {
  constructor(private readonly logger: Logger) {}

  @Post('/api/tetcel/ListarCita')
  @HttpCode(200)
  getAppointments(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Authorization() authorization: string,
    @Body(createZodValidationPipe(getAppointmentSchema)) // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tokenParams: TeletonGetAppointment,
  ): TeletonAppointmentResponse {
    return getTeletonAppointmentMock()
  }

  @Post('/api/tetcel/Checkin')
  @HttpCode(200)
  notificationById(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Authorization() authorization: string,
    @Body(createZodValidationPipe(notificationInputSchema)) // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TeletonNotification,
    // typeResponse: 'success' | 'error' = 'success',
  ): TeletonNotificationResponse {
    return mockTeletonNotificationResponse
  }
}
