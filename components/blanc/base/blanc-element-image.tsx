import { BlancFile } from "../../../types";
import { Image } from "../../common/image/common";

export const BlancElementImage = (props: {
  width: string;
  height: string;
  fit?: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  radius?: string;
  border?: {
    width?: string;
    style?: string;
    color?: string;
  };
  data: BlancImageElementProps;
}) => {
  if (!props.data.file) {
    props.data.file = {
      id: "",
      name: "",
      url: null,
      size: 0,
      width: 0,
      height: 0,
      created: new Date(),
      updated: new Date(),
    };
  }
  return (
    <Image
      src={props.data.file ? props.data.file.url ?? "" : ""}
      width={props.width}
      height={props.height}
      radius={props.radius}
      fit={props.fit}
      border={props.border}
    />
  );
};

export type BlancImageElementProps = {
  file?: BlancFile;
};
