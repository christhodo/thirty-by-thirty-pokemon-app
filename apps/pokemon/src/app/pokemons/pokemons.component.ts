import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../common/services/pokemons.service';
import { Pokemon, emptyPokemon } from '../common/models/pokemon';

@Component({
  selector: 'pokemon-app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  pokemons = [];
  pokemons$: any;
  selectedPokemon = emptyPokemon;
  originalName = '';

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  fetchPokemons() {
    this.pokemons$ = this.pokemonsService.all();
  }

  savePokemon(pokemon: Pokemon) {
    if (pokemon.id) {
      this.updatePokemon(pokemon);
    } else {
      this.createPokemon(pokemon);
    }
  }

  createPokemon(pokemon: Pokemon) {
    this.pokemonsService
      .create(pokemon)
      .subscribe((result) => this.fetchPokemons());
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemonsService
      .update(pokemon)
      .subscribe((result) => this.fetchPokemons());
  }

  deletePokemon(pokemonId) {
    console.log('DELETE HERO', pokemonId);
  }

  reset() {
    this.selectPokemon({ ...emptyPokemon });
  }
}
