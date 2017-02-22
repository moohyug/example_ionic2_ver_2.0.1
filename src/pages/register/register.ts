import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

  }

  openLoginPage(event) {
    event.preventDefault();

    this.navCtrl.push(LoginPage);
  }

}
