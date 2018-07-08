import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from '../../shared/models/posts';
import { PostsService } from '../../shared/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Posts;
  @Output() emitDeletePost = new EventEmitter();
  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit() {
  }


  editPost(id){
     this.router.navigate([`/editPost/${id}`]);
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe((data)=>{
        this.emitDeletePost.emit();
    }); 
  }

}
