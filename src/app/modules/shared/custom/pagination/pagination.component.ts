import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page!:number;
  @Input() size!: number;
  @Output() pageNumber = new EventEmitter<number>()
  previousPage(){
    if(this.page > 0) this.pageNumber.emit(this.page - 1)
  }
  nextPage(){
    this.pageNumber.emit(this.page + 1)
  }
}
