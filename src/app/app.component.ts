import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Film, FilmsService } from './services/cinema.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule], // Aggiunta di FormsModule qui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  films: Film[] = [];
  newFilm: Film = { id: 0, titolo: '', genere: '', durataMinuti: 0 };
  selectedFilm: Film | null = null;
  showFilmList: boolean = false;
  showAddFilmForm: boolean = false;
  showSelectedFilm: boolean = false;
  
  constructor(private filmsService: FilmsService, private router: Router) {}

  toggleFilmList() {
    this.router.navigateByUrl('/elenco-film');
  }

  toggleAddFilmForm() {
    this.router.navigateByUrl('/agg-film');
  }

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmsService.getFilmList().subscribe((films) => {
      this.films = films;
    });
  }
<<<<<<< Updated upstream
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
  
=======

  // addFilm(): void {
  //   if (this.newFilm.titolo && this.newFilm.genere && this.newFilm.durataMinuti > 0) {
  //     this.filmsService.addFilm(this.newFilm).subscribe((addedFilm) => {
  //       this.films.push(addedFilm);
  //       this.resetNewFilm();
  //       this.showAddFilmForm = false;
  //       this.showFilmList = true;
  //     });
  //   } else {
  //     alert('Compila tutti i campi prima di aggiungere un film.');
  //   }
  // }

>>>>>>> Stashed changes
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

  title = 'cinema-client';
}