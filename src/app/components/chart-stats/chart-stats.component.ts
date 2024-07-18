import { Component, input } from '@angular/core';
import { ChartModule } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-chart-stats',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-stats.component.html',
  styleUrl: './chart-stats.component.css',
})
export class ChartStatsComponent {
  data = input<Array<any>>([]);
  field = input<string>('field');
  category = input<string>('category');
}
