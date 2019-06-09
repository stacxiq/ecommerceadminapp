import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-adminproducts',
  templateUrl: 'adminproducts.html',
})
export class AdminproductsPage {

  list : Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase, public alert : AlertController,
    public toast : ToastController) {}

  ionViewDidLoad() {
    this.list = this.db.list(`adminproducts`).snapshotChanges();
    console.log(this.list);
    console.log(this.navParams.data);
  }
  del(item:any,cat,key){
    this.alert.create({
      subTitle:"هل انت متأكد من حذف ؟",
      cssClass:"setdire",
      buttons:[{text:"حذف",handler: ()=> {
        this.db.list(`adminproducts`).remove(item).then( OmarReal => {
          this.db.list(`products/${cat}`).remove(key);
          this.toast.create({
            message:"تم حذف ",
            duration:3000,
            cssClass:"setdire"
          }).present();
        } )
      }},"الغاء"]
    }).present();
  }


}
