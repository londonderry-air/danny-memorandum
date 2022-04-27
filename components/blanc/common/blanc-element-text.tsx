import { BlancElement } from "../../../types/$element";
import { AlignBox } from "../../common/box/align";
import { moduler } from "../../../utils/typo";
import {
  BlancElementText,
  BlancTextElementProps,
} from "../base/blanc-element-text";
import { themeState } from "../../../state/atoms";
import { useRecoilValue } from "recoil";

export const BlancCommonText = (props: BlancCommonTextProps) => {
  const colors = useRecoilValue(themeState);
  return (
    <AlignBox align={"center"} maxWidth={"60ch"} margin={"0 0 30px 0"}>
      <BlancElementText
        data={props.data}
        color={colors.text}
        font={{
          size: moduler(-1),
          weight: "400",
          family: "Zen Kaku Gothic New",
        }}
        markup={"p"}
        align={"left"}
        h_space={"0.06em"}
        v_space={"1.8em"}
        placeholder={"テキストを入力してください"}
      />
    </AlignBox>
  );
};

export default BlancCommonText;

type BlancCommonTextProps = BlancElement & {
  data: BlancTextElementProps;
};
