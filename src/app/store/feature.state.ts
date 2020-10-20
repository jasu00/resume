import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromSessionReducers from "./session.reducers";
import { SessionState } from ".";


export interface FeatureState {
    sessionState: SessionState;    
}

export const featureReducer: ActionReducerMap<FeatureState> = {
    sessionState: fromSessionReducers.sessionReducer
};

export const getFeatureState = createFeatureSelector<FeatureState>("featureState");