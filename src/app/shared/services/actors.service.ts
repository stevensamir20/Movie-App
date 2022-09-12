import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  actors = [
    { id: "1", name: 'moa 1', text: 15000, img:'https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg'},
    { id: "2", name: 'mos 2', text: 23000, img:'https://www.gizbot.com/images/2018-08/canon-eos-1500d_153312080490.jpg'},
    { id: "3", name: 'maa 3', text: 30000, img:'https://i.pinimg.com/originals/f2/6c/08/f26c0845386e2c46d95120c23c5c94cb.jpg'},
    { id: "4", name: 'arr 4', text: 40000, img:'https://www.cameralabs.com/wp-content/uploads/gk_nsp_cache/hero_NikonZ400f4-5_96815-gk_nsp-3_article.jpg'},
    { id: "5", name: 'zzz 5', text: 8000, img:'https://images.pexels.com/photos/7420958/pexels-photo-7420958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
  ]
 
  getActor( id: string ) {
    return this.actors.find(obj => obj.id === id);
  }

  constructor() { }
}
