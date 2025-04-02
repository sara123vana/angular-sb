import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshoppingsComponent } from './viewshoppings.component';

describe('ViewshoppingsComponent', () => {
  let component: ViewshoppingsComponent;
  let fixture: ComponentFixture<ViewshoppingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewshoppingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewshoppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
