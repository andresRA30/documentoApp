import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interface/documento.interface';
import Swal from 'sweetalert2';
import { DocumentoService } from '../../services/documento.service';

@Component({
  selector: 'app-listar-documento',
  templateUrl: './listar-documento.component.html',
  styleUrls: ['./listar-documento.component.css']
})
export class ListarDocumentoComponent implements OnInit {
  documentos!: Documento[];
  documento!: Documento | undefined;
  cargando: boolean = true;
  constructor(private documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.listarDocumentos();
  }
  listarDocumentos() {
    this.documentoService.getDocumentos().subscribe(resp => {
      this.documentos = resp;
      this.cargando = false;
    })
  }
  editar(id: number) {
    this.documentoService.getDocumento(id).subscribe(documento => {
      this.documento = documento;
    })
    this.documento = this.documentos.find(({ id }) => id === id)
    console.log(this.documento)
  }
  editarDocumento(event: any) {
    console.log(event)
    this.documentoService.updateDocumento(event)
      .subscribe(documento => {
        console.log(documento)
        this.listarDocumentos();
        Swal.fire({

          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1000
        })
      })
  }
  buscar(event: any) {

    if (event.target.value.trim() === '') {
      this.listarDocumentos();
      return;
    }
    this.documentoService.filtrarDocumento(event.target.value)
      .subscribe(resp => {
        this.documentos = resp;
      })
  }
}
