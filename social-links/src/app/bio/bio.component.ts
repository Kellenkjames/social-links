import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [],
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent {
  @Input() bio!: string;
}
