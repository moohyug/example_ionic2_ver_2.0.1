import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { RegisterPage } from '../pages/register/register';
import { PlaygroundPage } from '../pages/playground/playground';
import { IntroPage } from '../pages/intro/intro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage = RegisterPage;
  introPage: any = IntroPage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page){
    this.menuCtrl.close();
    this.nav.setRoot(page);
  }

  logout() {

  }
}
