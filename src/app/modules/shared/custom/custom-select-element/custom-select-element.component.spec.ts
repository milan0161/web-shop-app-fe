import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectElementComponent } from './custom-select-element.component';

describe('CustomSelectElementComponent', () => {
  let component: CustomSelectElementComponent;
  let fixture: ComponentFixture<CustomSelectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSelectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
