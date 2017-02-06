import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
  return trigger('routerTransition', [
    transition('void => *', [
        // when the component enters
      style({opacity: 0}),
      animate(500, style({opacity: 1}))
    ]),
    transition('* => void', [
        // when the component leaves
      animate(500, style({opacity: 0}))
    ])]
  );
}
