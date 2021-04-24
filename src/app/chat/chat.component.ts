import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {users} from '../services/user'
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';

const baseurl =  'http://localhost:8080/api/tutorial';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent {
  user = new users;
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    message: [null, Validators.required]
  });
  

  hasUnitNumber = false;


  constructor(private fb: FormBuilder,
              public afs: AngularFirestore,
              public adb: AngularFireDatabase,
              private http: HttpClient
              ) {}


  onSubmit(): void {
    /*this.afs.collection('users').doc().set(this.addressForm.value);
   this.adb.list('user/').push({
     pseudo: 'santos'
   });
   */ console.log(this.addressForm.value);  
  }

   getAll(): Observable <any> {
      return this.http.get(baseurl);
   }
   
   create(): Observable <any>{
     return this.http.post(baseurl, this.addressForm.value );
   }

   find():Observable<any>{
     return this.http.get(baseurl);
   }
}
