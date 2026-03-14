import { Component } from '@angular/core';
import summaryData from './data.json';

@Component({
  selector: 'app-results-summary-component',
  imports: [],
  templateUrl: './results-summary-component.html',
  styleUrl: './results-summary-component.css',
})
export class ResultsSummaryComponent {
  getAverageScore() {
    return Math.round(summaryData.map((data) => data.score).reduce((acc, val) => acc + val, 0) / 4);
  }

  getScoreByCategory(category: 'Reaction' | 'Memory' | 'Verbal' | 'Visual') {
    return summaryData.find((data) => data.category === category)?.score;
  }
}
