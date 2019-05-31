import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
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
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public db : AngularFireDatabase,
      public auth : AuthProvider,
      
      public load : LoadingController) {
    }
  
    register(email,pass){
  
      var load = this.load.create({
      content:"جاري انشاء الحساب",
      cssClass:"loaddire"
      });
  
      if(this.emailreg.replace(/\s/g,"") != "" && this.passreg.replace(/\s/g,"") != ""){
  
      load.present();
  
    this.auth.register(this.emailreg,this.passreg).then( (user)=> {
      let userId=firebase.auth().currentUser.uid;
      if(this.emailreg == "admin@gmail.com"){
        this.navCtrl.setRoot(ManageProductsPage);
        this.navCtrl.goToRoot;
      }

      load.dismiss();
  
    },(e)=>{
      console.log(e);
      load.dismiss();
    }).catch( ()=> {
  
      load.dismiss();
  
    });
  
  
    }   else{
      console.log(email + ' ' + pass);
    }
    console.log(this.emailreg + ' ' + this.passreg);
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
      if(email == "admin@gmail.com"){
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
