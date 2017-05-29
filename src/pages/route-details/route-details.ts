import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

}
