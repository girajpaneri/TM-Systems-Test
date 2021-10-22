import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userName=new BehaviorSubject(localStorage.getItem('userName')?.toString());
  constructor() { }
}
