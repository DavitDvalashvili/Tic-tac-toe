/* eslint-disable react/prop-types */
import React from 'react';
import PvCSquare from './PersonVsCpuSquare';
import styled from 'styled-components';

function PvCBoard({
  board,
  onClick,
  winningCombination,
  winner,
  className,
  playerOne,
  playerCpu,
}) {
  return (
    <StyledBoard>
      {board.map((square, i) => (
        <PvCSquare
          key={i}
          winningCombination={winningCombination}
          winner={winner}
          playerOne={playerOne}
          playerCpu={playerCpu}
          className={className}
          value={square}
          onClick={() => onClick(i)}
          index={i}
        />
      ))}
    </StyledBoard>
  );
}
export default PvCBoard;

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
`;
