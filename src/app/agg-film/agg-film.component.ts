import { Component, OnInit } from '@angular/core';
import { Film, FilmsService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agg-film',
  templateUrl: './agg-film.component.html',
  styleUrls: ['./agg-film.component.css'],
})
export class AggFilmComponent implements OnInit {
  films: Film[] = [];
  newFilm: Film = { id: 0, titolo: '', genere: '', durataMinuti: 0 };

  constructor(private filmsService: FilmsService, private router: Router) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmsService.getFilmList().subscribe((films) => {
      this.films = films;
    });
  }

  loadFilmDetails(id: number): void {
    this.filmsService.getFilm(id).subscribe((film) => {
      this.newFilm = film;
    });
  }

  addFilm(): void {
    if (this.newFilm.titolo && this.newFilm.genere && this.newFilm.durataMinuti > 0) {
      this.filmsService.addFilm(this.newFilm).subscribe((addedFilm) => {
        this.films.push(addedFilm);
        this.resetNewFilm();
        this.router.navigateByUrl('/elenco-film');
      });
    } else {
      alert('Compila tutti i campi prima di aggiungere un film.');
    }
  }

  resetNewFilm(): void {
    this.newFilm = { id: 0, titolo: '', genere: '', durataMinuti: 0 };
  }
}
