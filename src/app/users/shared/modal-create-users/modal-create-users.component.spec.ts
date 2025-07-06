import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateUsersComponent } from './modal-create-users.component';

describe('ModalCreateUsersComponent', () => {
  let component: ModalCreateUsersComponent;
  let fixture: ComponentFixture<ModalCreateUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreateUsersComponent]
    });
    fixture = TestBed.createComponent(ModalCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
