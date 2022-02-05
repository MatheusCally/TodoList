import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {
  
  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')
  constructor(private ref: ChangeDetectorRef) { }
  
  ngDoCheck(): void {
    console.log(this.taskList.length)
    this.setLocalStorage();
  }
  
  
  
  isTaskListEmpty(): boolean{
    if(this.taskList.length > 0){
      return false
    }
    return true
  }
  
  getBackgroundImage(): string{
    if(this.isTaskListEmpty()){
      return 'src/assets/img/bg-task.png'
    }
    return 'none'
  }
  
  deleteItemTaskList(index: number){
    this.taskList.splice(index,1)
    
  }
  
  deleteAllTaskList(){
    this.taskList = []
  }
  
  public setEmitTaskList(event:string){
    this.taskList.push({task: event,checked:false})
  }
  
  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((a,b) => Number(a.checked) - Number(b.checked))
      localStorage.setItem('list',JSON.stringify(this.taskList))
    }
  }
}
