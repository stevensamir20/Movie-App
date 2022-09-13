import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription, switchMap } from 'rxjs';
import { ActorsService } from 'src/app/shared/services/actors.service';

@Component({
  selector: 'app-single-actor',
  templateUrl: './single-actor.component.html',
  styleUrls: ['./single-actor.component.scss']
})

export class SingleActorComponent implements OnInit, OnDestroy {

  actor: any;
  sub?: Subscription;
  router: any;

  constructor( private actorsService: ActorsService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( (params) => {

      let id = params.get("id");

      if (id) {
        let actId = parseInt(id);
        this.actorsService.getActor()
        .pipe( 
          switchMap( (item) => {
            if (item.length) { return of(item) }
            return this.actorsService.getActors()
          })
        ) 
        .subscribe( (res) => {
          this.actor = res.find( (obj) => {
            return obj.actorId  === actId
          })
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
