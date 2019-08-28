'use strict'

// add players to game

// const player = "";
// document.getElementById('player')


//when clickedf from HTML-  will fetch question from api and offer to player in question box
function getQuestion() {
    console.log("str")
    fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple")
        .then((res) =>
         { 
            return res.json()
        })
        .then((data)=> {
            console.log(data)
            let questionBox = document.getElementById('questionBox');
            
            const asked = document.createElement('div');
            asked.innerText = data.results[0].question;
            
            questionBox.style.fontSize= "30px";
            questionBox.style.textAlign="center";
            questionBox.style.alignItems="center";
            questionBox.style.maxWidth="500px";
            questionBox.append(asked);
            console.log(data.results[0].question)

            let correct_answer = data.results[0].correct_answer;
            console.log(correct_answer);
            let incorrect_answers = data.results[0].incorrect_answers;
                incorrect_answers.forEach(function(answer) {
                    console.log(answer)
                })
            
            let allAnswers = incorrect_answers;
            allAnswers.push(correct_answer)
            
            console.log(allAnswers);

            let shuffled = allAnswers
                .map((a)=> ({sort: Math.random(),value:a}))
                .sort((a,b) => a.sort - b.sort)
                .map((a)=>a.value)
                console.log(shuffled)

            let answerBox = document.getElementById('answers');
           // document.write(unescape(allAnswers));
            answerBox.append(allAnswers);
            answerBox.style.fontSize= "30px";
            answerBox.style.textAlign="center";
            answerBox.style.alignItems="center";
            answerBox.style.maxWidth="500px";
        })
    }
// const player = document.getElementsByClassName('player')

//     document.forms["player"].submit();
// }





//question T/F https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean

//    https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple


 // var listing = allAnswers.map(function(answer) {
            // let AnswerList = document.createElement('listItem');
            // AnswerList.innerHTML = answer;
            // return AnswerList;
            // })
            