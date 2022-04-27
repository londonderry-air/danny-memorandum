import {
  _MainH,
  _LargeH,
  _MidH,
  _SmallH,
  _Sentence,
  _Word,
} from "../../common/text/common";
import { Box } from "../../common/box/common";

export const BlancElementText = (props: {
  data: BlancTextElementProps;
  font: {
    size: string;
    weight: string;
    family?: string;
  };
  align?: "left" | "center" | "right";
  width?: string;
  background?: string;
  color?: string;
  padding?: string;
  placeholder?: string;
  v_space?: string;
  h_space?: string;
  markup: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}) => {
  if (!props.data.text) {
    props.data.text = "";
  }
  return (
    <Box
      width={props.width}
      height={"auto"}
      background={props.background}
      padding={props.padding}
    >
      {props.markup === "h1" && (
        <_MainH
          size={props.font ? props.font.size : "1em"}
          weight={props.font ? props.font.weight : "400"}
          family={props.font ? props.font.family : undefined}
          color={props.color}
          align={props.align}
          v_space={props.v_space}
          h_space={props.h_space}
        >
          {props.data.text}
        </_MainH>
      )}
      {props.markup === "h2" && (
        <_LargeH
          size={props.font ? props.font.size : "1em"}
          weight={props.font ? props.font.weight : "400"}
          family={props.font ? props.font.family : undefined}
          color={props.color}
          align={props.align}
          v_space={props.v_space}
          h_space={props.h_space}
        >
          {props.data.text}
        </_LargeH>
      )}
      {props.markup === "h3" && (
        <_MidH
          size={props.font ? props.font.size : "1em"}
          weight={props.font ? props.font.weight : "400"}
          family={props.font ? props.font.family : undefined}
          color={props.color}
          align={props.align}
          v_space={props.v_space}
          h_space={props.h_space}
        >
          {props.data.text}
        </_MidH>
      )}
      {props.markup === "h4" && (
        <_SmallH
          size={props.font ? props.font.size : "1em"}
          weight={props.font ? props.font.weight : "400"}
          family={props.font ? props.font.family : undefined}
          color={props.color}
          align={props.align}
          v_space={props.v_space}
          h_space={props.h_space}
        >
          {props.data.text}
        </_SmallH>
      )}
      {props.markup === "span" && (
        <_Word
          size={props.font ? props.font.size : "1em"}
          weight={props.font ? props.font.weight : "400"}
          family={props.font ? props.font.family : undefined}
          color={props.color}
          align={props.align}
          v_space={props.v_space}
          h_space={props.h_space}
        >
          {props.data.text}
        </_Word>
      )}
      {props.markup === "p" && (
        <_Sentence
          size={props.font ? props.font.size : "1em"}
          weight={props.font ? props.font.weight : "400"}
          family={props.font ? props.font.family : undefined}
          color={props.color}
          align={props.align}
          v_space={props.v_space}
          h_space={props.h_space}
        >
          {props.data.text}
        </_Sentence>
      )}
    </Box>
  );
};

export type BlancTextElementProps = {
  text?: string;
};
