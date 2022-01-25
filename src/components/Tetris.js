import React from 'react';

import { createStage } from '../gameHelpers';
import { styledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = ({ callback }) => (

  return (
    <styledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage{}} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </styledTetrisWrapper>
  );
);

export default Tetris;
