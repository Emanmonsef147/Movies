import { MOvieCredits, MOvieImages, MovieVedio, MovieVedioDto } from './../models/movie';
import { MoviesService } from './../Services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { IMAGES_SIZES } from '../constants/images_sizes';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie : Movie | null =null;
  movieImages :MOvieImages |null=null;
  movieCredits:MOvieCredits |null=null;
  movieVedios: MovieVedio[]=[];
  imageSize =IMAGES_SIZES;
  constructor(private route:ActivatedRoute,private movieService:MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovie(id)
      this.getMovieVedio(id)
      this.getMovieImages(id);
      this.getMovieCredits(id);
  });

}
getMovie(id:string){
  this.movieService.getMovieDetails(id).subscribe((movieData) => {
     this.movie=movieData;
});
}
getMovieImages(id:string){
  this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
    this.movieImages=movieImagesData;
});
}
getMovieCredits(id:string){
  this.movieService.getMovieCredits(id).subscribe((movieCreditData) => {
    this.movieCredits=movieCreditData;
});
}
getMovieVedio(id:string){
  this.movieService.getMovieVedio(id).subscribe((movieVedioData) => {
    this.movieVedios = movieVedioData;
});

}
}