import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform {

  transform(value: any, filteredName: string) {

    const moviesFiltered: any[] = [];
 
    if(value?.length){
      for (const item of value) {
        if (item.movieName.toLowerCase().includes(filteredName.toLowerCase())) {
          moviesFiltered.push(item);
        }
        else if (item.movieCategory.toLowerCase().includes(filteredName.toLowerCase())) {
          moviesFiltered.push(item);
        }
      }
    }

    return moviesFiltered;
  }
}