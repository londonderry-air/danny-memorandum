import styled from "styled-components";
import { Link } from "./common";

export const VerticalLink = styled(Link)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotateZ(180deg);
`;
