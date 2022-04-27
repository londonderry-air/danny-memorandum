import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import useWindowSize from "../../../hooks/useWindowSize";
import { themeState } from "../../../state/atoms";
import { BlancFile } from "../../../types";
import { BlancElement } from "../../../types/$element";
import { AlignBox } from "../../common/box/align";
import {
  BlancElementImage,
  BlancImageElementProps,
} from "../base/blanc-element-image";

export const BlancCommonImage = (props: BlancCommonImageProps) => {
  const colors = useRecoilValue(themeState);
  const winsize = useWindowSize();
  const boxRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [imgSize, setImgSize] = useState<{ width: string; height: string }>({
    width: "100%",
    height: "auto",
  });

  useEffect(() => {
    if (boxRef.current && props.data.file) {
      const imgWidth = boxRef.current.getBoundingClientRect().width;
      const imgHeight =
        ((props.data.file as BlancFile).height /
          (props.data.file as BlancFile).width) *
        imgWidth;
      setImgSize({
        width: `${imgWidth}px`,
        height: `${imgHeight}px`,
      });
    }
  }, [boxRef.current, winsize, props]);

  return (
    <AlignBox align={"center"} width={"100%"} margin={"0 0 1em 0"} ref={boxRef}>
      <BlancElementImage
        width={"100%"}
        height={imgSize.height}
        fit={"cover"}
        radius={"8px"}
        border={{
          width: "2px",
          color: colors.border,
          style: "solid",
        }}
        data={props.data}
      />
    </AlignBox>
  );
};

export default BlancCommonImage;

type BlancCommonImageProps = BlancElement & {
  data: BlancImageElementProps;
};
