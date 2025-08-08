import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { HealthModule } from '@/app/health/health.module'

import { LoggerModule } from '@/shared/logger/logger.module'

import { UserModule } from '@/contexts/users/user.module'

import { SissanModule } from './sissan/sissan.module'
import { TeletonModule } from './teleton/teleton.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    HealthModule,
    UserModule,
    SissanModule,
    TeletonModule,
  ],
})
export class AppModule {}
