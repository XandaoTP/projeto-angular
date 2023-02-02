import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(
    private pokeapiService : PokeapiService
  ) {}

  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe(
      res => res
    );
    
  }

}
