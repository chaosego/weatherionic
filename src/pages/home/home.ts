import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherInfo: any = {};

  constructor(public navCtrl: NavController, public http: Http) {

    this.getData();
    
  }

  getData(){
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=london&appId=53591a412c95932221df665561b01151").subscribe((data) => {
      console.log(data.json())
      this.weatherInfo = data.json();
    }, (error) => {
      console.log(error)
    })
  }

}
