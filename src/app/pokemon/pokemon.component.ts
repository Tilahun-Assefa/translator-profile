import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})
export class PokemonComponent {
  pokemonArr: Pokemon[] = [
    { id: 1, name: "Poke1", imageUrl: "../../assets/img/til.jpg", description: "Pokeman1" },
    { id: 2, name: "Poke2", imageUrl: "poke2", description: "Pokeman2" },
    { id: 3, name: "Poke3", imageUrl: "poke3", description: "Pokeman3" },
    { id: 4, name: "Poke4", imageUrl: "poke4", description: "Pokeman4" }
  ];
  selectedPokemon = new FormControl({ id: 1, name: "Poke1", imageUrl: "../../assets/img/til.jpg", description: "Pokeman1" });
  
  // onChangeSelected(pokemon: Pokemon) {
  //   console.log(pokemon.description);
  //   this.form.pokemon=pokemon;
  // }
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}