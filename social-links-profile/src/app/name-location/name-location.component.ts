import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-location',
  standalone: true,
  imports: [],
  templateUrl: './name-location.component.html',
  styleUrls: ['./name-location.component.scss'],
})
export class NameLocationComponent {
  @Input() title!: string;
  @Input() description!: string;
}
