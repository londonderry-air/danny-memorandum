import { Post } from "../../types";
import { BlancComponent, BlancElement } from "../../types/$element";
import { FlexBox } from "../common/box/flex";
import dynamic from "next/dynamic";

export const BlancArticle = (props: { post: Post }) => {
  console.log(props.post.elements);
  return (
    <FlexBox way={"column"} width={"100%"}>
      {props.post.elements.map((element) => {
        const Element = getElement(element.component);
        return (
          <Element
            post={props.post}
            key={element.id}
            id={element.id}
            component={element.component}
            data={element.data}
          />
        );
      })}
    </FlexBox>
  );
};

const getElement = (component: BlancComponent) => {
  const [group, name] = component.split("-");
  return dynamic<BlancElement>(
    () => import(`/components/blanc/${group}/blanc-element-${name}`)
  );
};
