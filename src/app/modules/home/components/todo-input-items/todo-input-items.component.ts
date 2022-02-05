import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-input-items',
  templateUrl: './todo-input-items.component.html',
  styleUrls: ['./todo-input-items.component.css']
})
export class TodoInputItemsComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  public submitItemTaskList(){
    if(this.addItemTaskList.trim()){
      this.emmitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = ''
    }

  }
}
