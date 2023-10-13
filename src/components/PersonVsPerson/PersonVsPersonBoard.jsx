/* eslint-disable react/prop-types */
import React from "react";
import PvPSquare from "./PersonVsPersonSquare";
import styled from 'styled-components';

function PvPBoard({ board, onClick, winningCombination, winner, className, playerOne, playerTwo, xIsNext }) {
  return (
    <StyledBoard>
      {board.map((square, i) => (
        <PvPSquare
          key={i}
          winningCombination={winningCombination}
          winner={winner}
          xIsNext={xIsNext}
          playerOne={playerOne}
          playerTwo={playerTwo}
          className={className}
          value={square}
          onClick={() => onClick(i)}
          index={i}
        />
      ))}
    </StyledBoard>
  );
}
export default PvPBoard;


export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  justify-content: center;
  @media (max-width: 420px) {
    .board {
      grid-template-columns: repeat(3, 6.5em);
    }
  }
`