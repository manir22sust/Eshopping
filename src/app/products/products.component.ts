import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Minimalists Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 2,
      name: 'Minimalists Analog Watch',
      price: '209',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 3,
      name: 'Minimalists Analog Watch',
      price: '309',
      color: 'Black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 4,
      name: 'Minimalists Analog Watch',
      price: '409',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 5,
      name: 'Minimalists Analog Watch',
      price: '509',
      color: 'Black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 6,
      name: 'Minimalists Analog Watch',
      price: '609',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/shopping.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
