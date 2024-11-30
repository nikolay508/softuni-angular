import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: ToDo[], searchTerm: string): ToDo[] {
    if (!searchTerm) {
      return value;
    }
    const text = searchTerm.toLowerCase();
    return value.filter(todo => {
      return todo.title.toLowerCase().includes(text);
    })
  }

}
