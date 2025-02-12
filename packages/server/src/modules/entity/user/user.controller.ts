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
  UseGuards,
} from '@nestjs/common';
// Providers
import { UserService } from './services/user.service';
// Param Decorators
import { GetUser } from 'src/modules/entity/auth/decorator';
// Prisma
import { User } from '@prisma/client';
// Guards
import { JwtGuard } from 'src/modules/entity/auth/guard';
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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// Data
import {
  getUsersApiOperationOptions,
  getUsersResponsesOptions,
} from './data/swagger';

@UseGuards(JwtGuard)
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation(getUsersApiOperationOptions)
  @ApiResponse(getUsersResponsesOptions['200'])
  @ApiResponse(getUsersResponsesOptions['404'])
  @Get()
  getUsers(@Query() queryParams: GetUsersQueryParams, @Req() req: Request) {
    return this.userService.getUsers(queryParams, req.url);
  }

  @Get('profile')
  getProfile(@GetUser() user: User) {
    return this.userService.getProfile(user);
  }

  @Get(':uniqueIdentifier')
  getUser(
    @Query() queryParams: GetUserQueryParams,
    @Param('uniqueIdentifier') uniqueIdentifier: string,
    @Req() req: Request,
  ) {
    return this.userService.getUser(queryParams, uniqueIdentifier, req.url);
  }

  @Patch(':uniqueIdentifier/update')
  updateUser(
    @Query() queryParams: UpdateUserQueryParams,
    @Param('uniqueIdentifier') uniqueIdentifier: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.updateUser(queryParams, dto, uniqueIdentifier);
  }

  @Delete(':uniqueIdentifier/delete')
  deleteUser(
    @Query() queryParams: DeleteUserQueryParams,
    @Param('uniqueIdentifier') uniqueIdentifier: string,
  ) {
    return this.userService.deleteUser(queryParams, uniqueIdentifier);
  }
}
