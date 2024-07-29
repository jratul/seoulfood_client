"use client";

import { AppBar, Box, Container, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const ImageButton = styled(Image)`
  margin-right: 10px;
`;

const MenuLink = styled(Link)`
  margin-right: 30px;
  :hover {
    color: #eee;
  }
`;

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Link href="/">
            <div>
              <ImageButton
                src="/seoulfood-logo.png"
                alt="SeoulFood"
                width={150}
                height={30}
              />
            </div>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <MenuLink href="/mypage">My Page</MenuLink>
          <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/users/google`}>
            <div>
              <ImageButton
                src="/google-oauth-btn.png"
                alt="google sign in"
                width={150}
                height={30}
              />
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
