import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublicacionesPage } from '../publicaciones/publicaciones';

/**
 * Generated class for the AreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-areas',
  templateUrl: 'areas.html',
})
export class AreasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasPage');
  }

  publicacionesPage() {
    this.navCtrl.push(PublicacionesPage);
  }

}
