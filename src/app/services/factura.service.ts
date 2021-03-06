import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factura } from '../models/factura.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  public url: String = 'https://gestionhotelesgrupo1.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  public identidad;
  public token;

  constructor(public _http: HttpClient) {}

  generarFactura(modeloFactura: Factura, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.post(this.url + '/generarFacutra', {
      headers: headersToken,
    });
  }

  obtenerFactura(idUsuario: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerFacturaUsuario/' + idUsuario, {
      headers: headersToken,
    });
  }

  obtenerToken() {
    var token2 = localStorage.getItem('token');
    if (token2 != undefined) {
      this.token = token2;
    } else {
      this.token = '';
    }
    return this.token;
  }

  obtenerIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad') || '{}');
    if (identidad2 != undefined) {
      this.identidad = identidad2;
    } else if (identidad2 == undefined) {
      this.identidad = null;
    }
    return this.identidad;
  }
}
