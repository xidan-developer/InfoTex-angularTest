import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class DashboardPipe implements PipeTransform {

  transform(value: any): any {

    return value.slice().reverse();
  }

}
