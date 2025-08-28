import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

interface RequestData {
  method: string
  url: string
  headers: Record<string, string>
}

interface ResponseData {
  statusCode: number
}

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('REST')

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<RequestData>()
    const response = context.switchToHttp().getResponse<ResponseData>()
    const { method, url } = request

    const startTime = Date.now()

    this.logger.log(`→ ${method} ${url}`)

    return next.handle().pipe(
      tap(() => {
        const endTime = Date.now()
        const duration = endTime - startTime
        const statusCode = response.statusCode

        this.logger.log(`← ${method} ${url} ${statusCode} - ${duration}ms`)
      }),
    )
  }
}
