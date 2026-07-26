import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatemngmntComponent } from './statemngmnt.component';

describe('StatemngmntComponent', () => {
  let component: StatemngmntComponent;
  let fixture: ComponentFixture<StatemngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatemngmntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatemngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
