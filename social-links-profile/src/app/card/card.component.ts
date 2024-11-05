import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import { LinksComponent } from '../links/links.component';
import { NameLocationComponent } from '../name-location/name-location.component';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    ProfilePicComponent,
    NameLocationComponent,
    LinksComponent,
    BioComponent,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  imageUrl: string = 'assets/images/avatar-jessica.jpeg';
  title: string = 'Jessica Randall';
  description: string = 'London, United Kingdom';
  bio: string = 'Front-end developer and avid reader';
  links: string[] = [
    'Github',
    'Frontend Mentor',
    'LinkedIn',
    'Twitter',
    'Instagram',
  ];
}
