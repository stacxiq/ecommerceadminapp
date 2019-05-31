import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { PaiddetailPage } from '../paiddetail/paiddetail';

/**
 * Generated class for the PaidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-paid',
  templateUrl: 'paid.html',
})
export class PaidPage {
  list : Observable<any>;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public db:AngularFireDatabase
     ) {
  }

  ionViewDidLoad() {
    this.list = this.db.list(`paid`).snapshotChanges();
    console.log(this.list);
    console.log(this.navParams.data);
    }
    desc(item){
      console.log(item);
      this.navCtrl.push(PaiddetailPage,item);
    }

}
