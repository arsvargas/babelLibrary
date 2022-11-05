import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BibliotecarioComponent } from './bibliotecario/bibliotecario.component';
import { LeitorComponent } from './leitor/leitor.component';
import { HeaderComponent } from './header/header.component';
import { LivroComponent } from './livro/livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BibliotecarioComponent,
    LeitorComponent,
    HeaderComponent,
    LivroComponent,
    CadastrarLivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BibliotecarioComponent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
