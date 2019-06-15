import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTemplateComponent } from './generate-template.component';

describe('GenerateTemplateComponent', () => {
  let component: GenerateTemplateComponent;
  let fixture: ComponentFixture<GenerateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
