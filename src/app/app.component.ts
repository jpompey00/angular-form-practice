import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryModule } from './entry/entry.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
   // I don't think this is needed - HomeComponent,
    EntryModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ms-stanely-form-app';

}
