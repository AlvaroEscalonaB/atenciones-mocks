import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'

export const Authorization = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = ctx.switchToHttp().getRequest()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const authorization: string | undefined = request?.headers.authorization

    if (!authorization) {
      throw new UnauthorizedException('Authorization header is required')
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (!authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Authorization header must be a Bearer token',
      )
    }

    return authorization
  },
)
