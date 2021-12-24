import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  // get minutes returns 'n hours, m minutes' format
  transform(value: number): string {
    var h = Math.floor(value / 60);
    var m = Math.floor(value % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
    return hDisplay + mDisplay; 
  }
}
