import { useRecoilState } from "recoil";
import styled from "styled-components";
import { themeState } from "../../state/atoms";
import { THEMES } from "../../utils/variables";
import { Button } from "../common/button/common";

export const ThemeButton = () => {
  const [colors, setColors] = useRecoilState(themeState);
  const isLight = colors === THEMES.light;

  return (
    <_ThemeButton
      width={"40px"}
      height={"40px"}
      radius={"50%"}
      background={colors.text}
      onClick={() => {
        setColors(isLight ? THEMES.dark : THEMES.light);
      }}
    />
  );
};

const _ThemeButton = styled(Button)`
  transition: 0.2s;
  &:hover {
    transform: scale(1.08);
  }
`;
