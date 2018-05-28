import { Component, OnInit, TemplateRef } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { Util } from '../_helper/util';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import 'rxjs/add/operator/map';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public arrayPokemons: Array<any>;
  public pageDetail: any;
  public selected: any;
  public modalRef: BsModalRef;
  public currentPage = 4;
  page: number;

  constructor(
    private util: Util,
    private pokemonService: PokemonService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.pageDetail = { previous: '', next: '' };
    this.loadPokemons();
  }

  getPokemonImage(pokemonName: string) {
    return this.pokemonService.GetPokemonByName(pokemonName)
      .map((response) => {
        return response;
      });
  }
  
  loadPokemons(limit?, offset?) {
    this.pokemonService.List(limit, offset)
      .subscribe((response) => {
        let index = 0, lengthGroup = 4;
        this.pageDetail = response;
        this.arrayPokemons = this.pageDetail.results;


        this.arrayPokemons.forEach(element => {
          element.image = "https://i2.wp.com/g00glen00b.be/wp-content/uploads/2016/12/application-loader.gif";
          this.getPokemonImage(element.name).subscribe(result => {
            element.image = result.sprites.front_default;
            element.id = result.id;
          });

        });
      });
  }

  openModal(template: TemplateRef<any>, selected: any) {
    this.modalRef = this.modalService.show(template);
    this.selected = selected;
    console.log(selected);
  }

   pageChanged(event: any): void {
    let limit = event.itemsPerPage;
    let offset = event.page == 1 ? 0 : ((limit * event.page) - limit);
    this.loadPokemons(limit, offset);    
  }
}
