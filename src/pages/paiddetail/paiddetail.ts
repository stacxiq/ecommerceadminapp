import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-paiddetail',
  templateUrl: 'paiddetail.html',
})
export class PaiddetailPage {
  product : any;
  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.product = this.navParams.data;
  }

}
