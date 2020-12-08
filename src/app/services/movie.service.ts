import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie, MovieSearchResult } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // fetchMovie(title): Observable<Movie> {
  //   return this.http.get<Movie>(`${this.apiUrl}/?apiKey=${this.apiKey}&t=${title}`)
  // }

  searchMovie(title) {
    return this.http
      .get<MovieSearchResult>(
        `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${title}`
      )
      .pipe(pluck('results'));
  }

  getMovieDetailsByMovieId(movieId) {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${movieId}`);
  }
  // https://api.themoviedb.org/3/discover/movie?api_key=9fac4307c0e4253a38ea9162da70fd92&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&year=2020
  discoverMovies() {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&year=2020`
    );
  }
}
