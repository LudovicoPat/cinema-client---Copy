import { Component, OnInit } from '@angular/core';
import { Sala, FilmsService } from '../services/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elenco-sale',
  templateUrl: './elenco-sale.component.html',
  styleUrls: ['./elenco-sale.component.css'],
})
export class ElencoSaleComponent implements OnInit {
   //#region INIZIALIZZAZIONE VARIABILI/PROPRIETà DEL COMPONENTE

   sale: Sala[] = [];
   showSaleList: boolean = false;
   
   title = 'cinema-client';
 
   //#endregion
 
   //#region COSTRUTTORE E ngOnInit SE PRESENTE
 
   constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) { }
 
   ngOnInit(): void {
    this.loadSale();
    
  }
  
 
   //#endregion
 
   //#region LOGICA APPLICATIVA
   

    loadSale(): void {
    this.filmsService.getSaleList().subscribe(
        (sale) => {
        this.sale = sale;
        },
        (error) => {
        console.error('Errore nel recupero della lista delle sale', error);
        }
    );
    }

 
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
 
//    updateFilm(film: Film): void {
//      this.selectedFilm = film;
//      this.showSelectedFilm = true;
//      this.showFilmList = false;
//      this.showAddFilmForm = false;
//    }
 
  updateSala(sala: Sala): void {
    this.router.navigate(['/modifica-sala', sala.id]);
  }
   
 
   deleteSala(id: number): void {
     this.filmsService.deleteSala(id).subscribe(() => {
       this.sale = this.sale.filter((sala) => sala.id !== id);
     });
   }
 
   
 
   //#endregion
}
