import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-th-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() logo: string;
  @Input() titleEn: string;
  @Input() titleTh: string;
  @Input() actionUrl: string;
  @Input() actionName: string;
  constructor() { }
}
