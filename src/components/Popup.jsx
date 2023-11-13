import React from 'react'
import { Link } from 'react-router-dom';

export default function Popup (props) {
  let isWinner = props.totalPoints > (props.levelPoint/2) ? true : false;
  let comment = isWinner ? "got to the next level" : "restart game";
  return ( props.submit ? 
    (
        <div className='popup'>
            <div className="popup-container">
                <h1 className='popup-txt'>
                    You get <span style={{color:"red"}}>{props.totalPoints}</span> / 
                    <span style={{color:"red"}}>{props.levelPoint}</span>
                    , {comment}
                </h1>
                <div className='popup-btns'>
                    <button onClick={(e)=>{props.restartGame()}}>
                        <Link to="/" className='restart-link'>Restart game</Link>
                    </button>
                    {isWinner && <button onClick={(e)=>{props.nextLevl()}}>Next Level</button>}
                </div>
            </div>
        </div>
    ): ""
  )
}
