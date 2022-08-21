import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pokemon } from '../../common/models/pokemon';

@Component({
  selector: 'pokemon-app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
