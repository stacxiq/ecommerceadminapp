import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { AddproductsPage } from '../pages/addproducts/addproducts';
import { ManageProductsPage } from '../pages/manage-products/manage-products';
import { PaidPage } from '../pages/paid/paid';
import { ProductsPage } from '../pages/products/products';
import { firebaseConfig } from './app.firebase';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { ProductmgmProvider } from '../providers/productmgm/productmgm';


firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddproductPage,
    AddproductsPage,
    ManageProductsPage,
    PaidPage,
    ProductsPage,
    LoginPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddproductPage,
    AddproductsPage,
    ManageProductsPage,
    PaidPage,
    ProductsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductmgmProvider
  ]
})
export class AppModule {}
