import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectMultiComponent } from './custom-select-multi.component';

describe('CustomSelectMultiComponent', () => {
  let component: CustomSelectMultiComponent;
  let fixture: ComponentFixture<CustomSelectMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSelectMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
