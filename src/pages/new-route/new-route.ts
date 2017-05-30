import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewRouteDurationsPage } from '../new-route-durations/new-route-durations'

@Component({
    selector: 'page-new-route',
    templateUrl: 'new-route.html',
})
export class NewRoutePage {

    name = '';
    places = [];
    transport: any;

    transportTypes = [ 'car', 'public transport', 'on foot', 'bike' ]

    ordinals = [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
        'Sixth',
        'Seventh',
        'Eighth',
        'Ninth'
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 1; i < 10; ++i) {
            this.places.push({
                name: `Place ${i}`,
                address: `${this.ordinals[i-1]} Street ${i} New York`
            })
        }
    }

    placeCheckboxToggle(place) {
        place.selected = !place.selected;
    }

    nextStep(place) {
        console.log(this.transport);
        this.navCtrl.push(NewRouteDurationsPage, {
            name: this.name,
            transport: this.transport,
            places: this.places.filter(p => p.selected)
        });
    }

}
