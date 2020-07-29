import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {INote} from '../../models/note';

@Component({
  selector: 'app-matrix-card',
  templateUrl: './matrix-card.component.html',
  styleUrls: ['./matrix-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixCardComponent {
  @Input() note: INote;
  @Output() matCardClickEmitted: EventEmitter<INote> = new EventEmitter<INote>();
  @Output() deleteCardClickEmitted: EventEmitter<string> = new EventEmitter<string>();
  @Output() newNoteClickEmitted: EventEmitter<void> = new EventEmitter<void>();
}
