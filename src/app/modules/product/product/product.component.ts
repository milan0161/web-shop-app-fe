import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  //tip ce da dobije kad se merge sa grandom gde sam dodao service i module i tad cu u product module da je importujem
}
