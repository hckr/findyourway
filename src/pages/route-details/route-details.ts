import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { CurrentRoutePage } from '../current-route/current-route'

@Component({
    selector: 'page-route-details',
    templateUrl: 'route-details.html',
})
export class RouteDetailsPage {

    selectedRoute: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public loadCtrl: LoadingController)
    {
        this.selectedRoute = navParams.get('route');
    }

    takeRouteAgain() {
        let loader = this.loadCtrl.create({
            content: 'Finding the best route...'
        });
        loader.present();
        setTimeout(() => {
            localStorage.currentRoute = JSON.stringify(this.selectedRoute);
            const index = this.navCtrl.getActive().index;
            this.navCtrl.push(CurrentRoutePage).then(() => {
                this.navCtrl.remove(index);
            });
            loader.dismiss();
        }, 3000);
    }

}
