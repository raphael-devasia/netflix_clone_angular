import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCorousalComponent } from './movie-corousal.component';

describe('MovieCorousalComponent', () => {
  let component: MovieCorousalComponent;
  let fixture: ComponentFixture<MovieCorousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCorousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCorousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
