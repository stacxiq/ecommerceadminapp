import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { AddproductsPage } from '../pages/addproducts/addproducts';
import { ManageProductsPage } from '../pages/manage-products/manage-products';
import { PaidPage } from '../pages/paid/paid';
import { ProductsPage } from '../pages/products/products';
import { firebaseConfig } from './app.firebase';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { ProductmgmProvider } from '../providers/productmgm/productmgm';
import { PaiddetailPage } from '../pages/paiddetail/paiddetail';
import { AdminproductsPage } from '../pages/adminproducts/adminproducts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddproductPage,
    AddproductsPage,
    ManageProductsPage,
    PaidPage,
    ProductsPage,
    LoginPage,
    PaiddetailPage,
    AdminproductsPage
  ],
  imports: [

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddproductPage,
    AddproductsPage,
    ManageProductsPage,
    PaidPage,
    ProductsPage,
    LoginPage,
    PaiddetailPage,
    AdminproductsPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductmgmProvider,
  ]
})
export class AppModule {}
 