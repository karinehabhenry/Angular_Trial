import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "../modules/head/head.component";
import { BodyComponent } from "../modules/body/body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEMO';
}
