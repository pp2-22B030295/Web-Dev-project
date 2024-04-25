import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {UserIdService} from "./UserIdService";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  profileIsActive: boolean = this.profileStatus.getProfileStatus();

  constructor(private router: Router, protected profileStatus: UserIdService ) {}

  navigateToProfileInfo() {
    this.router.navigate(['profile']);
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }
  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }
  isActiveRemote() {
    if(this.profileStatus.getProfileStatus()){
      this.profileStatus.setProfileStatus(false)
    }
    else {
      this.profileStatus.setProfileStatus(true)
    }
  }
}
