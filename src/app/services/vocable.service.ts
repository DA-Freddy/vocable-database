import { inject, Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, onSnapshot, updateDoc } from '@angular/fire/firestore';
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

  async addVocab(item: Vocable) {
    await addDoc(this.getVocabRef(), item)
      .catch((err) => {
        console.error(err);
      })
  }

  async deleteVocab(index: number) {
    if (this.vocabList[index].id) {
      await deleteDoc(doc(this.getVocabRef(), this.vocabList[index].id));
    }
  }

  async updateVocab(index: number, newEnglishVocab: string, newGermanVocab : string) {
    const vocabRef = doc(this.getVocabRef(), this.vocabList[index].id);

    if(newEnglishVocab != '' && newGermanVocab != '')
    await updateDoc(vocabRef, {
      'english': newEnglishVocab,
      'german' : newGermanVocab,
    });

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
