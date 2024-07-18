import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {countriesData} from "./data/data";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listview-charts';
  countries = countriesData;
}
