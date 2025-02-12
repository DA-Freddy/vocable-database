import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore, onSnapshot } from '@angular/fire/firestore';
import { Vocable } from '../interfaces/vocable';

@Injectable({
  providedIn: 'root'
})
export class VocableService {

  vocabList: Vocable[] = [];
  unsubVocabs;

  firestore: Firestore = inject(Firestore);

  constructor() { 
    this.unsubVocabs = this.subVocabList();
  }

  ngOnDestroy() {
    this.unsubVocabs();
  }

  subVocabList() {
    return onSnapshot(this.getVocabRef(), (vocabs) => {
      this.vocabList = [];
      vocabs.forEach((element) => {
        this.vocabList.push(this.setVocabObjects(element.data(), element.id));
      });
      
    });
  }

  async addVocab(item: Vocable){
    await addDoc(this.getVocabRef(),item)
    .catch((err) => {
      console.error(err);
    })
  }

  getVocabRef() {
    return collection(this.firestore, 'vocabs');
  }

  setVocabObjects(obj: any, id: string): Vocable {
    return {
      id: id || '',
      german: obj.german || '',
      english: obj.english || '',
    };
  }
}
