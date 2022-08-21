import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsListComponent } from './pokemons/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemons/pokemon-details/pokemon-details.component';
import { MaterialModule } from '@pokemon-app/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnvironmentModule } from '@pokemon-app/environment';
import { environment } from '../environments/environment';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsListComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    EnvironmentModule.withEnvironment(environment),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
