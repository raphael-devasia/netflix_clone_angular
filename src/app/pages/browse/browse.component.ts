import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieserviceService } from '../../shared/services/movieservice.service';
import { MovieCorousalComponent } from '../../shared/components/movie-corousal/movie-corousal.component';
import { IVideoContent } from '../../shared/model/video-content-interface';
import { CommonModule } from '@angular/common';
import { DescriptionPipe } from '../../shared/pipes/description.pipe';
import { Observable, catchError, forkJoin, map, switchMap } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    MovieCorousalComponent,
    CommonModule,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  movieService = inject(MovieserviceService);
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  sources = [this.movieService.getMovies(), this.movieService.getTvShows()];
  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows]) => {
          this.bannerDetail$ = this.movieService.getBannerDetail(
            movies.results[1].id
          );
          this.bannerVideo$ = this.movieService.getBannerVideo(
            movies.results[1].id
          );
          return {
            movies,
            tvShows,
          };
        })
      )
      .subscribe((res: any) => {
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
      });
  }
}
