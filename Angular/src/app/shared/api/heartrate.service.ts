import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import HeartRate from '../models/HeartRate';

@Injectable()
export default class HeartRateService {
  public API = 'http://localhost:8080/api';
  public SUGARLEVELS_API = `${this.API}/sugarlevels`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<HeartRate>> {
    return this.http.get<Array<HeartRate>>(this.SUGARLEVELS_API);
  }

  get(id: string) {
    return this.http.get(`${this.SUGARLEVELS_API}/${id}`);
  }

  save(sugarLevel: HeartRate): Observable<HeartRate> {
    let result: Observable<HeartRate>;
    if (sugarLevel.id) {
      result = this.http.put<HeartRate>(
        `${this.SUGARLEVELS_API}/${sugarLevel.id}`,
        sugarLevel
      );
    } else {
      result = this.http.post<HeartRate>(this.SUGARLEVELS_API, sugarLevel);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
  }
}
