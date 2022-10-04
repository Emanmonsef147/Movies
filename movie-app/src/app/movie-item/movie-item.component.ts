
import { Component, OnInit,Input } from '@angular/core';
import { IMAGES_SIZES } from '../constants/images_sizes';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
 @Input() itemData : Movie | null =null;
 imageSize =IMAGES_SIZES;
  constructor() { }

  ngOnInit(): void {

}}
