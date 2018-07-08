import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['']);
  }

  goToCreate(){
    this.router.navigate(['/createPost']);
  }
 
  goToDraft(){
    this.router.navigate(['/draftPosts']);
  }
}
