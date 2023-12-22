import { Component, OnInit } from '@angular/core';
import { FilmsService, Proiezione, Film, Sala } from '../services/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agg-proiezione',
  templateUrl: './agg-proiezione.component.html',
  styleUrls: ['./elenco-proiezioni.component.css'],
})
export class AggProiezioneComponent implements OnInit {

  onChangeFilm(selectedFilm: Film): void {
    console.log(selectedFilm);
    this.newProiezione.film = selectedFilm;
    console.log(this.newProiezione);
  }
  
  onChangeSala(selectedSala: Sala): void {
    console.log(selectedSala);
    this.newProiezione.sala = selectedSala;
    console.log(this.newProiezione);
  }
  


  proiezioni: Proiezione[] = [];
  newProiezione: Proiezione;
  films: Film[] = [];
  sale: Sala[] = [];

  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.resetNewProiezione();
    
    this.filmsService.getFilmList().subscribe((films) => {
      console.log(films);
      this.films = films;
      this.films.forEach((f) => {console.log(f)});
    });
  
    this.filmsService.getSaleList().subscribe((sale) => {
      console.log(sale);
      this.sale = sale;
    });
  }

  loadProiezioneDetails(id: number): void {
    this.filmsService.getProiezione(id).subscribe({
      next: (proiezione) => {
        this.newProiezione = proiezione;
      },
      error: (error) => {
        console.error('Errore durante il recupero della proiezione:', error);
      }
    });
  }

  isNewProiezione(): boolean {
    return this.newProiezione.id === 0;
  }

  saveProiezione(): void {
    if (this.isNewProiezione()) {
      this.addProiezione();
      console.log(this.newProiezione);
    } else {
      this.updateProiezione();
    }
  }

  addProiezione(): void {
    if (this.newProiezione.film && this.newProiezione.sala && this.newProiezione.orario) {
      this.filmsService.addProiezione(this.newProiezione).subscribe({
        next: (addedProiezione) => {
          this.proiezioni.push(addedProiezione);
          this.resetNewProiezione();
          this.router.navigateByUrl('/elenco-proiezioni');
        },
        error: (error) => {
          alert('Errore durante l\'aggiunta della proiezione');
        }
      });
    } else {
      alert('Compila tutti i campi correttamente prima di aggiungere una proiezione.');
    }
  }

  updateProiezione(): void {
    // Controlli per i campi della proiezione da aggiornare
    if (this.newProiezione.film && this.newProiezione.sala && this.newProiezione.orario) {
      this.filmsService.updateProiezione(this.newProiezione).subscribe((updatedProiezione) => {
       
        this.resetNewProiezione();
        this.router.navigateByUrl('/elenco-proiezioni');
      });
    } else {
      alert('Compila tutti i campi prima di aggiornare la proiezione.');
    }
  }

  resetNewProiezione(): void {
    //this.newProiezione = { id: 0, film: {} as Film, sala: {} as Sala, orario: new Date(), postiDisponibili: 0 };
    this.newProiezione = new Proiezione();
    this.newProiezione.id = 0;
    this.newProiezione.orario = new Date();
    this.newProiezione.postiDisponibili = 0;
  }
}
