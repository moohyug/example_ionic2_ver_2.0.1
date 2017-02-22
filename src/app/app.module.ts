import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// pages
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PlaygroundPage } from '../pages/playground/playground';
import { CommentPage } from '../pages/comment/comment';
import { IntroPage } from '../pages/intro/intro';

// providers
import { HttpWithToken } from '../providers/http-with-token';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage, LoginPage, PlaygroundPage, CommentPage, IntroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '뒤로가기',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage, LoginPage, PlaygroundPage, CommentPage, IntroPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpWithToken]
})
export class AppModule {}
