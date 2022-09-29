import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDocumentationComponent } from './service-documentation.component';

describe('ServiceDocumentationComponent', () => {
  let component: ServiceDocumentationComponent;
  let fixture: ComponentFixture<ServiceDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
