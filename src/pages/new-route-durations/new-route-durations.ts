import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CurrentRoutePage } from '../current-route/current-route'

@Component({
    selector: 'page-new-route-durations',
    templateUrl: 'new-route-durations.html',
})
export class NewRouteDurationsPage {

    name: any;
    transport: any;
    places: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.name = navParams.get('name');
        this.transport = navParams.get('transport');
        this.places = navParams.get('places');
    }

    placeDurationChange(place) {
        let hours = Math.floor(place.duration_min / 60),
            minutes = place.duration_min % 60;
        place.duration = `${hours > 0 ? (hours + ' h ') : ''}${minutes} m`;
    }

    takeRoute() {
        localStorage.currentRoute = JSON.stringify({
            name: this.name,
            transport: this.transport,
            places: this.places
        });
        this.navCtrl.push(CurrentRoutePage);
    }

}
