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
  showLoading: boolean = false;
  errorMsg?: string;

  constructor( private actorsService: ActorsService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( (params) => {
      this.showLoading = true;
      let id = params.get("id");

      if (id) {
        let actId = parseInt(id);
        this.actorsService.getActor()
        .pipe( 
          switchMap( (item) => {
            if (item.length) { 
              this.showLoading = false;
              return of(item) 
            }
            this.showLoading = false;
            return this.actorsService.getActors()
          })
        ) 
        .subscribe( 
          (res) => {
            this.actor = res.find( (obj) => {
              this.showLoading = false;
              return obj.actorId  === actId
            })
          },
          (error) => {
            
          },
        )
      }
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
