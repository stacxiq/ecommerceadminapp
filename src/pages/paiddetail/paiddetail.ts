import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-paiddetail',
  templateUrl: 'paiddetail.html',
})
export class PaiddetailPage {
  product : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.product = this.navParams.data;
    console.log(this.product);
  }

}
