import React from 'react'
import './Scoreboard.css'


function Scoreboard({Scores,xPlaying}) {

    const {XScore,OScore} = Scores;

  return (
    <div className='scoreboard'>

        <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {XScore} </span>
        <span className={`score o-score ${xPlaying && 'inactive'}`}>O - {OScore} </span>

        

    </div>
  )
}

export default Scoreboard