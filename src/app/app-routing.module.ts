import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BibliotecarioComponent } from './bibliotecario/bibliotecario.component';
import { LeitorComponent } from './leitor/leitor.component';
import { HeaderComponent } from './header/header.component';
import { LivroComponent } from './livro/livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bibliotecario', component: BibliotecarioComponent },
  { path: 'leitor', component: LeitorComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'cadastrar-livro', component: CadastrarLivroComponent },




  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
