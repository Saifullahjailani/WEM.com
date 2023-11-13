import React from "react";
import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  position: relative;
  h1 {
    font-size: 40px;
    font-weight: 600;
    color: #282d32;
    background-clip: text;
    -webkit-background-clip: text;
  }
  h2 {
    font-size: 30px;
    margin-top: 5px;
    color: #282d32;
    background-clip: text;
    -webkit-background-clip: text;
  }
  p {
    padding: 8px;
    color: #282d32;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 500;
    font-size: 20px;
  }

  li {
    padding-left: 2%;
    padding-top: 5px;
    color: #282d32;
    background-clip: text;
    -webkit-background-clip: text;
  }
  ul {
    list-style: none;
  }
`;
