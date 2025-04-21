import { Component } from '@angular/core';
import { subscriptionPlanModel } from '../../shared/models/plans.model';
import { AddEditService } from './add-edit.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { NgForm } from '@angular/forms';

interface timeperiod {
  name: number;
  code: string;
  displayName: string
}

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
  standalone: false,
})
export class AddEditComponent {
  model = new subscriptionPlanModel();
  isEditMode: boolean = false;
  detailssubmited: boolean = false;
  timePeriod: timeperiod[] | undefined;
  selectedTimeperiod: timeperiod | undefined;
  id!: number;

  planEditForm: subscriptionPlanModel | undefined;

  ngOnInit(): void {
    this.timePeriod = [
      { name: 3, code: '3', displayName: '3 months' },
      { name: 6, code: '6', displayName: '6 months' },
      { name: 12, code: '12', displayName: '12 months' },
    ];

    this.route.params.subscribe((params) => {
      this.id = params['id']; // Access the 'id' parameter from the URL

      if (this.id) {
        this.isEditMode = true; 
        this.planEditForm = this._datastorageService.SubscriptionPlanList.find(
          (p) => p.id == this.id
        );
        if (this.planEditForm) {
          console.log(this.planEditForm);
          
          this.model = { ...this.planEditForm };
        }
        console.log('Test ID:', this.id);
      } else {
        this.isEditMode = false;  // It's in add mode if no id is found
      }
    });
  }

  constructor(
    private _addeditServices: AddEditService,
    public router: Router,
    private route: ActivatedRoute,
    private _datastorageService: DataStorageService,
     
  ) {}

  onSubmit(_form: NgForm) {
    // edit plans
    if (this.model.id && this.model.id > 0) {
      const result = this._addeditServices.updatePlan(this.model);
      console.log(result);
    } else {
      // add Plan
      let newPlan: subscriptionPlanModel = { ...this.model };
      const result = this._addeditServices.addNewPlan(newPlan);
      console.log(result);
    }

    this.router.navigate(['secure/module/subscriptionPlans']);
  }
}
