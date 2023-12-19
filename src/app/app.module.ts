import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggFilmComponent } from './agg-film/agg-film.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
  { path: 'agg-film', component: AggFilmComponent },
  { path: 'modifica-film/:id', component: AggFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  declarations: [
    AggFilmComponent
  ]
})
export class AppRoutingModule {}
