import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageNumber = new EventEmitter<number>()
  previousPage(){
    if(this.currentPage > 0) {
      this.pageNumber.emit(this.currentPage - 1)
    }
  }
  nextPage(){
    if(this.currentPage + 1 < this.totalPages){
      this.pageNumber.emit(this.currentPage + 1)
    }
  }
  toFirstPage(){
    this.pageNumber.emit(0)
  }
  toLastPage(){
    this.pageNumber.emit(this.totalPages - 1)
  }
}
