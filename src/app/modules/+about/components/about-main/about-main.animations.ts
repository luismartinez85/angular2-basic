import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({}) ),
    state('*', style({}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({opacity: 0}),
      animate('0.5s ease-in-out', style({opacity: 1}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({opacity: 1}),
      animate('0.5s ease-in-out', style({opacity: 0}))
    ])
  ]);
}