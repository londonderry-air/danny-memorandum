import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { WindowBox } from "../components/common/box/window";
import { FlexBox } from "../components/common/box/flex";

function MyApp({ Component, pageProps }: AppProps) {
  return typeof window === "undefined" ? (
    <></>
  ) : (
    <>
      <RecoilRoot>
        <WindowBox>
          <FlexBox width={"100%"} height={"100%"} way={"row"}>
            <Component {...pageProps} />
          </FlexBox>
        </WindowBox>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
