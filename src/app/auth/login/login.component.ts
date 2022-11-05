import { Component, OnInit } from '@angular/core';
import { userTO } from './userTO';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { livroTO } from 'src/app/bibliotecario/LivroTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any;
  senha: any;
  user = {} as userTO;


  listaUsuarios : userTO[] = [{id: 1, nome: "Bruno Vargas", login: "bruno", senha: "bruno", perfil: "bibliotecario" },
  {id: 2, nome: "Amanda Vargas", login: "amanda", senha: "amanda", perfil: "leitor"}];

  listaLivros : livroTO[] = [
    { titulo: "O Hobbit", tipo: "Fantasia", autores: "J. R. R. Tolkien", ano: "1937", status: "Disponível", resumo: "Prelúdio de 'O Senhor dos Anéis', 'O Hobbit' conquistou sucesso imediato quando foi publicado em 1937. Vendeu milhões de cópias em todo o mundo e estabeleceu-se como um clássico moderno e um dos livros mais influentes de nossa geração. Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem à sua porta e levam-no para uma expedição. Eles têm um plano para roubar o tesouro guardado por Smaug, o Magnífico, um grande e perigoso dragão. Bilbo reluta muito em participar da aventura, mas acaba surpreendendo até a si mesmo com sua esperteza e sua habilidade como ladrão! Tradução de Lenita Maria Rímoli Esteves."},
    { titulo: "O Silmarillion", tipo: "Fantasia", autores: "J. R. R. Tolkien", ano: "1977", status: "Emprestado", resumo: "O Silmarillion é o relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de O Senhor dos Anéis e O Hobbit olham para trás, e em cujos eventos alguns deles, como Elrond e Galadriel, tomaram parte. Os contos de O Silmarillion se passam na época em que Morgoth, o Primeiro Senhor Sombrio, habitava a Terra-média, e os Altos-Elfos guerreavam contra ele pela recuperação das Silmarils, as joias que continham a pura luz de Valinor. O livro começa com o Ainulindalë, o mito da criação do Universo, seguido pelo Valaquenta, onde estão descritas a natureza e os poderes de cada um dos deuses. Em o “Quenta Silmarillion” há o início da contagem dos dias em Arda (o mundo onde está inserido o continente da Terra-média), a história dos Elfos na Terra Abençoada do Oeste, seus êxodos e o desenrolar das guerras élficas em Beleriand, que culminaram com o final da Primeira Era. O Akallabêth narra o apogeu e a queda do reino da grande ilha de Númenor no final da Segunda Era. Por fim, Dos Anéis de Poder fala dos grandes eventos no final da Terceira Era, como narrado em O Senhor dos Anéis."},
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", tipo: "Fantasia", autores: "J. R. R. Tolkien", ano: "1954", status: "Reservado", resumo: "O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real. A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo. O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado. A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel. Alguém uma vez disse que o mundo dos leitores de língua inglesa se divide entre os que já leram O Senhor dos Anéis e os que um dia lerão o livro. Com esta nova tradução da obra, o fascínio dessa aventura atemporal ficará ainda mais evidente para os leitores brasileiros, tanto os que já conhecem a saga como os que estão prestes a descobrir seu encanto."},
    { titulo: " O Senhor dos Anéis: As Duas Torres", tipo: "Fantasia", autores: "J. R. R. Tolkien", ano: "1954", status: "Disponível", resumo: "O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um Anel, no qual está contida a maior parte do poder do tirano demoníaco imaginado por J.R.R. Tolkien. Um ataque-surpresa pôs fim à jornada conjunta da Sociedade do Anel. De um lado, o trio formado pelo elfo Legolas, pelo anão Gimli e por Aragorn, herdeiro da realeza dos Homens, tenta resgatar os jovens hobbits Merry e Pippin, capturados por guerreiros-órquicos. A busca pelos companheiros perdidos levará os três a confrontar os cavaleiros do reino de Rohan e o mago renegado Saruman, que também deseja o Um Anel para si. Enquanto isso, do outro lado das montanhas, Frodo e Sam buscam uma maneira de entrar em Mordor e chegar até a montanha onde o Anel foi forjado, único lugar onde é possível destruí-lo. Para isso, acabam recebendo a ajuda de seu mais improvável aliado: Gollum, a criatura que chegou a ter o Anel sob seu poder durante centenas de anos e que ainda é devorada, em corpo e alma, pelo desejo de voltar a possuí-lo."},
    { titulo: "O Senhor dos Anéis: O Retorno do Rei", tipo: "Fantasia", autores: "J. R. R. Tolkien", ano: "1955", status: "Disponível", resumo: "A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As batalhas grandiosas que estão prestes a acontecer, no entanto, são apenas o pano de fundo para o verdadeiro drama: a missão quase suicida dos hobbits Frodo e Sam, que tentam destruir o Um Anel, fonte do poder de Sauron, infiltrando-se no coração do território do Inimigo. Em O Retorno do Rei, acompanhamos o mago Gandalf e o hobbit Pippin em sua visita à a majestosa cidade de Minas Tirith, que já foi o principal baluarte dos Homens contra a ameaça de Sauron, mas que está prestes a sucumbir diante da força avassaladora do Senhor Sombrio. Outros membros da Sociedade do Anel se juntam a Aragorn, herdeiro da longa linhagem dos reis de Minas Tirith, na tentativa de evitar que a antiga capital do reino de Gondor seja destruída. Nas fronteiras de Mordor, Sam resgata Frodo, e os dois hobbits partem para o último estágio de sua jornada rumo ao Monte da Perdição, uma jornada que testará os limites do corpo e da mente dos pequenos heróis. O livro inclui ainda numerosos apêndices, nos quais Tolkien explora detalhes da história, das línguas, dos alfabetos e até dos calendários de seu mundo ficcional."},
  ];

  constructor(private route: Router) {
  }
  
  ngOnInit(): void {
    localStorage.setItem("listaLivros", JSON.stringify(this.listaLivros))
  }

  login() {

    if(this.usuario == "" ||  this.senha == "") {
      alert('Usuario ou Senha precisam ser informados!');
      return false;
    }
    debugger;
    this.getUser();
 
        if(this.user.perfil == "bibliotecario") {
          this.route.navigateByUrl('/bibliotecario');
          return false;
        } else if(this.user.perfil == "leitor") {
          this.route.navigateByUrl('/leitor');  
          return false;        
        }     
        return false;
  }

  private getUser() {

    this.listaUsuarios.forEach((user:userTO)=> {
      debugger;
      if(user.login == this.usuario &&  user.senha == this.senha) {
          this.user = user;
      }
    })  

  }

}
