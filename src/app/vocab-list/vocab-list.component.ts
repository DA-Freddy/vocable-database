import { Component, inject } from '@angular/core';
import { VocableService } from '../services/vocable.service';
import { FormsModule } from '@angular/forms';
import { Vocable } from '../interfaces/vocable';


@Component({
  selector: 'app-vocab-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vocab-list.component.html',
  styleUrl: './vocab-list.component.scss'
})
export class VocabListComponent {
  english = '';
  german = '';
  vocabService = inject(VocableService);

  addVocabList(){
    let newVocab : Vocable = {
      'german': this.german,
      'english': this.english,
    }

    if(newVocab.german != ''  && newVocab.english != ''){
      this.vocabService.addVocab(newVocab);
    }
  }
}
