import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MOvieCredits, MovieDto, MOvieImages, MovieVedioDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDeto } from '../models/genres';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl:string="https://api.themoviedb.org/3/";
  apiKey:string="0252d6f15fd897354ed6bcde89684f48";
 
  constructor( private http : HttpClient) { }
  
  getMovie(type:string="upcoming" ,count :number=12){
    
    return this.http.get<MovieDto>(`${this.baseUrl}movie/${type}?api_key=${this.apiKey}`)
    .pipe(switchMap((res)=>{
      return of(res.results.slice(0,count));

    }))
  }
  getMovieVedio(id:string){
    
    return this.http.get<MovieVedioDto>(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(switchMap((res)=>{
      return of(res.results);

    }))
  }

  getMovieDetails(id:string){
    return this.http.get<Movie>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
    
    }
  
    getMovieImages(id:string){
      return this.http.get<MOvieImages>(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`)
      
      }
      getMovieCredits(id:string){
        return this.http.get<MOvieCredits>(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
        
        }
        getMovieGenres(){
    
          return this.http.get<GenresDeto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
          .pipe(switchMap((res)=>{
            return of(res.genres);
      
          }))
        }
        getMovieByGenre(genreId:string,pageNum:number){
    
          return this.http.get<MovieDto>(`${this.baseUrl}discover/movie?with_genres=${genreId}&page=${pageNum}&api_key=${this.apiKey}`)
          .pipe(switchMap((res)=>{
            return of(res.results);
      
          }))
        }
  searchMovie(page:number,searchValue?:string){
    const urlsearch = searchValue? "search/movie" : "movie/popular"
    return this.http.get<MovieDto>(`${this.baseUrl}${urlsearch}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
    .pipe(switchMap((res)=>{
      return of(res.results.slice());

    }))
  }
}
