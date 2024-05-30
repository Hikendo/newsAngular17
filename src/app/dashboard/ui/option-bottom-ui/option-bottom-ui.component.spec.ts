import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBottomUiComponent } from './option-bottom-ui.component';

describe('OptionBottomUiComponent', () => {
  let component: OptionBottomUiComponent;
  let fixture: ComponentFixture<OptionBottomUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionBottomUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionBottomUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
