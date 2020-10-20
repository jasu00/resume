import { createAction, props } from "@ngrx/store";

export const SetSelectedCategory = createAction(
    "Set Selected Category",
    props<{ selectedCategory: string }>()
);