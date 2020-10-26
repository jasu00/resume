import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum';
import { initialState } from 'src/app/store/session.reducers';
import { SessionDataManager } from "../../../services/session.datamanager.service"
import {NavigationMenu} from "../../../model/navigation_menu"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  selectedCategory:string;
  categories: string[];

  constructor(private sessionDataManager:SessionDataManager) { 
    this.initializeCategories();
  }

  ngOnInit(): void {
    this.sessionDataManager.getSelectedCategory$().subscribe(selectedCategory=>{
      this.selectedCategory = selectedCategory;
    });
  }

  initializeCategories(){    
    this.categories = Object.values(Categories);
  }

  showCategory(selectedCategory:string){
    this.selectedCategory = selectedCategory;
    this.sessionDataManager.setSelectedCategory$(selectedCategory);
  }
}
