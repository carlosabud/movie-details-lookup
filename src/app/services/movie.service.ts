import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie, MovieSearchResult } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchMovie(title) {
    return this.http
      .get<MovieSearchResult>(`${this.apiUrl}/search/movie?query=${title}`)
      .pipe(pluck('results'));
  }

  getMovieDetailsByMovieId(movieId) {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${movieId}`);
  }

  discoverMovies() {
    return this.http.get(
      `${this.apiUrl}/discover/movie?language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&year=2020`
    );
  }
}
