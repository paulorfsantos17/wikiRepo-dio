import React from "react";

import { ButtonsContainer, ItemContainer } from "./styles";

export const ItemRepo = ({title, description, url, removeRepo}) => {
  return (
    <ItemContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonsContainer>
        <a href={url} target="_blank" rel="noreferrer" >Ver Repositório</a>
        <a href="#rmv" className="remove" onClick={removeRepo}>
          Remover
        </a>
      </ButtonsContainer>
      <hr />
    </ItemContainer>
  );
};
