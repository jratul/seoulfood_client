"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NanumBarunGothic";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/NanumBarunGothic.ttf") format("ttf");
  }
  @font-face {
    font-family: "NanumBarunGothic";
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/NanumBarunGothicBold.ttf") format("ttf");
  }
  html,
  body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
    font-family: NanumBarunGothic;
  }

  .txt-c {
    text-align: center;
  }
  .txt-r {
    text-align: right;
  }
  .txt-l {
    text-align: left;
  }
  p {
    margin: 0;
  }
  .container-wrapper {
    padding: 10px;
  }
`;
