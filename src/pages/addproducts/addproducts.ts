import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddproductPage } from '../addproduct/addproduct';

/**
 * Generated class for the AddproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-addproducts',
  templateUrl: 'addproducts.html',
})
export class AddproductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductsPage');
  }
  buy(name:string){
    this.navCtrl.push(AddproductPage);
  }


}
