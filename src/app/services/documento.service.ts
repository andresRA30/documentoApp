import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from '../interface/documento.interface';
@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  constructor(private http: HttpClient) { }

  getDocumentos() {

    return this.http.get<Documento[]>('http://localhost:3000/documentos')

  }
  filtrarDocumento(alias: string) {
    return this.http.get<Documento[]>(`http://localhost:3000/documentos?q=${alias}`)
  }
  getDocumento(id: number) {
    return this.http.get<Documento>(`http://localhost:3000/documentos/${id}`)
  }
  crearDocumento(documento: Documento) {
    const body = documento;
    return this.http.post(`http://localhost:3000/documentos`, body)
  }
  updateDocumento(documento: any) {
    console.log(documento.id)
    return this.http.put(`http://localhost:3000/documentos/${documento.id}`, documento)
  }
}
