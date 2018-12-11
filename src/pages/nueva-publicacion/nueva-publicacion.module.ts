import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaPublicacionPage } from './nueva-publicacion';

@NgModule({
  declarations: [
    NuevaPublicacionPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaPublicacionPage),
  ],
})
export class NuevaPublicacionPageModule {}
