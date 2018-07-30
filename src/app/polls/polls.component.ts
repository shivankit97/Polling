import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

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

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  pollCol: AngularFirestoreCollection<Poll>;
  Polls: Observable<Poll[]>;

  heading: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  type: string;
  duration: number;
  readytopoll: boolean = false;
  pollselector: Poll;
  val1: number = 40;
  val2: number = 60;
  val3: number = 30;
  val4: number = 80;

  constructor(public auth: AuthService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.pollCol = this.afs.collection('polls');
    this.Polls = this.pollCol.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Poll;
        const id = a.payload.doc.id;
        return{id,...data};
      }))
    );
  }


  polled(poll){
    this.pollselector = poll;
    this.readytopoll=true;
     
}

close(){
  this.readytopoll = false;
}

}
