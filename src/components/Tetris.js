import React, { useState } from 'react';

import { createStage } from '../gameHelpers';
import { styledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');

  const movePlayer = dir => {
    updatePlayerPost({ x: dir, y: 0 });
  };

  const keyUp = ({ keyCode }) => {

  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPost({ x: 0, y: 1, collided: false })
  };

  const dropPlayer = () => {

  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <styledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          }}
          <StartButton />
        </aside>
      </StyledTetris>
    </styledTetrisWrapper>
  );
};

export default Tetris;
