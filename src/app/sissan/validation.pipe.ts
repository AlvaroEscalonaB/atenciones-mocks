import {
  BadRequestException,
  Injectable,
  type PipeTransform,
} from '@nestjs/common'
import { type ZodType } from 'zod'

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value)
      return parsedValue
    } catch {
      // Custom JSON error response
      throw new BadRequestException({
        status: false,
        error: 'Validation failed',
      })
    }
  }
}

export function createZodValidationPipe(schema: ZodType) {
  return new ZodValidationPipe(schema)
}
