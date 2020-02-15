import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'particles.js'

declare var particlesJS: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // https://vincentgarreau.com/particles.js/
    particlesJS('particles-js', ParticlesConfig, function() {
        console.log('callback - particles.js config loaded');
      });
}
}