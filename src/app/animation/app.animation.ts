import { trigger, state, style, animate, transition } from '@angular/animations';

export class widthColumn {
    constructor() {
        return trigger('widthColumn', [
            state('inSpan7', style({
                position: 'relative',
                padding: '0 15px',
                width: '58.3333333333%',
                float: 'left'
            })),
            state('inSpan12', style({
                position: 'relative',
                padding: '0 15px',
                width: '100%',
                float: 'left'
            })),
            transition('inSpan7 => inSpan12', animate('300ms 300ms ease-out')),
            transition('inSpan12 => inSpan7', animate('500ms 300ms ease-in'))
        ]);
    }
}

export class opacity {
    constructor() {
        return trigger('opacity', [
            state('show', style({
                opacity: 0,
                position: 'relative',
                padding: '0 15px',
                width: '41.6666666667%',
                float: 'left'
            })),
            state('hide', style({
                opacity: 1
            })),
            transition('show => hide', animate('500ms 600ms ease-in')),
            transition('hide => show', animate('300ms 600ms ease-out'))
        ]);
    }
}