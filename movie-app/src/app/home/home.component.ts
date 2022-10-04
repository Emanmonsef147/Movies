import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularmovies :Movie [] =[];
  upcomingmovies :Movie [] =[];
  topratedmovies :Movie [] =[];
   constructor(private movieService : MoviesService) { }

  ngOnInit(): void {
  this.movieService.getMovie('popular').subscribe((res)=>{
    this.popularmovies = res;
   
  })
  this.movieService.getMovie('upcoming').subscribe((res )=>{
    this.upcomingmovies = res ;
   
  })
  this.movieService.getMovie('top_rated').subscribe((res)=>{
    this.topratedmovies = res;
   
  })
  }

}
