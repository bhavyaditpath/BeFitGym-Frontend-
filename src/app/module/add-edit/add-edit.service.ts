import { Injectable } from '@angular/core';
import { subscriptionPlanModel } from '../../shared/models/plans.model';
import { PlansService } from '../plans.service';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AddEditService {
  addNewPlan(newPlan: subscriptionPlanModel) {
    newPlan.id = this._datastorageService.SubscriptionPlanList.length + 1;
    this._datastorageService.SubscriptionPlanList.push(newPlan);
    return newPlan;
  }

  updatePlan(updatedPlan: subscriptionPlanModel): subscriptionPlanModel | null {
    console.log(updatedPlan);
    const index = this._datastorageService.SubscriptionPlanList.findIndex(
      (t) => t.id === updatedPlan.id
    );
    if (index !== -1) {
      this._datastorageService.SubscriptionPlanList[index] = updatedPlan; // Update trainer
      return updatedPlan;
    }
    return null;
  }
  constructor(private _datastorageService: DataStorageService) {}
}
