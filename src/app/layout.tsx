import { Inter } from "next/font/google";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { GlobalStyle } from "../styles/global-styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-barun-gothic.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CssBaseline />
            <Header />
            <Container className="container-wrapper">{children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
