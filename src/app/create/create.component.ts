import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

interface Poll {
  id?: string;
  heading: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  type: string;
  duration: number;
}

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favouriteColor?: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: Observable<User>;

  pollCol: AngularFirestoreCollection<Poll>;
  Polls: Observable<Poll[]>;

  heading: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  type: string;
  duration: number;



  nof: any = 1;
  opt: string;
  optionno1: string;
  optionno2: string;
  optionno3: string;
  optionno4: string;
  error: boolean = false;
  btndis: boolean = false;

  constructor(public snackBar: MatSnackBar, private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState
   }

  ngOnInit() {
    this.pollCol = this.afs.collection('polls');
    this.Polls = this.pollCol.valueChanges();
  }

  

  add(){
    if (this.opt != null && this.nof==1)
    {
    this.optionno1 = this.opt;
    }
    if (this.opt != null && this.nof==2)
    {
    this.optionno2 = this.opt;
    }
    if (this.opt != null && this.nof==3)
    {
    this.optionno3 = this.opt;
    }
    if (this.opt != null && this.nof==4)
    {
    this.optionno4 = this.opt;
    this.nof = "filled";
    this.btndis=true;
    }
    
    this.nof = this.nof+1;
    this.opt = "";
    
  }
  
  hours(value: number){
    return value + 'hr';
  }

  openSnackBar(message: string, action: string) {
    if (this.nof==4 && this.heading != null)
    {

      this.afs.collection('polls')      //add poll info in firestore
    .add({'heading': this.heading,
     'option1': this.optionno1,
     'option2': this.optionno2,
     'option3': this.optionno3,
     'option4': this.optionno4,
      'type': this.type,
       'duration': this.duration,
      });

      this.error=false;
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    }
    else 
    {
      this.error = true;
    }
  }

  
}