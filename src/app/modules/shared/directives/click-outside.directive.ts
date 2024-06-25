import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject, filter, fromEvent, map, takeUntil } from 'rxjs';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter();
  private destroyed$ = new Subject<void>();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef
  ) {}
  ngAfterViewInit(): void {
    this.emitClickOutside();
  }

  isInside(clickElement: HTMLElement): boolean {
    return (
      clickElement === this.element.nativeElement ||
      this.element.nativeElement.contains(clickElement)
    );
  }

  protected emitClickOutside() {
    fromEvent(this.document, 'click')
      .pipe(
        filter((event) => {
          const target = event.target as HTMLElement;
          return !this.isInside(target);
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.clickOutside.emit());
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
