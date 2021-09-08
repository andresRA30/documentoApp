import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Documento } from '../interface/documento.interface';
const url = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  constructor(private http: HttpClient) { }

  getDocumentos() {

    return this.http.get<Documento[]>(`${url}/documentos`)

  }
  filtrarDocumento(alias: string) {
    return this.http.get<Documento[]>(`${url}/documentos?q=${alias}`)
  }
  getDocumento(id: number) {
    return this.http.get<Documento>(`${url}/documentos/${id}`)
  }
  crearDocumento(documento: Documento) {
    const body = documento;
    return this.http.post(`${url}/documentos`, body)
  }
  updateDocumento(documento: any) {
    console.log(documento.id)
    return this.http.put(`${url}/documentos/${documento.id}`, documento)
  }
}
