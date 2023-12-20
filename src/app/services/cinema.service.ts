import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) { }

  // getFilmList(){
  //   this.http.get<Film[]>("https://localhost:7160/api/Gestore")
  //   .subscribe((films) => {
  //       console.log(films.map(f => f.titolo));
  //   })
  // }
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

 
}

export class Film
{    
    public id: number;
    public genere: string;
    public durataMinuti: number;
    public titolo: string;
}