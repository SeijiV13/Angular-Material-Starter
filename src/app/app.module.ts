import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, RequestOptions, Http } from '@angular/http';


import { AppComponent } from './app.component';
import { ROUTER_PROVIDER } from './routes/main.routes';
//ANGULAR-MATERIAL
import {MatInputModule, MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatSlideToggleModule} from '@angular/material';

//SERVICES
import { PostsService } from './shared/services/posts.service';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { DraftPostComponent } from './pages/draft-post/draft-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    PostCardComponent,
    CreatePostComponent,
    EditPostComponent,
    PostFormComponent,
    DraftPostComponent,


  ],
  imports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ROUTER_PROVIDER,
    ReactiveFormsModule,
    HttpModule,
  
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
