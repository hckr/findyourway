import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { getPlaces } from '../../providers/places'

@Component({
    selector: 'page-new-place',
    templateUrl: 'new-place.html',
})
export class NewPlacePage {

    query = '';
    places = [];
    filteredPlaces = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.places = getPlaces(99);
        this.filterPlaces();
    }

    filterPlaces() {
        this.filteredPlaces = this.places.filter(place => {
            let parts = this.query.split(' ');
            return this.containsAllParts(place.name, parts) ||
                   this.containsAllParts(place.address, parts);
        });
    }

    containsAllParts(str, parts) {
        for (let part of parts) {
            let lcPart = part.toLowerCase();
            if (str.toLowerCase().indexOf(lcPart) == -1)
                return false;
        }
        return true;
    }

    placeSelected() {
        this.navCtrl.pop();
    }
}
