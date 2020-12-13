import { Component, Input, OnInit } from '@angular/core';
import { BASE_POSTER_URL } from 'src/app/utils/constants';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent implements OnInit {
  @Input() movie;

  posterBaseUrl: string = BASE_POSTER_URL;

  constructor() {}

  ngOnInit(): void {}
}
