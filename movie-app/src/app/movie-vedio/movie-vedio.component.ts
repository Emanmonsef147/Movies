import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-vedio',
  templateUrl: './movie-vedio.component.html',
  styleUrls: ['./movie-vedio.component.css']
})
export class MovieVedioComponent implements OnInit {
@Input() site :string ='YouTube';
@Input()  key :string |null = null;
vedioUrl :SafeResourceUrl ='';
  constructor( private sintizer : DomSanitizer) { }

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
    this.vedioUrl =this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
  break;
      case 'Viemo':
        this.vedioUrl =this.getSafeUrl('https://www.viemo.com/embed/' + this.key);
        break;
        }
  }
getSafeUrl(url:string){
  return this.sintizer.bypassSecurityTrustResourceUrl(url);
  
}
}