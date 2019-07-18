import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular/platform/platform';
import { CameraOptions, Camera } from '@ionic-native/camera';
declare var window:any;
/*
  Generated class for the ImghandlerProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImghandlerProvider {
  imgfile:any;
  imageurl;
  mySelectedPhoto;
  imagecheck;
  constructor (public platform:Platform
    ,public camera:Camera){}
  firestore = firebase.storage();
  public galleryOptions: CameraOptions = {
    quality:95,
    allowEdit: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    encodingType:this.camera.EncodingType.JPEG,
    targetWidth: 720,
    targetHeight: 720,
    correctOrientation: true
  }

  picmsgstore(){

  }



}
