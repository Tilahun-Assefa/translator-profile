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
    { id: 3, name: "Poke3", imageUrl: "poke3", description: "Pokeman3" },
    { id: 4, name: "Poke4", imageUrl: "poke4", description: "Pokeman4" }
  ];
  selectedPokemon: FormControl = new FormControl(this.pokemonArr[0]);

  // onChangeSelected(pokemon: Pokemon) {
  //   console.log(pokemon.description);
  //   this.form.pokemon=pokemon;
  // }
  onPrev() {
    if (this.i > 0) {
      this.i--;
      this.selectedPokemon.setValue(this.pokemonArr[this.i]);
    } 
  }

  onNext() {
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