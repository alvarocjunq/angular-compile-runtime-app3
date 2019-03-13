import { Injectable } from '@angular/core';
import { HttpService } from '../$shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeCreditoService {

  constructor(private http: HttpService) { }

  openCalc() {
    return this.http.get('?application=C:/Windows/System32/calc.exe');
  }
}
