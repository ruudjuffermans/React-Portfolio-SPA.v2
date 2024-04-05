import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 18px;
  border-radius: 5px;
  border: 1px solid #2d2d2d;
  transition: border 0.2s ease;
  font-size: 14px;
  /* height: 150px; */
  height: 100%;
  background-color: #1c1c1c;
  box-shadow: 0 2px 3px #0000003d;

  &:hover {
    border: 1px solid #4c4c4c;
    :first-child {
      background: radial-gradient(
        100% 100% at 0% 0%,
        hsla(0, 0%, 100%, 0.05),
        transparent
      );
    }
  }

  @media screen and (min-width: 495px) {
    padding: 30px;
    align-items: center;
  }

  @media screen and (min-width: 650px) {
    /* height: 200px; */
    font-size: 16px;
  }
`;

const CardGradient = styled.div`
  top: 0;
  left: 0;
  width: 150px;
  height: 200px;
  position: absolute;
  background: radial-gradient(
    100% 100% at 0% 0%,
    hsla(0, 0%, 100%, 0.03),
    transparent
  );
  transition: all 0.1s ease-in;
`;

const CardActions = styled.div`
  gap: 30px;
  display: flex;
  align-self: flex-end;

  @media screen and (min-width: 650px) {
    gap: 30px;
    display: flex;
    align-self: flex-end;
  }
  * {
    font-size: 18px;
    transition: color 0.2s ease;
  }

  @media screen and (min-width: 650px) {
    * {
      font-size: 20px;
    }
  }
`;

const CardTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;

  @media screen and (min-width: 650px) {
    font-size: 16px;
    text-align: center;
  }
`;

const CardKeyWords = styled.div`
  display: flex;
  align-self: center;
  gap: 15px;
  font-size: 14px;
  margin-top: 20px;

  @media screen and (min-width: 540px) {
    display: flex;
    gap: 30px;
  }

  @media screen and (min-width: 495px) {
    display: flex;
    gap: 15px;
  }

  @media screen and (min-width: 460px) {
    align-self: inherit;
  }
`;

const CardLabel = styled.div`
  font-size: 11px;
  border-radius: 2px;
  border: 1px solid #444;

  padding: 4px;
  align-self: flex-start;
  margin-top: -10px;
  margin-left: -5px;
  display: flex;
  font-weight: 100;

  gap: 30px;
  margin-bottom: 10px;


  @media screen and (min-width: 650px) {
    font-size: 12px;
    padding: 5px;
    margin-bottom: 15px;
  }



`;

const Card = ({ children }) => {
  return (
    <StyledCard>
      <CardGradient />
      {children}
    </StyledCard>
  );
};

Card.Title = CardTitle;
Card.Label = CardLabel;
Card.KeyWords = CardKeyWords;
Card.Actions = CardActions;

export default Card;
