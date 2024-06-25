import {
  transition,
  state,
  style,
  animate,
  trigger,
} from '@angular/animations';

export const triggerToggleAnimation = trigger('toggleDropdown', [
  state(
    'open',
    style({
      transform: 'rotate(90deg)',
    })
  ),

  state(
    'closed',
    style({
      transform: 'rotate(0deg)',
    })
  ),
  transition('open => closed, closed => open', [animate('300ms')]),
]);

export const triggerDropdownAnimation = trigger('showOptions', [
  transition(':enter', [
    style({
      transform: 'translate(-50%,-50%)',
      opacity: 0,
    }),
    animate(
      '150ms',
      style({
        transform: 'translate(-50%,0)',
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translate(-50%,0)',
      opacity: 1,
    }),
    animate(
      '150ms',
      style({
        transform: 'translate(-50%,-50%)',
        opacity: 0,
      })
    ),
  ]),
]);
