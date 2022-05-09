import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  collectionName = 'Reports';

  constructor(private afs: AngularFirestore) { }

  add(report: Report) {
    return this.afs.collection<Report>(this.collectionName).add(report);
  }

  getUserReports(code: string){
    return this.afs.collection<Report>(this.collectionName);
  }

  getSomething(){
    return this.afs.collection<Report>(this.collectionName).valueChanges();
  }
}
