import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum';
import { initialState } from 'src/app/store/session.reducers';
import { SessionDataManager } from "../../../services/session.datamanager.service"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  categories: string[];

  constructor(private sessionDataManager:SessionDataManager) { 
    this.initializeCategories();
  }

  ngOnInit(): void {
  }

  initializeCategories(){    
    this.categories = Object.values(Categories);
  }

  showCategory(selectedCategory:string){
    this.sessionDataManager.setSelectedCategory$(selectedCategory);
  }
}
