import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchDebounceComponent } from './user-search-debounce.component';

describe('UserSearchDebounceComponent', () => {
  let component: UserSearchDebounceComponent;
  let fixture: ComponentFixture<UserSearchDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSearchDebounceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSearchDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
