import styled from "styled-components";
import NextLink from "next/link";

const LinkBox = styled.a<{ width?: string; height?: string }>`
  display: block;
  width: ${(props) => props.width ?? "fit-content"};
  height: ${(props) => props.height ?? "auto"};
  cursor: pointer;
`;

export const Link = (props: {
  href: string;
  width?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <NextLink href={props.href}>
    <LinkBox
      className={props.className}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </LinkBox>
  </NextLink>
);
