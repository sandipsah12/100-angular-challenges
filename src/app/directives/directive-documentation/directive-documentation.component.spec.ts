import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDocumentationComponent } from './directive-documentation.component';

describe('DirectiveDocumentationComponent', () => {
  let component: DirectiveDocumentationComponent;
  let fixture: ComponentFixture<DirectiveDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
