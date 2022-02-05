import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.css']
})
export class TodoButtonDeleteAllComponent implements OnInit{

  @Input() isTaskListEmpty: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
