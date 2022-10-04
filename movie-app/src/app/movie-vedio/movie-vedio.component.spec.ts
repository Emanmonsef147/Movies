import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieVedioComponent } from './movie-vedio.component';

describe('MovieVedioComponent', () => {
  let component: MovieVedioComponent;
  let fixture: ComponentFixture<MovieVedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieVedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
