import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any, filteredName: string) {

    if (value.length === 0, filteredName == '') {
      return value;
    }

    const namesFiltered: any[] = [];
 
    for (const item of value) {
      if (item.name.toLowerCase().includes(filteredName.toLowerCase())) {
        namesFiltered.push(item);
      }
    }

    return namesFiltered;
  }

}
