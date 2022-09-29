import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersDocumentationComponent } from './others-documentation.component';

describe('OthersDocumentationComponent', () => {
  let component: OthersDocumentationComponent;
  let fixture: ComponentFixture<OthersDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
