/* eslint-disable react/prop-types */
import React from "react";
import xIcon from "../assets/icon-x.svg";
import oIcon from "../assets/icon-o.svg";
import styled from "styled-components";

function PvPWinnerModal(props) {
  return (
    <StyledWinnerModal>
      <div className="winner-modal">
        <p className="show-winner-message">
          {props.winner === "X" && props.playerOne === "X"
            ? "Player 1 Wins!"
            : props.winner === "O" && props.playerOne === "O"
            ? "Player 1 Wins!"
            : props.winner === "X" && props.playerTwo === "X"
            ? "Player 2 Wins!"
            : props.winner === "O" && props.playerTwo === "O"
            ? "Player 2 Wins!"
            : props.winner === null && !props.board.includes(null)
            ? ""
            : ""}
        </p>
        <div className="show-winner-icon-container">
          {props.winner === "X" ? (
            <img src={xIcon} alt="" className="winner-icon" />
          ) : props.winner === "O" ? (
            <img src={oIcon} alt="" className="winner-icon" />
          ) : props.winner === null && !props.board.includes(null) ? (
            ""
          ) : (
            {}
          )}
          {props.winner === null && !props.board.includes(null) ? (
            <p className="tied-message">round tied</p>
          ) : (
            <p
              className={
                props.winner === "X"
                  ? "winner-x-icon-message"
                  : "winner-o-icon-message"
              }
            >
              takes the round
            </p>
          )}
        </div>
        <div className="winner-modal-button-container">
          <button
            className="quit-button"
            onClick={() => {
              props.onShowMenu();
              props.onRefreshPage();
            }}
          >
            Quit
          </button>
          <button className="next-round-button" onClick={props.onResetBoard}>
            Next Round
          </button>
        </div>
      </div>
    </StyledWinnerModal>
  );
}

export default PvPWinnerModal;

export const StyledWinnerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  .winner-icon {
    width: auto;
  }

  .winner-modal {
    position: fixed;
    top: 34vh;
    width: 100%;
    background-color: #1f3641;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }

  .show-winner-icon-container {
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 1em;
  }

  .winner-modal-button-container {
    display: flex;
    gap: 1em;
    padding: 1em;
  }

  .show-winner-message {
    padding: 1em;
    color: white;
  }

  .winner-o-icon-message {
    color: #f2b137;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .winner-x-icon-message {
    color: #31c3bd;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .tied-message {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #a8bfc9;
  }

  .quit-button {
    padding: 1em;
    background: #a8bfc9;
    box-shadow: inset 0px -4px 0px #6b8997;
    border-radius: 10px;
  }

  .next-round-button {
    padding: 1em;
    background: #f2b137;
    box-shadow: inset 0px -4px 0px #cc8b13;
    border-radius: 10px;
  }

  .next-round-button:hover {
    background: #ffc860;
    box-shadow: inset 0px -4px 0px #cc8b13;
  }

  .quit-button:hover {
    background: #dbe8ed;
    box-shadow: inset 0px -4px 0px #6b8997;
  }

  @media (max-width: 420px) {
    .winner-o-icon-message,
    .winner-x-icon-message {
      font-size: 2rem;
    }
  }
`;
