import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { ContentComponent } from './Components/Layout/content/content.component';
import { ServiceComponent } from './Components/service/service.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {
    path: 'home',
     component: ContentComponent,
     children: [
      {
        path: '',
       component: HomeComponent,
       children: [
        {path: '', component: UsersComponent},
        {path: 'User/:id/:name', component: UserComponent}
       ]
       },
      {path: 'Service', component: ServiceComponent},
      {path: 'Gallery', component: GalleryComponent},
      {path: 'About', component: AboutComponent},
      {path: 'Contact', component: ContactComponent}
     ]
  },
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
