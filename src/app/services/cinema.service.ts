import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) { }

  // FILM

  getFilmList(): Observable<Film[]> {
    return this.http.get<Film[]>("https://localhost:7160/api/Gestore");
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`https://localhost:7160/api/Gestore/${id}`);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>("https://localhost:7160/api/Gestore", film);
  }

  updateFilm(film: Film): Observable<Film> {
    return this.http.put<Film>(`https://localhost:7160/api/Gestore/${film.id}`, film);
  }

  deleteFilm(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7160/api/Gestore/${id}`);
  }

  // SALE

  getSala(id: number): Observable<Sala> {
    return this.http.get<Sala>(`https://localhost:7160/api/Gestore/Sala/${id}`);
  }

  getSaleList(): Observable<Sala[]> {
    return this.http.get<Sala[]>("https://localhost:7160/api/Gestore/Sala");
  }

  deleteSala(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7160/api/Gestore/Sala/${id}`);
  }

  // PROIEZIONI

  getProiezioniList(): Observable<Proiezione[]> {
    return this.http.get<Proiezione[]>("https://localhost:7160/api/Gestore/Proiezione");
  }

  getProiezione(id: number): Observable<Proiezione> {
    return this.http.get<Proiezione>(`https://localhost:7160/api/Gestore/Proiezione/${id}`);
  }

  addProiezione(proiezioneData: Partial<Proiezione>): Observable<Proiezione> {
    return this.http.post<Proiezione>("https://localhost:7160/api/Gestore/Proiezione", proiezioneData);
  }

  deleteProiezione(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7160/api/Gestore/Proiezione/${id}`);
  }

  updateProiezione(proiezione: Proiezione): Observable<Proiezione> {
    return this.http.put<Proiezione>(`https://localhost:7160/api/Gestore/Proiezione/${proiezione.id}`, proiezione);
  }

  // PRENOTAZIONI

  getPrenotazioniList(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>("https://localhost:7160/api/Cliente/Prenotazione");
  }

  getPrenotazione(id: number): Observable<Prenotazione> {
    return this.http.get<Prenotazione>(`https://localhost:7160/api/Cliente/Prenotazione/${id}`);
  }

  addPenotazione(prenotazioneData: Partial<Prenotazione>): Observable<Prenotazione> {
    return this.http.post<Prenotazione>("https://localhost:7160/api/Cliente/Prenotazione", prenotazioneData);
  }

  deletePrenotazione(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7160/api/Cliente/Prenotazione/${id}`);
  }

  updatePrenotazione(prenotazione: Prenotazione): Observable<Prenotazione> {
    return this.http.put<Prenotazione>(`https://localhost:7160/api/Cliente/Prenotazione/${prenotazione.id}`, prenotazione);
  }

  // LOGIN

  login(email: string, password: string): Observable<Utente> {
    const loginData = { email, password };
    return this.http.post<Utente>("https://localhost:7160/api/Login", loginData);
  }
  

  
 
}

export class Utente
{
  public id: number;
  public nome: string;
  public cognome: string;
  public email: string;
  public password: string;
}

export class Film
{    
    public id: number;
    public genere: string;
    public durataMinuti: number;
    public titolo: string;
}

export class Sala
{
  public id: number;
  public nome: string;
  public postiTotali: number;
}

// Proiezione su Angular
export class Proiezione {
  public id: number;
  public filmId: number;
  public salaId: number;
  public film: Film;
  public sala: Sala;
  public orario: Date;
  public postiDisponibili: number;
}

export class Prenotazione {
  public id: number;
  public proiezioneId: number;
  public utenteId: number;
  public proiezione: Proiezione;
  public utente: Utente;
  public postiPrenotati: number;
}