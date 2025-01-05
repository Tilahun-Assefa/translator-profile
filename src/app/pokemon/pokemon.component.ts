import { Component } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  imports: [ReactiveFormsModule],
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})
export class PokemonComponent {
  i: number = 0;
  classVal: boolean = false;
  pokemonArr: Pokemon[] = [
    { id: 1, name: "Poke1", imageUrl: "../../assets/img/til.jpg", description: "Pokeman1" },
    { id: 2, name: "Poke2", imageUrl: "https://picsum.photos/id/45/500/300", description: "Pokeman2" },
    { id: 3, name: "Poke3", imageUrl: "../../assets/icons/logo.svg", description: "Pokeman3" },
    { id: 4, name: "Poke4", imageUrl: "https://picsum.photos/id/49/500/300", description: "Pokeman4" }
  ];
  selectedPokemon: FormControl = new FormControl(this.pokemonArr[0]);

  onPrev() {
    this.i = (this.selectedPokemon.value?.id -1) || 0;
    if (this.i > 0) {
      this.i--;
      this.selectedPokemon.setValue(this.pokemonArr[this.i]);
    }
  }

  onNext() {
    this.i = this.selectedPokemon.value.id-1 || 0;
    if (this.i < this.pokemonArr.length - 1) {
      this.i++;
      this.selectedPokemon.setValue(this.pokemonArr[this.i]);
    }
  }
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}