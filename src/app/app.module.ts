import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'

import { HealthModule } from '@/app/health/health.module'

import { HttpLoggingInterceptor } from '@/shared/logger/http-logging.interceptor'
import { LoggerModule } from '@/shared/logger/logger.module'

import { UserModule } from '@/contexts/users/user.module'

import { SiidraModule } from './siidra/siidra.module'
import { SissanModule } from './sissan/sissan.module'
import { TeletonModule } from './teleton/teleton.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    HealthModule,
    UserModule,
    SiidraModule,
    SissanModule,
    TeletonModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpLoggingInterceptor,
    },
  ],
})
export class AppModule {}
