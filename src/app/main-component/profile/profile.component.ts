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

  imgGithub = './../../../assets/images/github.svg'
  imgHtml5 = './../../../assets/images/html-5.svg'
  imgJava = './../../../assets/images/java.svg'
  imgReact = './../../../assets/images/react.svg'
  imgCss = './../../../assets/images/css.svg'
  imgNodeJs = './../../../assets/images/nodejs.svg'
  imgTypescript = './../../../assets/images/typescript.svg'
  imgMysql = './../../../assets/images/mysql.svg'
  ngOnInit(): void {
  }

}
