import { Injectable } from '@angular/core';
// import { Member } from './members.model';
import { GenderEnum } from './members.component';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Member } from '../shared/models/members.model';
import { subscriptionPlanModel } from '../shared/models/plans.model';
// import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private _datastorageService: DataStorageService) {}

  // memberList: Member[] = [
  //   {
  //     enrollmentNo: 101,
  //     name: "John",
  //     gender: GenderEnum.Male,
  //     subscriptionPlanId: "Plan B",
  //     height: 180,
  //     weight: 75,
  //     contactNumber: +1234567890,
  //     email: "john.doe@email.com",
  //     active: true,
  //     membershipStartDate: "2006-03-26",
  //     membershipEndDate: "2006-03-26"
  //   }
  // ]

  getMembersData() {
    return this._datastorageService.memberList;
  }

  getMemberById(id: number): Member | undefined {
    return this._datastorageService.memberList.find(
      (member) => member.id === id
    );
  }

  updateStatus(id: number) {
    const update = this._datastorageService.memberList.find((t) => t.id === id);
    if (update) {
      update.active = !update.active;
    }
  }

  model = new Member();

  addMember(newMember: Member): { sucess: boolean; message: string } {
    // console.log(this.memberList)
    const exists = this._datastorageService.memberList.some(
      (member) => member.enrollmentNo == newMember.enrollmentNo
    );

    if (exists) {
      return {
        sucess: false,
        message:
          'Enrollment number already exists! Please use a different one.',
      };
    } else {
      newMember.id = this._datastorageService.memberList.length + 1;
      this._datastorageService.memberList.push(newMember);
      // console.log(this.memberList);
      return { sucess: true, message: 'Member added' };
    }
  }

  updateMember(updatedMember: Member): { sucess: boolean; message: string } {
    const conflict = this._datastorageService.memberList.some(
      (member) => member.enrollmentNo === updatedMember.enrollmentNo
    );

    if (conflict) {
      return {
        sucess: false,
        message:
          'Enrollment number already exists! Please choose a different one.',
      };
    }

    this._datastorageService.memberList =
      this._datastorageService.memberList.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      );

    return { sucess: true, message: 'Member updated successfully!' };
  }
}
