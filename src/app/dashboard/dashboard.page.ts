import { Component } from '@angular/core';

interface ChallengeModule {
  logo: string;
  route: string;
  title: string;
  descriptionHTML: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage {

  challengeModules: Array<ChallengeModule> = [
    {
      logo: 'assets/images/html.png',
      route: 'html-css',
      title: 'Maquetación HTML y CSS',
      descriptionHTML: 'Maquetación básica con HTML y CSS <strong>(sin componentes Angular Material)</strong>'
    },
    {
      logo: 'assets/images/material.png',
      route: 'angular-material',
      title: 'Maquetación Angular Material',
      descriptionHTML: 'Maquetación <strong>con componentes Angular Material</strong>'
    },
    {
      logo: 'assets/images/http.png',
      route: 'api-rest',
      title: 'Consumo Api Rest',
      descriptionHTML: 'Consumir una api rest, filtrar y renderizar los resultados'
    },
    {
      logo: 'assets/images/forms.png',
      route: 'forms',
      title: 'Formularios',
      descriptionHTML: 'Creación y validación de formularios'
    },
    {
      logo: 'assets/images/cdk.png',
      route: 'components',
      title: 'Componentes',
      descriptionHTML: 'Crear componentes y transferir datos entre ellos'
    },
    {
      logo: 'assets/images/compiler.png',
      route: 'logic',
      title: 'Logic',
      descriptionHTML: 'Crear una pequeña <strong>app de To-Do</strong>'
    }
  ]

}
