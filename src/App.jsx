import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Start } from "./components/Start"
import Quiz from "./components/Quiz"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
  )
}
