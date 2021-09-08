import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Documento } from '../../interface/documento.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() documento!: Documento | undefined;
  @Output() editarDocumento = new EventEmitter;
  tipos: string[] = ['Contrato', 'Examen', 'Carta', 'Ensayo']

  documentoForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.documentoForm = this.fb.group({
      id: [''],
      alias: ['', [Validators.required]],
      tipo: [null],
      fechaCreacion: ['']
    })

  }

  ngOnInit(): void {




  }
  editar() {
    if (this.documentoForm.controls['tipo'].value === null) {
      this.documentoForm.controls['tipo'].setValue(this.documento?.tipo)

    }
    this.documentoForm.controls['id'].setValue(this.documento?.id)
    this.documentoForm.controls['fechaCreacion'].setValue(new Date())
    this.editarDocumento.emit(this.documentoForm.value)

  }
}
