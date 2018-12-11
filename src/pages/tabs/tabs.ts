import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AreasPage } from '../areas/areas';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { HabilidadesPage } from '../habilidades/habilidades';
import { InicioPage } from '../inicio/inicio';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = AreasPage;
  tab5Root = PublicacionesPage;
  tab6Root = HabilidadesPage;
  tab7Root = InicioPage;
  tab8Root = PerfilPage;

  constructor() {

  }
}
