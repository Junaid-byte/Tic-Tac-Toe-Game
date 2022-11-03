import React from 'react'
import Box from './Box'
import './Board.css';

function Board({board,Click}) {
  return (
    <div className='board'>

        {
            board.map((value,index) =>
            {
                return <Box value={value} Click={() => value === null && Click(index) } />
            })
        }
    
    </div>
  )
}

export default Board