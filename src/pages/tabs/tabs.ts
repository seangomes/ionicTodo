import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { AddtodoPage } from '../addtodo/addtodo';
import { TodosPage } from './../todos/todos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodosPage;
  tab2Root: any = AddtodoPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
