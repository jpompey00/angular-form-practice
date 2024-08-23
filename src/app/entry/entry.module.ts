import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListingsComponent } from './entry-listings/entry-listings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EntryService } from '../service/entry/entry.service';



@NgModule({
  declarations: [
    EntryFormComponent,
    EntryListingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ]
})
export class EntryModule { 

  constructor(entryService:EntryService){}
}
export const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: '../create', component:EntryFormComponent},
  {path: '../listings', component:EntryListingsComponent}
];