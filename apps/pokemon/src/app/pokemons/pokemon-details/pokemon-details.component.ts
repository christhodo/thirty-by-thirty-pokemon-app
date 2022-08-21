import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pokemon } from '../../common/models/pokemon';

@Component({
  selector: 'pokemon-app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  currentPokemon: Pokemon;
  originalName = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set pokemon(value) {
    if (!value) return;
    this.currentPokemon = { ...value };
    this.originalName = this.currentPokemon.name;
  }
}
