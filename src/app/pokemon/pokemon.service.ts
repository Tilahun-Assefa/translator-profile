import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);

  pokemons = signal<Pokemon[]>([
    { id: 1, name: "Poke1", imageUrl: "../../assets/img/til.jpg", description: "Pokeman1" },
    { id: 2, name: "Poke2", imageUrl: "https://picsum.photos/id/45/500/300", description: "Pokeman2" },
    { id: 3, name: "Poke3", imageUrl: "../../assets/icons/logo.svg", description: "Pokeman3" },
    { id: 4, name: "Poke4", imageUrl: "https://picsum.photos/id/46/500/300", description: "Pokeman4" }
  ]);

  selectedPokemon = signal<Pokemon | undefined>(undefined);
  
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}