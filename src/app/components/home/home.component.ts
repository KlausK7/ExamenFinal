import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    public tittle = 'Electro Hogar Inf3210'

  //direcion imagenes
  slides = [{'image': './assets/d3.jpg'},
    {'image': './assets/cama2.jpg'},
    {'image': './assets/refri.webp'},
    {'image': './assets/audio.jpg'},
    {'image': './assets/closet.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
