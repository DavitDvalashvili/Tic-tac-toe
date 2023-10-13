import styled from "styled-components";

export const NewGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  .logo-menu {
    width: auto;
    padding: 2em;
  }

  .pick-mark-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: #1f3641;
    box-shadow: inset 0px -8px 0px #10212a;
    border-radius: 10px;
  }

  .pick-mark-container__pick-player {
    padding: 2em;
    font-weight: 700;
    color: #a8bfc9;
  }

  .pick-mark-container__note {
    padding: 2em;
    font-size: 0.9rem;
    color: #a8bfc9;
    opacity: 0.5;
  }

  .xo-icons-menu {
    width: 50%;
    margin: auto;
  }

  .pick-xo-btn-container {
    background: #1a2a33;
    padding: 0.5em;
    border-radius: 10px;
  }

  .pick-o-btn,
  .pick-x-btn {
    border-radius: 10px;
    font-size: 2rem;
    padding: 0.4em 2.5em;
  }

  .pick-x-btn {
    background: transparent;
    border: none;
    color: #a8bfc9;
  }

  .pick-o-btn {
    background-color: #a8bfc9;
    border: none;
    color: #1a2a33;
  }

  .pick-x-btn:hover {
    background-color: #a8bfc90d;
  }

  .pick-o-btn:hover {
    background-color: #7b97a3;
  }

  .disabled {
    background-color: #a8bfc90d;
    cursor: not-allowed;
    font-size: 2rem;
    padding: 0.4em 2.5em;
    border-radius: 10px;
  }

  .new-game-btn-container {
    width: 100%;
    padding-top: 2em;
  }

  .new-game-btn {
    width: 100%;
    padding: 1.5em;
    padding-top: 1em;
    border-radius: 15px;
  }

  .vscpu {
    background: #f2b137;
    box-shadow: inset 0px -8px 0px #cc8b13;
  }

  .vscpu:hover {
    background: #ffc860;
    box-shadow: inset 0px -8px 0px #cc8b13;
  }

  .vsplayer {
    background: #31c3bd;
    box-shadow: inset 0px -8px 0px #118c87;
    margin-top: 1em;
  }

  .vsplayer:hover {
    background: #65e9e4;
    box-shadow: inset 0px -8px 0px #118c87;
  }

  @media (max-width: 420px) {
    .welcome-menu-container {
      width: 85%;
    }

    .logo-menu {
      padding: 2.5em;
    }

    .pick-x-btn,
    .pick-o-btn,
    .disabled {
      padding: 0.4em 1em;
    }

    .pick-mark-container__pick-player {
      padding: 1.5em;
    }

    .pick-mark-container__note {
      padding: 1.6em;
      padding-bottom: 2em;
    }
  }
`;
