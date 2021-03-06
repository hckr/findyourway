import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewRoutePage } from '../pages/new-route/new-route';
import { RouteDetailsPage } from '../pages/route-details/route-details';
import { CurrentRoutePage } from '../pages/current-route/current-route';
import { NewRouteDurationsPage } from '../pages/new-route-durations/new-route-durations';
import { NewPlacePage } from '../pages/new-place/new-place'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewRoutePage,
    RouteDetailsPage,
    CurrentRoutePage,
    NewRouteDurationsPage,
    NewPlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewRoutePage,
    RouteDetailsPage,
    CurrentRoutePage,
    NewRouteDurationsPage,
    NewPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
