import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleComponent } from './simple.component';
import { InputfieldsComponent } from '../shared/commonComponent/Component/inputfields/inputfields.component';


@NgModule({
  declarations: [SimpleComponent],
  imports: [CommonModule, SimpleRoutingModule, ReactiveFormsModule,FormsModule],
})
export class SimpleModule {}
