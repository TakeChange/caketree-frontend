import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    {
      src: "images/img1.jpg",
      title: "This is our Cake Tree",
      subtitle: "Experience sweetness like never before",
    },
    {
      src: "images/img2.png",
      title: "Delicious Treats",
      subtitle: "Every bite, a memory to cherish",
    },
    {
      src: "images/img3.jpg",
      title: "Custom Cakes",
      subtitle: "Made with love and creativity",
    },
  ];
}