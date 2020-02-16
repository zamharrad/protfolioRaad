import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  userName : string = "M.M.M Zamhar"
  age : number = 23;

  ngOnInit(): void {
  }

}
