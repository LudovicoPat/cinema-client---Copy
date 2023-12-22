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

  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProiezioni();
  }

  loadProiezioni(): void {
    this.filmsService.getProiezioniList().subscribe((proiezioni) => {
      this.proiezioni = proiezioni;
    });
  }

  toggleAddProiezioneForm() {
    this.router.navigateByUrl('/agg-proiezione');
  }

  updateProiezione(proiezione: Proiezione): void {
    this.router.navigate(['/modifica-proiezione', proiezione.id]);
  }
   
 
   deleteProiezione(id: number): void {
     this.filmsService.deleteProiezione(id).subscribe(() => {
       this.proiezioni = this.proiezioni.filter((proiezione) => proiezione.id !== id);
     });
   }

}
