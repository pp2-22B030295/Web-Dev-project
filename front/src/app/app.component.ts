import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProfileComponent} from "./Component/profile/profile.component";
import {ProfileReviewsComponent} from "./Component/profile-reviews/profile-reviews.component";
import {ProfileLibraryComponent} from "./Component/profile-library/profile-library.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, ProfileReviewsComponent, ProfileLibraryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
