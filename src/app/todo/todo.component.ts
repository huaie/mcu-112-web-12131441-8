import { Component, Emitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input({ required: true })
 content!: string ;

 @Input({ transform: booleanArrtribute })
hasFinisher!: boolean;
@Output()
readonly hasFinishedChange = new EventEmitter();

 onSetStatus(hasFinished: boolean): void {
   this.hasFinishedChange.emit(hasFinished);
 }
}