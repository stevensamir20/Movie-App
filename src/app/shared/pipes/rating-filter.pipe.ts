import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFilter'
})

export class RatingFilterPipe implements PipeTransform {

  transform(value: any) {

    const ratingFiltered: any[] = [];
    
    if(value?.length){
      for (const item of value) {
        if (parseInt(item.movieRating) >= 7) {
          ratingFiltered.push(item);
        }
      }
    }

    return ratingFiltered;
  }
}