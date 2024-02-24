import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems!: number;
  page:number = 0
  @Input() totalPages!: number;
  @Output() pageNumber = new EventEmitter<number>()
  previousPage(){
    if(this.page > 0) {
      this.page -= 1
      this.pageNumber.emit(this.page)
    }
  }
  nextPage(){
    if(this.page + 1 < this.totalPages){
      this.page += 1
      this.pageNumber.emit(this.page)
    }
  }
  toFirstPage(){
    this.page = 0
    this.pageNumber.emit(this.page)
  }
  toLastPage(){
    this.page = this.totalPages - 1
    this.pageNumber.emit(this.page)
  }
}
