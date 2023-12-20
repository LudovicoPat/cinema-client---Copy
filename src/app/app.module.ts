import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AggFilmComponent } from './agg-film/agg-film.component';
<<<<<<< Updated upstream


export const routes: Routes = [
  { path: '', component: AppComponent },
=======
import { FormsModule } from '@angular/forms';
import { ElencoFilmComponent } from './elenco-film/elenco-film.component';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
  { path: 'elenco-film', component: ElencoFilmComponent },
>>>>>>> Stashed changes
  { path: 'agg-film', component: AggFilmComponent },
  { path: 'modifica-film/:id', component: AggFilmComponent },
];

@NgModule({
<<<<<<< Updated upstream
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
=======
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],//CommonModule qui risolve il problema di utilizzo di ngForOf
  exports: [RouterModule],
  declarations: [
    ElencoFilmComponent,
    AggFilmComponent
  ]
>>>>>>> Stashed changes
})
export class AppRoutingModule {}
