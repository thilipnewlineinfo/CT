import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  mouseOvered1;
  mouseOvered2;
  mouseOvered3;

  //images = [944, 1011, 984, 1026].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    "../assets/img/Banner1.jpg",
    "../assets/img/Banner2.jpg",
    "../assets/img/Banner3.jpg"
  ]

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
