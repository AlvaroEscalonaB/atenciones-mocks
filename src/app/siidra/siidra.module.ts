import { Module } from '@nestjs/common'

import { SiidraController } from './siidra.controller'

@Module({
  controllers: [SiidraController],
})
export class SiidraModule {}
