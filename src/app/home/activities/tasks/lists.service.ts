import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TaskComponent } from './list/task/task.component';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  public lists: Map<string, TaskComponent> = new Map<string, TaskComponent>();

  disabledListIdSource: Subject<string>;
  public disabledListId: Observable<string>;

  constructor() {
    this.disabledListIdSource = new Subject<any>();
    this.disabledListId = this.disabledListIdSource.asObservable();
  }

  setDisabledList(listId: string) {
    this.disabledListIdSource.next(listId);
  }
}
