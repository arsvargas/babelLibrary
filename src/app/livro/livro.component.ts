import { Component, OnInit } from '@angular/core';
import { livroTO } from '../bibliotecario/LivroTO';
import { Router } from '@angular/router';



@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro = {} as livroTO;
  listaLivros : livroTO[] = [];
  status:any;

  constructor(private route: Router) { }

  ngOnInit(): void {
   this.livro = JSON.parse(localStorage["livroEmDestaque"]);
   this.listaLivros = JSON.parse(localStorage["listaLivros"]);

  }

  atualizarStatus() {
    this.listaLivros.forEach((libro:livroTO, index)=> {
      if(libro.titulo ==  this.livro.titulo) {
          libro.status = this.status;        
      }
    })
    localStorage.setItem("listaLivros", JSON.stringify(this.listaLivros))
    this.route.navigateByUrl('/bibliotecario');
  }
  



  


}
