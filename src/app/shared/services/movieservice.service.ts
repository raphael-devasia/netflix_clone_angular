import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmUxYTdmNjBmNGE3N2I4NmU2ODQzY2ViNzE2NTYxZiIsIm5iZiI6MTcyNjM4Mzg2OC41Mjg3MjYsInN1YiI6IjY2ZTY4NDJiMzc2OGE3M2Y4ZDkxMzdlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ys5KlMU-alFxKpQLo7BYb1JYLizAlrz1rUIfuS9FcZs',
  },
};


@Injectable({
  providedIn: 'root',
})
export class MovieserviceService {
  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options);
  }

  getRatedMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies',
      options
    );
  }

  getBannerImage(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      options
    );
  }

  getBannerVideo(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      options
    );
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options);
  }

  getTopRated() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      options
    );
  }

  getUpcomingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming',
      options
    );
  }
}
