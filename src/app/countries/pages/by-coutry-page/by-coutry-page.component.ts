import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-coutry-page',
  templateUrl: './by-coutry-page.component.html',
  styles: ``
})
export class ByCoutryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';

  constructor( private countriesService: CountriesService){}



  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
    this.initialValue = this.countriesService.cacheStore.byCountries.term
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries
    })

    console.log('Desde BycountryPage')
    console.log({term})
  }

}
