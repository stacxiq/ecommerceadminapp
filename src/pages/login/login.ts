import { Component } from '@angular/core';
import {  NavController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import $ from "jquery";
import { ManageProductsPage } from '../manage-products/manage-products';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name="";
  emailreg="";
  passreg="";
  userId;
    constructor(public navCtrl: NavController,
      public auth : AuthProvider,

      public load : LoadingController) {
    }

    showLogin(){
      $(".register").slideUp();
      $(".login").slideDown();
    }

     login(email,pass){
      var load = this.load.create({
        content:"جاري تسجيل الدخول",
        cssClass:"loaddire"
        });

    if(email.length > 0 && pass.length > 0){

      load.present();

     this.auth.login(email,pass).then( (user)=> {
       load.dismiss();
      if(email == "admin96@admin.com"){
        this.navCtrl.setRoot(ManageProductsPage);
        this.navCtrl.goToRoot;
      }

    }).catch( ()=> {

      load.dismiss();

    });

    }

    }

    showRegister(){
      $(".login").slideUp();
      $(".register").slideDown();
    }

}
