import { Routes } from '@angular/router';
import {ProfileComponent} from "./Component/profile/profile.component";
import {ProfileLibraryComponent} from "./Component/profile-library/profile-library.component";
import {ProfileReviewsComponent} from "./Component/profile-reviews/profile-reviews.component";
import {SearchComponent} from "./Component/search/search.component";
import {BrowseComponent} from "./Component/browse/browse.component";
import {SignInComponent} from "./Component/sign-in/sign-in.component";
import {LoginComponent} from "./Component/login/login.component";
import {MovieComponent} from "./Component/movie/movie.component";
import {HomeComponent} from "./Component/home/home.component";

export const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'profile', component:ProfileComponent},
  {path : 'profile/library', component:ProfileLibraryComponent},
  {path : 'profile/reviews', component:ProfileReviewsComponent},
  {path : 'search', component:SearchComponent},
  {path : 'browse', component:BrowseComponent},
  {path : 'sign-in', component:SignInComponent},
  {path : 'login', component:LoginComponent},
  {path : 'movies/:id', component:MovieComponent},
]
