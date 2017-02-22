import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CommentPage } from '../../pages/comment/comment';

@Component({
  selector: 'page-playground',
  templateUrl: 'playground.html'
})
export class PlaygroundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

  }

  addComment() {
    this.navCtrl.push(CommentPage);
  }
}
