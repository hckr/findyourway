import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewRoutePage } from '../new-route/new-route'
import { RouteDetailsPage } from '../route-details/route-details'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    routes = [
        {
            name: 'Route 1',
            places: [
                { name: 'Place 1' },
                { name: 'Place 2' },
                { name: 'Place 3' },
                { name: 'Place 4' },
                { name: 'Place 5' }
            ]
        },
        {
            name: 'Route 2',
            places: [
                { name: 'Place 1' },
                { name: 'Place 2' },
                { name: 'Place 3' },
                { name: 'Place 4' },
                { name: 'Place 5' }
            ]
        }
    ];

    constructor(public navCtrl: NavController) {
        for (let i = 0; i < 100; ++i) {
            this.routes.push({
                name: 'Route xx',
                places: [
                    { name: 'Place 1x' },
                    { name: 'Place 2x' },
                    { name: 'Place 3x' }
                ]
            })
        }
    }

    newRouteButtonClicked() {
        this.navCtrl.push(NewRoutePage);
    }

    routeClicked(route) {
        this.navCtrl.push(RouteDetailsPage, {
            route: route
        })
    }

}
