import styled from "@emotion/styled";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

const StyledLink = styled(Link)`
  margin-right: 30px;
  :hover {
    color: #eee;
  }
`;

export default function MenuLink(props: Props) {
  return <StyledLink href={props.href}>{props.title}</StyledLink>;
}
