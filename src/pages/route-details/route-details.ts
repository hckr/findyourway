import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CurrentRoutePage } from '../current-route/current-route'

@Component({
    selector: 'page-route-details',
    templateUrl: 'route-details.html',
})
export class RouteDetailsPage {

    selectedRoute: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedRoute = navParams.get('route');
        console.log(this.selectedRoute);
    }

    takeRouteAgain() {
        localStorage.currentRoute = JSON.stringify(this.selectedRoute);
        const index = this.navCtrl.getActive().index;
        this.navCtrl.push(CurrentRoutePage).then(() => {
            this.navCtrl.remove(index);
        });
    }

}
