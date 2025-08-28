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

    // Extract and decode the base64 credentials
    const base64Credentials = authorization.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString(
      'ascii',
    )
    const [username, password] = credentials.split(':')

    if (
      !authorization.startsWith('Basic ') ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      throw new UnauthorizedException(
        'Authorization header must be a Basic token',
      )
    }

    return authorization
  },
)
