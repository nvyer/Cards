import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, IconButton, Paper, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { deleteCard } from "../redux/actions";
import { AppState } from "../redux/types";

const Item = styled(Paper)(() => ({
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  display: "flex",
  height: 200,
  width: 260,
  border: "1px solid black",
  position: "relative",
}));

const Cards = () => {
  const cards = useSelector((state: AppState) => state.cards);
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (number: number) => {
      dispatch(deleteCard(number));
    },
    [dispatch]
  );

  return (
    <Grid item sm={10} xs={10} sx={{ overflowY: "auto" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Grid container width={{ xs: 400, md: 600 }} spacing={4}>
          {cards.map((number) => (
            <Grid item md={6} xs={12} key={number}>
              <Item>
                {number}
                <IconButton
                  onClick={() => handleDelete(number)}
                  sx={{ position: "absolute", top: 0, right: 0 }}
                >
                  <CloseIcon />
                </IconButton>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Cards;
