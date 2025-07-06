import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteUsersComponent } from './modal-delete-users.component';

describe('ModalDeleteUsersComponent', () => {
  let component: ModalDeleteUsersComponent;
  let fixture: ComponentFixture<ModalDeleteUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteUsersComponent]
    });
    fixture = TestBed.createComponent(ModalDeleteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
