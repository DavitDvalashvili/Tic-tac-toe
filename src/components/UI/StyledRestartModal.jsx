import styled from 'styled-components';

const StyledRestartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  .restart-modal {
    position: fixed;
    top: 34vh;
    width: 100%;
    background-color: #1f3641;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em;
    gap: 2em;
  }

  .restart-message {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #a8bfc9;
  }

  .restart-modal-button-container {
    display: flex;
    gap: 1em;
  }

  .cancel-button {
    padding: 1em;
    background: #a8bfc9;
    box-shadow: inset 0px -4px 0px #6b8997;
    border-radius: 10px;
  }

  .restart-button {
    padding: 1em;
    background: #f2b137;
    box-shadow: inset 0px -4px 0px #cc8b13;
    border-radius: 10px;
  }

  .cancel-button:hover {
    background: #dbe8ed;
    box-shadow: inset 0px -4px 0px #6b8997;
  }

  .restart-button:hover {
    background: #ffc860;
    box-shadow: inset 0px -4px 0px #cc8b13;
  }
`;

export default StyledRestartModal;
