import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/layout/header/header.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { SobreComponent } from './components/sobre/sobre.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    HabilidadesComponent,
    ProgressBarComponent,
    CurriculoComponent,
    PortfolioComponent,
    CarrosselComponent,
    PoliticaComponent,
    ContatoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
