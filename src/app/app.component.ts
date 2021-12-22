import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'AnotherEden';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('app component init');
    this.router.navigate(['./AnotherEden']);        
  }
}
