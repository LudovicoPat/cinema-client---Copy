import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) { }

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

  getSaleList(): Observable<Sala[]> {
    return this.http.get<Sala[]>("https://localhost:7160/api/Gestore/Sala");
  }

  deleteSala(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7160/api/Gestore/Sala/${id}`);
  }

  getProiezioniList(): Observable<Proiezione[]> {
    return this.http.get<Proiezione[]>("https://localhost:7160/api/Gestore/Proiezione");
  }

  getProiezione(id: number): Observable<Proiezione> {
    return this.http.get<Proiezione>(`https://localhost:7160/api/Gestore/Proiezione/${id}`);
  }

  addProiezione(proiezione: Proiezione): Observable<Proiezione> {
    return this.http.post<Proiezione>("https://localhost:7160/api/Gestore/Proiezione", proiezione);
  }  

  deleteProiezione(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7160/api/Gestore/Proiezione/${id}`);
  }

  updateProiezione(proiezione: Proiezione): Observable<Proiezione> {
    return this.http.put<Proiezione>(`https://localhost:7160/api/Gestore/Proiezione/${proiezione.id}`, proiezione);
  }
  
 
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

export class Proiezione {
  public id: number;
 
  public film: Film;
  
  public sala: Sala;
  public orario: Date;
  public postiDisponibili: number;
}