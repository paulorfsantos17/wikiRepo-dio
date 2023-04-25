import styled from "styled-components";

export const InputContainer  = styled.div`
  border: 1px solid #FAFAFA;
  border-radius: 1.2rem;

  height: 62px;
  width: 80%;
  
  input{
    background: transparent;
    border: 0;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    color: #fff;
  }

  input:focus {
    border: none;
    outline: none;
  }
`