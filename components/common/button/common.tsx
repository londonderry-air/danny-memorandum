import styled from "styled-components";

export const Button = styled.button<{
  width?: string;
  height?: string;
  background?: string;
  margin?: string;
  padding?: string;
  radius?: string;
  cursor?: string;
  pointerEvents?: NonNullable<
    JSX.IntrinsicElements["div"]["style"]
  >["pointerEvents"];
}>`
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "cursor: pointer;")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) =>
    props.pointerEvents ? `pointer-events: ${props.pointerEvents};` : ""}
${(props) => (props.background ? `background-color: ${props.background};` : "")}
`;
