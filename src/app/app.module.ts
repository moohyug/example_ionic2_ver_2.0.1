import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// pages
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PlaygroundPage } from '../pages/playground/playground';
import { CommentPage } from '../pages/comment/comment';

// providers
import { HttpWithToken } from '../providers/http-with-token';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage, LoginPage, PlaygroundPage, CommentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage, LoginPage, PlaygroundPage, CommentPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpWithToken]
})
export class AppModule {}
