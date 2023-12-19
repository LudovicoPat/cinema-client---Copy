import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Film, FilmsService } from './services/cinema.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],// Aggiungere RouterLink e RouterLinkActive se si vuole utilizzare "<a routerLink..."
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //#region INIZIALIZZAZIONE VARIABILI/PROPRIETà DEL COMPONENTE

  films: Film[] = [];
  newFilm: Film = { id: 0, titolo: '', genere: '', durataMinuti: 0 };
  selectedFilm: Film | null = null;
  showFilmList: boolean = false;
  showAddFilmForm: boolean = false;
  showSelectedFilm: boolean = false;

  title = 'cinema-client';

  //#endregion

  //#region COSTRUTTORE E ngOnInit SE PRESENTE

  constructor(private filmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
    this.loadFilms();
  }

  //#endregion

  //#region LOGICA APPLICATIVA

  toggleFilmList() {
    this.showFilmList = !this.showFilmList;
  }

  toggleAddFilmForm() {
    this.router.navigateByUrl('/agg-film');
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
        this.showAddFilmForm = false;
        this.showFilmList = true;
      });
    } else {
      alert('Compila tutti i campi prima di aggiungere un film.');
    }
  }

  updateFilm(film: Film): void {
    this.selectedFilm = film;
    this.showSelectedFilm = true;
    this.showFilmList = false;
    this.showAddFilmForm = false;
  }

  saveUpdatedFilm(): void {
    if (this.selectedFilm) {
      this.filmsService.updateFilm(this.selectedFilm).subscribe((updatedFilm) => {
        const index = this.films.findIndex((f) => f.id === updatedFilm.id);
        if (index !== -1) {
          this.films[index] = updatedFilm;
          this.selectedFilm = null;
          this.showAddFilmForm = false;
        }
      });
    }
    this.showFilmList = true;
    this.showSelectedFilm = false;
  }

  deleteFilm(id: number): void {
    this.filmsService.deleteFilm(id).subscribe(() => {
      this.films = this.films.filter((film) => film.id !== id);
    });
  }

  resetNewFilm(): void {
    this.newFilm = { id: 0, titolo: '', genere: '', durataMinuti: 0 };
  }

  //#endregion
}