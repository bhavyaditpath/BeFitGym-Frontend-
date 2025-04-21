import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeperiod',
})
export class TimeperiodPipe implements PipeTransform {
  
  transform(months: number): string {
    if (months === 1) {
      return `${months} month`;
    }
    return `${months} months`;
  }
}
