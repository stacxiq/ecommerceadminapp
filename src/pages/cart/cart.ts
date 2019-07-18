import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  uid:string;
  list : Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db : AngularFireDatabase,public alert : AlertController,public toast : ToastController) {
  }

  ionViewDidLoad() {
    this.uid = this.navParams.data;
    this.list = this.db.list(`cart/${this.uid}`).snapshotChanges();
    console.log(this.list);

  }

  req_done(key){
    console.log(key)
    this.alert.create({
      subTitle:" سوف يؤدي ذلك الى حذف الطلب ",
      cssClass:"setdire",
      buttons:[{text:"حذف",handler: ()=> {
          this.db.list(`cart/${this.uid}`).remove(key);
          this.toast.create({
            message:"تم حذف ",
            duration:3000,
            cssClass:"setdire"
          }).present();
       
      }},"الغاء"]
    }).present();
  }

}
