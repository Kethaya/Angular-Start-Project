import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { ContentComponent } from './Components/Layout/content/content.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { ServiceComponent } from './Components/service/service.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ServiceComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    ErrorPageComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
