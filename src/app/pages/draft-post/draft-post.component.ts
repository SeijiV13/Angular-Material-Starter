import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Posts } from '../../shared/models/posts';
import { Observable} from 'rxjs'

@Component({
  selector: 'app-draft-post',
  templateUrl: './draft-post.component.html',
  styleUrls: ['./draft-post.component.css']
})
export class DraftPostComponent implements OnInit {

  posts: Posts[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }


  getPosts(){
    this.postsService.getAllPost().subscribe((data)=>{
       this.posts =  data.filter((data)=> data.draft == true);
    })
  }

}
