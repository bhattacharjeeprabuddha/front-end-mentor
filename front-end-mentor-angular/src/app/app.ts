import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoialLinksProfile } from './scoial-links-profile/scoial-links-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScoialLinksProfile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-end-mentor-angular');
}
