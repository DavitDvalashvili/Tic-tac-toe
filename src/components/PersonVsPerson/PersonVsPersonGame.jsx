/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { calculateWinner } from '../../helper';
/* assets */
import grayXIcon from '../assets/icon-x-gray.svg';
import grayOIcon from '../assets//icon-o-gray.svg';
import logo from '../assets/logo.svg';
import resetBtn from '../assets/icon-restart.svg';
/* components */
import PvPBoard from './PersonVsPersonBoard';
import PvPScoreDisplay from './PersonVsPersonScoreDisplay';
import PvPWinnerModal from './PersonVsPersonWinnerModal';
import RestartModal from '../UI/RestartModal';
import styled from 'styled-components';



function PvPGame(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [restart, setRestart] = useState(false);

  const { winner, winningCombination } = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    // If user click a filled in square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Insert an O or an X into the square depending on the player
    let value = 'O';
    if (xIsNext) {
      if (props.playerOne === 'X' || props.playerTwo === 'X') {
        value = 'X';
      } else if (props.playerOne === 'O' || props.playerTwo === 'O') {
        value = 'O';
      }
    }

    boardCopy[i] = value;
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
  }

  function resetGame() {
    setBoard(Array(9).fill(null), setXScore(0), setOScore(0), setTieScore(0));
    setRestart(false);
  }

  useEffect(() => {
    if (winner) {
      if (winner === 'X') {
        setXScore((score) => score + 1);
      } else if (winner === 'O') {
        setOScore((score) => score + 1);
      }
    } else if (winner === null && !board.includes(null)) {
      setTieScore((score) => score + 1);
    }
  }, [winner, board]);

  return (
    <>
      <GameContainer>
        <header>
          <img src={logo} alt="picture of tic tac toe logo" className="logo" />
          <div className="turn-display-container">
            <div className="turn-display">
              {winner || (winner === null && !board.includes(null)) ? (
                <PvPWinnerModal
                  onResetBoard={resetBoard}
                  winner={winner}
                  onShowMenu={props.onShowMenu}
                  onRefreshPage={props.onRefreshPage}
                  board={board}
                  playerOne={props.playerOne}
                  playerTwo={props.playerTwo}
                />
              ) : xIsNext ? (
                <img src={grayXIcon} alt="gray X icon" className="xo-icons" />
              ) : (
                <img src={grayOIcon} alt="gray O icon" className="xo-icons" />
              )}{' '}
              Turn
            </div>
          </div>
          {restart && (
            <RestartModal
              onRestartGame={resetGame}
              onCancel={() => setRestart(false)}
            />
          )}
          <button onClick={() => setRestart(true)} className="reset-button">
            <img src={resetBtn} alt="reset button" />
          </button>
        </header>
        <PvPBoard
          winningCombination={winningCombination}
          winner={winner}
          board={board}
          onClick={handleClick}
          xIsNext={xIsNext}
          playerOne={props.playerOne}
          playerTwo={props.playerTwo}
        />
        <PvPScoreDisplay
          xScore={xScore}
          tieScore={tieScore}
          oScore={oScore}
          playerOne={props.playerOne}
          playerTwo={props.playerTwo}
        />
      </GameContainer>
    </>
  );
}

export default PvPGame;

export const GameContainer = styled.div`
  header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2em;
}

.logo {
  width: auto;
}

.turn-display-container {
  display: flex;
  background: #1f3641;
  box-shadow: inset 0px -4px 0px #10212a;
  border-radius: 10px;
  height: 3.5em;
  width: 9em;
}

.turn-display {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: #a8bfc9;
  padding: 1em;
}

.reset-button {
  padding: 1em;
  background: #a8bfc9;
  box-shadow: inset 0px -4px 0px #6b8997;
  border-radius: 10px;
}

.reset-button:hover {
  background: #dbe8ed;
  box-shadow: inset 0px -4px 0px #6b8997;
}

.xo-icons {
  width: auto;
}

@media (max-width: 420px) {
  header {
    width: 80%;
    margin: auto;
  }

  .score-display {
    width: 80%;
    margin: auto;
    gap: 1em;
  }
}

`