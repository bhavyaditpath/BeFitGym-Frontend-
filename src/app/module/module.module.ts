import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ModuleRoutingModule } from './module-routing.module';
import { PlansComponent } from './plans/plans.component';
import { TagModule } from 'primeng/tag';
import { AddEditComponent } from './add-edit/add-edit.component';
import { Select } from 'primeng/select';
import { Checkbox } from 'primeng/checkbox';
import { TimeperiodPipe } from '../shared/customPipe/timeperiod.pipe';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Toast } from 'primeng/toast';

export type TempType = {
  label: string;
  value: string;
};

@NgModule({
  declarations: [PlansComponent, AddEditComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
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
    ConfirmDialogModule,
    TagModule,
    FormsModule,
    Select,
    Checkbox,
    TimeperiodPipe,
    Toast,
    ConfirmPopupModule,
  ],
})
export class ModuleModule {}
