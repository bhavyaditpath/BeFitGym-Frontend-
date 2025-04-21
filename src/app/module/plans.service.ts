import { Injectable } from '@angular/core';
import { subscriptionPlanModel } from '../shared/models/plans.model';
import { DataStorageService } from '../shared/services/data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  getSubscriptionPlanList() {
    return this._datastorageService.SubscriptionPlanList;
  }

  getPlanById(id: number): subscriptionPlanModel | undefined {
    // console.log(`this is it ${id}`, 'aa');
    return this._datastorageService.SubscriptionPlanList.find(
      (m) => m.id === id
    );
  }

  getPlanNameById(id: number): string | undefined {
    return this._datastorageService.SubscriptionPlanList.find(
      (m: subscriptionPlanModel) => m.id === id
    )?.planName;
  }

  getActivePlans(): subscriptionPlanModel[] {
    return this._datastorageService.SubscriptionPlanList.filter(
      (plan) => plan.activate
    );
  }

  constructor(private _datastorageService: DataStorageService) {}
}
