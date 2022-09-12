import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-single-actor',
  templateUrl: './single-actor.component.html',
  styleUrls: ['./single-actor.component.scss']
})
export class SingleActorComponent implements OnInit, OnDestroy {

  actor: any;
  sub?: Subscription;
  router: any;
  
  
  constructor( private actorsService: ActorsService, private route: ActivatedRoute, router: Router ) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      this.actor = this.actorsService.getActor(id!); 
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
