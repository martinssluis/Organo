import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  livro = {
    titulo: "O Sol é Para Todos",
    autoria: "Harper Lee",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XegWPObYY5IWw61xvlZaJ0w4lLYAKA6JJQ8dyTPuCg&s=10"
  }
}
