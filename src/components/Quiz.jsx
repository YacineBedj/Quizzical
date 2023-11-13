import React from 'react'
import { nanoid } from 'nanoid'
import getData from './utils/fetchFromApi'
import { levels, demoQuizs } from './utils/constant'
import { generateRandoms } from './utils/constant'
import { totalPoints } from './utils/constant'
import Input from './Input'
import Popup from './Popup'


let randomIndexs = generateRandoms(20)
const Quiz = () => {
    let [selectedLevel, setSelectedLevel] = React.useState(0)
    let [allQuiz, setAllQuiz]  = React.useState(demoQuizs)
    React.useEffect(()=>{
        getData(levels[selectedLevel].amount, levels[selectedLevel].difficulty)
            .then((data)=>{setAllQuiz(data.results)})
    },[selectedLevel])
    let [choises, setChoises] = React.useState(["", "", "", "","", "", "", "", "","", "", "", "","", "", "", "", ""])
    choises.length = levels[selectedLevel].amount
    let [submit, setSubmit] = React.useState(false);

    console.log(randomIndexs)
return (
    <div className='quiz-container'>
    { allQuiz.map((quiz, index) =>{
        let ansewrEle = [];
        let randomNum = randomIndexs[index];

        for(let i = 0, j= 0; i < 4 ; i++){
            if(i === randomNum){
                ansewrEle.push(<Input 
                                    key={nanoid()}
                                    id={index}
                                    isTrue={submit ? "true" : ""} 
                                    isSelected={(quiz.correct_answer === choises[index])}
                                    value = {quiz.correct_answer}
                                    change={(index, value)=>{
                                        console.log(choises);
                                        setChoises((oldChoise)=>{
                                            return oldChoise.map((choise, i)=> index === i ? value : choise)
                                        })
                                    }}
                                />);
            }else{
                ansewrEle.push(<Input 
                                    key={nanoid()}
                                    id={index}
                                    isTrue={submit ? "false" : ""} 
                                    isSelected={(quiz.incorrect_answers[j]=== choises[index])}
                                    value = {quiz.incorrect_answers[j]}
                                    change={(index, value)=>{
                                        setChoises((oldChoise)=>{
                                            return oldChoise.map((choise, i)=> index === i ? value : choise)
                                        })
                                    }}
                                />)
                j++;
            }
        }
        return (
            <div className='quiz' key={nanoid()}>
                <h2>{quiz.question}</h2>
                <form action="">
                    {ansewrEle}
                </form>
            </div>
    )
    })}
    <button className='submit' onClick={()=>{setSubmit(true)}}>Submit</button>
    <Popup 
        submit={submit}
        levelPoint = {levels[selectedLevel].amount}
        totalPoints = {totalPoints(allQuiz.map((quiz)=>quiz.correct_answer), choises)}
        restartGame={()=>{
            setSelectedLevel(0)
            setChoises(["", "", "", "","", "", "", "", "","", "", "", "","", "", "", "", ""])
            choises.length = levels[selectedLevel].amount
            setSubmit(false)
        }}
        nextLevl={()=>{
            setSelectedLevel((oldLevel)=>{return oldLevel < 2 ? oldLevel+1 : 0})
            setChoises(["", "", "", "","", "", "", "", "","", "", "", "","", "", "", "", ""])
            choises.length = levels[selectedLevel].amount
            setSubmit(false)
        }}
    />
    </div>
  )
}

export default Quiz