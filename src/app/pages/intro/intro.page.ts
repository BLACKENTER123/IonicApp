import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      try {
        this.router.navigateByUrl('/home');
      } catch (error) {
        console.error('Error al intentar redirigir a /home:', error);
      }
    }, 1500);
  }

}
