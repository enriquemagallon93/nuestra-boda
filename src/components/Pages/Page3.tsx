import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Page3Wrapper, Page3Container } from "./styled";
import { Text } from "../Text";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image7 from "../../images/image7.jpeg";
import image8 from "../../images/image8.jpeg";
import image9 from "../../images/image9.jpeg";
import image10 from "../../images/image10.jpeg";
import image11 from "../../images/image11.jpeg";
import image12 from "../../images/image12.jpeg";
import image13 from "../../images/image13.jpeg";
import image14 from "../../images/image14.jpeg";
import image15 from "../../images/image15.jpeg";
import image16 from "../../images/image16.jpeg";
import image17 from "../../images/image17.jpeg";
import image18 from "../../images/image18.jpeg";
import image19 from "../../images/image19.jpeg";
import image20 from "../../images/image20.jpeg";
import image21 from "../../images/image21.jpeg";
import image22 from "../../images/image22.jpeg";
import image23 from "../../images/image23.jpeg";
import image24 from "../../images/image24.jpeg";
import image25 from "../../images/image25.jpeg";
import image26 from "../../images/image26.jpeg";
import image27 from "../../images/image27.jpeg";
import image28 from "../../images/image28.jpeg";
import image29 from "../../images/image29.gif";
import image30 from "../../images/image30.jpeg";
import image31 from "../../images/image31.jpeg";
import image32 from "../../images/image32.jpeg";
import image33 from "../../images/image33.jpeg";

const slideImages: ReactImageGalleryItem[] = [
  {
    original: image3,
  },
  {
    original: image4,
  },
  {
    original: image5,
  },
  {
    original: image7,
  },
  {
    original: image8,
  },
  {
    original: image9,
  },
  {
    original: image10,
  },
  {
    original: image11,
  },
  {
    original: image12,
  },
  {
    original: image13,
  },
  {
    original: image14,
  },
  {
    original: image15,
  },
  {
    original: image16,
  },
  {
    original: image17,
  },
  {
    original: image18,
  },
  {
    original: image19,
  },
  {
    original: image20,
  },
  {
    original: image21,
  },
  {
    original: image22,
  },
  {
    original: image23,
  },
  {
    original: image24,
  },
  {
    original: image25,
  },
  {
    original: image26,
  },
  {
    original: image27,
  },
  {
    original: image28,
  },
  {
    original: image29,
  },
  {
    original: image30,
  },
  {
    original: image31,
  },
  {
    original: image32,
  },
  {
    original: image33,
  },
].sort(function () {
  return Math.random() - 0.5;
});

export const Page3: React.FC = () => {
  return (
    <Page3Wrapper>
      <Page3Container>
        <Text fontSize="48px" paddingBottom="18px">
          Te esperamos
        </Text>
        <ImageGallery
          autoPlay
          slideInterval={5000}
          items={slideImages.map(({ original }) => ({
            original,
            thumbnail: original,
            fullscreen: original,
          }))}
        />
      </Page3Container>
    </Page3Wrapper>
  );
};
