import { Routes } from '@angular/router';
import {ProfileComponent} from "./Component/profile/profile.component";
import {ProfileLibraryComponent} from "./Component/profile-library/profile-library.component";
import {ProfileReviewsComponent} from "./Component/profile-reviews/profile-reviews.component";

export const routes: Routes = [
  {path : 'profile', component:ProfileComponent},
  {path : 'profile/library', component:ProfileLibraryComponent},
  {path : 'profile/reviews', component:ProfileReviewsComponent},

]
