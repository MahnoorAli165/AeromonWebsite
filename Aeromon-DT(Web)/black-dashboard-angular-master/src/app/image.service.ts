import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Image } from './models/Image';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
}
