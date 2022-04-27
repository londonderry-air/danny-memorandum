import { BlancElement } from "../../../types/$element";
import styled from "styled-components";
import { moduler } from "../../../utils/typo";
import {
  BlancElementText,
  BlancTextElementProps,
} from "../base/blanc-element-text";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../state/atoms";

export const BlancCommonLink = (props: BlancCommonTextProps) => {
  const colors = useRecoilValue(themeState);

  if (!props.data.url) {
    props.data.url = {};
  }
  if (!props.data.title) {
    props.data.title = {};
  }

  return (
    <Wrap href={props.data.url.text} background={colors.cell}>
      <HeadWrap borderColor={colors.cellText}>
        <Word color={colors.cellText}>LINK</Word>
      </HeadWrap>
      <BlancElementText
        data={props.data.title}
        font={{ size: "1em", weight: "600", family: "Zen Kaku Gothic New" }}
        color={colors.cellText}
        markup={"p"}
        placeholder={"テキストを入力してください"}
      />
      <URLWrap>
        <URLWord color={colors.cellGrayText}>URL:</URLWord>
        <BlancElementText
          width={"100%"}
          data={props.data.url}
          font={{ size: moduler(-3), weight: "600", family: "Montserrat" }}
          color={colors.cellGrayText}
          markup={"p"}
          placeholder={"リンクを入力してください"}
        />
      </URLWrap>
    </Wrap>
  );
};

const Wrap = styled.a<{ background: string }>`
  max-width: 60ch;
  width: 100%;
  margin: 0 auto ${moduler(8)} auto;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background: ${(props) => props.background};
  text-decorarion: none;
  list-style-type: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const HeadWrap = styled.div<{ borderColor: string }>`
  border-left: solid 4px ${(props) => props.borderColor};
  padding-left: 6px;
`;

const Word = styled.span<{ color: string }>`
  display: block;
  color: ${(props) => props.color};
  font-family: Montserrat;
  font-weight: 800;
  font-size: ${moduler(-2)};
`;

const URLWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Montserrat;
  gap: 6px;
`;

const URLWord = styled.span<{ color: string }>`
  display: block;
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: ${moduler(-2)};
`;

export default BlancCommonLink;

type BlancCommonTextProps = BlancElement & {
  data: {
    title: BlancTextElementProps;
    url: BlancTextElementProps;
  };
};
