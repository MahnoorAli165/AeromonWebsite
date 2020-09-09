import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { of as observableOf, Observable } from 'rxjs';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
// AngularFirestore

@Injectable({
  providedIn: 'root'
})
export class UserService {
  items: Observable<any[]>;
  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      }
      else {

        return authState.uid;
      }
    }),
  )
  isAdmin = observableOf(true);
  constructor(private afAuth: AngularFireAuth) { }
  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  sign(email, password) {

    this.afAuth.auth.signInWithEmailAndPassword(email, password)


  }
  log(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);

  }
  // getData() {
  //   this.items = this.db.collection('items').valueChanges();
  //   console.log(this.items);
  // }
}
