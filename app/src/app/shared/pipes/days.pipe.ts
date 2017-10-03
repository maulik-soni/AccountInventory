import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'; 

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: Date): number {
    return moment(value,'DD-MM-YY',true).diff(moment(),'days')+1;
  }

}
