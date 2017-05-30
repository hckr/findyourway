import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewRoutePage } from '../new-route/new-route'
import { RouteDetailsPage } from '../route-details/route-details'
import { CurrentRoutePage } from '../current-route/current-route'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    transportTypes = [ 'car', 'public transport', 'on foot', 'bike' ]
    routes = [];
    currentRoute = null;

    ionViewWillEnter() {
        this.updateCurrentRoute();
    }

    constructor(public navCtrl: NavController) {
        this.updateCurrentRoute();

        for (let i = 1; i < 10; ++i) {
            this.routes.push({
                name: `Route ${i}`,
                transport: this.randomTransport(),
                places: [
                    { name: 'Place 1', address: 'First Street 1 New York', duration: '1 h 23 m' },
                    { name: 'Place 2', address: 'Second Street 2 New York', duration: '32 m' },
                    { name: 'Place 3', address: 'Third Street 3 New York', duration: '2 h 13 m' }
                ]
            })
        }
    }

    randomTransport() {
        return this.transportTypes[
            Math.floor(Math.random() * this.transportTypes.length)];
    }

    newRouteButtonClicked() {
        this.navCtrl.push(NewRoutePage);
    }

    routeClicked(route) {
        this.navCtrl.push(RouteDetailsPage, {
            route: route
        })
    }

    currentRouteClicked() {
        this.navCtrl.push(CurrentRoutePage);
    }

    updateCurrentRoute() {
        this.currentRoute = null;
        try {
            this.currentRoute = JSON.parse(localStorage.currentRoute);
        } catch (e) {}
    }
}
