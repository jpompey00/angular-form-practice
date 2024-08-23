import { Component, OnInit } from '@angular/core';
import { EntryCRUD } from '../../model/entry-crud';
import { routes } from '../entry.module';
import { EntryService } from '../../service/entry/entry.service';

@Component({
  selector: 'app-entry-listings',
  templateUrl: './entry-listings.component.html',
  styleUrl: './entry-listings.component.css',
})
export class EntryListingsComponent implements EntryCRUD, OnInit {
  localStorageItem = { ...localStorage };

  localStorageData: Array<Object> = [];

  routes = routes;
  navBar: string[] = ['Home', 'Create Listing', 'Listings'];

  constructor(private entryService: EntryService) {

  }
  ngOnInit(): void {
    this.populateLocalStorageArray();
  }

  //have this done when a button is pressed
  populateLocalStorageArray() {
    //clears the table when the page is loaded
    this.localStorageData = [];
    this.localStorageItem = { ...localStorage };
    for (let [key, value] of Object.entries(this.localStorageItem)) {
      this.localStorageData.push({ [key]: JSON.parse(value) });
    }
    return this.localStorageData;
  }

  updateEntry(index: number) {
    //want this to either load a form via modal or redirect to a form with filled in data that you can update,
    //with the things already pre entered so you may edit it.
    //best way to go about that?
    console.log(index);
    let itemToUpdate = this.localStorageData[index];
    let keyToUpdate = Object.keys(itemToUpdate)[0];
    this.entryService.sendDataToUpdate(parseInt(keyToUpdate))

    
    return {};
  }

  //currently doesn't delete it from the local storage
  deleteEntry(index: number) {
    let itemToRemove = this.localStorageData[index];
    let keyToRemove = Object.keys(itemToRemove)[0];
    localStorage.removeItem(keyToRemove);

    //Add code to delete it from the local storage after all else.

    if (localStorage.getItem(keyToRemove) == null) {
      //checks if it succeeded
      this.populateLocalStorageArray();
      console.log('deleted');
      return true;
    }
    //checks if it failed
    console.log('Error in deleting');
    return false;
  }

  onShowEntriesButtonClicked() {
    this.populateLocalStorageArray();
  }

  parseLocalStorageData(data: any) {
    //starts off in the same shape as item
    let dataKey: string = Object.keys(data)[0];
    return data[dataKey];
  }
}
