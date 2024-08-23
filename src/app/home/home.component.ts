import { booleanAttribute, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {routes} from '../app.routes';
import { CommonModule } from '@angular/common';
import { EntryService } from '../service/entry/entry.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  routes = routes;
  navBar: string[] = ["Home", "Create Listing", "Listings", "HttpTesting"]
  
  //this is dependecy injection
  constructor(private entrySerivce : EntryService,

  ){

  }
  
  ngOnInit(): void {
    //so the message appears when the page is loaded
    this.entrySerivce.setAlert(false);
  }

  onLoadDatabaseButtonClicked(){
    this.entrySerivce.loadRandomDatabase();
  }

  onClearLocalStorageClicked() {
    this.entrySerivce.clearLocalStorage();
  }

}
