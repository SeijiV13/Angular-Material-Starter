import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Posts } from '../../shared/models/posts';
import { Observable} from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Posts[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }


  getPosts(){
    this.postsService.getAllPost().subscribe((data)=>{
       this.posts =  data.filter((data)=> data.draft == false);
    })
  }

}
