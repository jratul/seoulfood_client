"use client";

import { AppBar, Container, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import MenuLink from "@/components/main/MenuLink";

const LogoImage = styled(Image)`
  margin-right: 10px;
`;

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Link href="/">
              <div>
                <LogoImage
                  src="/seoulfood-logo.png"
                  alt="SeoulFood"
                  width={150}
                  height={30}
                />
              </div>
            </Link>
          </div>
          <MenuLink href="/mypage" title="My Page" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
