import { Grid, Typography } from "@mui/material";

const Instructions = () => {
  return (
    <Grid
      item
      sm={2}
      xs={1}
      borderLeft="1px solid black"
      height="100vh"
      display="flex"
      alignItems="center"
      px={1}
    >
      <Typography>
        Press the "add card" button to add the new card. Use the "sort cards" to
        sort the cards by the increase. Press an X icon on the top right to
        delete them.
      </Typography>
    </Grid>
  );
};

export default Instructions;
