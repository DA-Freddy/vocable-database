import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"vocab-app-31aae","appId":"1:694246951294:web:224d434f74d226069ecb2f","storageBucket":"vocab-app-31aae.firebasestorage.app","apiKey":"AIzaSyCtGvGJErZoJay-NZ5KMIijsNRMb2eMFvs","authDomain":"vocab-app-31aae.firebaseapp.com","messagingSenderId":"694246951294","measurementId":"G-ZSNX17HDPJ"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
