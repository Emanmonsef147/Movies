import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Movie} from '../models/movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 movie:any;
 movieId:any;
 @Input() items: Movie[]= [];
 @Input() title :string='';
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId=this.activeRoute.snapshot.paramMap.get('id');
    this.movie=this.items.find(x => x.id == this.movieId);
  }

}
