import { Component } from '@angular/core'
import { AboutMeDescriptionComponent } from '@components/core/about-me-description/about-me-description.component'
import { SocialMediaSectionComponent } from '@components/core/social-media-section/social-media-section.component'

@Component({
  selector: 'app-about',
  imports: [SocialMediaSectionComponent, AboutMeDescriptionComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent { }
