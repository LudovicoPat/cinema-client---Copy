// login.component.ts

import { Component } from '@angular/core';
import { FilmsService } from '../services/cinema.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  nome: string = '';
  cognome: string = '';

  constructor(private filmsService: FilmsService) {}

  submitLogin(): void {
    // Verifica se username e password sono stati inseriti
    if (!this.username || !this.password) {
      alert('Inserisci username e password');
      return;
    }
  
    console.log(`Tentativo di login per l'utente: ${this.username}`);
  
    // Chiama il metodo di login dal servizio FilmsService
    this.filmsService.login(this.username, this.password).subscribe({
      next: (utente) => {
        // Login riuscito, esegui le azioni desiderate
        console.log('Login riuscito:', utente);
  
        
      },
      error: (errore) => {
        // Gestisci eventuali errori durante il login
        console.error('Errore durante il login:', errore);
      
        if (errore.status === 401) {
          alert('Credenziali non valide. Riprova.');
        } else {
          alert('Si è verificato un errore durante il login. Riprova più tardi.');
        }
      }
    });
  }
}
