import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApartadoComponent } from './apartado/apartado.component';
import { ApartarNuevoComponent } from './apartar-nuevo/apartar-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ApartadoComponent,
    ApartarNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
