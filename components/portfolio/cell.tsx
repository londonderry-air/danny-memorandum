import { BorderBox } from "../common/box/border";
import { FlexBox } from "../common/box/flex";
import { _Word, _Sentence } from "../common/text/common";
import { moduler } from "../../utils/typo";
import { useRecoilValue } from "recoil";
import { themeState } from "../../state/atoms";

export const Cell = (props: { text: string; size?: string }) => {
  const colors = useRecoilValue(themeState);
  return (
    <BorderBox
      height={"40px"}
      borderPosition={"all"}
      borderWidth={"1px"}
      borderStyle={"solid"}
      borderColor={colors.border}
      padding={"0 1em"}
      overflow={{ x: "hidden" }}
      radius={"20px"}
    >
      <FlexBox
        way={"row"}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <_Word
          size={props.size ?? moduler(-4)}
          weight={"700"}
          h_space={"0.04em"}
          family={"Montserrat"}
          color={colors.text}
        >
          {props.text}
        </_Word>
      </FlexBox>
    </BorderBox>
  );
};
