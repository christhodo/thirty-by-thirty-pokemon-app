import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokemon';
  links = [{ path: '/pokemons', icon: 'view_list', title: 'Pokemons' }];
}
