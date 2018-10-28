import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {

  private navigationSource = new Subject<string>();

  public navigation$ = this.navigationSource.asObservable();

  setNavigation(navigation: string) {
    this.navigationSource.next(navigation);
  }
}
