import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: '**', redirectTo: '/pokemons' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
