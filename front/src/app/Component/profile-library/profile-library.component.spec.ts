import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLibraryComponent } from './profile-library.component';

describe('ProfileLibraryComponent', () => {
  let component: ProfileLibraryComponent;
  let fixture: ComponentFixture<ProfileLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
