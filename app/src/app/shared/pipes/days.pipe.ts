import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'; 

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: Date) {
     let result=moment().diff(moment(value,'YYYY-MM-DD',true),'days')+1;
     if(result>0){
       return '+'+result;
     }
     return result;
   
  }

}
