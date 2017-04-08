import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pollution } from '../domain/pollution.data';
@Injectable()
export class PollutionService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pollutionUrl = 'localhost:3000';  // URL to web api
  constructor(private http: Http) { }
  getPollutions(): Promise<Pollution[]> {
    return this.http.get(this.pollutionUrl)
      .toPromise()
      .then(response => response.json().data as Pollution[])
      .catch(this.handleError);
  }
  getPollution(id: number): Promise<Pollution> {
    const url = `${this.pollutionUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Pollution)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.pollutionUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Pollution> {
    return this.http
      .post(this.pollutionUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Pollution)
      .catch(this.handleError);
  }
  update(pollution: Pollution): Promise<Pollution> {
    const url = `${this.pollutionUrl}/${pollution.id}`;
    return this.http
      .put(url, JSON.stringify(pollution), {headers: this.headers})
      .toPromise()
      .then(() => pollution)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
