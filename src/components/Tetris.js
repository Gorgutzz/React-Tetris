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

  };

  const keyUp = ({ keyCode }) => {

  };

  const startGame = () => {

  };

  const drop = () => {

  };

  const dropPlayer = () => {

  };

  const move = ({ keyCode }) => {

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
