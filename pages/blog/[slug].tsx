import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { Box } from "../../components/common/box/common";
import { FlexBox } from "../../components/common/box/flex";
import { _MainH, _Sentence, _Word } from "../../components/common/text/common";
import { themeState } from "../../state/atoms";
import { AlignBox } from "../../components/common/box/align";
import { moduler } from "../../utils/typo";
import { BorderBox } from "../../components/common/box/border";
import { usePost } from "../../hooks/usePost";
import { BlancArticle } from "../../components/blanc/elements";
import useMediaQuery from "../../hooks/useMediaQuery";
import { StackText } from "../../components/common/text/stack";
import styled from "styled-components";
import { Link } from "../../components/common/link/common";
import { zeroPadding } from "../../utils/string";

export const Page = () => {
  const colors = useRecoilValue(themeState);
  const router = useRouter();
  const isMQ = useMediaQuery();
  const { slug } = router.query;
  const { post } = usePost("/blog/" + slug);

  if (!post || Array.isArray(post)) {
    return <></>;
  }

  const sections = post.elements.filter(
    (elm) => elm.component === "common-section"
  );

  return (
    <ArticleBox
      align={"center"}
      width={isMQ ? "100%" : `${(100 / 10) * 7}%`}
      height={"100%"}
      minWidth={isMQ ? "none" : "60ch"}
      overflow={{ y: "scroll" }}
    >
      <FlexBox
        way={"column"}
        gap={"2em"}
        width={"100%"}
        padding={isMQ ? `${100 / 11}% 0` : `${100 / 11}%`}
      >
        <BorderBox
          width={"100%"}
          borderPosition={"bottom"}
          borderWidth={"2px"}
          borderStyle={"dashed"}
          borderColor={colors.border}
          padding={"1em 0"}
        >
          <FlexBox width={"100%"} way={"column"} gap={"2em"}>
            <_MainH
              size={isMQ ? moduler(6) : moduler(2)}
              weight={"600"}
              v_space={"1.6em"}
              h_space={"0.04em"}
              family={"Zen Kaku Gothic New"}
              color={colors.text}
            >
              {post.title}
            </_MainH>
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
        </BorderBox>
        <BorderBox
          width={"100%"}
          borderPosition={"bottom"}
          borderWidth={"2px"}
          borderStyle={"dashed"}
          borderColor={colors.border}
          padding={"0 0 2em 0"}
        >
          <FlexBox way={"column"} gap={moduler(4)}>
            <BorderBox
              borderPosition={"left"}
              borderWidth={"6px"}
              borderColor={"#1C1D21"}
              borderStyle={"solid"}
              padding={"0 0 0 8px"}
            >
              <StackText
                top={"目次"}
                bottom={"CONTENT"}
                size={-1}
                weight={"800"}
                color={colors.text}
                isCenter={false}
              />
            </BorderBox>
            <FlexBox way={"column"} gap={"1em"}>
              {sections.length === 0 && (
                <_Word
                  size={moduler(-1)}
                  weight={"700"}
                  v_space={"1.6em"}
                  h_space={"0.04em"}
                  family={"Zen Kaku Gothic New"}
                  color={colors.text}
                >
                  目次がない記事のようです
                </_Word>
              )}
              {sections.map((elm, i) =>
                elm.component === "common-section" ? (
                  <ContentListItem
                    numbering={i + 1}
                    id={elm.id}
                    text={elm.data.text}
                  />
                ) : (
                  <></>
                )
              )}
            </FlexBox>
          </FlexBox>
        </BorderBox>
        {post.metaDescription && (
          <Box width={"100%"}>
            <_Sentence
              size={moduler(-2)}
              weight={"500"}
              v_space={"1.8em"}
              h_space={"0.02em"}
              family={"'Zen Kaku Gothic New'"}
              color={colors.grayText}
            >
              {post.metaDescription}
            </_Sentence>
          </Box>
        )}
        <FlexBox way={"column"} width={"100%"}>
          <BlancArticle post={post} />
        </FlexBox>
        <BorderBox
          width={"100%"}
          borderPosition={"top"}
          borderWidth={"2px"}
          borderStyle={"dashed"}
          borderColor={colors.border}
          padding={"2em 0 0 0"}
        >
          <FlexBox way={"column"} width={"100%"} alignItems={"center"}>
            <_Sentence
              size={moduler(0)}
              weight={"800"}
              v_space={"1.8em"}
              h_space={"0.02em"}
              family={"'Zen Kaku Gothic New'"}
              align={"center"}
              color={colors.text}
            >
              {`🙏\nThank you for reading!`}
            </_Sentence>
          </FlexBox>
        </BorderBox>
      </FlexBox>
    </ArticleBox>
  );
};

export default Page;

const ContentListItem = (props: {
  numbering: number;
  id: string;
  text: string;
}) => {
  const colors = useRecoilValue(themeState);
  return (
    <Link width={"100%"} href={`#${props.id}`}>
      <HighlightFlexBox
        way={"row"}
        gap={"1em"}
        alignItems={"center"}
        hover={{
          background: colors.highlight,
          text: colors.text,
        }}
      >
        <HighlightBox
          background={colors.text}
          color={colors.background}
          radius={"4px"}
          hover={{
            background: colors.highlight,
            text: colors.text,
          }}
        >
          {zeroPadding(props.numbering, 2)}
        </HighlightBox>
        <_Word
          size={moduler(0)}
          weight={"700"}
          v_space={"1.6em"}
          h_space={"0.04em"}
          family={"Zen Kaku Gothic New"}
          color={colors.text}
        >
          {props.text}
        </_Word>
      </HighlightFlexBox>
    </Link>
  );
};

const HighlightFlexBox = styled(FlexBox)<{
  hover: {
    text: string;
    background: string;
  };
}>`
  &:hover {
    > div {
      background: ${(props) => props.hover.background};
      color: ${(props) => props.hover.text};
      transition: 0.2s;

      span {
        color: ${(props) => props.hover.text};
        opacity: 0.5;
      }
    }
  }
`;

const HighlightBox = styled(Box)<{
  hover: {
    text: string;
    background: string;
  };
}>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-family: Zen Old Mincho;
  font-size: ${moduler(-1)};

  span {
    color: ${(props) => props.color};
  }

  &:hover {
    background: ${(props) => props.hover.background};
    color: ${(props) => props.hover.text};

    span {
      color: ${(props) => props.hover.text};
    }
  }
`;

const ArticleBox = styled(AlignBox)`
  opacity: 0.5;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(30px) skewY(2deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0px) skewY(0deg);
    }
  }

  &::-webkit-scrollbar-track-piece {
    background: aqua;
  }
`;
