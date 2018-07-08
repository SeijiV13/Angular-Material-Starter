import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from '../../shared/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Posts } from '../../shared/models/posts';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private postService: PostsService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initializeForm();
    if(this.activatedRoute.snapshot.params.id)
    this.setPost(this.activatedRoute.snapshot.params.id);
  }
  

  initializeForm(){
    this.form = this.formBuilder.group({
      id: [''],
      title: [''],
      draft: [''],
      author: [''],
      category: [''],
      body: ['']
    });
  }

  setPost(id){
    this.postService.readSinglePost(id).subscribe((data)=>{
      this.form.patchValue(data);
    })
    
  }

  createPost(){
    let post = new Posts();
    post = this.form.getRawValue();
    this.postService.createPost(post).subscribe(()=>{
      this.router.navigate(['']);
    });
  }

  clearForm(){
    this.form.reset();
  }

}
