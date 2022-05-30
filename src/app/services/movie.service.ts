import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor(private http: HttpClient) { }

  searchMovie(payload: string) {
    return this.http.get<Movie>(`${environment.apiUrl}&t=${payload}`)
  }
}
