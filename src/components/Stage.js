import React from 'react';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <div>
    (stage.map(now => row.map((cell, x) => <cell key={x} type={cell[0]} />))}

  </div>
);

export default Stage;
