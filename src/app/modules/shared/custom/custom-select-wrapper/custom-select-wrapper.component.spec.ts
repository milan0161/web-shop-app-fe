import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectWrapperComponent } from './custom-select-wrapper.component';

describe('CustomSelectWrapperComponent', () => {
  let component: CustomSelectWrapperComponent;
  let fixture: ComponentFixture<CustomSelectWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSelectWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
