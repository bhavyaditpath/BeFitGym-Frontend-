import { Injectable } from '@angular/core';
import { subscriptionPlanModel } from '../models/plans.model';
// import { Member } from '../../members/members.model';
import { GenderEnum } from '../../members/members.component';
import { Member } from '../models/members.model';
import { getRandomSubscriptionPlan } from '../helper/helper';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  SubscriptionPlanList: subscriptionPlanModel[] = [
    {
      id: 1,
      planName: 'Basic Starter',
      price: 19.99,
      description: 'Ideal for beginners with basic features',
      timePeriod: 3,
      activate: true,
    },
    {
      id: 2,
      planName: 'Advanced Plus',
      price: 49.99,
      description: 'Access to premium tools and priority support',
      timePeriod: 6,
      activate: false,
    },
    {
      id: 3,
      planName: 'Pro Unlimited',
      price: 99.99,
      description: 'Unlimited access to all features with expert support',
      timePeriod: 12,
      activate: true,
    },
    {
      id: 4,
      planName: 'Enterprise',
      price: 199.99,
      description: 'Custom solutions for businesses and teams',
      timePeriod: 12,
      activate: false,
    },
    {
      id: 5,
      planName: 'Student Plan',
      price: 9.99,
      description: 'Discounted plan for students with verification',
      timePeriod: 6,
      activate: true,
    },
  ];

  memberList: Member[] = [
    {
      id: 1,
      enrollmentNo: 101,
      name: 'John',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 180,
      weight: 75,
      contactNumber: +1234567890,
      email: 'john.doe@email.com',
      active: true,
      membershipStartDate: new Date('2024-01-01'),
      membershipEndDate: new Date('2024-07-30'),
    },
    {
      id: 2,
      enrollmentNo: 102,
      name: 'Jane',
      lastName: 'Smith',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 165,
      weight: 60,
      contactNumber: +9876543210,
      email: 'jane.smith@email.com',
      active: true,
      membershipStartDate: new Date('2024-02-01'),
      membershipEndDate: new Date('2025-01-31'),
    },
    {
      id: 3,
      enrollmentNo: 103,
      name: 'Michael',
      lastName: 'Johnson',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 170,
      weight: 68,
      contactNumber: +1122334455,
      email: 'michael.johnson@email.com',
      active: false,
      membershipStartDate: new Date('2024-03-01'),
      membershipEndDate: new Date('2024-05-31'),
    },
    {
      id: 4,
      enrollmentNo: 104,
      name: 'Emily',
      lastName: 'Brown',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 160,
      weight: 55,
      contactNumber: +1212456789,
      email: 'emily.brown@email.com',
      active: true,
      membershipStartDate: new Date('2024-04-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 5,
      enrollmentNo: 105,
      name: 'Chris',
      lastName: 'Davis',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 175,
      weight: 72,
      contactNumber: +1098765432,
      email: 'chris.davis@email.com',
      active: false,
      membershipStartDate: new Date('2024-05-01'),
      membershipEndDate: new Date('2024-05-31'),
    },
    {
      id: 6,
      enrollmentNo: 106,
      name: 'Sophia',
      lastName: 'Wilson',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 170,
      weight: 65,
      contactNumber: +1029384756,
      email: 'sophia.wilson@email.com',
      active: true,
      membershipStartDate: new Date('2024-06-01'),
      membershipEndDate: new Date('2025-05-31'),
    },
    {
      id: 7,
      enrollmentNo: 107,
      name: 'Daniel',
      lastName: 'Martinez',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 185,
      weight: 80,
      contactNumber: +1324354678,
      email: 'daniel.martinez@email.com',
      active: true,
      membershipStartDate: new Date('2024-07-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 8,
      enrollmentNo: 108,
      name: 'Olivia',
      lastName: 'Garcia',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 168,
      weight: 58,
      contactNumber: +1198765432,
      email: 'olivia.garcia@email.com',
      active: false,
      membershipStartDate: new Date('2024-08-01'),
      membershipEndDate: new Date('2025-01-31'),
    },
    {
      id: 9,
      enrollmentNo: 109,
      name: 'Matthew',
      lastName: 'Lee',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 178,
      weight: 70,
      contactNumber: +1987654321,
      email: 'matthew.lee@email.com',
      active: true,
      membershipStartDate: new Date('2024-09-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 10,
      enrollmentNo: 110,
      name: 'Isabella',
      lastName: 'Hernandez',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 162,
      weight: 59,
      contactNumber: +1567890123,
      email: 'isabella.hernandez@email.com',
      active: true,
      membershipStartDate: new Date('2024-10-01'),
      membershipEndDate: new Date('2025-09-30'),
    },
    {
      id: 11,
      enrollmentNo: 111,
      name: 'William',
      lastName: 'Clark',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 182,
      weight: 78,
      contactNumber: +1456789012,
      email: 'william.clark@email.com',
      active: false,
      membershipStartDate: new Date('2024-11-01'),
      membershipEndDate: new Date('2025-01-31'),
    },
    {
      id: 12,
      enrollmentNo: 112,
      name: 'Ava',
      lastName: 'Rodriguez',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 164,
      weight: 62,
      contactNumber: +1345678901,
      email: 'ava.rodriguez@email.com',
      active: true,
      membershipStartDate: new Date('2024-12-01'),
      membershipEndDate: new Date('2025-05-31'),
    },
    {
      id: 13,
      enrollmentNo: 113,
      name: 'James',
      lastName: 'Lewis',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 175,
      weight: 73,
      contactNumber: +1098765432,
      email: 'james.lewis@email.com',
      active: false,
      membershipStartDate: new Date('2024-06-01'),
      membershipEndDate: new Date('2024-06-30'),
    },
    {
      id: 14,
      enrollmentNo: 114,
      name: 'Mia',
      lastName: 'Walker',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 166,
      weight: 61,
      contactNumber: +1987654321,
      email: 'mia.walker@email.com',
      active: true,
      membershipStartDate: new Date('2024-05-01'),
      membershipEndDate: new Date('2025-04-30'),
    },
    {
      id: 15,
      enrollmentNo: 115,
      name: 'David',
      lastName: 'Allen',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 180,
      weight: 76,
      contactNumber: +1765432190,
      email: 'david.allen@email.com',
      active: true,
      membershipStartDate: new Date('2024-07-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 16,
      enrollmentNo: 116,
      name: 'John',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 180,
      weight: 75,
      contactNumber: +1234567890,
      email: 'john.doe@email.com',
      active: true,
      membershipStartDate: new Date('2024-01-01'),
      membershipEndDate: new Date('2024-07-30'),
    },
    {
      id: 17,
      enrollmentNo: 117,
      name: 'Jane',
      lastName: 'Smith',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 165,
      weight: 60,
      contactNumber: +9876543210,
      email: 'jane.smith@email.com',
      active: true,
      membershipStartDate: new Date('2024-02-01'),
      membershipEndDate: new Date('2025-01-31'),
    },
    {
      id: 18,
      enrollmentNo: 118,
      name: 'Michael',
      lastName: 'Johnson',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 170,
      weight: 68,
      contactNumber: +1122334455,
      email: 'michael.johnson@email.com',
      active: false,
      membershipStartDate: new Date('2024-03-01'),
      membershipEndDate: new Date('2024-05-31'),
    },
    {
      id: 19,
      enrollmentNo: 119,
      name: 'Emily',
      lastName: 'Brown',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 160,
      weight: 55,
      contactNumber: +1212456789,
      email: 'emily.brown@email.com',
      active: true,
      membershipStartDate: new Date('2024-04-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 20,
      enrollmentNo: 120,
      name: 'Chris',
      lastName: 'Davis',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 175,
      weight: 72,
      contactNumber: +1098765432,
      email: 'chris.davis@email.com',
      active: false,
      membershipStartDate: new Date('2024-05-01'),
      membershipEndDate: new Date('2024-05-31'),
    },
    {
      id: 21,
      enrollmentNo: 121,
      name: 'Sophia',
      lastName: 'Wilson',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 170,
      weight: 65,
      contactNumber: +1029384756,
      email: 'sophia.wilson@email.com',
      active: true,
      membershipStartDate: new Date('2024-06-01'),
      membershipEndDate: new Date('2025-05-31'),
    },
    {
      id: 22,
      enrollmentNo: 122,
      name: 'Daniel',
      lastName: 'Martinez',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 185,
      weight: 80,
      contactNumber: +1324354678,
      email: 'daniel.martinez@email.com',
      active: true,
      membershipStartDate: new Date('2024-07-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 23,
      enrollmentNo: 123,
      name: 'Olivia',
      lastName: 'Garcia',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 168,
      weight: 58,
      contactNumber: +1198765432,
      email: 'olivia.garcia@email.com',
      active: false,
      membershipStartDate: new Date('2024-08-01'),
      membershipEndDate: new Date('2025-01-31'),
    },
    {
      id: 24,
      enrollmentNo: 124,
      name: 'Matthew',
      lastName: 'Lee',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 178,
      weight: 70,
      contactNumber: +1987654321,
      email: 'matthew.lee@email.com',
      active: true,
      membershipStartDate: new Date('2024-09-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
    {
      id: 25,
      enrollmentNo: 125,
      name: 'Isabella',
      lastName: 'Hernandez',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 162,
      weight: 59,
      contactNumber: +1567890123,
      email: 'isabella.hernandez@email.com',
      active: true,
      membershipStartDate: new Date('2024-10-01'),
      membershipEndDate: new Date('2025-09-30'),
    },
    {
      id: 26,
      enrollmentNo: 126,
      name: 'William',
      lastName: 'Clark',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 182,
      weight: 78,
      contactNumber: +1456789012,
      email: 'william.clark@email.com',
      active: false,
      membershipStartDate: new Date('2024-11-01'),
      membershipEndDate: new Date('2025-01-31'),
    },
    {
      id: 27,
      enrollmentNo: 127,
      name: 'Ava',
      lastName: 'Rodriguez',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 164,
      weight: 62,
      contactNumber: +1345678901,
      email: 'ava.rodriguez@email.com',
      active: true,
      membershipStartDate: new Date('2024-12-01'),
      membershipEndDate: new Date('2025-05-31'),
    },
    {
      id: 28,
      enrollmentNo: 128,
      name: 'James',
      lastName: 'Lewis',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 175,
      weight: 73,
      contactNumber: +1098765432,
      email: 'james.lewis@email.com',
      active: false,
      membershipStartDate: new Date('2024-06-01'),
      membershipEndDate: new Date('2024-06-30'),
    },
    {
      id: 29,
      enrollmentNo: 129,
      name: 'Mia',
      lastName: 'Walker',
      gender: GenderEnum.Female,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 166,
      weight: 61,
      contactNumber: +1987654321,
      email: 'mia.walker@email.com',
      active: true,
      membershipStartDate: new Date('2024-05-01'),
      membershipEndDate: new Date('2025-04-30'),
    },
    {
      id: 30,
      enrollmentNo: 130,
      name: 'David',
      lastName: 'Allen',
      gender: GenderEnum.Male,
      subscriptionPlanId: getRandomSubscriptionPlan(
        this.SubscriptionPlanList.length
      ),
      height: 180,
      weight: 76,
      contactNumber: +1765432190,
      email: 'david.allen@email.com',
      active: true,
      membershipStartDate: new Date('2024-07-01'),
      membershipEndDate: new Date('2024-09-30'),
    },
  ];

  constructor() {}
}
