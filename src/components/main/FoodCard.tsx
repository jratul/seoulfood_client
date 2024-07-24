import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { FoodData } from "@/types/food.types";

export default function FoodCard({ foodData }: { foodData: FoodData }) {
  return (
    <Card raised>
      <CardMedia
        component="img"
        height={200}
        image={foodData.imageUrl}
        alt={foodData.restaurantName}
      />
      <CardHeader
        title={foodData.restaurantName}
        subheader={foodData.location}
        titleTypographyProps={{ noWrap: true, color: "primary.light" }}
      />
    </Card>
  );
}
