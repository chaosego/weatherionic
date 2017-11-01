import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherInfo: any = {};
  cityName: string = "London";

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

    this.getData();
    
  }

  getData(){
    let loading = this.loadingCtrl.create();
    loading.present();
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&appId=53591a412c95932221df665561b01151").subscribe((data) => {
      console.log(data.json())
      this.weatherInfo = data.json();
      loading.dismiss();
    }, (error) => {
      console.log(error);
      loading.dismiss();
    })
  }

}
