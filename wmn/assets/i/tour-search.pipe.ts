import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tourSearch'
})
export class TourSearch implements PipeTransform {

  transform(value: any, args?: any): any {
   
    let filter = args.toLocaleLowerCase();
    return filter ? value.filter(t=> t.venue_city.toLocaleLowerCase().indexOf(filter) != -1) : value;
    //return value;

  }

}
