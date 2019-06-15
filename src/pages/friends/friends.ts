import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RequestProvider } from '../../providers/request/request';
import firebase from 'firebase';
import { ChatProvider } from '../../providers/chat/chat';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  myrequests;
  myfriends;
  firereq = firebase.database().ref('/requests');
  constructor(  public navCtrl: NavController, public navParams: NavParams, public requestservice: RequestProvider,
    public events: Events,
    public alertCtrl: AlertController,
    public platform: Platform,
    public afireauth: AngularFireAuth,
    private chatservice:ChatProvider) {
  }

  ionViewDidLoad() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.myfriends = [];
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends;
    });
    }
  ionViewWillEnter() {

  }

  ionViewDidLeave() {
    this.events.unsubscribe('gotrequests');
    this.events.unsubscribe('friends');
  }
  accept(item) {
    this.requestservice.acceptrequest(item).then(() => {
      let newalert = this.alertCtrl.create({
        title: 'Friend added',
        subTitle: `Tap on the friend to chat with him`,
        buttons: ['Okay']
      });
      newalert.present();
    }).then(()=>{
    })
  }

  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {

    }).catch((err) => {
      alert(err);
    })
  }
  friendchat(myfriends) {
    this.chatservice.initializefriend(myfriends);
    this.navCtrl.push(ChatPage);

  }

}
