import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import {
  POKEMON_ENVIRONMENT,
  PokemonEnvironment,
} from '@pokemon-app/environment';

const BASE_URL = 'https://thirty-by-thirty-app.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  model = 'pokemons';

  constructor(
    private http: HttpClient,
    @Inject(POKEMON_ENVIRONMENT) private environment: PokemonEnvironment
  ) {}

  all() {
    return this.http.get<Pokemon[]>(this.getUrl());
  }

  find(id) {
    return this.http.get<Pokemon>(this.getUrlWithID(id));
  }

  create(pokemon) {
    return this.http.post<Pokemon>(this.getUrl(), pokemon);
  }

  update(pokemon) {
    return this.http.put<Pokemon>(this.getUrlWithID(pokemon.id), pokemon);
  }

  delete(id) {
    return this.http.delete<Pokemon>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
