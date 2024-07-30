import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  List = [
    { label: 'Name', value: 'Karin Ehab' },
    { label: 'Academic Year', value: 'Year 3' },
    { label: 'Goals', value: 'My own Startup' },
    { label: 'Hobbies', value: 'Squash' },
    { label: 'Technologies', value: 'Microsoft' }
  ];
}

