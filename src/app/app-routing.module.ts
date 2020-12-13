import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: MovieListComponent,
  },
  {
    path: 'details/:movieId',
    component: MovieDetailsComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
