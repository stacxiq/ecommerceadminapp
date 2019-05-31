import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  list : Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase, public alert : AlertController,
    public toast : ToastController) {



    }

  ionViewDidLoad() {
    this.list = this.db.list(`waitingproducts/${this.navParams.data}`).snapshotChanges();
    console.log(this.list);
    console.log(this.navParams.data);
  }
  del(item:any){
    this.alert.create({
      subTitle:"هل انت متأكد من حذف الاكلة؟",
      cssClass:"setdire",
      buttons:[{text:"حذف",handler: ()=> {
        this.db.list(`waitingproducts/${this.navParams.data}`).remove(item).then( OmarReal => {
          this.toast.create({
            message:"تم حذف ",
            duration:3000,
            cssClass:"setdire"
          }).present();
        } )
      }},"الغاء"]
    }).present();
  }
  add(item){
    this.db.list(`products/${this.navParams.data}`).push(item).then( OmarReal => {
      this.toast.create({
        message:"تم ",
        duration:3000,
        cssClass:"setdire"
      }).present();
    } )
  }
}
