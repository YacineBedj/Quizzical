export let levels = [
    {amount: "4", difficulty: "easy"},
    {amount: "7", difficulty: "medium"},
    {amount: "10", difficulty: "hard"}
]


export let demoQuizs = [
      {
        "category": "Entertainment: Cartoon & Animations",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was the first Disney movie to use CGI?",
        "correct_answer": "The Black Cauldron",
        "incorrect_answers": [
          "Tron",
          "Toy Story",
          "Fantasia"
        ]
      },
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the name of Ross&#039; pet monkey on &quot;Friends&quot;?",
        "correct_answer": "Marcel",
        "incorrect_answers": [
          "Jojo",
          "George",
          "Champ"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many normal endings are there in Cry Of Fear&#039;s campaign mode?",
        "correct_answer": "4",
        "incorrect_answers": [
          "5",
          "3",
          "6"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When did The Beatles release the LP &quot;Please Please Me&quot;?",
        "correct_answer": "1963",
        "incorrect_answers": [
          "1970",
          "1960",
          "1969"
        ]
      }
    ]
export function totalPoints(correctAnswers, choisedAnswer){
      console.log("corr ", correctAnswers)
      let counter = 0;
      for(let i = 0; i < correctAnswers.length; i++){
          if(correctAnswers[i]===choisedAnswer[i]){
              counter++
          }
      }
      return counter;
  }
export function generateRandoms(length){
      let randoms = [];
      for(let i = 0; i<length; i++){
          randoms.push(Math.floor(Math.random() * 4))
      }
      return(randoms)
  }