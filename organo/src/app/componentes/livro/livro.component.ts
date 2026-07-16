import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {

  alterarFavorito(){
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: "O Sol é Para Todos",
    autoria: "Harper Lee",
    favorito: false,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XegWPObYY5IWw61xvlZaJ0w4lLYAKA6JJQ8dyTPuCg&s=10"
  }
}
