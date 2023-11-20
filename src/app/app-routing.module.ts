import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { HtmlCssPage } from './challenges/pages/html-css/html-css.page';
import { AngularMaterialPage } from './challenges/pages/angular-material/angular-material.page';
import { ApiRestPage } from './challenges/pages/api-rest/api-rest.page';
import { FormsPage } from './challenges/pages/forms/forms.page';
import { CreateComponentsPage } from './challenges/pages/create-components/create-components.page';
import { AppLogicPage } from './challenges/pages/app-logic/app-logic.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'html-css',
    component: HtmlCssPage
  },
  {
    path: 'angular-material',
    component: AngularMaterialPage
  },
  {
    path: 'api-rest',
    component: ApiRestPage
  },
  {
    path: 'forms',
    component: FormsPage
  },
  {
    path: 'components',
    component: CreateComponentsPage
  },
  {
    path: 'logic',
    component: AppLogicPage
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
