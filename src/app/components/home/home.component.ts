import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DiscoverResponse, Movie } from '../../core/interfaces/types';
import { MovieService } from '../../core/services/movie.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router){ 
    this.getPopular();
  }

  getPopular(){
    this.movieService.getPopularMovies().pipe(take(1)).subscribe({
      next: (result: DiscoverResponse) => {
        this.movies = result.results;
        console.log(result.results);
      },
      error: (error) => {
        console.error(error);
      }
      // complete:
    });
  }

  cardClicked(id: number){
    // navigazione a componente movie-info
    this.router.navigateByUrl(`movie/${id}`)
  }

}
