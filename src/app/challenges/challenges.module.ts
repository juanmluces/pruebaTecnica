import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlCssPage } from './pages/html-css/html-css.page';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from '@angular/router';
import { ChallengeHeaderComponent } from './components/challenge-header/challenge-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { AngularMaterialPage } from './pages/angular-material/angular-material.page';
import { ApiRestPage } from './pages/api-rest/api-rest.page';
import { FormsPage } from './pages/forms/forms.page';
import { CreateComponentsPage } from './pages/create-components/create-components.page';
import { AppLogicPage } from './pages/app-logic/app-logic.page';



@NgModule({
  declarations: [HtmlCssPage, ChallengeHeaderComponent, AngularMaterialPage, ApiRestPage, FormsPage, CreateComponentsPage, AppLogicPage],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatMenuModule,
  ],
  exports: [ChallengeHeaderComponent]
})
export class ChallengesModule { }
