import { Grid, Typography } from "@mui/material";
import { FoodData } from "@/types/food.types";
import FoodCard from "@/components/main/FoodCard";

async function getFoodsData() {
  const res = await fetch(`${process.env.SERVER_URL}/foods`);

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function Home() {
  const foodsData = await getFoodsData();

  return (
    <>
      <Typography variant="h5" color="primary.dark">
        전체 음식
      </Typography>
      <Grid container spacing={2}>
        {foodsData.map((foodData: FoodData) => (
          <Grid item xs={3} key={foodData.menuId}>
            <FoodCard foodData={foodData} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
