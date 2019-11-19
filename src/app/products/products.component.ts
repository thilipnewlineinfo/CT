import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  title = 'Products';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
