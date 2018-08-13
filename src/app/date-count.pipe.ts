import { Pipe, PipeTransform } from '@angular/core';
import { getLocaleMonthNames } from '@angular/common';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const today:Date = new Date();
    const todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateChange = Math.abs(value - todayWithNoTime)
    const secondsInADay= 86400;

    var dateChangeSeconds = dateChange*0.001;

    var dateCount = dateChangeSeconds/secondsInADay;

    if (dateCount >=1){
      return dateCount;
    } else {
      return 0;
    }

  }

}
