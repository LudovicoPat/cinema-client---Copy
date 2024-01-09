import { Component, OnInit } from '@angular/core';
import { FilmsService, Prenotazione, Proiezione, Utente } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elenco-prenotazioni',
  templateUrl: './elenco-prenotazioni.component.html',
  styleUrls: ['./elenco-prenotazioni.component.css']
})
export class ElencoPrenotazioniComponent implements OnInit {
  prenotazioni: Prenotazione[] = [];

  constructor(private filmsService: FilmsService, private router: Router) {}

  ngOnInit(): void {
    this.loadPrenotazioni();
  }

  loadPrenotazioni(): void {
    this.filmsService.getPrenotazioniList().subscribe((prenotazioni) => {
      this.prenotazioni = prenotazioni;
    });
  }

  deletePrenotazione(id: number): void {
    this.filmsService.deletePrenotazione(id).subscribe(() => {
      this.prenotazioni = this.prenotazioni.filter((prenotazione) => prenotazione.id !== id);
    });
  }
}
