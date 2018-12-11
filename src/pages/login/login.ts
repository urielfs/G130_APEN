import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Usuario } from "../../Models/usuario";
import { AreasPage } from '../areas/areas';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Nombre: string;
  Clave: string;
  url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public paramsHome: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Ingresar(){      
    this.url = "http://localhost:3000/api/users/" + this.Nombre + "/" + this.Clave;

    this.http.get<Usuario> (this.url).subscribe(
      data => {
        if(data == null)
        {
          if(confirm("Usuario no registrado. Desea continuar?"))
          {
            this.navCtrl.push(AreasPage);
          }
        }
        else
        {
          //this.paramsHome = {IsLogin: true};
          this.navCtrl.setRoot(HomePage, this.paramsHome);
        }
        alert(this.url);        
        alert(data.Id);        
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          alert('Error al consumir el servicio: ' + err.message);
        }
        else{
          alert('Error local: ' + err.message);
        }          
      })
  }

}
