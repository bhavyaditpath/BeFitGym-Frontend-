import { Injectable } from '@angular/core';
import { Trainers } from './trainer.model';
import { GenderEnum } from '../gender.model';


@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  
  trainerList: Trainers[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      gender: GenderEnum.Male,
      heightCm: 175,
      weightKg: 70,
      contactNumber: 9001234567,
      email: 'johndoe1@gmail.com',
      salary: 20000,
      Activate: true,
      inTiming: new Date('2025-01-15T00:00:00Z'),
      outTiming: new Date('2025-01-15T08:00:00Z'),
      totalExperience: 5,
      joiningDate: new Date('2025-01-15T00:00:00Z'),
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      gender: GenderEnum.Female,
      heightCm: 160,
      weightKg: 55,
      contactNumber: 9009876543,
      email: 'janesmith2@gmail.com',
      salary: 30000,
      Activate: true,
      inTiming: new Date('2025-01-16T00:00:00Z'),
      outTiming: new Date('2025-01-16T08:00:00Z'),
      totalExperience: 6,
      joiningDate: new Date('2025-01-16T00:00:00Z'),
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Johnson',
      gender: GenderEnum.Male,
      heightCm: 180,
      weightKg: 85,
      contactNumber: 9002233445,
      email: 'mikejohnson3@gmail.com',
      salary: 25000,
      Activate: false,
      inTiming: new Date('2025-01-17T00:00:00Z'),
      outTiming: new Date('2025-01-17T08:00:00Z'),
      totalExperience: 4,
      joiningDate: new Date('2025-01-17T00:00:00Z'),
    },
    {
      id: 4,
      firstName: 'Emma',
      lastName: 'Williams',
      gender: GenderEnum.Female,
      heightCm: 170,
      weightKg: 65,
      contactNumber: 9003344556,
      email: 'emmawilliams4@gmail.com',
      salary: 35000,
      Activate: true,
      inTiming: new Date('2025-01-18T00:00:00Z'),
      outTiming: new Date('2025-01-18T08:00:00Z'),
      totalExperience: 7,
      joiningDate: new Date('2025-01-18T00:00:00Z'),
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      gender: GenderEnum.Male,
      heightCm: 172,
      weightKg: 75,
      contactNumber: 9004455667,
      email: 'davidbrown5@gmail.com',
      salary: 28000,
      Activate: false,
      inTiming: new Date('2025-01-19T00:00:00Z'),
      outTiming: new Date('2025-01-19T08:00:00Z'),
      totalExperience: 3,
      joiningDate: new Date('2025-01-19T00:00:00Z'),
    },
    {
      id: 6,
      firstName: 'Sophia',
      lastName: 'Davis',
      gender: GenderEnum.Female,
      heightCm: 165,
      weightKg: 60,
      contactNumber: 9005566778,
      email: 'sophiadavis6@gmail.com',
      salary: 32000,
      Activate: true,
      inTiming: new Date('2025-01-20T00:00:00Z'),
      outTiming: new Date('2025-01-20T08:00:00Z'),
      totalExperience: 8,
      joiningDate: new Date('2025-01-20T00:00:00Z'),
    },
    {
      id: 7,
      firstName: 'Oliver',
      lastName: 'Martinez',
      gender: GenderEnum.Male,
      heightCm: 178,
      weightKg: 80,
      contactNumber: 9006677889,
      email: 'olivermartinez7@gmail.com',
      salary: 27000,
      Activate: true,
      inTiming: new Date('2025-01-21T00:00:00Z'),
      outTiming: new Date('2025-01-21T08:00:00Z'),
      totalExperience: 5,
      joiningDate: new Date('2025-01-21T00:00:00Z'),
    },
    {
      id: 8,
      firstName: 'Mia',
      lastName: 'Garcia',
      gender: GenderEnum.Female,
      heightCm: 155,
      weightKg: 50,
      contactNumber: 9007788990,
      email: 'miagarcia8@gmail.com',
      salary: 24000,
      Activate: false,
      inTiming: new Date('2025-01-22T00:00:00Z'),
      outTiming: new Date('2025-01-22T08:00:00Z'),
      totalExperience: 4,
      joiningDate: new Date('2025-01-22T00:00:00Z'),
    },
    {
      id: 9,
      firstName: 'James',
      lastName: 'Lee',
      gender: GenderEnum.Male,
      heightCm: 185,
      weightKg: 90,
      contactNumber: 9008899001,
      email: 'jameslee9@gmail.com',
      salary: 31000,
      Activate: true,
      inTiming: new Date('2025-01-23T00:00:00Z'),
      outTiming: new Date('2025-01-23T08:00:00Z'),
      totalExperience: 6,
      joiningDate: new Date('2025-01-23T00:00:00Z'),
    },
    {
      id: 10,
      firstName: 'Ava',
      lastName: 'Taylor',
      gender: GenderEnum.Female,
      heightCm: 162,
      weightKg: 58,
      contactNumber: 9009900112,
      email: 'avataylor10@gmail.com',
      salary: 29000,
      Activate: false,
      inTiming: new Date('2025-01-24T00:00:00Z'),
      outTiming: new Date('2025-01-24T08:00:00Z'),
      totalExperience: 7,
      joiningDate: new Date('2025-01-24T00:00:00Z'),
    },
  ];

  getTrainerData() {
    return this.trainerList;
  }

  getMemberById(id: number): Trainers | undefined {
    return this.trainerList.find((member) => member.id === id);
  }

  updateStatus(id: number) {
    const update = this.trainerList.find((t) => t.id === id);
    if (update) {
      update.Activate = !update.Activate;
    }
  }

  model = new Trainers();

  addTrainer(newTrainer: Trainers) {
    newTrainer.id = this.trainerList.length + 1;
    this.trainerList.push(newTrainer);
    return newTrainer;
  }

  updateTrainer(updatedTrainer: Trainers): Trainers | null {
    console.log(updatedTrainer);
    const index = this.trainerList.findIndex((t) => t.id === updatedTrainer.id);
    if (index !== -1) {
      this.trainerList[index] = updatedTrainer; // Update trainer
      return updatedTrainer;
    }
    return null;
  }

  constructor() {}
}
