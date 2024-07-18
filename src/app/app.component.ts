import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { frameworkUsage } from './data/data';
import { JsonPipe } from '@angular/common';
import { ChartStatsComponent } from './components/chart-stats/chart-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ChartStatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'listview-charts';
  countries = frameworkUsage;
}
