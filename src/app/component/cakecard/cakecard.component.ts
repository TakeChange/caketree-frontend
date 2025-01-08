import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cakecard',
  standalone: false,
  
  templateUrl: './cakecard.component.html',
  styleUrl: './cakecard.component.scss'
})
export class CakecardComponent {
  @Input() ME:any;
}
