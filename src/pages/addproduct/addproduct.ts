import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import $ from 'jquery';
import firebase from 'firebase';
import { AddproductsPage } from '../addproducts/addproducts';


/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {
  uuid='';
  address:string;
  name:string;
  price:number;
  desc:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase, private auth:AngularFireAuth, public toast : ToastController,
     private camera:Camera,
     public load : LoadingController,
      public af:AuthProvider,
      ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfodPage');
    var navh = $(".header").innerHeight();
    console.log(navh);
    
  }
  imageurl = "";
  imagecheck= false;

  mySelectedPhoto;
  loading;
  currentPhoto ;
  imgSource;

  async addfod(){
    if(this.imageurl.length < 1){
      this.imageurl = 'https://corporate.oriflame.com/Global/Images%20achive/Products/Bioclinic_hr.jpg';
    }
    const product = await this.db.list(`products/${this.navParams.data}`).push({
      name: this.name,
      description: this.desc,
      image: this.imageurl,
      price: this.price
    }).then((data)=>{    
      console.log(data.key);
       this.db.list(`adminproducts`).push({
        name: this.name,
        description: this.desc,
        image: this.imageurl,
        price: this.price,
        category:this.navParams.data,
        key:data.key
      });  
    });
    var toast = this.toast.create({
      message: "تم نشر ",
      duration: 3000,
      cssClass: "setdire"
    }).present();
    this.navCtrl.popToRoot();
    this.navCtrl.setRoot(AddproductsPage);
  }
  takePhoto(){
    const options: CameraOptions = {
      targetHeight:720 ,
      targetWidth:720,
      quality:100, 
      destinationType : this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) =>{
      this.loading = this.load.create({
        content: "جاري اضافة الصورة ",
        cssClass:"setdire"
         });
  this.loading.present();
    this.mySelectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,'+imageData);
        this.upload();
            
            },(err)=>{
        alert(JSON.stringify(err));
            });
    
    
    }
    
        
        
    dataURLtoBlob(myURL){
        let binary = atob(myURL.split(',')[1]);
    let array = [];
    for (let i = 0 ; i < binary.length;i++){
        array.push(binary.charCodeAt(i));
    }
        return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
    }    
        
        
    upload(){

      
    var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"];
    var rand1 = Math.floor(Math.random() * char.length);
    var rand2 = Math.floor(Math.random() * char.length);
    var rand3 = Math.floor(Math.random() * char.length);
    var rand4 = Math.floor(Math.random() * char.length);
    var rand = char[rand1] + char[rand2] + char[rand3] + char[rand4];

    if(this.mySelectedPhoto){
        var uploadTask = firebase.storage().ref().child('images/'+rand+".jpg");
        var put = uploadTask.put(this.mySelectedPhoto);
        put.then( ()=> {
          this.loading.dismiss();

          uploadTask.getDownloadURL().then(url =>{
            
            this.imagecheck = true;
            this.imageurl = url;
  
          });

        });

        put.catch(err =>{
          this.loading.dismiss();

          alert(JSON.stringify(err));
        })
  

    }
    }

}
