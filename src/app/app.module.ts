import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './material/material.module';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieDetailsComponent, MovieListItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
