import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-current-route',
    templateUrl: 'current-route.html',
})
export class CurrentRoutePage {

    currentRoute = null;

    ionViewWillEnter() {
        this.updateCurrentRoute();
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.updateCurrentRoute();
    }

    updateCurrentRoute() {
        this.currentRoute = null;
        try {
            this.currentRoute = JSON.parse(localStorage.currentRoute);
        } catch (e) {}
    }

    finishCurrentRoute() {
        delete localStorage.currentRoute;
        this.navCtrl.popToRoot();
    }

}
