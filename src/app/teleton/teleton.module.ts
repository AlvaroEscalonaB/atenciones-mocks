import { Module } from '@nestjs/common'

import { TeletonController } from './teleton.controller'

@Module({
  controllers: [TeletonController],
})
export class TeletonModule {}
