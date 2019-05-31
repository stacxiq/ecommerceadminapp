import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddproductsPage } from '../pages/addproducts/addproducts';
import { PaidPage } from '../pages/paid/paid';
import  firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { ManageProductsPage } from '../pages/manage-products/manage-products';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ManageProductsPage;
  @ViewChild(Nav) nav: Nav;
  activePage:any;
  inactive:any;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen ,
     ) {
    platform.ready().then(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user || user.email !== "admin@gmail.com") {
          this.nav.setRoot(LoginPage)
          unsubscribe();
        } else {
          this.rootPage = ManageProductsPage;
          unsubscribe();
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'اداره المنتجات', component: ManageProductsPage},
      { title: ' اضافه منتجات', component: AddproductsPage },
      { title: 'المشتريات ', component: PaidPage },
    ];
    this.activePage=this.pages[0];
  }
  check(p){
    return p == this.activePage;
  }
  checkm(p){
    let m=false;
     if(p != this.activePage){
       m=true;
     }
     return m;
     
  }
  openPage(p){
    this.nav.setRoot(p.component);
    this.activePage=p;
  }
}