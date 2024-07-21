import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEmailComponent } from './service-email.component';

describe('ServiceEmailComponent', () => {
  let component: ServiceEmailComponent;
  let fixture: ComponentFixture<ServiceEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
