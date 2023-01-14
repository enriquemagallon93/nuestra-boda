import React, { useState } from "react";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.jpg";

import { Page1, Page2 } from "./components/Pages";

const pages = [
  {
    img: Image1,
    content: <Page1 />,
  },
  {
    img: Image2,
    content: <Page2 />,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AppStyled>
      {loading && <LoadPage />}
      {pages.map((page, index) => (
        <Page
          setLoading={setLoading}
          key={index}
          index={index}
          page={page}
        ></Page>
      ))}
    </AppStyled>
  );
};
