import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';

/**
 * Generated class for the ManageProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-manage-products',
  templateUrl: 'manage-products.html',
})
export class ManageProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageProductsPage');
  }
  buy(name:string){
    this.navCtrl.push(ProductsPage,name);
  }

}
