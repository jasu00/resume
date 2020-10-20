import { createSelector } from "@ngrx/store";
import * as fromFeature from "./feature.state";
import * as fromSessionReducers from "./session.reducers";

export interface SessionState{
    selectedCategory:string;
}

//Create selector for SessionSate
export const getSessionState = createSelector(fromFeature.getFeatureState, (state: fromFeature.FeatureState) => state.sessionState);

//Create Selectors for the Session State data slice
export const getSelectedCategory = createSelector(getSessionState, fromSessionReducers.getSelectedCategory);
