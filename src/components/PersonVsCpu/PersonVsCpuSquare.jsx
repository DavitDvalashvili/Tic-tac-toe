/* eslint-disable react/prop-types */
import React from "react";
import xIcon from "../assets/icon-x.svg";
import oIcon from "../assets/icon-o.svg";
import xTransparent from "../assets/icon-x-transparent.svg";
import oTransparent from "../assets/icon-o-transparent.svg";
import styled from "styled-components";

function PvCSquare({
  value,
  onClick,
  winningCombination,
  index,
  winner,
  playerOne,
  playerCpu,
}) {
  let squareClass = "square-o-turn";

  if (winningCombination) {
    if (winningCombination.includes(index)) {
      if (value === "X") {
        squareClass = "winning-x-row square";
      } else if (value === "O") {
        squareClass = "winning-o-row square";
      }
    }
  } else {
    if (playerOne === "X" && playerCpu === "O") {
      squareClass = "square-x-turn";
    } else if (playerOne === "O" && playerCpu === "X") {
      squareClass = "square-o-turn";
    }
  }

  return (
    <StyledSquare
      className={value && !winningCombination ? "square" : squareClass}
      onClick={value ? null : onClick}
    >
      {winner && winningCombination.includes(index) ? (
        value === "X" ? (
          <img src={xTransparent} alt="X transparent icon" />
        ) : (
          <img src={oTransparent} alt="O transparent icon" />
        )
      ) : value === "X" ? (
        <img src={xIcon} alt="X icon" />
      ) : value === "O" ? (
        <img src={oIcon} alt="O icon" />
      ) : null}
    </StyledSquare>
  );
}

export default PvCSquare;

export const StyledSquare = styled.button`
  height: 9em;
  width: 9em;
  padding: 2em;
  background: #1f3641;
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;
  border: none;

  .square-o-turn {
    height: 9em;
    width: 9em;
    padding: 2em;
    background: #1f3641;
    box-shadow: inset 0px -8px 0px #10212a;
    border-radius: 15px;
    border: none;
  }

  .square-x-turn {
    height: 9em;
    width: 9em;
    padding: 2em;
    background: #1f3641;
    box-shadow: inset 0px -8px 0px #10212a;
    border-radius: 15px;
    border: none;
  }

  .square-o-turn:hover {
    background-image: url(../assets/icon-o-outline.svg);
    background-repeat: no-repeat;
    background-position: center;
  }

  .square-x-turn:hover {
    background-image: url(../assets/icon-x-outline.svg);
    background-repeat: no-repeat;
    background-position: center;
  }

  .winning-x-row {
    background-color: #31c3bd;
  }

  .winning-o-row {
    background-color: #f2b137;
  }

  @media (max-width: 420px) {
    .square,
    .square-o-turn,
    .square-x-turn {
      width: 6.5em;
      height: 6.5em;
      padding: 1.3em 1.3em 1.5em 1.5em;
    }
  }
`;
