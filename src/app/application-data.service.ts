import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Application []>("http://localhost:5000/api/applications");
  }

  getById(id: number) {
    return this.http.get<Application>(`http://localhost:5000/api/applications/${id}`);
  }
}
