import { Routes } from '@angular/router';
import { ScoialLinksProfile } from './scoial-links-profile/scoial-links-profile';
import { ResultsSummaryComponent } from './results-summary-component/results-summary-component';
import { ProfileCardComponent } from './profile-card-component/profile-card-component';
import { FourCardFeatureComponent } from './four-card-feature-component/four-card-feature-component';

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

  {
    path: 'profile-card-component',
    component: ProfileCardComponent,
    title: 'Profile Card Component',
  },

  {
    path: 'four-card-feature-component',
    component: FourCardFeatureComponent,
    title: 'Four Card Feature Component',
  },
];
