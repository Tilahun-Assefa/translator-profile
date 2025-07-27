import { Component, inject, signal } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  imports: [ReactiveFormsModule],
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})
export class PokemonComponent {
  pokemanService = inject(PokemonService);
  
  // The index of the currently selected Pokemon in the pokemonArr array.
  i: number = 0;
  classVal: boolean = false;
  selectedPokemon=signal<Pokemon | undefined>(undefined);  

  pokemons = this.pokemanService.pokemons;
 
  // Using FormControl to manage the selected Pokemon
  selectedPokemonCtl: FormControl = new FormControl(this.selectedPokemon()||this.pokemons()[0]);

  constructor() {
    let index = this.selectedPokemonCtl?.value
      ? this.pokemons().findIndex(p => p.id === this.selectedPokemonCtl.value!.id)
      : -1;
    if (index !== -1) {
      this.i = index;   
      this.selectedPokemon.set(this.pokemons()[this.i]);
    }
  }
    
  onPrev() {
    // this.i = (this.selectedPokemonCtl.value?.id -1) || 0;
    if (this.i > 0) {
      this.i--;
      this.selectedPokemonCtl.setValue(this.pokemons()[this.i]);
    }
  }

  onNext() {
    // this.i = this.selectedPokemonCtl.value.id-1 || 0;
    if (this.i < this.pokemons().length - 1) {
      this.i++;
      this.selectedPokemonCtl.setValue(this.pokemons()[this.i]);
    }
  }
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}