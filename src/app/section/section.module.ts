import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';
import { DetailComponent } from './detail/detail.component';
import { JoinModalComponent } from '../modal/join-modal/join-modal.component';
import { LoginModalComponent } from '../modal/login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPageComponent } from './my-page/my-page.component';
import { WriteComponent } from './write/write.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ModiComponent } from './modi/modi.component';

const routes: Routes = [
  {
    path:'login',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path:'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path:'board/:type/:page',
    pathMatch: 'full',
    component: BoardComponent,
  },
  {
    path:'',
    pathMatch: 'full',
    component: MyPageComponent,
  },
  {
    path:'write/board/:type',
    pathMatch: 'full',
    component: WriteComponent,
  },
  {
    path:'detail/:type/:contentId',
    pathMatch: 'full',
    component: DetailComponent,
  },
  {
    path:'modi/:type/:contentId',
    pathMatch: 'full',
    component: ModiComponent,
  },
];


@NgModule({
  declarations: [
    MainComponent,
    JoinModalComponent,
    LoginModalComponent,
    SectionComponent,
    AboutComponent,
    DetailComponent,
    BoardComponent,
    MyPageComponent,
    WriteComponent,
    ModiComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CKEditorModule,
    RouterModule.forChild(routes),
    
  ],
  exports: [ 
    SectionComponent,
    RouterModule,
  ]
})
export class SectionModule { }
