import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private apiUrl = 'https://localhost:7160/api/Gestore';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    });
  }

  // // FILM

  // getFilmList(): Observable<Film[]> {
  //   return this.http.get<Film[]>("https://localhost:7160/api/Gestore");
  // }

  // getFilm(id: number): Observable<Film> {
  //   return this.http.get<Film>(`https://localhost:7160/api/Gestore/${id}`);
  // }

  // addFilm(film: Film): Observable<Film> {
  //   return this.http.post<Film>("https://localhost:7160/api/Gestore", film);
  // }

  // updateFilm(film: Film): Observable<Film> {
  //   return this.http.put<Film>(`https://localhost:7160/api/Gestore/${film.id}`, film);
  // }

  // deleteFilm(id: number): Observable<void> {
  //   return this.http.delete<void>(`https://localhost:7160/api/Gestore/${id}`);
  // }

  // // SALE

  // getSala(id: number): Observable<Sala> {
  //   return this.http.get<Sala>(`https://localhost:7160/api/Gestore/Sala/${id}`);
  // }

  // getSaleList(): Observable<Sala[]> {
  //   return this.http.get<Sala[]>("https://localhost:7160/api/Gestore/Sala");
  // }

  // deleteSala(id: number): Observable<void> {
  //   return this.http.delete<void>(`https://localhost:7160/api/Gestore/Sala/${id}`);
  // }

  // // PROIEZIONI

  // getProiezioniList(): Observable<Proiezione[]> {
  //   return this.http.get<Proiezione[]>("https://localhost:7160/api/Gestore/Proiezione");
  // }

  // getProiezione(id: number): Observable<Proiezione> {
  //   return this.http.get<Proiezione>(`https://localhost:7160/api/Gestore/Proiezione/${id}`);
  // }

  // addProiezione(proiezioneData: Partial<Proiezione>): Observable<Proiezione> {
  //   return this.http.post<Proiezione>("https://localhost:7160/api/Gestore/Proiezione", proiezioneData);
  // }

  // deleteProiezione(id: number): Observable<void> {
  //   return this.http.delete<void>(`https://localhost:7160/api/Gestore/Proiezione/${id}`);
  // }

  // updateProiezione(proiezione: Proiezione): Observable<Proiezione> {
  //   return this.http.put<Proiezione>(`https://localhost:7160/api/Gestore/Proiezione/${proiezione.id}`, proiezione);
  // }

  // // PRENOTAZIONI

  // getPrenotazioniList(): Observable<Prenotazione[]> {
  //   return this.http.get<Prenotazione[]>("https://localhost:7160/api/Cliente/Prenotazione");
  // }

  // getPrenotazione(id: number): Observable<Prenotazione> {
  //   return this.http.get<Prenotazione>(`https://localhost:7160/api/Cliente/Prenotazione/${id}`);
  // }

  // addPenotazione(prenotazioneData: Partial<Prenotazione>): Observable<Prenotazione> {
  //   return this.http.post<Prenotazione>("https://localhost:7160/api/Cliente/Prenotazione", prenotazioneData);
  // }

  // deletePrenotazione(id: number): Observable<void> {
  //   return this.http.delete<void>(`https://localhost:7160/api/Cliente/Prenotazione/${id}`);
  // }

  // updatePrenotazione(prenotazione: Prenotazione): Observable<Prenotazione> {
  //   return this.http.put<Prenotazione>(`https://localhost:7160/api/Cliente/Prenotazione/${prenotazione.id}`, prenotazione);
  // }

  // // LOGIN

  // login(email: string, password: string): Observable<Utente> {
  //   const loginData = { email, password };
  //   return this.http.post<Utente>("https://localhost:7160/api/Login", loginData);
  // }
  
 // FILM

 getFilmList(): Observable<Film[]> {
  return this.http.get<Film[]>(`${this.apiUrl}`, { headers: this.getHeaders() });
}

getFilm(id: number): Observable<Film> {
  return this.http.get<Film>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
}

addFilm(film: Film): Observable<Film> {
  return this.http.post<Film>(`${this.apiUrl}`, film, { headers: this.getHeaders() });
}

updateFilm(film: Film): Observable<Film> {
  return this.http.put<Film>(`${this.apiUrl}/${film.id}`, film, { headers: this.getHeaders() });
}

deleteFilm(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
}

// SALE

getSala(id: number): Observable<Sala> {
  return this.http.get<Sala>(`${this.apiUrl}/Sala/${id}`, { headers: this.getHeaders() });
}

getSaleList(): Observable<Sala[]> {
  return this.http.get<Sala[]>(`${this.apiUrl}/Sala`, { headers: this.getHeaders() });
}

deleteSala(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/Sala/${id}`, { headers: this.getHeaders() });
}

// PROIEZIONI

getProiezioniList(): Observable<Proiezione[]> {
  return this.http.get<Proiezione[]>(`${this.apiUrl}/Proiezione`, { headers: this.getHeaders() });
}

getProiezione(id: number): Observable<Proiezione> {
  return this.http.get<Proiezione>(`${this.apiUrl}/Proiezione/${id}`, { headers: this.getHeaders() });
}

addProiezione(proiezioneData: Partial<Proiezione>): Observable<Proiezione> {
  return this.http.post<Proiezione>(`${this.apiUrl}/Proiezione`, proiezioneData, { headers: this.getHeaders() });
}

deleteProiezione(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/Proiezione/${id}`, { headers: this.getHeaders() });
}

updateProiezione(proiezione: Proiezione): Observable<Proiezione> {
  return this.http.put<Proiezione>(`${this.apiUrl}/Proiezione/${proiezione.id}`, proiezione, { headers: this.getHeaders() });
}

// PRENOTAZIONI

getPrenotazioniList(): Observable<Prenotazione[]> {
  return this.http.get<Prenotazione[]>(`${this.apiUrl}/Cliente/Prenotazione`, { headers: this.getHeaders() });
}

getPrenotazione(id: number): Observable<Prenotazione> {
  return this.http.get<Prenotazione>(`${this.apiUrl}/Cliente/Prenotazione/${id}`, { headers: this.getHeaders() });
}

addPenotazione(prenotazioneData: Partial<Prenotazione>): Observable<Prenotazione> {
  return this.http.post<Prenotazione>(`${this.apiUrl}/Cliente/Prenotazione`, prenotazioneData, { headers: this.getHeaders() });
}

deletePrenotazione(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/Cliente/Prenotazione/${id}`, { headers: this.getHeaders() });
}

updatePrenotazione(prenotazione: Prenotazione): Observable<Prenotazione> {
  return this.http.put<Prenotazione>(`${this.apiUrl}/Cliente/Prenotazione/${prenotazione.id}`, prenotazione, { headers: this.getHeaders() });
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
  token: string;
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