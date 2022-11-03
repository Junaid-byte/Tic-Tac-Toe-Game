import React from 'react'
import './Box.css';

function Box({value,Click}) {

    const style = value === "X" ? 'box x' : 'box o';

    


  return (
    <button className={style} onClick = {Click}>{value}</button>
  )
}

export default Box