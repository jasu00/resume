
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { getSelectedCategory, SessionState } from "../store/index";
import * as sessionActions from "../store/session.actions" 

@Injectable({ providedIn: 'root' })
export class SessionDataManager {

    constructor(private store: Store<SessionState>) { }

    getSelectedCategory$(): Observable<string> {
        return this.store.select(getSelectedCategory);
    }
    setSelectedCategory$(selectedCategory:string){
        return this.store.dispatch(sessionActions.SetSelectedCategory({selectedCategory:selectedCategory}));
    }
}