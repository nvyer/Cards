import { useCallback } from "react";
import { addCard, sortCards } from "../redux/actions";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { generateUniqueRandomNumber } from "../utility/helper";

const Header = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: { cards: number[] }) => state.cards);

  const handleAdd = useCallback(() => {
    const newNumber = generateUniqueRandomNumber(cards);
    dispatch(addCard(newNumber));
  }, [cards, dispatch]);

  const handleSort = useCallback(() => {
    dispatch(sortCards());
  }, [dispatch]);

  return (
    <Grid
      item
      sm={1}
      xs={1}
      borderBottom="1px solid black"
      alignItems="center"
      display="flex"
      gap={2}
      pl={2}
    >
      <Button variant="contained" onClick={handleAdd}>
        add card
      </Button>
      <Button variant="contained" onClick={handleSort}>
        sort card
      </Button>
    </Grid>
  );
};

export default Header;
