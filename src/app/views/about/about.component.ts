import { AboutMeDescriptionComponent } from '@/app/components/about-me-description/about-me-description.component'
import { SocialMediaSectionComponent } from '@/app/components/social-media-section/social-media-section.component'
import { Component } from '@angular/core'

@Component({
  selector: 'app-about',
  imports: [SocialMediaSectionComponent, AboutMeDescriptionComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
