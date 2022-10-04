import { Component, OnInit } from '@angular/core';
import { Genres } from '../models/genres';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
movieGenres : Genres[]=[];
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovieGenres().subscribe((movieDataGenres) => {
      this.movieGenres=movieDataGenres;
 });
  }

}
