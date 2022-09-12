import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActorComponent } from './single-actor.component';

describe('SingleActorComponent', () => {
  let component: SingleActorComponent;
  let fixture: ComponentFixture<SingleActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
