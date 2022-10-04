import { animate, state, style, trigger ,transition} from '@angular/animations';
import { Component, OnInit ,Input} from '@angular/core';
import {Movie} from '../models/movie';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations:[
    trigger('slidefade',[
      state('void',style({opacity:0})),
      transition ('void <=> *',[animate('1s')]),
      
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[]= [];
  @Input() isBanner :boolean=false;
  currentSlideIndex:number=0;
  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(()=>{
        this.currentSlideIndex=++this.currentSlideIndex % this.items.length ;
      },5000)
    }
   
  }

}
