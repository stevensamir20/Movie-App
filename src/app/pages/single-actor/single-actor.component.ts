import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription, switchMap } from 'rxjs';
import { ActorsPayload } from 'src/app/shared/interfaces/actors-payload';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { faEye, faSpinner, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-single-actor',
  templateUrl: './single-actor.component.html',
  styleUrls: ['./single-actor.component.scss']
})

export class SingleActorComponent implements OnInit, OnDestroy {

  actor?: ActorsPayload;
  sub?: Subscription;
  router: any;
  showLoading?: boolean = false;
  errorMsg?: string;

  constructor( private actorsService: ActorsService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.showLoading = true;
    this.sub = this.route.paramMap.subscribe( (params) => {
      let id = params.get("id");

      if (id) {
        let actId = parseInt(id);
        this.actorsService.getActor()
        .pipe( 
          switchMap( (item) => {
            if (item.length) { 
              return of(item) 
            }
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
            this.showLoading = false;
            this.errorMsg = error;
          },
        )
      }
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  faStar = faStar;
  faEye = faEye;
  faClock = faClock;
  faSpinner = faSpinner;
}
