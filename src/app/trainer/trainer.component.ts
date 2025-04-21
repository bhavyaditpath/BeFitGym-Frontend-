import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenderEnum } from '../gender.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Trainers } from './trainer.model';
import { TrainerService } from './trainer.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Select } from 'primeng/select';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePicker } from 'primeng/datepicker';

interface Timing {
  name: string;
  code: string;
}

// interface Activate {
//   name: string;
//   code: string;
// }

export type TempType = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-trainer',
  imports: [
    CardModule,
    ReactiveFormsModule,
    CommonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    ToggleSwitchModule,
    Select,
    ConfirmDialogModule,
    DatePicker,
  ],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css',
  providers: [ConfirmationService],
})
export class TrainerComponent implements OnInit {
  // genderValues = GenderValues;
  trainer: Trainers[] = [];
  minDate: Date = new Date();
  selectedtrainers!: Trainers;
  model = new Trainers();
  trainerDetailsFields: TempType[] = [];
  formGroup!: FormGroup;
  AddEditDialogbox: boolean = false;
  submitted: boolean = false;
  TrainerDetailDialog: boolean = false;
  isEdit: boolean = false;
  timing: Timing[] | undefined;
  tableVisible: boolean = true;
  activate: { name: boolean; value: string }[] | undefined;

  gender: { name: string; code: string }[] | undefined;

  constructor(
    private _trainerServices: TrainerService,
    private confirmationService: ConfirmationService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.trainer = this._trainerServices.getTrainerData();
    this.activate = [
      { name: true, value: 'Activate' },
      { name: false, value: 'Deactivate' },
    ];
  }

  genders = [
    { id: 0, name: 'Male' },
    { id: 1, name: 'Female' },
  ];

  //GenderEnum
  getGenderValue(_enumValue: GenderEnum): string {
    return GenderEnum[_enumValue];
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    gender: new FormControl('', [Validators.required]),
    contactNumber: new FormControl('', [
      Validators.required,
      // Validators.pattern('^[6-9]d{9}$'),
      Validators.min(999999999),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl(null, [Validators.required, Validators.min(10000)]),
    Activate: new FormControl('', [Validators.required]),
    joiningDate: new FormControl('', [Validators.required]),
    totalExperience: new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]),
    heightCm: new FormControl('', [Validators.required, Validators.min(100)]),
    weightKg: new FormControl('', [Validators.required, Validators.min(20)]),
    inTiming: new FormControl('', [Validators.required]),
    outTiming: new FormControl('', [Validators.required]),
  });

  openNew() {
    this.model = new Trainers();
    this.isEdit = false;
    this.submitted = false;
    this.userForm.reset();
    this.AddEditDialogbox = true;
  }

  viewMemberDetails(id: number) {
    const detail = this._trainerServices.getMemberById(id);
    console.log(detail)
    if (detail) {
      // this.memberdetail = detail;
      this.fillMember(detail);
      //console.log(this.memberFields);
      this.submitted = false;
      this.TrainerDetailDialog = true;
    }
  }

  fillMember(trainer: Trainers): void {
    this.trainerDetailsFields = [
      { label: 'First Name', value: `${trainer.firstName}` },
      { label: 'Last Name', value: `${trainer.lastName}` },
      { label: 'Gender', value: `${trainer.gender}` },
      { label: 'Contact No', value: `${trainer.contactNumber}` },
      { label: 'Email', value: `${trainer.email}` },
      { label: 'Activate', value: `${trainer.Activate}` },
      { label: 'Joining Date', value: `${trainer.joiningDate}` },
      { label: 'Total Experience', value: `${trainer.totalExperience} years` },
      { label: 'Height', value: `${trainer.heightCm}` },
      { label: 'Weight', value: `${trainer.weightKg}` },
      // { label: 'InTiming', value: `${trainer.timing}` },
      // { label: 'OutTiming', value: `${trainer.timing}` },
    ];
  }

  saveTrainers() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    const newTrainer = this.userForm.value;
    if (newTrainer.id) {
      // Edit
      const updatedTrainer = this._trainerServices.updateTrainer(newTrainer);
      console.log('updatedTrainer', updatedTrainer);
    } else {
      // Add
      newTrainer.id = this._trainerServices.trainerList.length + 1;
      const result = this._trainerServices.addTrainer(newTrainer);
      console.log('newTrainer', result);
    }
    this.tableVisible = false;
    this.changeDetector.detectChanges();
    this.trainer = this._trainerServices.trainerList;
    this.tableVisible = true;

    this.userForm.reset();
    this.model = new Trainers();
    this.AddEditDialogbox = false;
  }

  toggleStatus(id: number) {
    this._trainerServices.updateStatus(id);
  }

  editMember(trainer: Trainers) {
    console.log(trainer, 'train');
    this.isEdit = true;
    this.userForm.patchValue(trainer);
    this.AddEditDialogbox = true;
  }

  deleteMember(trainer: Trainers) {
    // console.log("bhavya");
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${trainer.firstName} ${trainer.lastName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('bhavya');
        this.trainer = this.trainer.filter((val) => val.id !== trainer.id);
      },
    });
  }

  getValues(event: any) {
    console.log(event);
    console.log(event.target.value);
    return event.target.value;
  }
}
