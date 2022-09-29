import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceSearchComponent } from './debounce-search.component';

describe('DebounceSearchComponent', () => {
  let component: DebounceSearchComponent;
  let fixture: ComponentFixture<DebounceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
