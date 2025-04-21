import { ChangeDetectorRef, Component } from '@angular/core';
import { TempType } from '../module.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PlansService } from '../plans.service';
import { subscriptionPlanModel } from '../../shared/models/plans.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
  standalone: false,
  providers: [ConfirmationService, MessageService],
})
export class PlansComponent {
  tableVisible: boolean = true;
  plans: subscriptionPlanModel[] = [];
  selectedplans!: subscriptionPlanModel;
  planDetailsFields: TempType[] = [];
  planDetailDialog: boolean = false;
  submitted: boolean = false;
  isEditMode: boolean = false;

  constructor(
    private _planService: PlansService,
    private confirmationService: ConfirmationService,
    private MessageService: MessageService,
    public router: Router
  ) {}

  ngOnInit() {
    this.plans = this._planService.getSubscriptionPlanList();
  }

  confirmPlanAction(event: Event, plan: subscriptionPlanModel, key: string) {
    const action = plan.activate ? 'Deactivate' : 'Activate';

    this.confirmationService.confirm({
      key: key, // Use the specific key for this confirmation
      target: event.target as EventTarget,
      message: `Are you sure you want to ${action} this plan?`,
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: action,
        severity: plan.activate ? 'danger' : 'success', // Use 'danger' for deactivating, 'success' for activating
      },
      accept: () => {
        this.isActivate(plan); // Toggle activation status
        this.MessageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: `Plan ${action}d successfully.`,
          life: 3000,
        });
      },
      reject: () => {
        this.MessageService.add({
          severity: 'error',
          summary: 'Cancelled',
          detail: `You have cancelled the ${action.toLowerCase()} action.`,
          life: 3000,
        });
      },
    });
  }

  isActivate(plan: subscriptionPlanModel) {
    plan.activate = !plan.activate; // Toggle plan activation status
  }

  getValues(event: any) {
    console.log(event);
    console.log(event.target.value);
    return event.target.value;
  }

  getSeverity(active: boolean) {
    if (active == true) {
      return 'success';
    } else {
      return 'danger';
    }
  }

  confirmDelete(plan: subscriptionPlanModel, key: string) {
    console.log('bhavya');
    this.confirmationService.confirm({
      key: key,
      message: `Are you sure you want to delete ${plan.planName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('bhavya');
        this.plans = this.plans.filter((val) => val.id !== plan.id);
      },
    });
  }

  viewPlanDetail(id: number) {
    const details = this._planService.getPlanById(id);
    // console.log(details);
    if (details) {
      this.fillPlan(details);
      this.submitted = false;
      this.planDetailDialog = true;
    }
  }

  fillPlan(plans: subscriptionPlanModel): void {
    this.planDetailsFields = [
      { label: 'Plan Name', value: `${plans.planName}` },
      { label: 'Price', value: `${plans.price}` },
      { label: 'Description', value: `${plans.description}` },
      { label: 'Time Period', value: `${plans.timePeriod}` },
      // { label: 'Activate', value: `${plans.activate}` },
    ];
  }

  first = 0;
  rows = 3;

  pageChange(event: { first: number; rows: number }) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
