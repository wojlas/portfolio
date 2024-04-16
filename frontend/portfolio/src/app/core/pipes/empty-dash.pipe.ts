import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyDash',
  standalone: true
})
export class EmptyDashPipe implements PipeTransform {

  transform(value: string): string {
    return value ?? '-';
  }

}
