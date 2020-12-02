import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DbfirestoreService {
  private status!:boolean;
  constructor(public db:AngularFirestore) {
  }
  
  AddItem(item:any):boolean{
    this.db.collection('todos').add(item)
    .then((success)=>{
      console.log('success', success);
      this.status = true;
    })
    .catch((error)=>{
      console.log('error', error);
      this.status = false;
    });
    return this.status;
  } 

  GetItems() : any {
    return this.db.collection('todos').get();
  } 
}
