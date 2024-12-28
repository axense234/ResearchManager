// Nest
import { Injectable } from '@nestjs/common';
// Services
import { GetProfileService } from './getProfile.service';
import { UpdateUserService } from './updateUser.service';
import { DeleteUserService } from './deleteUser.service';

@Injectable()
export class UserService {
  constructor(
    public GetProfileService: GetProfileService,
    public UpdateUserService: UpdateUserService,
    public DeleteUserService: DeleteUserService,
  ) {}
}
