
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { CreatePostComponent } from '../pages/create-post/create-post.component';
import { EditPostComponent } from '../pages/edit-post/edit-post.component';
import { DraftPostComponent } from '../pages/draft-post/draft-post.component';


//PAGE COMPONENTS


export const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'createPost', component: CreatePostComponent},
   {path: 'editPost/:id', component: EditPostComponent} ,
   {path: 'draftPosts', component: DraftPostComponent},
];

export const ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(routes);