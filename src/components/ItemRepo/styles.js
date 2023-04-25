import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  

  h3{
    font-size: 2.5rem;
    color: #fafafa;
  }
  p{
    font-size: 1.25rem;
    color: #fafafa60;
  }

  a{
    text-decoration: none;
    color: #fafafa80;
    font-size: 1.2rem;
  }
  a.remove{
    text-decoration: none;
    color: red;
  }
  
  a:hover{
    text-decoration: underline;
  }

  hr{
    background-color: #fafafa60;
  }
`
export const ButtonsContainer  = styled.div`
  display: flex;
  gap: 1.5rem;
`


