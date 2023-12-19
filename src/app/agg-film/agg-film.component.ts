import { Component, OnInit } from '@angular/core';
import { Film, FilmsService } from '../services/cinema.service';

@Component({
  selector: 'app-agg-film',
  templateUrl: './agg-film.component.html',
  styleUrls: ['./agg-film.component.css'],
})
export class AggFilmComponent implements OnInit {
  films: Film[] = [];
  newFilm: Film = { id: 0, titolo: '', genere: '', durataMinuti: 0 };

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmsService.getFilmList().subscribe((films) => {
      this.films = films;
    });
  }

  addFilm(): void {
    if (this.newFilm.titolo && this.newFilm.genere && this.newFilm.durataMinuti > 0) {
      this.filmsService.addFilm(this.newFilm).subscribe((addedFilm) => {
        this.films.push(addedFilm);
        this.resetNewFilm();
      });
    } else {
      alert('Compila tutti i campi prima di aggiungere un film.');
    }
  }

  resetNewFilm(): void {
    this.newFilm = { id: 0, titolo: '', genere: '', durataMinuti: 0 };
  }
}
