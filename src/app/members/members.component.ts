// import {
//   ChangeDetectionStrategy,
//   ChangeDetectorRef,
//   Component,
//   NgZone,
// } from '@angular/core';
// import { ConfirmationService, MessageService } from 'primeng/api';
// import { TableModule, TableService } from 'primeng/table';
// import { DialogModule } from 'primeng/dialog';
// import { ButtonModule } from 'primeng/button';
// import { ToastModule } from 'primeng/toast';
// import { ToolbarModule } from 'primeng/toolbar';
// import { ConfirmDialog } from 'primeng/confirmdialog';
// import { InputTextModule } from 'primeng/inputtext';
// import { TextareaModule } from 'primeng/textarea';
// import { CommonModule } from '@angular/common';
// import { SelectModule } from 'primeng/select';
// import { FormsModule, NgForm } from '@angular/forms';
// import { IconFieldModule } from 'primeng/iconfield';
// import { InputIconModule } from 'primeng/inputicon';
// import { DropdownModule } from 'primeng/dropdown';
// import { MemberService } from './member.service';
// import { DatePicker } from 'primeng/datepicker';
// import { DataStorageService } from '../shared/services/data-storage.service';
// import { subscriptionPlanModel } from '../shared/models/plans.model';
// import { Member } from '../shared/models/members.model';
// import { PlansService } from '../module/plans.service';

// export type TempType = {
//   label: string;
//   value: string;
// };

// export enum GenderEnum {
//   Male,
//   Female,
// }

// interface subplan {
//   name: number;
//   code: string;
// }

// export const GenderValues = [
//   { value: GenderEnum.Male, name: GenderEnum[GenderEnum.Male] },
//   { value: GenderEnum.Female, name: GenderEnum[GenderEnum.Female] },
// ];

// @Component({
//   selector: 'app-members',
//   imports: [
//     TableModule,
//     DialogModule,
//     SelectModule,
//     ToastModule,
//     ToolbarModule,
//     InputTextModule,
//     TextareaModule,
//     CommonModule,
//     InputTextModule,
//     FormsModule,
//     IconFieldModule,
//     InputIconModule,
//     ButtonModule,
//   ],
//   templateUrl: './members.component.html',
//   styleUrl: './members.component.css',
//   providers: [MessageService, ConfirmationService, TableService],
//   changeDetection: ChangeDetectionStrategy.Default,
// })
// export class MembersComponent {
//   model = new Member();
//   memberDialog: boolean = false;
//   submitted: boolean = false;
//   memberDetailDialog: boolean = false;
//   member!: Member[];
//   selectedmembers!: Member;
//   memberdetail: Member = new Member();
//   detailssubmited: boolean = true;
//   memberFields: TempType[] = [];
//   errorMessage: string | undefined;
//   genderValues = GenderValues;
//   tableVisible: boolean = true;
//   isEditMode: boolean = false;
//   plan: subscriptionPlanModel[] | undefined;
// columns: any;

//   constructor(
//     private memberServices: MemberService,
//     private confirmationService: ConfirmationService,
//     private changeDetector: ChangeDetectorRef,
//     public _dataStorageService: DataStorageService,
//     public _planService: PlansService
//   ) {}

//   selectedSubscriptionPlans: subplan[] | undefined;

//   ngOnInit() {
//     this.member = this.memberServices.getMembersData();
//     this.plan = this._planService.getActivePlans();
//     console.log(this.plan);
//   }

//   getPlanNameById(id: number): string | undefined {
//     //console.log(id, 'plan id in byname method');
//     return this._dataStorageService.SubscriptionPlanList.find(
//       (m: subscriptionPlanModel) => m.id === id
//     )?.planName;
//   }

//   getGenderValue(_enumValue: GenderEnum): string {
//     return GenderEnum[_enumValue];
//   }

//   openNew() {
//     this.model = new Member();
//     this.isEdit = false;
//     this.submitted = false;
//     this.memberDialog = true;
//   }

//   viewMemberDetails(id: number) {
//     const detail = this.memberServices.getMemberById(id);
//     if (detail) {
//       this.memberdetail = detail;
//       this.fillMember(this.memberdetail);
//       //console.log(this.memberFields);
//       this.submitted = false;
//       this.memberDetailDialog = true;
//     }
//   }

//   fillMember(member: Member): void {
//     this.memberFields = [
//       { label: 'Enrollment No', value: `${member.enrollmentNo}` },
//       { label: 'Name', value: `${member.name}` },
//       { label: 'Gender', value: `${member.gender}` },
//       { label: 'Subscription Plan', value: `${member.subscriptionPlanId}` },
//       { label: 'Height', value: `${member.height}` },
//       { label: 'Weight', value: `${member.weight}` },
//       { label: 'Contact Number', value: `${member.contactNumber}` },
//       {
//         label: 'Membership Start Date',
//         value: `${member.membershipStartDate?.toLocaleDateString()} `,
//       },
//       {
//         label: 'Membership End Date',
//         value: `${member.membershipEndDate?.toLocaleDateString()}`,
//       },
//     ];
//   }

//   toggleStatus(id: number) {
//     this.memberServices.updateStatus(id);
//   }

//   deleteMember(member: Member) {
//     // console.log("bhavya");
//     this.confirmationService.confirm({
//       message: `Are you sure you want to delete ${member.name}?`,
//       header: 'Confirm',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         console.log('bhavya');
//         this.member = this.member.filter((val) => val.id !== member.id);
//       },
//     });
//   }

//   saveMember() {
//     // edit member
//     if (this.model.id && this.model.id > 0) {
//       const result = this.memberServices.updateMember(this.model);
//       if (!result.sucess) {
//         this.errorMessage = result.message; // Show error message in UI
//         return;
//       }
//     } else {
//       // add new member
//       let newMember: Member = { ...this.model };
//       const result = this.memberServices.addMember(newMember);
//       // console.log(this.memberServices.memberList);
//       if (!result.sucess) {
//         this.errorMessage = result.message; // Show error message in UI
//         return;
//       }
//     }

//     this.tableVisible = false;
//     this.changeDetector.detectChanges();
//     this.member = this._dataStorageService.memberList;
//     this.tableVisible = true;
//     this.model = new Member();
//     this.memberDialog = false;
//     this.errorMessage = '';
//   }

//   isEdit: boolean = false;
//   editMember(_member: Member) {
//     this.isEdit = true;
//     this.model = _member;
//     this.memberDialog = true;
//   }

//   searchValue: string = '';

//   filterMembers() {}
// }

import { Component, ChangeDetectorRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MemberService } from './member.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { subscriptionPlanModel } from '../shared/models/plans.model';
import { Member } from '../shared/models/members.model';
import { PlansService } from '../module/plans.service';
import { Dialog } from 'primeng/dialog';
import { TableModule, TableService } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule, NgForm } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { DatePicker } from 'primeng/datepicker';
import { TableComponent } from '../shared/commonComponent/Component/table/table.component';

// import { GenderEnum, GenderValues } from './enums/gender.enum'; // extract GenderEnum if needed
export enum GenderEnum {
  Male,
  Female,
}

export type TempType = {
  label: string;
  value: string;
};
@Component({
  selector: 'app-members',
  imports: [
    TableComponent,
    Dialog,
    TableModule,
    DialogModule,
    SelectModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    TextareaModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
  providers: [MessageService, ConfirmationService],
})
export class MembersComponent {
  members: Member[] = [];
  columns: any[] = [];
  searchValue: string = '';
  // columsn: any[] = [];
  plan: subscriptionPlanModel[] = []; // for p-select dropdown
  genderValues: { name: string; value: GenderEnum }[] = []; // for gender select dropdown
  detailssubmited: boolean = false; // used for form validation error messages
  isEditMode: boolean = false; // used to disable enrollment field during edit

  // Dialog related
  memberDialog: boolean = false;
  isEdit: boolean = false;
  model = new Member();
  errorMessage: string | undefined;
  submitted: boolean = false;
  memberFields: TempType[] = [];

  constructor(
    private memberService: MemberService,
    private _dataStorageService: DataStorageService,
    private _planService: PlansService,
    private confirmationService: ConfirmationService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadMembers();
    this.initializeColumns();
    this.genderValues = [
      { name: 'Male', value: GenderEnum.Male },
      { name: 'Female', value: GenderEnum.Female },
    ];

    // this._planService
    //   .getSubscriptionPlanList()
    //   .subscribe((plans: subscriptionPlanModel[]) => {
    //     this.plan = plans;
    //   });
  }

  loadMembers() {
    this.members = this.memberService.getMembersData();
  }

  initializeColumns() {
    this.columns = [
      { field: 'enrollmentNo', header: 'Enrollment No' },
      { field: 'name', header: 'Name' },
      { field: 'gender', header: 'Gender' },
      { field: 'subscriptionPlanId', header: 'Subscription Plan' },
      { field: 'height', header: 'Height' },
      { field: 'weight', header: 'Weight' },
      { field: 'contactNumber', header: 'Contact Number' },
      { field: 'membershipStartDate', header: 'Start Date' },
      { field: 'membershipEndDate', header: 'End Date' },
      { field: 'isActive', header: 'Status' },
      { field: 'actions', header: 'Actions' }, // for edit/delete buttons
    ];
  }

  openNew() {
    this.model = new Member();
    this.isEdit = false;
    this.isEditMode = false;
    this.memberDialog = true;
  }

  editMember(member: Member) {
    this.isEdit = true;
    this.isEditMode = true;
    this.model = { ...member };
    this.memberDialog = true;
  }

  saveMember() {
    if (this.model.id && this.model.id > 0) {
      const result = this.memberService.updateMember(this.model);
      if (!result.sucess) {
        this.errorMessage = result.message;
        return;
      }
    } else {
      const result = this.memberService.addMember({ ...this.model });
      if (!result.sucess) {
        this.errorMessage = result.message;
        return;
      }
    }
    this.detailssubmited = true;
    this.memberDialog = false;
    this.errorMessage = '';
    this.loadMembers();
    this.changeDetector.detectChanges();
  }

  deleteMember(member: Member) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${member.name}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.members = this.members.filter((m) => m.id !== member.id);
      },
    });
  }

  fillMember(member: Member): void {
    this.memberFields = [
      { label: 'Enrollment No', value: `${member.enrollmentNo}` },
      { label: 'Name', value: `${member.name}` },
      { label: 'Gender', value: `${member.gender}` },
      { label: 'Subscription Plan', value: `${member.subscriptionPlanId}` },
      { label: 'Height', value: `${member.height}` },
      { label: 'Weight', value: `${member.weight}` },
      { label: 'Contact Number', value: `${member.contactNumber}` },
      {
        label: 'Membership Start Date',
        value: `${member.membershipStartDate?.toLocaleDateString()} `,
      },
      {
        label: 'Membership End Date',
        value: `${member.membershipEndDate?.toLocaleDateString()}`,
      },
    ];
  }
  viewMemberDetails(id: number) {
    const detail = this.memberService.getMemberById(id);
    if (detail) {
      this.model = detail;
      this.fillMember(this.model);
      //console.log(this.memberFields);
      this.submitted = false;
      this.memberDialog = true;
    }
  }

  // Get subscription plan name
  getPlanNameById(id: number): string | undefined {
    return this._dataStorageService.SubscriptionPlanList.find(
      (plan: subscriptionPlanModel) => plan.id === id
    )?.planName;
  }

  getGenderValue(enumValue: GenderEnum): string {
    return GenderEnum[enumValue];
  }
}
