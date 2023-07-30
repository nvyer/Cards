export const addCard = (number: number) => {
  return {
    type: "ADD_CARD",
    payload: number,
  };
};

export const sortCards = () => {
  return {
    type: "SORT_CARDS",
  };
};

export const deleteCard = (numberToDelete: number) => {
  return {
    type: "DELETE_CARD",
    payload: numberToDelete,
  };
};
