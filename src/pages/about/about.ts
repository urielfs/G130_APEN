import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  //template: '<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      
      //this.pushPage = LoginPage;
      //this.params = { id: 42 };
      

  }
  goToOtherPage() {
    this.navCtrl.push(ContactPage);
  }

}
