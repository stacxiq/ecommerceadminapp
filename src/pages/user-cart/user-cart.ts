import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { CartPage } from '../../pages/cart/cart'

@Component({
  selector: 'page-user-cart',
  templateUrl: 'user-cart.html',
})
export class UserCartPage {
   users:any = [];
   items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , private db:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.db.object(`cart`).snapshotChanges().subscribe(c=>{
      this.users = c.payload.val();
      let index = 0;
      this.items = [];
      for(let i in this.users){
        // console.log(i + '------------'+ this.users[i]);
        this.db.list(`users/${i}`).valueChanges().subscribe(data=>{
          this.items.push(data);
        })
      }
    });
  }

  passid(id){
    //console.log(id);
    this.navCtrl.push(CartPage,id);
  }

}


