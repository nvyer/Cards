export interface AppState {
  cards: number[];
}

export interface AddCardAction {
  type: "ADD_CARD";
  payload: number;
}

export interface SortCardsAction {
  type: "SORT_CARDS";
}

export interface DeleteCardAction {
  type: "DELETE_CARD";
  payload: number;
}

export type ActionTypes = AddCardAction | SortCardsAction | DeleteCardAction;
