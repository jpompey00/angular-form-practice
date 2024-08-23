import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry/entry-form/entry-form.component';
import { EntryListingsComponent } from './entry/entry-listings/entry-listings.component';
import { HomeComponent } from './home/home.component';
import { HttpTestComponent } from './http-test/http-test.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: 'create', component:EntryFormComponent},
    {path: 'listings', component:EntryListingsComponent},
    {path: 'http-test', component:HttpTestComponent}
];
