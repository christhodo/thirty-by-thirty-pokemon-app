import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsListComponent } from './pokemons/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemons/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PokemonsComponent,
    PokemonsListComponent,
    PokemonDetailsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
