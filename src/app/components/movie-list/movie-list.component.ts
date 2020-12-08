import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<any>;

  filters;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this.fetchMovies();
  }

  fetchMovies() {
    return this.movieService
      .discoverMovies()
      .pipe(tap(console.log), pluck('results'));
  }
}
