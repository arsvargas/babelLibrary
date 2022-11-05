import { Component, OnInit } from '@angular/core';
import { livroTO } from '../bibliotecario/LivroTO'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.css']
})
export class LeitorComponent implements OnInit {

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
