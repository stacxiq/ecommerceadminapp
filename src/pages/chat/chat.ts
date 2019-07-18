import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, Content, Events, LoadingController, Platform, ToastController, AlertController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import firebase from 'firebase';
import { RequestProvider } from '../../providers/request/request';
import { AdduserProvider } from '../../providers/adduser/adduser';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild('content') content: Content;
  buddy: any;
  newmessage;
  key: any;
  allmessages = [];
  res = [];
  ses=[];
  photoURL;
  imgornot;
  imgfile:any;
  imageurl;
  mySelectedPhoto;
  imagecheck;
  show = false;
  constructor( public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider,
    public events: Events, public zone: NgZone, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public userP: AdduserProvider,
    public keys:RequestProvider,
    public camera:Camera
    ) {
    if (this.platform.ready) {
      this.buddy = this.chatservice.friend;
      this.photoURL = firebase.auth().currentUser.photoURL;
      this.scrollto();
      this.events.subscribe('newmessage', () => {
        this.allmessages = [];
        this.imgornot = [];
        this.zone.run(() => {
          this.allmessages = this.chatservice.friendmessages;
          for (var key in this.allmessages) {
            if (this.allmessages[key].message.substring(0, 4) == 'http')
              this.imgornot.push(true);
            else
              this.imgornot.push(false);
          }
        })


      })
    }
  }

  addmessage() {
    //this.newmessage
    this.chatservice.addnewmessage(this.newmessage).then(() => {
      this.content.scrollToBottom();
      this.newmessage = '';
    })
  }

  ionViewDidEnter() {
    this.chatservice.getfriendmessages();
  }

  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
  }

//   sendPicMsg() {
//     const options: CameraOptions = {
//       targetHeight:720 ,
//       targetWidth:720,
//       quality:100,
//       destinationType : this.camera.DestinationType.DATA_URL,
//       encodingType:this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE,
//       sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
//     }
//     this.camera.getPicture(options).then((imageData) =>{
//     this.mySelectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,'+imageData);
//         this.upload();

//             },(err)=>{
//         alert(JSON.stringify(err));
//             }).then(()=>{

//     });


//   }
//   dataURLtoBlob(myURL){
//     let binary = atob(myURL.split(',')[1]);
// let array = [];
// for (let i = 0 ; i < binary.length;i++){
//     array.push(binary.charCodeAt(i));
// }
//     return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
// }


// upload(){


// var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"];
// var rand1 = Math.floor(Math.random() * char.length);
// var rand2 = Math.floor(Math.random() * char.length);
// var rand3 = Math.floor(Math.random() * char.length);
// var rand4 = Math.floor(Math.random() * char.length);
// var rand = char[rand1] + char[rand2] + char[rand3] + char[rand4];

// if(this.mySelectedPhoto){
//     var uploadTask = firebase.storage().ref().child('images/'+rand+".jpg");
//     var put = uploadTask.put(this.mySelectedPhoto);
//     put.then( ()=> {

//       uploadTask.getDownloadURL().then(url =>{

//         this.imagecheck = true;
//         this.imageurl = url;
//         this.chatservice.addnewmessage(url).then(() => {
//           this.scrollto();
//           this.newmessage = '';
//         }).catch((err) => {
//         alert(err);
//       })

//       });

//     });

//     put.catch(err =>{

//       alert(JSON.stringify(err));
//     })
// }
// }


  ionViewDidLoad() {

  }

}
