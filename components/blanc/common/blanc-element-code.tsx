import { BlancElement } from "../../../types/$element";
import { AlignBox } from "../../common/box/align";
import { FlexBox } from "../../common/box/flex";
import { BorderBox } from "../../common/box/border";
import { _Sentence } from "../../common/text/common";
import {
  BlancElementText,
  BlancTextElementProps,
} from "../base/blanc-element-text";
import { moduler } from "../../../utils/typo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const BlancCommonCode = (props: { data: BlancCommonCodeProps }) => {
  
  if (!props.data.data) {
    props.data.data = {};
    props.data.data.codeName = {};
    props.data.data.code = {};
  }

  return (
    <AlignBox
      align={"center"}
      width={"100%"}
      maxWidth={"60ch"}
      margin={"0 0 2em 0"}
      radius={"4px"}
    >
      <FlexBox way={"column"} width={"100%"}>
        <BorderBox
          width={"100%"}
          borderWidth={"3px"}
          borderStyle={"solid"}
          borderPosition={"all"}
          borderColor={"rgb(40, 44, 52)"}
          background={"#DEFF4A"}
          padding={"0"}
        >
          <BlancElementText
            data={props.data.data.codeName}
            font={{ size: moduler(-1), weight: "600" }}
            padding={"10px 20px"}
            markup={"span"}
            align={"left"}
            placeholder={"テキストを入力してください"}
          />
        </BorderBox>
        <BorderBox
          width={"100%"}
          borderWidth={"3px"}
          borderStyle={"solid"}
          borderPosition={"all"}
          borderColor={"rgb(40, 44, 52)"}
          background={"rgb(40, 44, 52)"}
        >
          <SyntaxHighlighter
            language={getLang(props.data.data.codeName.text)}
            style={atomOneDark}
            customStyle={{
              margin: "0",
              padding: "2em 1em",
              fontSize: moduler(0),
              letterSpacing: "0.06em",
              lineHeight: "2em",
            }}
          >
            {props.data.data.code.text}
          </SyntaxHighlighter>
        </BorderBox>
      </FlexBox>
    </AlignBox>
  );
};

export default BlancCommonCode;

const getLang = (filename: string) => {
  const [, extension] = filename.split(".");
  switch (extension) {
    case "html":
      return "htmlbars";
    case "ts":
      return "typescript";
    case "tsx":
      return "typescript";
    case "js":
      return "javascript";
    case "jsx":
      return "javascript";
    case "css":
      return "css";
    case "swift":
      return "swift";
    case "json":
      return "json";
    case "yaml":
      return "yaml";
    default:
      return "text";
  }
};

type BlancCommonCodeProps = BlancElement & {
  data: {
    codeName: BlancTextElementProps;
    code: BlancTextElementProps;
  };
};
