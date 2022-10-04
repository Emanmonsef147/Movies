import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies :Movie[] = [];
genreId:string | null = null;
SearchValue :string | null = null;
  constructor(private route:ActivatedRoute, private moviesService :MoviesService) { }

  ngOnInit(): void {

    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
     if(genreId){
      this.genreId=genreId;
      this.getMoviesByGenres(genreId,1)
     }
     else{
      this.getPagedMovies(1)
     }
  });
   
  }
  getMoviesByGenres(genreId: string ,page:number) {
    this.moviesService.getMovieByGenre(genreId,page).subscribe( movies=> {
      this.movies = movies;
  });
  }
  getPagedMovies(page:number, searchKey ? :string ){
    this.moviesService.searchMovie(page,searchKey).subscribe( movies=> {
      this.movies = movies;
  });
  }
  paginate(event:any){
    const pageNumber = event.page +1;
    if(this.genreId){
      this.getMoviesByGenres(this.genreId,pageNumber)

    }
    else{
      if(this.SearchValue){
        this.getPagedMovies(pageNumber,this.SearchValue)
      }
      else{
        this.getPagedMovies(pageNumber)
      }
    }
  
    
  }
  searchValueInput(){
    if(this.SearchValue)
    this.getPagedMovies(1,this.SearchValue)
  }
}
