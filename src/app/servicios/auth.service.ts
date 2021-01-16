import { Injectable } from '@angular/core';
import {AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private AFauth : AngularFireAuth, private router : Router
 ) { }

  login(email: string,  password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        console.log(user)
        resolve(user);
      }).catch(err => console.log('error:' + err))
    });
    
  }


  logout(){
    this.AFauth.signOut().then(() =>{
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string, name: string){

    return new Promise((resolve, reject) =>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res =>{
        const uid = res.user.uid;
        console.log(res.user.uid);
        
       /* this.db.collection('users').doc(uid).set({
          name: name,
          uid : uid
        })*/
resolve(res)
      }).catch(err => reject(err))
    })
    
  }
}
