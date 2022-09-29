import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDocumentationComponent } from './pipe-documentation.component';

describe('PipeDocumentationComponent', () => {
  let component: PipeDocumentationComponent;
  let fixture: ComponentFixture<PipeDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
