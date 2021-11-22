import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    if (window.sessionStorage["userName"] == undefined) {
      // window.sessionStorage["userName"] = "";
      sessionStorage.setItem("userName", "");
      sessionStorage.setItem("reloadF5", "");
    }

    console.log("home sess userName: " + window.sessionStorage["userName"]);
    console.log("home sess reloadF5: " + window.sessionStorage["reloadF5"]);
    if (window.sessionStorage["reloadF5"] == "true") {
      window.sessionStorage["reloadF5"] = "false";
      window.location.href = window.location.href;
    }
  }

  ngAfterViewInit() {
    SwiperCore.use([Navigation, Pagination]);
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
