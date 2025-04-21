import { GenderEnum } from '../gender.model';

export class Trainers {
  id: number = 0;
  firstName?: string;
  lastName?: string;
  gender: GenderEnum | undefined;
  contactNumber?: number;
  email?: string;
  salary?: number;
  Activate?: boolean = true;
  joiningDate?: Date;
  totalExperience?: number;
  heightCm?: number;
  weightKg?: number;
  timing?: string;
  inTiming?: Date;
  outTiming?: Date;

  constructor() {}
}
