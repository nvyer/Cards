export const generateUniqueRandomNumber = (cards: number[]): number => {
  let newNumber: number;
  do {
    newNumber = Math.floor(Math.random() * 1000);
  } while (cards.includes(newNumber));

  return newNumber;
};
