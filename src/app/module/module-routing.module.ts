import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  { path: 'subscriptionPlans', component: PlansComponent },
  { path: 'addEdit', component: AddEditComponent },
  { path: 'add', component: AddEditComponent},
  { path: 'edit/:id', component: AddEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule {}
