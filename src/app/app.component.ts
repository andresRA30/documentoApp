import { AfterViewChecked, AfterViewInit, Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'entrevista';
  ngAfterViewInit(): void {
    Swal.fire({

      icon: 'success',
      title: 'Bienvenido',
      showConfirmButton: false,
      timer: 1000
    })
  }

}
