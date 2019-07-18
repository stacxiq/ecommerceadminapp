import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddproductsPage } from '../pages/addproducts/addproducts';
import { PaidPage } from '../pages/paid/paid';
import { LoginPage } from '../pages/login/login';
import { ManageProductsPage } from '../pages/manage-products/manage-products';
import { AdminproductsPage } from '../pages/adminproducts/adminproducts';
import { AngularFireAuth } from 'angularfire2/auth';
import { FriendsPage } from '../pages/friends/friends';
import { UserCartPage } from '../pages/user-cart/user-cart';

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
     private auth:AngularFireAuth
     ) {
    platform.ready().then(() => {
      const unsubscribe = auth.auth.onAuthStateChanged(user => {
        if (!user || user.email !== "admin96@admin.com") {
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
      { title: 'اداره منتجات الاعضاء', component: ManageProductsPage},
      { title: '  اضافه منتجات انتيكا', component: AddproductsPage },
      { title: 'المبيعات ', component: PaidPage },
      { title : 'الطلبات', component: UserCartPage},
      { title: 'قائمة الاصدقاء ', component: FriendsPage },
      { title :'منتجاتي', component: AdminproductsPage}
    ];
    this.activePage=this.pages[0];
  }
  // check(p){
  //   return p == this.activePage;
  // }
  // checkm(p){
  //   let m=false;
  //    if(p != this.activePage){
  //      m=true;
  //    }
  //    return m;

  // }
  // openPage(p){
  //   this.nav.setRoot(p.component);
  //   this.activePage=p;
  // }


  a1:any="active";
  a2:any="inactive";
  a3:string="inactive";
  a4:string="inactive";
  a5:string="inactive";
  a6:string="inactive";

  img1:string="../assets/imgs/side/1.png";
  img2:string="../assets/imgs/side/2.png";
  img3:string="../assets/imgs/side/3.png";
  img4:string="../assets/imgs/side/4.png";
  img5:string="../assets/imgs/side/5.png";
  img6:string="../assets/imgs/side/6.png";

  nav1(){
    this.img1="../assets/imgs/side/1.png";
    this.img2="../assets/imgs/side/2.png";
    this.img3="../assets/imgs/side/3.png";
    this.img4="../assets/imgs/side/4.png";
    this.img5="../assets/imgs/side/5.png";
    this.img6="../assets/imgs/side/6.png";
    //console.log("nav1")
    this.a1="active";
    this.a2=this.a3=this.a4=this.a5=this.a6="inactive";
    this.nav.setRoot(this.pages[0].component);
    this.activePage=this.pages[0].component;
  }
  nav2(){
    this.img1="../assets/imgs/side/11.png";
    this.img2="../assets/imgs/side/12.png";
    this.img3="../assets/imgs/side/3.png";
    this.img4="../assets/imgs/side/4.png";
    this.img5="../assets/imgs/side/5.png";
    this.img6="../assets/imgs/side/6.png";
    //console.log("nav2")
    this.a2="active";
    this.a1=this.a3=this.a4=this.a5=this.a6="inactive";
    this.nav.setRoot(this.pages[1].component);
    this.activePage=this.pages[1].component;
  }
  nav3(){
    this.img3="../assets/imgs/side/13.png";
    this.img1="../assets/imgs/side/11.png";
    this.img2="../assets/imgs/side/2.png";
    this.img4="../assets/imgs/side/4.png";
    this.img5="../assets/imgs/side/5.png";
    this.img6="../assets/imgs/side/6.png";
    //console.log("nav3")
    this.a3="active";
    this.a2=this.a1=this.a4=this.a5=this.a6="inactive";
    this.nav.setRoot(this.pages[2].component);
    this.activePage=this.pages[2].component;
  }
  nav4(){
    this.img4="../assets/imgs/side/14.png";
    this.img1="../assets/imgs/side/11.png";
    this.img2="../assets/imgs/side/2.png";
    this.img3="../assets/imgs/side/3.png";
    this.img5="../assets/imgs/side/5.png";
    this.img6="../assets/imgs/side/6.png";
    //console.log("nav4")
    this.a4="active";
    this.a1=this.a3=this.a2=this.a5=this.a6="inactive";
    this.nav.setRoot(this.pages[3].component);
    this.activePage=this.pages[3].component;
  }
  nav5(){
    this.img5="../assets/imgs/side/15.png";
    this.img1="../assets/imgs/side/11.png";
    this.img2="../assets/imgs/side/2.png";
    this.img3="../assets/imgs/side/3.png";
    this.img4="../assets/imgs/side/4.png";
    this.img6="../assets/imgs/side/6.png";
    //console.log("nav5")
    this.a5="active";
    this.a2=this.a3=this.a4=this.a1=this.a6="inactive";
    this.nav.setRoot(this.pages[4].component);
    this.activePage=this.pages[4].component;
  }
  nav6(){
    this.img6="../assets/imgs/side/16.png";
    this.img1="../assets/imgs/side/11.png";
    this.img2="../assets/imgs/side/2.png";
    this.img3="../assets/imgs/side/3.png";
    this.img4="../assets/imgs/side/4.png";
    this.img5="../assets/imgs/side/5.png";
    //console.log("nav6")
    this.a6="active";
    this.a1=this.a3=this.a4=this.a5=this.a2="inactive";
    this.nav.setRoot(this.pages[5].component);
    this.activePage=this.pages[5].component;
  }
  

}
