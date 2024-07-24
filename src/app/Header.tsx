"use client";

import { AppBar, Container, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const MenuLink = styled(Link)`
  margin-right: 30px;
  :hover {
    color: #eee;
  }
`;

const TitleLink = styled(MenuLink)`
  font-weight: bold;
`;

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <TitleLink href="/">Seoul Food</TitleLink>
          <MenuLink href="/mypage">My Page</MenuLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
