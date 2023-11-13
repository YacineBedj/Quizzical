import React from 'react'
import { Link } from 'react-router-dom'

export  function Start() {
  return (
    <div className='start'>
        <h1>Quizzical</h1>
        <p>You will find some quiz and try to ansewr it to get the best record you can,
           if you solve more than half of question you will pass to the next level. . . GoodLuck
           </p>
        <button>
          <Link to="/quiz" className='start-btn'>
            get start
          </Link>
        </button>
    </div>
  )
}


