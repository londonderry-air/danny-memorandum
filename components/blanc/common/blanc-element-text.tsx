import { BlancElement } from "../../../types/$element";
import { AlignBox } from "../../common/box/align";
import {
  BlancElementText,
  BlancTextElementProps,
} from "../base/blanc-element-text";

export const BlancCommonText = (props: BlancCommonTextProps) => {
  return (
    <AlignBox align={"center"} maxWidth={"60ch"}>
      <BlancElementText
        data={props.data}
        font={{ size: "2em", weight: "600", family: "Zen Kaku Gothic New" }}
        padding={"30px"}
        markup={"p"}
        align={"center"}
        placeholder={"テキストを入力してください"}
      />
    </AlignBox>
  );
};

export default BlancCommonText;

type BlancCommonTextProps = BlancElement & {
  data: BlancTextElementProps;
};
