import { ActionTypes, AppState } from "./types";

const initialState: AppState = {
  cards: [],
};

const rootReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "ADD_CARD":
      const newCard = action.payload;

      return {
        ...state,
        cards: [...state.cards, newCard],
      };
    case "SORT_CARDS":
      const sortedCards = [...state.cards].sort((a, b) => a - b);

      return {
        ...state,
        cards: sortedCards,
      };
    case "DELETE_CARD":
      const cardToDelete = action.payload;
      const filteredCards = state.cards.filter(
        (card: number) => card !== cardToDelete
      );

      return {
        ...state,
        cards: filteredCards,
      };
    default:
      return state;
  }
};
export default rootReducer;
