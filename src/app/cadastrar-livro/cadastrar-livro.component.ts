import { Component, OnInit } from '@angular/core';
import { livroTO } from '../bibliotecario/LivroTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

  livro = {} as livroTO;
  listaLivros : livroTO[] = [];


  titulo:any;
  tipo: any;
  autores: any;
  ano: any;
  status: any;
  resumo: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.listaLivros = JSON.parse(localStorage["listaLivros"]);
  }

  cadastrarLivro(): void {  
    this.livro.titulo = this.titulo;
    this.livro.tipo = this.tipo;
    this.livro.autores = this.autores;
    this.livro.ano = this.ano;
    this.livro.status = this.status;
    this.livro.resumo = this.resumo;
    this.listaLivros.push(this.livro);
    localStorage.setItem("listaLivros", JSON.stringify(this.listaLivros));   
    this.route.navigateByUrl('/bibliotecario');
  }
}
