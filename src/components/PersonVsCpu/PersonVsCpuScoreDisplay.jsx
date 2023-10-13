/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

function PvCScoreDisplay(props) {
  return (
    <StyledDisplay>
      <div className="x-score score">
        <p>{props.playerOne === "X" ? "X (P1)" : "X (CPU)"}</p>
        <p className="score-number">{props.xScore}</p>
      </div>
      <div className="tie-score score">
        <p>Ties</p>
        <p className="score-number">{props.tieScore}</p>
      </div>
      <div className="o-score score">
        <p>{props.playerOne === "O" ? "O (P1)" : "O (CPU)"}</p>
        <p className="score-number">{props.oScore}</p>
      </div>
    </StyledDisplay>
  );
}

export default PvCScoreDisplay;

export const StyledDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5em;

  .score {
    border-radius: 15px;
    width: 9em;
    height: 4.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .score-number {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .x-score {
    background: #31c3bd;
  }

  .tie-score {
    background: #a8bfc9;
  }

  .o-score {
    background: #f2b137;
  }
`;
