"use client";

import { Card, CardHeader, CardMedia } from "@mui/material";
import { FoodData } from "@/types/food.types";
import styled from "@emotion/styled";

const HoverCard = styled(Card)(() => ({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.02)",
  },
  cursor: "pointer",
}));

export default function FoodCard({ foodData }: { foodData: FoodData }) {
  return (
    <HoverCard raised>
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
    </HoverCard>
  );
}
