import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.page.html',
  styleUrl: './angular-material.page.scss'
})
export class AngularMaterialPage {

  dashboardElements = [
    {
      id: 1,
      label: 'Inicio',
      description: 'Vuelve a la página principal del sitio web',
      imageUrl: 'assets/images/logo-credoffice.png',
      icon: 'home',
      route: '/inicio'
    },
    {
      id: 2,
      label: 'Tablero',
      description: 'Ve y gestiona los datos de tu tablero',
      imageUrl: 'assets/images/logo-credoffice.png',
      icon: 'grid_view',
      route: '/tablero'
    },
    {
      id: 3,
      label: 'Comentarios',
      description: 'Explora y gestiona los comentarios de los usuarios en el sitio web',
      imageUrl: 'assets/images/logo-credoffice.png',
      icon: 'chat',
      route: '/comentarios'
    },
    {
      id: 4,
      label: 'Publicaciones',
      description: 'Navega y edita diversas publicaciones en el sitio web',
      imageUrl: 'assets/images/logo-credoffice.png',
      icon: 'post_add',
      route: '/publicaciones'
    },
    {
      id: 5,
      label: 'Perfil',
      description: 'Accede y actualiza la información de tu perfil de usuario',
      imageUrl: 'assets/images/logo-credoffice.png',
      icon: 'person',
      route: '/perfil'
    }
  ];
}
