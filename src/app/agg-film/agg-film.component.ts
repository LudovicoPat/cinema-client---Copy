import { Component, OnInit } from '@angular/core';
import { Film, FilmsService } from '../services/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-agg-film',
  templateUrl: './agg-film.component.html',
  styleUrls: ['./agg-film.component.css'],
})
export class AggFilmComponent implements OnInit {
  films: Film[] = [];
  newFilm: Film = { id: 0, titolo: '', genere: '', durataMinuti: 0 };

  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: string }) => {
      const filmId = +params['id'];
      if (filmId) {
        this.loadFilmDetails(filmId);
      }
    });
  }
  


  loadFilmDetails(id: number): void {
    this.filmsService.getFilm(id).subscribe((film) => {
      this.newFilm = film;
    });
  }

  isNewFilm(): boolean {
    return this.newFilm.id === 0;
  }
  
  saveFilm(): void {
    if (this.isNewFilm()) {
      this.addFilm();
    } else {
      this.updateFilm();
    }
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

  updateFilm(): void {
    if (this.newFilm.titolo && this.newFilm.genere && this.newFilm.durataMinuti > 0) {
      this.filmsService.updateFilm(this.newFilm).subscribe((updatedFilm) => {
        // Aggiorna il film nella lista se necessario
        const index = this.films.findIndex((f) => f.id === updatedFilm.id);
        if (index !== -1) {
          this.films[index] = updatedFilm;
        }
        this.resetNewFilm();
        this.router.navigateByUrl('/elenco-film');
      });
    } else {
      alert('Compila tutti i campi prima di aggiornare il film.');
    }
  }


  resetNewFilm(): void {
    this.newFilm = { id: 0, titolo: '', genere: '', durataMinuti: 0 };
  }
}
