import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  filter,
  map,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'movie-details-lookup';

  searchMovieForm: FormGroup;

  movieSearchResults$: Observable<any>;

  versionNumber: number = environment.version;

  private destroyed$ = new Subject();
  movie: import('/Users/carlos/Code/angular/movie-details-lookup/src/app/models/movie.model').Movie;
  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit(): void {
    // this.searchMovieForm = this.fb.group({
    //   title: '',
    //   year: null,
    // });

    this.movieSearchResults$ = this.searchMovie('');

    // this.movie$ = this.searchMovieForm.get('title').valueChanges.pipe(
    //   takeUntil(this.destroyed$),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   map((input) => input.trim()),
    //   filter((input) => input),
    //   map((input) => input.toLowerCase()),
    //   switchMap(this.searchMovie)
    // );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  searchMovie(title) {
    return this.movieService.searchMovie(`Jack+Reacher`);
  }
}
