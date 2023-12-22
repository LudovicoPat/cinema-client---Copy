import { Component, OnInit } from '@angular/core';
import { Film, FilmsService } from '../services/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elenco-film',
  templateUrl: './elenco-film.component.html',
  styleUrls: ['./elenco-film.component.css'],
})
export class ElencoFilmComponent implements OnInit {
   //#region INIZIALIZZAZIONE VARIABILI/PROPRIETà DEL COMPONENTE

   films: Film[] = [];
   selectedFilm: Film | null = null;
   showFilmList: boolean = false;
   
   filmInModifica: Film | null = null;

   title = 'cinema-client';
 
   //#endregion
 
   //#region COSTRUTTORE E ngOnInit SE PRESENTE
 
   constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) { }
 
   ngOnInit(): void {
    this.loadFilms();
    this.route.params.subscribe((params: { [key: string]: string }) => {
      const filmId = +params['id'];
      if (filmId) {
        this.loadFilmDetails(filmId);
      }
    });
  }
  
 
   //#endregion
 
   //#region LOGICA APPLICATIVA
 
   toggleAddFilmForm() {
     this.router.navigateByUrl('/agg-film');
   }
 
   loadFilmDetails(id: number): void {
    this.filmsService.getFilm(id).subscribe((film) => {
      // Assegna i dati del film da modificare alla nuova variabile
      this.filmInModifica = film;
    });
  }

loadFilms(): void {
  this.filmsService.getFilmList().subscribe(
    (films) => {
      this.films = films;
    },
    (error) => {
      console.error('Errore nel recupero della lista dei film', error);
    }
  );
}
 
  updateFilm(film: Film): void {
    this.router.navigate(['/modifica-film', film.id]);
  }
   
 
   deleteFilm(id: number): void {
     this.filmsService.deleteFilm(id).subscribe(() => {
       this.films = this.films.filter((film) => film.id !== id);
     });
   }
 
   
 
   //#endregion
}
