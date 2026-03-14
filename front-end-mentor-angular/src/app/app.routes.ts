import { Routes } from '@angular/router';
import { ScoialLinksProfile } from './scoial-links-profile/scoial-links-profile';
import { ResultsSummaryComponent } from './results-summary-component/results-summary-component';

export const routes: Routes = [
  {
    path: 'social-links-profile',
    component: ScoialLinksProfile,
    title: 'Social Links Profile',
  },

  {
    path: 'results-summary-component',
    component: ResultsSummaryComponent,
    title: 'Results Summary Component',
  },
];
