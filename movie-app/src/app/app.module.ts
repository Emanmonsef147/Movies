import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes , RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {PaginatorModule} from 'primeng/paginator';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {TabViewModule} from 'primeng/tabview';
import { MovieVedioComponent } from './movie-vedio/movie-vedio.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import { GenresComponent } from './genres/genres.component';
import {InputTextModule} from 'primeng/inputtext';

const appRoutes : Routes=[
  {path:'' ,redirectTo :'Home',pathMatch:'full'},
  {path :'Home' ,component : HomeComponent},
  {path :'Movies' ,component : MoviesComponent},
  {path :'Movies/genre/:genreId' ,component : MoviesComponent},
  {path :'Movie/:id' ,component : MovieDetailsComponent},
  {path :'genre' ,component : GenresComponent},
  {path :'**' ,component : ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    ErrorComponent,
    SliderComponent,
    MovieComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    MovieVedioComponent,
    GenresComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
