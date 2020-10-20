import { createReducer, on, Action } from "@ngrx/store";
import { SessionState } from './index';
import * as SessionActions from "./session.actions";

export const initialState: SessionState = initializeSessionState();
export function initializeSessionState(): SessionState {
    return {
        selectedCategory: "Summary"
    }
}

export function sessionReducer(state: SessionState | undefined, action: Action) {
    return reducer(state, action);
}

export const reducer = createReducer(initialState,
    on(SessionActions.SetSelectedCategory, (state: SessionState, { selectedCategory }) => {
        return { ...state, selectedCategory: selectedCategory };
    })
);


export const getSelectedCategory = (state: SessionState) => state.selectedCategory;
