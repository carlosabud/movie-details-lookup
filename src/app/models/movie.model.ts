export interface RatingSource {
  Source: string;
  Value: string;
}

export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: RatingSource[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface MovieSearchResult {
  poster_path: string; // '/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg';
  adult: boolean; // false;
  overview: string; //'Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.';
  release_date: Date; //'2016-10-19';
  genre_ids: number[]; //[53, 28, 80, 18, 9648];
  id: number; // 343611;
  original_title: string; // 'Jack Reacher: Never Go Back';
  original_language: string; // 'en';
  title: string; // 'Jack Reacher: Never Go Back';
  backdrop_path: string; // '/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg';
  popularity: number; // 26.818468;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}
