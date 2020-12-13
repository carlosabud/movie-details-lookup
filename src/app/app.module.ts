import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieListItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
