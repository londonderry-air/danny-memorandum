import { Box } from "./common";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../state/atoms";
import useMediaQuery from "../../../hooks/useMediaQuery";

export const _WindowBox = styled(Box)`
  width: 100vw;
  height: 100dvh;
  height: 100vh;
`;

export const WindowBox = (props: { children?: React.ReactNode }) => {
  const colors = useRecoilValue(themeState);
  const isMQ = useMediaQuery()
  return (
    <_WindowBox
      background={colors.background}
      padding={`0 ${isMQ ? 100 / 16 : 100 / 12}%`}
      overflow={{ y: "scroll" }}
    >
      {props.children}
    </_WindowBox>
  );
};
