import type { NextPage } from "next";
import { usePost } from "../hooks/usePost";
import { FlexBox } from "../components/common/box/flex";
import { _MainH, _Word } from "../components/common/text/common";
import { moduler } from "../utils/typo";
import { BorderBox } from "../components/common/box/border";
import { _BlogList } from "../components/portfolio/blog-list";
import { useRecoilValue } from "recoil";
import { themeState } from "../state/atoms";
import { ThemeButton } from "../components/portfolio/themeButton";

const Home: NextPage = () => {
  const { post: posts } = usePost("/blog");

  if (!posts || !Array.isArray(posts)) {
    return <></>;
  }

  return (
    <FlexBox way={"column"}>
      <Header />
      <FlexBox width={"100%"} way={"row"}>
        <_BlogList posts={posts} />
      </FlexBox>
    </FlexBox>
  );
};

export default Home;

const Header = () => {
  const colors = useRecoilValue(themeState);
  return (
    <FlexBox
      width={"100%"}
      way={"row"}
      justifyContent={"space-between"}
      margin={"10vh 0 0 0"}
    >
      <FlexBox width={"100%"} way={"column"} gap={"6px"}>
        <_MainH
          color={colors.text}
          family={"Zen Kaku Gothic New"}
          size={moduler(4)}
          weight={"700"}
        >
          ダニーの備忘録
        </_MainH>
        <BorderBox
          borderPosition={"left"}
          borderWidth={"6px"}
          borderColor={colors.border}
          borderStyle={"solid"}
          padding={"0 0 0 8px"}
        >
          <_Word
            color={colors.text}
            family={"Zen Old Mincho"}
            size={moduler(0)}
            weight={"900"}
          >
            danny's memorandom
          </_Word>
        </BorderBox>
      </FlexBox>
      <ThemeButton />
    </FlexBox>
  );
};
