import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-pagination-size',
  templateUrl: './pagination-size.component.html',
  styleUrls: ['./pagination-size.component.scss']
})
export class PaginationSizeComponent implements OnInit, AfterViewInit, OnDestroy{
  destroyed$: Subject<void> = new Subject<void>()
  @Input() perPageArray: number[] = []
  @Output() perPage = new EventEmitter<number>()
  paginationSize = new FormGroup({
    perPage:new FormControl<number>(0)
  })
  ngOnInit() {
    this.paginationSize.controls['perPage'].setValue(this.perPageArray[0])
  }
  ngAfterViewInit(){
    this.paginationSize.valueChanges.pipe(tap((value) => this.perPage.emit(value.perPage!)
    ), takeUntil(this.destroyed$)).subscribe()
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete()
  }
}
