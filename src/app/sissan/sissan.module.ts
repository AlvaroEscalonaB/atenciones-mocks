import { Module } from '@nestjs/common'

import { SissanController } from './sissan.controller'

@Module({
  controllers: [SissanController],
})
export class SissanModule {}
