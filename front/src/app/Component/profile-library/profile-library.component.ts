import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-library',
  standalone: true,
  imports: [],
  templateUrl: './profile-library.component.html',
  styleUrl: './profile-library.component.css'
})
export class ProfileLibraryComponent {
  constructor(private router: Router) {}
  navigateToProfileInfo() {
    this.router.navigate(['profile']);
  }
  navigateToProfileReviews() {
    this.router.navigate(['profile/reviews']);
  }
  navigateToProfileLibrary() {
    this.router.navigate(['profile/library']);
  }
}
