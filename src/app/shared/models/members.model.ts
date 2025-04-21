import { Data } from '@angular/router';
import { GenderEnum } from '../../members/members.component';
import { subscriptionPlanModel } from './plans.model';
// import { GenderEnum } from "./members.component";

export class Member {
  id?: number;
  enrollmentNo?: number;
  name?: string;
  lastName?: string;
  gender?: GenderEnum;
  subscriptionPlanId?: number;
  height?: number;
  weight?: number;
  contactNumber?: number;
  email?: string;
  active?: boolean;
  membershipStartDate?: Date;
  membershipEndDate?: Date;

  constructor() {}
}
