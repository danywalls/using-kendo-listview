import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { frameworkUsage } from './data/data';
import { ChartStatsComponent } from './components/chart-stats/chart-stats.component';
import {
  ListViewModule,
  PagerSettings,
} from '@progress/kendo-angular-listview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartStatsComponent, ListViewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  country = frameworkUsage;

  public pagerSettings: PagerSettings = {
    previousNext: false,
    pageSizeValues: true,
    buttonCount: 9,
  };
  public pageSize = 2;
}
