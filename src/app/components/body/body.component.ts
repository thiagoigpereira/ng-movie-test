import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  searchForm!: FormGroup;
  movie: any;
  constructor(private movieService: MovieService, private fb: FormBuilder) {
  
  }


  ngOnInit() {
      this.searchForm = new FormGroup({
        search: new FormControl('')
      })
  }

  getMovie() {
    console.log(this.searchForm.value.search)
    this.movieService.searchMovie(this.searchForm.value.search).subscribe(
      result => {
        this.movie = result
      }
    )
  }

  addFavorites() {
    localStorage.setItem('Favorites', this.movie)
  }

}
