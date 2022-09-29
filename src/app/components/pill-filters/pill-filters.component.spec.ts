import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillFiltersComponent } from './pill-filters.component';

describe('PillFiltersComponent', () => {
  let component: PillFiltersComponent;
  let fixture: ComponentFixture<PillFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
