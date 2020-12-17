import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  //direcion imagenes
  slides = [{'image': './assets/electro.jpg'},
    {'image': './assets/cama.jpg'},
    {'image': './assets/refri.webp'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
