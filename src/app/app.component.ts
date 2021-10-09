/**
 * @login-child Componente principal para el cargue del formulario de login de niños
 *
 * @version                               0.1
 *
 * @author                 Santiago Osorio <santia.osorio@gmail.com>
 * @copyright              T&E temservice
 *
 * History
 * v0.1 – La primera versión de login-Child  fue escrita por Santiago Osorio
 */
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Formulario de login Infantil';
  faCoffee = faCoffee;
}
