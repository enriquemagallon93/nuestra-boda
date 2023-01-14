import React from "react";
import { Title, Page1Wrapper, Subtitle, Blur } from "./styled";

const { invitados = "" } = window.location.search
  .replace("?", "")
  .split("&")
  .reduce((query, keyValue) => {
    const [key = "", value = ""] = keyValue.split("=");
    if (!key) return query;
    return {
      ...query,
      [key]: value,
    };
  }, {} as Record<string, string>);

const [lastName, ...otherNames] = invitados
  .replace(/ ?, '/g, ",")
  .split(",")
  .reverse();

const personas = !lastName
  ? undefined
  : otherNames.length > 0
  ? `${otherNames.reverse().join(", ")} y ${lastName}`
  : lastName;

const isSingular = !personas || otherNames.length === 0;

console.log({ isSingular });

export const Page1: React.FC = () => {
  const message = `Brisa y Enrique ${
    isSingular ? "te" : "les"
  } tienen una noticia`;
  return (
    <Page1Wrapper>
      <Blur>
        {personas ? (
          <>
            <Title> Hola {personas}!</Title>
            <Subtitle>{message}</Subtitle>
          </>
        ) : (
          <Title>{message}</Title>
        )}
      </Blur>
    </Page1Wrapper>
  );
};
