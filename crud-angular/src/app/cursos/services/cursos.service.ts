import { Curso } from './../model/curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      tap(cursos => console.log(cursos))
    );
  }
}
