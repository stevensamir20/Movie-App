import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actorFilter'
})

export class ActorFilterPipe implements PipeTransform {

  transform(value: any, filteredName: string) {

    const actorsFiltered: any[] = [];
 
    if(value?.length){
      for (const item of value) {
        if (item.actorName.toLowerCase().includes(filteredName.toLowerCase())) {
          actorsFiltered.push(item);
        }
      }
    }

    return actorsFiltered;
  }
}