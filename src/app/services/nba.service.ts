import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NbaService {
  api = 'https://www.balldontlie.io/api/v1/players'
  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(this.api).pipe((
      map((players: any) => players.data)
    ));
  }
}
