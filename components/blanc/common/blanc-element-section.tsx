import { BlancElement } from "../../../types/$element";
import { useEffect, useRef, useState } from "react";
import { FlexBox } from "../../common/box/flex";
import { _Word } from "../../common/text/common";
import {
  BlancElementText,
  BlancTextElementProps,
} from "../base/blanc-element-text";
import { moduler } from "../../../utils/typo";
import { AlignBox } from "../../common/box/align";
import styled from "styled-components";
import { Box } from "../../common/box/common";
import { GRID } from "../../../utils/variables";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../state/atoms";

export const BlancCommonText = (props: BlancCommonTextProps) => {
  const [count, setCount] = useState(0);
  const isMQ = useMediaQuery();
  const colors = useRecoilValue(themeState);

  useEffect(() => {
    const elements = props.post.elements;
    for (let i = 0; i < elements.length; i++) {
      if ((elements[i] as BlancElement).id === props.id) {
        break;
      }
      if ((elements[i] as BlancElement).component === "common-section") {
        const newCount = count + 1;
        setCount(newCount);
      }
    }
  }, []);

  return (
    <Box
      id={props.id}
      position={"relative"}
      width={"100%"}
      margin={"0 0 1em 0"}
      padding={"2em 0 1em 0"}
    >
      <SideBox isMQ={isMQ}>
        <FlexBox way={"row"} gap={"1em"} alignItems={"center"}>
          <FlexBox
            way={"column"}
            width={"50px"}
            height={"50px"}
            radius={"5px"}
            alignItems={"center"}
            justifyContent={"center"}
            background={"#DEFF4A"}
          >
            <_Word size={moduler(1)} weight={"900"} family={"Zen Old Mincho"}>
              {zeroPadding(count + 1, 2)}
            </_Word>
          </FlexBox>
          <BlancElementText
            width={"90%"}
            data={props.data}
            color={colors.text}
            font={{
              size: isMQ ? moduler(0) : moduler(0),
              weight: "600",
              family: "Zen Kaku Gothic New",
            }}
            markup={"p"}
            placeholder={"テキストを入力してください"}
          />
        </FlexBox>
      </SideBox>
    </Box>
  );
};

export default BlancCommonText;

const zeroPadding = (numbering: number | string, count = 3) => {
  if (typeof numbering === "string") {
    return numbering.padStart(count, "0");
  } else if (typeof numbering === "number") {
    return numbering.toString().padStart(count, "0");
  } else {
    return "000";
  }
};

const SideBox = styled(Box)<{ isMQ: boolean }>`
  width: 100%;
`;

type BlancCommonTextProps = BlancElement & {
  data: BlancTextElementProps;
};
