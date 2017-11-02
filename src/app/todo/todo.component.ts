import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTodo:string;
  newTodoObj:any;
  todos:any[];

  constructor() { 
    this.newTodo='';
    this.todos=[];
   
  }

  ngOnInit() {
  }

  addTodo(event){
 //console.log('Adding....');
  this.newTodoObj={
    newTodo:this.newTodo,
    completed:false
  }
  this.todos.push(this.newTodoObj);
  this.newTodo='';
  }

  deleteTodo(t){
    this.todos.splice(t,1);
  }
}
