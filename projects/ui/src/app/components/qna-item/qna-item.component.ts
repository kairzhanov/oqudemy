import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Qna } from 'projects/oqudemy/src/app/core/models/qna.model';

@Component({
  selector: 'app-qna-item',
  templateUrl: './qna-item.component.html',
  styleUrls: ['./qna-item.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('rotated => default', animate('300ms ease-out')),
      transition('default => rotated', animate('300ms ease-in'))
    ]),
  ]
})
export class QnaItemComponent implements OnInit {

  @Input() question!: Qna;

  public isOpen: boolean = false;
  state: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

}
