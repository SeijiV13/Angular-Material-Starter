import { Component, OnInit } from '@angular/core';
import { Posts } from '../../shared/models/posts';
import {  ActivatedRoute } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Posts;
  constructor() { 
  
  }

  ngOnInit() {
  
  }



}
