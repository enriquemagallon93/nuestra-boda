import React from "react";
import { WrapperPage } from "./styled";
import { Parallax } from "react-parallax";
import { Divider } from "../Divider";
import { parseImgPath } from "./utils";

const IMAGE_LAST_NAME = "image6";

export const Page: React.FC<{
  page: { img?: string; content: JSX.Element };
  index: number;
  setLoading: Function;
}> = ({ page, index, setLoading }) => {
  return (
    <Parallax
      className=""
      strength={200}
      bgImage={page.img}
      bgImageStyle={{ top: index < 2 ? "-30%" : "-18%" }}
      onLoad={(e: Event) => {
        const img = e.target as HTMLImageElement;

        if (parseImgPath(img) === IMAGE_LAST_NAME) {
          setLoading(false);
        }
      }}
    >
      <WrapperPage index={index}>{page.content}</WrapperPage>
      {index !== 4 && <Divider />}
    </Parallax>
  );
};
