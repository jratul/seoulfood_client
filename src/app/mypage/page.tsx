"use client";

import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function page() {
  const theme = useTheme();
  return (
    <>
      <h1>My Page</h1>
      나의 페이지입니다
      <br />
      {Object.entries(theme.palette).map(([color, info]) => (
        <>
          <Button color={color ?? "primary"} variant="contained">
            {color}
          </Button>
          <br />
        </>
      ))}
    </>
  );
}
