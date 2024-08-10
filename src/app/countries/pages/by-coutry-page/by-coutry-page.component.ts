import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-coutry-page',
  templateUrl: './by-coutry-page.component.html',
  styles: ``
})
export class ByCoutryPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService){}

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries
    })

    console.log('Desde BycountryPage')
    console.log({term})
  }

}
