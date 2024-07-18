import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { frameworkUsage } from './data/data';
import { ChartStatsComponent } from './components/chart-stats/chart-stats.component';
import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartStatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  dataServer = frameworkUsage;
  countries: any = [];
  currentPage = 1;
  pageSize = 3;
  paginationService = inject(PaginationService);

  ngOnInit(): void {
    this.bindData();
  }

  bindData() {
    const paginatedResult = this.paginationService.paginateData(
      this.dataServer,
      this.currentPage,
      this.pageSize,
    );

    this.countries = paginatedResult.items;
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.bindData();
  }
}
