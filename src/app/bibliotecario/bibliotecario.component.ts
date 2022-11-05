import { Component, OnInit } from '@angular/core';
import { livroTO } from './LivroTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.component.html',
  styleUrls: ['./bibliotecario.component.css']
})
export class BibliotecarioComponent implements OnInit {

  livro:any;
  listaLivros : livroTO[] = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.listaLivros = JSON.parse(localStorage["listaLivros"]);
  }

  selectLivro(livroEmDestaque: any) {
    localStorage.setItem("livroEmDestaque", JSON.stringify(livroEmDestaque))
    this.route.navigateByUrl('/livro');
    
  }

}
