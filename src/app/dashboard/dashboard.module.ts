import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.page';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule  } from "@angular/material/list";
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatListModule, RouterLink],
})
export class DashboardModule { }
