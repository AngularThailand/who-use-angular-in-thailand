import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-th-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() repoUrl: string;
  @Input() repoName: string;
  @Input() footerText: string;
  constructor() { }

}
