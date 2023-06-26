import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpasswordComponent } from './npassword.component';

describe('NpasswordComponent', () => {
  let component: NpasswordComponent;
  let fixture: ComponentFixture<NpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpasswordComponent]
    });
    fixture = TestBed.createComponent(NpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
