import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabListComponent } from './vocab-list/vocab-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VocabListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fire-vocable-app';
}
