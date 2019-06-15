import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
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
import { PaiddetailPage } from '../pages/paiddetail/paiddetail';
import { AdminproductsPage } from '../pages/adminproducts/adminproducts';
import { RequestProvider } from '../providers/request/request';
import { ChatPage } from '../pages/chat/chat';
import { FriendsPage } from '../pages/friends/friends';
import { ChatProvider } from '../providers/chat/chat';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { AdduserProvider } from '../providers/adduser/adduser';
@NgModule({
  declarations: [
    MyApp,
    AddproductPage,
    AddproductsPage,
    ManageProductsPage,
    PaidPage,
    ProductsPage,
    LoginPage,
    PaiddetailPage,
    AdminproductsPage,
    ChatPage,
    FriendsPage
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
    AddproductPage,
    AddproductsPage,
    ManageProductsPage,
    PaidPage,
    ProductsPage,
    LoginPage,
    PaiddetailPage,
    AdminproductsPage,
    ChatPage,
    FriendsPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider,
    ChatProvider,
    ImghandlerProvider,
    AdduserProvider,
  ]
})
export class AppModule {}
