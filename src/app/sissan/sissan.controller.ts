import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common'

import { generateRandomToken } from '@/app/sissan/utils'

import { Authorization } from './authorization.decorator'
import {
  type AppointmentResponse,
  type NotificationResponse,
} from './interfaces'
import {
  mockErrorNotificationResponse,
  mockSuccessfulNotificationResponse,
  sissanMockResponse,
} from './mocks'
import {
  type AppointmentParams,
  appointmentParamsSchema,
  type TokenParams,
  tokenSchema,
} from './schemas'
import { createZodValidationPipe } from './validation.pipe'

@Controller('')
export class SissanController {
  constructor(private readonly logger: Logger) {}

  @Post('/oauth/autenticacion/token')
  @HttpCode(200)
  getToken(@Body(createZodValidationPipe(tokenSchema)) body: TokenParams) {
    this.logger.log('Received token request:', body)
    return {
      status: true,
      access_token: generateRandomToken(),
    }
  }

  @Post('/api/keiron/newgetcitaskeiron')
  @HttpCode(200)
  getAppointments(@Authorization() authorization: string): AppointmentResponse {
    this.logger.log(
      `Received appointments request with authorization: ${authorization}`,
    )
    return sissanMockResponse()
  }

  @Post('/api/keiron/updatecitaconfirmada')
  @HttpCode(200)
  notificationById(
    @Authorization() authorization: string,
    @Body(createZodValidationPipe(appointmentParamsSchema))
    params: AppointmentParams,
    typeResponse: 'success' | 'error' = 'success',
  ): NotificationResponse {
    this.logger.log(`Parameters from params: ${JSON.stringify(params)}`)
    switch (typeResponse) {
      case 'success': {
        return mockSuccessfulNotificationResponse
      }
      case 'error': {
        return mockErrorNotificationResponse
      }
    }
  }
}
