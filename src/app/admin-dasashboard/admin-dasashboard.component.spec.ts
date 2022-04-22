import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDasashboardComponent } from './admin-dasashboard.component';

describe('AdminDasashboardComponent', () => {
  let component: AdminDasashboardComponent;
  let fixture: ComponentFixture<AdminDasashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDasashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDasashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
