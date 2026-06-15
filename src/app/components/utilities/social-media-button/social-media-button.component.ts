import { SocialNetwork } from '@/types'
import { Component, input } from '@angular/core'
import { IconsComponent } from '@components/utilities/icons/icons.component'

@Component({
  selector: 'app-social-media-button',
  imports: [IconsComponent],
  templateUrl: './social-media-button.component.html',
  styleUrl: './social-media-button.component.css',
})
export class SocialMediaButtonComponent {
  socialNetwork = input.required<SocialNetwork>()
}
