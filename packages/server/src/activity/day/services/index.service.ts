// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityDaysService } from './getActivityDays.service';
import { GetActivityDayService } from './getActivityDay.service';
import { CreateActivityDayService } from './createActivityDay.service';
import { UpdateActivityDayService } from './updateActivityDay.service';
import { DeleteActivityDayService } from './deleteActivityDay.service';

@Injectable()
export class ActivityDayService {
  constructor(
    public GetActivityDaysService: GetActivityDaysService,
    public GetActivityDayService: GetActivityDayService,
    public CreateActivityDayService: CreateActivityDayService,
    public UpdateActivityDayService: UpdateActivityDayService,
    public DeleteActivityDayService: DeleteActivityDayService,
  ) {}
}
