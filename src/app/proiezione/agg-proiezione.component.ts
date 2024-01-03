import { Component, OnInit } from '@angular/core';
import { FilmsService, Proiezione, Film, Sala } from '../services/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agg-proiezione',
  templateUrl: './agg-proiezione.component.html',
  styleUrls: ['./agg-proiezione.component.css'],
})
export class AggProiezioneComponent implements OnInit {

  onChangeFilm(selectedFilmId: number): void {
    this.filmsService.getFilm(selectedFilmId).subscribe((film) => {
      console.log(film);
      this.newProiezione.filmId = film.id;
      console.log('Film ID:', selectedFilmId);
      console.log(this.newProiezione);
    });
  }

  onChangeSala(selectedSalaId: number): void {
    this.filmsService.getSala(selectedSalaId).subscribe((sala) => {
      console.log(sala);
      this.newProiezione.salaId = sala.id;
      console.log('Sala ID:', selectedSalaId);
      console.log(this.newProiezione);
    });
  }
  

  


  proiezioni: Proiezione[] = [];
  newProiezione: Proiezione = { id: 0, filmId: 0, salaId: 0, orario: new Date(), postiDisponibili: 0 };
  films: Film[] = [];
  sale: Sala[] = [];

  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   //this.resetNewProiezione();
    
  //   this.filmsService.getFilmList().subscribe((films) => {
  //     console.log(films);
  //     this.films = films;
  //     this.films.forEach((f) => {console.log(f)});
  //   });
  
  //   this.filmsService.getSaleList().subscribe((sale) => {
  //     console.log(sale);
  //     this.sale = sale;
  //   });
  // }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        const proiezioneId = +params['id'];
        if (proiezioneId) {
          this.loadProiezioneDetails(proiezioneId);
        }
        // Carica l'elenco dei film ogni volta che il parametro della route cambia
        return this.filmsService.getFilmList();
      })
    ).subscribe((films) => {
      this.films = films;

      // Carica l'elenco delle sale ogni volta che il parametro della route cambia
      this.filmsService.getSaleList().subscribe((sale) => {
        console.log(sale);
        this.sale = sale;
      });
    });
  }

  loadProiezioneDetails(id: number): void {
    this.filmsService.getProiezione(id).subscribe((proiezione) => {
      this.newProiezione = proiezione;
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
    console.log("Before adding Proiezione:", this.newProiezione);
  
    if (this.newProiezione.filmId && this.newProiezione.salaId && this.newProiezione.orario) {
      console.log("Adding Proiezione...");
      console.log("filmId:", this.newProiezione.filmId);
      console.log("salaId:", this.newProiezione.salaId);
      console.log("orario:", this.newProiezione.orario);
  
      const proiezioneToAdd: Partial<Proiezione> = {
        filmId: this.newProiezione.filmId,
        salaId: this.newProiezione.salaId,
        orario: this.newProiezione.orario,
        postiDisponibili: this.newProiezione.postiDisponibili
      };
  
      this.filmsService.addProiezione(proiezioneToAdd as Proiezione).subscribe({
        next: (addedProiezione) => {
          this.proiezioni.push(addedProiezione);
          //this.resetNewProiezione();
          this.router.navigateByUrl('/elenco-proiezioni');
        },
        error: (error) => {
          alert('Errore durante l\'aggiunta della proiezione');
          if (error && error.error && error.error.errors) {
            // Mostra gli errori di validazione specifici
            console.log('Errori di validazione:', error.error.errors);}
          console.log('Dettaglio dell\'errore:', error);
        }
      });
    } else {
      console.log("Compila tutti i campi correttamente prima di aggiungere una proiezione.");
      alert('Compila tutti i campi correttamente prima di aggiungere una proiezione.');
    }
  }
  
  
  
  

  updateProiezione(): void {
    // Controlli per i campi della proiezione da aggiornare
    if (this.newProiezione.filmId && this.newProiezione.salaId && this.newProiezione.orario) {
      this.filmsService.updateProiezione(this.newProiezione).subscribe((updatedProiezione) => {
       
        //this.resetNewProiezione();
        this.router.navigateByUrl('/elenco-proiezioni');
      });
    } else {
      alert('Compila tutti i campi prima di aggiornare la proiezione.');
    }
  }

  
}
