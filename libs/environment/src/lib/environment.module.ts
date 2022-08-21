import { NgModule, ModuleWithProviders } from '@angular/core';

import { PokemonEnvironment } from './pokemons.model';
import { POKEMON_ENVIRONMENT } from './pokemons.token';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: PokemonEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: POKEMON_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
