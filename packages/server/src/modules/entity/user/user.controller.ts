// Nest
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  Req,
} from '@nestjs/common';
// Providers
import { UserService } from './services/user.service';
// Param Decorators
import { GetUser } from 'src/modules/entity/auth/decorator';
// Prisma
import { User } from '@prisma/client';
// Dto
import { UpdateUserDto } from './dto/user.dto';
// Types
import {
  DeleteUserQueryParams,
  GetUserQueryParams,
  GetUsersQueryParams,
  UpdateUserQueryParams,
} from './types';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @SwaggerHead('user', 'GET MULTIPLE')
  @SwaggerResponses('user', 'GET MULTIPLE')
  @Get()
  getUsers(@Query() queryParams: GetUsersQueryParams, @Req() req: Request) {
    return this.userService.getUsers(queryParams, req.url);
  }

  @JwtAuth({ profileRoute: true })
  @SwaggerAuth({ profileRoute: true })
  @SwaggerHead('user', 'GET PROFILE')
  @SwaggerResponses('user', 'GET PROFILE')
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return this.userService.getProfile(user);
  }

  @SwaggerHead('user', 'GET SINGLE')
  @SwaggerResponses('user', 'GET SINGLE')
  @SwaggerPathParams('user', 'GET SINGLE')
  @Get(':uniqueIdentifier')
  getUser(
    @Query() queryParams: GetUserQueryParams,
    @Param('uniqueIdentifier') uniqueIdentifier: string,
    @Req() req: Request,
  ) {
    return this.userService.getUser(queryParams, uniqueIdentifier, req.url);
  }

  @SwaggerHead('user', 'UPDATE')
  @SwaggerBody('user', 'UPDATE')
  @SwaggerResponses('user', 'UPDATE')
  @SwaggerPathParams('user', 'UPDATE')
  @Patch(':uniqueIdentifier/update')
  updateUser(
    @Query() queryParams: UpdateUserQueryParams,
    @Param('uniqueIdentifier') uniqueIdentifier: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.updateUser(queryParams, dto, uniqueIdentifier);
  }

  @SwaggerHead('user', 'DELETE')
  @SwaggerResponses('user', 'DELETE')
  @SwaggerPathParams('user', 'DELETE')
  @Delete(':uniqueIdentifier/delete')
  deleteUser(
    @Query() queryParams: DeleteUserQueryParams,
    @Param('uniqueIdentifier') uniqueIdentifier: string,
  ) {
    return this.userService.deleteUser(queryParams, uniqueIdentifier);
  }
}
