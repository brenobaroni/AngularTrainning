import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  faTrashAlt = faTrashAlt;
}
