import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentoService } from '../../services/documento.service';

@Component({
  selector: 'app-crear-documento',
  templateUrl: './crear-documento.component.html',
  styleUrls: ['./crear-documento.component.css']
})
export class CrearDocumentoComponent implements OnInit {
  documentoForm!: FormGroup;
  tipos: string[] = ['Contrato', 'Examen', 'Carta', 'Ensayo']

  constructor(private fb: FormBuilder, private documentoService: DocumentoService, private router: Router) {
    this.documentoForm = this.fb.group({
      id: [null],
      alias: ['', [Validators.required]],
      tipo: [null, [Validators.required]],
      fechaCreacion: ['']
    })
  }

  ngOnInit(): void {
  }
  crear() {
    this.documentoForm.controls['id'].setValue('_' + Math.random().toString(36).substr(2, 9))
    this.documentoForm.controls['fechaCreacion'].setValue(new Date())
    console.log(this.documentoForm.value)
    this.documentoService.crearDocumento(this.documentoForm.value)
      .subscribe(resp => {

        this.router.navigateByUrl('home')
      })
  }
}
