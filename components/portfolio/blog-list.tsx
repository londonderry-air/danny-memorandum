import { useRecoilValue } from "recoil";
import { themeState } from "../../state/atoms";
import { Post } from "../../types";
import { moduler } from "../../utils/typo";
import { BorderBox } from "../common/box/border";
import { FlexBox } from "../common/box/flex";
import { _Word, _Sentence } from "../common/text/common";
import { THEMES } from "../../utils/variables";
import { Link } from "../common/link/common";
import styled from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";
import { StackText } from "../common/text/stack";

export const _BlogListItem = (props: { post: Post }) => {
  const colors = useRecoilValue(themeState);
  const isMQ = useMediaQuery();
  return (
    <Article
      isMQ={isMQ}
      background={colors === THEMES.light ? colors.highlight : "transparent"}
    >
      <Link width="100%" height={"100%"} href={`/blog/${props.post.slug}`}>
        <HoverBorderBox
          width={"100%"}
          height={"100%"}
          borderPosition={"all"}
          borderWidth={"2px"}
          borderStyle={"solid"}
          borderColor={colors.border}
          padding={"12px"}
          radius={"6px"}
          overflow={{ x: "hidden" }}
          hoverBorderColor={
            colors === THEMES.dark ? colors.highlight : colors.border
          }
        >
          <FlexBox height={"100%"} way={"column"} padding={"1em"} gap={"12px"}>
            <FlexTextBox
              width={"100%"}
              borderPosition={"bottom"}
              borderWidth={"2px"}
              borderStyle={"dashed"}
              borderColor={colors.border}
              padding={"0 0 12px 0"}
            >
              <_Word
                size={moduler(-1)}
                weight={"700"}
                v_space={"1.6em"}
                h_space={"0.04em"}
                family={"Zen Kaku Gothic New"}
                color={colors.text}
              >
                {props.post.title}
              </_Word>
            </FlexTextBox>
            <FlexBox way={"row"}>
              <FlexBox way={"row"} gap={"10px"} alignItems={"center"}>
                <StackText
                  top={"公開日"}
                  bottom={"RELEASE"}
                  size={-3}
                  color={colors.text}
                  isCenter={true}
                />
                <_Word
                  size={moduler(-1)}
                  weight={"700"}
                  v_space={"1.6em"}
                  h_space={"0.04em"}
                  family={"Zen Kaku Gothic New"}
                  color={colors.text}
                >
                  Feb 9, 2021
                </_Word>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </HoverBorderBox>
      </Link>
    </Article>
  );
};

export const _BlogList = (props: { posts: Post[] }) => {
  return (
    <FlexBox width={"100%"} way={"row"} wrap={"wrap"} alignItems={"stretch"}>
      {props.posts.map((post) => (
        <_BlogListItem post={post} />
      ))}
    </FlexBox>
  );
};

const Article = styled.article<{ isMQ: boolean; background: string }>`
  width: ${(props) => (props.isMQ ? "100%" : "32%")};
  display: flex;
  align-items: stretch;
  margin-top: 2em;
  cursor: pointer;
  transition: 0.2s;

  &:nth-of-type(3n - 1) {
    margin: ${(props) => (props.isMQ ? "2em 0 0 0 " : "2em 2% 0 2%")};
  }

  &:hover {
    background: ${(props) => props.background};
    transform: scale(1.03);
  }
`;

const HoverBorderBox = styled(BorderBox)<{ hoverBorderColor: string }>`
  &:hover {
    border-color: ${(props) => props.hoverBorderColor};
  }
`;

const FlexTextBox = styled(BorderBox)`
  flex: 1;
`;

const SkewWord = styled(_Word)`
  transition: 0.6s;

  &:hover {
    transform: skewX(3deg) skewY(-1deg);
    filter: drop-shadow(16px 16px 20px gray);
  }
`;
