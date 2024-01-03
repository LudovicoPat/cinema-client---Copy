import { Component, OnInit } from '@angular/core';
import { FilmsService, Proiezione, Film, Sala } from '../services/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-elenco-proiezioni',
  templateUrl: './elenco-proiezioni.component.html',
  styleUrls: ['./elenco-proiezioni.component.css']
})
export class ElencoProiezioniComponent implements OnInit {
  proiezioni: Proiezione[] = [];
  
  title = 'cinema-client';

  filmDetails: { [key: number]: Film } = {};
  salaDetails: { [key: number]: Sala } = {};

  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProiezioni();
  }

  loadProiezioni(): void {
    this.filmsService.getProiezioniList().subscribe((proiezioni) => {
      this.proiezioni = proiezioni;

      proiezioni.forEach((proiezione) => {
        this.loadFilmDetails(proiezione.filmId);
        this.loadSalaDetails(proiezione.salaId);
      });
    });
  }

  loadFilmDetails(filmId: number): void {
    this.filmsService.getFilm(filmId).subscribe((film) => {
      this.filmDetails[filmId] = film;
    });
  }

  loadSalaDetails(salaId: number): void {
    this.filmsService.getSala(salaId).subscribe((sala) => {
      this.salaDetails[salaId] = sala;
    });
  }

  toggleAddProiezioneForm() {
    this.router.navigateByUrl('/agg-proiezione');
  }

  updateProiezione(proiezione: Proiezione): void {
    this.router.navigate(['/agg-proiezione', {id: proiezione.id} ]);
  }
   
 
   deleteProiezione(id: number): void {
     this.filmsService.deleteProiezione(id).subscribe(() => {
       this.proiezioni = this.proiezioni.filter((proiezione) => proiezione.id !== id);
     });
   }

}
