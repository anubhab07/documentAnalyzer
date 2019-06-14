import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTemplateComponent } from './verify-template.component';

describe('VerifyTemplateComponent', () => {
  let component: VerifyTemplateComponent;
  let fixture: ComponentFixture<VerifyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
