import { trigger, state, transition, style, animate, keyframes, query, stagger } from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
    transition('void => *', [
      style({
        opacity: 0
      }),
      animate(500)
    ])
  ]);

export let listAnimation =  trigger('listAnimation', [
        transition('void => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('50ms', [
            animate('300ms ease-in', keyframes([
              style({opacity: 0, transform: 'translateX(-30%)', offset: 0}),
              style({opacity: .5, transform: 'translateX(0)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
        ]))]), {optional: true}),

        query(':leave', stagger('50ms', [
            animate('300ms ease-out', keyframes([
              style({opacity: 1, transform: 'translateX(0)', offset: 0}),
              style({opacity: .5, transform: 'translateX(0)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateX(-30%)',     offset: 1.0}),
            ]))]), {optional: true})
    ])
  ]);