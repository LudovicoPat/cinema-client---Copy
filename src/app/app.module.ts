import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AggFilmComponent } from './agg-film/agg-film.component';
import { FormsModule } from '@angular/forms';
import { ElencoFilmComponent } from './elenco-film/elenco-film.component';
import { CommonModule } from '@angular/common';
import { ElencoSaleComponent } from './elenco-sale/elenco-sale.component';
import { ElencoProiezioniComponent } from './proiezione/elenco-proiezioni.component';
import { AggProiezioneComponent } from './proiezione/agg-proiezione.component';
import { ElencoPrenotazioniComponent } from './prenotazione/elenco-prenotazioni.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: 'elenco-film', component: ElencoFilmComponent },
  { path: 'agg-film', component: AggFilmComponent },
  { path: 'modifica-film/:id', component: AggFilmComponent },
  { path: 'elenco-sale', component: ElencoSaleComponent },
  { path: 'elenco-proiezioni', component: ElencoProiezioniComponent },
  { path: 'agg-proiezione', component: AggProiezioneComponent },
  { path: 'elenco-prenotazioni', component: ElencoPrenotazioniComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],
  exports: [RouterModule],
  declarations: [
    ElencoFilmComponent,
    AggFilmComponent,
    ElencoSaleComponent,
    ElencoProiezioniComponent,
    AggProiezioneComponent,
    ElencoPrenotazioniComponent,
    LoginComponent
  ]
})
export class AppRoutingModule {}
