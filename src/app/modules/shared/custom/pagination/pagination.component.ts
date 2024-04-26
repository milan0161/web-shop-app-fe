import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageNumber = new EventEmitter<number>();
  totalPagesArray: number[] = [];
  pagesToRender: number[] = [];
  gap = 3;
  start = 0;
  end = this.gap;

  ngOnInit(): void {
    this.setTotalPagesArray();
    this.setInititalPagesToRender(this.start, this.end);
    console.log(this.currentPage);
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.pageNumber.emit(this.currentPage - 1);
      if (this.currentPage + 3 === this.end && this.start > 0) {
        this.start -= this.gap;
        this.end -= this.gap;
        this.setInititalPagesToRender(this.start, this.end);
      }
    }
  }
  nextPage() {
    if (this.currentPage + 1 < this.totalPages) {
      this.pageNumber.emit(this.currentPage + 1);
      if (this.currentPage + 1 === this.end) {
        this.start = this.end;
        this.end += this.gap;
        this.setInititalPagesToRender(this.start, this.end);
      }
    }
  }
  toFirstPage() {
    this.pageNumber.emit(0);
  }
  toLastPage() {
    this.pageNumber.emit(this.totalPages - 1);
  }

  private setTotalPagesArray() {
    this.totalPagesArray = Array.from<number>({ length: this.totalPages }).map(
      (_, index) => index
    );
  }

  private setInititalPagesToRender(start: number, end: number) {
    this.pagesToRender = this.totalPagesArray.slice(start, end);
  }
}
